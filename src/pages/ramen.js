import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: { eq: "ramen.jpg" }) {
      childImageSharp {
        fixed(width: 300){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const RamenPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <p>The cat likes ramen</p>

    <Img fixed={data.file.childImageSharp.fixed}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RamenPage
