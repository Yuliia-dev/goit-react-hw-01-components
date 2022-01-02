import PropTypes from 'prop-types';
import {Container, Subtitle, SubtitleBox, SubtitleText, TransactionBox, TransactionText} from "./TransactionHistory.styled"

export function TransactionHistory({ items }) {
  return (
    <Container>
      <Subtitle>
        <SubtitleBox>
          <SubtitleText>Type</SubtitleText>
          <SubtitleText>Amount</SubtitleText>
          <SubtitleText>Currency</SubtitleText>
        </SubtitleBox>
      </Subtitle>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionBox key={id}>
              <TransactionText>{type}</TransactionText>
              <TransactionText>{amount}</TransactionText>
              <TransactionText>{currency}</TransactionText>
            </TransactionBox>
          );
        })}
      </tbody>
    </Container>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
