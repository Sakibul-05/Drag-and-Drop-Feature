let item = document.getElementById("item");
let whiteBoxes = document.querySelectorAll(".whiteBox");
let btn = document.getElementsByTagName("button")[0]

//jei element ta drag kora hobe setai 2 ta eventListener add kora jabe-->
//1.dragstart;   2.dragend

item.addEventListener("dragstart",(e)=>{
    //jokhn element take dhore drag korchi
     console.log("dragstart trigered");
     setTimeout(() => {
        e.target.className = "hide"
     }, 0);
})
item.addEventListener("dragend", (e)=>{
    //jokhn element take chere dibo tokhn eti trigger hobe but tar age drop event trigger hobe
    console.log("dragend triggered")
    e.target.className = "blueBox"
    
})


//for of loop lagano dorkar nahole backword drag & drop kaj korbe na
for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragenter", (e)=>{
        console.log("dragenter triggered");
        e.target.className += " active";
    })
    whiteBox.addEventListener("dragover", (e)=>{
        //dragover e preventDefault na korle drag & drop kaj korbe na
        e.preventDefault()
        console.log("dragover triggered");
        e.target.className += " active";
    })
//dragenter and dragover er modhye priority dragenter er


    whiteBox.addEventListener("dragleave", (e)=>{
        console.log("dragleave triggered");
        e.target.className = "whiteBox";
    })
//jokhn draggable element take hold korar por chere dewa hoi tokhn drop then dragend events trigger hoi

    whiteBox.addEventListener("drop", (e)=>{
        e.preventDefault
        console.log("drop triggered");
        e.target.className = "whiteBox";
        e.target.append(item);
    })
}


// dragstart--> dragenter--> dragover--> dragleave-->dragenter-->dragover-->drop-->dragend
