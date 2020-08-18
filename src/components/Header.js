import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #25C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`

const TextoHeader1 = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`

const Header = ({ titulo }) => {
    return (
        <ContenedorHeader>
            <TextoHeader1>{titulo}</TextoHeader1>
        </ContenedorHeader>
    );
}

export default Header;