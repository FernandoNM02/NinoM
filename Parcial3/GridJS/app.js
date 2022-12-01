$(document).ready(async function () {
  
  
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
  
      console.log(List)
      $("#jsGrid").jsGrid({
        width: "100%",
        height: "600px",
    
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
    
        data: List,
    
        fields: [
         { name: "ID", type: "number", width: 50 },
          { name: "Name", type: "text", width: 75},
          { name: "direccion", type: "text", width: 75 },
          { name: "telefono", type: "text", width: 75 },
         
        ],
      });
  
  
    }, 1000);
  
  
  });