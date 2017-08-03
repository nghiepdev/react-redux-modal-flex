# REACT-REDUX-MODAL-FLEX
Accessible modal dialog component for React Redux

[![NPM version](https://img.shields.io/npm/v/react-redux-modal-flex.svg)](https://www.npmjs.com/package/react-redux-modal-flex)
[![NPM monthly download](https://img.shields.io/npm/dm/react-redux-modal-flex.svg)](https://www.npmjs.com/package/react-redux-modal-flex)

## Demo
[http://react-redux-modal-flex.surge.sh/](http://react-redux-modal-flex.surge.sh/)

## Installation
To install the stable version you can use:

```sh
$ yarn add react-redux-modal-flex
```

## Usage
### Step 1:
`rootReducer.js`
```js
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
```jsx
import Modal from "react-redux-modal-flex";

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
`Any Container you want to use`
```jsx
import { connect } from "react-redux";
import { actions as ModalActions } from "react-redux-modal-flex";

class LoginModal extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
      </form>
    );
  }
}

class Auth extends React.Component {
  render() {
    return (
      <div>
        <h3>Auth</h3>
        <button
          onClick={() =>
            this.props.toggleModal({
              component: LoginModal,
              ok: {
                text: "Login",
                action: () => alert("submit form")
              }
            })}
        >
          Open modal login
        </button>
      </div>
    );
  }
}

export default connect(null, { toggleModal: ModalActions.toggleModal })(Auth);

```

## API
api here

## For Contributor
The main package in `src/package`

## Testing
Welcome contributor :)

## License
MIT © [Nghiệp](http://nghiepit.pro)