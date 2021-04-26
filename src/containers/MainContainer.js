import React, { useCallback, useState } from "react";
import Header from "../components/Header/Header";
import Dropdown from "../components/Dropdown/Dropdown";

const MainContainer = () => {
  const [location, setLocation] = useState(null);

  const handleChangeLocationClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
      <Header />
      <Dropdown onChangeLocationClick={handleChangeLocationClick} />
    </>
  );
};

export default MainContainer;
