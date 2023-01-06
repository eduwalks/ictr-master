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
import EquipDetail1 from 'custom/routes/equipdetail1';
import EquipDetail2 from 'custom/routes/equipdetail2';
import EquipDetail3 from 'custom/routes/equipdetail3';
import EquipDetail4 from 'custom/routes/equipdetail4';
import AlertList from 'custom/routes/alertlist';
import AlertRespiteList from 'custom/routes/alert_respite_list';
import AlertDetail from 'custom/routes/alertdetail';
import SpotList from 'custom/routes/spotlist';
import SpotDetail1 from 'custom/routes/spotdetail1';
import SpotDetail2 from 'custom/routes/spotdetail2';
import SpotDetail3 from 'custom/routes/spotdetail3';
import PartStation from 'custom/routes/partstation';
import MainTenance from 'custom/routes/maintenance';
import MroPartState from 'custom/routes/mro_partstate';
// import Page16 from 'custom/routes/Page16';
import MroStationEquipstate from 'custom/routes/mro_station_equipstate';
import MroEquiplist from 'custom/routes/mro_equiplist';
import MroChecklist from 'custom/routes/mro_checklist';
import MroObservelist from 'custom/routes/mro_observelist';
import MroList from 'custom/routes/mro_list';
import MroCheckDetail from 'custom/routes/mro_checkdetail';
import MroCheckDetail1 from 'custom/routes/mro_checkdetail1';
import MroCheckDetail2 from 'custom/routes/mro_checkdetail2';
import MroCheckDetail3 from 'custom/routes/mro_checkdetail3';
import MroStationState from 'custom/routes/mro_station_state';
import Test11 from 'custom/routes/test11';
import Test12 from 'custom/routes/test12';
import Test21 from 'custom/routes/test21';
import Test22 from 'custom/routes/test22';


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
                    <Route path='/equipdetail1' component={EquipDetail1}/>
                    <Route path='/equipdetail2' component={EquipDetail2}/>
                    <Route path='/equipdetail3' component={EquipDetail3}/>
                    <Route path='/equipdetail4' component={EquipDetail4}/>
                    <Route path='/alertlist' component={AlertList}/>
                    <Route path='/alertrespitelist' component={AlertRespiteList}/>
                    <Route path='/alertdetail' component={AlertDetail}/>
                    <Route path='/spotlist' component={SpotList}/>
                    <Route path='/SpotDetail1' component={SpotDetail1}/>
                    <Route path='/SpotDetail2' component={SpotDetail2}/>
                    <Route path='/SpotDetail3' component={SpotDetail3}/>
                    <Route path='/partstation' component={PartStation}/>
                    <Route path='/maintenance' component={MainTenance}/>
                    <Route path='/mro_partstate' component={MroPartState}/>
                    {/* <Route path='/page16' component={Page16}/> */}
                    <Route path='/mro_station_equipstate' component={MroStationEquipstate}/>
                    <Route path='/mro_equiplist' component={MroEquiplist}/>
                    <Route path='/mro_checklist' component={MroChecklist}/>
                    <Route path='/mro_observelist' component={MroObservelist}/>
                    <Route path='/mro_checkdetail' component={MroCheckDetail}/>
                    <Route path='/mro_checkdetail1' component={MroCheckDetail1}/>
                    <Route path='/mro_checkdetail2' component={MroCheckDetail2}/>
                    <Route path='/mro_checkdetail3' component={MroCheckDetail3}/>
                    <Route path='/mro_list' component={MroList}/>
                    <Route path='/mro_stationstate' component={MroStationState}/>
                    <Route path='/test11' component={Test11}/>
                    <Route path='/test12' component={Test12}/>
                    <Route path='/test21' component={Test21}/>
                    <Route path='/test22' component={Test22}/>
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
