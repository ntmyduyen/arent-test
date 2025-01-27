import styled from 'styled-components'

const Wrap = styled.div`
    max-width: 40%;
    flex-basis: 40%;
    height: 100%;
    background: linear-gradient(225deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        position: absolute;
        width: 100%;
        object-fit: cover;
        /* mix-blend-mode: soft-light; */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .round {
        transform: rotate(-90deg);
        fill: none;
        stroke: var(--color-light);
        stroke-width: 2;
        stroke-linecap: round;
        stroke-dasharray: 0 999;
    }

    .time-percentage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        & > span {
            font-family: var(--secondary-font);
            font-style: normal;
            font-weight: 400;
            color: var(--color-light);
        }

        span:first-of-type {
            font-size: 18px;
            line-height: 22px;
            text-shadow: 0px 0px 6px #FC7400;
        }

        span:last-of-type {
            margin-left: 4px;
            font-size: 25px;
            line-height: 30px;
            text-shadow: 0px 0px 6px #FCA500;
        }
    }
`

const DAR =  {
    Wrap
}

export default DAR