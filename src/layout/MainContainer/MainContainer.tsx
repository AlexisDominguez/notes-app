import { Grid } from "@mui/material";
import { ReactNode, FC } from "react";

export interface IMainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<IMainContainerProps> = ({ children }) => (
  <Grid container justifyContent="center" alignItems="center" spacing={2}>
    <Grid item xs={12} sm={12} md={10} lg={10} xl={8}>
      {children}
    </Grid>
  </Grid>
);

export default MainContainer;
