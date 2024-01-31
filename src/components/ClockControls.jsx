import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ClockControls({ breakLength, sessionLength, handleBreakDecrement, handleBreakIncrement, handleSessionDecrement, handleSessionIncrement }) {
    return (
        <div className="clock-controls-container">
            <div className="break-container">
                <p id="break-label">Break Length</p>
                <button id="break-decrement" onClick={handleBreakDecrement}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                </button>
                <p id="break-length">{breakLength}</p>
                <button id="break-increment" onClick={handleBreakIncrement}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
                </button>
            </div>
            <div className="session-container">
                <p id="session-label">Session Length</p>
                <button id="session-decrement" onClick={handleSessionDecrement}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                </button>
                <p id="session-length">{sessionLength}</p>
                <button id="session-increment" onClick={handleSessionIncrement}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
                </button>
            </div>
        </div>
    )
};

export default ClockControls;