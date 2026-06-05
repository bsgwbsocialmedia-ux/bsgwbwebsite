import "./YouthAnnualPlan.css";

const plans = [
  "BSGUP ANNUAL CALENDAR 2026-27",
  "BSGUP ANNUAL CALENDAR 2025-26",
  "BSGUP ANNUAL CALENDAR 2024-25",
  "BSGUP ANNUAL CALENDAR 2023-24",
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
            <div className="plan-title">{item}</div>
            <button className="plan-btn">CLICK HERE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouthAnnualPlan;