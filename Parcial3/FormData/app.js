document.getElementById("btnGet").addEventListener('click', async ()=>{
    const formdata= new FormData(document.getElementById("idFormulario"))
   const data = await fetch("./find.php",{

        method:"POST", body:formdata
    })
    const json=await data.json()
    console.log(json)

    document.getElementById('NumeroTelefono').value = json[0][3]
    document.getElementById('Nombres').value = `${json[0][1]}`
    document.getElementById('Direccion').value = `${json[0][2]}`
})