function Card({ title, description, imgUrl }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imgUrl} alt={title} />
        </div>
    );
}

export default Card;

