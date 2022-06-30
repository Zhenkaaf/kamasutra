
import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profileReducer";


it('new post should be added', () => {
    //1.test data
    let action = addPostActionCreator('workTest');
    let state = {
        postsData: [
          { id: 1, message: 'hi, how are you', likes: 8 },
          { id: 2, message: 'hi Kris', likes: 48 },
          { id: 3, message: 'my firsr post', likes: 17 },
          { id: 4, message: 'hi Fiiiima', likes: 5 }
        ],
        //newPostText: 'it-cma',
        profile: null,
        status: ''
      };
      //2.action
      let newState = profileReducer(state, action);
      //3.expectation
      expect(newState.postsData.length).toBe(5);
   
});
it('message of new post should be correct', () => {
    //1.test data
    let action = addPostActionCreator('workTest');
    let state = {
        postsData: [
          { id: 1, message: 'hi, how are you', likes: 8 },
          { id: 2, message: 'hi Kris', likes: 48 },
          { id: 3, message: 'my firsr post', likes: 17 },
          { id: 4, message: 'hi Fiiiima', likes: 5 }
        ],
        //newPostText: 'it-cma',
        profile: null,
        status: ''
      };
      //2.action
      let newState = profileReducer(state, action);
      //3.expectation
     
      expect(newState.postsData[4].message).toBe('workTest');
});
it('after deleting length of message should be decrement', () => {
    //1.test data
    let action = deletePostActionCreator(1);
    let state = {
        postsData: [
          { id: 1, message: 'hi, how are you', likes: 8 },
          { id: 2, message: 'hi Kris', likes: 48 },
          { id: 3, message: 'my firsr post', likes: 17 },
          { id: 4, message: 'hi Fiiiima', likes: 5 }
        ],
        //newPostText: 'it-cma',
        profile: null,
        status: ''
      };
      //2.action
      let newState = profileReducer(state, action);
      //3.expectation
      expect(newState.postsData.length).toBe(3);
});





/* решение проблемы "SyntaxError: Cannot use import statement outside a module":

1) в корне проекта создаем файл `.babelrc` с содержанием:
```
{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
```
2) проверяем наличие `src/setupTests.js` содержащий `import '@testing-library/jest-dom/extend-expect';`
3) устанавливаем jest-dom `npm install --save-dev @testing-library/jest-dom`

Работа с тестами:

1) Тесты желательно класть в папку `__tests__` рядом с тестируемым модулем.
2) запуск отдельного теста `npm test path/to/test/file -t 'name of the test'`
3) запуск всех тестов в файле `npm test path/to/test/file`

При этом после каждого сохранения тест будет перезапускаться. */