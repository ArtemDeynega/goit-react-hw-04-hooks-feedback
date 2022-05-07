import PropTypes from 'prop-types';

import { Stats } from '.';

export const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <>
      <ul>
        {statistics.map(([name, value], index) => (
          <Stats key={index}>
            {name} : {value}
          </Stats>
        ))}
        <Stats>Total: {total}</Stats>
        <Stats>Positive feedback: {positivePercentage}%</Stats>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
