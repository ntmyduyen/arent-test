import styled from 'styled-components'

const WrapFooter = styled.footer`
    margin-top: 64px;
    height: 128px;
    background: var(--color-dark-500);
    
    .inner-footer {
        height: inherit;
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 45px;

        & > * {
            text-decoration: none;
            font-style: normal;
            font-weight: 300;
            font-size: 11px;
            line-height: 16px;
            letter-spacing: 0.033px;
            color: var(--color-light);
        }
    }
`;

export {
    WrapFooter
}