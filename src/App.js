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
            mode: 'welcome',
            subject: {title: "WEB", sub: "World wide web!"},
            welcome: {title: 'welcome', desc: 'Hello, React!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'Javscript', desc: 'Javascript is for interactive'}
            ]
        }
    }

    render() {
        console.log('App render');
        var _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                {/*<Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
                <Subject title="React" sub="For UI"></Subject>*/}
                <header>
                    <h1><a href="/" onClick={function(e) {
                        console.log(e);
                        e.preventDefault();
                        // this.state.mode = 'welcome';
                        this.setState({
                            mode : 'welcome'
                        }); //bind : 객체를 강제로 넣는 메소드
                    }.bind(this)}>{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>
                <TOC data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
