import Link from "next/link";
import React from "react";

function IncomeItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };

  const formatToINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const handleClick = () => {
    // Example action: Redirect to a detailed page
    window.location.href = `/income/${budget.id}`;
    // Alternatively, you can use `router.push` from Next.js if available
    // router.push(`/income/${budget.id}`);
  };

  return (
    <div
      className="p-5 border rounded-2xl hover:shadow-md cursor-pointer h-[170px]"
      onClick={handleClick} // Add click handler here
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className="text-2xl p-3 px-4 bg-slate-100 rounded-full"
          >
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.name}</h2>
            <h2 className="text-sm text-gray-500">{budget.totalItem} Items</h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-lg">
          {formatToINR(budget.amount)}
        </h2>
      </div>
      <div className="mt-4">
        <h2 className="text-sm text-gray-600">
          Total Spend: {formatToINR(budget.totalSpend)}
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
          <div
            className="bg-primary h-2.5 rounded-full"
            style={{ width: `${calculateProgressPerc()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
