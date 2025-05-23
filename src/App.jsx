import './App.css';
import { useState } from 'react';
import IngredientList from './IngredientList';
import BurgerStack from './BurgerStack';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [burgerStack, setBurgerStack] = useState([]);

  const addToBurger = (ingredient) => {
    setBurgerStack([ingredient, ...burgerStack]);
  };

  const clearBurger = () => {
    setBurgerStack([]);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section style={{ display: 'flex', gap: '2rem' }}>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        <BurgerStack ingredients={burgerStack} clearBurger={clearBurger} />
      </section>
    </main>
  );
};

export default App;
