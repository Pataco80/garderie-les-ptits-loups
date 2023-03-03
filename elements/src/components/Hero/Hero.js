import React from "react"
import PropTypes from "prop-types"

// Import components from Gatsby and plugins Gatsby
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Import Components for App
import { GatsbyButtonLink } from "components"

// Import styles from component styled file
import * as S from "./HeroStyled"

// Component
const Hero = props => {
  // Component variables
  const { home, bgImagePath, altBgImage, children } = props
  //const image = getImage(bgImagePath)
  //const altImage = altBgImage.replace("_", " ")

  // Render Component
  return (
    <S.HeroWrapper home={home}>
      <S.HeroContent padding="var(--space-m)">
        {children}
        {home && (
          <S.SectionButtons>
            <GatsbyButtonLink
              primary
              to="/about"
              target="_blank"
              title="Voyez nos structures"
            >
              Notre Structure
            </GatsbyButtonLink>
            <GatsbyButtonLink
              secondary
              to="/contact"
              target="_blank"
              title="Contactez-nous"
            >
              Nous Contacter
            </GatsbyButtonLink>
          </S.SectionButtons>
        )}
      </S.HeroContent>
    </S.HeroWrapper>
  )
}

// React PropTypes and more...
Hero.propTypes = {
  title: PropTypes.string,
  imgPath: PropTypes.object,
  altBcgImage: PropTypes.string,
}

export default Hero

/**
 *  <GatsbyImage
        image={image}
        alt={altImage}
        layout="fullWidth"
        className="bgImageWrapper"
        imgClassName="bgImage"
        objectPosition="0% 0%"
      />
 */
