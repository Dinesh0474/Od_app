import React, { useEffect, useState } from "react";
import { MdDoneOutline, MdClose } from "react-icons/md";
import { FaSpinner } from 'react-icons/fa';

const Status = ({ Name, Registerno }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);
  const [slot, setSlot] = useState("");

  useEffect(() => {
    console.log(name); // This will display the updated value
  }, [name]); // This useEffect will be triggered whenever `name` changes

  const getName = async (val) => {
    console.log(val);
    try {
      const response = await fetch("https://odback.vercel.app/api/students/name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: val }),
      });
      console.log(response);
      const data = await response.json();
      setName(data.name);
      getStatus(val);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getStatus = async (val) => {
    console.log(val);
    try {
      const response = await fetch("https://odback.vercel.app/api/students/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: val }),
      });
      console.log(response);
      const data = await response.json();
      console.log(data.status, data.slot);
      setStatus(data.status);
      setSlot(data.slot);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1>Status Page</h1>
      <div>
        <label htmlFor="Register">Regno</label>
        <input
          type="text"
          name="Regno"
          onChange={(e) => {
            getName(e.target.value);
          }}
          className="textbox"
        />
        <h2>{name}</h2>
      </div>
      {status === 1 ? (<>
        <h4>Slot Allotted : {slot}</h4>
        <div className="glassmorphic-circle">
          <div className="icon-container">
            <br />
            <br />
            <MdDoneOutline style={{ fontSize: '100px' }} />
          </div>
          <h6>APPROVED</h6>
        </div>
        </>
      ) : status === 2 ? (
        <div className="glassmorphic-circle">
          <br />
          <br />
          <MdClose style={{ fontSize: '120px' }} />
          <h6>DENIED</h6>
        </div>
      ) : status === 4 ? (
        <div className="glassmorphic-circle">
          <br />
          <br />
          <FaSpinner style={{ fontSize: '120px' }} />
          <h6>IN PROCESS</h6>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Status;
