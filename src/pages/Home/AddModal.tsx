//#Global Imports
import React from "react";
import { Box, Button, TextField } from "@mui/material";

//#Local Imports
import { IHomeProps } from "./home";
import { Modal } from "../../components";

const AddModal: React.FC<IHomeProps.IAddProps> = ({
    isOpen,
    onCloseHandler,
    onSubmitHandler,
}) => {
    const [newRecipe, setNewRecipe] = React.useState({} as IHomeProps.AddRecipeData);
    const [errors, setErrors] = React.useState({
        id: false,
        name: false,
        ingredients: false,
        instructions: false
    })
    const isNewRecipeEmpty = Object.keys(newRecipe)?.length > 0;


    const onChangeHandler = (event: { target: { name: string; value: string | string[]; }; }) => {
        const { name, value } = event?.target;
        setNewRecipe((newRecipe: IHomeProps.AddRecipeData) => { return { ...newRecipe, [name]: name === "id" ? Number(value) : name === "ingredients" || name === "instructions" ? [value] : value } })
        setErrors((errors) => { return { ...errors, [name]: false } })
    }

    const onSubmit = () => {
        setErrors({
            id: !isNewRecipeEmpty || newRecipe?.id?.toString() === "" ? true : false,
            name: !isNewRecipeEmpty || newRecipe?.name === "" ? true : false,
            ingredients: !isNewRecipeEmpty || newRecipe?.ingredients?.[0] === "" ? true : false,
            instructions: !isNewRecipeEmpty || newRecipe?.instructions?.[0] === "" ? true : false
        })

        isNewRecipeEmpty && Object.values(errors).every((data) => data === false) && onSubmitHandler(newRecipe)
    }

    const dialogActions =
        <>
            <Button onClick={onCloseHandler}>
                Cancel
            </Button>
            <Button onClick={onSubmit}>Submit</Button>
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
                <TextField label="id" name="id" variant="outlined" value={newRecipe?.id} onChange={onChangeHandler} error={errors?.id || newRecipe?.id?.toString() === ""} helperText={(errors?.id || newRecipe?.id?.toString() === "") && "ID is required"} />
                <TextField required label="Name" variant="outlined" name="name" value={newRecipe?.name} onChange={onChangeHandler} error={errors?.name || newRecipe?.name === ""} helperText={(errors?.name || newRecipe?.name === "" )&& "Name is required"} />
                <TextField required label="Ingredients" variant="outlined" name="ingredients" value={newRecipe?.ingredients} onChange={onChangeHandler} error={errors?.ingredients || newRecipe?.ingredients?.[0] === ""} helperText={(errors?.ingredients || newRecipe?.ingredients?.[0] === "") && "Ingredients are required"} multiline />
                <TextField required label="Instructions" variant="outlined" name="instructions" value={newRecipe?.instructions} onChange={onChangeHandler} error={errors?.instructions || newRecipe?.instructions?.[0] === ""} helperText={(errors?.instructions || newRecipe?.instructions?.[0] === "") && "Instructions are required"} multiline />

            </Box>
        </Modal>
    );
};

export default AddModal;
