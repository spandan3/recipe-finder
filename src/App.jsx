import { useState } from "react"
import Header from "./components/Header"
import RecipeList from "./components/RecipeList"
import SearchBar from "./components/SearchBar"

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [loadingRecipe, setLoadingRecipe] = useState(false)
  const [current, setCurrent] = useState([])

  async function searchRecipe(query) {
    if (loadingRecipe) { return }

    try {
      setLoadingRecipe(true)
      const Url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&number=10&apiKey=${API_KEY}`
      const res = await fetch(Url)
      const data = await res.json()
      setCurrent(data.results)
      console.log(data)
    } catch(err) {
      console.log(err.message)
    } finally {
      setLoadingRecipe(false)
    }
  }

  
  return (
    <>
      <Header />
      <main>
        <SearchBar 
          loadingRecipe={loadingRecipe}
          searchRecipe={searchRecipe}/>
        <RecipeList current={current}/>
      </main>
      <footer>
        <p><span className="text-gradient">Recipe Finder</span> was made by <a href="https://github.com/spandan3">Spandan</a> & styled using the <a href="https://www.fantacss.smoljames.com"> FantaCSS</a> design library.</p>
      </footer>
    </>
  )
}

export default App
