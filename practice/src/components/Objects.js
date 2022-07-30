function Objects() {
  // const grocery = {
  // // item_One :{
  // // id : 1,
  // // type : 'clothing',
  // // location : 'bole',
  // // },
  // // item_Two :
  // // {
  // //     id : 2,
  // //     type : 'food',
  // //     loctaion : "piassa"
  // // },
  // // item_Three :
  // // {
  // //     id : 3,
  // //     type : 'shoe',
  // //     location : 'merkato'
  // // }
  // };

  const grocery = ["clothing", "food", "shoe"];

  function Listgrocery(props) {
    return <li>{props.value}</li>;
  }

  function ObjectsList(props) {
    const materials = props.item;

    return (
      <ul>
        {materials.map((grocerys) => (
          <Listgrocery key={grocerys} value={grocerys} />
        ))}
      </ul>
    );
  }

  return (
    <div>
      <ObjectsList item={grocery} />
    </div>
  );
}

export default Objects;
