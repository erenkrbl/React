import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";

    // api call - axios
    // axios parameters api_key page query
    // data state useState
    // Data mapping

export const CardList = ({movieList, baseImageUrl}) => {
     
    return (
        <StyledCardList>
            {movieList?.map(
                (movie, index) => (
                    <Card
                        key={index}
                        title={movie.title}
                        imgSrc={baseImageUrl + movie.poster_path}            
                    />)
                )}
            )}
        </StyledCardList>
        
    )
}