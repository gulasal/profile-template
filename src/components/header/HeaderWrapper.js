import React from 'react'
import styled from 'styled-components'
import Title from './Title'

const MainWrapper = styled.div`
  width: 100vw;
  height: 7.8vh;
  border-bottom: 1px solid rgb(220,220,220);
`

const HeaderWrapper = () => {
  return (
    <MainWrapper>
      <Title/>
    </MainWrapper>
  )
}

export default HeaderWrapper