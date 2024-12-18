import { Minus, Plus } from 'lucide-react';
import { IconButton } from '..';
import { Count, Wrapper } from './Counter.styled';
import { CounterPropsType } from './Counter.type';

function Counter({ count, setCount }: CounterPropsType) {
  return (
    <Wrapper>
      <IconButton
        icon={Minus}
        onClick={() => setCount(count - 1)}
        disabled={count <= 1}
      />
      <Count>{count}</Count>
      <IconButton
        icon={Plus}
        onClick={() => setCount(count + 1)}
        disabled={count >= 10}
      />
    </Wrapper>
  );
}

export default Counter;
