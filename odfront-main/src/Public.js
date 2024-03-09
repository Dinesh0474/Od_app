import React, { useState, useEffect } from 'react';

const Public = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://odback.vercel.app/api/public/list");
        const d = await response.json();
        setData(d);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetchData function when the component mounts.
  }, []);

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Reg. No</th>
            <th>Name</th>
            <th>Slot</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.sid}</td>
              <td>{item.sname}</td>
              <td>{item.slot===1?(<>3-8</>):item.slot===2?(<>5-8</>):(<>7-8</>)}</td>
              <td>{item.sreason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Public;
