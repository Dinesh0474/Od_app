import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const slot1Ref = useRef(false);
  const slot2Ref = useRef(false);
  const slot3Ref = useRef(false);
  const id = useRef(0);
  const reason = useRef("");
  const [requestStatus, setRequestStatus] = useState(""); // To store request status message
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(name); // This will display the updated value
  }, [name]); 

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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const submitrequest = async () => {

    console.log({
      sid: id.current.value,
      sname: name,
      sreason: reason.current.value,
      slot: 4,
      slot1: slot1Ref.current.checked,
      slot2: slot2Ref.current.checked,
      slot3: slot3Ref.current.checked,
      status: 4,
    });
    try {
      const response = await fetch("https://odback.vercel.app/api/students/odreq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sid: id.current.value,
          sname: name,
          sreason: reason.current.value,
          slot: 4,
          slot1: slot1Ref.current.checked,
          slot2: slot2Ref.current.checked,
          slot3: slot3Ref.current.checked,
          status: 4,
        }),
      });
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        setRequestStatus("Request submitted successfully!");
      } else {
        setRequestStatus(`Request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setRequestStatus("Request failed with an error.");
    }
  };
  const gotoStatus = () => {
    navigate("/status");
  };


  return (
    <main>
      <h1>OD Register Page</h1>
      <form className="addForm">
        <div>
          <label htmlFor="Register">Regno</label>
          <input
            type="text"
            name="Regno"
            ref={id}
            onChange={(e) => {
              getName(e.target.value);
            }}
            className="textbox"
          />
          {(requestStatus === "" || requestStatus === "Request submitted successfully!") && (
            <h2>{name}</h2>
          )}
        </div>

        <label htmlFor="Reason">Reason</label>
        <textarea
          name=""
          id="reason"
          ref={reason}
          className="reason"
          cols="20"
          rows="20"
          required
        ></textarea>
        <br />
        <label htmlFor="slot">Slots</label>
        <div className="Slots">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="slot1"
            name="Period(3 - 8)"
            value="slot1"
            ref={slot1Ref}
          />
          <label htmlFor="slot1" className="checkbox">
            Period(3 - 8)
          </label>
        </div>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="slot2"
            name="Period(5 - 8)"
            value="slot2"
            ref={slot2Ref}
          />
          <label htmlFor="slot2" className="checkbox">
            Period(5 - 8)
          </label>
        </div>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="slot3"
            name="Period(7 - 8)"
            value="slot3"
            ref={slot3Ref}
          />
          <label htmlFor="slot3" className="checkbox">
            Period(7 - 8)
          </label>
        </div>
        <input
          type="button"
          className="Submitbtn"
          value="Submit"
          onClick={submitrequest}
        />
        </div>
        <p>{requestStatus}</p> {/* Display request status message */}
      </form>
      <button type="button" className="Submitbtn"onClick={gotoStatus}>
       Check Status
      </button>
    </main>
  );
};

export default Student;
