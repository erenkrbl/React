import React, { useState, useRef } from 'react'

import { StyledSearchBox, StyledSearchInput, StyledSearchButton } from "./SearchBox.style";

const SearchBox = ({setSearchKeyword}) => {
    //const [inputValue, setInputValue] = useState("");
    const inputRef = useRef();
    //console.log('inpuRef: ', inputRef?.current?.value)


    return (
        <StyledSearchBox>
            <StyledSearchInput ref={inputRef} isColored={false} />
            <StyledSearchButton onClick={() => setSearchKeyword(inputRef?.current?.value)}>Search</StyledSearchButton>
            
        </StyledSearchBox>
    )
}

export default SearchBox;
