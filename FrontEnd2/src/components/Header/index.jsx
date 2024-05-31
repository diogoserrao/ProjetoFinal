import React from 'react';
import { Sparkle } from 'phosphor-react';
import * as S from './Header.style';

// Definição das propriedades do Header usando JSDoc para tipagem
/**
 * @typedef {Object} HeaderProps
 * @property {string} title
 * @property {string} [page]
 */

/**
 * Header Component
 * 
 * @param {HeaderProps} props
 */
export function Header({ title, page }) {
  return (
    <S.divHeader className="timeline-header">
      {title}
      {page === 'Home' && <Sparkle />}
    </S.divHeader>
  );
}
