import { IcChallenge, IcInfo, IcMemo } from "@assets/images"
import menuType from "@constants/menuType"
import routes from "./routes"

const menu = [
    {
        key: menuType.MEMO,
        Icon: IcMemo,
        name: "自分の記録",
        path: routes.myRecord
    },
    {
        key: menuType.CHALLENGE,
        Icon: IcChallenge,
        name: "チャレンジ",
        path: "/"
    },
    {
        key: menuType.INFO,
        Icon: IcInfo,
        name: "お知らせ",
        path: "/"
    },
]

export default menu