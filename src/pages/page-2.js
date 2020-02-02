import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const ThingsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  &:last-child {
    margin-bottom: 0
  }
`
const Description = styled.div`
  display: flex;
  margin-left: 18px;
  padding: 12px;
`
const StuffName = styled.h3`
margin: 0 0 12px 0;
padding: 0;
`
const MoreStuffName = styled.p`
  margin: 0
`

const Things = props => (
  <ThingsWrapper>
    <Description>
      <StuffName>{props.stuffName}</StuffName>
      <MoreStuffName>{props.moreStuffName}</MoreStuffName>
    </Description>
  </ThingsWrapper>
)

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>What does the cat like?</h1>
    <p>The cat likes ramen</p>
    <Things
      stuffName= "hello"
      moreStuffName= "that is great" />

    <Link to="/ramen">check out my ramen</Link>
    <br></br>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
