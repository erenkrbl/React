import React from "react";
import { StyledCardWrapper, StyledText, StyledMovieImage } from "./Card.style";


export const Card = ({title, imgSrc, poster_path}) => {
    return (
       
        <StyledCardWrapper>
            
            {
                poster_path ?
                <StyledMovieImage src={imgSrc + poster_path} alt="Movie Poster"/>
                :
                "No Image"
                
            }
            <StyledText>{title}</StyledText>
            
        </StyledCardWrapper>
    )
}
