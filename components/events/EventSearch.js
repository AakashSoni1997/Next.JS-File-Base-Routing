import React, { useRef } from "react";
import Button from "../ui/Button";
import classes from "../style/event-search.module.css";

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHndler = (event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={classes.form} onSubmit={submitHndler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">
            <span className={classes.labelText}>Select Year:</span>
            <select id="year" className={classes.select} ref={yearInputRef}>
              <option value={"2021"}>2021</option>
              <option value={"2022"}>2022</option>
            </select>
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">
            <span className={classes.labelText}>Select Month:</span>
            <select id="month" className={classes.select} ref={monthInputRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </label>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
};

export default EventSearch;
