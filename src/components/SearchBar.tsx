interface ISearchBar {
    placeholder: string;
}

export function SearchBar({ placeholder }: ISearchBar) {
    return <div>
        <input
            type="text"
            placeholder={placeholder}
            style={{
                padding: 10,
                width: 300,
                borderRadius: "20px",
                border: "1px solid #969696",
                outline: "none"
            }}
        />
    </div>
}