import DateAchievementRate from "./DateAchievementRate"
import FilterButton from "./FilterButton"
import TP from "./index.styles"
import MealHistory from "./MealHistory"
import YearGraph from "./YearGraph"

const TopPage = () => {
    return (
        <div>
            <TP.Head>
                <DateAchievementRate />
                <YearGraph />
            </TP.Head>
            <FilterButton />
            <MealHistory />
        </div>
    )
}
export default TopPage