import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import { CardList } from "./components/CardList";
import SearchBox from './components/SearcBox';

const apiKey = "cef68a8b02832fbb213f0ca6147108dd"; // temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
    

    useEffect(() => {
        axios.get(baseUrl, {
            params: {
                api_key: apiKey,
                page: 1,
                query: searchKeyword
            }
        })
        .then((res) => setMovieList(res?.data?.results))
        .catch((err) => console.log(err))
    }, [searchKeyword])

    //console.log(movieList)
  return (
    <div className="App">
      <SearchBox setSearchKeyword={setSearchKeyword} />
      <CardList movieList={movieList} baseImageUrl={baseImageUrl} />
      
    </div>
  );
}

export default App;
