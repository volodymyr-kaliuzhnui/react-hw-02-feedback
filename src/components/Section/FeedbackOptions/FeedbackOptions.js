import React from "react";

function FeedbackOptions({goodFeedback, neutralFeedback, badFeedback}) {
    return (
        <div className='buttons'>
            <button type={"button"} onClick={goodFeedback}>Good</button>
            <button type={"button"} onClick={neutralFeedback}>Neutral</button>
            <button type={"button"} onClick={badFeedback}>Bad</button>
        </div>

    )
}

export default FeedbackOptions