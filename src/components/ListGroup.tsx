function ListGroup() {
    let colors = [
        'red',
        'blue',
        'yellow',
        'orange']
    
    colors = []

    return (
    <>
        <h1>List</h1>
        {colors.length === 0 && <p>No item found.</p>}
        <ul className="list-group">
            {colors.map(color => <li className="list-group-item" key={color}> { color } </li>)}
        </ul>
    </>
    );
}

export default ListGroup;