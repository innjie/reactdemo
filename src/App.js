import React, {Component} from "react";
import './App.css';
import TOC from "./component/TOC";
import Content from "./component/Content";
import Subject from "./component/Subject";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="word wide web!"></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC/>
                <Content title="HTML" desc = "HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;
