import React, {Component} from "react";
import './App.css';
import TOC from "./component/TOC";
import ReadContent from "./component/ReadContent";
import Subject from "./component/Subject";
import Control from "./component/Control";
import CreateContent from "./component/CreateContent";

class App extends Component {
    /**
     * props 초기화
     * render보다 먼저 초기화되며, render 내 컴포넌트 요소를 초기화할 때 사용
     */
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            selected_content_id : 2,
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
        var _title, _desc, _article = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
            var i = 0;
            while(i < this.state.contents.length) {
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i++;
            }
            _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
        } else if(this.state.mode === 'create') {
            _article = <CreateContent></CreateContent>
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function(e) {
                        this.setState({
                            mode: 'welcome'
                        })
                    }.bind(this)}
                >

                </Subject>
                {/*<header>
                    <h1><a href="/" onClick={function(e) {
                        console.log(e);
                        e.preventDefault();
                        // this.state.mode = 'welcome';
                        this.setState({
                            mode : 'welcome'
                        }); //bind : 객체를 강제로 넣는 메소드
                    }.bind(this)}>{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>*/}
                <TOC
                    data={this.state.contents}
                    onChangePage={function(id) {
                        alert("hi");
                        this.setState({
                            mode: 'read',
                            selected_content_id : Number(id)
                        })
                        }.bind(this)}
                ></TOC>
                <Control onChangeMode={function(_mode) {
                    this.setState({
                        mode: _mode
                    });

                }.bind(this)}></Control>
                {_article}
            </div>
        );
    }
}

export default App;
