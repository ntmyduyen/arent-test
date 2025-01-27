import styled from 'styled-components'

const WrapGraphFilter = styled.div`
    max-width: 960px;
    height: 304px;
    margin: 56px auto 0;
    background: var(--color-dark-500);
    padding: 16px 24px;
    display: flex;
    flex-direction: column;

    .wrap-title-date {
        display: flex;
        span {
            font-family: var(--secondary-font);
            font-style: normal;
            font-weight: 400;
            color: var(--color-light);
        }

        span:first-of-type {
            display: block;
            max-width: 96px;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.15px;
        }

        span:last-of-type {
            font-size: 22px;
            line-height: 27px;
            letter-spacing: 0.11px;
        }
    }

    .wrap-graph {
        margin-top: 2px;
        flex-grow: 1;
        flex-shrink: 0;
    }

    .btn-filter {
        margin-top: 8px;
        display: flex;
        gap: 16px;

        .filter {
            cursor: pointer;
            width: 56px; 
            height: 24px;
            background: var(--color-light);
            border-radius: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 22px;
            text-align: center;
            letter-spacing: 0.075px;
            color: var(--color-primary-300);

            &.active {
                pointer-events: none;
                background: var(--color-primary-300);
                color: var(--color-light);
            }
        }
    }
`;

export {
    WrapGraphFilter
}