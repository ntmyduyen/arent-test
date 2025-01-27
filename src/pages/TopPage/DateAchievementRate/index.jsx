import { addDateAchievementRage } from "@redux/topPage/slice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DAR from "./index.style"

const rCircle = 40

const DateAchievementRate = () => {
    const svgRef = useRef(null)
    const dispatch = useDispatch()
    const dateAchievementRage = useSelector(state => state.topPage.dateAchievementRage)
    const { url, date, rate } = dateAchievementRage

    useEffect(() => {
        dispatch(addDateAchievementRage())
    }, []);

    useEffect(() => {
        if(rate === 0) return;
        const roundCircum = 2 * rCircle * Math.PI
        const roundDraw = rate * roundCircum / 100
        svgRef.current.style.strokeDasharray = `${roundDraw} 999`
    }, [rate]);

    return (
        <DAR.Wrap>
            {!!url && <img src={url} alt="meal" loading="lazy" />}
            {
                rate !== 0 &&
                <svg ref={svgRef} className="round" viewBox="0 0 100 100" width={200} height={200} data-percent={89}>
                    <circle cx={50} cy={50} r={rCircle} />
                </svg>
            }
            <div className="time-percentage">
                <span>{date}</span>
                <span>{rate}%</span>
            </div>
        </DAR.Wrap>
    )
}
export default DateAchievementRate