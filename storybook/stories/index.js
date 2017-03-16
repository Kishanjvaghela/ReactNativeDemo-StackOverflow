import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import UserItem from '../../src/component/UserItem';
import UserList from '../../src/component/UserList';

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
