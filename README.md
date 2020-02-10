<p align="center" style="margin-bottom: 0px !important;">
  <img width="600" src="https://raw.githubusercontent.com/react-universal/react-universal/master/src/images/logo.jpg" alt="React Universal" align="center">
</p>

All 4 material indicators (Indeterminate and Determinate ProgressBar and ProgressCircle) built in React Native that works on iOS, Android, Web, Electron, and other platforms. These components are a part of the React Universal ecosystem of universal React and React Native components. Checkout the [React Universal docs](https://github.com/react-universal/react-universal) to learn more.

### [Storybook Demos](https://react-universal.github.io/drawer)

### Installation

```bash
npm i @reactuniversal/material-indicators --save
```

### [Storybook Demos](https://react-universal.github.io/drawer/)

<img src="https://i.imgur.com/gsSGFtx.gif" />

### Table of Contents

- [Installation](#installation)
- [Progress Bar](#progress-bar)
  - [Indeterminate](#progresss-bar-indeterminate)
  - [Determinate](#progresss-bar-determinate)
  - [Props](#props)
- [Progress Circle](#progress-circle)
  - [Indeterminate](#progresss-circle-indeterminate)
  - [Determinate](#progresss-circle-determinate)
  - [Props](#props)

### Installation

```bash
npm install react-native-material-indicators --save
```

### Progress Bar

#### Progress Bar Indeterminate

```
import React, { Component } from 'react';
import { ProgressBar } from 'react-native-material-indicators';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ProgressBar visible color={"#E91E63"} />
    );
  }
}
```

#### Progress Bar Determinate

```
import React, { Component } from 'react';
import { ProgressBar } from 'react-native-material-indicators';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ProgressBar
         determinate
          value={50}
          color={"#009688"}
          animationDuration={500}
          trackStyle={{ marginBottom: 40 }}
          visible
      />
    );
  }
}
```

#### Props

| Name                  | Description                                                      | Type   | Default |
| --------------------- | ---------------------------------------------------------------- | ------ | ------- |
| animationDuration     | Length of each animation loop in ms                              | number | 1000    |
| color                 | Color of bar                                                     | string |         |
| determinate           | Whether bar continues to animate or not                          | bool   |         |
| easing                | Easing function for bar animation                                | func   |         |
| height                | Height of track and indicator                                    | number | 4       |
| indcatorStartPosition | Where the indicator starts before the animation begins           | number | 0       |
| style                 | Styles root element                                              | object |         |
| trackStyle            | Styles track containing the indicator                            | object |         |
| value                 | Percent out of 100 the indicator should fill in determinate mode | number |         |
| visible               | Whether bar is visible or not                                    | bool   |         |

### Progress Circle

#### Progress Circle Indeterminate

```
import React, { Component } from 'react';
import { ProgressCircle } from 'react-native-material-indicator';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ProgressCircle />
    );
  }
}
```

#### Progress Circle Determinate

```
import React, { Component } from 'react';
import { ProgressCircle } from 'react-native-material-indicators';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ProgressCircle
          value={25}
          size={48}
          thickness={4}
          color="#E91E63"
          animationMethod="timing"
          animationConfig={{ duration: 1000 }}
          shouldAnimateFirstValue
          determinate
        />
    );
  }
}
```

#### Props

| Name                    | Description                                                      | Type   | Default       |
| ----------------------- | ---------------------------------------------------------------- | ------ | ------------- |
| animationDuration       | Length of each animation loop in ms                              | number | 1000          |
| animationEasing         | Easing function for indeterminate                                | func   | Easing.linear |
| color                   | Color of circle                                                  | string |               |
| determinate             | Whether Circle continues to animate or not                       | bool   |               |
| easing                  | Easing function for determinate animation                        | func   |               |
| indcatorStartPosition   | Where the indicator starts before the animation begins           | number | 0             |
| shouldAnimateFirstValue | Wether the determinate value should animate at start             | bool   | true          |
| size                    | Diameter of circle                                               | number | 48            |
| style                   | Styles root element                                              | object |               |
| trackStyle              | Styles track containing the indicator                            | object |               |
| value                   | Percent out of 100 the indicator should fill in determinate mode | number |               |
| visible                 | Whether circle is visible or not                                 | bool   |               |
