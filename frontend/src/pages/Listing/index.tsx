import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "Utils/requests";

function Listing() {

   // const [estado interno, função que altera esse estado] 
   const [pageNumber, setPageNumber] = useState(0);
   const [page, setPage] = useState<MoviePage>({
      content: [],
      last: true,
      totalPages: 0,
      totalElements: 0,
      size: 12,
      number: 0,
      first: true,
      numberOfElements: 0,
      empty: true
   });

   useEffect(() => {
      // Parâmetro de ordernação (sort=id): Isso garante que a busca vai ser ordenada por id (os filmes virão na mesma ordem). Assim como o 'id', pode-se fazer o mesmo com o title.
      axios.get(`${BASE_URL}/movies/?size=12&page=${pageNumber}&sort=id`)
         .then(response => {
            const data = response.data as MoviePage;
            setPage(data);
         });
   }, [pageNumber]);


   // FORMA ERRADA (TESTE)
   // axios.get(`${BASE_URL}/movies/2?size=12&page=0`)
   //    .then(response => {
   //       // .data: corpo da resposta 
   //       console.log(response.data);
   //       setPageNumber(data.number);
   //    });

   return (
      <>
         <Pagination />

         <div className="container">
            <div className="row">

               {/* RENDERIZAÇÃO DINÂMICA DE COLEÇÃO
                  1. map permite executar cada coisa com cada item no array (no filme) 
                  2. NOTA: em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo key. ex(key={movie.id}).
               */}
               {page.content.map(movie => (
                  <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                     <MovieCard movie={movie} />
                  </div>
               )
               )}


            </div>
         </div>

      </>
   );
}

export default Listing;