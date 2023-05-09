import './App.css'
// import CreditCard from './components/CreditCard';
import Form from './components/Form';

function App() {
  return (
    <div className='grid'>
      <div className='left'>
          <div className='wrapper'>
            Formulário
            <Form />
          </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          Cartão de Crédito
          {/* <CreditCard /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
