import BtnHex from "@components/BtnHex"
import filterButton from "@data/filterButton"
import FB from "./index.styles"

const FilterButton = () => {

    return (
        <FB.Wrap>
            {
                filterButton.map((btn) => (
                    <BtnHex key={btn.id} {...btn} />
                ))
            }
        </FB.Wrap>
    )
}
export default FilterButton