// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Post from "./Post";

// const Pagination = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage] = useState(9);
//   const [totalPost, setTotalPost] = useState(0);
//   useEffect(() => {
//     const loadPost = async () => {
//       setLoading(true);
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       setPosts(response.data);
//       setTotalPost(response.data.length);
//       setLoading(false);
//     };
//     loadPost();
//   }, []);
//   const indexOfLastPage = currentPage + postPerPage;
//   const indexOfFirstPage = indexOfLastPage - postPerPage;
//   const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);
//   console.log("indexlastpage",indexOfLastPage)

//   const paginate = (pageNum) => setCurrentPage(pageNum);
//   const prevPage = () => setCurrentPage(currentPage - 1);
//   const nextPage = () => setCurrentPage(currentPage + 1);
//   const showPagination = () => {
//     return (
//       <Post
//         postPerPage={postPerPage}
//         totalPost={totalPost}
//         currentPage={currentPage}
//         paginate={paginate}
//         prevPage={prevPage}
//         nextPage={nextPage}
//       />
//     );
//   };
//   return (
//     <div>
//       <h>pagination</h>
//       <ul className="list-group mb-4">
//         {!loading
//           ? currentPosts.map((post) => (
//               <li key={post.id} className="list-group-item">
//                 {post.title}
//               </li>
//             ))
//           : "loading..."}
//       </ul>
//       <div>{showPagination()}</div>
//     </div>
//   );
// };

// export default Pagination;

// import React, { useState, useEffect } from "react";

// const url = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch(url)
//       .then((response) => {
//         if (response.ok) return response.json();
//         throw new Error("something went wrong while requesting posts");
//       })
//       .then((posts) => setPosts(posts))
//       .catch((error) => setError(error.message));
//   }, []);

//   if (error) return <h1>{error}</h1>;

//   return <div></div>;
// }

