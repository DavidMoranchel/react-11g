import React, { useEffect, useState } from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Header";
import SideNavLeft from "../../components/SideNavLeft";
import SideNavRight from "../../components/SideNavRight";
import Posts from "../../components/Posts";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://react-11g-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data.results);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <SideNavLeft />
          <main className="col-8">
            <Posts
              data={Object.entries(data).length ? Object.entries(data) : []}
            />
          </main>
          <SideNavRight />
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
