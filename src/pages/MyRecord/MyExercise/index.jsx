import { idMyExercise } from "@data/lstEntry";
import { addMyExercise } from "@redux/myRecord/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrap from "./index.styles"

const MyExercise = () => {
    const dispatch = useDispatch()
    const myExercise = useSelector(state => state.myRecord.myExercise)

    useEffect(() => {
        dispatch(addMyExercise())
    }, []);

    const { date, exercises } = myExercise

    return (
        <Wrap id={idMyExercise}>
            <div className="label">
                <span>MY EXERCISE</span>
                <span>{date}</span>
            </div>
            <div className="list-exercise">
                <ul>
                {exercises.map(({ id, name, time, caloriesConsumed }) => (
                    <li key={id}>
                        <div className="exercise">
                            <span>{name}</span>
                            <span>{time}</span>
                        </div>
                        <div className="calories">{caloriesConsumed}</div>
                    </li>
                ))}
                </ul>
            </div>
        </Wrap>
    )
}
export default MyExercise