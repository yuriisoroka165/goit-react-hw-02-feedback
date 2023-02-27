import { Component } from "react";
import css from "./Feedback.module.css";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    goodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    neutralFeedback = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    badFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    render() {
        return (
            <div className={css.feedback__container}>
                <div className={css.feedback__buttons_container}>
                    <button
                        className={css.feedback__button}
                        onClick={this.goodFeedback}
                    >
                        Good
                    </button>
                    <button
                        className={css.feedback__button}
                        onClick={this.neutralFeedback}
                    >
                        Neutral
                    </button>
                    <button
                        className={css.feedback__button}
                        onClick={this.badFeedback}
                    >
                        Bad
                    </button>
                </div>
                
            </div>
        );
    }
}

export default Feedback;