import { Link } from 'react-router-dom'
import './admindashboard.scss'

function AdminDashboard() {
  return (
    <>
      <div className='admin-dashboard'>
        <h1>AdminDashboard</h1>
        <h2>submit questions</h2>
        <Link to='/admin/addquestionset' >Create question set</Link>
        <h2>manage questions</h2>
        <Link to='/admin/managequestions' >manage question set</Link>
      </div>
    </>
  )
}

export default AdminDashboard