import React, { useState, Fragment, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Collapse,
  Button,
  TextField,
  IconButton,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { UPDATE_FILTERS } from "../../store/constants/constants";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const apartsFilters = useSelector((state) => state.aparts.filters);
  const [display, setDisplay] = useState({
    address: false,
    opType: false,
  });

  const [filterState, setFilterState] = useState({
    address: "",
    operation_type: "0",
  });
  const updateFiltersState = (field) => {
    setDisplay({
      ...display,
      [field]: !display[field],
    });
  };

  const handleUpFilterState = (e) => {
    let newFilterState = { ...filterState, [e.target.name]: e.target.value };
    let filtersBool =
      newFilterState.address !== "" || newFilterState.operation_type !== "0";

    setFilterState(newFilterState);
    dispatch({
      type: UPDATE_FILTERS,
      payload: newFilterState,
      activeSearch: filtersBool,
    });

    window.sessionStorage.setItem("filters", JSON.stringify(newFilterState));
    window.sessionStorage.setItem("search_bool", filtersBool);
  };
  useEffect(() => {
    let filtersStorage = JSON.parse(window.sessionStorage.getItem("filters"));
    let searchStorage = window.sessionStorage.getItem("search_bool");

    if (filtersStorage) {
      setFilterState({
        address: filtersStorage.address !== "",
        operation_type: filtersStorage.operation_type !== "0",
        searchBool: searchStorage,
      });
    }
  }, []);
  return (
    <div className='search-options-main-wrapper'>
      <div>
        <h2>Filtrado actual</h2>
      </div>
      <Fragment>
        <div className='search-options-tab-heading-wrapper'>
          <div className='search-options-tab-heading-title-wrapper'>
            <h2> {"Dirección"}</h2>
          </div>
          <div className='search-options-tab-heading-expand-wrapper'>
            <IconButton onClick={() => updateFiltersState("address")}>
              <ExpandMoreIcon
                style={{ transform: display.address && "rotate(180deg" }}
              />
            </IconButton>
          </div>
        </div>
        <div>
          <Collapse in={display.address}>
            <div style={{ display: "flex", paddingRight: 6 }}>
              <TextField
                name='address'
                id='address-input'
                variant='outlined'
                style={{ width: "100%" }}
                onChange={(e) => handleUpFilterState(e)}
                value={apartsFilters.address}
              />
              <div style={{ marginLeft: 8 }}>
                <Button variant='outlined'>
                  <SearchIcon style={{ fontSize: 40, paddingTop: 4 }} />
                </Button>
              </div>
            </div>
          </Collapse>
        </div>
      </Fragment>
      <Fragment>
        <div>
          <div className='search-options-tab-heading-wrapper'>
            <div className='search-options-tab-heading-title-wrapper'>
              <h2>{"Tipo de operación"}</h2>
            </div>
            <div className='search-options-tab-heading-expand-wrapper'>
              <IconButton onClick={() => updateFiltersState("opType")}>
                <ExpandMoreIcon
                  style={{ transform: display.opType && "rotate(180deg" }}
                />
              </IconButton>
            </div>
          </div>

          <Collapse in={display.opType}>
            <div>
              <FormControl component='fieldset'>
                <RadioGroup
                  name='operation_type'
                  onChange={(e) => handleUpFilterState(e)}
                  value={apartsFilters.operation_type}
                >
                  <FormControlLabel
                    value='1'
                    control={<Radio />}
                    label='Comprar'
                  />
                  <FormControlLabel
                    value='2'
                    control={<Radio />}
                    label='Alquilar'
                  />
                  <FormControlLabel
                    value='3'
                    control={<Radio />}
                    label='Temporal'
                  />
                  <FormControlLabel
                    value='0'
                    control={<Radio />}
                    label='Todos'
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Collapse>
        </div>
      </Fragment>
    </div>
  );
};
export default Search;
