import React, { useState } from "react";
import MultiRangeSlider from "./Multirange";
import styled, { createGlobalStyle } from "styled-components";
import "./ToggleButton.scss";
import "./Filtre.scss";
// import './Annee.scss'

const Toggle = styled.button`
  width: 70px;
  height: 25px;
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  outline: none;
  background-color: ${(props) => (props.on ? "#E9020C" : "white")};
  border: 3px solid white;
  top: 4px;

  &::after {
    content: "";
    position: absolute;
    top: -2.8px;

    will-change: transform;
    transform: translate(${(props) => (props.on ? 15 : -40)}px);
    transition: transform 0.2s ease-out;
    width: 25px;
    height: 25px;
    background: white;
    border: 2px solid #9a9ea7;
    outline: none;
    border-radius: 50%;
  }
`;


const Filters = ({
  handleRadio,
  onSelectMax,
  onSelectMin,
  onChangePrice,
  radio,
  minAnn,
  maxAnn,
  max,
  Minprice,

}) => {
  const [on, toggle] = useState(false);
  const toggleFunction = () => {
    toggle(!on);
    handleRadio();
   
  };
  let year1 = []
  
  
  for (let i=minAnn;i<maxAnn; i=i+1){
    year1.push(i)
  }
  // console.log("yaer1",year1)

  let year2 = [];
  for (let i = maxAnn; i >= minAnn; i = i - 1) {
    year2.push(i);
    // console.log("working")
  }
  
  // console.log("les date de year sont", year)
  const MakeItem = function (X) {
    return (
      <option>
        
        {X}
      </option>
    );
    
  };
  // console.log("le prix max estsssss ",Maxprice)
  

  return (
    <div className="filters-container">
      <div className="range-filter">
        <MultiRangeSlider min={0} max={max} onChange={onChangePrice} />
      </div>
      <div className="date-permis">
        <div className="date-filter">
          <div className="first-date">
            <p id="first_annee">
              <span id="year">Année</span> de
            </p>
            <select
              name="date"
              id="depart-date"
              className="select-date"
              onChange={onSelectMin}
            >
              {/* <option value={anne}>{anne}</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option> */}
              {year1.map(MakeItem)}
              {/* <option>{minAnn}</option>
              <option>{maxAnn}</option> */}
            </select>
          </div>
          <div className="second-date">
            <p id="last_annee">à </p>
            <select
              name="date"
              id="arr-date"
              className="select-date"
              onChange={onSelectMax}
            >
              {year2.map(MakeItem)}
            </select>
          </div>
        </div>

        <div className="permis-filter" id="radio">
          <span className="span-text" id="permis">
            Permis A2
          </span>
          <Toggle on={on} onClick={toggleFunction}>
            <div className="button-radio">
              <span className={radio === true ? "button-filler" : ""}></span>
            </div>
          </Toggle>
          {/* <ToggleButton onClick={props.handleRadio}/><span className={props.radio===true?'button-filler':""}></span> */}
        </div>
      </div>
    </div>
  );
};

export default Filters;
