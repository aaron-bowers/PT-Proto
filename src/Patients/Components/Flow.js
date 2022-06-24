
function FlowChart({ photo, setFlow }) {

  return (
    <div className="flow-chart">
      <img
        src={photo}
        className="f-photo"
        alt={`flow chart pic`}
      />
      <button
        className="back"
        onClick={() => setFlow(false)}
        >Back
      </button>
    </div>
  );
}

export default FlowChart;
