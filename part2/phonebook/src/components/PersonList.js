import Person from './Person'

const PersonList = ({ personsToShow }) => {
    return (
        <table>
            <tbody>
                {personsToShow.map(person => <Person key={person.name} name={person.name} number={person.number} />)}
            </tbody>
        </table>
    )
}
 
export default PersonList