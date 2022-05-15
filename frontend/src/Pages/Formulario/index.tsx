import FormularioCard from "Components/FormularioCard";
import { useParams } from "react-router-dom";


function Formulario() {

    const params = useParams();

    return (
        <FormularioCard movieId={`${params.movieId}`}/>
    );
}

export default Formulario;