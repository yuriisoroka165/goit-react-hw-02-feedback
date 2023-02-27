import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.feedback__buttons_container}>
            {options.map((option, index) => (
                <button
                    key={index}
                    className={css.feedback__button}
                    onClick={onLeaveFeedback}
                    name={option}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
