

function SelectPatient({ patient, setPatient }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('setPatient to :', patient)
    setPatient(patient);
  }

  return (
    <div className="p-container" onClick={handleClick}>
      <div className="p-id">ID: {patient.id}</div>
      <div className="p-name">{patient.name}</div>
    </div>
  );
}

export default SelectPatient;
