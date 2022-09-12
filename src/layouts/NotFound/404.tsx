import React from 'react'
import { Container } from "@mui/material"
import { NotFoundStyle } from './NotFound';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container sx={{ marginTop: "50px" }}>
        <img
          style={{ display: "block", margin: "auto" }}
          src={require("../../Img/NotFoundImg.png")}
          alt=""
        />
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <button style={NotFoundStyle}>Go home</button>
        </Link>
      </Container>
    </motion.div>
  );
}

export default NotFoundPage;