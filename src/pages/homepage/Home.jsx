import './home.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Home() {
  const data = useSelector((state) => state.authReducer);

  return (
    <div className='home'>
      <div className="left">
        <h1>Welcome</h1>
        <h1>to Kwizee..</h1>

        {(data.username !== '' && data.username != null && data.username !== undefined && data.isloggedIn) ?
          <p> Click to <Link to='/quiz'>Start</Link> the quiz </p> :
          <p><Link to='/login'>login</Link> to start the quiz </p>
        }

      </div>
    </div>
  )
}

export default Home