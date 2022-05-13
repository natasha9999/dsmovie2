import { Link } from "react-router-dom";
import './styles.css';

function Formulario() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w500_and_h282_face/hN3LMCeZDSAsayPwdqob7mjMFOV.jpg",
        title: "A Anatomia de Grey",
        count: 2,
        score: 4.5
    };

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3 className="dsmovie-card-title">{movie.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe o seu e-mail</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe a sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option value="">2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form>
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>

            </div>
        </div>
    );
}

export default Formulario;