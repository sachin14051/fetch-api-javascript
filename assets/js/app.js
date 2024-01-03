let cl = console.log;

let baseUrl = `https://jsonplaceholder.typicode.com/posts`;
const postTable = document.getElementById("post-table")

const templating = (arr) =>{
    let result = '';
  
     arr.forEach((ele) => {
        result += `
        <tr>
        <td>${ele.id}</td>
        <td>${ele.title}</td>
        <td>${ele.body}</td>
        </tr>
        
        
                `
     });
     postTable.innerHTML = result

}
const makeApiCall = ()=>{

  return  fetch(baseUrl)
    .then(res=>res.json())
}

makeApiCall()
.then(res=>{
    cl(res)
    templating(res)
})


