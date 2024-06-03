import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';
import { useCreateNewTweet } from '../Hooks/useCreateNewTweet';
import styles from "./timeline.module.css";

const tweetsData = [
  {
    content: 'Meu primeiro tweet',
    profileImage: 'https://example.com/profile1.jpg',  // Substitua com a URL real da imagem de perfil
    username: 'user1',
    fullname: 'User One'
  },
  {
    content: 'Teste',
    profileImage: 'https://example.com/profile2.jpg',  // Substitua com a URL real da imagem de perfil
    username: 'user2',
    fullname: 'User Two'
  },
  {
    content: 'Deu certo tweetar!',
    profileImage: 'https://example.com/profile3.jpg',  // Substitua com a URL real da imagem de perfil
    username: 'user3',
    fullname: 'User Three'
  }
];

export function Timeline() {
  const {
    createNewTweet,
    handleHotKeySubmit,
    tweets,
    errors,
    handleSubmit,
    register
  } = useCreateNewTweet(tweetsData.map(tweet => tweet.content));

  return (
    <main>
      <Header title="Home" page="Home" />

      <Form
        placeholder="What's happening?"
        createNewTweet={createNewTweet}
        handleHotkeySubmit={handleHotKeySubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />

      <Separator />

      {tweets.map((content, index) => {
        const tweetData = tweetsData[index];
        return (
          <Tweet
            key={`${content}-${index}`}
            content={content}
            profileImage={tweetData.profileImage}
            username={tweetData.username}
            fullname={tweetData.fullname}
          />
        );
      })}
    </main>
  );
}

