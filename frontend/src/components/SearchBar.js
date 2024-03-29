import React from 'react';

export default class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search:</label>
                        <input type="text" placeholder="Specify your scrape location here:" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
<button>Search</button>
                    </div>
                </form>
            </div>
        )}
};
