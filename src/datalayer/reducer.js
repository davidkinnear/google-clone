//this is what the data layer looks like initially
//where the data is going to live
export const initialState = {
  term: null,
};

//state is the state of the data layer
//action is the action you're dispatching into the data layer
const reducer = (state, action) => {
  console.log(action); {/*logs the action whenever a change is made*/}

// action -> type, [payload]
//reducers job is to listen to any dispatched actions
  switch (action.type) {
    case "SET_SEARCH_TERM": {/*returns original state and what the new data layer should look like*/}
      return {
        ...state,
        term: action.term,
      };
//if it doesn't know the dispatched action, it returns whatever the state currently was
    default:
      return state;
  }
};

export default reducer;

