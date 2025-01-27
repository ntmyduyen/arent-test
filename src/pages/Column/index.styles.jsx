import styled from 'styled-components'

const WrapColumn = styled.div`
    max-width: 960px;
    margin: 0 auto;
    
    .list-column {
        margin-top: 56px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 8px;
        grid-row-gap: 18px;
    }
`;

export default WrapColumn