import styled from 'styled-components'

const Wrap = styled.div`
    max-width: 960px;
    margin: 56px auto 0;
    background: var(--color-dark-500);
    padding: 16px 24px;

    .label {
        span:first-of-type {
            font-family: var(--secondary-font);
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.15px;
            color: var(--color-light);
            display: inline-block;
            max-width: 96px;
        }
        span:last-of-type {
            font-family: var(--secondary-font);
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 27px;
            letter-spacing: 0.11px;
            color: var(--color-light);
        }
    }

    .list-exercise {
        margin-top: 4px;
        height: 192px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            border-radius: 3px;
            background: var(--color-gray);
        }

        &::-webkit-scrollbar-thumb {
            background: var(--color-primary-300);
            border-radius: 3px;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 40px;
            grid-row-gap: 8px;
            padding-right: 32px;

            li {
                position: relative;
                padding: 0 0 2px 16px;
                border-bottom: 1px solid #777777;
                &::before {
                    content: "";
                    width: 5px;
                    height: 5px;
                    background: white;
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    top: 10px;
                    left: 0;
                }

                .exercise {
                    display: flex;
                    justify-content: space-between;
                    gap: 40px;
                    span:first-of-type {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 15px;
                        line-height: 22px;
                        letter-spacing: 0.075px;
                        color: var(--color-light);
                    }
                    span:last-of-type {
                        font-family: var(--secondary-font);
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 22px;
                        text-align: right;
                        letter-spacing: 0.09px;
                        color: var(--color-primary-300);
                    }
                }

                .calories{
                    font-family: var(--secondary-font);
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 18px;
                    letter-spacing: 0.075px;
                    color: var(--color-primary-300);
                }
            }
        }
    }
`;

export default Wrap