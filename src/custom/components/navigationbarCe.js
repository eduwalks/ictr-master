import Logo from 'logo1.svg'
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import TodayAll from './time';
// import Customization from "layout/MainLayout/Header/HeaderContent/Customization";

const Navigationbar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mro_navbar">
      <Navbar.Brand eventKey="1" as={Link} to="/maintenance" className="navbar-brand1"><img src={Logo} alt="로고" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink eventKey="2" as={Link} to="/maintenance" className="nav-link">대시보드</NavLink>
          <NavLink eventKey="3" as={Link} to="/mro_equiplist" className="nav-link">설비목록</NavLink>
          <NavLink eventKey="4" as={Link} to="/mro_checklist" className="nav-link">점검목록</NavLink>
          <NavLink eventKey="4" as={Link} to="/mro_observelist" className="nav-link">주의관찰목록</NavLink>
          <NavLink eventKey="5" as={Link} to="/mro_list" className="nav-link">유지보수목록</NavLink>
          <NavLink eventKey="6" as={Link} to="/test21" className="nav-link">통계/보고서</NavLink>
          <NavLink eventKey="7" as={Link} to="/test22" className="nav-link">설정</NavLink>
        </Nav>
        <Nav>
          <TodayAll style={{color:"#707071"}} />
        </Nav>
        <Nav style={{alignItems:"center",color:"#fff",fontSize:"1rem"}}>
          <NavLink eventKey="8" as={Link} to="/" style={{alignItems:"center",fontSize:"1rem"}}>
            <div style={{display:"flex", alignItems:"center"}}>
              <span className="material-symbols-outlined">account_circle</span>
              <span style={{padding:"0 7px"}}>홍길동</span>
              <span className="material-symbols-outlined">settings</span>
            </div>
          </NavLink>
          <NavLink eventKey="9" as={Link} to="/" className="nav-link"><Button variant="contained">로그아웃</Button></NavLink>
          <NavLink eventKey="10" as={Link} to="/" className="nav-link"><Button variant="contained">모니터링</Button></NavLink>
          {/* <Customization /> */}
        </Nav>
      </Navbar.Collapse>     
    </Navbar>
  );
}
 
export default Navigationbar;