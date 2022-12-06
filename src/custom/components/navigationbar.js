import Logo from 'logo.svg'
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import TodayAll from './time';
// import Customization from "layout/MainLayout/Header/HeaderContent/Customization";

const Navigationbar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand eventKey="1" as={Link} to="/"><img src={Logo} alt="로고" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink eventKey="2" as={Link} to="/">대시보드</NavLink>
          <NavLink eventKey="3" as={Link} to="/equiplist">설비목록</NavLink>
          <NavLink eventKey="4" as={Link} to="/alertlist">경보목록</NavLink>
          <NavLink eventKey="5" as={Link} to="/spotlist">현장(상시)점검내역</NavLink>
          <NavLink eventKey="6" as={Link} to="/test">통계/보고서</NavLink>
          <NavLink eventKey="7" as={Link} to="/test">설정</NavLink>
        </Nav>
        <Nav>
          <TodayAll />
        </Nav>
        <Nav style={{alignItems:"center",color:"#fff",fontSize:"1rem"}}>
          <span className="material-symbols-outlined">person</span><span>홍길동</span>&nbsp;&nbsp;
          <Button variant="contained">로그아웃</Button>
          {/* <Customization /> */}
        </Nav>
      </Navbar.Collapse>     
    </Navbar>
  );
}
 
export default Navigationbar;