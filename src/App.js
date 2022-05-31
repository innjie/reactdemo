import React, {Component} from "react";
import './App.css';
import TOC from "./component/TOC";
import Content from "./component/Content";
import Subject from "./component/Subject";

class App extends Component {
    /**
     * props 초기화
     * render보다 먼저 초기화되며, render 내 컴포넌트 요소를 초기화할 때 사용
     */
    constructor(props) {
        super(props);
        this.state = {
            subject : {title: "WEB", sub: "World wide web!"},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'Javscript', desc: 'Javascript is for interactive'}
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC data={this.state.contents}></TOC>
                <Content title="HTML" desc = "HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;
