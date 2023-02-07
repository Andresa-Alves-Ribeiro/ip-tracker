import React, { useState, useEffect } from "react";
import AddressContainer from "./components/AddressContainer/AddressContainer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Map from "./components/Map/Map";
import GlobalStyle from "./GlobalStyle";
import getData from "./services/axios";

function App() {

  const [ip, setIp] = useState("")
  const [result, setResult] = useState("")


  const resultData = async (ipNumber) => {
    const search = await getData(ipNumber);

    if (search.status === 200) {
      setResult(search.data)
    }
  }

  useEffect(() => {
    resultData();
  }, [])


  return (
    <>
      <GlobalStyle />

      <Header>
        <Search ipState={[ip, setIp]} search={resultData} />
        <AddressContainer data={result} />
      </Header>
      <Map lat={result.lat || -50} lon={result.lon || 10} />

    </>
  );
}

export default App;