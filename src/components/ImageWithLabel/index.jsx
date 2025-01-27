import IWL from "./index.styles"

const ImageWithLabel = ({ url, name, date }) => {
    return (
        <IWL.Wrap url={url}>
            <div className="date">{`${date}.${name}`}</div>
        </IWL.Wrap>
    )
}
export default ImageWithLabel