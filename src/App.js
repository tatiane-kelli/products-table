import React, { Component } from 'react';
import './App.css';
import api from './api';

import { Button } from './components/Button';

class App extends Component {
  state = {
    products: [],
  }

  async componentDidMount(){
    const response = await api.get('products');

    this.setState({ products: response.data });
  }
  
  render() {

    const { products } = this.state;

    return (
      <div className="content">
        <h1>Bem-vindo!</h1>

        {products.map(products => 
          <table>
            <tr>
              <td>Nome</td>
              <td>Preço</td>
              <td>Estoque</td>
            </tr>
            <tr>
              <td>{products.show.name} 
              <span>
                <Button onClick="#"><img src="assets/images/edit.svg" alt="Editar informações"/></Button>
                <Button onClick="#"><img src="assets/images/trash.svg" alt="Deletar produto"/></Button>
              </span>
              </td> 
              <td>{products.show.price}</td>
              <td>{products.show.amount}</td>
            </tr>
          </table>
        )}
      </div>
      
    );
  };
};

export default App;
