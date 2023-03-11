import * as React from "react"

// Import components from Gatsby and plugins Gatsby
import { Link, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

// Import Components for App
import {
  Layout,
  Hero,
  Title,
  BlockInfo,
  Seo,
  ContactForm,
  ContactInfo,
} from "components"

// GraphQl Queries
export const query = graphql`
  {
    file(relativePath: { eq: "Le_jardin.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          jpgOptions: { progressive: true }
        )
      }
      name
    }
  }
`

const contactPage = ({ data }) => {
  // Component Variables
  const image = getImage(data.file)
  const imageAlt = data.file.name
  // Render Component
  return (
    <Layout>
      <Hero bgImagePath={image} altBgImage={imageAlt}>
        <Title tag="h1" title="Contactez-Nous" />
        <BlockInfo>
          <Title
            tag="h2"
            className="h5"
            marBtm="0"
            title="Nous sommes à votre entière disposition pour répondre à toutes vos
            questions."
          />
        </BlockInfo>
      </Hero>
      <ContactForm />
      <ContactInfo />
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Page two" />

export default contactPage
