import { IcLogo } from "@assets/images"
import menu from "@data/menu"
import routes from "@data/routes"
import { getNotify } from "@redux/user/slice"
import { Suspense, lazy } from "react"
import { memo, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { WrapHeader } from "./index.styles"
// import MenuDesktopItem from "./MenuDesktopItem"
// import MenuMobile from "./MenuMobile"

const MenuDesktopItem = lazy(() => import('./MenuDesktopItem'))
const MenuMobile = lazy(() => import('./MenuMobile'))

const Header = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNotify())
    }, []);

    return (
        <WrapHeader>
            <div className="inner-header">
                <Link to={routes.topPage} data-testid="logo-page">
                    <IcLogo />
                </Link>

                <div className="wrap-right">
                    <div className="menu-desktop">
                        <Suspense fallback={null}>
                            {
                                menu.map(({ key, ...item }) => (
                                    <MenuDesktopItem key={key} type={key} {...item} />
                                ))
                            }
                        </Suspense>
                    </div>
                    <div className="menu-mobile">
                        <Suspense fallback={null}>
                            <MenuMobile />
                        </Suspense>
                    </div>
                </div>
            </div>
        </WrapHeader>
    )
}
export default memo(Header)