import { Wrap } from "./index.styles"

const BtnMoveToEntry = ({ id, title, desc, url }) => {
    const _handleClick = () => {
        const entry = document.querySelector(`#${id}`)
        if(!entry) return;
        entry.scrollIntoView()
    }

    return (
        <Wrap onClick={_handleClick}>
            <img src={url} alt="entry" loading="lazy" />
            <div className="wrap-content">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
            </div>
        </Wrap>
    )
}
export default BtnMoveToEntry