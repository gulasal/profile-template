import React from 'react'
import image from '../assets/instagram.png'
import styled from 'styled-components'

const TitleName = styled.div`
  width: 100%;
  height: 100%;
  & img{
      width: 10%;
      
  }
`

const Title = () => {
  return (
    <TitleName>
        <img src={image} alt="instagram" />
    </TitleName>
  )
}

export default Title