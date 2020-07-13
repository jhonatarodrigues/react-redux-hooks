import React from 'react';
import CourseList from './components/CourseList';

//-- redux
import { Provider } from 'react-redux';
import Store from './store';

function App() {
  return (
    <Provider store={Store}>
      <CourseList/>
    </Provider>
  );
}

export default App;
