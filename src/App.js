import React, {Component} from "react";
import './App.css';

//componenet를 만드는 코드
class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
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
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}
class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="word wide web!"></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <NSubject/>
                <ASubject title="HTML" desc = "HTML is HyperText Markup Language."></ASubject>
            </div>
        );
    }
}

export default App;
