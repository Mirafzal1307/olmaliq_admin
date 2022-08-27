import React from 'react';
import { makeStyles } from "@mui/styles";
import Modal from './Modal';


const useStyles = makeStyles({
  styleGrid: {
    background: "#2DA55F",
    width: "50%",
    height: "975px",
  },
});

const Adverts = () => {
  const classes = useStyles()
  return (
    <>
      <Modal />
    </>
  );
};


export default Adverts;