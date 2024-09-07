import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import { Container, Grid, Page, Title } from './Admin.styled';
import NavBar from './NavBar';

function Admin() {
  const location = useLocation();
  let title;

  if (location.pathname === '/admin') {
    title = 'Dashboard';
  } else {
    const route = location.pathname.split('/')[2];
    const cleaned = route.replace(/-/g, ' ');
    title = cleaned;
  }

  return (
    <Container data-testid="Admin">
      <SideBar />
      <Page>
        <NavBar />
        <Title>{title}</Title>
        <Grid as="section">
          <Outlet />
        </Grid>
      </Page>
    </Container>
  );
}

export default Admin;
