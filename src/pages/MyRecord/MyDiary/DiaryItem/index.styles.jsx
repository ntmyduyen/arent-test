import styled from 'styled-components'

const WrapDiaryItem = styled.div`
    width: 231px;
    height: 231px;
    border: 2px solid #707070;
    background: var(--color-light);
    padding: 16px;

    .date, .time {
        font-family: var(--secondary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.09px;
        color: var(--color-dark-500);
    }

    .title, .note {
        margin-top: 8px;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 0.06px;
        color: var(--color-dark-500);
    }

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .note {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 5;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
`;

export {
    WrapDiaryItem
}