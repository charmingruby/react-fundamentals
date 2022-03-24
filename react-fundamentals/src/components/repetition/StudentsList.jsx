import React from 'react'
import students from '../../data/students'

export default props => {

    const studentsLi = students.map(student => {
        return (
            <li key={student.id}>
                {student.id}) {student.name}: {student.grade}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {studentsLi}
            </ul>
        </div>
    )
}