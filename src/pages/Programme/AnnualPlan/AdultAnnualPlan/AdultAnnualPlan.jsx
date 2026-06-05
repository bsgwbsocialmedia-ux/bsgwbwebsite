import "./AdultAnnualPlan.css";

const plans = [
  "BSGUP ANNUAL CALENDAR 2026-27",
  "BSGUP ANNUAL CALENDAR 2025-26",
  "BSGUP ANNUAL CALENDAR 2024-25",
  "BSGUP ANNUAL CALENDAR 2023-24",
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
            <div className="adult-title">{item}</div>
            <button className="adult-btn">CLICK HERE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdultAnnualPlan;