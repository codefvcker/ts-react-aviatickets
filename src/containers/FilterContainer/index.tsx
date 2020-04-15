import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { useStyles } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { TAppState } from "../../store/store";
import { TCheckbox } from "../../entities/types";
import { toggleFilter } from "../../store/actions/ticketsActions";

export const FilterContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filters = useSelector<TAppState, TCheckbox[]>(
    (state) => state.tickets.filters
  );

  const toggleFilterHandler = (id: number) => {
    dispatch(toggleFilter(id));
  };

  const renderFilters = (filters: TCheckbox[]) => {
    return filters.map((item) => (
      <FormControlLabel
        key={item.id}
        control={
          <Checkbox
            data-info={item.data}
            checked={item.checked}
            name={item.name}
            onChange={() => toggleFilterHandler(item.id)}
          />
        }
        label={item.label}
      />
    ));
  };

  return (
    <div>
      {" "}
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Количество пересадок</FormLabel>
        <FormGroup>{renderFilters(filters)}</FormGroup>
      </FormControl>
    </div>
  );
};
