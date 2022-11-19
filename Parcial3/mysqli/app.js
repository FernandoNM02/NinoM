
      document.getElementById('btnGet').addEventListener('click',async()=>{
        const data = await (await fetch('./mysqli.php')).json()
        console.log(data[0])

         document.getElementById('NumeroTelefono').value = data[0][2]
        document.getElementById('Nombres').value = `${data[0][0]}`
        document.getElementById('Direccion').value = `${data[0][1]}`
        
    
    });