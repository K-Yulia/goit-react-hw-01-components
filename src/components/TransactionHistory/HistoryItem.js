import PropTypes from 'prop-types';
import { Item, TableRow } from './HistoryItem.styled';

export const HistoryItem = ({ item: { type, amount, currency } }) => {
  return (
    <TableRow>
      <Item>{type}</Item>
      <Item>{amount}</Item>
      <Item>{currency}</Item>
    </TableRow>
  );
};

HistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
