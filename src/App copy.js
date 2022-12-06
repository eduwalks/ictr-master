// project import
// import Routes from 'routes';
import ThemeCustomization from 'themes';
import Locales from 'components/Locales';
import RTLLayout from 'components/RTLLayout';
import ScrollTop from 'components/ScrollTop';
// import Snackbar from 'components/@extended/Snackbar';

// auth provider
import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

// project imports
import { Routes, Route, useNavigate } from 'react-router-dom'
import 'custom/style.css'
import { Nav, Navbar } from 'react-bootstrap';
import Logo from './logo.svg'
import Main from 'custom/pages/main';
import Page4 from 'custom/routes/partstation';
import Page6 from 'custom/routes/equipdetail';
import Page16 from 'custom/routes/Page16';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

function App() {

  let navigate = useNavigate();

  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <AuthProvider>
              <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand onClick={() =>{navigate('/')}}><img src={Logo} alt="로고" /></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="" onClick={() =>{navigate('/page4')}}>메뉴1</Nav.Link>
                      <Nav.Link href="" onClick={() =>{navigate('/page6')}}>메뉴2</Nav.Link>
                      <Nav.Link href="" onClick={() =>{navigate('/page16')}}>메뉴3</Nav.Link>
                      <Nav.Link href="" onClick={() =>{navigate('/4')}}>메뉴4</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#">스팟메뉴1</Nav.Link>
                      <Nav.Link eventKey={2} href="#">
                        스팟메뉴2
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                
                <Routes>
                  <Route path="/" element={
                    <>
                      <Main />
                    </>
                  } />

                  <Route path="/page4" element={<Page4 />} />
                  <Route path="/page6" element={<Page6 />} />
                  <Route path="/page16" element={<Page16 />} />
                </Routes>
              </>
            </AuthProvider>
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}

export default App;
