document.querySelector('#boton').addEventListener('click', leerDatos);

function leerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/usuarios.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for (let item of datos ){
                res.innerHTML += `
               
                    <img class="card-img-top" src="${item.avatar_url}" alt="Card image" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">${item.name}</h4>
                        <p class="card-text">Nickname: ${item.nickName}</p>
                        <a href="${item.github_url}" class="btn btn-primary">Profile in Github</a>
                    </div>
                    <br>
                
                `
            }
        }
    }
}