import React, { useEffect, useState } from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Header";
import SideNavLeft from "../../components/SideNavLeft";
import SideNavRight from "../../components/SideNavRight";
import Posts from "../../components/Posts";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
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
            <Posts data={data.results ? data.results : []} />
          </main>
          <SideNavRight />
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}

// const getCharacters = async () => {
//   const response = await fetch("https://rickandmortyapi.com/api/character")
//   const data = await response.json()
//   return data
// }

// fetch("https://rickandmortyapi.com/api/character?page=2")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
