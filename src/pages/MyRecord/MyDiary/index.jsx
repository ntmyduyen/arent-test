import BtnLoadMore from "@components/BtnLoadMore";
import { idMyDiary } from "@data/lstEntry";
import { addMyDiary, appendMyDiary } from "@redux/myRecord/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DiaryItem from "./DiaryItem";
import { WrapMyDiary } from "./index.styles"

const MyDiary = () => {
    const dispatch = useDispatch()
    const myDiary = useSelector(state => state.myRecord.myDiary)

    useEffect(() => {
        dispatch(addMyDiary())
    }, []);

    const _handleLoadMore = () => {
        dispatch(appendMyDiary())
    }

    return (
        <WrapMyDiary id={idMyDiary}>
            <div className="title">MY DIARY</div>
            <div className="list-diary">
                {
                    myDiary.map(diary => (
                        <DiaryItem key={diary.id} {...diary} />
                    ))
                }
            </div>
            <BtnLoadMore onClick={_handleLoadMore} />
        </WrapMyDiary>
    )
}
export default MyDiary