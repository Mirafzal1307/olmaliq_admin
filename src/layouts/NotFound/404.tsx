import React from 'react'
import { Container } from "@mui/material"
import { NotFoundStyle } from './NotFound';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
        <Container>
          <img style={{ width: "100%" }} src={require("../../Img/404-error-page-not-found-isolated-in-white-background-vector.jpg")} alt="" />
          <Link to="/dashboard">
            <button style={NotFoundStyle}>Go home</button>
          </Link>
        </Container>
    </>
  )
}

export default NotFoundPage;