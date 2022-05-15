import { ReactComponent as Seta } from 'assets/img/seta.svg';
import { MoviePage } from 'types/movie';
import './styles.css';


type Props = {
    page: MoviePage;
    onChange: Function;
}

function Paginacao({ page, onChange }: Props) {
    return (
        <div className="dsmovie-paginacao-container">
            <div className="dsmovie-paginacao-box">
                <button className="dsmovie-paginacao-button"
                    disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <Seta />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dsmovie-paginacao-button"
                    disabled={page.last} onClick={() => onChange(page.number + 1)} >
                    <Seta className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Paginacao;