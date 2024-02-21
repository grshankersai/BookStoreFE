import React from "react";
import Header from "../../components/organisms/Header";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

export interface BaseTemplateProps {
  templateBody: React.ReactNode;
}

const OuterBox = styled(Box)(({}) => ({
  height: "100%",
  width: "100%",
  padding: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const BaseTemplate: React.FC<BaseTemplateProps> = ({ templateBody }) => {
  return (
    <>
      <Header />
      <OuterBox>{templateBody}</OuterBox>
    </>
  );
};

export default BaseTemplate;
