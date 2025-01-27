import { nanoid } from 'nanoid'

import d01 from './images/d01.jpg'
import d02 from './images/d02.jpg'
import l01 from './images/l01.jpg'
import l02 from './images/l02.jpg'
import l03 from './images/l03.jpg'
import m01 from './images/m01.jpg'
import s01 from './images/s01.jpg'

const mealHistory = (filterType) => {
    const mealHistoryOrigin = [
        {
            id: nanoid(),
            url: m01,
            type: "MORNING",
            name: "Morning",
            date: "05.21"
        },
        {
            id: nanoid(),
            url: l03,
            type: "LUNCH",
            name: "Lunch",
            date: "05.21"
        },
        {
            id: nanoid(),
            url: d01,
            type: "DINNER",
            name: "Dinner",
            date: "05.21"
        },
        {
            id: nanoid(),
            url: l01,
            type: "SNACK",
            name: "Snack",
            date: "05.21"
        },
        {
            id: nanoid(),
            url: m01,
            type: "MORNING",
            name: "Morning",
            date: "05.20"
        },
        {
            id: nanoid(),
            url: l02,
            type: "LUNCH",
            name: "Lunch",
            date: "05.20"
        },
        {
            id: nanoid(),
            url: d02,
            type: "DINNER",
            name: "Dinner",
            date: "05.20"
        },
        {
            id: nanoid(),
            url: s01,
            type: "SNACK",
            name: "Snack",
            date: "05.20"
        },
    ]
    return filterType
        ? mealHistoryOrigin.filter(({ type }) => type === filterType)
        : mealHistoryOrigin
}

export default mealHistory