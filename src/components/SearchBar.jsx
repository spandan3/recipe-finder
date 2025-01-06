import { useState } from "react"

export default function SearchBar(props) {
    const {searchRecipe, searchIngredients, loadingRecipe } = props

    const [recipe, setRecipe] = useState('')

    const handleSearchRecipe = () => {
        if (recipe.trim()) {
            searchRecipe(recipe);
        }
      };

    return (
        <>
            <div className="search-bar">
                <h3 className="search-line">Search by recipe name</h3>
                <div className="search-container">
                <input
                        type="text"
                        placeholder="Eg: Pasta..."
                        value={recipe}
                        onChange={(e) => { setRecipe(e.target.value) }}
                />
                <button onClick={handleSearchRecipe}>{loadingRecipe ? 'Loading...' : 'Search'}</button>
                </div>  
            </div> 
           
        </>
    )
}