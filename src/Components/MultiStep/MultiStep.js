import React, { useEffect, useState } from "react";
import "./MultiStep.scss";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import { getUserInfo } from "../../helpers/logged_in";
import axios from "axios";

const MultiStep = () => {
  const [steps, setSteps] = useState(0);
  const [error, setError] = useState(false);
  const [dataToSend, setDataToSend] = useState({
    marque: "",
    modele: "",
    annee: "",
    entretien: "",
  });
  const [maintenanceId, setMaintenanceId] = useState("");
  const [clientId, setClientId] = useState("");
  const [addData, setAddData] = useState({
    line1: "",
    line2: "",
    postal_code: "",
    city: "",
    country: "",
    state: "",
  });
  const [addresses, setAdresses] = useState({});
  const [customerId, setCustomerId] = useState("");
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    let userId = getUserInfo("accessToken").username;
    setClientId(userId);
  }, []);
  const handleStepTwoClick = async () => {
    // console.log(getUserInfo("accessToken"));
    // let userId = await getUserInfo("accessToken").username;
    // console.log("hi");
    // let userInfo = await axios.get(
    //   `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/clients/${userId}`
    // );
    // console.log(userInfo, "ssss");
    // if (userInfo.data.groupName === "inactifClient") {
    //   setSteps((step) => step + 1);
    // } else {
    //   setCustomerId(userInfo.data.customer_id);
    //   setAddData({
    //     line1: userInfo.data.address[0].address_Line_1,
    //     line2: userInfo.data.address[0].address_Line_2,
    //     postal_code: userInfo.data.address[0].postal_code,
    //     country: userInfo.data.address[0].country,
    //     state: userInfo.data.address[0].state,
    //     city: userInfo.data.address[0].city,
    //   });
    //   setSteps((step) => step + 1);
    // }
    let userId = await getUserInfo("accessToken").username;
    let userInfo = await axios.get(
      `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/clients/${userId}`
    );
    console.log(userId);
    if (userInfo.data.groupName === "inactifClient") {
      setSteps((step) => step + 1);
    } else {
      setCustomerId(userInfo.data.customer_id);
      setSteps((step) => step + 2);
    }
  };
  const handleMaintenance = (data) => {
    setMaintenanceId(data);
  };
  const fetchMaintenance = async (maintenanceId) => {
    let result = await axios.get(
      `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/maintenance/${maintenanceId}`
    );
    console.log(result.data);
    setDuration(result.data.duration);
    setAmount(result.data.price);
    setSteps((steps) => steps + 1);
  };
  const addAdress = async () => {
    // let userId = getUserInfo("accessToken").username;
    // let userInfo = await axios.get(
    //   `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/clients/${userId}`
    // );
    // console.log(userId);
    // if (!addData.line1 || !addData.postal_code || !addData.country) {
    //   setError(true);
    // } else {
    //   const addressData = {
    //     name: userInfo.data.first_name || "test_name",
    //     email: userInfo.data.email,
    //     address: addData,
    //   };
    //   if (userInfo.data.groupName === "inactifClient") {
    //     let cus = await axios.post(
    //       `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/clients/address/add/${userId}`,
    //       JSON.stringify(addressData)
    //     );
    //     console.log(cus);
    //     setCustomerId(cus.data.customer_id);
    //     setSteps((step) => step + 1);
    //   } else {
    //     // let cus = await axios.post(
    //     //   `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/clients/address/add/${userId}`,
    //     //   JSON.stringify(addressData)
    //     // );
    //     // setCustomerId(userInfo.data.customer_id);
    //     setSteps((step) => step + 1);
    //   }
    // }
    let userId = getUserInfo("accessToken").username;
    let userInfo = await axios.get(
      `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/clients/${userId}`
    );
    const addressData = {
      name: userInfo.data.first_name || "test_name",
      email: userInfo.data.email,
      address: addData,
    };
    let cus = await axios.post(
      `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/clients/address/add/${userId}`,
      JSON.stringify(addressData)
    );
    console.log(cus);
    setCustomerId(cus.data.customer_id);
    setSteps((step) => step + 1);
  };
  const pages = () => {
    let info = getUserInfo("accessToken").username;
    if (steps === 0) {
      return (
        <Step1
          changeSteps={() => fetchMaintenance(maintenanceId)}
          changeMarque={(e) =>
            setDataToSend({ ...dataToSend, marque: e.target.value })
          }
          changeModele={(e) =>
            setDataToSend({ ...dataToSend, modele: e.target.value })
          }
          changeYear={(e) =>
            setDataToSend({ ...dataToSend, annee: e.target.value })
          }
          changeEntretien={(e) =>
            setDataToSend({ ...dataToSend, entretien: e.target.value })
          }
          getMainId={handleMaintenance}
        />
      );
    } else if (steps === 1) {
      return (
        <Step2
          changeSteps={handleStepTwoClick}
          duration={duration}
          maintenanceId={maintenanceId}
          clientId={clientId}
        />
      );
    } else if (steps === 2) {
      return (
        <Step3
          adresses={addData}
          error={error}
          changeSteps={addAdress}
          changeAdresse1={(e) =>
            setAddData({ ...addData, line1: e.target.value })
          }
          changeAdresse2={(e) =>
            setAddData({ ...addData, line2: e.target.value })
          }
          changePostal={(e) =>
            setAddData({ ...addData, postal_code: e.target.value })
          }
          changeCity={(e) => setAddData({ ...addData, city: e.target.value })}
          changeCountry={(e) =>
            setAddData({
              ...addData,
              country: e.target.value.slice(0, 3).toUpperCase(),
            })
          }
          changeState={(e) => setAddData({ ...addData, state: e.target.value })}
        />
      );
    } else {
      return <Step4 customer={customerId} amount={amount} />;
    }
  };
  return (
    <div className="MultiStepsContainer">
      <div className="fsteps">
        <div
          className="stepnbr"
          style={{ backgroundColor: steps >= 0 ? "#E9020C" : "#9A9EA7" }}
        >
          1
        </div>
        <hr style={{ backgroundColor: steps >= 1 ? "#E9020C" : "#9A9EA7" }} />
        <div
          className="stepnbr"
          style={{ backgroundColor: steps >= 1 ? "#E9020C" : "#9A9EA7" }}
        >
          2
        </div>
        <hr style={{ backgroundColor: steps >= 2 ? "#E9020C" : "#9A9EA7" }} />
        <div
          className="stepnbr"
          style={{ backgroundColor: steps >= 2 ? "#E9020C" : "#9A9EA7" }}
        >
          3
        </div>
        <hr style={{ backgroundColor: steps >= 3 ? "#E9020C" : "#9A9EA7" }} />
        <div
          className="stepnbr"
          style={{ backgroundColor: steps >= 3 ? "#E9020C" : "#9A9EA7" }}
        >
          4
        </div>
      </div>
      {pages()}
    </div>
  );
};

export default MultiStep;
