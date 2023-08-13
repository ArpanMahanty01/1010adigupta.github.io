import React from "react";
import { styled } from "styled-components";

const Courses = () => {
  return (
    <Content>
      <Heading>Online Courses</Heading>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> BTA</Emphasize>
          </Role>
          <Year>June 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://blockchaintrainingalliance.com/products/zcash"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Understanding and Developing on Zcash</RightHeader>
          <div class="detail">
            Learnt the foundations of Zcash, its use cases, development &
            governance, halo2 in zcash.
          </div>
        </Right>
      </CareerDiv>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> UC Berkeley RDI</Emphasize>
          </Role>
          <Year>Feb - May 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://zk-learning.org/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>ZKP MOOC</RightHeader>
          <div class="detail">
            The bootcamp focused on the theoretical aspects of ZK Proofs and
            constructing StyledLink ZK Proof using SNARKs, Polynomial
            Commitments, FRI, encryption algorithms and so much more.
          </div>
        </Right>
      </CareerDiv>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> Encode Club </Emphasize>
          </Role>
          <Year>Feb - March 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://opensea.io/assets/matic/0xdBf2138593aeC61d55d86E80b8ed86D7b9ba51F5/2858"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              NFT
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>ZK Bootcamp 2023</RightHeader>
          <div class="detail">
            Successfully completed an intensive boot camp Zero Knowledge Proofs
            gaining practical knowledge and hands-on experience in Zokrates,
            Cairo, Noir, SnarkyJS, Circom.
          </div>
        </Right>
      </CareerDiv>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> 0xparc </Emphasize>
          </Role>
          <Year>Jan 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://zkiap.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>
            [MIT IAP 2023] Modern Zero Knowledge Cryptography
          </RightHeader>
          <div class="detail">
            Studied the mathematical foundations of modern zero-knowledge
            protocols (interactive protocols, elliptic curve cryptography,
            pairing-based cryptography, polynomial commitment schemes, zkSNARKs,
            and more) & worked on practical constructions of digital systems
            enabled by ZK primitives
          </div>
        </Right>
      </CareerDiv>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> Coursera </Emphasize>
          </Role>
          <Year>May 2022</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.coursera.org/specializations/blockchain"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>
            Blockchain Specialization by University at Buffalo & The State
            University of New York
          </RightHeader>
          <div class="detail">
            Got the basics of blockchain technology, its applications and the
            architecture of Bitcoin, Ethereum, Hyperledger and other
            decentralized applications.
          </div>
        </Right>
      </CareerDiv>
      <Heading>Formal Education</Heading>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> St. Joseph's College </Emphasize>
          </Role>
          <Year>Jun 2018 - May 2021</Year>
        </Left>
        <Right>
          <RightHeader>Bachelors in Mathematics</RightHeader>
          <div class="detail">
            Completed my Bachelor's degree in Mathematics with StyledLink CGPA
            of 8.6 with in-depth knowledge in Discrete Maths, Graph Theory,
            Algorithms, C++, MATLAB, Probability, Fourier Analysis & Transform,
            Regression, Vectors & Calculus.
          </div>
        </Right>
      </CareerDiv>
    </Content>
  );
};

const Content = styled.div`
  display: block;
`;

const CareerDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;
const Left = styled.div`
  width: 160px;
  flex-shrink: 0;
  margin-right: 20px;
  padding-top: 3px;
  text-align: right;
  font-weight: 700;
`;
const Emphasize = styled.span`
  color: #d7d7d7;
  text-align: right;
  font-weight: 700;
`;
const Role = styled.div``;
const LinkSpan = styled.div`
  font-style: normal;
  font-size: 0.8em;
  font-weight: 200;
  text-align: right;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #1bd207;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Right = styled.div`
  display: block;
`;
const RightHeader = styled.div`
  color: #ffffff;
  font-size: 1.2em;
  margin-bottom: 0.5rem;
  display: block;
`;
const Year = styled.div`
  text-align: right;
  font-weight: 400;
  display: block;
`;

const Heading = styled.h2`
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

export default Courses;
