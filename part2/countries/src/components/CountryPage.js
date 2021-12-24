import Weather from "./Weather";

const CountryPage = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>population {country.population}</p>
            <h2>Spoken languages</h2>
            <ul>
                {Object.keys(country.languages).map(k => <li key={country.languages[k]}>{country.languages[k]}</li>)}
            </ul>
            <div>
                <img src={country.flags['png']} alt={`Flag of ${country.name.common}`} width="150" height="100" />
            </div>
            <Weather city={country.capital[0]} />
        </div>
    );
}
 
export default CountryPage;