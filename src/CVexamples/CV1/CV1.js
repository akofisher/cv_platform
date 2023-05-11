import React from 'react'
import styled from 'styled-components'

export default function CV1() {
  const Header = styled.div`
    width: 100%;
    height: 15%;
    background-color: lightgray;
    padding: 20px;
  `
  const Contact = styled.div`
    width: 100%;
    height: 25%;
    background-color: aqua;
    padding: 8px;
  `
  const Letter = styled.div`
    width: 100%;
    height: 20%;
    background-color: blue;
    padding: 8px;
  `
  const Experience = styled.div`
    width: 100%;
    height: 60%;
    background-color: blueviolet;
    padding: 8px;
  `
  const Skills = styled.div`
    width: 100%;
    height: 55%;
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
    height: 20%;
    background-color: brown;
    padding: 8px;
  `
  return (
    <div className="main-container">
      <Header>Header</Header>
      <div className="body-container">
        <div className="left-container">
          <Contact>Contact</Contact>
          <Skills>Skills</Skills>
          <Languages>Languages</Languages>
        </div>
        <div className="right-container">
          <Letter>Letter</Letter>
          <Experience>Experience</Experience>
          <Education>Education</Education>
        </div>
      </div>
    </div>
  )
}
