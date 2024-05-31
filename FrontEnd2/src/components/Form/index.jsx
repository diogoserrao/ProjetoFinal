import React from 'react';
import { InputTweet } from '../InputTweet';
import * as S from './Form.style';

// Definição das propriedades do Form usando JSDoc para tipagem
/**
 * @typedef {Object} FormProps
 * @property {string} [submit]
 * @property {boolean} [svgOn]
 * @property {React.ReactNode} [svg]
 * @property {string} placeholder
 * @property {(data: Object) => void} createNewTweet
 * @property {(event: React.KeyboardEvent, data: Object) => void} handleHotkeySubmit
 * @property {Function} handleSubmit
 * @property {Function} register
 * @property {Object} errors
 */

/**
 * Form Component
 * 
 * @param {FormProps} props
 */
export function Form({
  submit = 'Tweet',
  svgOn = false,
  svg,
  placeholder,
  createNewTweet,
  handleHotkeySubmit,
  handleSubmit,
  register,
  errors
}) {
  const errorNewTweetLength = errors.newTweet?.message?.length ? true : false;
  
  return (
    <>
      <S.errorMsg error={errorNewTweetLength}>
        {errors.newTweet?.message}
      </S.errorMsg>

      <S.newTweetForm
        onSubmit={handleSubmit(createNewTweet)}
        className="new-tweet-form"
        isResponseTweetOrNewTweet={submit}
      >
        <S.newTweetFormLabel htmlFor="tweet">
          <InputTweet
            id="tweet"
            placeholder={placeholder}
            {...register('newTweet')}
            error={errorNewTweetLength}
            // onKeyDown={handleSubmit(handleHotkeySubmit)} // Comentado pois causa conflito
          />
        </S.newTweetFormLabel>
        <S.newTweetFormButtonSubmit
          type="submit"
          svgOn={svgOn}
          error={errorNewTweetLength}
          disabled={errorNewTweetLength}
        >
          <span>{submit}</span> {svgOn && svg}
        </S.newTweetFormButtonSubmit>
      </S.newTweetForm>
    </>
  );
}

