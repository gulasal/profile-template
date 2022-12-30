import React from "react";
import styled from "styled-components";
import { FaCog } from "react-icons/fa";

const ProfileInfoWrapper = styled.div`
  padding: 0 1rem 0 8rem;

  & .first{
    display: flex;
    align-items: center;
  }

  & .name {
    font-size: 1.5rem;
    font-weight: 100;
    padding-right: 0.5rem;
  }

  & .btn {
    width: 10rem;
    height: 1.5rem;
    background-color: #ffffff;
    border: 1px solid lightgray;
    border-radius: 3px;
    color: gray;
    margin-right: 0.5rem;
  }
  & span {
    margin-right: 0.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 300;
  }

  & .third {
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 0.2rem;
    padding: 1rem;
  }
  & .fullname {
    font-weight: 500;
  }
  & .padding_rightSide{
    padding-left: 0.8rem;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1rem;
  } 
  & .first_row{
    font-weight: 500;
    padding-right: 0.5rem;
  }
`;
const onClickhandler = () => {
  return 
}

const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
      <div className="first">
        <span className="name">aishahabib</span>
        <button className="btn" onClick={onClickhandler}>Profile bearbeiten</button>
        <FaCog className="icon" />
      </div>
      <div className="third">
        <p className="fullname">Aisha Habib</p>
        <p className="address">Regensburg, SoftwareEngineer, Waterpoloplayer</p>
      </div>
      <div>
        <table  className="padding_rightSide">
          <tbody>
            <tr >
              <td className="first_row">Rolle:</td>
              <td>Maschinenfuhrer</td>
            </tr>
            <tr>
              <td className="first_row">Abteilung:</td>
              <td>CNC Frasen</td>
            </tr>
            <tr>
              <td className="first_row">Fertigkeiten:</td>
              <td>Frasen, Programmieren</td>
            </tr>
          </tbody>
        </table>
      </div>
      <form action="/action_page.php" style={{display: 'none'}}>
        <div className="fullname">
          <label for="fname">Fullname:</label>
          <input type="text" id="fname" name="fname" value="John"/>
        </div>
        <div>
          <label for="fname">City</label>
          <input type="text" id="fname" name="fname" value="John"/>
        </div>
        <div>
          <label for="fname">Profession</label>
          <input type="text" id="fname" name="fname" value="John"/>
        </div>
        <div>
          <label for="fname">Hobby</label>
          <input type="text" id="fname" name="fname" value="John"/>
        </div>
        <div>
          <label for="fname">Rolle</label>
          <input type="text" id="fname" name="fname" value="John"/>
        </div>
        <div>
          <label for="fname">Abteilung</label>
          <input type="text" id="fname" name="fname" value="John"/>
        </div>
        <div>
          <label for="fname">Fertigkeiten</label>
          <input type="text" id="fname" name="fname" value="John"/>
        </div>
        <input type="submit" value="Submit"/>
      </form> 
      
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
