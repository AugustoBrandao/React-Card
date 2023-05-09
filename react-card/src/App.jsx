import './App.css'
import React from 'react';
import CreditCard from './components/CreditCard';
import Form from './components/Form';

export default class App extends React.Component {
  state = {
    cardInfo: {
      name: '',
      cvc: '',
      expiry: '',
      number: ''
    }
  }

  validateForm = () => {
    const { cardInfo: { cvc, name } } = this.state;
    const cvcSize = cvc.length === 3;

    // valida nome e sobrenome
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const nameValid = nameRegex.test(name);

    return cvcSize && nameValid;
  };

  handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    const valueField = type === 'checkbox' ? checked : value;

    this.setState((prevState) => ({
      cardInfo: {
        ...prevState.cardInfo,
        [name]: valueField
      }
    }));
  }

  render() {
    const { cardInfo } = this.state;

    return (
      <div className='grid'>
        <div className='left'>
            <div className='wrapper'>
              Formulário
              <Form cardInfo={ cardInfo } handleChange= { this.handleChange } validateForm={ this.validateForm }/>
            </div>
        </div>
        <div className='right'>
          <div className='wrapper'>
            Cartão de Crédito
            <CreditCard cardInfo={ cardInfo } />
          </div>
        </div>
      </div>
    );
  }
}
