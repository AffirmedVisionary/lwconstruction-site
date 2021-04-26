import * as S from './styles';
import { NavLink } from "react-router-dom";


type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    <>
        <S.Ul open={props.open}>

      
        <NavLink to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA"
          }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA"
          }}
        >
          <li>About Us</li>
        </NavLink>
        <NavLink to="/contact"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA"
          }}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink to="/trades"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA"
          }}
        >
          <li>Trades</li>
        </NavLink>
      </S.Ul>


    </ >
  )
}

export default RightNav
