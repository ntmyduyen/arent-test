import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addListMealHistory, appendListMealHistory } from "@redux/topPage/slice";
import MH from "./index.styles"
import ImageWithLabel from "@components/ImageWithLabel";
import BtnLoadMore from "@components/BtnLoadMore";

const MealHistory = () => {
    const dispatch = useDispatch()
    const mealHistory = useSelector(state => state.topPage.mealHistory)

    useEffect(() => {
        dispatch(addListMealHistory())
    }, []);

    const _handleLoadMore = () => {
        dispatch(appendListMealHistory())
    }

    return (
        <MH.Wrap>
            <div className="list-meal-history">
                {
                    mealHistory.map((item) => (
                        <ImageWithLabel key={item.id} {...item} />
                    ))
                }
            </div>
            <BtnLoadMore onClick={_handleLoadMore} />
        </MH.Wrap>
    )
}
export default MealHistory