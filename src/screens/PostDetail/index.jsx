import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";

// Services
import { getPostDetail } from "../../services";

export default function PostDetail() {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const json = await getPostDetail(id);
      setData(json);
    };

    request();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col m-5">
            <h1>{data.title}</h1>
            <img
              alt={data.title && data.title}
              src={data.image && data.image}
              style={{
                width: "400px",
              }}
            />
            <p>{data.description && data.description}</p>

            <p>
              Author: <strong>{data.author}</strong>
            </p>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
