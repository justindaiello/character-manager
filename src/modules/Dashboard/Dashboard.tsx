import * as React from 'react';
import axios from 'axios'

function Dashboard() {
  const [data, setData] = React.useState({
    email: '',
    password: ''
  })

  function handleChange(e): void {
    let { name, value } = e.target

    setData(prevState => {
      return { ...prevState, [name]: value }
    })
  }


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const resp = await axios.post('/api/v1/login', data)

      if (resp?.data.token) {
        localStorage.setItem("token", resp.data.token)
      }

      console.log('[resp]', resp.data)
    } catch (err) {
      let { message } = err.response.data
      console.log('[err]', message)
    }
  }

  async function fetchUser() {
    let token = localStorage.getItem("token")
    try {
      const resp = await axios.get('/api/v1/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      console.log('[resp]', resp.data)
    } catch (err) {
      let { message } = err.response.data
      console.log('[err]', message)
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data.email} name="email" onChange={handleChange} />
        <input type="text" value={data.password} name="password" onChange={handleChange} />
        <button type="submit">
          Sign In
        </button>
      </form>
      <button onClick={handleLogout}>
        Log Out
      </button>
      <button onClick={fetchUser}>
        Fetch User
      </button>
    </React.Fragment>
  );
};

export default Dashboard;
