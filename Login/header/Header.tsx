import React from "react";
import styled from "styled-components";

const StyledHeadWrapper = styled.div`
  background-color: #228cc5;
  display: flex;
  justify-content: row;
  align-items: center;
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  margin-right: auto;
`;
const StyledAnchor = styled.a`
  text-decoration: none;
  color: #ffffff;
  margin: 0 10px;
`;

export const Header: React.FC = () => {
  const cssH1 = {
    fontSize: '1.6em',
  }
  const cssA = {
    textDecoration: "none",
    color: '#ffffff',
  }
  const cssButton = {
    marginRight: "15px",
    textDecoration: "none",
    color: "#ffffff"
  }
  return (
    <header>
      <StyledHeadWrapper>
        <h1 style={cssH1}><a style={cssA} href="/" rel="noreferrer noopener">TOGO LIST</a></h1>
        <StyledHeader>
          <StyledAnchor href="#" rel="noreferrer noopener"><span>MYPAGE</span></StyledAnchor>
          <StyledAnchor href="#" rel="noreferrer noopener"><span>POSTS</span></StyledAnchor>
          <StyledAnchor href="#" rel="noreferrer noopener"><span>MAP</span></StyledAnchor>
        </StyledHeader>
        <div className="login">
          <a href="#" style={cssButton}>Login</a>
        </div>
      </StyledHeadWrapper>
    </header>
  );
}