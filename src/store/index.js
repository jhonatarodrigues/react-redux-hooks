import { createStore } from 'redux';

// -- reducer
import Courses from '../reducer/courses.js';

const store = createStore(
    Courses
);

export default store;