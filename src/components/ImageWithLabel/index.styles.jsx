import styled from 'styled-components'

const Wrap = styled.div`
    width: 234px;
    height: 234px;
    background: url(${props => props.url});
    background-size: cover;
    background-position: center;
    position: relative;

    .date {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 7px 8px;
        font-family: var(--secondary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.15px;
        color: var(--color-light);
        background: #FFCC21;
        display: inline-block;
        min-width: 120px;
    }
`;

const IWL = {
    Wrap
}

export default IWL