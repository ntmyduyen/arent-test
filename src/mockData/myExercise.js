import { nanoid } from "nanoid"

const myExercise = {
    date: "2021.05.21",
    exercises: new Array(20).fill(null).map(_ => ({
        id: nanoid(),
        name: "家事全般（立位・軽い）",
        time: "10 min",
        caloriesConsumed: "26kcal"
    }))
}

export default myExercise