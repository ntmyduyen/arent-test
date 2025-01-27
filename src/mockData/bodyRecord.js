import filterBodyRecordType from "@constants/filterBodyRecordType"
import { labelsByDay, labelsByMonth, labelsByWeek, labelsByYear } from "@data/graph"
import generateGraphData from "@utils/generateGraphData"

const dataByDay = {
    date: "2021.05.21",
    datasets: generateGraphData(
        labelsByDay.map(_ => Math.random() * 50),
        labelsByDay.map(_ => Math.random() * 50)
    )

}
const dataByWeek = {
    date: "2021.05.21",
    datasets: generateGraphData(
        labelsByWeek.map(_ => Math.random() * 50),
        labelsByWeek.map(_ => Math.random() * 50)
    )
}

const dataByMonth = {
    date: "2021.05.21",
    datasets: generateGraphData(
        labelsByMonth.map(_ => Math.random() * 50),
        labelsByMonth.map(_ => Math.random() * 50)
    )
}

const dataByYears = {
    date: "2021.05.21",
    datasets: generateGraphData(
        labelsByYear.map(_ => Math.random() * 50),
        labelsByYear.map(_ => Math.random() * 50)
    )
}

const bodyRecord = {
    [filterBodyRecordType.DAY]: dataByDay,
    [filterBodyRecordType.WEEK]: dataByWeek,
    [filterBodyRecordType.MONTH]: dataByMonth,
    [filterBodyRecordType.YEAR]: dataByYears
}

export default bodyRecord