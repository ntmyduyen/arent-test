import styled from 'styled-components'

const WrapHeader = styled.div`
    height: 64px;
    background: var(--color-dark-500);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);

    .inner-header {
        max-width: 960px;
        height: inherit;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .wrap-right {
            display: flex;
            align-items: center;
            gap: 16px;

            .menu-desktop {
                display: flex;
                align-items: center;
            }
        }
    }
`;

export {
    WrapHeader
}