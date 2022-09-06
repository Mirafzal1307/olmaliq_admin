import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { cancelButton } from "../theme/CategoryStyle";
// import { refresh } from "./refresh";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;
const style = {
  width: 500,
  bgcolor: "#fff !important",
  borderRadius: "10px",
  pt: 2,
  pb: 3,
};
const useStyles = makeStyles({
  titleRows: {
    color: "#065374 !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
    fontSize: "17px !important",
    margin: 0,
    paddingTop: "0 !important",
  },
  forValueCols: {
    color: "#000 !important",
    fontSize: "17px !important",
    fontFamily: "Poppins !important",
    fontWeight: "300 !important",
    margin: 0,
  },
  brandImages: {
    width: "50px !important",
    height: "50px !important",
    borderRadius: "5px !important",
  },

  box: {
    textAlign: "center",
  },
  h1: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22px",
    color: "#2DA55F",
    margin: "0",
  },
  h2: {
    fontFamily: "Poppins",
    fontSize: "17px",
    fontWeight: "400",
    margin: "10px 0 20px 0",
    lineHeight: "138%",
  },
  deleteButton: {
    width: "45px",
    height: "45px",
    backgroundColor: "#2DA55F !important",
    border: "none",
    borderRadius: "5px",
  },
  cancel: {
    background: "#FF4B4B !important",
    borderRadius: "5px",
    color: "#ffffff !important",
    padding: "13px 22px 13px 22px !important",
    marginRight: "20px !important",
    "& img": {
      paddingRight: "12px",
    },
  },
  deletes: {
    background: "#2DA55F !important",
    borderRadius: "5px",
    color: "#ffffff !important",
    padding: "13px 22px 13px 22px !important",

    "& img": {
      paddingRight: "12px",
    },
  },
  cancels: {
    background: "#065374 !important",
    borderRadius: "5px",
    color: "#ffffff !important",
    textTransform: "lowercase",
    marginRight: "20px",
    padding: "9px 20px 8px 20px !important",
  },
});

function Modal(props: any): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      {props.deleteButton ? (
        <Tooltip title={props.TooltipTitle}>
          <Button
            sx={{ textTransform: "none" }}
            onClick={handleOpen}
            style={props.style}
          >
            <img
              src={require("../../Img/Cancel.png")}
              style={{ marginRight: "10px" }}
              alt=""
            />{" "}
            {t("admin.modal.tooltip_title_delete")}
          </Button>
        </Tooltip>
      ) : null}
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style} className={classes.box}>
          <h1 className={classes.h1}>
            {t("admin.adverts_page.adverts_page_modal.modal_name")}!
          </h1>
          <h2 id="unstyled-modal-title" className={classes.h2}>
            {t("admin.modal.modal_main_text")}
          </h2>
          <div>
            <Button onClick={handleClose} className={classes.cancel}>
              <img src={require("../../Img/Exit.png")} alt="rasm bor edi" />
              {props.exitText ? <p>{props.exitText}</p> : null}
            </Button>
            <Button onClick={handleClose} className={classes.deletes}>
              <img src={require("../../Img/Success.png")} alt="rasm bor edi" />
              {props.successText ? <p>{props.successText}</p> : null}
            </Button>
          </div>
        </Box>
      </StyledModal>
    </>
  );
}

export default Modal;
