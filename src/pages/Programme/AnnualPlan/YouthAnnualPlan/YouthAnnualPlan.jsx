import "./YouthAnnualPlan.css";

const plans = [
  {
    title: "BSGWB ANNUAL CALENDAR 2026-27",
    pdf: "/youth-plans/bsgWB-annual-calendar-2026-27.pdf"
  },
  {
    title: "BSGWB ANNUAL CALENDAR 2025-26",
    pdf: "/youth-plans/bsgWB-annual-calendar-2025-26.pdf"
  },
  {
    title: "BSGWB ANNUAL CALENDAR 2024-25",
    pdf: "/youth-plans/bsgWB-annual-calendar-2024-25.pdf"
  },
  {
    title: "BSGWB ANNUAL CALENDAR 2023-24",
    pdf: "/youth-plans/bsgWB-annual-calendar-2023-24.pdf"
  },
];

const YouthAnnualPlan = () => {
  return (
    <section className="youth-plan-page">
      <div className="youth-plan-header">
        <h1>Youth Annual Plan</h1>
      </div>

      <div className="youth-plan-table">
        {plans.map((item, index) => (
          <div key={index} className="plan-row">
            <div className="plan-title">{item.title}</div>
            <a 
              href={item.pdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="plan-btn"
            >
              CLICK HERE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouthAnnualPlan;