
let ground = 0
let water = 0
let fire = 0
let electric = 0
let fighting = 0
let normal = 0
let poison = 0
let fairy = 0
let psychic = 0
let dragon = 0
let ice = 0
let steel = 0
let ghost = 0
let flying = 0
let dark = 0
let bug = 0
let grass = 0
let rock = 0
let restOfTypes = []
let typeArray = ["grass","fire","ice","water","ghost","dark","bug","dragon","rock","ground","fairy","normal","steel","fighting","poison","psychic","flying","electric"]
let body = document.getElementById("body")
let pic = document.getElementById("pic")
let name = document.getElementById("name")
let type = document.getElementById("type")
let hp = document.getElementById("hp")
let att = document.getElementById("att")
let def = document.getElementById("def")
let specialAtt = document.getElementById("special-att")
let specialDef = document.getElementById("special-def")
let speed = document.getElementById("speed")
let type1 = document.getElementById("type1")
let type2 = document.getElementById("type2")
let cell = document.querySelectorAll(".cell")
let background
let data 
let firstType
let secondType
let id
let immune = document.getElementById("0")
let norm = document.getElementById("1")
let weak = document.getElementById("2")
let resist = document.getElementById("1/2")
let superresist = document.getElementById("1/4")
let superweak = document.getElementById("4")
const searchbox = document.querySelector(".search-box")
document.addEventListener("keydown", (e) => setQuery(e))

function setQuery(e){
    if(e.key === "Enter"){
        searchbox.value = searchbox.value.toLowerCase()
        getPokemon(searchbox.value)

        searchbox.value = ""
    }
    if(e.key === "ArrowRight" && id != undefined){
        id++
        getPokemon(id)   
    }
    if(e.key === "ArrowLeft" && id != undefined && id > 1){
        id--
        getPokemon(id)   
    }
}

function resetValues(){
    ground = 0        
    water = 0
    fire = 0
    electric = 0
    fighting = 0
    normal = 0
    poison = 0
    fairy = 0
    psychic = 0
    dragon = 0
    ice = 0
    steel = 0
    ghost = 0
    flying = 0
    dark = 0
    bug = 0
    grass = 0
    rock = 0
    superweak.innerHTML = ""
    superresist.innerHTML = ""
    immune.innerHTML = ""
    weak.innerHTML = ""
    resist.innerHTML = ""
    norm.innerHTML = ""
}

function setNewValues(){
    id = data.id
    pic.src = data.sprites.front_default
    name.textContent = capitalizeFirstLetter(data.forms[0].name) + " #" + id 
    hp.textContent = "HP: " + data.stats[0].base_stat
    att.textContent = "Atk: " + data.stats[1].base_stat
    def.textContent = "Def: " + data.stats[2].base_stat
    specialAtt.textContent = "Sp.Atk: " + data.stats[3].base_stat
    specialDef.textContent = "Sp.Def: " + data.stats[4].base_stat
    speed.textContent = "Speed: " + data.stats[5].base_stat
}

function displayTypes(){
    if(data.types[1] == undefined){
        type1.textContent = capitalizeFirstLetter(firstType)
        type2.style.display = "none"
    }else{
        type2.style.display = ""
        type1.textContent = capitalizeFirstLetter(firstType) 
        type2.textContent = capitalizeFirstLetter(secondType) 
        changeColor(type2)
    }
}

function checkTypeNumber(){
    firstType = data.types[0].type.name
    if(data.types[1] != undefined){
        secondType = data.types[1].type.name
        processTwoTypes(firstType, secondType)
    }else{
        relationsForOneType(firstType)
    }
}

function getPokemon(query){
    let request = new XMLHttpRequest();
    request.open("GET", `https://pokeapi.co/api/v2/pokemon/${query}/`);
    request.send()
    request.onload = () => {
    if(request.status === 200){
        data = JSON.parse(request.response)
      
        resetValues()
        setNewValues()

        checkTypeNumber()

        displayTypes()

        background = data.types[0].type.name
        changeColor(background)  
     
    }else{
        console.log(`error ${request.status} ${request.statusText}`)
    }
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function changeColor(item){
    switch(item){
        case "fire": 
            document.documentElement.style.setProperty("--type-color", "#EE8130")
            break
        case "water": 
            document.documentElement.style.setProperty("--type-color", "#6390F0")
            break
        case "grass": 
            document.documentElement.style.setProperty("--type-color", "#7AC74C")                     
            break
        case "bug": 
            document.documentElement.style.setProperty("--type-color", "#A6B91A")
            break
        case "normal": 
            document.documentElement.style.setProperty("--type-color", "#A8A77A")
            break
        case "electric":
            document.documentElement.style.setProperty("--type-color", "#F7D02C")
            break
        case "ice": 
            document.documentElement.style.setProperty("--type-color", "#96D9D6")
            break
        case "fighting": 
            document.documentElement.style.setProperty("--type-color", "#C22E28")                
            break
        case "poison": 
            document.documentElement.style.setProperty("--type-color", "#A33EA1")
            break
        case "ground": 
            document.documentElement.style.setProperty("--type-color", "#E2BF65")
            break
        case "flying": 
            document.documentElement.style.setProperty("--type-color", "#A98FF3")
            break
        case "psychic": 
            document.documentElement.style.setProperty("--type-color", "#F95587")
            break
        case "rock": 
            document.documentElement.style.setProperty("--type-color", "#B6A136")
            break
        case "ghost": 
            document.documentElement.style.setProperty("--type-color", "#735797")
            break
        case "dragon": 
            document.documentElement.style.setProperty("--type-color", "#6F35FC")
            break
        case "dark": 
            document.documentElement.style.setProperty("--type-color", "#705746")
            break
        case "steel": 
            document.documentElement.style.setProperty("--type-color", "#B7B7CE")
            break
        case "fairy": 
            document.documentElement.style.setProperty("--type-color", "#D685AD")
            break
    }
      switch(secondType){
        case "fire": type2.style.backgroundColor = "#EE8130"
            break
        case "water": type2.style.backgroundColor = "#6390F0"
          break
        case "grass": type2.style.backgroundColor = "#7AC74C"
          break
        case "bug": type2.style.backgroundColor = "#A6B91A"
          break
        case "normal": type2.style.backgroundColor = "#A8A77A"
          break
        case "electric": type2.style.backgroundColor = "#F7D02C"
          break
        case "ice": type2.style.backgroundColor = "#96D9D6"
          break
        case "fighting": type2.style.backgroundColor = "#C22E28"
          break
        case "poison": type2.style.backgroundColor = "#A33EA1"
          break
        case "ground": type2.style.backgroundColor = "#E2BF65"
          break
        case "flying": type2.style.backgroundColor = "#A98FF3"
          break
        case "psychic": type2.style.backgroundColor = "#F95587"
          break
        case "rock": type2.style.backgroundColor = "#B6A136"
          break
        case "ghost": type2.style.backgroundColor = "#735797"
          break
        case "dragon": type2.style.backgroundColor = "#6F35FC"
          break
        case "dark": type2.style.backgroundColor = "#705746"
          break
        case "steel": type2.style.backgroundColor = "#B7B7CE"
          break
        case "fairy": type2.style.backgroundColor = "#D685AD"
          break
      }
}


function relationsForOneType(query){
    let request = new XMLHttpRequest();
    request.open("GET", `https://pokeapi.co/api/v2/type/${query}/`);
    request.send()
    request.onload = () => {
        if(request.status === 200){
            let type = JSON.parse(request.response)
 
            let influence = []
            for(let i = 0; i < type.damage_relations.no_damage_from.length; i++){
                influence.push(type.damage_relations.no_damage_from[i].name)
                const typeItem = document.createElement('li')
                typeItem.textContent = capitalizeFirstLetter(type.damage_relations.no_damage_from[i].name)
                typeItem.classList.add(type.damage_relations.no_damage_from[i].name)
                immune.appendChild(typeItem)
            }
            
            for(let i = 0; i < type.damage_relations.double_damage_from.length; i++){
                influence.push(type.damage_relations.double_damage_from[i].name)  
                const typeItem = document.createElement('li')
                typeItem.textContent = capitalizeFirstLetter(type.damage_relations.double_damage_from[i].name)
                typeItem.classList.add(type.damage_relations.double_damage_from[i].name)
                weak.appendChild(typeItem)
            } 
            
            for(let i = 0; i < type.damage_relations.half_damage_from.length; i++){
                influence.push(type.damage_relations.half_damage_from[i].name)
                const typeItem = document.createElement('li')
                typeItem.textContent = capitalizeFirstLetter(type.damage_relations.half_damage_from[i].name)
                typeItem.classList.add(type.damage_relations.half_damage_from[i].name) 
                resist.appendChild(typeItem)
            }
            
            restOfTypes = noInfluence(typeArray, influence)
            
            for(let i = 0; i < restOfTypes.length; i++){
                const typeItem = document.createElement('li')
                typeItem.textContent = capitalizeFirstLetter(restOfTypes[i])
                typeItem.classList.add(restOfTypes[i]) 
                norm.appendChild(typeItem)
            }  
        }
    }
}

function processTwoTypes(firstType, secondType){
    relationsForTwoTypes(firstType)
    setTimeout(() => relationsForTwoTypes(secondType), 25)
    setTimeout(triggerDisplay, 50)
}

function relationsForTwoTypes(query){
        let request = new XMLHttpRequest()
        request.open("GET", `https://pokeapi.co/api/v2/type/${query}/`)
        request.send()
        request.onload = () => {
            if(request.status === 200){
                let type = JSON.parse(request.response)
                calculateRelations(type)
            }
        }
}

function triggerDisplay(){
    twoTypeDisplay({name: "fire", value: fire})
    twoTypeDisplay({name: "water", value: water})
    twoTypeDisplay({name: "grass", value: grass})
    twoTypeDisplay({name: "bug", value: bug})
    twoTypeDisplay({name: "normal", value: normal})
    twoTypeDisplay({name: "electric", value: electric})
    twoTypeDisplay({name: "ice", value: ice})
    twoTypeDisplay({name: "fighting", value: fighting})
    twoTypeDisplay({name: "poison", value: poison})
    twoTypeDisplay({name: "ground", value: ground})
    twoTypeDisplay({name: "flying", value: flying})
    twoTypeDisplay({name: "psychic", value: psychic})
    twoTypeDisplay({name: "ghost", value: ghost})
    twoTypeDisplay({name: "dragon", value: dragon})
    twoTypeDisplay({name: "dark", value: dark})
    twoTypeDisplay({name: "steel", value: steel})
    twoTypeDisplay({name: "rock", value: rock})
    twoTypeDisplay({name: "fairy", value: fairy})
}

function calculateRelations(type){
    for(let i = 0; i < type.damage_relations.no_damage_from.length; i++){
        switch(type.damage_relations.no_damage_from[i].name){
            
            case "fire": fire += 10
            break
            case "water": water += 10
            break
            case "grass": grass += 10
            break
            case "bug": bug += 10
            break
            case "normal": normal += 10
            break
            case "electric": electric += 10
            break
            case "ice": ice += 10
            break
            case "fighting": fighting += 10
            break
            case "poison": poison += 10
            break
            case "ground": ground += 10
            break
            case "flying": flying += 10
            break
            case "psychic": psychic += 10
            break
            case "rock": rock += 10
            break
            case "ghost": ghost += 10
            break
            case "dragon": dragon += 10
            break
            case "dark": dark += 10
            break
            case "steel": steel += 10
            break
            case "fairy": fairy += 10
            break
        }
    }
    for(let i = 0; i < type.damage_relations.double_damage_from.length; i++){
        switch(type.damage_relations.double_damage_from[i].name){
            
            case "fire": fire += 1
            break
            case "water": water += 1
            break
            case "grass": grass += 1
            break
            case "bug": bug += 1
            break
            case "normal": normal += 1
            break
            case "electric": electric += 1
            break
            case "ice": ice += 1
            break
            case "fighting": fighting += 1
            break
            case "poison": poison += 1
            break
            case "ground": ground += 1
            break
            case "flying": flying += 1
            break
            case "psychic": psychic += 1
            break
            case "rock": rock += 1
            break
            case "ghost": ghost += 1
            break
            case "dragon": dragon += 1
            break
            case "dark": dark += 1
            break
            case "steel": steel += 1
            break
            case "fairy": fairy += 1
            break
        }
    }

    for(let i = 0; i < type.damage_relations.half_damage_from.length; i++){
        switch(type.damage_relations.half_damage_from[i].name){
            
            case "fire": fire -= 1
            break
            case "water": water -= 1
            break
            case "grass": grass -= 1
            break
            case "bug": bug -= 1
            break
            case "normal": normal -= 1
            break
            case "electric": electric -= 1
            break
            case "ice": ice -= 1
            break
            case "fighting": fighting -= 1
            break
            case "poison": poison -= 1
            break
            case "ground": ground -= 1
            break
            case "flying": flying -= 1
            break
            case "psychic": psychic -= 1
            break
            case "rock": rock -= 1
            break
            case "ghost": ghost -= 1
            break
            case "dragon": dragon -= 1
            break
            case "dark": dark -= 1
            break
            case "steel": steel -= 1
            break
            case "fairy": fairy -= 1
            break
        }
    } 
}


function twoTypeDisplay(type){
    const typeItem = document.createElement('li')
    typeItem.textContent = capitalizeFirstLetter(type.name)
    typeItem.classList.add(type.name)

    switch(type.value){
        case -2: superresist.appendChild(typeItem)
        break
        case -1: resist.appendChild(typeItem)
        break
        case 0: norm.appendChild(typeItem)
        break
        case 1: weak.appendChild(typeItem)
        break
        case 2: superweak.appendChild(typeItem)
        break
        case 9:
        case 10:
        case 11: immune.appendChild(typeItem)
        break
     }
}

const noInfluence = (arr1, arr2) => arr1.filter(x => !arr2.includes(x))
