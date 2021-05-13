import React from "react";
import styled from "styled-components";

const CompanyLogoBox = props => {
  const { imgsrc } = props;

  return (
    <CompanyLogoBoxWrapper>
      <img src={imgsrc}></img>
    </CompanyLogoBoxWrapper>
  );
};

export default CompanyLogoBox;

export const CompanyLogoBoxWrapper = styled.div`
  flex: 1;
  max-width: 80px;
  margin: 10px;

  img {
    width: 100%;
  }
`;
