import './FinancialPolicy.css';

export default function FinancialPolicy() {

  return (
    <div className="financial-page">

      <div className="financial-hero">
        <h1>Financial Policy</h1>
        <p>
          Understanding the financial structure and guidelines of the Bharat Scouts and Guides Association.
        </p>
      </div>

      <div className="financial-list">
        <div className="financial-item red">
          <span className="financial-icon">📌</span>
          <p>The Bharat Scouts and Guides Association is voluntary and non-official in character.</p>
        </div>

        <div className="financial-item blue">
          <span className="financial-icon">🏛️</span>
          <p>
            The income of the National Association shall consist of income from the properties of the Association, if any. Affiliation Fees and individual Registration Fee, subscription from the Members, donations and contributions from the public, special funds raised from time to time and grants from the Government, Central and State, contributions from local authorities and other sources.
          </p>
        </div>

        <div className="financial-item green">
          <span className="financial-icon">🏢</span>
          <p>
            The Income of the State Association shall consist of income from the properties of the State Association, if any, registration Fees, Individual Registration Fees, subscriptions, donations, contributions, special funds raised from time to time, grants from the State Government, the National Association, contributions from district or local authorities and other sources.
          </p>
        </div>

        <div className="financial-item purple">
          <span className="financial-icon">📍</span>
          <p>
            The income of the District or Divisional Association as the case may be shall consist of income from the properties of the District or Divisional Association, if any, subscriptions, donations and contributions, special funds raised from time to time, Registration Fees, Renewal fees, Individual Registration Fees, and other sources, if any.
          </p>
        </div>

        <div className="financial-item orange">
          <span className="financial-icon">🏘️</span>
          <p>
            The Income of the Local Association shall consist of income from the properties of the Local Association, if any subscriptions, donations and contributions, special funds raised from time to time, Registration Fees Renewal Fees, Individual Registration Fees and other sources, if any.
          </p>
        </div>

        <div className="financial-item brown">
          <span className="financial-icon">👥</span>
          <p>
            The Group income shall consist of income from properties, if any, subscription, donations and contributions, special funds raised from time to time and other sources, if any.
          </p>
        </div>

        <div className="financial-item red">
          <span className="financial-icon">⚠️</span>
          <p>
            The State Association, the District or Divisional Association or the Local Association or the Group shall raise funds only within their respective areas.
          </p>
        </div>

        <div className="financial-item red highlight">
          <span className="financial-icon">⭐</span>
          <p>
            It is the cardinal principle of the Scout and Guide Movement that a Scout or a Guide shall earn money, but shall not solicit money. A Scout or a Guide shall not engage himself or herself or participate in street sales or collections except with the permission of the State Chief Commissioner and under the supervision of the concerned Local or District or Divisional Association.
          </p>
        </div>
      </div>

    </div>
  );
}