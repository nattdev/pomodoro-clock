import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SessionControls() {
    return (
        <div className="session-controls-container"><button id="start_stop"><FontAwesomeIcon icon="fa-solid fa-play" /><FontAwesomeIcon icon="fa-solid fa-pause" /></button><button id="reset"><FontAwesomeIcon icon="fa-solid fa-arrows-rotate" /></button></div>
    )
}

export default SessionControls;