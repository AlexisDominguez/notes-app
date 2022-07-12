import { Typography, Card, CardContent } from "@mui/material";
import { ReactNode, FC } from "react";

export interface ITodoContainerProps {
  children: ReactNode;
}

const TodoContainer: FC<ITodoContainerProps> = ({ children }) => (
  <Card sx={{ width: "100%" }}>
    <CardContent>
      <Typography variant="h3" align="center" sx={{ marginBottom: "2rem" }}>
        My Todo List
      </Typography>
      {children}
    </CardContent>
  </Card>
);

export default TodoContainer;
