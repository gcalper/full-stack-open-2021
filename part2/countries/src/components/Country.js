const Country = ({ country, handleClick }) => {
    return (
        <div>
            {country.name}
            <button id={country.name} onClick={handleClick}>show</button>
        </div>
    );
}
 
export default Country;