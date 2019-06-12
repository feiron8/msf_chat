import React from "react";
import {connect} from "react-redux";

class Documents extends React.Component {
    render() {
        const documents = this.props.documents.map((document) => {
            return (
                <li><a href={document.link}>{document.title}</a></li>
            )
        });


        return (
            <ul className="App__documents">
                {documents}
            </ul>
        )
    };
}

const mapStateToProps = (storeState) => ({
    documents: storeState.documents
});

export default connect(mapStateToProps)(Documents)