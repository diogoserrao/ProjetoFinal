import styled from "styled-components";

const divPerfilAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const imgPerfil = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const divUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const tweetContentTweetHeaderSpan = styled.span`
  font-size: ${({ theme }) => theme.font.defaultXS};
  color: ${({ theme }) => theme.color.secondary.main};
`;

export {
  divPerfilAvatar,
  imgPerfil,
  divUserInfo,
  tweetContentTweetHeaderSpan,
};
