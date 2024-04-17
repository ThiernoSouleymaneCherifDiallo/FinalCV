import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Profile from './Profile';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import { NavLink } from 'react-router-dom';

function Resume() {
  return (
    <Fragment>

      <Container fluid className="p-0 top-image"></Container>
      <Container>

        <Profile></Profile>

        <About></About>

        <Experience></Experience>

        <Education></Education>

        <Skills></Skills>

        <p style={{textAlign:"center", textweigth:"bold"}}>Veillez visionner les 3 modeles avant de télécharger ce qui vous convient</p>

        <div className="d-grid col-3 mx-auto my-4 text-center d-flex gap-5 ">
          <NavLink className="nav-link align-middle bg-dark text-white p-2 rounded" style={{width:"200px"}} to="/preview1">Preview 1</NavLink>
          <NavLink className="nav-link align-middle bg-dark text-white p-2 rounded" to="/preview2">Preview 2</NavLink>
          <NavLink className="nav-link align-middle bg-dark text-white p-2 rounded" to="/preview3">Preview 3</NavLink>
          {/* <NavLink className="nav-link align-middle bg-dark text-white p-2 rounded" to="/preview4">Preview 4</NavLink> */}
          <NavLink className="nav-link align-middle bg-dark text-white p-2 rounded" to="/preview5">Preview 5</NavLink>
        </div>

      </Container>
    </Fragment>
  )
}

export default Resume