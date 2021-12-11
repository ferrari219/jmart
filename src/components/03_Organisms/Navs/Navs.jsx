import React from 'react';
import NavLi from 'components/01_Atoms/NavLi';
import NavUl from 'components/02_Molecules/NavUl';

const Navs = () => {
  return (
    <div>
      <h3>Nav메뉴</h3>
      <NavUl>
        <NavLi />
      </NavUl>
    </div>
  );
};

export default Navs;
