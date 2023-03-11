import React from "react"
import styled from "styled-components"
// Import helpers
import { setFlex, media } from "theme"
import { Section, Button } from "styledElements"
import mapsSelector from "../../utils/getGoogleMap"
import { Map } from "@styled-icons/boxicons-regular"

const ContactInfo = () => {
  return (
    <InfoSection>
      <Article>
        <section>
          <p>Horaires d’ouverture :</p>
          <p>Lundi à Vendredi de 07h00 à 18h00</p>
        </section>
        <section>
          <p>Téléphonne : 021/647 99 61</p>
          <p>E-mail : p-loups@bluewin.ch</p>
        </section>
        <section>
          <p>Adresse :</p>
          <p>
            <span>La Clochatte 5</span>
            <span>1052 Le Mont sur Lausanne</span>
          </p>
          <ButtonMap
            type="button"
            primary
            onClick={mapsSelector}
            title="Nous Trouver"
          >
            <MapIcon />
            Nous trouver
          </ButtonMap>
        </section>
      </Article>
    </InfoSection>
  )
}

export default ContactInfo

const InfoSection = styled(Section)`
  padding: var(--space-xl-2xl) var(--space-s-xl);
`

const Article = styled.article`
  ${setFlex({ flDir: "column" })};
  text-align: center;

  & section {
    ${setFlex({ flDir: "column" })};
    padding: 0 var(--space-s);
    margin-bottom: var(--space-l);
  }
  & span {
    display: block;
    width: 100%;
  }

  ${media.greaterThan("smTablet")`
    ${setFlex({ flDir: "row", y: "flex-start" })};
  `}
`
const ButtonMap = styled(Button)`
  align-self: center;
`

const MapIcon = styled(Map)`
  margin-right: var(--space-3xs);
  width: 1.6rem;
  height: auto;
`
