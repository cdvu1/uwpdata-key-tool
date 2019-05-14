// @ts-check
"use strict";

// GET /key -> gets all
// POST /key -> add new key
// DELETE /key/<id> -> delete key

let state = {
    keys: [
        {
            id: 1,
            key: "faf3423klds93faf3423klds93faf3423klds93",
            name: "Bob the Builder 1",
            date: "04-10-2018",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            key: "daqpoe2fd9032mfdadaqpoe2fd9032mf34sdda",
            name: "Bob the Builder 2",
            date: "04-10-2018",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            key: "daqpoe2fd9032mfdadaqpoe2fd9032mfdfd34dsa",
            name: "Bob the Builder 3",
            date: "04-10-2018",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 4,
            key: "daqpoe2fd9032mfdadaqpoe2fd9032mfdsf34da",
            name: "Bob the Builder 4",
            date: "04-10-2018",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
}


function renderKey(key) {
    let li = document.createElement("li");
    li.classList.add("list-group-item");

    //when list item is clicked on
    li.addEventListener("click", () => {
        console.log("click list item: " + key.id);

        li.setAttribute("data-toggle", "modal");
        li.setAttribute("data-target", "#edit-modal");

        document.querySelector(".key").textContent = key.key;
        document.querySelector("#edit-name").setAttribute("value", key.name);
        document.querySelector("#edit-description").textContent = key.description;
    })
    
    let h5 = createNameHeader(key.name)

    let icons = document.createElement("span")
    let trash = handleTrashIcon(key);
    //let edit = handleEditIcon(key);

    //icons.appendChild(edit);
    icons.appendChild(trash);
    h5.appendChild(icons);
    li.appendChild(h5);

    let div1 = document.createElement("div");
    div1.textContent = key.description;
    li.appendChild(div1);

    let div2 = document.createElement("div");
    div2.classList.add("text-secondary");
    div2.textContent = "Date Created: " + key.date;
    li.appendChild(div2);

    return li;
}

// create each list item
function render(state) { //remove state eventually
    let ul = document.querySelector(".keys"); //get list
    ul.textContent = ""; //clear

    /*
    call GET /keys
    fetch('url here')
    .then(data => {
        data.forEach(k => {
            ul.appendChild(renderKey(k))
        })
    })
    .catch(error => console.log(error))
    */

    //iterate through keys array in state
    state.keys.forEach(k => {
        ul.appendChild(renderKey(k));
    });

    console.log("render");
}

render(state);


//handle add new key
document.querySelector(".modal-add").addEventListener("click", () => {
    console.log("create new key");
    console.log("name: ", document.querySelector("#add-name").getAttribute("value"));
    console.log("description: ", document.querySelector("#add-description").getAttribute("value"));
    location.reload();
    
});

//handle saving new key
document.querySelector(".modal-save").addEventListener("click", () => {
    console.log("edit key name: " + document.querySelector("#edit-name").getAttribute("value"));
    console.log("edit key description: " + document.querySelector("#edit-description").getAttribute("value"));
    location.reload();
    // call update 
    //render();
});

//refresh on close or else any changes in modal will appear in all modals
document.querySelector(".close").addEventListener("click", () => {
    location.reload();
})

//handles deleting key
function handleTrashIcon(key) {
    let trash = document.createElement("span");
    trash.classList.add("oi");
    trash.classList.add("oi-trash");
    trash.addEventListener("click", () => {
        console.log("delete key: " + key.id);
        // call DELETE /key/key.id
        // render()
    });

    return trash;
}

//creates name header in list item
function createNameHeader(name) {
    let h5 = document.createElement("h5");
    h5.classList.add("d-flex");
    h5.classList.add("justify-content-between");
    h5.classList.add("align-items-center");
    h5.textContent = name;

    return h5;
}

/*
function handleEditIcon(key) {
    let edit = document.createElement("span");
    edit.classList.add("oi");
    edit.classList.add("oi-pencil");
    edit.classList.add("pr-3");

    edit.setAttribute("data-toggle", "modal");
    edit.setAttribute("data-target", "#edit-modal");
    

    edit.addEventListener("click", () => {
        document.querySelector("#edit-name").setAttribute("value", key.name);
        document.querySelector("#edit-description").textContent = key.description;
        
    });
    return edit;
}
*/