//ControlPanel kan nu bruge onIncrement callback til at modify counter value
const ControlPanel = ({ onIncrement }) => {
    return <button onClick={onIncrement}>Increment</button>;
  };
export default ControlPanel;  