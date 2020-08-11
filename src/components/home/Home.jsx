import "./Home.css"
import React, { Component } from "react"
import Fire from "./Fire"
import Login from "./Login"
import Main from "../template/Main"


export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

    }

    componentDidMount() {
        this.authListener()
    }

    authListener() {
        Fire.auth().onAuthStateChanged((user) => {

            if (user) {

                this.setState({ user })
            }
            else {
                this.setState({ user: null })
            }
        })
    }

    render() {

        return (
            <Main icon="home" title="Inicio" subtitle="Qualquer coisa" >
                <Login />

            </Main >
        )
    }

}