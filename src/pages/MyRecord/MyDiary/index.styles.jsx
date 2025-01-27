import styled from 'styled-components'

const WrapMyDiary = styled.div`
    margin: 56px auto 0;
    max-width: 960px;

    & > .title {
        font-family: var(--secondary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.11px;
        color: var(--color-dark-500);
    }

    .list-diary {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 12px;
    }
`;

export {
    WrapMyDiary
}