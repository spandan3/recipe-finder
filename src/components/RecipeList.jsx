import { useState } from "react"
import Modal from "./Modal"

export default function RecipeList(props) {

    const { current } = props
    const [description, setDescription] = useState(null)

    return (
        <>  {description && 
            (<Modal handleCloseModal={() => { setDescription(null) }}>
                <div>
                    <h3>Description</h3>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </Modal>)}
            {current ?
            (<div className="recipe-list">
                {current.map((recipe, recipeIndex) => {
                    return (
                        <div onClick={() => {
                            setDescription(recipe.summary)
                        }} key={recipeIndex} className="recipe-card">
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                    )
                })}
            </div>) :
            'No recipes available for given input'}
        </>
    )
}