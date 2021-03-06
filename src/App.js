import React, {Component} from "react";
import './App.css';
import TOC from "./component/TOC";
import ReadContent from "./component/ReadContent";
import Subject from "./component/Subject";
import Control from "./component/Control";
import CreateContent from "./component/CreateContent";
import UpdateContent from "./component/UpdateContent";

class App extends Component {
    /**
     * props 초기화
     * render보다 먼저 초기화되며, render 내 컴포넌트 요소를 초기화할 때 사용
     */
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode: 'welcome',
            selected_content_id: 2,
            subject: {title: "WEB", sub: "World wide web!"},
            welcome: {title: 'welcome', desc: 'Hello, React!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'Javscript', desc: 'Javascript is for interactive'}
            ]
        }
    }

    getReadContent() {
        var i = 0;
        while (i < this.state.contents.length) {
            var data = this.state.contents[i];
            if (data.id === this.state.selected_content_id) {
                return data;
                break;
            }
            i++;
        }
    }

    getContent() {
        var _title, _desc, _article = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
            var _content = this.getReadContent();
            _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
        } else if (this.state.mode === 'create') {
            _article = <CreateContent onSubmit={function (_title, _desc) {
                this.max_content_id = this.max_content_id + 1;
                this.state.contents.push(
                    {id: this.max_content_id, title: _title, desc: _desc}
                );
                // this.setState({
                //     contents: this.state.contents
                // });

                //1. 새 기존 객체에 새 객체를 넣는 방식
                var _contents = this.state.contents.concat({
                    id: this.max_content_id,
                    title: _title,
                    desc: _desc
                });

                //2. 기존 배열 복사 + 새 객체 넣어 바꾸는 방식
                var newContents = Array.from(this.state.contents);
                newContents.push({id: this.max_content_id, title: _title, desc: _desc});
                this.setState({
                    contents: newContents,
                    mode : 'read',
                    selected_content_id : this.max_content_id
                })

                /**
                 * push : 원본 변경, concat : 복사본을 변경
                 * -> immutable로 불변 속성을 갖고, 유사 객체를 제어할 수 있다.
                 * 원본 객체의 복사본을 바꾼 결과를 return한다.
                 */


                console.log(_title, _desc);
            }.bind(this)}></CreateContent>
        } else if (this.state.mode === 'update') {
            _content = this.getReadContent();
            _article = <UpdateContent data={_content} onSubmit={
                function (_id, _title, _desc) {
                    var _contents = Array.from(this.state.contents);

                    var i = 0;
                    while (i < _contents.length) {
                        if (_contents[i].id === _id) {
                            _contents[i] = {
                                id: _id,
                                title: _title,
                                desc: _desc
                            }
                            break;

                            i = i + 1;
                        }
                    }
                    this.setState({
                        contents : _contents,
                        mode : 'read'
                    });
                    console.log(_title, _desc);
                }.bind(this)}></UpdateContent>
        }
        return _article;
    }

    render() {
        console.log('App render');

        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function (e) {
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
                    onChangePage={function (id) {
                        alert("hi");
                        this.setState({
                            mode: 'read',
                            selected_content_id: Number(id)
                        })
                    }.bind(this)}
                ></TOC>
                <Control onChangeMode={function (_mode) {
                    if(_mode === 'delete') {
                        if(window.confirm('delete')) {
                            var i = 0;
                            while( i < this.state.contents.length) {
                                var _contents = Array.from(this.state.contents);
                                if(_contents[i].id === this.state.selected_content_id) {
                                    //i 부터 1개 삭제
                                    _contents.splice(i, 1);
                                    break;
                                }
                                i = i + 1;
                            }
                            this.setState({
                                mode : 'welcome',
                                contents : _contents
                            })
                            alert("deleted");
                        }
                    } else {
                        this.setState({
                            mode: _mode
                        });
                    }


                }.bind(this)}></Control>
                {this.getContent()}
            </div>
        );
    }
}

export default App;
