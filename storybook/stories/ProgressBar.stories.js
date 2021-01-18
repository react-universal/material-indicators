import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import {State, Store} from '@sambego/storybook-state';
import Container from '../components/Container';
import {storiesOf} from '..//helpers/storiesOf';
import ProgressBar from '../../src//ProgressBar/ProgressBar';

const store = new Store({
  value3: 30,
  visible2: true,
  circleValue3: 40,
});

storiesOf('ProgressBar', module)
  .addParameters({jest: ['ProgressBar']})
  .add('Indeterminate', () => (
    <Container>
      <ProgressBar visible />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{marginTop: 20}}
        color={'#E91E63'}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{marginTop: 20}}
        color={'#009688'}
        animationDuration={2000}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{marginTop: 20}}
        color={'#673AB7'}
        animationDuration={4000}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{marginTop: 20}}
        color={'#8BC34A'}
        animationDuration={3000}
        height={5}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{marginTop: 20}}
        color={'#03A9F4'}
        animationDuration={4000}
        height={10}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{marginTop: 20}}
        color={'#E91E63'}
        trackColor={'#f8bbd0'}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{marginTop: 20}}
        color={'#009688'}
        trackColor={'#b2dfdb'}
        animationDuration={2000}
      />
    </Container>
  ))
  .add('Determinate', () => (
    <Container>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={{marginBottom: 40}}>
            <ProgressBar
              determinate
              value={state.value3}
              animationDuration={2000}
              trackStyle={{marginTop: 40}}
              visible={state.visible2}
            />
            <TouchableHighlight
              type="outlined"
              style={{marginTop: 20}}
              text={' Change Value'}
              onPress={() => {
                store.set({
                  value3: Math.floor(Math.random() * Math.floor(100)),
                });
              }}>
              <Text>Change Value</Text>
            </TouchableHighlight>

            <TouchableHighlight
              type="outlined"
              style={{marginTop: 20}}
              animationDuration={500}
              text={'Hide / Show Animate'}
              onPress={() => {
                store.set({
                  visible2: !state.visible2,
                });
              }}>
              <Text>Hide / Show Animate</Text>
            </TouchableHighlight>
          </View>
        )}
      </State>

      <View>
        <ProgressBar
          determinate
          value={25}
          color={'#E91E63'}
          animationDuration={2000}
          trackStyle={{marginBottom: 40}}
          visible
        />
        <ProgressBar
          determinate
          value={50}
          color={'#009688'}
          animationDuration={500}
          trackStyle={{marginBottom: 40}}
          visible
        />
        <ProgressBar
          determinate
          value={75}
          color={'#673AB7'}
          animationDuration={400}
          trackStyle={{marginBottom: 40}}
          visible
          height={5}
        />
        <ProgressBar
          determinate
          value={25}
          color={'#E91E63'}
          trackColor={'#f8bbd0'}
          animationDuration={2000}
          trackStyle={{marginBottom: 40}}
          visible
        />
          <ProgressBar
          determinate
          value={50}
          color={'#009688'}
          trackColor={'#b2dfdb'}
          animationDuration={500}
          trackStyle={{marginBottom: 40}}
          visible
        />
      </View>
    </Container>
  ));
