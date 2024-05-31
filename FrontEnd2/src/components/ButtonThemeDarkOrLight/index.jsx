import React from 'react';
import * as S from './ButtonThemeDarkOrLight.style';

/**
 * @typedef {Object} ButtonThemeDarkOrLightProps
 * @property {null | string} isDarkTheme
 */

/**
 * ButtonThemeDarkOrLight Component
 * 
 * @param {ButtonThemeDarkOrLightProps & React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export function ButtonThemeDarkOrLight({ isDarkTheme, ...rest }) {
  return (
    <S.buttonThemeDarkOrLight
      {...rest}
      type="button"
    >
      <span>{isDarkTheme === 'false' ? '☀️' : '🌙'}</span>
    </S.buttonThemeDarkOrLight>
  );
}
