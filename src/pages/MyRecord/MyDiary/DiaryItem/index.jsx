import { WrapDiaryItem } from "./index.styles"

const DiaryItem = ({ date, time, title, note }) => {
    return (
        <WrapDiaryItem>
            <div className="date">{date}</div>
            <div className="time">{time}</div>
            <div className="title">{title}</div>
            <div className="note" title={note}>{note}</div>
        </WrapDiaryItem>
    )
}
export default DiaryItem