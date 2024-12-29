"use client";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ExpenseListTable from "./_components/ExpenseListTable";
import { useUser } from "@clerk/nextjs";

function ExpensesScreen() {
  const [expensesList, setExpensesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useUser();
  
  // Set the conversion rate (example rate, 1 USD = 80 INR)
  const conversionRate = 80; // Update this rate dynamically if needed

  useEffect(() => {
    if (user) {
      getAllExpenses();
    }
  }, [user]);

  /**
   * Used to get all expenses that belong to users
   */
  const getAllExpenses = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await db
        .select({
          id: Expenses.id,
          name: Expenses.name,
          amount: Expenses.amount,
          createdAt: Expenses.createdAt,
        })
        .from(Budgets)
        .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
        .orderBy(desc(Expenses.id));

      // Convert the amount to INR
      const expensesInINR = result.map((expense) => ({
        ...expense,
        amount: (expense.amount * conversionRate).toFixed(2), // Convert to INR
      }));
      
      setExpensesList(expensesInINR);
    } catch (err) {
      setError("Failed to fetch expenses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">My Expenses</h2>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : expensesList.length > 0 ? (
        <ExpenseListTable
          refreshData={() => getAllExpenses()}
          expensesList={expensesList}
        />
      ) : (
        <div>No expenses found. Start adding your expenses.</div>
      )}
    </div>
  );
}

export default ExpensesScreen;
