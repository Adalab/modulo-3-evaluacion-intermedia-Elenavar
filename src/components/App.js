import '../styles/App.scss';
import adalabers from '../data/adalabers.json';
import { useState } from 'react';
// import callToApi from '../services/api';

function App() {
  const [data, setData] = useState(adalabers);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });
  const [searchCounselor, setSearchCounselor] = useState('');
  const [searchName, setSearchName] = useState('');
  const table = data
    .filter(
      (adalaber) =>
        adalaber.counselor.includes(searchCounselor) &&
        adalaber.name
          .toLocaleLowerCase()
          .includes(searchName.toLocaleLowerCase())
    )
    .map((adalaber, index) => {
      return (
        <tr key={index}>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
        </tr>
      );
    });

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleNewAdalaber = (ev) => {
    setNewAdalaber({ ...newAdalaber, [ev.target.name]: ev.target.value });
  };

  const handleAdd = () => {
    setData([...data, newAdalaber]);
    console.log(data);
    setNewAdalaber({
      name: '',
      counselor: '',
      speciality: '',
    });
  };

  const filterForm = () => {
    return (
      <>
        <div className="searchName">
          <label htmlFor="searchName">Nombre:</label>
          <input
            id="searchName"
            type="text"
            placeholder="Ej: MariCarmen"
            onChange={handleFilterName}
            value={searchName}
          ></input>
        </div>

        <div className="searchCounselor">
          <label htmlFor="filter">Escoge una Tutora:</label>
          <select
            id="filter"
            onChange={handleFilterCounselor}
            value={searchCounselor}
          >
            <option>Escoge una opción</option>
            <option>Yanelis</option>
            <option>Dayana</option>
            <option>Iván</option>
            <option>Miguel</option>
          </select>
        </div>
      </>
    );
  };

  const handleFilterCounselor = (ev) => {
    setSearchCounselor(ev.target.value);
  };

  const handleFilterName = (ev) => {
    setSearchName(ev.target.value);
  };

  const form = () => {
    return (
      <>
        <h2>Añadir una Adalaber</h2>

        <div className="name">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleNewAdalaber}
            value={newAdalaber.name}
          ></input>
        </div>

        <div className="counselor">
          <label htmlFor="counselor">Tutora:</label>
          <input
            type="text"
            name="counselor"
            id="counselor"
            onChange={handleNewAdalaber}
            value={newAdalaber.counselor}
          ></input>
        </div>

        <div className="speciality">
          <label htmlFor="speciality">Especialidad:</label>
          <input
            type="text"
            name="speciality"
            id="speciality"
            onChange={handleNewAdalaber}
            value={newAdalaber.speciality}
          ></input>
        </div>

        <button className="button" onClick={handleAdd}>
          Añadir una nueva Adalaber
        </button>
      </>
    );
  };

  return (
    <div>
      <header className="header">
        <h1>Adalabers</h1>
      </header>
      <form onSubmit={handleSubmit}>{filterForm()}</form>
      <table className="table">
        <thead key="001">
          <tr key="002">
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
            <th>Redes Sociales</th>
          </tr>
        </thead>
        <tbody key="004">{table}</tbody>
      </table>
      <form className="form" onSubmit={handleSubmit}>
        {form()}
      </form>
      ;
    </div>
  );
}

export default App;
