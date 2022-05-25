import PropTypes from 'prop-types';
import { StatisticList, Item, Label, Percentage } from './Statistic.styled';

function Statistic({ statistic }) {
  console.log(statistic);
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
      precentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistic;
