import Ingredient from '../Ingredient';

const BurgerStack = ({ ingredients, clearBurger }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      {ingredients.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        <ul>
          {ingredients.map((ingredient, idx) => (
            <Ingredient key={idx} ingredient={ingredient} />
          ))}
        </ul>
      )}
      <button onClick={clearBurger}>Clear Burger</button>
    </div>
  );
};

export default BurgerStack;
