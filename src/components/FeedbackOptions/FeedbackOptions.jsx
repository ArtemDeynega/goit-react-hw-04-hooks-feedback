import PropTypes from 'prop-types';
import shortid from 'shortid';

import { Button } from '.';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    const buttonId = shortid.generate();
    return (
      <Button
        key={buttonId}
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </Button>
    );
  });
};

FeedbackOptions.propTypes = {
  option: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};
