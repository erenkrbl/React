import React, { useEffect } from "react";
import { Card } from "../Card";
import axios from "axios";

const apiKey = ""; // temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const CardList = () => {

    useEffect(() => {
        axios.get(baseUrl, {
            params: {
                api_key: apiKey,
                page: 1,
                query: "Star Wars" // TODO:from input
            }
        })
        .then((res) =>console.log(res))
    }, [])


    // useState
    // Data mapping
    
    return (
        <Card/>
    )
}