import axios from "axios";
import MovieCard from "Components/MovieCard";
import Paginacao from "Components/Paginacao";
import { BASE_URL } from "utils/requests";

function ListaDeFilmes() {

    //FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=1`).then(response => {console.log(response.data)});


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>

                 
                </div>
            </div>
            <Paginacao />
        </>
    );
}

export default ListaDeFilmes;