import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';

const Input = ({ round = '0' }) => {
  return (
    <input type="text" css={inputStyle} className={[`r-${round}`].join(' ')} />
  );
};

Input.defaultProps = {};

const inputStyle = css`
  padding: 0.3rem 0.2rem 0.2rem 0.2rem;
  background-color: white;
  border: 1px solid ${theme.colors.lineBasic};
  &:focus,
  &.active {
    outline: none;
    border: 1px solid ${theme.colors.active};
  }
  //radius
  // 라운드
  &.r {
    &-0 {
    }
    &-5 {
      border-radius: 3rem;
    }
    &-10 {
      border-radius: 10rem;
    }
  }
`;

export default Input;
