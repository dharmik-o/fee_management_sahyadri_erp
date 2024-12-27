import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from './Header';
import FeeCard from './FeeCard';
import '../styles/Dashboard.css';

function Dashboard() {
    const { state } = useLocation();
    const {usn,name} = state || {}; // Extract USN from state
    const [feeDetails, setFeeDetails] = useState(null);
    const [error, setError] = useState("");
  
    const fetchFeeDetails = async () => {
      try {
        setError("");
        const response = await fetch("http://localhost:5000/api/auth/getFeeDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ usn }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch fee details");
        }
  
        const data = await response.json();
        setFeeDetails(data);
      } catch (err) {
        console.error("Error fetching fee details:", err);
        setFeeDetails(null);
        setError("Unable to fetch fee details. Please try again later.");
      }
    };
  
    useEffect(() => {
      if (usn) {
        fetchFeeDetails();
      }
    }, [usn]);
  
  return (
    
    <div className="dashboard">
      <Header sname={name}/>
      {feeDetails ? (
        <>
          <section className="section unpaid-section">
            <h2>PAY NOW</h2>
            {feeDetails.tuition_fee_paid !== 'paid' && (
              <FeeCard
                title="Tuition Fee"
                amount={90000}
                paid={0}
                balance={0}
                isPaid={false}
              />
            )}
            {feeDetails.slfs !== 'paid' && (
              <FeeCard
                title="Skill Lab Fee"
                amount="11800" // Adjust based on your fee structure
                paid={0}
                balance={11800}
                isPaid={false}
              />
            )}
            {feeDetails.pfs !== 'paid' && (
              <FeeCard
                title="Placement Fee"
                amount="20000" // Adjust based on your fee structure
                paid={0}
                balance={20000}
                isPaid={false}
              />
            )}
          </section>

          <section className="section paid-section">
            <h2>FEE PAID</h2>
            {feeDetails.tuition_fee_paid === 'paid' && (
              <FeeCard
                title="Tuition Fee"
                amount={feeDetails.tuition_fee_total}
                paid={feeDetails.tuition_fee_total}
                balance={0}
                isPaid={true}
              />
            )}
            {feeDetails.slfs === 'paid' && (
              <FeeCard
                title="Skill Lab Fee"
                amount="11800"
                paid={11800}
                balance={0}
                isPaid={true}
              />
            )}
            {feeDetails.pfs === 'paid' && (
              <FeeCard
                title="Placement Fee"
                amount="20000"
                paid={20000}
                balance={0}
                isPaid={true}
              />
            )}
          </section>
        </>
      ) : (
        <p>No fee details available. Please fetch details.</p>
      )}
    </div>
  );
}


export default Dashboard;