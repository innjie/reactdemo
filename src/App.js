import React, {Component} from "react";
import './App.css';

//componenet를 만드는 코드
class Subject extends Component {
    render() {
        return (
            <header>
                <h1>WEB</h1>
                word wide web!
            </header>
        );
    }
}
class NSubject extends Component {
    render() {
        return (
            <ul>
                <li><a href = "1.html">HTML</a></li>
                <li><a href = "2.html">HTML</a></li>
                <li><a href = "3.html">HTML</a></li>
            </ul>

        );
    }
}
class ASubject extends Component {
    render() {
        return (
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language.
            </article>
        );
    }
}
class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject/>
                <NSubject/>
                <ASubject/>
            </div>
        );
    }
}

export default App;
