import React, { useState } from 'react';


//--redux
import { useSelector, useDispatch } from 'react-redux';
import { addCourseAction } from '../../action';

function CourseList() {
    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();
    const [course, setCourse] = useState("");

    const addCourse = _ => {
        dispatch(addCourseAction(course));
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}> {course} </li>)}

            </ul>
            <label htmlFor="course">Curso</label>
            <input
                type="text"
                name="course"
                value={course}
                onChange={e => setCourse(e.target.value)}
            />
            <button onClick={addCourse}>Adicionar Curso</button>
        </>
    );
}

export default CourseList;