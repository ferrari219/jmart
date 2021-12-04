import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as icons from './svg';

export const iconTypes = Object.keys(icons);

const Icon = ({ icon = 'close', className }) => {
  const SVGIcon = icons[icon];
  return <SVGIcon css={iconStyle} className={className} />;
};

const iconStyle = css`
  width: 5rem;
  height: auto;
`;

export default Icon;
