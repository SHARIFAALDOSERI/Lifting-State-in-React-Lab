const BurgerStack = ({ ingredients, clearBurger }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <li
            key={idx}
            style={{
              backgroundColor: ingredient.color,
              padding: '0.5rem',
              margin: '0.25rem',
              listStyle: 'none',
            }}
          >
            {ingredient.name}
          </li>
        ))}
      </ul>
      <button onClick={clearBurger}>Clear Burger</button>
    </div>
  );
};

export default BurgerStack;
