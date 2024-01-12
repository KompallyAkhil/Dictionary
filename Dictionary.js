const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const output = document.getElementById("output");
const search = document.getElementById("search");
const defination = document.getElementById("about");
const words = document.getElementById("word");
const errors = document.getElementById("errors");
const pos = document.getElementById("pos");
function word(){
    let meaning = document.getElementById("text").value;
    fetch(`${url}${meaning}`)
    .then((res)=>{
        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
          }
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        console.log(data[0]);
        defination.textContent=data[0].meanings[0].definitions[0].definition;
        words.textContent= document.getElementById("text").value;
        pos.textContent=`<${data[0].meanings[0].partOfSpeech}>`;
        pos.style.display="block";
        words.style.display="block";
        output.style.display="block";
        errors.textContent = "";
    })
    .catch( (error)=>{
        console.error("Error fetching data:", error);
        errors.textContent="Sorry pal, we couldn't find definitions for the word you were looking for 🤧.";
        defination.textContent="";
        pos.textContent = "";
        words.textContent = "";
        output.style.display= "";
    });    
}
search.addEventListener("click",()=>{
    let meaning = document.getElementById("text").value;
    word();
    
})
