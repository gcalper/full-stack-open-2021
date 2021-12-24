const Country = ({ country, handleClick }) => {
    return (
        <div>
            {country.name.common}
            <button id={country.name.common} onClick={handleClick}>show</button>
        </div>
    );
}
 
export default Country;