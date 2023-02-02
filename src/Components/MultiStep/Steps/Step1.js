import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Step1.scss";

const Step1 = ({
  changeSteps,
  changeMarque,
  changeModele,
  changeYear,
  changeEntretien,
  getMainId,
}) => {
  const [dis, setDis] = useState(true);
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [entretien, setEntretien] = useState([]);
  // const [mid, setMid] = useState("");
  let mid = "";
  useEffect(() => {
    const fetchData = async () => {
      let brands = await axios.get(
        "https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/maintenance/brands"
      );
      setBrands(brands.data);
    };
    fetchData();
  }, []);
  const fetchModels = async (brand) => {
    setBrand(brand);
    let modelsByBrand = await axios.get(
      `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/maintenance/${brand}/models`
    );
    setModels(modelsByBrand.data);
  };
  const getInfo = async (model) => {
    let infos = await axios.get(
      `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/maintenance?brand=${brand}&model=${model}`
    );
    console.log(infos.data);
    setYears(infos.data.map((e) => e.year));
    setEntretien(infos.data.map((e) => e.maintenance_type));
    mid = infos.data[0].maintenanceId;
    getMainId(mid);
  };

  const changeEnt = (e) => {
    setDis(false);
    changeEntretien(e);
  };
  return (
    <div className="step1wrapper">
      <div className="etape">
        <p className="n_etape">
          <span className="etapNb">Etape 1:</span> Choix d'entretien
        </p>
      </div>
      <select
        className="selectInput"
        onChange={(e) => fetchModels(e.target.value)}
        disabled={brands ? false : true}
        defaultValue={"default"}
      >
        <option value={"default"} disabled>
          Marque
        </option>
        {brands.map((e, i) => (
          <option value={e.brand} key={i} style={{ color: "black" }}>
            {e.brand}
          </option>
        ))}
      </select>
      <select
        className="selectInput"
        onChange={(e) => getInfo(e.target.value)}
        style={models.length !== 0 ? {} : { color: "black" }}
        disabled={models.length === 0 ? true : false}
        defaultValue={"default"}
      >
        <option value={"default"} disabled>
          Modele
        </option>
        {models.map((e, i) => (
          <option key={i} value={e.model} style={{ color: "black" }}>
            {e.model}
          </option>
        ))}
      </select>
      <select
        className="selectInput"
        onChange={changeYear}
        disabled={years.length === 0 ? true : false}
        defaultValue={"default"}
        style={years.length !== 0 ? {} : { color: "black" }}
      >
        <option value={"default"} disabled>
          Annee
        </option>
        {years.map((e, i) => (
          <option value={e} key={i} style={{ color: "black" }}>
            {e}
          </option>
        ))}
      </select>
      <select
        className="selectInput"
        onChange={changeEnt}
        defaultValue={"default"}
        disabled={entretien.length === 0 ? true : false}
        style={entretien.length !== 0 ? {} : { color: "black" }}
      >
        <option value={"default"} disabled>
          Type d'entretien
        </option>
        {entretien.map((e, i) => (
          <option value={e} key={i} style={{ color: "black" }}>
            {e}
          </option>
        ))}
      </select>
      <button
        onClick={changeSteps}
        className="MultiBtn"
        disabled={dis ? true : false}
        style={dis ? { backgroundColor: "#c4c4c4" } : {}}
      >
        suivant
      </button>
    </div>
  );
};

export default Step1;
