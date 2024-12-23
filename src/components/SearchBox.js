import React from "react";

const SearchBox = ({searchChange}) => {
    // console.log(searchChange)
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="lookup my friends"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
