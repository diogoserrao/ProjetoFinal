import * as S from './PerfilAvatar.style';

/**
 * @typedef {Object} PerfilAvatarProps
 * @property {string} [name]
 * @property {string} [username]
 */

/**
 * @param {PerfilAvatarProps} props
 */
export function PerfilAvatar({ name = 'Sem nome', username = 'Anonimo' }) {
  return (
    <S.divTweetContentTweetHeader>
      <strong>{name}</strong>
      <S.tweetContentTweetHeaderSpan>@{username}</S.tweetContentTweetHeaderSpan>
    </S.divTweetContentTweetHeader>
  );
}

