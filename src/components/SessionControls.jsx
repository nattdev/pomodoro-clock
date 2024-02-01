import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SessionControls({ handleReset, handleStartStop }) {
    return (
        <div className="session-controls-container">
            <button id="start_stop" className='p-4 text-3xl' onClick={handleStartStop}>
                <FontAwesomeIcon icon="fa-solid fa-play" />
                <FontAwesomeIcon icon="fa-solid fa-pause" />
            </button>
            <button id="reset" className='p-4 text-3xl' onClick={handleReset}>
                <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
            </button>
        </div>
    )
}

export default SessionControls;