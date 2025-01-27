import { useDispatch, useSelector } from "react-redux"
import filterBodyRecordType from "@constants/filterBodyRecordType"
import filterBodyRecord from "@data/filterBodyRecord"
import { WrapGraphFilter } from "./index.styles"
import { useEffect, useMemo } from "react"
import { labelByFilter } from "@data/graph"
import { showBodyRecord } from "@redux/myRecord/slice"
import Graph from "@components/Graph"
import getClass from "@utils/getClass"
import { idBodyRecord } from "@data/lstEntry"

const GraphFilter = () => {
    const dispatch = useDispatch()
    const bodyRecord = useSelector(state => state.myRecord.bodyRecord)

    useEffect(() => {
        dispatch(showBodyRecord(filterBodyRecordType.YEAR))
    }, []);

    const { date , filterType, datasets } = bodyRecord

    const data = useMemo(() => {
        if(!filterType || datasets.length === 0) return null

        const labels = labelByFilter[filterType]
        const data = {
            labels,
            datasets
        }
        return data
    }, [filterType, datasets])

    const _handleFilter = (type) => {
        dispatch(showBodyRecord(type))
    }

    return (
        <WrapGraphFilter id={idBodyRecord}>
            <div className="wrap-title-date">
                <span>BODY RECORD</span>
                <span>{date}</span>
            </div>
            <div className="wrap-graph">
            {
                data !== null && <Graph data={data} />
            }
            </div>
            <div className="btn-filter">
                {filterBodyRecord.map(({ type, text }) => (
                    <div className={getClass("filter", filterType === type && "active")} key={type} onClick={() => _handleFilter(type)}>{text}</div>
                ))}
            </div>
        </WrapGraphFilter>
    )
}
export default GraphFilter