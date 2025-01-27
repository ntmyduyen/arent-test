import BtnMoveToEntry from "@components/BtnMoveToEntry"
import lstEntry from "@data/lstEntry"
import Wrap from "./index.styles"

const ListContent = () => {
    return (
        <Wrap>
            {
                lstEntry.map(entry => (
                    <BtnMoveToEntry key={entry.id} {...entry} />
                ))
            }
        </Wrap>
    )
}
export default ListContent