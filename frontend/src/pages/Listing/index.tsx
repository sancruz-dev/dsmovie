import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "Utils/requests";

function Listing() {

   // FORMA ERRADA (TESTE)
   axios.get(`${BASE_URL}/movies/2?size=12&page=0`)
      .then(response => {
         // .data: corpo da resposta 
         console.log(response.data);
      });

   return (
      <>
         <Pagination />

         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard />
               </div>
            </div>
         </div>

      </>
   );
}

export default Listing;