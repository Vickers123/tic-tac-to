var player = "X"
function clicking(index){
   const cell = document.getElementsByClassName("cell")[index];
   
   if (cell.innerHTML == ""){
      if(player=== "X"){
         player = "O";
        }
        else{
         player = "X";
        }
        cell.innerHTML = player;
   }

   winning();

}
   function winning(){
      const cell = document.getElementsByClassName("cell");
      const winArray = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
      ];

      for(const arr of winArray){
         if(cell[arr[0]].innerHTML != "" && cell[arr[1]].innerHTML != "" && cell[arr[1]].innerHTML != ""){
            if(cell[arr[0]].innerHTML == cell[arr[1]].innerHTML && cell[arr[0]].innerHTML == cell[arr[2]].innerHTML){
               setTimeout(()=>{
                  alert(cell[arr[0]].innerHTML +" is a winner")
                  reset();
                  
               }, 100);
            }

         }
       
      }

   }
   function reset(){
      const cell = document.getElementsByClassName("cell");
      for(const element of cell){
         element.innerHTML = "";
      }
   }
 
