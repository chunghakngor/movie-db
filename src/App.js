import React, { useReducer } from "react";
import { Container, Button, CircularProgress, Grid, Typography } from "@material-ui/core";
import { reducer } from "./mainReducer";
import { MovieList } from "./MovieComponent";
import { ErrorModal } from "./ErrorModal";

// .ENV Imports
const TMDB_APIKEY = process.env.REACT_APP_TMDB_APIKEY;

// For development
// const TMDB_APIKEY = <API_KEY>

// Export the Context for use in other Components
export const ResultContext = React.createContext();

// Initial State
const initState = { isLoading: false, isError: "", showModal: false, query: "", result: [] };

// Main App Component
export const App = () => {
  // useReducer function to manage state
  const [state, dispatch] = useReducer(reducer, initState);

  // Remove Movie by ID (Pass through Context to Nested Component)
  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_MOVIE", value: id });
  };

  const { isLoading, isError, showModal, query, result } = state;

  // Fetching data from API
  const fetchData = (e) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    e.preventDefault();
    dispatch({ type: "LOADING" });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results !== undefined && data.results.length > 0) {
          dispatch({ type: "SET_RESULT", value: data.results });
        } else {
          dispatch({ type: "ERROR", value: "Invalid search!" });
        }
      })
      .catch((err) => {
        dispatch({ type: "ERROR", value: "Invalid search!" });
      });
  };

  return (
    <ResultContext.Provider value={{ result, removeMovie }}>
      <Container maxWidth="lg" style={{ marginTop: "2em" }}>
        <form onSubmit={fetchData} noValidate autoComplete="off">
          <input
            type="text"
            name="query"
            value={query}
            onChange={(event) => dispatch({ type: "SET_FIELD", target: "query", value: event.target.value })}
            placeholder="Search"
            style={{
              width: "100%",
              height: "2em",
              margin: "auto",
              padding: "0.5em",
              borderRadius: "10px",
            }}
          />
          <Grid container direction="row" justify="flex-end" alignItems="flex-start">
            <Button
              style={{ marginTop: "1em" }}
              type="reset"
              variant="contained"
              color="secondary"
              onClick={() => {
                dispatch({ type: "RESET" });
              }}>
              Reset
            </Button>
          </Grid>
        </form>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ marginTop: "2em", marginBottom: "2em" }}>
          {showModal ? <ErrorModal errMsg={isError} /> : null}
          {isLoading ? <CircularProgress /> : <MovieList />}
        </Grid>
      </Container>

      <Container maxWidth="xs" style={{ marginTop: "10em" }}>
        <Typography variant="h6" gutterBottom>
          Powered by
          <span>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="TMBD Logo"
            />
          </span>
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          &copy; Copyright 2020, Chung Hak Ngor
        </Typography>
      </Container>
    </ResultContext.Provider>
  );
};
