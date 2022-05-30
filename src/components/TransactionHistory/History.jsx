import PropTypes from 'prop-types';
import { TrowHistory, Tdata } from './TransactionHistory.styled';

function History(props) {
  console.log(props);
  const { amount, currency, type } = props;
  return (
    <TrowHistory>
      <Tdata>{type}</Tdata>
      <Tdata>{amount}</Tdata>
      <Tdata>{currency}</Tdata>
    </TrowHistory>
  );
}

History.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default History;
