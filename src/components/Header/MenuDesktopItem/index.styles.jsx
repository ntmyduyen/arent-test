import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const WrapMenuItem = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 8px;
    padding: 8px;

    .wrap-icon {
        position: relative;

        svg {
            display: block;
        }

        span {
            position: absolute;
            width: 16px;
            height: 16px;
            top: -15%;
            right: -15%;
            transform: translate(15%, 15%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-primary-500);
            font-family: var(--secondary-font);
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            color: var(--color-light);
        }
    }

    span {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 23px;
        color: var(--color-light);
    }
`;

export default WrapMenuItem