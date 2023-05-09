import React from 'react';
import './Form.css';

export default class Form extends React.Component {
  render() {
    return(
      <form className="credit-card-form">
        <label htmlFor="number">Número do cartão:</label>
        <input type="text" id="number" name="number" placeholder="0000 0000 0000 0000" required />

        <label htmlFor="name">Nome do titular:</label>
        <input type="text" id="name" name="name" placeholder="Nome do Titular" required />

        <label htmlFor="expiry">Data de validade:</label>
        <input type="text" id="expiry" name="expiry" placeholder="MM/AA" required />

        <label htmlFor="name">CVC:</label>
        <input type="text" id="cvc" name="cvc" placeholder="123" required />

        <button type="submit">Cadastrar</button>
      </form>
    )
  }
}