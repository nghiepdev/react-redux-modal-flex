# REACT-REDUX-MODAL-FLEX
Accessible modal dialog component for React Redux

[![NPM version](https://img.shields.io/npm/v/react-redux-modal-flex.svg)](https://www.npmjs.com/package/react-redux-modal-flex)
[![NPM monthly download](https://img.shields.io/npm/dm/react-redux-modal-flex.svg)](https://www.npmjs.com/package/react-redux-modal-flex)

## Demo
[http://react-redux-modal-flex.surge.sh/](http://react-redux-modal-flex.surge.sh/)

## Installation
To install the stable version you can use:

`$ yarn add react-redux-modal-flex`

## Usage
### Step 1:
`rootReducer.js`
```
import { combineReducers } from 'redux';
import {reducers as modal} from 'react-redux-modal-flex';
import todos from './todos';

export default combineReducers({
  todos,
  modal
});
```

### Step 2:
`App.js`
```
import Modal from 'react-redux-modal-flex';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" component={Auth} />
          </Switch>
          <Modal />
        </div>
      </Router>
    );
  }
}
```

### Step 3:
`Any Component you want to use`
```
import Modal from 'react-redux-modal-flex';
```

## License
MIT © [Nghiệp](http://nghiepit.pro)