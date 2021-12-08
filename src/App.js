import Todo from "./components/MenuItem";

function App() {
  return (
    <div>
      <h1>Commune Restaurant</h1>
      <Todo
        dishTitle="Chicken Pizza"
        dishDescription="BBQ Chicken Pizza with Fresh Mozzarella and Pickled Jalapeños Recipe"
      />
      <Todo
        dishTitle="Double Cheese Burger - Test"
        dishDescription="Juicy, big, loaded with toppings of your choice"
      />
      <Todo
        dishTitle="Quesadilla"
        dishDescription="Flour tortillas filled with Chihuahua cheese and pico de gallo"
      />
    </div>
  );
}

export default App;
