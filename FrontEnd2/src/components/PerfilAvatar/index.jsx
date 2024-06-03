import * as S from './PerfilAvatar.style';

/**
 * @typedef {Object} PerfilAvatarProps
 * @property {string} [name]
 * @property {string} [username]
 * @property {string} [profileImage]
 */

/**
 * @param {PerfilAvatarProps} props
 */
export function PerfilAvatar({ name = 'Sem nome', username = 'Anonimo', profileImage }) {
  return (
    <S.divPerfilAvatar>
      <S.imgPerfil src={profileImage} alt={`${name}'s profile`} />
      <S.divUserInfo>
        <strong>{name}</strong>
        <S.tweetContentTweetHeaderSpan>@{username}</S.tweetContentTweetHeaderSpan>
      </S.divUserInfo>
    </S.divPerfilAvatar>
  );
}


