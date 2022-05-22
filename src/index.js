import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from './StoreContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      {/* <App appState={state} addPost={store.addPost.bind(store)} updateText={store.updateText.bind(store)} updateDialogText={store.updateDialogText.bind(store)} addDialogText={store.addDialogText.bind(store)} /> */}
      <StoreContext.Provider value={store} >
        <App /* store={store} dispatch={store.dispatch.bind(store)} */ />
      </StoreContext.Provider>
    </React.StrictMode>
  );
}


rerenderEntireTree(store.getState());

/* store.subscribe(rerenderEntireTree); */
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

/* 1) Функция subscriber(observer) срабатывает только один раз в index.js
2) В результате срабатывания у функции rerender, объявленной в state.js, меняется ссылка на  другой объект-функцию rerenderEntireTree, 
указанную в index.js (как раз она нам и нужна)
3) Когда мы вносим какое изменение, то из файла state.js срабатывает функция rerenderEntireTree, которая и ререндерит вид всего. */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
