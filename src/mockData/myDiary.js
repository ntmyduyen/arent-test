import { nanoid } from "nanoid"

const myDiary = () => new Array(8).fill(null).map(_ => ({
    id: nanoid(),
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    note: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
}))

export default myDiary