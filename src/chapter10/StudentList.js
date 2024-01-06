import styles from './StuList.module.css'

const students = [
  {
    id: 1,
    name: "나"
  },
  {
    id: 2,
    name: "나나"
  },
  {
    id: 3,
    name: "나나나"
  }
]

function StuList() {
  return (
    <div>
      <h1>학생 리스트</h1>
      <hr />
      <ul>
        {students.map((student) => {
          return (
            <li
              className={styles.StuList}
              key={student.id}>
              {student.id}번 학생 : {student.name}
            </li>)
        })}
      </ul>
    </div>
  )
}

export default StuList