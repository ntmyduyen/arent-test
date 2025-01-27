import labelColumn from "@data/labelColumn"
import { WrapLabels } from "./index.styles"

const Labels = () => {
    return (
        <WrapLabels>
            {labelColumn.map(({ id, name, desc }) => (
                <div className="column" key={id}>
                    <div className="name">{name}</div>
                    <hr />
                    <div className="desc">{desc}</div>
                </div>
            ))}
        </WrapLabels>
    )
}
export default Labels