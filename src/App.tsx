import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import MainContainer from "./layout/MainContainer";
import TodoContainer from "./layout/TodoContainer";
import NewTodoModule from "./modules/NewTodoModule";
import TodoListModule from "./modules/TodoListModule";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MainContainer>
        <TodoContainer>
          <NewTodoModule />
          <TodoListModule />
        </TodoContainer>
      </MainContainer>
    </LocalizationProvider>
  );
}

export default App;
