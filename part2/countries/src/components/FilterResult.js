import Country from "./Country"
import CountryPage from "./CountryPage"

const FilterResult = ({ countriesToShow, handleClick }) => {
    if (countriesToShow.length === 1) {
        return (
            <CountryPage country={countriesToShow[0]} />
        )
    } else if (countriesToShow.length > 10) {
        return (
            <div>Too many matches, specify another filter.</div>
        )
    } else {
        return (
            <div>
                {countriesToShow.map(country => <Country key={country.numericCode} country={country} handleClick={handleClick} />)}
            </div>
    )}
}
 
export default FilterResult