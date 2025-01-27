import { nanoid } from "nanoid";
import { IcCup, IcKnife } from "@assets/images";
import mealData from "./mealData";
import mealType from "@constants/mealType";

const filterButton = [
    {
        id: nanoid(),
        title: mealData.MORNING.title,
        type: mealType.MORNING,
        Icon: IcKnife
    },
    {
        id: nanoid(),
        title: mealData.LUNCH.title,
        type: mealType.LUNCH,
        Icon: IcKnife
    },
    {
        id: nanoid(),
        title: mealData.DINNER.title,
        type: mealType.DINNER,
        Icon: IcKnife
    },
    {
        id: nanoid(),
        title: mealData.SNACK.title,
        type: mealType.SNACK,
        Icon: IcCup
    },
]

export default filterButton