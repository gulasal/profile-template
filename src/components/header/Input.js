import React from 'react'
import styled from 'styled-components'
import {FaSistrix} from "react-icons/fa"



const InputWrapper = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  /* height: 1.5rem; */
  
  & input{
    height: 2rem;
    width: 17rem;
    box-sizing: border-box;
    padding-left: 1.5rem;
    border-radius: 7px;
    border: none;
    background-color: lightgray;
    
  }

  & .icon{
    width: 1rem;
    padding: 2px;
    position: absolute;
    box-sizing:border-box;
    top:50%;
    left:2px;
    transform: translateY(-50%);
    
  }
  

`

const Input = () => {
  return (
    <InputWrapper>
      <form>
        <label>
        <FaSistrix className='icon'/>
          <input type="text" name="search" placeholder='Suchen'></input>
          
          
        </label>
      </form>
    </InputWrapper>
  )
}

export default Input