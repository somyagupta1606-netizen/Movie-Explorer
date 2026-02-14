import Home from "./pages/Home"
import Error from "./pages/Error"
import MovieDetails from "./pages/MovieDetails"
import Movies from "./pages/Movies"
import Favourite from "./pages/Favourite"
import {BrowserRouter,Routes,Route} from "react-router-dom"


const App= ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movie-details" element={<MovieDetails/>}/>
      <Route path="/fav" element={<Favourite/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
