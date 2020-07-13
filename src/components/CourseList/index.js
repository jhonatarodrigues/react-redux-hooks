import React, { useState } from 'react';


//--redux
import { useSelector, useDispatch } from 'react-redux';
import { addCourseAction } from '../../action';

function CourseList() {

    const [limit, setLimit] = useState(0)
    const courses = useSelector(state => {

        if (limit && limit > 0)
            return state.data.slice(0, limit)
        else 
            return state.data

    }, [limit]);
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
            
            <div>
                <label htmlFor="course">Curso</label>
                <input
                    type="text"
                    name="course"
                    value={course}
                    onChange={e => setCourse(e.target.value)}
                />
                <button onClick={addCourse}>Adicionar Curso</button>
            </div>
            <div>
                <label htmlFor="course">Limite da lista</label>
                <input
                    type="text"
                    name="limit"
                    value={limit}
                    onChange={e => setLimit(e.target.value)}
                />
            </div>
        </>
    );
}

export default CourseList;