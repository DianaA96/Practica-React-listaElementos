import React from 'react';
import './Card.css';

function Card(props) {
    return(
        props.data.map((dato, indice) => (
          <React.Fragment>
              <section id='tarjeta' key={dato.name}>
                  <div className="TextoTarjeta">
                      <h2 id="tipoDeTamalito">{dato.name}</h2>
                      <p id="precioDelTamalito">{dato.price}</p>
                  </div>
                  <div id={dato.details}>
                      <p>{dato.details}</p>
                  </div>
              </section>
              <br/>
          </React.Fragment>
        ))
      );
};

export default Card;