import Ingredient from '../Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            ingredient={ingredient}
            onClick={addToBurger}
            buttonLabel="Add"
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
