/**
 * @author Abdul Halith
 * @email abd.halith994@gmail.com
 * @create date 2020-05-08
 * @modify date 2021-05-09
 * @desc Material UI MuIAlert and Snackbar is used to show the temporary message Component
 */
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//MuiAlert component which is shown inside the Snackbar component
let Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const Alerts = (props) => {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.onclose();
    setOpen(false);
  };

  return (
    <Snackbar
      id="main_alert_snackbar"
      anchorOrigin={{
        vertical: props.vertical,
        horizontal: props.horizontal,
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert id="main_alert" severity={props.severity} onClose={handleClose}>
        {props.msg}
      </Alert>
    </Snackbar>
  );
};
