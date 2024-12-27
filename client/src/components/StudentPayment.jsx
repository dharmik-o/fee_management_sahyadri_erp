import React,{useState} from 'react'

export default function StudentPayment() {
    const [usn, setUsn] = useState("");
    const [feeDetails, setFeeDetails] = useState(null);
    const [error, setError] = useState("");
  
    const fetchFeeDetails = async () => {
      try {
        setError(""); // Reset error state
        const response = await fetch("http://localhost:5000/api/auth/getFeeDetails", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ usn }), // Send USN as part of the request body
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch fee details");
        }
  
        const data = await response.json();
        setFeeDetails(data); // Store fetched fee details
  
      } catch (err) {
        setFeeDetails(null); // Reset if error occurs
        setError("Unable to fetch fee details. Please check the USN and try again.");
        console.error("Error fetching fee details:", err);
      }
    };
  
  return (<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2>Fetch Fee Details</h2>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="usn" style={{ display: "block", marginBottom: "10px" }}>
        Enter Student USN:
      </label>
      <input
        type="text"
        id="usn"
        value={usn}
        onChange={(e) => setUsn(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "300px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={fetchFeeDetails}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Fee Details
      </button>
    </div>

    {error && <p style={{ color: "red" }}>{error}</p>}

    {feeDetails && (
      <div>
        <h3>Fee Details</h3>
        <div className='fee-container'>
          <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div className='tution-fee'
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "5px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h4>Tuition Fee</h4>
            <p>₹{feeDetails.amount}</p>
          </div>
          <div className='placement-fee'
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "5px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h4>Placement Fee</h4>
            <p>₹{25000}</p>
          </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}
