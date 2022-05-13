import { Link } from "react-router-dom";
import MovieScore from 'Components/MovieScore';
import './styles.css';

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iM1hlVGZ5Qwn3gO6ewTszY7OrLY.jpg",
        title: "Doutor Estranho",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />


                <Link to={`/formulario/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    );
}

export default MovieCard;