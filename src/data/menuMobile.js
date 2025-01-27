import menuType from "@constants/menuType"
import { nanoid } from "@reduxjs/toolkit"
import routes from "./routes"

const menuMobile = [
    {
        key: menuType.MEMO,
        name: "自分の記録",
        path: routes.myRecord
    },
    {
        key: nanoid(),
        name: "体重グラフ",
        path: "/"
    },
    {
        key: nanoid(),
        name: "目標",
        path: "/"
    },
    {
        key: nanoid(),
        name: "選択中のコース",
        path: "/"
    },
    {
        key: nanoid(),
        name: "コラム一覧",
        path: routes.column
    },
    {
        key: nanoid(),
        name: "設定",
        path: "/"
    },
]

export default menuMobile