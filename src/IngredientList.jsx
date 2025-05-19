const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <li
            key={idx}
            onClick={() => addToBurger(ingredient)}
            style={{
              backgroundColor: ingredient.color,
              padding: '0.5rem',
              margin: '0.25rem',
              cursor: 'pointer',
              listStyle: 'none',
            }}
          >
            {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
