import React from "react"

// Import Components for App
import { ButtonForm } from "styledElements"

// Import styles from styled-components file
import * as S from "./ContactFormStyled"

// Component
const ContactForm = ({ formID, formCaptcha, className }) => {
  // Render Component
  return (
    <S.FormSection>
      <S.FormContainer>
        <S.ContactForm
          action="https://formspree.io/f/xzbkneqk"
          method="POST"
          autocomplete="on"
        >
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <S.InputWrapper>
            <S.Label htmlFor="name">Nom</S.Label>
            <S.Input
              type="text"
              name="name"
              id="name"
              placeholder="Saisissez votre Nom"
              required
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              type="email"
              name="_replyto"
              id="email"
              placeholder="Saisissez votre adresse mail"
              required
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="phone">Tel. Fixe</S.Label>
            <S.Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Votre N° fixe (facultatif)"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="mobile">Tel. Mobile</S.Label>
            <S.Input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Votre N° mobile (facultatif)"
            />
          </S.InputWrapper>
          <S.ContactMessage>
            <S.Label htmlFor="message">Message</S.Label>
            <S.TextArea
              name="message"
              id="message"
              placeholder="Saisissez votre Message"
              rows="10"
              required
            />
          </S.ContactMessage>
          <S.Captcha
            className={`g-recaptcha ${className}`}
            data-sitekey={formCaptcha}
          ></S.Captcha>
          <ButtonForm
            primary
            type="submit"
            value="Envoyer"
            title="Envoyer le formulaire"
          />
        </S.ContactForm>
      </S.FormContainer>
    </S.FormSection>
  )
}

export default ContactForm
