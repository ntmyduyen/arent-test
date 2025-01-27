import { Fragment, useRef, useState } from "react";
import getClass from "@utils/getClass";
import { WrapMenuMobile } from "./index.styles"
import menuMobile from "@data/menuMobile";
import { NavLink } from "react-router-dom";
import useClickOutside from "@hooks/useClickOutside";

const MenuMobile = () => {
    const ref = useRef(null)
    const [isExpands, setIsExpands] = useState(false);

    const handleClickBtn = () => {
        setIsExpands(pre => !pre)
    }

    useClickOutside(ref, () => {
        setIsExpands(false)
    })

    return (
        <WrapMenuMobile ref={ref} data-testid="menu-mobile">
            <div
                className={getClass("btn-hamburger", isExpands && "open")}
                onClick={handleClickBtn}
                data-testid="btn-hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {
                isExpands &&
                <div className="list-menu" data-testid="menu-mobile_list-menu">
                    {
                        menuMobile.map(({ key, name, path }, index) => (
                            <Fragment key={key}>
                                {index !== 0 && <hr />}
                                <NavLink to={path} onClick={handleClickBtn}>{name}</NavLink>
                            </Fragment>
                        ))
                    }
                </div>
            }
        </WrapMenuMobile>
    )
}
export default MenuMobile