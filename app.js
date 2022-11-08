window.addEventListener('load', ()=>{

    let heading = document.querySelector("header h1");
    heading.style.color = "#fff";
    heading.style.transition = "all 2s ease-in-out";
    let parserTool = new DOMParser();

    document.querySelector("button#btn").addEventListener("click", (event)=>{
        event.preventDefault();
        let searchVal = document.querySelector("input#searchField");
        let resultDiv = document.querySelector("div#result");
      
        let cleanUrl = `superheroes.php?query= ${searchVal}`;

        fetch(cleanUrl, {method : 'GET'})
        .then(resp => resp.text())
        .then(elements => {
            let h3El = document.createElement("h3");
            let h3Text = document.createTextNode("RESULT");
            h3El.appendChild(h3Text);
            let hrEl= document.createElement("hr");
            resultDiv.innerHTML = '';
            resultDiv.prepend(h3El, hrEl);
            resultDiv.innerHTML = elements;
            
            
        })

      
    });

    document.querySelector("input#searchField").onblur = ()=>{
        querySelector("input#searchField").style.borderColor = "#3366ff";
    }

});