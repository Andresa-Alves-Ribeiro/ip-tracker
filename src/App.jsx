import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import AddressContainer from "./components/AddressContainer/AddressContainer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
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
        <Input ipState={[ip, setIp]} search={resultData} />
        <AddressContainer data={result} />
        <Map lat={result.lat || -50} lon={result.lon || 10}/>
      </Header>

      
    </>
  );
}

export default App;