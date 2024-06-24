import React, { ChangeEvent, SyntheticEvent, useState } from 'react'

type Props = {}

const Search:React.FC<Props> = (props: Props):JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (e: SyntheticEvent)=>{

    };

    return (
        <div>
            <input value={search} onChange={(e)=>handleChange(e)} type="text" />
            <button onClick={(e)=>{console.log(e)}}>Search</button>
        </div>
    );
}

export default Search;