import PropTypes from 'prop-types';
import { StatisticList, Item, Label, Percentage } from './Statistic.styled';

function Statistic({ statistic }) {
  return (
    <StatisticList>
      {statistic.map(prop => (
        <Item key={prop.id}>
          <Label>{prop.label}</Label>
          <Percentage>{prop.percentage}%</Percentage>
        </Item>
      ))}
    </StatisticList>
  );
}

Statistic.propTypes = {
  statistic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistic;
