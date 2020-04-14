import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.color1};
`;

const Showcase: React.FC = () => {
  return <Title>Showcase</Title>;
};

export default Showcase;
