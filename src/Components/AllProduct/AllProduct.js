import React, { useEffect, useState, useCallback } from "react";
import Filters from "../Filtre/Filtre";
import axios from "axios";
import Loader from "react-js-loader";
import placeholder from "../../assets/01.png";
import CardMoto from "../CardMoto/CardMoto";
import Spinner from "../Spinner/Spinner";
import Test from "../Test/Test";
import Post from "../Pagination/Post";
import "../CardMoto/CardMoto.scss";

const AllProducts = () => {
  const [productss, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [radio, setRadio] = useState();
  const [yearMax, setMax] = useState();
  const [yearMin, setMin] = useState();
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  // const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);
  const [totalPost, setTotalPost] = useState(0);
  const [indexOfFirstPage, setIndexFirstPage] = useState(0);
  const [indexOfLastPage, setIndexLastPage] = useState(9);
  let test = [];
  let j = 0;

  for (let i = j; i <= totalPost - 23; i++) {
    test.push(filters[i]);
  }

  // const indexOfLastPage = currentPage + postPerPage;
  // const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = filters.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
    setIndexFirstPage((pageNum - 1) * 9);
    setIndexLastPage(pageNum * 9);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setIndexFirstPage(indexOfFirstPage - 9);
    setIndexLastPage(indexOfLastPage - 9);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setIndexFirstPage(indexOfFirstPage + 9);
    setIndexLastPage(indexOfLastPage + 9);
  };
  // console.log(paginate);
  const showPagination = () => {
    return (
      <Post
        postPerPage={postPerPage}
        totalPost={totalPost}
        currentPage={currentPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    );
  };
  // console.log("total posts", totalPost);

  const onChangePrice = async ({ min, max }) => {
    setPriceMax(max);
    setPriceMin(min);
    try {
      const json = JSON.stringify({
        price_max: priceMax,
        price_min: priceMin,
        year_min: yearMin,
        year_max: yearMax,
        permis_a2: radio,
      });
      // const res = await axios.post(
      //   "https://r8lq7yzqj5.execute-api.eu-west-1.amazonaws.com/Dev/motors/filters1",
      //   json
      // );
      // setFilters(res.data);
      // setLoader(false);
      // console.log(res.data);
      // console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRadio = () => {
    setRadio(!radio);
    filterPermis();
  };

  const onSelectMin = (e) => {
    setMin(e.target.value);
    filterYear();
    // filterYear();
  };
  const onSelectMax = (e) => {
    setMax(e.target.value);
    filterYear();
    // filterYear();
  };
  const getProducts = async () => {
    const json = JSON.stringify({});
    try {
      const res = await axios.post(
        "https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/motors/all",
        json
      );
      setProducts(res.data);
      setFilters(res.data);
      setLoading(false);
      // setTotalPost(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  const filterPermis = async () => {
    try {
      const json = JSON.stringify({
        permis_a2: radio,
        year_min: yearMin,
        year_max: yearMax,
        permis_a2: radio,
        price_max: priceMax,
        price_min: priceMin,
      });
      // const res = await axios.post(
      //   "https://r8lq7yzqj5.execute-api.eu-west-1.amazonaws.com/Dev/motors/filters2",
      //   json
      // );
      // setFilters(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const filterYear = async () => {
    try {
      const json = JSON.stringify({
        year_min: yearMin,
        year_max: yearMax,
        permis_a2: radio,
        price_max: priceMax,
        price_min: priceMin,
      });
      // const res = await axios.post(
      //   "https://r8lq7yzqj5.execute-api.eu-west-1.amazonaws.com/Dev/motors/filters3",
      //   json
      // );
      // setFilters(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const allFilters = useCallback(
    async (signal) => {
      try {
        const json = JSON.stringify({
          year_min: yearMin,
          year_max: yearMax,
          permis_a2: radio,
          price_max: priceMax,
          price_min: priceMin,
        });

        const res = await axios.post(
          "https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/motors/all",
          json,
          {
            signal,
          }
        );
        // setCurrentPage(1)
        setFilters(res.data);
        setTotalPost(res.data.length);
      } catch (error) {
        console.log(error);
      }
    },
    [radio, yearMax, yearMin, priceMin, priceMax]
  );

  useEffect(() => {
    setCurrentPage(1);
    setIndexFirstPage(0);
    setIndexLastPage(9);
    const controller = new AbortController();
    allFilters(controller.signal);
    return () => {
      controller.abort();
    };
  }, [radio, yearMax, yearMin, priceMin, priceMax]);
  useEffect(() => {
    let stop = true;
    if (stop) {
      getProducts();
      stop = false;
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 400);
  }, [currentPage]);

  //   console.log(productss)
  // let arr = [];
  // let alea = [];
  // for (let i = 0; i < filters.length; i++) {
  //   arr.push(filters[i]);
  //   // console.log("the array",i,arr)
  // }
  // // console.log(arr)
  // function arrayRandom(a) {
  //   return a[Math.floor(Math.random() * a.length)];
  // }
  // for (let i = 0; i < 3; i++) {
  //   alea.push(arrayRandom(arr));
  //   console.log(alea);
  // }
  let arr = [];
  let price = [];
  // let type = [];
  const date = filters.filter((e, i) => i < 1);
  for (let i = 0; i < productss.length; i++) {
    arr.push(productss[i]["date_per_cerculations"]);
    price.push(productss[i]["price"]);
    // type.push(productss[i]["discount"]["type_discount"]);
  }

  const filteredarr = arr.filter(function (ele, pos) {
    return arr.indexOf(ele) == pos;
  });

  
  for (let i = 0; i < filteredarr.length; i++) {
    var indexOfFirst = filteredarr[i].indexOf("-");
    if (indexOfFirst != 4) {
      filteredarr[i] = filteredarr[i].split("-").reverse().join("-");
    }
    
  }

  let lst = [];
  for (let i = 0; i < filteredarr.length; i++) {
    lst.push(new Date(filteredarr[i]));
  }
  console.log("lst", lst);
  let yearList = [];
  for (let i = 0; i < lst.length; i++) {
    yearList.push(lst[i].getFullYear());
  }

  // console.log("yearlist",yearList)
  var minAnn = Math.min(...yearList);
  // console.log("minann",minAnn)

  var maxAnn = Math.max(...yearList);
  // console.log("maxann", maxAnn);

  // console.log("The filtered array ", filteredarr);
  var prixMin = Math.min(...price);

  var max = Math.max(...price);

  // console.log(prixMin);

  return (
    <div>

      {!loading && (
        <div>
        <Filters
          onChangePrice={onChangePrice}
          handleRadio={handleRadio}
          radio={radio}
          onSelectMin={onSelectMin}
          onSelectMax={onSelectMax}
          minAnn={minAnn}
          maxAnn={maxAnn}
          max={max}
          Minprice={prixMin}
        />
      


      {!loading && filters.length > 1 && (
        <p className="title">
          {}
          {filters.length} motos disponibles dans nos locaux
        </p>
      )}
      {!loading && filters.length <= 1 && (
        <p className="title">
          {}
          {filters.length} motos disponible dans nos locaux
        </p>
      )}

      
      <div className="allprod-inner">
        {(currentPosts || []).map((item) =>
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
      <div className="pagination">{showPagination()}</div>
      </div>

      )}
      {loading && (
        <div className="emptyprod">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default AllProducts;
