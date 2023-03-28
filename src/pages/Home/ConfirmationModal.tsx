//#Global Imports
import React from "react";
import { Box, Button, Typography } from "@mui/material";

//#Local Imports
import { IHomeProps } from "./home";
import { Modal } from "../../components";

const ConfirmationModal: React.FC<IHomeProps.IEditProps> = ({
    isOpen,
    onCloseHandler,
    onSubmitHandler,
    selectedRecipe,
}) => {

    const dialogActions =
        <>
            <Button onClick={onCloseHandler}>
                No
            </Button>
            <Button onClick={() => onSubmitHandler(selectedRecipe)}>Yes</Button>
        </>


    return (
        <Modal
            isOpen={isOpen}
            onCloseHandler={onCloseHandler}
            dialogActions={dialogActions}
        >
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                autoComplete="off"
            >
                <Typography>Are you sure you want to delete this Recipe?</Typography>
            </Box>
        </Modal>
    );
};

export default ConfirmationModal;
