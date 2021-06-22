import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import axios from "axios";

const apiKey = ""; // temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    // api call - axios
    // axios parameters api_key page query
    // data state useState
    // Data mapping

export const CardList = () => {
    const [movieList, setMovieList] = useState(null)
    

    useEffect(() => {
        axios.get(baseUrl, {
            params: {
                api_key: apiKey,
                page: 1,
                query: "Star Wars" // TODO:from input
            }
        })
        .then((res) => setMovieList(res?.data?.results))
        .catch((err) => console.log(err))
    }, [])

    console.log(movieList)

    
    
    return (
        <>
            {
                movieList?.map((movie, index) => {
                    return <Card
                            key={index}
                            title={movie.title}
                            imgSrc={baseImageUrl + movie.poster_path}
                            
                        />
                })
            }
        </>
        
    )
}