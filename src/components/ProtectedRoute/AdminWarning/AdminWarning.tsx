import { AdminWarningPropsType } from './AdminWarning.type';
import Loader from '../../Loader';
import { Container, Heading, Wrapper } from './AdminWarning.styled';
import { useEffect, useState } from 'react';

const DELAY = 3;

function AdminWarning({ setShouldProceed }: AdminWarningPropsType) {
  const [count, setCount] = useState(DELAY);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShouldProceed(true);
    }, DELAY * 1000);

    return () => window.clearTimeout(timeoutId);
  }, [setShouldProceed]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      setShouldProceed(true);
    }
  }, [count, setShouldProceed]);

  return (
    <Container data-testid="AdminWarning">
      <Wrapper>
        <Heading>
          You do not have access to the admin panel. Redirecting in {count}...
        </Heading>
        <Loader />
      </Wrapper>
    </Container>
  );
}

export default AdminWarning;
