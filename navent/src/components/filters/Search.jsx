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
import { orange } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const Search = () => {
  const theme = createMuiTheme({
    palette: {
      primary: { main: orange[500] },
    },
  });
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

  const handleUpFilterState = (e, field) => {
    let newFilterState = { ...filterState, [field]: e.target.value };
    let filtersBool =
      newFilterState.address !== "" || newFilterState.operation_type !== "0";

    setFilterState(newFilterState);
    dispatch({
      type: UPDATE_FILTERS,
      payload: newFilterState,
      searchBool: filtersBool,
    });

    window.sessionStorage.setItem("filters", JSON.stringify(newFilterState));
    window.sessionStorage.setItem("search_bool", filtersBool);
  };
  useEffect(() => {
    let filtersStorage = JSON.parse(window.sessionStorage.getItem("filters"));
    let searchStorage = window.sessionStorage.getItem("search_bool");

    if (filtersStorage) {
      updateFiltersState({
        address: filtersStorage.address !== "",
        operation_type: filtersStorage.operation_type !== "0",
        searchBool: searchStorage,
      });
    }
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
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
              <div style={{ display: "flex" }}>
                <TextField
                  placeholder='Buscar por direccion'
                  id='address-input'
                  variant='outlined'
                  onChange={(e) => handleUpFilterState(e, "address")}
                  value={apartsFilters.address}
                />
                <div style={{ marginLeft: 8 }}>
                  <Button
                    variant='outlined'
                    style={{ color: "rgb(0, 255, 255)" }}
                  >
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
                    onChange={(e) => handleUpFilterState(e, "operation_type")}
                    value={apartsFilters.operation_type}
                  >
                    <FormControlLabel
                      value='1'
                      control={<Radio color='primary' />}
                      label='Comprar'
                    />
                    <FormControlLabel
                      value='2'
                      control={<Radio color='primary' />}
                      label='Alquilar'
                    />
                    <FormControlLabel
                      value='3'
                      control={<Radio color='primary' />}
                      label='Temporal'
                    />
                    <FormControlLabel
                      value='0'
                      control={<Radio color='primary' />}
                      label='Todos'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Collapse>
          </div>
        </Fragment>
      </div>
    </MuiThemeProvider>
  );
};
export default Search;
