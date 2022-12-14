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
// import { Routes, Route, useNavigate } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'custom/style.css'
// import Customization from 'layout/MainLayout/Header/HeaderContent/Customization';
// import { Nav, Navbar } from 'react-bootstrap';
// import Logo from './logo.svg'
import Main from 'custom/pages/main';
import EquipList from 'custom/routes/equiplist';
import EquipDetail from 'custom/routes/equipdetail';
import AlertList from 'custom/routes/alertlist';
import AlertDetail from 'custom/routes/alertdetail';
import SpotList from 'custom/routes/spotlist';
import SpotDetail from 'custom/routes/spotdetail';
import PartStation from 'custom/routes/partstation';
import MainTenance from 'custom/routes/maintenance';
import MroPartState from 'custom/routes/mro_partstate';
// import Page16 from 'custom/routes/Page16';
import MroStationEquipstate from 'custom/routes/mro_station_equipstate';
import MroEquiplist from 'custom/routes/mro_equiplist';
import MroChecklist from 'custom/routes/mro_checklist';
import MroList from 'custom/routes/mro_list';
import MroCheckDetail from 'custom/routes/mro_checkdetail';
import mroStationState from 'custom/routes/mro_station_state';
import Test from 'custom/routes/test';
import Test1 from 'custom/routes/test1';


// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

function App() {

  // let navigate = useNavigate();

  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <AuthProvider>
              <>
                <Router>
                  {/* <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/equiplist' element={<EquipList />} />
                    <Route path='/equipdetail' element={<EquipDetail />} />
                    <Route path='/alertlist' element={<AlertList />} />
                    <Route path='/alertdetail' element={<AlertDetail />} />
                    <Route path='/spotlist' element={<SpotList />} />
                    <Route path='/spotdetail' element={<SpotDetail />} />
                    <Route path='/partstation' element={<PartStation />} />
                    <Route path='/page16' element={<Page16 />} />
                  </Routes> */}
                  {/* <Switch> */}
                    <Route exact path='/' component={Main}/>
                    <Route path='/equiplist' component={EquipList}/>
                    <Route path='/equipdetail' component={EquipDetail}/>
                    <Route path='/alertlist' component={AlertList}/>
                    <Route path='/alertdetail' component={AlertDetail}/>
                    <Route path='/spotlist' component={SpotList}/>
                    <Route path='/spotdetail' component={SpotDetail}/>
                    <Route path='/partstation' component={PartStation}/>
                    <Route path='/maintenance' component={MainTenance}/>
                    <Route path='/mro_partstate' component={MroPartState}/>
                    {/* <Route path='/page16' component={Page16}/> */}
                    <Route path='/mro_station_equipstate' component={MroStationEquipstate}/>
                    <Route path='/mro_equiplist' component={MroEquiplist}/>
                    <Route path='/mro_checklist' component={MroChecklist}/>
                    <Route path='/mro_checkdetail' component={MroCheckDetail}/>
                    <Route path='/mro_list' component={MroList}/>
                    <Route path='/mro_stationstate' component={mroStationState}/>
                    <Route path='/test' component={Test}/>
                    <Route path='/test1' component={Test1}/>
                  {/* </Switch> */}
                </Router>
              </>
            </AuthProvider>
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}

export default App;
