import React from "react";
import { styled } from "styled-components";

const Home = () => {
  return (
    <Content>
      <AboutMe>About Me</AboutMe>
      <Pic>
        <Image src="pfp.jpg" alt="profilepic" />
        <figcaption>
          <small> Nah, that's not me </small>
        </figcaption>
      </Pic>
      <Para>
        I&rsquo;m a designer-turned-developer & math graduate with a strong
        interest in applied cryptography, zero knowledge proofs & its
        application in the Ethereum ecosystem.
        <br />
        <br />
        Proficient in the MERN stack and skilled in solidity, I've been
        exploring the intricacies of huffing and low-level EVM for over a year.
        <br />
        <br />
        I&rsquo;m currently a zk fellow at&nbsp;
        <StyledLink href="https://abcdelabs.github.io/zkcamp">
          ABCDE Labs
        </StyledLink>{" "}
        & a ZK fellow at{" "}
        <StyledLink href="https://www.zkcamp.xyz/aztec">
          Aztec's Noir Cohort - 1
        </StyledLink>
        . I specialize in the development & optimization of ZK circuits in
        Circom, Halo2, Noir.
        <br />
        <br />
        <span style={{ color: "white" }}>
          If you're hiring for the post of zk circuit engineer / zk auditor,
          feel free to reach out to me via email or twitter.
        </span>
      </Para>
      <Contact>Contact</Contact>
      <Links>
        [
        <StyledLink
          href="mailto:00nullity@gmail.com"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Mail
        </StyledLink>
        ] [
        <StyledLink
          href="https://twitter.com/nullity00"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Twitter
        </StyledLink>
        ] [
        <StyledLink
          href="https://github.com/nullity00"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          GitHub
        </StyledLink>
        ] [
        <StyledLink
          href="https://be.net/nullity00"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Behance
        </StyledLink>
        ]
      </Links>
    </Content>
  );
};
const Content = styled.div`
  display: block;
  color: #9a9a9a;
`;
const AboutMe = styled.h2`
  font-family: Lato, Arial, sans-serif;
  font-weight: 400;
  color: #ffffff;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Pic = styled.figure`
  padding: 0.25rem;
  margin: 0 0;
  float: right;
  max-width: 185px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  width: 185px;
  aspect-ratio: auto 185 / 185;
  overflow-clip-margin: content-box;
  overflow: clip;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #1bd207;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Para = styled.p``;
const Contact = styled.h2`
  font-family: Lato, Arial, sans-serif;
  font-weight: 400;
  color: #ffffff;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Links = styled.span``;

export default Home;
