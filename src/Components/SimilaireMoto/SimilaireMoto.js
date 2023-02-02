import React, { useState } from 'react'
import Filters from '../Filtre/Filtre';
import axios from 'axios'
import placeholder from "../../assets/01.png"
import CardMoto from '../CardMoto/CardMoto';
import FloatingButton from '../FLoatingButton/FloatingButton';
import '../CardMoto/CardMoto.scss'
import './SimilaireMoto.scss'

const SimilaireMoto = () => {

  const [filters, setFilters] = useState([])
  const [radio, setRadio] = useState(true)
  const [yearMax, setMax] = useState('01-01-2018')
  const [yearMin, setMin] = useState('01-01-2010')
  


  const onChangePrice = async ({ min, max }) => {
    // console.log(min)
    try {
      const json = JSON.stringify({
        price_max: max,
        price_min: min
      })
      const res = await axios.post("https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/motors/all", json)
      setFilters(res.data)

      // console.log(res.data)
      // console.log(json)


    }
    catch (error) {
      console.log(error)
    }


  }

  const handleRadio = () => {
    setRadio(!radio);
    filterPermis();
  };






 

  const onSelectMin = (e) => {
    setMin(e.target.value)
    filterYear()


  }
  const onSelectMax = (e) => {
    setMax(e.target.value)
    filterYear()
  }

  const filterPermis = async () => {
    try {

      const json = JSON.stringify({
        permis_a2: radio
      })
      const res = await axios.post("https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/motors/all", json)
      setFilters(res.data)
      // console.log(res.data)

    }
    catch (error) {
      console.log(error)
    }
  }

  const filterYear = async () => {
    try {
      const json = JSON.stringify({
        year_min: yearMin,
        year_max: yearMax,
      });
      const res = await axios.post(
        "https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/motors/all",
        json
      );
      setFilters(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //  useEffect(()=>{
  //       getProducts()

  //   },[radio,yearMax,yearMin])

  //   console.log(productss)

  var amine = filters[Math.floor(Math.random() * filters.length)];
  // console.log(amine)

  const sim = filters.filter((e, i) => i < 3)
  

  return (
    <div>
      <div className="filtration-similaireMoto">
        <Filters
          handleRadio={handleRadio}
          radio={radio}
          onSelectMin={onSelectMin}
          onSelectMax={onSelectMax}
          onChangePrice={onChangePrice}
        />{" "}
        <br /> <br />
        <div className="allprod-container">
          <FloatingButton />
        </div>
      </div>
      {/* {loader&& <div className='loader-container'>
       <Loader type="spinner-cub" bgColor={"var(--prm-red)"} title={"chargement en cours"} color={'var(--prm-red)'} size={100} />
       </div>} */}
      <div className="allprod-inner" >
        {sim.map((item) =>
          item.images[0] ? (
            <CardMoto
              id={item.reference}
              imageoverlay="image-overlay"
              overlay="container-overlay"
              classname="image-product"
              key={item.reference}
              image={item.images[0]["meduim"]}
              cat={item.category}
              status={item.status}
              price={item.price}
              productName={item.modele}
              dsc={item.discount.amount}
              mark={item.marque}
              model={item.modele}
              type={item.discount.type_discount}
            />
          ) : (
            <CardMoto
              id={item.reference}
              imageoverlay="image-overlay"
              overlay="container-overlay"
              classname="image-product"
              key={item.reference}
              image={placeholder}
              cat={item.category}
              status={item.status}
              price={item.price}
              productName={item.modele}
              dsc={item.discount.amount}
              mark={item.marque}
              model={item.modele}
              type={item.discount.type_discount}
            />
          )
        )}
      </div>
    </div>
  );
}

export default SimilaireMoto;
