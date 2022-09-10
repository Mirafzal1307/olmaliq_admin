import React from 'react'
import { Container } from "@mui/material"
import { NotFoundStyle } from './NotFound';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
        <Container sx={{ marginTop: "50px" }}>
          <img style={{ display: "block", margin: "auto" }} src={require("../../Img/NotFoundImg.png")} alt="" />
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <button style={NotFoundStyle}>Go home</button>
          </Link>
        </Container>
    </>
  )
}

export default NotFoundPage;