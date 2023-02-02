// // import React from "react";
// // import "./Test.scss";
// // import MultiRangeSlider from "../Filtre/Multirange";

// // const Test = ({onChangePrice}) => {
// //   return (
// //     <div>
// //       <div className="filter-container">
// //         <div className="prix-range">
// //           <div className="pri">Prix</div>
// //           <MultiRangeSlider
// //       min={0}
// //       max={10000}
// //       onChange={onChangePrice}
// //     />
// //         </div>
// //         <div className="filter-date">
// //           <p id="frst-date">ayoub</p>
// //           <p id="scd-date">amine</p>
// //         </div>
// //         <div className="toggle clearfix">A
// //           <p id="text">text</p>
// //           <label class="switch">
// //             <input type="checkbox" />
// //             <span class="slider round"></span>
// //           </label>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Test;


// import React, { useCallback, useEffect, useState, useRef } from "react";
// import PropTypes from "prop-types";
// import "./Test.scss";

// const Test = ({ min, max, onChange }) => {
//   const [minVal, setMinVal] = useState(min);
//   const [maxVal, setMaxVal] = useState(max);
//   const minValRef = useRef(min);
//   const maxValRef = useRef(max);
//   const range = useRef(null);

//   // Convert to percentage
//   const getPercent = useCallback(
//     (value) => Math.round(((value - min) / (max - min)) * 100),
//     [min, max]
//   );

//   // Set width of the range to decrease from the left side
//   useEffect(() => {
//     const minPercent = getPercent(minVal);
//     const maxPercent = getPercent(maxValRef.current);

//     if (range.current) {
//       range.current.style.left = `${minPercent}%`;
//       range.current.style.width = `${maxPercent - minPercent}%`;
//     }
//   }, [minVal, getPercent]);

//   // Set width of the range to decrease from the right side
//   useEffect(() => {
//     const minPercent = getPercent(minValRef.current);
//     const maxPercent = getPercent(maxVal);

//     if (range.current) {
//       range.current.style.width = `${maxPercent - minPercent}%`;
//     }
//   }, [maxVal, getPercent]);

//   // Get min and max values when their state changes
//   useEffect(() => {
//     onChange({ min: minVal, max: maxVal });
//   }, [minVal, maxVal, onChange]);

//   return (
//     <div className="container">
//       <input
//         type="range"
//         min={min}
//         max={max}
//         value={minVal}
//         onChange={(event) => {
//           const value = Math.min(Number(event.target.value), maxVal - 1);
//           setMinVal(value);
//           minValRef.current = value;
//         }}
//         className="thumb thumb--left"
//         style={{ zIndex: minVal > max - 100 && "5" }}
//       />
//       <input
//         type="range"
//         min={min}
//         max={max}
//         value={maxVal}
//         onChange={(event) => {
//           const value = Math.max(Number(event.target.value), minVal + 1);
//           setMaxVal(value);
//           maxValRef.current = value;
//         }}
//         className="thumb thumb--right"
//       />

//       <div className="slider">
//         <div className="slider__track" />
//         <div ref={range} className="slider__range" />
//         <div className="slider__left-value">{minVal}</div>
//         <div className="slider__right-value">{maxVal}</div>
//       </div>
//     </div>
//   );
// };



// export default Test;

import React ,{useState} from "react";
import "./Test.scss";
import MultiRangeSlider from "../Filtre/Multirange";
import styled, { createGlobalStyle } from "styled-components";

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

const Test = ({
  handleRadio,
  onSelectMax,
  onSelectMin,
  onChangePrice,
  radio,
}) => {
   const [on, toggle] = useState(false);
   const ayoub = () => {
     toggle(!on);
     handleRadio();
   };
  
  return (
    <div className="container_filter">
      <div className="prix_range">
        <p id="pri">Prix</p>
        <div className="multi">
          <MultiRangeSlider min={0} max={10000} onChange={onChangePrice} />
        </div>
      </div>
      <div className="date_filter clearfix">
        <div className="first-date">
          <select
            name="date"
            id="depart-date"
            className="select-date"
            onChange={onSelectMin}
          >
            <option value="01-01-2010">2010</option>
            <option value="01-01-2011">2011</option>
            <option value="01-01-2012">2012</option>
            <option value="01-01-2013">2013</option>
            <option value="01-01-2014">2014</option>
            <option value="01-01-2015">2015</option>
            <option value="01-01-2016">2016</option>
            <option value="01-01-2017">2017</option>
          </select>
        </div>
        <div className="second-date">
          <select
            name="date"
            id="arr-date"
            className="select-date"
            onChange={onSelectMax}
          >
            <option value="01-01-2018"> 2018</option>
            <option value="01-01-2019"> 2019</option>
            <option value="01-01-2020"> 2020</option>
            <option value="01-01-2021"> 2021</option>
          </select>
        </div>
      </div>
      <div className="toggle_filter clearfix">
        <p id="permi">Permis A2</p>

        <div className="toggle">
          <Toggle on={on} onClick={ayoub}>
            <div className="button-radio">
              <span className={radio === true ? "button-filler" : ""}></span>
            </div>
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default Test;
