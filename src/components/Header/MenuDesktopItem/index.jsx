import { INFO } from "@constants/menuType"
import { useSelector } from "react-redux"
import WrapMenuItem from "./index.styles"

const MenuDesktopItem = ({ type, Icon, name, path }) => {

    const notify = useSelector(state => state.user.notify)
    const isShowNotify = type === INFO && notify.length > 0

    return (
        <WrapMenuItem to={path}>
            <div className="wrap-icon">
                <Icon />
                {isShowNotify && <span>{notify.length}</span>}
            </div>
            <span>{name}</span>
        </WrapMenuItem>
    )
}
export default MenuDesktopItem