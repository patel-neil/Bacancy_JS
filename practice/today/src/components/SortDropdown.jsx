export default function SortDropdown({ sortOrder, setSortOrder, setPage }) {
    return (
        <div>
            <select
            value={sortOrder}
            onChange={(e) => {
                setPage(1);
                setSortOrder(e.target.value);
            }}
            >
            <option value="">Sort by Rating</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
            </select>
        </div>
    )
}