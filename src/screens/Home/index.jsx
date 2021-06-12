import React, { useEffect, useState } from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Header";
import SideNavLeft from "../../components/SideNavLeft";
import SideNavRight from "../../components/SideNavRight";
import Posts from "../../components/Posts";

// Services
import { getPosts } from "../../services";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const request = async () => {
      const json = await getPosts();
      setData(json);
    };
    request();
  }, []);

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
