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

export default function SimpleSelect({ language, setlanguage }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setlanguage(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={language}
          onChange={handleChange}
        >
          <MenuItem value={"python"}>Python</MenuItem>
          <MenuItem value={"javascript"}>javascript</MenuItem>

          <MenuItem value={"java"}>java</MenuItem>
          <MenuItem value={"c_cpp"}>c++</MenuItem>
          <MenuItem value={"csharp"}>C#</MenuItem>
        </Select>
        {/* <FormHelperText>select your language</FormHelperText> */}
      </FormControl>
    </div>
  );
}
