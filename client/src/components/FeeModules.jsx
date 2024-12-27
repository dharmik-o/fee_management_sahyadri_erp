import React from 'react'
import axios from "axios";
export default function FeeModules() {
  const [usn, setUsn] = useState("");
  const [feeDetails, setFeeDetails] = useState(null);
  const [error, setError] = useState("");

  const fetchFeeDetails = async () => {
    try {
      setError(""); // Reset error state
      const response = await axios.post("http://localhost:5000/getFeeDetails", {
        usn,
      });
      setFeeDetails(response.data);
    } catch (err) {
      setFeeDetails(null);
      setError("Unable to fetch fee details. Please check the USN and try again.");
    }
  };

  return (
    <div>FeeModules</div>
  )
}
