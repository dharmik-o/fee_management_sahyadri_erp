import React from 'react';
import Header from '../../../dashboard/src/components/Header';
import FeeCard from '../../../dashboard/src/components/FeeCard';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <section className="section unpaid-section">
        <h2>PAY NOW</h2>
        <FeeCard
          title="Skill Development Fee"
          amount={11800}
          paid={0}
          balance={11800}
          isPaid={false}
        />
      </section>
      <section className="section paid-section">
        <h2>FEE PAID</h2>
        <FeeCard
          title="Tuition Fee"
          amount={88196}
          paid={88196}
          balance={0}
          isPaid={true}
        />
      </section>
    </div>
  );
}

export default Dashboard;