import React from 'react';
import "./App.css";
import Card from './Card'


function App() {
  let result = {
    status: 200,
    statusText: "Success",
    data: [
      { details: "dulce", name: "Tamal de dulce", price: "$12.00" },
      { details: "picante", name: "Tamal verde", price: "$10.00" },
      { details: "picante", name: "Tamal rojo", price: "$10.50" },
      { details: "picante", name: "Tamal de rajas", price: "$11.00" }
    ]
  };

  return (
    <React.Fragment>
      <header>
        <h1>Tamalitos</h1>
      </header>

      <section className="losTamalitos">
        <Card{...result}/>
      </section>
    </React.Fragment>
    );
}

export default App;
