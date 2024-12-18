import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import { Container, Grid, Page, Title, TitleWrapper } from './Admin.styled';
import NavBar from './NavBar';
import { ScrollToTop, TextLink } from '../../components';
import { useState } from 'react';

function Admin() {
  const { pathname, state } = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);

  function getPageTitle(
    path: string,
    routerState: { title?: string } | null | undefined
  ) {
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

    return `${cleaned} / ${routerState?.title ?? ''}`;
  }

  const title = getPageTitle(pathname, state);

  if (typeof title !== 'string') {
    throw new Error('title is not a string');
  }

  return (
    <Container data-testid="Admin">
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Page>
        <NavBar setShowSideBar={setShowSideBar} />
        <TitleWrapper>
          <PageTitle title={title} />
        </TitleWrapper>
        <Grid as="section" aria-label="dashboard-page-grid">
          <Outlet />
        </Grid>
      </Page>
      <ScrollToTop />
    </Container>
  );
}

export default Admin;

function PageTitle({ title }: { title: string }) {
  const path = title.split('/');

  if (path.length === 2) {
    return (
      <Title>
        <TextLink to={`/admin/${path[0].trim()}`} $isActive>
          {path[0]}
        </TextLink>
        /{path[1]}
      </Title>
    );
  }

  return <Title>{title}</Title>;
}
