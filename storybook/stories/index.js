import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';
import { withKnobs, text, boolean, number, date } from '@kadira/storybook-addon-knobs';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import UserItem from '../../src/component/UserItem';
import UserList from '../../src/component/UserList';
import QuestionItem from '../../src/component/QuestionItem';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Users', module)
  .addDecorator(withKnobs)
  .add('Single Item', () => {
    const budge = {
      bronze: number('bronze', 10),
      silver: number('silver', 20),
      gold: number('gold', 30)
    };
    const user = {
      display_name: text('Name', 'Arunoda Susiripala'),
      reputation: number('Reputation', 89),
      badge_counts: budge,
      profile_image: "https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=128&d=identicon&r=PG"
    };

    return (
      <UserItem
        data={user}
        />
    )
  })
  .add('List', () => {
      const budge = {
        bronze: 10,
        silver: 20,
        gold:  30
      };
      const user = {
        display_name: "Kishan",
        reputation: 1233,
        badge_counts: budge,
        profile_image: "https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=128&d=identicon&r=PG"
      };

      let array = [];
      const totalCount = number('Total',5);
      for(let i=0;i<totalCount; i++){
        array.push(user);
      }
    return ( <UserList userItems = {array}/>)
  });

storiesOf('Question Story',module)
  .addDecorator(withKnobs)
  .add('Single Item', () => {
    const obj = {
      "tags": [
        "c#",
        "winforms",
        "sharepoint",
        "unauthorized"
      ],
      "owner": {
        "display_name": text('Owner', 'Arunoda Susiripala'),
      },
      "is_answered": false,
      "answer_count": number('Answer Count', 10),
      "score": number('Score', 123),
      "creation_date": date('Creation', new Date('January 20 2017')),
      "link": "http://stackoverflow.com/questions/43249841/the-remote-server-returned-an-error-401-unauthorized-using-sharepoint-in-winf",
      "title": text('Question', 'Question Title')
    };


    return(
        <QuestionItem   data={obj}/>
    );
  });
storiesOf('Button', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
