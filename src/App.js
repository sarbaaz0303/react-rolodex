import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ monsters: users }));
    }
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonster = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        const searchChange = (e) =>
            this.setState({ searchField: e.target.value });
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox searchChange={searchChange} />
                <CardList monsters={filteredMonster} />
            </div>
        );
    }
}

export default App;
