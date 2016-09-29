import React from 'react'
import { Link } from 'react-router'

const Signup = () => {
    const signupStyle = {
        transition: 'all 1s ease-in'
    }
    const backIconStyle = {
        width: 50,
        position: 'absolute', 
        left: 50,
        top: 20,
        cursor: 'pointer'
    }
    const headerStyle = {
        margin: 0,
        paddingTop: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
    const expirationStyle= {
        width: 75,
        display: "inline-block"
    }
    const formStyle = {
        width: 400,
        margin: '20px auto'
    }
    return (
        <div id="signup" style={signupStyle} >
            <Link to="/">
                <img src="http://downloadicons.net/sites/default/files/back-logo-icon-27727.png"
                    style={backIconStyle} alt="Back" />
            </Link>
            <h1 style={headerStyle}>Take the Pledge!</h1>
            <form style={formStyle}>
                <div className="form-group">
                    <label>Email</label>
                    <input placeholder="Email" className="form-control" type="email"/>
                </div>
                <div className="form-group">
                    <label>Credit Card</label>
                    <input type="number" className="form-control" placeholder="Card Number" />
                </div>
                <div className="form-group">
                    <label>Expiration</label>
                    <input type="number" placeholder="MM" className="form-control" />
                    <input type="number" placeholder="YY" className="form-control" />
                </div>
            </form>
        </div>
    )
}

export default Signup
