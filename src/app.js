import React, {Component} from 'react'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import RangePicker from "./components/range-picker";

class App extends Component {
    state = {
        selected: null,
        from: undefined,
        to: undefined
    };

    render() {
        const { articles } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        const {from, to} = this.state;
        return (
            <div className="App">
                {/*<UserForm />*/}
                {/*<Select options = {options} value = {this.state.selected} onChange = {this.handleSelectChange} multi/>*/}
                <RangePicker handleDateChange={this.handleDateChange}/>
                <br/>
                <div>
                    {to && <div>Date range: {from.toDateString()} - {to.toDateString()}</div>}
                </div>
                <Chart articles = {articles} />
                <ArticleList articles = {articles}/>
            </div>
        );
    }

    handleSelectChange = selected => this.setState({ selected });
    handleDateChange = (from, to) => this.setState({from, to});
}

export default App;
