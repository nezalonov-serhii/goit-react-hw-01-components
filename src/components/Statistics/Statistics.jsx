import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsSection,
  StatisticsTitel,
} from 'components/Statistics/Statistics.styled';
import { StatisticsItem } from 'components/Statistics/StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticsTitel className="title">{title}</StatisticsTitel>

      <StatisticsList className="stat-list">
        {<StatisticsItem stats={stats} />}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
