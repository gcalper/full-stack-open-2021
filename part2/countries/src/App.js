import { useEffect, useState } from "react"
import axios from "axios"
import FilterResult from "./components/FilterResult"
import Filter from "./components/Filter"

const App = () => {
  
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState("")

  const countriesToShow = filter
    ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    : []
    
  useEffect( () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    console.log(event.target.id);
    setFilter(event.target.id)

  }
  const handleChange = event => {
    setFilter(event.target.value)
  }


  return (
    <div>
      <Filter filter={filter} handleChange={handleChange} />
      <FilterResult countriesToShow={countriesToShow} handleClick={handleClick} />
    </div>
  );
}
 
export default App
