import "./AdultAnnualPlan.css";

const plans = [
  {
    title: "BSGUP ANNUAL CALENDAR 2026-27",
    pdf: "/adult-plans/bsgup-annual-calendar-2026-27.pdf"
  },
  {
    title: "BSGUP ANNUAL CALENDAR 2025-26",
    pdf: "/adult-plans/bsgup-annual-calendar-2025-26.pdf"
  },
  {
    title: "BSGUP ANNUAL CALENDAR 2024-25",
    pdf: "/adult-plans/bsgup-annual-calendar-2024-25.pdf"
  },
  {
    title: "BSGUP ANNUAL CALENDAR 2023-24",
    pdf: "/adult-plans/bsgup-annual-calendar-2023-24.pdf"
  },
];

const AdultAnnualPlan = () => {
  return (
    <section className="adult-plan-page">
      <div className="adult-plan-header">
        <h1>Adult Annual Plan</h1>
      </div>

      <div className="adult-plan-table">
        {plans.map((item, index) => (
          <div key={index} className="adult-row">
            <div className="adult-title">{item.title}</div>
            <a 
              href={item.pdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="adult-btn"
            >
              CLICK HERE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdultAnnualPlan;