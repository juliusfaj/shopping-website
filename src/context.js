import React from "react";
import { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //for getting the track
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c830865482mshad14dc47e9ab6cdp129804jsn836f7ea3e592",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  const getData = () => {
    setIsLoading(true);
    fetch(
      `https://spotify23.p.rapidapi.com/search/?q=${search}type=tracks&offset=0&limit=10&numberOfTopResults=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const { tracks } = response;
        const { items } = tracks;

        setSearchData(items);
        setIsLoading(false);
      })
      .catch((err) => {
        setSearchData({});
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <AppContext.Provider value={{ search, setSearch, isLoading, searchData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
