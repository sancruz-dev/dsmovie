import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'Utils/requests';
import { validateEmail } from 'Utils/validate';
import './styles.css';

type Props = {
   movieId: string;
}

// RESPONSÃVEL POR DENDERIZAR O DOCUMENTO.
function FormCard({ movieId }: Props) {

   const navigate = useNavigate();

   // Buscar do backend um filme a partir de seu id
   const [movie, setMovie] = useState<Movie>();

   // useEffect para realizar a requisição.
   // O movieId que chegou de argumento pro Props, TEM que ser colocado como dependência desse useEffect.
   useEffect(() => {
      axios.get(`${BASE_URL}/movies/${movieId}`)
         .then(response => {
            setMovie(response.data);
         })

   }, [movieId]);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const email = (event.target as any).email.value;
      const score = (event.target as any).score.value;

      if (!validateEmail(email)) {
         return;
      }

      const config: AxiosRequestConfig = {
         baseURL: BASE_URL,
         method: 'PUT',
         url: '/scores',
         data: {
            email: email,
            movieId: movieId,
            score: score
         }
      }

      axios(config).then(response => {
         // console.log(response.data);
         navigate("/");
      })
   }

   return (
      <div className="dsmovie-form-container">
         {/* O PONTO DE INTERROGAÇÃO (?) é um operador opcional, ou seja, "se o objeto existir, ele pega seu valor, se não será nulo" */}
         <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />

         <div className="dsmovie-card-bottom-container">
            <h3>{movie?.title}</h3>

            <form className="dsmovie-form" onSubmit={handleSubmit}>
               <div className="form-group dsmovie-form-group">
                  <label htmlFor="email">Informe seu email</label>
                  <input type="email" className="form-control" id="email" />
               </div>

               <div className="form-group dsmovie-form-group">
                  <label htmlFor="score">Informe sua avaliação</label>
                  <select className="form-control" id="score">
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                  </select>
               </div>

               <div className="dsmovie-form-btn-container">
                  <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
               </div>
            </form >

            <Link to="/">
               <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
            </Link>
         </div >
      </div >
   );
}

export default FormCard;