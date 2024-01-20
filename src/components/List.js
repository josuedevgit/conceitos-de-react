import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <List marca="Maem" />
                <List marca="Reno" />     
            </ul>
        </>
    )
}

export default List;