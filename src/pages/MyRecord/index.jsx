import { lazy, Suspense } from "react"
// import GraphFilter from "./GraphFilter"
import Wrap from "./index.styles"
import ListContent from "./ListContent"
// import MyDiary from "./MyDiary"
// import MyExercise from "./MyExercise"

const GraphFilter = lazy(() => import("./GraphFilter"))
const MyExercise = lazy(() => import("./MyExercise"))
const MyDiary = lazy(() => import("./MyDiary"))

const MyRecord = () => {
    return (
        <Wrap>
            <ListContent />
            <Suspense fallback={null}>
                <GraphFilter />
            </Suspense>
            <Suspense fallback={null}>
                <MyExercise />
            </Suspense>
            <Suspense fallback={null}>
                <MyDiary />
            </Suspense>
        </Wrap>
    )
}
export default MyRecord