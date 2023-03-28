//#Global Imports
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Modal: React.FC<IModalProps.IProps> = ({
  title,
  isOpen,
  onCloseHandler,
  dialogActions,
  children,
}) => {
  return (
    <div>
      <Dialog open={isOpen} onClose={onCloseHandler} aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{children}</DialogContentText>
        </DialogContent>
        <DialogActions>
         {dialogActions}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
