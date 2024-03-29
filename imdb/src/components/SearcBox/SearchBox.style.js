import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    border-radius: 0.02.rem;
`;

export const StyledSearchButton = styled(StyledButton)`
    cursor: pointer;
`;


export const StyledSearchInput = styled.input`
    color: black;
    ${ p => p.isColored &&
        css`
            color: red;
        `    
    }

    border-radius: 0.3rem;
    margin-right: 0.5rem;
    /* color: ${p => p.color}; */

`;

export const StyledSearchBox = styled.div`
    margin: 2rem;
    /* ${StyledSearchInput} {
        color: green;
    } */

`;

