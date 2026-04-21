export default function SearchBar({ searchTerm, setSearchTerm, setPage }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
                setPage(1);
                setSearchTerm(e.target.value);
            }}
            />
        </div>
    )
}