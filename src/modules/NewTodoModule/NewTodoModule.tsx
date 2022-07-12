import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import AddIcon from "@mui/icons-material/Add";

const NewTodoModule = () => {
  // TODO: This is just a test value
  const [value, setValue] = useState<Date | null>(
    new Date("2018-01-01T00:00:00.000Z")
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={7} lg={8}>
        <TextField label="New Todo Description" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <DateTimePicker
          label="New Todo Date"
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => <TextField {...params} fullWidth />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={3}
        md={2}
        lg={1}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Button variant="contained" fullWidth endIcon={<AddIcon />}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewTodoModule;
