import { MetricPropsType } from './Metric.type';
import { Skeleton } from '../../../components/Loader';
import { Card, Title, Value } from './Metric.styled';
import { separateNumberByComma } from '../../../helpers';

function Metric({ loading, name, value, prefix, suffix }: MetricPropsType) {
  if (loading) {
    return <Skeleton.Metric />;
  }

  const formattedValue = separateNumberByComma(value);

  return (
    <Card>
      <Title>{name}</Title>
      <Value>
        {prefix && prefix}
        {formattedValue}
        {suffix && suffix}
      </Value>
    </Card>
  );
}

export default Metric;
