import { Grid } from "@mui/material";
import { ReactNode, FC } from "react";

export interface IMainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<IMainContainerProps> = ({ children }) => (
  <Grid container justifyContent="center" alignItems="center" spacing={2}>
    <Grid
      item
      xs={12}
      sm={12}
      md={10}
      lg={10}
      xl={8}
      // TODO: This custom styling will be removed when the header and footer be defined
      style={{ maxWidth: "1600px" }}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Grid>
  </Grid>
);

export default MainContainer;
