import React, { useState } from 'react'
import styled from 'styled-components'
import oxfordLocation from '../../assets/icons/oxfordLocation.png'
import oxfordMobile from '../../assets/icons/oxfordMobile.png'
import { UserData } from '../../data'
import './CV1.css'

export default function CV1() {
  const [user, setUser] = useState(UserData)
  const Header = styled.div`
    width: 100%;
    height: 15%;
    background-color: #574e4c;
    padding: 20px;
    display: flex;
    align-items: center;
  `
  const Contact = styled.div`
    width: 100%;
    height: 20%;
    background-color: transaprent;
    padding: 8px;
  `
  const Letter = styled.div`
    width: 100%;
    height: 15%;
    background-color: transparent;
    padding: 8px;
  `
  const Experience = styled.div`
    width: 100%;
    height: ${user.userExperience.length > 3 ? '60%' : '40%'};
    background-color: transaprent;
    padding: 8px;
  `
  const Skills = styled.div`
    width: 100%;
    height: 60%;
    background-color: transparent;
    padding: 8px;
  `
  const Languages = styled.div`
    width: 100%;
    height: 20%;
    background-color: transparent;
    padding: 8px;
  `
  const Education = styled.div`
    width: 100%;
    height: ${user.userExperience.length > 3 ? '25%' : '45%'};
    background-color: transparent;
    padding: 8px;
  `
  return (
    <div className="main-container">
      <Header>
        <p className="user_fullName">{user.userFullName}</p>
      </Header>
      <div className="body-container">
        <div className="left-container">
          <Contact>
            <p className="contact_header">CONTACT</p>
            <div className="row">
              <img
                src={oxfordLocation}
                alt="contact_icon"
                className="contact_icon"
              />
              <p className="contact_text">{user.userAddress}</p>
            </div>
            <div className="row">
              <img
                src={oxfordMobile}
                alt="contact_icon"
                className="contact_icon"
              />
              <p className="contact_text">{user.userMobile}</p>
            </div>
            <div className="row">
              <img
                src={oxfordLocation}
                alt="contact_icon"
                className="contact_icon"
              />
              <p className="contact_text">{user.userEmail}</p>
            </div>
          </Contact>
          <div className="just_row"></div>
          <Skills>
            <p className="contact_header">SKILLS</p>
            <ul className="skills_list">
              {user.userSkills.map((val, idx) => {
                if (idx <= 21)
                  return (
                    <li key={idx} className="skills">
                      {val}
                    </li>
                  )
              })}
            </ul>
          </Skills>
          <div className="just_row"></div>
          <Languages>
            <p className="contact_header">LANGUAGES</p>
            <div className="languages_list">
              {user.userLanguages.map((val, idx) => {
                if (idx <= 4)
                  return (
                    <div className="languages_row" key={idx}>
                      <p className="skills">{val.language}</p>
                      <p className="skills">{val.languageLevel}</p>
                    </div>
                  )
              })}
            </div>
          </Languages>
        </div>
        <div className="right-container">
          <Letter>
            <p className="letter">{user.userLetter}</p>
          </Letter>
          <div className="just_row_black"></div>
          <Experience>
            <p className="experience_header">EXPERIENCE</p>
            {user.userExperience.map((val, idx) => {
              if (idx <= 4)
                return (
                  <div className="experience_container" key={idx}>
                    <p className="experience_dates">
                      {val.workingDates.From} - {val.workingDates.To}
                    </p>
                    <p className="working_place">{val.workingPlace}</p>
                    <p className="about_job">{val.aboutJob}</p>
                  </div>
                )
            })}
          </Experience>
          <div className="just_row_black"></div>
          <Education>
            <p className="experience_header">EDUCATION</p>
            {user.userEducation.map((val, idx) => {
              if (idx <= 1)
                return (
                  <div className="experience_container" key={idx}>
                    <p className="experience_dates">
                      {val.educationDates.From} - {val.educationDates.To}
                    </p>
                    <p className="working_place">{val.educationPlace}</p>
                    <p className="about_job">{val.educationDegree}</p>
                  </div>
                )
            })}
          </Education>
        </div>
      </div>
    </div>
  )
}
