import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

import { useStyles } from "../../styles";

export const FilterContainer = () => {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Количество пересадок</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={true} name="all" />}
            label="Все"
          />
          <FormControlLabel
            control={<Checkbox checked={false} name="notransfer" />}
            label="Без пересадок"
          />
          <FormControlLabel
            control={<Checkbox checked={false} name="1transfer" />}
            label="1 пересадка"
          />
          <FormControlLabel
            control={<Checkbox checked={false} name="2transfer" />}
            label="2 пересадки"
          />
          <FormControlLabel
            control={<Checkbox checked={false} name="3transfer" />}
            label="3 пересадки"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};
