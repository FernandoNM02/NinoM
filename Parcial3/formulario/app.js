
      document.getElementById('btnGet').addEventListener('click',async()=>{
        const data = await (await fetch('./data.php')).json()
        console.log(data)
        document.getElementById('NumeroTelefono').value = data.name
        document.getElementById('Nombres').value = data.phone
    
        
    
    })