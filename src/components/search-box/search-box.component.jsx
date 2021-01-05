import React from "react";
import "./search-box.styles.css";

export const SearchBox = (props) => {
    return (
        <input
            type="search"
            placeholder="search-monster"
            onChange={props.searchChange}
            className="search"
        />
    );
};
