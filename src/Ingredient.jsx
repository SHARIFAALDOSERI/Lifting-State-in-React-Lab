const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
  return (
    <li
      style={{
        backgroundColor: ingredient.color,
        padding: '0.5rem',
        margin: '0.25rem 0',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {ingredient.name}
      {onClick && (
        <button onClick={() => onClick(ingredient)}>{buttonLabel}</button>
      )}
    </li>
  );
};

export default Ingredient;
