import React from 'react'
import styled from 'styled-components'

export default function CV5() {
  const Header = styled.div`
    width: 100%;
    height: 15%;
    padding: 8px;
    background-color: lightblue;
  `
  const Letter = styled.div`
    width: 100%;
    height: 20%;
    padding: 8px;
    background-color: lightpink;
  `
  const Experience = styled.div`
    width: 100%;
    height: 25%;
    padding: 8px;
    background-color: orange;
  `
  const Skills = styled.div`
    width: 100%;
    height: 15%;
    padding: 8px;
    background-color: yellow;
  `
  const Languages = styled.div`
    width: 100%;
    height: 5%;
    padding: 8px;
    background-color: brown;
  `
  const Education = styled.div`
    width: 100%;
    height: 20%;
    padding: 8px;
    background-color: gray;
  `

  return (
    <div className="main-container">
      <Header>Header</Header>
      <Letter>Letter</Letter>
      <Experience>Experience</Experience>
      <Skills>Skills</Skills>
      <Languages>Languages</Languages>
      <Education>Education</Education>
    </div>
  )
}
