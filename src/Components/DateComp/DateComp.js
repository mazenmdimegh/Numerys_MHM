import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import el from "date-fns/locale/fr";
import addDays from "date-fns/addDays";
import "./DateComp.scss";
import { getPossibleTimes } from "../../helpers/time";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const DateComp = ({ dur, mid, cid, changeBtn, getObj }) => {
  registerLocale("el", el);
  const [color, setColor] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [times, setTimes] = useState(false);
  const [day, setDay] = useState();
  const [possibleTimes, setPossibleTimes] = useState([]);
  const [startDates, setStartDates] = useState();
  const [loading, setLoading] = useState(false);
  const hours = possibleTimes.map((e) => {
    let a = "";
    let b = "";
    e[0].getHours() === 9 ? (a = "0" + e[0].getHours()) : (a = e[0].getHours());
    // e[0].getHours() + ":" + e[0].getMinutes();
    e[0].getMinutes() === 0
      ? (b = "0" + e[0].getMinutes())
      : (b = e[0].getMinutes());
    return a + ":" + b;
  });
  const isWeekday = (date) => {
    const datetocompare = new Date();

    const day = date.getDay();
    return day !== 0 && day !== 1 && date > datetocompare;
  };
  const onChange = async (e) => {
    setDay(e);
    let dayToSend = new Date(e);
    let result = await axios.get(
      `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/reservation/unavalible/${
        dayToSend.getTime() / 1000 + 60 * 60
      }`
    );
    let dates = result.data.map(
      (e) => new Date(`${e.date.split(" ").join("")}`)
    );
    let first = dates.map(
      (e) => (e.getHours() * 60 + e.getMinutes() - 9 * 60) / 15
    );
    await setPossibleTimes(getPossibleTimes(e, [...first], dur));
    setTimes(true);
  };

  const handleClick = (i) => {
    setColor(i);
    const dateTo = new Date();
    const dataTosend = {
      startDate: possibleTimes[i][0].getTime() / 1000 + 60 * 60,
      endDate: possibleTimes[i][0].getTime() / 1000 + 60 * 60 + dur * 60,
      duration: dur,
      maintenanceId: mid,
      clientId: cid,
      expiration: (dateTo.getTime() + 60 * 60 * 1000) / 1000,
    };
    getObj(dataTosend);
    // axios.post(
    //   "https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/reservation/create",
    //   JSON.stringify(dataTosend)
    // );
    changeBtn();
  };
  console.log(hours.length);
  return (
    <div className="datepp">
      {loading && <Spinner />}
      <DatePicker
        locale="el"
        calendarClassName="dzovi"
        selected={day}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        inline
        filterDate={isWeekday}
      />
      {times && (
        <div className="hourWrapper">
          {hours.length !== 0 ? (
            hours.map((e, index) => (
              <div
                className="ht"
                style={
                  color === index
                    ? { backgroundColor: "#E9020C", color: "white" }
                    : {}
                }
                key={index}
                onClick={() => handleClick(index)}
              >
                {e}
              </div>
            ))
          ) : (
            <p className="notavailable">
              Pas de rendez-vous possible dans ce jour.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DateComp;
