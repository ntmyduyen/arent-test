import filterBodyRecordType from "@constants/filterBodyRecordType"

const labelsByDay = new Array(24).fill(null).map((_, index) => index)

const labelsByWeek = new Array(7).fill(null).map((_, index) => `${index + 1}`)

const labelsByMonth = new Array(31).fill(null).map((_, index) => `${index + 1}`)

const labelsByYear = new Array(12).fill(null).map((_, index) => `${index + 1}月`)

const labelByFilter = {
    [filterBodyRecordType.DAY]: labelsByDay,
    [filterBodyRecordType.WEEK]: labelsByWeek,
    [filterBodyRecordType.MONTH]: labelsByMonth,
    [filterBodyRecordType.YEAR]: labelsByYear
}

export {
    labelsByDay,
    labelsByWeek,
    labelsByMonth,
    labelsByYear,
    labelByFilter
}