import { nanoid } from 'nanoid'
import column1 from './images/column-1.jpg'
import column2 from './images/column-2.jpg'
import column3 from './images/column-3.jpg'
import column4 from './images/column-4.jpg'
import column5 from './images/column-5.jpg'
import column6 from './images/column-6.jpg'
import column7 from './images/column-7.jpg'
import column8 from './images/column-8.jpg'

const lstImg = [
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    column8
]

const recommendColumn = () => new Array(8).fill(null).map((_, index) => ({
    id: nanoid(),
    url: lstImg[index],
    dateTime: "2021.05.17 23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    tags: [
        "魚料理",
        "和食",
        "DHA"
    ]
}))

export default recommendColumn