import {ReactComponent as Seta} from 'assets/img/seta.svg';
import './styles.css';

function Paginacao() {
    return (
        <div className="dsmovie-paginacao-container">
            <div className="dsmovie-paginacao-box">
                <button className="dsmovie-paginacao-button" disabled={true} >
                    <Seta />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-paginacao-button" disabled={false} >
                    <Seta className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Paginacao;