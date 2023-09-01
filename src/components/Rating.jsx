import { BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"
export default function Rating({rating}) {
    const ratingArray = Array.from({length: 5}, (_, index) => {
        return <span key={index}>
            { rating >= index + 1 ? <BsStarFill /> : rating >= index + 0.5 ? <BsStarHalf /> : <BsStar /> }
        </span> 
        
    })
    return <div className="rating">
        {ratingArray}
    </div>
}