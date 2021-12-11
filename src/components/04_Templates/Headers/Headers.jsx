import React from 'react';
import Navs from 'components/03_Organisms/Navs';

const Headers = () => {
  return (
    <section>
      <h2>헤더</h2>
      <div>
        <div>
          <h3>로고</h3>
        </div>
        <div>
          <h3>검색영역</h3>
        </div>
      </div>
      <nav>
        <Navs />
      </nav>
    </section>
  );
};

export default Headers;
