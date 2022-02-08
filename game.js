function dungeonestDark(array){

    let health = 100;
    let coins = 0;
    array = array[0].split("|")
    let room = [];
    let score = [];
    let points = 0;
    let roomCounter = 0

    for (let i = 0; i < array.length; i++) {
        room = [];
        score = [];
        roomCounter++
        let split = array[i].split(" ")
        room.push(split[0]);
        score.push(split[1]);
        
       if(room == "potion"){
           points = Number(score)
           health = health + points
           if(health > 100){
               health = health - points;
               points = 100 - health;
               health = 100
           }
           console.log( `You healed for ${points} hp.`);
           console.log(`Current health: ${health} hp.`);
       }else if(room == "chest"){
           points = Number(score)
           coins = coins + points;
           console.log( `You found ${points} coins.`);
       } else {
           points = Number(score);
           health = health - points;

           if(health <= 0){
                console.log(`You died! Killed by ${room}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
           }else{
               console.log( `You slayed ${room}.`);
           }
       }

        
    }
      
    if(health > 0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
   
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])