import styled from 'styled-components'

const Wrap = styled.div`
    cursor: pointer;
    width: 136px;
    height: 136px;
    padding: 1px 10px;
    background: linear-gradient(155.89deg, var(--gradient-start) 8.26%, var(--gradient-end) 91.18%);
    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        font-family: var(--secondary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: var(--color-light);
    }
`;

const BH = {
    Wrap
}

export default BH