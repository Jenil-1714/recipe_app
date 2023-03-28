//#Global Imports
import React from "react";
import { Box, Button, TextField } from "@mui/material";

//#Local Imports
import { IHomeProps } from "./home";
import { IRecipeCardProps } from "../../components/ui/RecipeCard/RecipeCard";
import { Modal } from "../../components";

const EditModal: React.FC<IHomeProps.IEditProps> = ({
  isOpen,
  onCloseHandler,
  onSubmitHandler,
  selectedRecipe,
}) => {
  const [tempSelectedRecipe, setTempSelectedRecipe] = React.useState({} as IHomeProps.AddRecipeData);

  const onChangeHandler = (event: { target: { name: string; value: string | string[]; }; }) => {
    const { name, value } = event?.target;
    setTempSelectedRecipe((selectedRecipe: IHomeProps.AddRecipeData) => { return { ...selectedRecipe, [name]: name === "id" ? Number(value) : name === "ingredients" || name === "instructions" ? [value] : value } })
  }

  const onSubmit = () => {
    tempSelectedRecipe?.name !== "" && tempSelectedRecipe?.ingredients?.[0] !== "" && tempSelectedRecipe?.instructions?.[0] !== "" && onSubmitHandler(tempSelectedRecipe)
  }

  const dialogActions =
    <>
      <Button onClick={onCloseHandler}>
        Cancel
      </Button>
      <Button onClick={onSubmit}>Submit</Button>
    </>


  React.useEffect(() => {
    setTempSelectedRecipe(selectedRecipe)
  }, [selectedRecipe])

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
        <TextField label="id" variant="outlined" value={tempSelectedRecipe?.id} disabled />
        <TextField required label="Name" variant="outlined" name="name" value={tempSelectedRecipe?.name} onChange={onChangeHandler} error={tempSelectedRecipe?.name === ""} helperText={tempSelectedRecipe?.name === "" && "Name is required"} />
        <TextField required label="Ingredients" variant="outlined" name="ingredients" value={tempSelectedRecipe?.ingredients} onChange={onChangeHandler} error={tempSelectedRecipe?.ingredients?.[0] === ""} helperText={tempSelectedRecipe?.ingredients?.[0] === "" && "Ingredients are required"} multiline />
        <TextField required label="Instructions" variant="outlined" name="instructions" value={tempSelectedRecipe?.instructions} onChange={onChangeHandler} error={tempSelectedRecipe?.instructions?.[0] === ""} helperText={tempSelectedRecipe?.instructions?.[0] === "" && "Instructions are required"} multiline />

      </Box>
    </Modal>
  );
};

export default EditModal;
