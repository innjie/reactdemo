//componenet를 만드는 코드
import React, {Component} from "react";

class Subject extends Component {
    render() {
        return (
            <header>
                <h1><a href='/'>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}
export default Subject;