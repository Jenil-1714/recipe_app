//#Global Imports
import React from "react";
import { Button, useMediaQuery, useTheme } from "@mui/material";

//#Local Imports
import { RecipeCard, RecipeDetailsCard, SearchBar } from "../../components";
import { recipiesData } from "../../utils";
import { searchedValueContext } from "../../components/layout";
import { HeaderMainContainer, HomeMainContainer, NoResultTextWrappr, Row } from "./HomeStyle";
import EditModal from "./EditModal";
import { Add } from "@mui/icons-material";
import { IRecipeCardProps } from "../../components/ui/RecipeCard/RecipeCard";
import ConfirmationModal from "./ConfirmationModal";
import { IHomeProps } from "./home";
import AddModal from "./AddModal";

const Home = () => {
  const [recipeList, setRecipeList] = React.useState([] as IHomeProps.AddRecipeData[]);
  const {  isshowsidebar } =
    React.useContext(searchedValueContext);
  const [searchedValue, setSearchedValue] = React.useState<string>("");

  const [showSelectedRecipeDetails, setShowSelectedRecipeDetails] =
    React.useState<number>(0);
  const [isModalOpen, setIsModalOpen] = React.useState("");
  const [selectedRecipe, setSelectedRecipe] = React.useState({} as IHomeProps.AddRecipeData);
  const muiTheme = useTheme();
  const isMobileDevice = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const WINDOW_INNER_WIDTH = window.innerWidth;
  const SIDE_MARGIN = isshowsidebar && !isMobileDevice ? 375 : 110;
  const CARD_GAP_VALUE = isMobileDevice ? 0 : 16;
  const USABLE_WIDDTH = WINDOW_INNER_WIDTH - SIDE_MARGIN + CARD_GAP_VALUE;
  const MEDIA_CARD_WITH = 278;
  const MEDIA_CARD_WIDTH_WITH_GAP = MEDIA_CARD_WITH + CARD_GAP_VALUE;
  const NO_OF_COLUMNS = Math.trunc(USABLE_WIDDTH / MEDIA_CARD_WIDTH_WITH_GAP);

  const body = document.getElementById("root") as HTMLElement;
  const isVerticalScrollbar = body.scrollHeight < window.innerHeight;
  const USABEL_WIDTH_FOR_NOT_FULLY_ROW = isshowsidebar
    ? USABLE_WIDDTH + 5
    : isVerticalScrollbar
      ? USABLE_WIDDTH - 10
      : USABLE_WIDDTH;

  const cardGapValueForNotFullFilledRow = Math.trunc(
    (USABEL_WIDTH_FOR_NOT_FULLY_ROW - NO_OF_COLUMNS * MEDIA_CARD_WITH) /
    NO_OF_COLUMNS
  );

  const onDeleteHandler = (data: IHomeProps.AddRecipeData) => {
    setSelectedRecipe(data)
    setIsModalOpen("delete")
  };

  const onDeleteSubmitHandler = (deletedRecipe: IHomeProps.AddRecipeData) => {
    const tempData = recipeList.filter((data) => data?.id !== deletedRecipe?.id);
    setRecipeList(tempData);
    setSelectedRecipe({} as IHomeProps.AddRecipeData);
    setIsModalOpen("");
  }

  const onEditHandler = (data: IHomeProps.AddRecipeData) => {
    setSelectedRecipe(data);
    setIsModalOpen("edit");
  };

  const onEditSubmitHandler = (editedRecipe: IHomeProps.AddRecipeData) => {
    const findIndex = recipeList?.findIndex((data) => data?.id === editedRecipe?.id)
    recipeList[findIndex] = editedRecipe;
    setSelectedRecipe({} as IHomeProps.AddRecipeData);
    setIsModalOpen("");
  }

  const onAddSubmitHandler = (newRecipe: IHomeProps.AddRecipeData) => {
    setRecipeList([...recipeList, newRecipe])
    setIsModalOpen("");
  }

  React.useEffect(() => {
    let tempData = [...recipiesData?.recipe];
    if (searchedValue !== "") {
      tempData = tempData?.filter((recipe) =>
        recipe?.name?.toLowerCase().includes(searchedValue?.toLowerCase())
      );
    }
    setRecipeList(tempData);
  }, [searchedValue]);

  return (
    <HomeMainContainer length={recipeList?.length}>
      <HeaderMainContainer>
        <SearchBar searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
        <Button variant="outlined" endIcon={<Add />} onClick={() => setIsModalOpen("add")}>
          Add
        </Button>
      </HeaderMainContainer>
      {recipeList?.length === 0 ? (
        <NoResultTextWrappr>
          No results found for your search.
        </NoResultTextWrappr>
      ) : (
        <>
          {[...Array(Math.ceil(recipeList?.length / NO_OF_COLUMNS))].map(
            (_, i) => (
              <>
                {recipeList
                  ?.slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)
                  ?.map((recipeData: IHomeProps.AddRecipeData, indexTwo) => {
                    return (
                      recipeData?.id === showSelectedRecipeDetails && (
                        <RecipeDetailsCard
                          key={indexTwo}
                          recipeData={recipeData}
                          imageWidth="334px"
                          imageHeight="389px"
                        />
                      )
                    );
                  })}
                <Row
                  length={
                    recipeList?.slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)
                      ?.length
                  }
                  NO_OF_COLUMNS={NO_OF_COLUMNS}
                  CARD_GAP_VALUE={cardGapValueForNotFullFilledRow}
                >
                  {recipeList
                    ?.slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)
                    ?.map((data, index) => (
                      <RecipeCard
                        key={index}
                        data={data}
                        width="258px"
                        bgColor="#394B61"
                        fontColor="D4D7DD"
                        height="278px"
                        imgHeight="190px"
                        imgWidth="157px"
                        onClickHandler={(id) => setShowSelectedRecipeDetails(id === showSelectedRecipeDetails ? "" : id)}
                        onEditHandler={onEditHandler}
                        onDeleteHandler={onDeleteHandler}
                      />
                    ))}
                </Row>
              </>
            )
          )}
        </>
      )}

      <AddModal
        isOpen={isModalOpen === "add"}
        onCloseHandler={() => setIsModalOpen("")}
        onSubmitHandler={onAddSubmitHandler}
      />
      <EditModal
        isOpen={isModalOpen === "edit"}
        onCloseHandler={() => setIsModalOpen("")}
        onSubmitHandler={onEditSubmitHandler}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
      <ConfirmationModal
        isOpen={isModalOpen === "delete"}
        onCloseHandler={() => setIsModalOpen("")}
        onSubmitHandler={onDeleteSubmitHandler}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
    </HomeMainContainer>
  );
};

export default Home;
