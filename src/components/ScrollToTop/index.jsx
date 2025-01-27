import { IcArrowUp } from "@assets/images"
import { memo } from "react"
import WrapScrollToTop from "./index.styles"

const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <WrapScrollToTop data-testid="btn-scroll-to-top" onClick={handleScrollToTop}><IcArrowUp /></WrapScrollToTop>
    )
}
export default memo(ScrollToTop)