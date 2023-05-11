import React from 'react'
import styled from 'styled-components'

export default function CV3() {
  const Header = styled.div`
    width: 60%;
    height: 20%;
    background-color: lightgray;
    padding: 20px;
  `
  const Contact = styled.div`
    width: 40%;
    height: 20%;
    background-color: aqua;
    padding: 8px;
  `
  const Letter = styled.div`
    width: 100%;
    height: 25%;
    background-color: blue;
    padding: 8px;
  `
  const Experience = styled.div`
    width: 100%;
    height: 75%;
    background-color: blueviolet;
    padding: 8px;
  `
  const Skills = styled.div`
    width: 100%;
    height: 40%;
    background-color: aquamarine;
    padding: 8px;
  `
  const Languages = styled.div`
    width: 100%;
    height: 20%;
    background-color: lightblue;
    padding: 8px;
  `
  const Education = styled.div`
    width: 100%;
    height: 40%;
    background-color: brown;
    padding: 8px;
  `
  return (
    <div className="main-container">
      <Header>Header</Header>
      <Contact>Contact</Contact>
      <div className="body-container3">
        <div className="left-container3">
          <Letter>Letter</Letter>
          <Experience>Experience</Experience>
        </div>

        <div className="right-container3">
          <Skills>Skills</Skills>
          <Languages>Languages</Languages>
          <Education>Education</Education>
        </div>
      </div>
    </div>
  )
}
