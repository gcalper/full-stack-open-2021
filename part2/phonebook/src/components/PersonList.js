import Person from './Person'

const PersonList = ({ personsToShow, deleteRecordOf }) => {
    return (
        <table>
            <tbody>
                {personsToShow.map(person => <Person key={person.name} name={person.name} number={person.number} deleteRecord={() => deleteRecordOf(person.id)} />)}
            </tbody>
        </table>
    )
}
 
export default PersonList