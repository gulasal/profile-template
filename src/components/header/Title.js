import React from 'react'
import image from '../assets/instagram.png'
import styled from 'styled-components'






const TitleName = styled.div`
  width: 20%;
  max-width: 70rem;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
 
  & img{
      width: 40%;

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