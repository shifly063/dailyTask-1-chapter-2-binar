const person = [
    {
      "_id": "640b3d4a6e4cefc3b462942f",
      "isActive": true,
      "age": 24,
      "eyeColor": "brown",
      "name": "Marisa Gonzales",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d4a51353902764c630f",
      "isActive": false,
      "age": 29,
      "eyeColor": "blue",
      "name": "Benson Eaton",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d4a0baec0a32f5cac4a",
      "isActive": true,
      "age": 39,
      "eyeColor": "blue",
      "name": "Sanford Garrett",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d4af914f71b2a292274",
      "isActive": false,
      "age": 32,
      "eyeColor": "brown",
      "name": "Fuller Lancaster",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d4af96993c1f230d8a2",
      "isActive": true,
      "age": 34,
      "eyeColor": "blue",
      "name": "Madelyn Tucker",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d4ab1a7ea781542d1b4",
      "isActive": false,
      "age": 21,
      "eyeColor": "green",
      "name": "Mullen Donaldson",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d4a0b3656a992942b24",
      "isActive": false,
      "age": 37,
      "eyeColor": "green",
      "name": "Miranda Valdez",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d4a01df78edfbd9f5e0",
      "isActive": true,
      "age": 35,
      "eyeColor": "brown",
      "name": "Marva Brennan",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d4ab2aaab04fbcc59e3",
      "isActive": true,
      "age": 25,
      "eyeColor": "brown",
      "name": "Hunter Becker",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d4a2aab5787406f4185",
      "isActive": false,
      "age": 31,
      "eyeColor": "brown",
      "name": "Kristie Walter",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d4ad095ff92d73dece3",
      "isActive": true,
      "age": 37,
      "eyeColor": "brown",
      "name": "Lynne Hogan",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d4ab0c2a6cb33c1414c",
      "isActive": true,
      "age": 21,
      "eyeColor": "blue",
      "name": "Mari Wilson",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d4a6c416c426e42309a",
      "isActive": false,
      "age": 37,
      "eyeColor": "blue",
      "name": "Taylor Cooper",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d4af3bd3b9ee076b95d",
      "isActive": true,
      "age": 38,
      "eyeColor": "brown",
      "name": "Haley Nolan",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d4a769e321person.length1e732e3",
      "isActive": true,
      "age": 37,
      "eyeColor": "blue",
      "name": "Althea Alford",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d4a23d6bc41eaba8802",
      "isActive": true,
      "age": 35,
      "eyeColor": "blue",
      "name": "Jeannine Rivera",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d4a6a5d1c16c49f286f",
      "isActive": true,
      "age": 37,
      "eyeColor": "blue",
      "name": "Pollard Cummings",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d4a01b542bb8433fcd8",
      "isActive": true,
      "age": 26,
      "eyeColor": "brown",
      "name": "Phoebe Cwastro",
      "gender": "female",
      "favoriteFruit": "banana"
    }
  ]
// Nomer 1 (print person yang suka buah apple dan warna mata nya biru)
console.log("================ print person yang suka buah apple dan warna mata nya biru ===============")
  for(let a = 0; a < person.length; a++){
    if(person[a].favoriteFruit == "apple"){
        if(person[a].eyeColor === "blue"){
            console.log(person[a])
        }
    }
  }

// Nomer 2 (print berapa person yang age nya diatas 30)
console.log("======================= print berapa person yang age nya diatas 30 =======================")
    for(let a = 0; a < person.length; a++){
      if(person[a].age > 30){
          console.log(person[a])
      }
    }

// Nomer 3 (print person yang isActive true and  gender nya female)
console.log("================= print person yang isActive true and  gender nya female =================")
    for(let a = 0; a < person.length; a++){
      if(person[a].isActive == true){
          if(person[a].gender === "female"){
              console.log(person[a])
          }
      }
    }

// Nomer 4 (print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue)
console.log("=========== print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue ===========")
    for(let a = 0; a < person.length; a++){
      if(person[a].age > 30 || (person[a].age < 25 && person[a].eyeColor === "blue")){
          console.log(person[a])
      }
    }

// Nomer 5 (print person yang mengandung huruf W di name nya)
console.log("==================== print person yang mengandung huruf W di name nya ====================")
  for(let a = 0; a < person.length; a++){
    const nameperson =[]
    nameperson.push(person[a].name)
    for(let i = 0; i < nameperson[0].length; i++){
      if(nameperson[0][i] === "W" || nameperson[0][i] === "w"){
        console.log(person[a])
      }
    }
  }

// Nomer 6 (print person isActive false dan gender nya male dan age nya diatas 25)
console.log("========= print person isActive false dan gender nya male dan age nya diatas 25 ==========")
  for(let a = 0; a < person.length; a++){
    if(person[a].isActive == false){
      if(person[a].gender === "male"){
        if(person[a].age > 25){
          console.log(person[a])
        }
      } 
    }
  }
// Atau
//   for(let a = 0; a < person.length; a++){
//     if(person[a].isActive == false && person[a].gender === "male" && person[a].age > 25){
//       console.log(person[a])
//     }
//   }

// Nomer 7 (print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana)
console.log("===== print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana =====")
  for(let a = 0; a < person.length; a++){
    if(person[a].age < 30 || (person[a].eyeColor === "brown" && person[a].favoriteFruit == "banana")){
        console.log(person[a])
    }
  }

// Nomer 8 (print person gender male)
console.log("================================ print person gender male ================================")
  for(let a = 0; a < person.length; a++){
    if(person[a].gender === "male"){
        console.log(person[a])
    }
  }

// Nomer 9 (print person eyeColor Blue)
console.log("=============================== print person eyeColor Blue ===============================")
  for(let a = 0; a < person.length; a++){
    if(person[a].eyeColor === "blue"){
        console.log(person[a])
    }
  }

// Nomer 10 (print person age diatas 30)
console.log("=============================== print person age diatas 30 ===============================")
  for(let a = 0; a < person.length; a++){
    if(person[a].age > 30){
        console.log(person[a])
    }
  }