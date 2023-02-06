import { useState } from "react";
import styled from "styled-components";
import { FaCog } from "react-icons/fa";

const ProfileInfoWrapper = styled.div`
  padding: 0 1rem 0 8rem;

  & .first {
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
  & .padding_rightSide {
    padding-left: 0.8rem;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1rem;
  }
  & .first_row {
    font-weight: 500;
    padding-right: 0.5rem;
  }
  form {
    width: 20rem;
    height: 18rem;
    border: 1px solid grey;
    padding: 2rem;
  }
  .label_input_style {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
  }
  label {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 0.9rem;
    color: red;
  }
  input {
    width: 14rem;
    height: 1.5rem;
    border: 1px solid grey;
    border-radius: 5px;
    overflow: hidden;
  }
  .submit {
    display: flex;

    text-align: center;
    width: 4rem;
    height: 1 rem;
    border: 1px solid #000728;
  }
`;

// const onClickhandler = () => {
//   document.getElementById("editForm").style.display = "block";
//   document.getElementById("editProfile").style.display = "none";
// };

// const onClickSubmitHandler = (e) => {
//   console.log("hi");
//   document.getElementById("editForm").style.display = "none";
//   document.getElementById("editProfile").style.display = "block";
// };

const ProfileInfo = () => {
  const [profile, setProfile] = useState(true);

  // const onClickButton = () => {
  //   setProfile(!profile);
  //   console.log(profile);
  // };

  return (
    <ProfileInfoWrapper>
      <div
        id="editProfile"
        style={profile ? { display: "block" } : { display: "none" }}
      >
        <div className="first">
          <span className="name">aishahabib</span>
          <button className="btn" onClick={() => setProfile(!profile)}>
            Profile bearbeiten
          </button>
          <FaCog className="icon" />
        </div>
        <div className="third">
          <p className="fullname">Aisha Habib</p>
          <p className="address">
            Regensburg, SoftwareEngineer, Waterpoloplayer
          </p>
        </div>
        <div>
          <table className="padding_rightSide">
            <tbody>
              <tr>
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
      </div>

      <form
        id="editForm"
        style={profile ? { display: "none" } : { display: "block" }}
      >
        <div className="fullname label_input_style">
          <label htmlFor="fname">Fullname:</label>
          <input type="text" id="fname" name="fname" defaultValue="" />
        </div>
        <div className="label_input_style">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" defaultValue="" />
        </div>
        <div className="label_input_style">
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            id="profession"
            name="profession"
            defaultValue=""
          />
        </div>
        <div className="label_input_style">
          <label htmlFor="hobby">Hobby</label>
          <input type="text" id="hobby" name="hobby" defaultValue="" />
        </div>
        <div className="label_input_style">
          <label htmlFor="rolle">Rolle</label>
          <input type="text" id="rolle" name="rolle" defaultValue="" />
        </div>
        <div className="label_input_style">
          <label htmlFor="abteilung">Abteilung</label>
          <input type="text" id="abteilung" name="abteilung" defaultValue="" />
        </div>
        <div className="label_input_style">
          <label htmlFor="fertigkeiten">Fertigkeiten</label>
          <input
            type="text"
            id="fertigkeiten"
            name="fertigkeiten"
            defaultValue=""
          />
        </div>
        <input
          className="submit"
          type="submit"
          value="Submit"
          onClick={(e) => {
            console.log(e);
            setProfile(!profile);
          }}
        />
      </form>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
