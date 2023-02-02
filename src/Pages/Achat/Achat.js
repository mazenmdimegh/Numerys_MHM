import React, { useState } from "react";
import "./Achat.scss";
import { useForm } from 'react-hook-form'
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import addphoto from '../../assets/addphoto.png'
import Image from "../../assets/Logo.png";
import { isValidEmail } from "../../helpers/validation_regex";
import Spinner from "../../Components/Spinner/Spinner";
import Select from 'react-select'
import axios from "axios";
import PhoneInput from "react-phone-number-input";

const wait = function (duration = 1888) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

const Achat = () => {
  const [value, setvalue] = useState("+33");
  const [isPending, setIsPending] = useState();
  const [Failure, setFailure] = useState(false);
  const [verifModal, setVerifModal] = useState(false);
  const [selectedImages, setselectedImages] = useState([])
  const [selectedFiles, setselectedFiles] = useState([])
  let fileData = new FormData()
  const [dragActive, setDragActive] = React.useState(false);
  const [addable, setaddable] = useState(true);
  const [addableP, setaddableP] = useState(true);
  const [SelectedPermis, setSelectedPermis] = useState(false);
  const [opt, setopt] = useState([0]);
  const [piece, setpiece] = useState([0]);
  const [AttachFile, setAttachFile] = useState(false);
  const [AttachImage, setAttachImage] = useState(false);
  const inputRef = React.useRef(null);
  const { register, handleSubmit, formState: { errors, isSubmitted }, setValue } = useForm();
  const options = [
    { value: 'A', label: 'A' },
    { value: 'A2', label: 'A2' },
    { value: 'A-125', label: 'A-125' },
    { value: 'Sans permis', label: 'Sans permis' }
  ]
  const deleteFile = (index) => {

    const test = selectedFiles
    test.splice(index, 1)
    setselectedFiles([...test])
    // setImages(selectedImages)
    if (selectedFiles.length === 0) {
      setAttachFile(false)
    } else {
      setAttachFile(true)

    }
  }
  const deleteImage = (index) => {

    const test = selectedImages
    test.splice(index, 1)
    setselectedImages([...test])
    // setImages(selectedImages)
    if (selectedImages.length === 0) {
      setAttachImage(false)
    } else {
      setAttachImage(true)

    }
  }
  const DisplayFile = () => {
    // aa = selectedImages;
    if (AttachFile) {
      return (
        <div className="selected-imgs flex-start">

          {selectedFiles.map((post, index) => (
            <div className="imgName" key={post.name}>
              <button className="btn deletebtn" type="button" onClick={() => deleteFile(index)}>
                {post.name}<span>
                  <svg style={{ width: 14, paddingTop: 5, marginLeft: 12 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      );
    } else if (false) {
      return (
        <div></div>
      );
    };
  }
  const Displayimg = () => {
    if (AttachImage) {
      return (
        <div className="selected-imgs">

          {selectedImages.map((post, index) => (
            <div className="imgName" key={post.name}>
              <button className="btn deletebtn" type="button" onClick={() => deleteImage(index)}>
                {post.name}<span>
                  <svg style={{ width: 14, paddingTop: 5, marginLeft: 12 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      );
    } else if (false) {
      return (
        <div></div>
      );
    };
  }
  // const permishandler = () => {

  //   console.log(SelectedPermis);
  // }
  const RemovePiece = (index) => {
    // console.log("remove" + index);
    // console.log(opt.length);
    const list = [...piece]
    list.splice(index, 1)
    setpiece(list)
    if (list.length < 4) {
      setaddableP(true)
    }
  }
  const AddPiece = (index) => {
    if (piece.length === 3) {
      // console.log("Add" + index);
      setpiece([...piece, piece.length])
      // console.log(opt);
      setaddableP(false)
    } else {
      // console.log("Add" + index);
      setpiece([...piece, piece.length])
      // console.log(opt);
    }
  }
  const RemoveOption = (index) => {
    // console.log("remove" + index);
    // console.log(opt.length);
    const list = [...opt]
    list.splice(index, 1)
    setopt(list)
    if (list.length < 4) {
      setaddable(true)
    }
  }
  const AddOption = (index) => {
    if (opt.length === 3) {
      setopt([...opt, opt.length])
      setaddable(false)
    } else {
      setopt([...opt, opt.length])
    }
  }
  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    return isValid;
  };
  const handleFile = (e) => {
    setAttachFile(false)
    const test = selectedFiles
    if ((e.target.files).length > 1) {
      for (let i = 0; i < (e.target.files).length; i++) {
        test.push((e.target.files)[i])
      }
    } else {
      test.push(e.target.files[0])
    }
    setselectedFiles([...test])
    setAttachFile(true)
    setAttachFile(true);

  }
  const sendFiles = async () => {
    // console.log("saving");
    const config = {
      headers: {
        'Accept': '*/*',
      }
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      fileData.append("files", selectedFiles[i], selectedFiles[i].name)
    }

    for (let i = 0; i < selectedImages.length; i++) {
      fileData.append('images', selectedImages[i], selectedImages[i].name)
    }

    try {
      const attachements = await axios.post('https://r8lq7yzqj5.execute-api.eu-west-1.amazonaws.com/Dev/leads/upload', fileData, config)
      const data2 = { attachements: attachements.data.files, images: attachements.data.images }
      // console.log(attachements.data.files)
      // console.log(attachements.data.images)
      // console.log(data2)
      for (let i = 0; i < attachements.data.files.length; i++) {
        setValue(`attachements.${i}.file_url`, `${attachements.data.files[i]["file_url"]}`);
        setValue(`attachements.${i}.fileName`, `${attachements.data.files[i]["fileName"]}`);
      }
      for (let i = 0; i < attachements.data.images.length; i++) {
        setValue(`images.${i}.small`, `${attachements.data.images[i]["small"]}`);
        setValue(`images.${i}.meduim`, `${attachements.data.images[i]["meduim"]}`);
        setValue(`images.${i}.large`, `${attachements.data.images[i]["large"]}`);
      }

      // console.log("saved");

      return data2
    }

    catch (error) {
      console.log(error)
      setFailure(true)
      setTimeout(() => {
        setFailure(false)
      }, 2000);
    }
  }
  const onSubmit = async (data) => {

    wait(2000);
    // console.log("submitting");

    setIsPending(true);
    // const index = getValues('attachements').length;
    await sendFiles();

    // console.log(data);
    // const data2 = await sendFiles()
    // console.log(files);

    fetch("https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/reseller/request/create", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      setIsPending(false);
      // console.log(res.status);
      // console.log("fetched");
      if (res.status === 201) {
        setVerifModal(true)
        // setTimeout(() => {
        //   setVerifModal(false)
        //   window.location.replace("/rachat")
        // }, 2000);
      } else {
        setFailure(true)
        setTimeout(() => {
          setFailure(false)
        }, 2000);
      }
    });
    // (JSON.stringify(`${res.message}, status: ${res.status}`));
    // console.log("submit");

    // console.log("submitted");
    // setIsPending(false);

    console.log(JSON.stringify(data));

  };
  const handleChange2 = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImages(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleImages(e);
    }
  };
  const setattachments = async () => {
    // console.log("setattachments begin")

    if (selectedFiles.length > 0 && selectedImages.length > 2) {
      const permis = []
      if (SelectedPermis.length > 0) {
        setIsPending(true)
        // await sendFiles();
        setValue("attachements", selectedFiles)
        setValue("images", selectedImages)
        for (let i = 0; i < SelectedPermis.length; i++) {
          permis.push(SelectedPermis[i]["value"])
        }
        setValue("permis_a2", permis)
        setIsPending(false)

      } else {
        setValue("permis_a2", [])
      }

    } else {
      setValue(`images`, []);
      setValue(`attachements`, []);
    }
    // console.log("setattachments finished")
    // console.log(getValues('attachements'));
    // console.log(getValues('images'));
    // console.log(getValues('permis_a2'));

    // console.log(isSubmitSuccessful)

  }
  const handleImages = (e) => {
    setAttachImage(false)

    const test = selectedImages
    if ((e.target.files).length > 1) {
      // console.log("Multiple")
      for (let i = 0; i < (e.target.files).length; i++) {
        test.push((e.target.files)[i])
      }
    } else {
      test.push(e.target.files[0])
    }
    setselectedImages([...test])
    setAttachImage(false)
    setAttachImage(true)
  }
  return (
    <div className="StaticWrapper">
      <Navbar bgc="#000" color="#fff" logo={Image} />
      <div className="forms">
        <h1 id='achat'>Achat Cash et Reprise</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formAchat">
            {/* coordonnées client */}
            <h1 className="Atelierlabel">Vos informations</h1>
            <div className='atelierForm '> <br /> <br />

              <div className='nom_prenom'>
                <div className='input1'>
                  <input type="text" placeholder='Nom' id="nom" {...register('first_name', { required: true, minLength: 3 })}
                    className={
                      errors.first_name ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.first_name && <p className="error">*Le nom de revendeur doit avoir au moins 3 charactéres</p>}
                </div>
                <div className="input2">
                  <input type="text" placeholder='Prénom' id="prenom" {...register('last_name', { required: true })}
                    className={
                      errors.last_name ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.last_name && <p className="error">*ce champ est obligatoire</p>}

                </div>
              </div>
              <div className='nom_prenom'>
                <div className="input1">
                  <input type="text" placeholder='Email' id='email' {...register('email', { required: true, validate: handleEmailValidation })}
                    className={
                      errors.email ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.email?.type === "required" && (
                    <p className="error">*Veuillez saisir un email.</p>
                  )}
                  {errors.email?.type === "validate" && (
                    <p className="error">*Veuillez saisir un email valide.</p>
                  )}
                </div>
                <div className="input2">
                  <PhoneInput
                    international
                    countryCallingCodeEditable={true}
                    defaultCountry="FR"
                    value={value}
                    onChange={setvalue}
                  /> {(value != undefined ? (value.replace("+", "0") > 99999999999 || value.replace("+", "0") < 9999999999) : false) && isSubmitted && (
                    <p className="error">*N° de téléphone est requis.</p>
                  )}
                </div>
              </div><br />
            </div>
          </div>
          <div className="formAchat">
            <h1 className="Atelierlabel">Votre moto</h1>
            <div className='atelierForm '> <br /> <br />

              <div className='nom_prenom'>
                <div className='input1'>
                  <input type="text" placeholder='Marque' id="nom" {...register('marque', { required: true })}
                    className={
                      errors.marque ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.marque && <p className="error">*ce champ est obligatoire</p>}
                </div>
                {/* <div className="input1 margin_bot">
                  <select className={
                    errors.marque ? "errorInput input-field" : "input-field"
                  } {...register("marque", { required: true })}>
                    <option value="" selected disabled hidden >Marque</option>
                    <option value="Kawazaki">Kawazaki</option>
                    <option value="Harley">Harley</option>
                    <option value="Honda">Honda</option>
                    <option value="Yamaha">Yamaha</option>
                  </select>
                </div> */}
                <div className="input2">
                  <input type="text" placeholder='Modéle' id="modele" {...register('modele', { required: true })}
                    className={
                      errors.modele ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.modele && <p className="error">*ce champ est obligatoire</p>}

                </div>
              </div>
              {/* <div className='nom_prenom'>
                <div className='input1'>
                  <input type="text" placeholder='Immatriculation' id="immatriculation" {...register('immatriculation', { required: true })}
                    className={
                      errors.immatriculation ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.immatriculation && <p className="error">*ce champ est obligatoire</p>}
                </div>
                <div className="input2">
                  <input type="text" placeholder='VIN' id="VIN" {...register('VIN', { required: true })}
                    className={
                      errors.VIN ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.VIN && <p className="error">*ce champ est obligatoire</p>}

                </div>
              </div> */}
              <div className='nom_prenom'>
                <div className="in margin_bot LabelCheck">
                  <label>Permis :</label>
                  <Select options={options}
                    isMulti
                    name="colors"
                    onChange={(item) => setSelectedPermis(item)}
                    placeholder="Veuillez choisir un permis"
                    className="basic-multi-select"
                    classNamePrefix="select" />
                  {/* <div className={
                    errors.permis_a2 ? "errorInput flex" : "flex"
                  } >
                    <label>A :</label>
                    <input type="checkbox" value="A" className="input-field"{...register("permis_a2", { required: true })} />
                    <label>A2 :</label>
                    <input type="checkbox" value="A2" className="input-field"{...register("permis_a2", { required: true })} />
                    <label>A-125 :</label>
                    <input type="checkbox" value="A-125" className="input-field"{...register("permis_a2", { required: true })} />
                  </div> */}
                  {!SelectedPermis[0] && isSubmitted && <p className="error">*ce champ est obligatoire</p>}
                  {/* <select className={
                    errors.permis_a2 ? "errorInput input-field" : "input-field"
                  } {...register("permis_a2", { required: true })}>
                    <option value="Assez Bien">A</option>
                    <option value="Assez Bien">A2</option>
                    <option value="Assez Bien">A-125</option>
                    <option value="Bien">Sans Permis</option>
                  </select> */}

                </div>
                <div className="input2 ">
                  <label>1 ére mise en circulation :</label>
                  <input type="date" placeholder='1 ére mise en circulation' id="date_per_cerculations" {...register('date_per_cerculations', { required: true })}
                    className={
                      errors.date_per_cerculations ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.date_per_cerculations && <p className="error">*ce champ est obligatoire</p>}
                </div>

              </div>

              <div className='nom_prenom'>
                <div className="input1 margin_bot">
                  <label>Type de moto :</label>
                  <select className={
                    errors.category ? "errorInput input-field" : "input-field"
                  } {...register("category", { required: true })}>
                    <option value="Routiére">Routiére</option>
                    <option value="Roadsters">Roadsters</option>
                    <option value="Sportives">Sportives</option>
                    <option value="Supermotards">Supermotards</option>
                  </select>
                  {errors.category && <p className="error">*ce champ est obligatoire</p>}
                </div>
                <div className="input2 margin_bot">
                  <label>Carnet d'entretien :</label>
                  <select className={
                    errors.carnet_entretien ? "errorInput input-field" : "input-field"
                  } {...register("carnet_entretien", { required: true })}>
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                  </select>
                  {errors.carnet_entretien && <p className="error">*ce champ est obligatoire</p>}
                </div>
              </div>

              {/* <div className='nom_prenom'>
                <div className='input1 '>
                  <input type="text" placeholder='Procedure motor' id="procedure_motor" {...register('procedure_motor', { required: true })}
                    className={
                      errors.procedure_motor ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.procedure_motor && <p className="error">*ce champ est obligatoire</p>}
                </div>
                <div className="input2">
                  <input type="text" placeholder='Regime TVA' id="regime_tva" {...register('regime_tva', { required: true })}
                    className={
                      errors.regime_tva ? "errorInput input-field" : "input-field"
                    }
                  /> <br />
                  {errors.regime_tva && <p className="error">*ce champ est obligatoire</p>}

                </div>
              </div> */}
              <div className='nom_prenom'>
                <div className="input1">
                  <input type="number" placeholder='Kilomètrage' id='kilometrage' {...register('kilometrage', { required: true })} className={
                    errors.kilometrage ? "errorInput input-field" : "input-field"
                  } />
                  {errors.kilometrage && <p className="error">*ce champ est obligatoire</p>}
                </div>
                <div className="input2">

                </div>
              </div>
              {opt.map((opt, index) => (
                <div key={index}>
                  <div className='nom_prenom'>
                    <div className="input1 margin_bot">
                      <select className="input-field"{...register(`options.${index}.key`)}>
                        <option value="" selected disabled hidden >Option</option>
                        <option value="Transmission">Transmission</option>
                        <option value="Cylindrée">Cylindrée</option>
                      </select>
                    </div>
                    <div className="input2">
                      <input type="text" placeholder="Exemple d'option" id="exp_option"{...register(`options.${index}.value`)} className="input-field" />
                    </div>


                  </div>
                  <div className="input1">
                    {index !== 0 && <div className="nom_prenom reverse">
                      <button className="btn deletebtn" type="button" onClick={() => RemoveOption(index)}>
                        <span>
                          <svg style={{ width: 18 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
                        </span>
                      </button>
                    </div>}
                  </div>
                </div>
              ))}
              {addable && <div className="nom_prenom justify"><button className="btn addbtn" type="button" onClick={() => AddOption()}>Ajouter Option</button></div>}
              {/* <div className='nom_prenom'>
                <div className="input1">
                  <input type="text" placeholder='Option' id='option'{...register('options.0.key')} />
                </div>
                <div className="input2">
                  <input type="text" placeholder="Exemple d'option" id="exp_option"{...register('options.0.value')} className="input-field" />
                </div>
              </div> */}
              {piece.map((opt, index) => (
                <div key={index}>
                  <div className='nom_prenom'>
                    <div className="input1 margin_bot">
                      <select className="input-field"{...register(`piece_origine_fournis.${index}.key`)}>
                        <option value="" selected disabled hidden >Piéce fournis à l’origine</option>
                        <option value="Transmission">Piéce 1</option>
                        <option value="Cylindrée">Piéce 2</option>
                      </select>
                    </div>
                    <div className="input2">
                      <input type="text" placeholder="Exemple d'option" id="exp_option"{...register(`piece_origine_fournis.${index}.value`)} className="input-field" />
                    </div>

                  </div>
                  <div className="input1">
                    {index !== 0 && <div className="nom_prenom reverse"><button className="btn deletebtn" type="button" onClick={() => RemovePiece(index)}><span><svg style={{ width: 18 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg></span></button></div>}

                  </div>
                </div>
              ))}
              {addableP && <div className="nom_prenom justify"><button className="btn addbtn" type="button" onClick={() => AddPiece()}>Ajouter Piéce</button></div>}
              {/* <div className='nom_prenom'>
                <div className="input1">
                  <input type="text" className="input-field" placeholder='Piéce fournis à l’origine' id='piece_origine_fournis' {...register('piece_origine_fournis.0.key')} />
                </div>
                <div className="input2">
                  <input type="text" placeholder="Exemple d'option" id="exp_option2" {...register('piece_origine_fournis.0.value')} className="input-field" />
                </div>
              </div> */}
              <div className='nom_prenom margin_bot disblock'>
                <div className="input1 Long input-icons">
                  <textarea name="textarea" placeholder='Description'{...register('description', { required: true })}
                    className={
                      errors.description ? "errorInput textArea" : "textArea"}
                    rows="5" cols="50"
                  >
                  </textarea>
                </div>
                {errors.description && <p className="error">*ce champ est obligatoire</p>}
              </div>

            </div>
          </div>
          <div className="formAchat">

            <h1 className="Atelierlabel">Photo</h1>
            <div className='atelierForm '> <br /> <br /><p className={
              errors.images ? "erreur" : ""}>Vous devez ajoutez au moins 3 photos</p>

              <div className='nom_prenom imageWrapper'>
                {/* <DragDrop /> */}
                <div id="form-file-upload" onDragEnter={handleDrag}>



                  <input type="file" id="input-file-upload" accept="image/*" multiple={true} onChange={handleChange} />
                  <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : errors.images ? "errorInput plus" : "plus"}>
                    <div>
                      <label htmlFor="input-file-upload" id="upfile">
                        <img className='img' src={addphoto} alt="addphoto" />
                      </label>
                    </div>
                  </label>
                  {!AttachImage && <div className={
                    errors.images ? " Aucun erreur pad" : "Aucun pad"}>Aucune image choisie</div>}
                  {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                  {/* {AttachImage && selectedImages.map(post => {
                    return (
                      <div>{post.name}</div>)
                  })} */}

                  {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                </div>
              </div>
            </div>
            {Displayimg()}
            <br />
          </div>
          <div className="formAchat">

            <h1 className="Atelierlabel">Piéces jointes</h1>
            <div className='atelierForm '> <br /> <br /><p>Vous pouvez nous fournir tout autre documents concernant votre moto (factures d'entretiens, ...)</p>

              <div className='nom_prenom marg'>
                <label htmlFor="fileinput" className="marginAuto" ><button type="button" className={
                  errors.attachements ? "errorInput fileinputt" : "fileinputt"} onClick={onButtonClick}
                >Sélect fichiers</button> </label>
                {!AttachFile && <div className={
                  errors.attachements ? " Aucun erreur" : "Aucun"}>Aucun fichier choisi</div>}
                <input ref={inputRef} className="hidden" type="file" multiple id="fileinput" onChange={handleChange2} />
              </div>

            </div>
            {DisplayFile()}
          </div>

          <div className="formAchat">
            {/* coordonnées client */}
            <h1 className="Atelierlabel">Tarif</h1>
            <div className='atelierForm '> <br />

              <div className='nom_prenom tarif'>
                <input type="number" min="0" max="99999999999999" placeholder="Tarif demandé   xxx.xxx" {...register('price', {
                  required: true, setValueAs: v => parseInt(v), validate: {
                    positive: v => parseInt(v) > 0,
                  },
                })}
                  className={
                    errors.price ? "errorInput inputPiece" : "inputPiece"
                  } />
                {/* <input className="hidden" {...register('status')} />
                <input className="hidden" {...register('demand_type.0')} /> */}
                <input className="hidden" {...register('permis_a2', { required: true })} />
                <input className="hidden" {...register('images', { required: true })} />
                {/* <input className="hidden" {...register('images.0.large')} />
                <input className="hidden" {...register('images.0.medium')} /> */}
                <input className="hidden" {...register('attachements', { required: true })} />
              </div>
              <p>Ne pas mettre  €  ou euros seulement le tarif demandé.</p>
              <p>Le tarif donné par MHM Motos ne sera validé qu’après expertise faite par un technicien dans notre atelier.</p>
              <br />
              <br />
            </div>
          </div>
          <div className="achatButton">
            <button className='atlierFormButton' onClick={() => {
              setattachments();
              setValue(`phone`, value);

            }
            }
              type='submit'> Envoyer</button> <br />

          </div>
          <br /><br /><br />
        </form>
      </div>
      {isPending && <Spinner />}
      {Failure && <div>
        <div className="modal-overlay" ></div>
        <div className="modal">
          <div className='modal-body'>
            <div className="resetWrapper">
              <div className="resetModal">
                <a href="#" className='modal-close' onClick={() => {
                  setFailure(false);
                  // console.log("setVerifModal")
                }}>&times;</a>
                <div className="title">
                  <h2 className="oup">Oups !</h2>
                  <p>Demande échouée</p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      }
      {verifModal && <div>
        <div className="modal-overlay" ></div>
        <div className="modal">
          <div className='modal-body'>


            <div className="resetWrapper">
              <div className="resetModal">
                <a href="#" className='modal-close' onClick={() => {
                  setVerifModal(false);
                  window.location.replace("/rachat")
                }}>&times;</a>
                <div className="title">
                  <h2>Merci !</h2>
                  <p>Demande envoyé avec succès</p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      }
      <Footer />
    </div>
  );
};

export default Achat;
