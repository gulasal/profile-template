import React from 'react'
import image from '../assets/insta-profile.jpeg'
import styled from 'styled-components'

const ImageWrapper = styled.div`
    width: 15%;
    height: 15%;

    & img{
        width: 100%;
        border-radius: 50%;
    }
`

const ProfileImage = () => {
  return (
    <ImageWrapper>
        <img src={image} alt="profile"/>
    </ImageWrapper>
  )
}

export default ProfileImage