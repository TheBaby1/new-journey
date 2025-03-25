import styles from '../modules/List.module.css'
function List(props){

    const itemList = props.items;
    const category = props.category;

    itemList.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL SORT

    const lowCalFruit = itemList.filter(item => item.calories < 100);

    const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                            {lowCalFruit.name}: &nbsp;
                                                         <b>{lowCalFruit.calories}</b> </li>)

    return(
        <>
        <h3 className={styles.category}>{category}</h3>
        <ol className={styles.items}>{listItems}</ol>
        </>
    );
}

export default List;