import { memo } from "react"
import footer from "@data/footer"
import { Link } from "react-router-dom"
import { WrapFooter } from "./index.styles"

const Footer = () => {
    return (
        <WrapFooter>
            <div className="inner-footer">
                {footer.map(({ id, name, path }) => (
                    <Link key={id} to={path}>{name}</Link>
                ))}
            </div>
        </WrapFooter>
    )
}
export default memo(Footer)