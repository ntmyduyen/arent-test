import styled from 'styled-components'

const Wrap = styled.div`
    max-width: 960px;
    margin: 24px auto 0;

    .list-meal-history {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 8px;
    }
`;

const MH = {
    Wrap
}

export default MH