import { useRouteError } from 'react-router-dom';
import {
  ButtonGroup,
  Container,
  ErrorMessage,
  Section,
  Wrapper,
} from './Error.styled';
import { Button, Icon } from '../../components';
import { ArrowLeft, Home, RefreshCcw } from 'lucide-react';
import { LinkButton } from '../../components/Button';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  function handleGoToPrevPage() {
    window.history.back();
  }

  function handleRefreshPage() {
    location.reload();
  }

  return (
    <Container id="error-page">
      <Wrapper id="error-page">
        <Section>
          <h1>Oh no!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <ErrorMessage>{error.statusText || error.message}</ErrorMessage>
        </Section>
        <Section>
          <h3>Here's what you can do</h3>
          <ButtonGroup>
            <Button $variant="normal" onClick={handleGoToPrevPage}>
              <Icon icon={ArrowLeft} /> Go back
            </Button>
            <Button onClick={handleRefreshPage}>
              <Icon icon={RefreshCcw} /> Refresh page
            </Button>
            <LinkButton to="/">
              <Icon icon={Home} /> Go to Home
            </LinkButton>
            {/* <LinkButton to="mailto:grocerly.store@email.com">
              <Icon icon={Headset} /> Contact support
            </LinkButton> */}
          </ButtonGroup>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Error;
