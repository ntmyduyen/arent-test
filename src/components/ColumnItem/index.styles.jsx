import styled from 'styled-components'

const WrapColumnItem = styled.div`
    width: 234px;
    .wrap-img {
        width: inherit;
        height: 144px;
        background: url(${props => props.url});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;

        .date-time {
            position: absolute;
            bottom: 0;
            left: 0;
            font-family: var(--secondary-font);
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 30px;
            color: var(--color-light);
            min-width: 144px;
            padding: 3px 8px;
            background: var(--color-primary-300);
        }
    }
    .title {
        margin-top: 8px;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 0.075px;
        color: var(--color-dark-500);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .tags {
        display: flex;
        gap: 10px;
        .tag {
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 22px;
            letter-spacing: 0.06px;
            color: var(--color-primary-400);
        }
    }
`;

export {
    WrapColumnItem
}