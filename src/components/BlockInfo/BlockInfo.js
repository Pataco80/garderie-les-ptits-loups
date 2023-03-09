import React from "react"

import * as S from "./BlockInfoStyled"

const BlockInfo = ({ text, children }) => {
  return (
    <S.BlockInfoWrapper>
      {text ? <p>{text}</p> : <></>}
      {children}
    </S.BlockInfoWrapper>
  )
}

export default BlockInfo
