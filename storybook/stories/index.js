import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import UserItem from '../../src/component/UserItem';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('User Item', module)
  .add('dummy text', () => {
    const budge = {
      bronze:123,
      silver:45,
      gold:70
    };
    const user = {
      display_name: "Jon Skeet",
      reputation: "123",
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
