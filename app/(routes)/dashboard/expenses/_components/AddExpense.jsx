import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses, Incomes } from "@/utils/schema";
import { Loader } from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { eq } from "drizzle-orm";

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [incomeList, setIncomeList] = useState([]);
  const [selectedIncome, setSelectedIncome] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Fetch the list of incomes for the user
   */
  useEffect(() => {
    const fetchIncomes = async () => {
      const result = await db
        .select()
        .from(Incomes)
        .where(eq(Incomes.createdBy, user?.primaryEmailAddress?.emailAddress));
      setIncomeList(result);
    };

    user && fetchIncomes();
  }, [user]);

  /**
   * Used to Add New Expense
   */
  const addNewExpense = async () => {
    setLoading(true);

    // Insert the new expense into the Expenses table
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: Number(amount),
        budgetId: budgetId,
        createdAt: moment().format("DD/MM/yyyy"),
      })
      .returning({ insertedId: Expenses.id });

    if (result) {
      // Deduct the expense amount from the selected income
      await db
        .update(Incomes)
        .set({
          totalSpend: sql`${Incomes.totalSpend} + ${Number(amount)}`,
        })
        .where(eq(Incomes.id, selectedIncome));

      setAmount("");
      setName("");
      setSelectedIncome("");
      setLoading(false);
      refreshData();
      toast("New Expense Added!");
    }
    setLoading(false);
  };

  return (
    <div className="border p-5 rounded-2xl">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Name</h2>
        <Input
          placeholder="e.g. Bedroom Decor"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Amount</h2>
        <Input
          placeholder="e.g. 1000"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Spent From</h2>
        <select
          value={selectedIncome}
          onChange={(e) => setSelectedIncome(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>
            Select Income Source
          </option>
          {incomeList.map((income) => (
            <option key={income.id} value={income.id}>
              {income.name} - ₹{income.amount - income.totalSpend} Remaining
            </option>
          ))}
        </select>
      </div>
      <Button
        disabled={!(name && amount && selectedIncome) || loading}
        onClick={() => addNewExpense()}
        className="mt-3 w-full rounded-full"
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
