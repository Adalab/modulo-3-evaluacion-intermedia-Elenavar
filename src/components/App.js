import '../styles/App.scss';
import adalabers from '../data/adalabers.json';
// import { useState } from 'react';
// import callToApi from '../services/api';

function App() {
  const table = adalabers.map((adalaber) => {
    return (
      <tbody>
        <tr>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      <header className="header">
        <h1>Adalabers</h1>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        {table}
      </table>
    </div>
  );
}

export default App;
