import { StyledSearchBox, StyledSearchInput, StyledSearchButton } from "./SearchBox.style";
const SearchBox = () => {
    return (
        <StyledSearchBox>
            <StyledSearchInput isColored />
            <StyledSearchButton onClick={() =>{}}>Search</StyledSearchButton>
            
        </StyledSearchBox>
    )
}

export default SearchBox;
