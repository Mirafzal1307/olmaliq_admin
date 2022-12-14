import { Box, Button, Tooltip, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { modalPageStyle } from "./ModalStyle";

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
  maxHeight: '90vh',
  bgcolor: "#fff !important",
  borderRadius: "10px",
  padding: '30px'
};
const useStyles = makeStyles({
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
          <button
            onClick={handleOpen}
            style={props.style}
          >
            <img
              src={require("../../Img/Cancel.png")}
              style={{ marginRight: "10px" }}
              alt=""
            />{" "}
            {t("admin.modal.tooltip_title_delete")}
          </button>
        </Tooltip>
      ) : null}
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style} style={{ textAlign: "center" }}>
          <img
            src={props.image1}
            style={{ width: "100%", maxHeight: "500px" }}
            alt=""
          />
          <h1 style={modalPageStyle.h1}>
            {t("admin.adverts_page.adverts_page_modal.modal_name")}!
          </h1>
          <h2 id="unstyled-modal-title" style={modalPageStyle.h2}>
            {t("admin.modal.modal_main_text")}
          </h2>
          <Grid>
            <Button onClick={handleClose} className={classes.cancel}>
              <img src={require("../../Img/Exit.png")} alt="rasm bor edi" />
              {props.exitText ? <Typography>{props.exitText}</Typography> : null}
            </Button>
            <Button onClick={handleClose} className={classes.deletes}>
              <img src={require("../../Img/Success.png")} alt="rasm bor edi" />
              {props.successText ? <Typography>{props.successText}</Typography> : null}
            </Button>
          </Grid>
        </Box>
      </StyledModal>
    </>
  );
}

export default Modal;
