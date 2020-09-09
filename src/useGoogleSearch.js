import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "707ed3c1e6d398bea";

//custom hook to return the search results
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]); {/*when term changes, useEffect is run*/}

  return { data };
};

export default useGoogleSearch;
