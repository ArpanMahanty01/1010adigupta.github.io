import React from "react";
import { styled } from "styled-components";

const Career = () => {
  return (
    <Content>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> ZK Hacker </Emphasize>
          </Role>
          <Year>July 2023 - Ongoing</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.abcde.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>ABCDE Labs</RightHeader>
          <div class="detail">
            ZK Camp is StyledLink two-month hybrid program consisting of ZK
            curriculum, ZK Hackathon and Demo Day.
          </div>
        </Right>
      </CareerDiv>

      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> ZK Auditing Fellow </Emphasize>
          </Role>
          <Year>May 2023 - June 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://yacademy.dev/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ] [
            <StyledLink
              href="https://github.com/nullity00/audits"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              reports
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>YAcademyDAO</RightHeader>
          <div class="detail">
            A 5 week program for zk auditors where to audit circom codebases
            <Accomplishments>Accomplishments</Accomplishments>
            <ul>
              <li>
                Audited circuits written in circom for Rate Limiting Nullifier
                project by the PSE team & spartan ECDSA by Personae Labs.
              </li>
              <li>
                Explored formal verification tools for circom including Picus &
                Ecne
              </li>
              <li>
                Tutored peers on ZK theory, Circom & shared notes for
                non-fellows in the public discussion channels.
              </li>
            </ul>
          </div>
        </Right>
      </CareerDiv>

      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> Blockchain Developer </Emphasize>
          </Role>
          <Year>June 2022 - Feb 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://spect.network"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ] [
            <StyledLink
              href="https://github.com/spect-ai"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              code
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Spect</RightHeader>

          <div class="detail">
            Spect provides web3 forms, projects & automations to coordinate &
            build DAOs the decentralized way. Funded by PolygonDAO, GR14 & Push
            Protocol
            <Accomplishments>Accomplishments</Accomplishments>
            <ul>
              <li>
                Revamped the application’s frontend by providing feasible UI
                using React.js & Next.js.
              </li>
              <li>
                Accelerated the integration of Soul bound Tokens into Spect
                Profiles by designing the tokens.
              </li>
              <li>
                Designed & deployed the GitHub bot for seamless integration into
                Spect Network using GitHub API & webhooks.
              </li>
              <li>
                Used Nest.js, Mongoose, MongoDB to create endpoints in the CQRS
                pattern.
              </li>
            </ul>
          </div>
        </Right>
      </CareerDiv>

      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> Web Developer </Emphasize>
          </Role>
          <Year>Oct 2020 - Mar 2022</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.linkedin.com/company/flawed-arts/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ] [
            <StyledLink
              href="https://www.instagram.com/flawed.arts_/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              portfolio
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Flawed Arts</RightHeader>
          <div class="detail">
            Flawed Arts is an Indian Graphic designing and Digital Marketing
            company
            <Accomplishments>Accomplishments</Accomplishments>
            <ul>
              <li>
                Designed the client's applications using Wordpress, Elementor,
                Figma, Canva and developed them using JS Frameworks and Django.
              </li>
              <li>
                Developed POS Applications for small sized business using
                React.js, MongoDB and AWS S3 buckets.
              </li>
            </ul>
          </div>
        </Right>
      </CareerDiv>

      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> Graphic Designer </Emphasize>
          </Role>
          <Year>Nov 2019 - Aug 2020</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.behance.net/nullity00"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              portfolio
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Freelance</RightHeader>
          <div class="detail">
            Teamed up with my fellow friend
            <span>
              <StyledLink
                href="https://www.behance.net/abdulmajeed00"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Abdul Majeed
              </StyledLink>
            </span>
            to design logos, posters, banners, etc. for various clients using
            Adobe Illustrator, Adobe Photoshop, Adobe XD, Figma & Blender.
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

const Year = styled.div`
  text-align: right;
  font-weight: 400;
  display: block;
`;
const Right = styled.div`
  display: block;
`;
const Role = styled.div`
  display: block;
`;
const Emphasize = styled.span`
  color: #d7d7d7;
  text-align: right;
  font-weight: 700;
`;
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
const RightHeader = styled.div`
  color: #ffffff;
  font-size: 1.2em;
  margin-bottom: 0.5rem;
  display: block;
`;

const Accomplishments = styled.div`
  font-style: normal;
  font-size: 0.8em;
  font-weight: 200;
  color: #464646;
  margin-top: 0.5rem;
`;

export default Career;
