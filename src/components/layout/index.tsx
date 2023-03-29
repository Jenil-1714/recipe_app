//#Global Imports
import React, { createContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

//#local Imports
import Sidebar from "./Sidebar";
import IProtectedPageLayout from "./ProtectedPageLayout";
import { LayoutMainContainer, MainSection } from "./ProtectedPageLayoutStyle";

export const searchedValueContext = createContext(
  {} as IProtectedPageLayout.ISidebarContextProps
);

const ProtectedPageLayout = () => {
  const [isshowsidebar, setIsShowSidebar] = React.useState<boolean>(false);
  const [isHideOnMobile, setisHideOnMobile] = React.useState<boolean>(false);
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (isMobileDevice) {
      isshowsidebar && setIsShowSidebar(false);
    } else {
      !isshowsidebar && setIsShowSidebar(true);
    }
  }, [isMobileDevice]);

  return (
    <searchedValueContext.Provider
      value={{ isshowsidebar }}
    >
      <LayoutMainContainer>
        <Sidebar
          isshowsidebar={isshowsidebar}
          setIsShowSidebar={setIsShowSidebar}
          isHideOnMobile={isHideOnMobile}
          setisHideOnMobile={setisHideOnMobile}
        />
        <MainSection
          isshowsidebar={isshowsidebar}
          isMobileDevice={isMobileDevice}
        >
          <div>{<Outlet />}</div>
        </MainSection>
      </LayoutMainContainer>
    </searchedValueContext.Provider>
  );
};

export default ProtectedPageLayout;
