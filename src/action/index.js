//-- action Types
export const ADD_COURSE = 'ADD_COURSE';



// -- actions Creators
export function addCourseAction(title) {
    return { 
        type: ADD_COURSE, 
        title 
    }
  }