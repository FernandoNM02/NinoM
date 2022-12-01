setTimeout(async () => {
    const query = await fetch("./consul.php");

    const data = await query.json();
    
    var List = [];

    for (let i = 0; i < data.length; i++) {

      object = {
      ID:data[i][0],
      Name:data[i][1],
      direccion:data[i][2],
      telefono:data[i][3],
      }
      List.push(object);
    }

new gridjs.Grid({
    columns: ["id", "Name", "direccion","telefono"],
    data: List
  }).render(document.getElementById("wrapper"));

});