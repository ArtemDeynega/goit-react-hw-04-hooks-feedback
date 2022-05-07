import { useState } from 'react';

import { NoFedback } from '.';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';

import { GlobalStyle } from 'GlobalStyled/GlobalStyled';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [state, setState] = useState(initialState);

  const handleOnClick = name => {
    setState(state => ({
      ...state,
      [name]: state[name] + 1,
    }));
  };
  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = state;

    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };
  const options = Object.keys(state);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const statistics = Object.entries(state);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleOnClick} />
      </Section>
      {total ? (
        <Section title="Statistics">
          <Statistics
            statistics={statistics}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <NoFedback>No feedback given</NoFedback>
        </Section>
      )}
      <GlobalStyle />
    </>
  );
};
export default App;
