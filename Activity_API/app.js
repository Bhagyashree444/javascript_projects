let btn = document.querySelector("button");
let i = document.querySelector("input");
let ul = document.querySelector("#list");

const url = "http://universities.hipolabs.com/search?name=india";

btn.addEventListener("click",async () => {
    let stateName = i.value;

    console.log(stateName);
    getColNames(stateName);
});


async function getColNames(state)
{
    // console.log("Inside getNames(state)")
    ul.innerText = "";

    //let res = await axios.get(url+country); //for country axios API 
    let res = await axios.get(url);
    let colNames = res.data;
    //console.log(colNames);

    let stateUni = colNames.filter((c)=>
    {
        return state === c["state-province"];
    })
        
    console.log(stateUni);
    show(stateUni);
    
}

function show(Uni)
{
    for(let each of Uni)
    {
         let li = document.createElement("li");
         li.innerText = each["name"];
         ul.appendChild(li);
    }
    
    //console.log("function show completed")
}
    
                
            

    
