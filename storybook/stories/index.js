import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';

import Drawer from '../../src/index';

import Container from '../components/Container';
import {storiesOf} from '../helpers/storiesOf';

import {State, Store} from '@sambego/storybook-state';

const store = new Store({
  isOpen: false,
  isOpenPermanent: true,
});

const DrawerContent = () => {
  return (
    <View>
      <Text>React Universal</Text>

      <View>
        <Text>Item</Text>
        <Text>Item</Text>
        <Text>Item</Text>
      </View>
    </View>
  );
};

const PageContent = () => {
  return (
    <View style={{marginTop: 20, alignItems: 'center'}}>
      <Text type={4} style={{marginBottom: 20}}>
        This is a page
      </Text>
      <Text>Click the menu button to open the drawer</Text>
      <Text>Click outside the drawer to close it</Text>
    </View>
  );
};

const AppbarContent = ({isOpen}) => {
  return (
    <View style={{width: '100%'}}>
      <Text>Appbar content</Text>
    </View>
  );
};

const Appbar = ({children}) => {
  return (
    <View style={{width: '100%', height: 56, backgroundColor: 'green'}}>
      {children}
    </View>
  );
};

const pageWidth = Platform.OS === 'web' ? 600 : Dimensions.get('window').width;

storiesOf('Drawer', module)
  .addParameters({jest: ['Drawer']})
  .add('Simple', () => (
    <Container scroll style={{padding: 0, flex: 1}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              animationTime={250}
              opacity={0.33}>
              <View style={styles.body}>
                <TouchableHighlight
                  onPress={() => store.set({isOpen: !state.isOpen})}>
                  <Text>Toggle</Text>
                </TouchableHighlight>
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Over Appbar', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              animationTime={250}>
              <View style={styles.body}>
                <AppbarContent isOpen={state.isOpen} />
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Under Appbar', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              appbar={<AppbarContent isOpen={state.isOpen} />}>
              <View style={styles.body}>
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('No Scrim', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              pageHeight={500}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              scrim={false}>
              <View style={styles.body}>
                <AppbarContent isOpen={state.isOpen} />
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Custom Scrim', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              scrimColor={'#E91E63'}
              scrimOpacity={0.2}>
              <View style={styles.body}>
                <AppbarContent isOpen={state.isOpen} />
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Scroll inner', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              pageHeight={500}
              drawerContent={
                <ScrollView>
                  <View>
                    <Text>Item</Text>
                    <Text>Item</Text>
                    <Text>Item</Text>
                  </View>
                  <View>
                    <Text>Item</Text>
                    <Text>Item</Text>
                    <Text>Item</Text>
                  </View>
                  <View>
                    <Text>Item</Text>
                    <Text>Item</Text>
                    <Text>Item</Text>
                  </View>
                  <View>
                    <Text>Item</Text>
                    <Text>Item</Text>
                    <Text>Item</Text>
                  </View>
                </ScrollView>
              }
              onClose={() => store.set({isOpen: false})}
              scrimColor={'#E91E63'}
              scrimOpacity={0.2}>
              <View style={styles.body}>
                <AppbarContent isOpen={state.isOpen} />
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Push', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              pageHeight={500}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              type={'push'}>
              <View style={styles.body}>
                <AppbarContent isOpen={state.isOpen} />
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Push Under', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={styles.container}>
            <Drawer
              open={state.isOpen}
              pageWidth={pageWidth}
              pageHeight={500}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              type={'push'}
              appbar={<AppbarContent isOpen={state.isOpen} />}>
              <View style={styles.body}>
                <PageContent />
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Permanent', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={[styles.container, {width: 'auto'}]}>
            <Drawer
              open={state.isOpenPermanent}
              pageWidth={
                Platform.OS == 'web' ? 1000 : Dimensions.get('window').width
              }
              pageHeight={500}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              type={'permanent'}>
              <View
                style={{
                  width: '100%',
                }}>
                <Appbar>
                  <AppbarContent />
                </Appbar>
                <View style={styles.body}>
                  <PageContent />
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Permanent Under', () => (
    <Container scroll style={{padding: 0}}>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={[styles.container, {width: 'auto'}]}>
            <Drawer
              open={state.isOpenPermanent}
              pageWidth={
                Platform.OS == 'web' ? 1000 : Dimensions.get('window').width
              }
              pageHeight={500}
              drawerContent={<DrawerContent />}
              onClose={() => store.set({isOpen: false})}
              type={'permanent'}
              appbar={
                <Appbar>
                  <AppbarContent />
                </Appbar>
              }>
              <View
                style={{
                  width: '100%',
                }}>
                <View style={styles.body}>
                  <PageContent />
                </View>
              </View>
            </Drawer>
          </View>
        )}
      </State>
    </Container>
  ));

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'relative',
    flex: 1,
  },
  body: {
    width: pageWidth,
    height: 1000,
    flex: 1,
  },
});
