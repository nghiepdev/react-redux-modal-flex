# REACT-REDUX-MODAL-FLEX

Make easy a modal/popup with Redux.

[![NPM version](https://img.shields.io/npm/v/react-redux-modal-flex.svg)](https://www.npmjs.com/package/react-redux-modal-flex)
[![NPM monthly download](https://img.shields.io/npm/dm/react-redux-modal-flex.svg)](https://www.npmjs.com/package/react-redux-modal-flex)

:warning: This will work only with React 16.3+ :warning:

If you're looking for a version for React 16.2 (for individual pages) use [1.x branch](https://github.com/nghiepit/react-redux-modal-flex/tree/1.x) branch.

## Demo

[https://react-redux-modal-flex.netlify.com](https://react-redux-modal-flex.netlify.com)

## Features

- Responsive
- Easy custom `animation` effect by [Animate.css](https://daneden.github.io/animate.css/)

## Installation

To install the stable version you can use:

```sh
$ yarn add react-redux-modal-flex
```

## Example

### Step 1:

`rootReducer.js`

```js
import {combineReducers} from 'redux';
import {reducer as modal} from 'react-redux-modal-flex';
import todos from './todos';

export default combineReducers({
  todos,
  modal: modal({
    classContent: 'modal-content',
    animation: 'zoomIn',
    duration: 200,
    mask: true,
    /* initial state, see API reference */
  }),
});
```

### Step 2:

`App.js`

```jsx
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

Any `Container` you want to use

```jsx
import {connect} from 'react-redux';
import {actions as ModalActions} from 'react-redux-modal-flex';

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
                text: 'Login',
                action: () => alert('submit form'),
              },
            })
          }>
          Open modal login
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  {toggleModal: ModalActions.toggleModal},
)(Auth);
```

## API

- initState: you can overwrite default initial state

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
import Modal, {
  reducer as modal,
  actions as ModalActions,
} from 'react-redux-modal-flex';
const {toggleModal, modifyOkModal} = ModalActions;
```

- `<Modal />` is component, using in our `App.js`
- `reducer` using in our `rootReducer.js` you can custom default initial state

```js
export default combineReducers({
  todos,
  modal: modal({
    textCancel: 'Close',
    title: 'My default title',
  }),
});
```

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

- Hide `Header` if the `title` is null
- Hide `Cancel` button if the `textCancel` is null
- Hide `Ok` button if `ok: {text: null}`
- Hide Footer if the `Cancel` and `Ok` are hidden

## License

MIT © [Nghiep](http://nghiepit.pro)
