import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { styled, keyframes } from "styled-components";
import { useEffect } from "react";

const SideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  function getTitleFromPath(pathname) {
    switch (pathname) {
      case "/":
        return "nullity";
      case "/projects":
        return "nullity - projects";
      case "/courses":
        return "nullity - courses";
      case "/career":
        return "nullity - career";
      default:
        return "nullity";
    }
  }
  useEffect(() => {
    document.title = getTitleFromPath(location.pathname);
  });
  return (
    <SideBarDiv>
      <Heading>nullity</Heading>
      <Nav>
        <StyledLink to="/" isactive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/projects" isactive={pathname === "/projects"}>
          Projects
        </StyledLink>
        <StyledLink to="/courses" isactive={pathname === "/courses"}>
          Courses
        </StyledLink>
        <StyledLink to="/career" isactive={pathname === "/career"}>
          Career
        </StyledLink>
      </Nav>
    </SideBarDiv>
  );
};
const SideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 40px;
  width: 160px;
`;
const Heading = styled.div`
  font-size: 1.2em;
  border-bottom: 1pt solid #000000;
  font-family: "Roboto Mono", monospace;
`;
const fadeIn = keyframes`
from {
  border-right-color: transparent;
}
to {
  border-right-color: #1bd207;
}
`;

const fadeOut = keyframes`
  from {
    border-right-color: #1bd207;
  }
  to {
    border-right-color: transparent;
  }
  `;
const StyledLink = styled(NavLink)`
  color: #9a9a9a;
  border-right: ${(props) =>
    props.isactive ? "3px solid #1bd207 !important" : "3px solid transparent"};
  transition: border-color 0.1s;
  &:hover {
    animation: ${fadeIn} 0.5s forwards;
  }
  &:not(:hover) {
    animation: ${fadeOut} 0.5s forwards;
  }
  margin: 2px;
  padding-right: 5px;
`;
const Nav = styled.div`
  padding: 5px 5px 0 0;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default SideBar;
