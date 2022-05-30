import PropTypes from 'prop-types';
import History from './History';
import {
  TableContainer,
  Thead,
  Trow,
  Tcells,
  Ttitle,
} from './TransactionHistory.styled';

function TransactionHistory({ history }) {
  console.log(history);
  return (
    <TableContainer>
      <Thead>
        <Trow>
          <Tcells>
            <Ttitle>Type</Ttitle>
          </Tcells>
          <Tcells>
            <Ttitle>Amount</Ttitle>
          </Tcells>
          <Tcells>
            <Ttitle>Currency</Ttitle>
          </Tcells>
        </Trow>
      </Thead>
      <tbody>
        {history.map(item => (
          <History
            key={item.id}
            amount={item.amount}
            currency={item.currency}
            type={item.type}
          />
        ))}
      </tbody>
    </TableContainer>
  );
}

TransactionHistory.propTypes = {
  key: PropTypes.string.isRequired,
};

export default TransactionHistory;
