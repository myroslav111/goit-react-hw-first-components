import PropTypes from 'prop-types';
import { SectionCommon, Title } from './Statistic.styled';

function SectionStatistic(props) {
  const { title, children } = props;
  return (
    <SectionCommon>
      {title && <Title>{title}</Title>}
      {children}
    </SectionCommon>
  );
}

SectionStatistic.propTypes = {
  title: PropTypes.string,
};

export default SectionStatistic;
