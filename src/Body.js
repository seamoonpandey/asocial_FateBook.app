import React, { useState } from 'react'
import swal from 'sweetalert'

function Body() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    function registerUser(event) {
        var users = JSON.parse(localStorage.getItem('users') || '[]')
        event.preventDefault()
        var newUser = {
            name: name,
            username: username,
            password: password,
        }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        swal('Registration is Successfull', 'Congralutions! Now you are one of us', 'success')
    }


    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <img src='http://www.atlas101.ca/pm/wp-content/uploads/2017/04/PartNet.jpg' alt='link' />
                </div>
                <div className='col-md-2'>
                    <h3>Register</h3>
                    <form action=''>
                        <input type="text" placeholder="name" className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input type="text" placeholder="username" className='form-control' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        <input type="text" placeholder="password" className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="submit" className="btn btn-primary" value="SIGN UP" onClick={registerUser} />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Body