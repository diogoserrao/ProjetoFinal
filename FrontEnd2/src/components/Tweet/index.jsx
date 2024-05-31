import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { PerfilAvatar } from '../PerfilAvatar'
import * as S from './Tweet.style'


//FALTA IMPORTAR USERNAME E FULLNAME
export function Tweet({ content }) {
  return (
    <S.linkTweet to={`/status/${content}`}>
      <S.divTweetContent>
        <PerfilAvatar username="diogo" name="diogo12345" />
        <S.tweetContentP>{content}</S.tweetContentP>

        <S.tweetContentFooter>
          <S.tweetContentFooterButton type="button">
            <S.tweetContentFooterButtonSvg>
              <ChatCircle />
            </S.tweetContentFooterButtonSvg>
            20
          </S.tweetContentFooterButton>

          <S.tweetContentFooterButton type="button">
            <S.tweetContentFooterButtonSvg>
              <ArrowsClockwise />
            </S.tweetContentFooterButtonSvg>
            19
          </S.tweetContentFooterButton>
          
          <S.tweetContentFooterButton type="button">
            <S.tweetContentFooterButtonSvg>
              <Heart />
            </S.tweetContentFooterButtonSvg>
            18 
          </S.tweetContentFooterButton>
        </S.tweetContentFooter>
      </S.divTweetContent>
    </S.linkTweet>
  )
}
