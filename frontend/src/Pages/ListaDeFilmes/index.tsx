import axios from "axios";
import MovieCard from "Components/MovieCard";
import Paginacao from "Components/Paginacao";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function ListaDeFilmes() {

    const [pageNumber, setPageNumber] = useState(0);


    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`).then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number)});
    }, []);

    return (
        <>
        <p>{pageNumber}</p>





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
            <p>{pageNumber}</p>
            <Paginacao />
        </>
    );
}

export default ListaDeFilmes;