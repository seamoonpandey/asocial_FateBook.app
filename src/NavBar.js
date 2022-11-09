import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'

function NavBar() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory()

    function logout() {
        localStorage.removeItem('loggedin')
        history.push('/')
        window.location.reload(true)

    }


    function login() {

        var users = JSON.parse(localStorage.getItem('users'))
        var i = 0;
        for (var user of users) {
            if (user.username === username && user.password === password) {
                swal('Login Successful', '', 'success')
                i++;
            }
        }
        if (i === 1) {
            localStorage.setItem('loggedin', 'loggedin')
            history.push('/dashboard')
            window.location.reload(true)
        }
        else {
            swal('Login Failed', 'incorrect username or password', 'error')
        }

    }

    return (
        <div>

            <div className='row nav'>
                <div className='col-md-6'>
                    <h1>FateBook</h1>
                </div>
                <div className='col-md-6'>
                    {
                        (() => {
                            if (localStorage.getItem('loggedin')) {
                                return <button onClick={logout}>LOGOUT</button>
                            }
                            else {
                                return <div>
                                    <input type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                                    <input type="text" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    <button onClick={login} >LOGIN</button>
                                </div>
                            }

                        })()
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar