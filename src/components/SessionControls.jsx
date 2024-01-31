import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SessionControls({ handleReset, handleStartStop }) {
    return (
        <div className="session-controls-container">
            <button id="start_stop" onClick={handleStartStop}>
                <FontAwesomeIcon icon="fa-solid fa-play" />
                <FontAwesomeIcon icon="fa-solid fa-pause" />
            </button>
            <button id="reset" onClick={handleReset}>
                <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
            </button>
        </div>
    )
}

export default SessionControls;