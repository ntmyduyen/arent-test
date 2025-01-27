import styled from 'styled-components'

const WrapScrollToTop = styled.div`
    position: fixed;
    right: 46px;
    bottom: 46px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.0001);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--color-gray);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default WrapScrollToTop