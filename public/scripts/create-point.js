function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => { return res.json() })
    .then( states => {

        for( const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }       
       
    })
}
populateUFs()


function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = '<option value="">Selecione a Cidade</option>'
    citySelect.disabled = true
    
    fetch(url)
    .then((res) => { return res.json() })
    .then( cities => {        

        for( const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }      
        
        
       citySelect.disabled = false
    })

    
}

document.querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectItems = []

function handleSelectedItem(event){

    const itemLi = event.target

    // adicionar/remover class
    // toggle = adicona ou remove

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se os itens da lista estão selecionados
    const alreadySelected = selectItems.findIndex(        
        item => {

           const itemFound = item == itemId
           return itemFound

        })

        // se já estiver selecionado
        if(alreadySelected >= 0){
            
            //tirar a seleção
            const filteredItems = selectItems.filter( item =>{
                const itemIsDifferent = item != itemId 
                return itemIsDifferent
            })

            selectItems = filteredItems
        }else{
            //adiciona
            selectItems.push(itemId)
        }

        collectedItems.value = selectItems
                
        
}