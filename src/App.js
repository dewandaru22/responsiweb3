import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
    <div className="container">
    <h1>Prakiraan Cuaca Yogyakarta</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Datetime</th>
          <th scope="col">Temp</th>
          <th scope="col">Temp min</th>
          <th scope="col">Temp Max</th>
          <th scope="col">Weather</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
 </table>
</div>
    </div>
  );
}

export default App;
