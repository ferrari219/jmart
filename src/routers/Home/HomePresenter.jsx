import React from 'react';
import { connect } from 'react-redux';
import Titles from 'components/99_Etc/Titles';
import Headers from 'components/04_Templates/Headers';
import Footers from 'components/04_Templates/Footers';

const Home = () => {
  return (
    <>
      <Titles />
      <main>
        <Headers />
        <h2>컨텐츠</h2>
        <section>
          <h3>메인배너영역</h3>
        </section>
        <section>
          <h3>카테고리</h3>
        </section>
        <section>
          <h3>할인카드</h3>
        </section>
        <section>
          <h3>장보기유형</h3>
        </section>
        <section>
          <h3>대한민국 장보기 국민반장! 오반장</h3>
        </section>
        <section>
          <h3>이번주 주목 이벤트/행사</h3>
        </section>
      </main>
      <Footers />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { state };
};
export default connect(mapStateToProps)(Home);
