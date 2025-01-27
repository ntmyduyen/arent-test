import styled from 'styled-components'

const WrapLabels = styled.div`
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;

    .column {
        width: 216px;
        min-height: 144px;
        background: var(--color-dark-600);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .name {
            font-family: var(--secondary-font);
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 27px;
            text-align: center;
            letter-spacing: 0.11px;
            color: var(--color-primary-300);
        }

        hr {
            width: 56px;
            height: 1px;
            background-color: var(--color-light);
        }

        .desc {
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 26px;
            text-align: center;
            color: var(--color-light);
        }
    }
`;

export {
    WrapLabels
}