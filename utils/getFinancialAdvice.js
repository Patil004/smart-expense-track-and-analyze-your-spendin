// utils/getFinancialAdvice.js

const mockFinancialRecommendations = [
    "As you invest in IPO's, here are some Upcoming IPO's: \n- Leo Dryfruits And Spices Trading\n- Dravin Sons Retail\n- Parmeshwar Metal",
    "Allocate at least 20% of your income towards savings to build a strong financial cushion.",
    "Track your daily expenses to identify areas where you can cut unnecessary spending.",
    "Consider investing in diversified mutual funds for long-term wealth creation.",
    "Set aside a fixed percentage of your income each month for emergency funds.",
    "Reduce discretionary expenses like dining out to stay within your budget.",
    "Focus on paying off high-interest debts like credit cards to save on interest.",
    "Invest in tax-saving instruments to reduce your annual tax liability.",
    "Create a monthly financial plan to track income, expenses, and savings effectively.",
    "Avoid impulse buying by making a shopping list before visiting stores.",
    "Use a budgeting tool or app to automate and simplify financial tracking.",
    "Set short-term and long-term financial goals to stay motivated and focused.",
    "Diversify your investment portfolio to mitigate risks and maximize returns.",
    "Review and optimize your insurance coverage to safeguard against unforeseen events.",
    "Consider refinancing loans if you can secure a lower interest rate.",
    "Plan for retirement by investing in long-term assets like pension funds or stocks.",
    "Cut down on subscription services you rarely use to save more money monthly.",
    "Leverage cashback offers and discounts while making purchases to save more.",
    "Reinvest dividends and interest income to compound your wealth over time.",
    "Monitor your credit score regularly to maintain a healthy financial profile.",
    "Prioritize needs over wants when allocating your monthly income.",
    "Explore IPO opportunities in sectors like technology, healthcare, and energy.",
    "Use dollar-cost averaging to minimize risks when investing in volatile markets.",
    "Establish a contingency fund that covers at least six months of expenses.",
    "Invest in education to enhance your earning potential in the long term.",
    "Automate bill payments to avoid late fees and penalties.",
    "Research the company thoroughly before investing in its IPO.",
    "Track stock market trends to identify the best entry points for investments.",
    "Choose low-cost index funds for consistent returns with minimal expenses.",
    "Start a side hustle to supplement your primary income.",
    "Evaluate financial products for hidden fees and charges.",
    "Bundle insurance policies to get discounts on premiums.",
    "Contribute to employer-sponsored retirement plans to maximize benefits.",
    "Sell unused items to declutter and generate extra cash.",
    "Adopt a minimalist lifestyle to focus on saving and investing.",
    "Negotiate better rates with service providers like internet or cable.",
    "Review your financial goals annually and adjust as needed.",
    "Explore government-backed savings schemes for risk-free returns.",
    "Avoid timing the market; focus on consistent, long-term investments.",
    "Develop a diversified real estate investment strategy.",
    "Keep an emergency credit card for unexpected expenses.",
    "Invest in blue-chip stocks for stable growth and dividends.",
    "Participate in financial literacy programs to improve decision-making.",
    "Use mobile apps to track and categorize expenses efficiently.",
    "Monitor global economic indicators to predict market trends.",
    "Limit exposure to high-risk investments to protect your portfolio.",
    "Explore green energy investments for potential tax benefits.",
    "Avoid borrowing money for non-essential purchases.",
    "Evaluate your net worth periodically to gauge financial health.",
    "Reinvest capital gains for compounded wealth creation.",
    "Seek professional financial advice for complex investments.",
    "Invest in yourself by learning high-income skills.",
    "Utilize cashback cards for purchases to save on everyday expenses.",
    "Subscribe to financial newsletters to stay updated on market opportunities.",
    "Avoid withdrawing retirement savings early to prevent penalties.",
    "Leverage employer matching contributions for retirement funds.",
    "Use financial tools to simulate scenarios and make informed decisions.",
    "Regularly review and rebalance your investment portfolio.",
    "Limit your debt-to-income ratio to maintain financial flexibility.",
    "Participate in peer-to-peer lending cautiously for better returns.",
    "Plan vacations during the off-season to save on travel costs.",
    "Bundle streaming subscriptions with family or friends to save.",
    "Purchase generic brands for essential items to cut costs.",
    "Use public transport to save on fuel and maintenance expenses.",
    "Explore online courses to upskill at a lower cost.",
    "Sell high-value collectibles if they no longer bring joy.",
    "Participate in community investment opportunities.",
    "Keep an eye on inflation and adjust your savings strategy accordingly.",
    "Avoid co-signing loans unless you are prepared to take responsibility.",
    "Use price comparison tools before making major purchases.",
    "Build a passive income stream through investments or online ventures.",
    "Track IPO news and updates to capitalize on new market opportunities.",
    "Evaluate expense categories and prioritize essential spending.",
    "Choose high-yield savings accounts to maximize your interest earnings.",
    "Declutter subscriptions by assessing usage and cancelling non-essential ones.",
    "Understand financial ratios when evaluating IPO offerings.",
    "Switch to energy-efficient appliances to save on electricity bills.",
    "Opt for shared rides or carpooling to reduce commuting expenses.",
    "Invest in ETFs for diversified exposure to different markets.",
    "Make financial decisions based on logic rather than emotions.",
    "Plan large purchases around seasonal discounts and sales.",
    "Look into gold or silver investments as a hedge against inflation.",
    "Understand the power of compound interest to grow your wealth.",
    "Pay off loans with the highest interest rates first to save money.",
    "Leverage tax deductions and credits to reduce your tax burden.",
    "Explore crowd-funding platforms to support innovative startups.",
    "Understand risk tolerance before entering high-volatility markets.",
    "Split savings into short-term, medium-term, and long-term goals.",
    "Be cautious of get-rich-quick schemes that promise unrealistic returns.",
    "Invest in high-growth sectors like AI, EVs, and renewable energy.",
    "Consider SIPs (Systematic Investment Plans) for disciplined investing.",
    "Save windfall income (bonuses, gifts) instead of spending it immediately.",
    "Focus on financial independence over materialistic goals.",
    "Regularly audit your budget to ensure it aligns with your goals.",
    "Prioritize health insurance to avoid medical financial strain.",
    "Leverage robo-advisors for simplified investment management.",
  ];
  
  const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
    try {
      console.log(totalBudget, totalIncome, totalSpend);
  
      const randomAdvice =
        mockFinancialRecommendations[
          Math.floor(Math.random() * mockFinancialRecommendations.length)
        ];
  
      console.log(randomAdvice);
      return randomAdvice;
    } catch (error) {
      console.error("Error fetching financial advice:", error);
      return "Error generating financial advice. Please try again later.";
    }
  };
  
  export default getFinancialAdvice;
  
