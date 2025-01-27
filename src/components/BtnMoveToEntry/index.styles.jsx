import styled from 'styled-components'

const Wrap = styled.div`
    width: 288px;
    height: 288px;
    background: var(--color-dark-600);
    border: 24px solid var(--color-primary-300);
    position: relative;
    cursor: pointer;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        mix-blend-mode: luminosity;
    }

    .wrap-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);

        .title {
            font-family: var(--secondary-font);
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.125px;
            color: var(--color-primary-300);
        }
    
        .desc {
            margin-top: 10px;
            min-width: 160px;
            min-height: 24px;
            background: var(--color-primary-400);
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: var(--color-light);
        }
    }

`;

export {
    Wrap
}