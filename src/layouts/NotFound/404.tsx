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
      <Container>
        <img
          style={{ width: "100%" }}
          src={require("../../Img/404-error-page-not-found-isolated-in-white-background-vector.jpg")}
          alt=""
        />
        <Link to="/dashboard">
          <button style={NotFoundStyle}>Go home</button>
        </Link>
      </Container>
    </motion.div>
  );
}

export default NotFoundPage;