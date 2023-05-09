import React from 'react';
import './Form.css';

export default class Form extends React.Component {

  render() {
    const { cardInfo: { name, cvc, expiry, number }, handleChange, validateForm } = this.props;

    return(
      <form className="credit-card-form">
        <label htmlFor="number">Número do cartão:</label>
        <input onChange={ handleChange } value={ number } type="tel" id="number" name="number" placeholder="0000 0000 0000 0000" required />

        <label htmlFor="name">Nome do titular:</label>
        <input onChange={ handleChange } value={ name } type="text" id="name" name="name" placeholder="Nome do Titular" required />

        <label htmlFor="expiry">Data de validade:</label>
        <input onChange={ handleChange } value={ expiry } type="text" id="expiry" name="expiry" placeholder="MM/AA" required />

        <label htmlFor="cvc">CVC:</label>
        <input onChange={ handleChange } value={ cvc } type="tel" id="cvc" name="cvc" placeholder="123" required />

        <button type="submit" disabled={ !validateForm() }>Cadastrar</button>
      </form>
    )
  }
}
