import React from 'react'
import styled from 'styled-components'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'

const Wrapper = styled.div`
    display: flex;
    padding: 3rem 15rem;
`

const ProfileWrapper = () => {
  return (
    <Wrapper>
        <ProfileImage />
        <ProfileInfo />
    </Wrapper>
  )
}

export default ProfileWrapper