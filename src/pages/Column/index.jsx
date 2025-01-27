import BtnLoadMore from "@components/BtnLoadMore"
import ColumnItem from "@components/ColumnItem"
import { addColumn, appendColumn } from "@redux/column/slice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import WrapColumn from "./index.styles"
import Labels from "./Labels"

const Column = () => {
    const dispatch = useDispatch()
    const recommendColumn = useSelector(state => state.column.recommendColumn)

    useEffect(() => {
        dispatch(addColumn())
    }, []);

    const _handleLoadMore = () => {
        dispatch(appendColumn())
    }

    return (
        <WrapColumn>
            <Labels />
            <div className="list-column">
                {
                    recommendColumn.map(column => (
                        <ColumnItem key={column.id} {...column} />
                    ))
                }
            </div>
            <BtnLoadMore onClick={_handleLoadMore} />
        </WrapColumn>
    )
}
export default Column