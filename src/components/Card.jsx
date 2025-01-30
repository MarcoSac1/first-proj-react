function Card({ title, description, imgUrl, isVisited, isAdmin }) {
    return (
        <div className="card">
            {/* isVisited= */}
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{isVisited ?  "citta gia visitata" : "citta non ancora visitata!"}</p>
            <p>{isAdmin ? (<><button>Modifica Card</button> <button>Elimina Card</button> <button>Dettagli</button> </>) :''}</p>
            <img src={imgUrl} alt={title} />
        </div>
    );
}

export default Card;

