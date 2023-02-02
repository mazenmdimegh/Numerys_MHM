import React,{useState} from "react";

const Post = ({
  postPerPage,
  totalPost,
  currentPage,
  paginate,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];
  const pageNumbers1 = [];
  const pageNumbers2 = [];
  let restPosts = 0;
   const [firstPage, setFirstPage] = useState(1);
   const [lastPage, setLastPage] = useState(3);
  

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
    restPosts = (totalPost / postPerPage) * i;
    // console.log("rest", restPosts);
    // console.log("total posts",totalPost)
    // console.log("posts", i*postPerPage);
  }
  for (let i = 1; i <= 3; i++) {
    pageNumbers1.push(i);
  }
  for (let i = 3; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers2.push(i);
  }
  const pageNumbers3 = pageNumbers.slice(firstPage,lastPage);
  // if (Math.ceil(totalPost / postPerPage) <= 3) {
  //   for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
  //     pageNumbers1.push(i);
  //   }
  // }
  if (currentPage < 3 && totalPost > 9) {
    return (
      <div className="pagination justify-content-center">
        {currentPage !== 1 && (
          <li className="page-item">
            <button
              onClick={() => prevPage()}
              className="btn-page-prev"
              style={{ cursor: "pointer" }}
            >
              {"<"}
            </button>
          </li>
        )}
        {pageNumbers1.map((num) => (
          <li className="page-item" key={num}>
            <a
              onClick={() => paginate(num)}
              style={{
                cursor: "pointer",
                backgroundColor: `${currentPage === num ? "red" : ""}`,
                color: `${currentPage === num ? "white" : ""}`,

                border: `${currentPage === num ? "1px solid red" : ""}`,
              }}
              id="num"
            >
              {num}
            </a>
          </li>
        ))}
        {pageNumbers1.length !== currentPage && (
          <li className="page-item">
            <button
              onClick={() => nextPage()}
              className="btn-page-next"
              style={{ cursor: "pointer" }}
            >
              {">"}
            </button>
          </li>
        )}
      </div>
    );
  }
  if (currentPage < 3 && totalPost > 9) {
    return (
      <div className="pagination justify-content-center">
        {currentPage !== 1 && (
          <li className="page-item">
            <button
              onClick={() => prevPage()}
              className="btn-page-prev"
              style={{ cursor: "pointer" }}
            >
              {"<"}
            </button>
          </li>
        )}
        {pageNumbers1.map((num) => (
          <li className="page-item" key={num}>
            <a
              onClick={() => paginate(num)}
              style={{
                cursor: "pointer",
                backgroundColor: `${currentPage === num ? "red" : ""}`,
                color: `${currentPage === num ? "white" : ""}`,

                border: `${currentPage === num ? "1px solid red" : ""}`,
              }}
              id="num"
            >
              {num}
            </a>
          </li>
        ))}
        {pageNumbers1.length !== currentPage && (
          <li className="page-item">
            <button
              onClick={() => nextPage()}
              className="btn-page-next"
              style={{ cursor: "pointer" }}
            >
              {">"}
            </button>
          </li>
        )}
      </div>
    );
  }
  if (currentPage >= 3) {
    return (
      <div className="pagination justify-content-center">
        {currentPage !== 1 && (
          <li className="page-item">
            <button
              onClick={() => prevPage()}
              className="btn-page-prev"
              style={{ cursor: "pointer" }}
            >
              {"<"}
            </button>
          </li>
        )}
        {pageNumbers2.map((num) => (
          <li className="page-item" key={num}>
            <a
              onClick={() => paginate(num)}
              style={{
                cursor: "pointer",
                backgroundColor: `${currentPage === num ? "red" : ""}`,
                color: `${currentPage === num ? "white" : ""}`,
                border: `${currentPage === num ? " 1px solid red" : ""}`,
              }}
              id="num"
            >
              {num}
            </a>
          </li>
        ))}
        {pageNumbers.length !== currentPage && (
          <li className="page-item">
            <button
              onClick={() => nextPage()}
              className="btn-page-next"
              style={{ cursor: "pointer" }}
            >
              {">"}
            </button>
          </li>
        )}
      </div>
    );
  }
};

export default Post;
