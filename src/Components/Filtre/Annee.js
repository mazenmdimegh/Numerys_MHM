import React,{useState} from 'react'
import './Annee.scss'
import ToggleButton from '../toggleButton/toggleButton'

const Annee = (props) => {
  return (
    
      <div className='filters-container'> 
        <div className="range-filter">
        </div> 
       <div className="date-permis">
           <div className="date-filter">
            
             <div className="first-date">
             <select name='date' id='depart-date' className='select-date' onChange={props.onSelectMin}>
               <option value='01-01-2010'>De 2010</option>
               <option value='01-01-2011'>De 2011</option> 
               <option value='01-01-2012'>De 2012</option> 
               <option value='01-01-2013'>De 2013</option> 
               <option value='01-01-2014'>De 2014</option> 
               <option value='01-01-2015'>De 2015</option> 
               <option value='01-01-2016'>De 2016</option> 
               <option value='01-01-2017'>De 2017</option> 
              </select>
             </div>
              <div className="second-date">
              <select name='date' id='arr-date' className='select-date' onChange={props.onSelectMax}>
               <option value='01-01-2018'> À 2018</option>
               <option value='01-01-2019'> À 2019</option>
               <option value='01-01-2020'> À 2020</option>
               <option value='01-01-2021'> À 2021</option>
              </select>
              </div>
           </div> 
          
           {/* <ToggleButton/> */}
       </div>
    </div>
  )
}

export default Annee