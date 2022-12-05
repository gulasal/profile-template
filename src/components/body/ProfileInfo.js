import React from 'react'
import styled from 'styled-components'
import { FaCog } from "react-icons/fa"


const ProfileInfoWrapper = styled.div`
    padding: 0 1rem 0 8rem ;

& .first {
    display: flex;
    align-items: center;

    
}

& .name{
    font-size: 1.5rem;
    font-weight: 100;
    padding-right: 0.5rem;
}

& .btn{
    width: 10rem;
    height: 1.5rem;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    border-radius: 3px;
    color: gray;
    margin-right: 0.5rem;
   
}
& span{
    margin-right: 0.5rem;
    padding: 1rem ;
    font-size: 1rem;
    font-weight: 300;
   
}

& .third{
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 0.2rem;
    padding: 1rem;
}
& .fullname{
    font-weight: 500;
}
    

`

const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
        <div className='first'>
            <span className='name'>aishahabib</span>
            <button className='btn'>Profile bearbeiten</button>
            <FaCog className='icon'/>
        </div>
        <div className='second'>
            <span><strong>17</strong> beitrage</span>
            <span><strong>43</strong>follower</span>
            <span><strong>447</strong> abonniert</span>
        </div>
        <div className='third'>
            <p className='fullname'>Aisha Habib</p>
            <p className='address'>Regensburg, SoftwareEngineer, Waterpoloplayer</p>
        </div>
    </ProfileInfoWrapper>
  )
}

export default ProfileInfo