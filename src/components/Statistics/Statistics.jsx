import PropTypes from 'prop-types';
import {Container, Title, StatList, StatItem} from "./Statistics.styled"

export function Statistics({ title, stats, color }) {
  return (
    <Container>
      <Title>{title}</Title>

      <StatList color={color}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
