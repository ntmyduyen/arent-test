import { IcArrowUp } from "@assets/images"
import { memo } from "react"
import WrapScrollToTop from "./index.styles"

const ScrollToTop = () => {
    const _handleScrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <WrapScrollToTop data-testid="btn-scroll-to-top" onClick={_handleScrollToTop}><IcArrowUp /></WrapScrollToTop>
    )
}
export default memo(ScrollToTop)