import { ReactComponent as EstrelaCheia } from "assets/img/star-yellow.svg";
import { ReactComponent as EstrelaVazia } from "assets/img/star-white.svg";
import { ReactComponent as EstrelaMetade } from "assets/img/star-yellow-white.svg";
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <EstrelaCheia />
            <EstrelaCheia />
            <EstrelaCheia />
            <EstrelaCheia />
            <EstrelaMetade />
        </div>
    );
}

export default MovieStars;