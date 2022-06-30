import "./style.css";
import React, { useState, useEffect } from "react";
import Pagination from "./Component/Pagination";

export default function App() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        return Response;
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [showPerPage, setShowPerPage] = useState(4);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <div className="App">
      <div className="container py-4">
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5>
                    #{post.id} {post.title}
                  </h5>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}
