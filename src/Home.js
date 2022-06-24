import { useState } from 'react';
import fspt from './Images/fspt.jpeg';
import './CSS/App.css';
import Modal from './Modals/Modal.jsx';

function Home({setEmployee, setAccess}) {
  let [showModal, setModal] = useState(false);

  if (showModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={fspt}
          className="logo"
          alt="Family and Sports Physical Therapy logo"
        />
        <p className="header-text">
          Family and Sports PT
        </p>
        <div className="btns">
          <div className="PT" onClick={() => setModal(true)}>PT</div>
          <div className="Aide" onClick={() => setModal(true)}>Asst/Aide</div>
        </div>
        <Modal
          onClose={() => setModal(false)}
          setAccess={setAccess}
          setEmployee={setEmployee}
          showModal={showModal}
        />
      </header>
    </div>
  );
}

export default Home;
