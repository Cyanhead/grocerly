import {
  BannerImage,
  ButtonGroup,
  Container,
  Wrapper,
} from './NotFound.styled';
import not_found from '../../assets/images/page_not_found.svg';
import { Button, Icon, SectionHeading } from '../../components';
import { ArrowLeft, Home } from 'lucide-react';
import { LinkButton } from '../../components/Button';
import { NotFoundPropsType } from './NotFound.types';

function NotFound({ homeURL = '/', homeText = 'Home' }: NotFoundPropsType) {
  function handleGoToPrevPage() {
    window.history.back();
  }

  return (
    <Container data-testid="NotFound">
      <Wrapper>
        <SectionHeading>Page Not Found</SectionHeading>
        <ButtonGroup>
          <Button $variant="secondary" onClick={handleGoToPrevPage}>
            <Icon icon={ArrowLeft} /> Go back
          </Button>
          <LinkButton to={homeURL}>
            <Icon icon={Home} /> Go to {homeText}
          </LinkButton>
        </ButtonGroup>

        <BannerImage src={not_found} alt="404" />
      </Wrapper>
    </Container>
  );
}

export default NotFound;
