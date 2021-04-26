import { useState } from 'react';
import * as S from './styles';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
            <NavLink to='/'><img className='menu-logo' src={Logo} alt="Lawfully White Construction Ltd" /></NavLink>

      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger