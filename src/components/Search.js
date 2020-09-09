import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateProviderValue } from "../datalayer/StateProvider";

function Search({ hideButtons = false }) {
//dispatch allows you to change state in the data layer  
  const [{}, dispatch] = useStateProviderValue();

  const [input, setInput] = useState(""); {/*keeps track of what's typed in search bar*/}
  const history = useHistory();

  const search = (e) => {
    e.preventDefault(); {/*when clicked page doesn't refresh*/}
 //whenever you type in search field it dispatches an action and puts it into the data layer
    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
    history.push("/search"); {/*when you run the search function, it pushes you into the search page*/}
  };

  return (
    <form className="search">
      <div class="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} /> {/*sets input to what's being typed*/}
        <MicIcon />
      </div>

{/*if hideButtons is false render the buttons*/}
{/*else, hide the buttons*/}
      {!hideButtons ? (
        <div class="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div class="search__buttonsHidden">
          <Button
            className="search__buttonsHidden"
            type="submit" {/*allows hitting the enter key to run the search function*/}
            onClick={search} {/*running the search function whrn button is clicked*/}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
