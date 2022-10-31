import PropTypes from 'prop-types';
import {
    StatisticContainer,
    StatisticList,
  StatisticListItem,
  StatisticTitle,
  StatisticText,
    Statisticpercentage
} from './Statistics.styled'


export const Statistic = ({ title, stats }) => { 
    return (
      <StatisticContainer>
        {title && <StatisticTitle>{title}</StatisticTitle>}
        <StatisticList>
          {stats.map(stat => (
            <StatisticListItem key={stat.id}>
              <StatisticText>{stat.label}</StatisticText>
              <Statisticpercentage>{`${stat.percentage}%`}</Statisticpercentage>
            </StatisticListItem>
          ))}
        </StatisticList>
      </StatisticContainer>
    );
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}