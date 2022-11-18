/* document.getElementById("btnGet").addEventListener('click',async()=>{
    let respuesta = await fetch('data.php');
    let dato = await respuesta.json();
    document.getElementById("NumeroTelefono").value = dato.phone;
    document.getElementById("Nombres").value = dato.name;
    
      }); */
      
      document.getElementById('btnGet').addEventListener('click',async()=>{
        //console.log('hola')
        const data = await (await fetch('./data.php')).json()
        console.log(dato)
        document.getElementById('NumeroTelefono').value = dato.name
        document.getElementById('Nombres').value = dato.phone
    
        
    
    })