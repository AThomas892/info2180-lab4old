window.addEventListener('load', ()=>{

    document.querySelector("button#btn").addEventListener("click", ()=>{
        fetch("superheroes.php")
        .then(resp => resp.text())
        .then(data => alert(data) )

    });

});