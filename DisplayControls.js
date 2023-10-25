import React, { useState } from 'react';
import Axios from 'axios'; // You need to install Axios or use another HTTP client

function ControlDetailsTable() {
  const [standard, setStandard] = useState(''); // State to store the standard input
  const [data, setData] = useState([]); // State to store the fetched data

  const handleStandardChange = (event) => {
    setStandard(event.target.value);
  }

  const fetchControlDetails = () => {
    // Fetch data based on the selected standard
    if(standard)
    {
    Axios.get(`http://localhost:3000/getControlsByStandard/${standard}`) // Replace with your API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert("Please enter Valid Standard")
        setData([])
      });
    }
    else
    {
      alert("Please enter Valid Standard")
     
    }
  }

  return (
    <div>
      <h2>Control Details</h2>
      <div>
        <label htmlFor="standardInput">Enter Standard: </label>
        <input
          type="text"
          id="standardInput"
          value={standard}
          onChange={handleStandardChange}
        />
        <button onClick={fetchControlDetails}>Fetch Control Details</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Control</th>
            <th>Ref No</th>
            <th>Rational</th>
            <th>Rational Rating</th>
            <th>Evidence</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            entry.controls.map((control) => (
              control.subcontrols.map((subcontrol, subIndex) => (
                <tr key={`${index}-${subIndex}`}>
                  {subIndex === 0 && ( // Display control name only once
                    <td rowSpan={control.subcontrols.length}>
                      {control.control}
                    </td>
                  )}
                  <td>{subcontrol.refno}</td>
                  <td>{subcontrol.rational}</td>
                  <td>{subcontrol.rationalrating}</td>
                  <td>{subcontrol.evidence}</td>
                  <td><button>Edit</button><button>Delete</button></td>
                </tr>
              ))
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ControlDetailsTable;
