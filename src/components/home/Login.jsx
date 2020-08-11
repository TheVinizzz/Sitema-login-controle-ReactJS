import React, { Component } from "react"
import Fire from "./Fire"

class Login extends Component {

    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.signup = this.signup.bind(this)

        this.state = {
            email: "",
            password: ""
        }
    }

    login(e) {
        e.preventDefault()
        Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u)
            }).catch((err) => {
                console.log(err)
            })
    }

    signup(e) {
        e.preventDefault()
        Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u)
            }).catch((err) => {
                console.log(err)
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <div className="init display-4">
                    Faça seu login!
            </div>
                <hr />
                <div className="container">
                    <form className="form-signin">

                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} required autofocus />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input name="password" type="password" id="inputPassword" className="form-control mt-2" placeholder="Senha" value={this.state.password} onChange={this.handleChange} required />

                        <button className="btn btn-lg btn-primary btn-block mt-4" onClick={this.login}>Login</button>
                        <button className="btn btn-lg btn-primary btn-block mt-2" onClick={this.singup}>Inscreva-se</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2020 - Space</p>
                    </form>
                </div>
            </>


        )
    }


}

export default Login


