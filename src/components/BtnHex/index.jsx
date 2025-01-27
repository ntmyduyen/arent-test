import { getMealHistoryByType } from "@redux/topPage/slice"
import { useDispatch } from "react-redux"
import BH from "./index.styles"

const BtnHex = ({ title, type, Icon }) => {
    const dispatch = useDispatch()

    const _handleFilter = () => {
        dispatch(getMealHistoryByType(type))
    }

    return (
        <BH.Wrap onClick={_handleFilter} data-testid="btn-hex">
            <Icon />
            <div className="title">{title}</div>
        </BH.Wrap>
    )
}
export default BtnHex