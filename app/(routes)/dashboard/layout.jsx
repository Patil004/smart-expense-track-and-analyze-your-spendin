"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import Footer from "@/app/_components/footer";// Import Footer
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    if (result?.length == 0) {
      router.replace("/dashboard/budgets");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64 flex-grow">
        <DashboardHeader />
        {children}
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default DashboardLayout;
