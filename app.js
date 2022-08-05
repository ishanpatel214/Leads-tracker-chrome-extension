const saveBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let btn = document.getElementById("container")

saveBtn.addEventListener("click", function()
{
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads()
{
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++)
    {
            listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
            console.log(listItems)
    }
    ulEl.innerHTML = listItems
}
