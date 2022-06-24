import SelectPatient from './SelectPatient.js';

function CurrentP({ searchFor, patients, setPatient }) {

  return (
    <div className="currentP">
      {patients.filter(patient => {
        if (searchFor.length > 0 && (patient.id.toString().includes(searchFor) || patient.name.toLowerCase().includes(searchFor))) {
          return patient;
        } else {
          return null;
        }
      }).map(patient => {
        return  <SelectPatient
                  key={patient.id}
                  patient={patient}
                  setPatient={setPatient}
                />
      })}
    </div>
  );
}

export default CurrentP;
