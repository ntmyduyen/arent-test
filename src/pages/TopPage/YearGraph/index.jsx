import Graph from "@components/Graph"
import { labelsByYear } from "@data/graph"
import { addGraphData } from "@redux/topPage/slice"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { WrapYearGraph } from "./index.styles"

const YearGraph = () => {
    const dispatch = useDispatch()
    const datasets = useSelector(state => state.topPage.graphData.datasets)

    useEffect(() => {
        dispatch(addGraphData())
    }, []);

    const data = useMemo(() => {
        if(datasets.length === 0) return null
        const data = {
            labels: labelsByYear,
            datasets
        }
        return data
    }, [datasets])

    return (
        <WrapYearGraph>
            { data !== null && <Graph data={data} /> }
        </WrapYearGraph>
    )
}
export default YearGraph