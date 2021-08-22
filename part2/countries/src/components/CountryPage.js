import Weather from "./Weather";

const CountryPage = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>Spoken languages</h2>
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <div>
                <img src={country.flag} alt={`Flag of ${country.name}`} width="150" height="100" />
            </div>
            <Weather city={country.capital} />
        </div>
    );
}
 
export default CountryPage;