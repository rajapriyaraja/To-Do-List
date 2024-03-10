let input=document.getElementById("toDo");
let submit=document.getElementById("edit");
let array=[];
submit.addEventListener("click",function(event){
    event.preventDefault();
    const inputName=input.value;
    array.push(inputName)
    addTable();
    input.value="";
})
function addTable(){
    let table="";
    array.forEach((res, index) => {
        table += `
            <div class="item">
                <p class="border mt-4 p-2 text-dark col-10  ">${res}</p>
                <button class="btn btn-danger remove-btn" onclick="removeItem(${index})"><i class='bx bx-x'></i></button>
            </div>`;
    });
    document.getElementById("store").innerHTML=table;
}
function removeItem(index) {
    array.splice(index, 1); // Remove the item from the array
    addTable(); // Update the displayed list
}


