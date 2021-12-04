import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';

const Button = ({ type = 'solid', size = 'md', label = '버튼' }) => {
  return (
    <button
      type="button"
      css={buttonStyle}
      className={[`type-${type}`, `size-${size}`].join(' ')}
    >
      {label}
    </button>
  );
};

const buttonStyle = css`
  font-weight: 600;
  &.type {
    &-solid {
      /** 중요도 1순위 */
      background-color: ${theme.colors.main};
      border: none;
      color: white;
    }
    &-ghost {
      /** 중요도 2순위 */
      background-color: white;
      border: 1px solid ${theme.colors.main};
      color: ${theme.colors.main};
    }
    &-light {
      /** 중요도 3순위 */
      background-color: #f0f0f0;
      border: none;
      color: ${theme.colors.main};
    }
    &-outline {
      /** 중요도 3순위 */
      background-color: #fff;
      border: 1px solid #ccc;
    }
    &-text {
      /** 중요도 4순위 */
      background-color: transparent;
      border: none;
    }
    &-danger {
      /** 위험 */
    }
  }
  &.size {
    &-sm {
      padding: 0.3rem 1rem 0.2rem 1rem;
    }
    &-md {
      padding: 0.7rem 1.5rem 0.5rem 1.5rem;
    }
    &-lg {
      padding: 1rem 2rem 0.8rem 2rem;
    }
  }
  &.round {
    &-0 {
    }
    &-5 {
      border-radius: 0.5rem;
    }
    &-10 {
      border-radius: 2rem;
    }
  }
  &.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export default Button;
