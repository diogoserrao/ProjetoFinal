import { TextareaHTMLAttributes, forwardRef } from 'react';
import * as S from './Textarea.style';

/**
 * @typedef {Object} TextareaProps
 * @property {boolean} error
 * @extends {TextareaHTMLAttributes<HTMLTextAreaElement>}
 */

/**
 * Deixei o ref, mas não estamos usando ele nessa branch, estamos usando o react-hook-form
 * @type {React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>}
 */
export const InputTweet = forwardRef(
  ({ error, ...rest }, ref) => {
    return (
      <S.containerTextarea error={error}>
        <S.Textarea {...rest} ref={ref} error={error} />
      </S.containerTextarea>
    );
  }
);


