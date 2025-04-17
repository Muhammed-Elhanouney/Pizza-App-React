import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizza = pizzaData;
  const pizazaNum = pizza.length;
  // console.log(pizazaNum);

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizazaNum > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizza.map((i) => (
              <Pizza key={i.name} res={i} />
            ))}
          </ul>
        </>
      ) : null}
      {/* <Pizza
        name="Pizza Spinaci"
        photo="/pizzas/spinaci.jpg"
        para="Tommato, mozrella, chesse"
        price="20"
      />
      <Pizza
        name="Pizza itali"
        photo="/pizzas/funghi.jpg"
        para="Tommato, chicken, chesse"
        price="140"
      /> */}
    </main>
  );
}
function Pizza({ res }) {
  return (
    <li className={`pizza ${res.soldOut? "sold-out" : ''}`}>
      <img src={res.photoName} alt={res.name} />
      <div>
        <h3>{res.name}</h3>
        <p>{res.ingredients}</p>
        <span>{res.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // console.log(hour >= close);

  // const res = new Date().toLocaleTimeString();

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          Sorry we're Closed in this Time, We're Happy to Welcome You Between{" "}
          {openHour}:00 and {closeHour}:00 :)
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  // console.log(props);

  return (
    <div className="order">
      <p>We're Open Until {closeHour}:00, Come Visit Us or Order Online</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
