import React, { useCallback, useState } from "react";
import Header from "../components/Header/Header";
import Dropdown from "../components/Dropdown/Dropdown";

const MainContainer = () => {
  //  const [location, setLocation] = useState(null);

  const onSubmit = data => {
    console.log(`this is my child data: ${data.value}`);
  };

  return (
    <>
      <Header />
      <Dropdown onSubmit={onSubmit} />
    </>
  );
};

export default MainContainer;
