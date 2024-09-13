import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import { Container, Grid, Page, Title, TitleCell } from './Admin.styled';
import NavBar from './NavBar';
import { TextLink } from '../../components';

function Admin() {
  const { pathname, state } = useLocation();

  function getPageTitle(path: string, routerState: { title: string }) {
    if (path === '/admin') {
      return 'Dashboard';
    }

    const mainRoute = path.split('/')[2];
    const cleaned = mainRoute.replace(/-/g, ' ');

    // if router state is null, return product id instead of product name
    if (path.split('/').length > 3 && !routerState) {
      return `${cleaned} / ${path.split('/')[3]}`;
    }

    // e.g. if path is /admin/products
    if (path.split('/').length === 3) {
      return cleaned;
    }

    return `${cleaned} / ${routerState.title}`;
  }

  const title = getPageTitle(pathname, state);

  return (
    <Container data-testid="Admin">
      <SideBar />
      <Page>
        <NavBar />
        <Grid as="section">
          <TitleCell $span={4}>
            <PageTitle title={title} />
          </TitleCell>
          <Outlet />
        </Grid>
      </Page>
    </Container>
  );
}

export default Admin;

function PageTitle({ title }: { title: string }) {
  const path = title.split('/');
  if (path.length === 2) {
    return (
      <Title>
        <TextLink to="/admin/products" $isActive>
          {path[0]}
        </TextLink>
        /{path[1]}
      </Title>
    );
  }

  return <Title>{title}</Title>;
}
