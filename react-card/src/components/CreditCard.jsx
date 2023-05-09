import React from "react";
import './CreditCard.css';

export default class CreditCard extends React.Component {
  render() {
    const { cardInfo: { name, cvc, expiry, number }, handleChange } = this.props;
    return (
      <div className="credit-card">
        <div className="credit-card__logo">Logo</div>
        <div className="credit-card__number">{ number || '0000 0000 0000 0000' }</div>
        <div className="credit-card__info">
          <div className="credit-card__holder">{ name || 'NOME SOBRENOME' }</div>
          <div className="credit-card__expiry">{ expiry || 'MM/YY' }</div>
        </div>
      </div>
    );
  }
}