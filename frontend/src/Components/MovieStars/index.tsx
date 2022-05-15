import { ReactComponent as EstrelaCheia } from "assets/img/star-yellow.svg";
import { ReactComponent as EstrelaVazia } from "assets/img/star-white.svg";
import { ReactComponent as EstrelaMetade } from "assets/img/star-yellow-white.svg";
import './styles.css';

type Props = { score: number; }

type EstrelaProps = { fill: number; }

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }


function Estrela({ fill } : EstrelaProps) {
    if (fill === 0) {
        return <EstrelaVazia />
    }

    else if (fill === 1) {
        return <EstrelaCheia />
    }

    else {
        return <EstrelaMetade />
    }
}


function MovieStars({ score } : Props) {

    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Estrela fill={fills[0]} />
            <Estrela fill={fills[1]} />
            <Estrela fill={fills[2]} />
            <Estrela fill={fills[3]} />
            <Estrela fill={fills[4]} />
        </div>
    );
}

export default MovieStars;