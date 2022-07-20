import { useState } from "react";
import s from './Searchbar.module.css'
import { toast } from "react-toastify";


export default function Searchbar({onSubmit}){
    const [searchInputText, setSearchInputText] = useState('');

    const handelSearchChange = e => {
        setSearchInputText(e.currentTarget.value.toLowerCase());

    };

    const handelSubmit = e => {
        e.preventDefault();
        if (searchInputText.trim() === '') {
            toast.error('🦄 Wow so easy!');
            return;
        }
        onSubmit(searchInputText);
        setSearchInputText('');
    };

    return (
        <header className={s.searchbar}>
            <form
                className={s.searchForm}
                onSubmit={handelSubmit} >
                    <button type="submit" className={s.button}>
                        <span className={s.buttonLabel}>Search</span>
                    </button>

                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="inputText"
                    value={searchInputText}
                    onChange={handelSearchChange}
                />
            </form>
        </header>
    ); 
};

