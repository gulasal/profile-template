import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Input from './Input'
import Icons from './Icons'


const MainWrapper = styled.div`
  width: 100vw;
  height: 7.8vh;
  border-bottom: 1px solid rgb(220,220,220);
  display: flex;
  justify-content: space-evenly;
`

const HeaderWrapper = () => {
  return (
    <MainWrapper>
      <Title/>
      <Input />
      <Icons />
    </MainWrapper>
  )
}

export default HeaderWrapper