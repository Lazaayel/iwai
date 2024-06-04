import './StepButton.css';

export default function StepButton({handleClick}) {



    return (
        <button className="StepButton" onClick={handleClick}>Powrót</button>
    );
}