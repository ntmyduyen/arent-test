import { WrapColumnItem } from "./index.styles"

const ColumnItem = ({ url, dateTime, title, tags }) => {
    return (
        <WrapColumnItem url={url}>
            <div className="wrap-img">
                <div className="date-time">{dateTime}</div>
            </div>
            <div className="title" title={title}>{title}</div>
            <div className="tags">
                {
                    tags.map((tag, index) => (
                        <div className="tag" key={index}>#{tag}</div>
                    ))
                }
            </div>
        </WrapColumnItem>
    )
}
export default ColumnItem