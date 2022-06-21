import { useState, useEffect } from 'react';
import fspt from './Images/fspt.jpeg';
import './CSS/App.css';
import Modal from './Modals/Modal.jsx';

function App() {
  let [showModal, setModal] = useState(false);
  // const [view, setView] = useState({ name: "Product", viewProps: {} });

  // useEffect(() => {
  //   renderView();
  // }, [view]);

  // const changeView = (name, someProps = {}) => {
  //   return (moreProps = {}) => {
  //     setView({ name, viewProps: { ...someProps, ...moreProps } });
  //   };
  // };

  // const renderView = () => {
  //   switch (view.name) {
  //     case "PT":
  //       return <PT />
  //     case "Aide":
  //       return <
  //   };
  // };

  if (showModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={fspt} className="logo" alt="Family and Sports Physical Therapy logo" />
        <p className="header-text">
          Family and Sports PT
        </p>
        <div className="btns">
          <div className="PT" onClick={() => setModal(true)}>PT</div>
          <div className="Aide" onClick={() => setModal(true)}>Asst/Aide</div>
        </div>
        <Modal
          onClose={() => setModal(false)}
          showModal={showModal}
        />
      </header>
    </div>
  );
}

export default App;
