const Filter = ({ handleChange, filter }) => {
    return (
        <div>
            find countries <input value={filter} onChange={handleChange} />
        </div>
    );
}
 
export default Filter;