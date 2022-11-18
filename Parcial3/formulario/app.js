document.getElementById("btnGet").addEventListener('click',async()=>{
    let respuesta = await fetch('data.php');
    let dato = await respuesta.json();
    document.getElementById("NumeroTelefono").value = dato.phone;
    document.getElementById("Nombres").value = dato.name;
    
      });