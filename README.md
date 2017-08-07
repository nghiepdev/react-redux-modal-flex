# REACT-REDUX-MODAL-FLEX
Accessible modal dialog component for React, easy to install and use with Redux.

[![NPM version](https://img.shields.io/npm/v/react-redux-modal-flex.svg)](https://www.npmjs.com/package/react-redux-modal-flex)
[![NPM monthly download](https://img.shields.io/npm/dm/react-redux-modal-flex.svg)](https://www.npmjs.com/package/react-redux-modal-flex)

## Demo
[http://react-redux-modal-flex.surge.sh/](http://react-redux-modal-flex.surge.sh/)

## Features
- Integration Redux
- Easy custom `animate` effect with [Animate.css](https://daneden.github.io/animate.css/)

## Installation
To install the stable version you can use:

```sh
$ yarn add react-redux-modal-flex
```

## Example
### Step 1:
`rootReducer.js`
```js
import { combineReducers } from 'redux';
import {reducer as modal} from 'react-redux-modal-flex';
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
Any `Container` you want to use
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
- initState
```js
const initState = {
  classContent: 'modal-content',
  animation: 'zoomIn',
  duration: 300,
  mask: true,
  closeByMask: true,
  component: ModalDefault,
  title: 'This is a title',
  closeBtn: true,
  textCancel: 'Cancel',
  ok: {
    text: 'OK',
    classOk: 'modal-btn-ok',
    disabled: false,
    action: () => console.log('OK clicked'),
  },
};
```

- API
```js
import Modal, { reducer as modal, actions as ModalActions, selectors as ModalSelectors};
const {toggleModal, modifyOkModal} = ModalActions;
```
- `<Modal />` is component, using in our `App.js`
- `reducer` using in our `rootReducer.js`
- `ModalSelectors` is state of modal
- `toggleModal` and `modifyOkModal` is action

## Usage
- Open Modal by action `toggleModal(options)`
    - `options`: is object and look like the `initState` above
    - Example:
    ```jsx
    ...
    render() {
      return (
        <button onClick={() => this.props.toggleModal({
          textCancel: 'Hide',
          component: () => <div>content modal</div>,
          title: 'My title',
          ok: {
            text: 'Login',
            action: () => alert('click OK')
          }
        })}>Click me</button>
      );
    }
    ...
      
    ```
- Close Modal `toggleModal(false)` or any value excepted object
- Modify button `OK`: `modifyOkModal(options)` usage like `toggleModal`
    - Example: 
    ```js
    onClick={() => this.props.modifyOkModal({
      text: 'Sign up',
      disabled: true
    })}
    ```
- Hide button `Cancel` with `textCancel: null`
- Hide button `Ok` with `ok: {text: null}`
- Hide Footer if the `Cancel` and `Ok` is hidden 

## Contributing
The main package in `src/package`

## Testing
Welcome contributing :)

## License
MIT © [Nghiệp](http://nghiepit.pro)