import React from 'react';
import * as S from './styles';

import Burger from './Burger';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {

  return (
    <>
      <S.Nav >

      <Burger />
        {props.children}
        </S.Nav>
    </>
  )
}