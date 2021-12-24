const Person = ({ name, number, deleteRecord }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{number}</td>
            <td><button onClick={deleteRecord}>DELETE</button></td>
        </tr>
    );
}
 
export default Person;