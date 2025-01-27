import styled from 'styled-components'

const WrapMenuMobile = styled.div`
    position: relative;
    z-index: 1;

    .btn-hamburger {
        width: 26px;
        height: 26px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
        
        span {
            display: block;
            position: absolute;
            height: 6px;
            width: 100%;
            background: var(--color-primary-400);
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: .25s ease-in-out;
        }

        span:nth-child(1) {
            top: 0px;
            transform-origin: left center;
        }
    
        span:nth-child(2) {
            top: 10px;
            transform-origin: left center;
        }
    
        span:nth-child(3) {
            top: 20px;
            transform-origin: left center;
        }

        &.open span:nth-child(1) {
            transform: rotate(45deg);
            top: 0;
            left: 4px;
        }

        &.open span:nth-child(2) {
            width: 0%;
            opacity: 0;
        }

        &.open span:nth-child(3) {
            transform: rotate(-45deg);
            top: 19px;
            left: 4px;
        }
    }

    .list-menu {
        position: absolute;
        top: 100%;
        right: 0;
        width: 280px;
        background: var(--color-gray);

        hr {
            height: 1;
            width: 100%;
            background: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.15;
        }

        & > *:not(hr) {
            text-decoration: none;
            display: block;
            min-height: 72px;
            cursor: pointer;
            padding: 0 32px;
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 26px;
            color: var(--color-light);
        }
    }
`;

export {
    WrapMenuMobile
}