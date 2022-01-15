import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

// Capturar argumento passado na rota.
function Form() {
   const params = useParams();
   return (
      <FormCard movieId={`${params.movieId}`} />
   );
}

export default Form;