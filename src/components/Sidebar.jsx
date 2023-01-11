import './sidebar.scss'

function Sidebar() {
  const qNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log('qNum', qNum)
  return (
    <div className='sidebar'>
      <div className="questionNumbers">
        <ul>
          {qNum.map((num) =>
            <li key={num}> {num} </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar