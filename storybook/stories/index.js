import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import UserItem from '../../src/component/UserItem';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('User Item', module)
  .addDecorator(withKnobs)
  .add('dummy text', () => {
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
