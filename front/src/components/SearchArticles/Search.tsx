import React, { Fragment, useRef } from "react";
import { searchOptions } from "../../lib/searchOptions";

const Search: React.FC<{onSelected:(string: string) => void, onSubmitted: () =>void}> = (props) => {
    const selectRef= useRef<HTMLSelectElement>(null);
    const changeSelectedKeyWord = () => {
        if (selectRef && selectRef.current) {
            props.onSelected(selectRef.current?.value)
        }
    }
    const updateWithNewArticles = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmitted();
    }

    const options = searchOptions.map(el => <option value={el.value}>{el.label}</option>);

    return (
        <Fragment>
            <form onSubmit={updateWithNewArticles}>
                <label htmlFor="select-keyword">Choisissez un sujet:</label>
                <select defaultValue="" required name="search-article" id="select-keyword" onChange={changeSelectedKeyWord} ref={selectRef}>
                    <option value="" disabled selected hidden>Par ici...</option>
                    {options}
                </select>
                <button type='submit'>Rechercher</button>
            </form>
        </Fragment>
    )
}

export default Search;