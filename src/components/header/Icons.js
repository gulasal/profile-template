import React from 'react'
import styled from 'styled-components'
import {FaHome, FaPaperPlane, FaPlus, FaCompass, FaHeart} from "react-icons/fa"
import image from '../assets/insta-profile.jpeg'

const IconWrapper = styled.div`
    width: 15%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    & .icon{
        font-size: 1.3rem;
    }
    & .plus {
        border: 1px solid rgb(100, 100,100);
        border-radius: 10%;
        font-weight: 100;
    }

    & img{
        width: 13%;
        height: 60%;
        border-radius: 50%;
        padding: 1px;
        border: 1px solid rgb(100, 100,100);
    }
    
`

const Icons = () => {
  return (
    <IconWrapper>
        <FaHome className='icon'/>
        <FaPaperPlane className='icon'/>
        <FaPlus className='icon plus'/>
        <FaCompass className='icon'/>
        <FaHeart className='icon'/>
        <img src={image} alt='girlImage' />
    </IconWrapper>

   
    
  )
}


export default Icons