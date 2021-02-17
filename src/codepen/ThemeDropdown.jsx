import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ theme, settheme }) {
  const classes = useStyles();

  const handleChange = (event) => {
    settheme(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">theme</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={theme}
          onChange={handleChange}
        >
          <MenuItem value={"monokai"}>monokai</MenuItem>
          <MenuItem value={"github"}>github</MenuItem>
        </Select>
        {/* <FormHelperText>change theme</FormHelperText> */}
      </FormControl>
    </div>
  );
}
