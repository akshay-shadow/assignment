export default function StarRating({rating}){

    return(
        <>
            <div className="starBox">
                <div className="backStars"></div>
                <div className="frontStars" style={{ width: `${(rating * 20)}%` }}></div>
            </div>
            <p><b>{rating}</b></p>
        </>
    )
}