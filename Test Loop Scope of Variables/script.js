test();
function test(){
  let HEIGHT = 50;
  let WIDTH = 50;
  for (let i = 0; i < HEIGHT; i++){
    let fullPrintColumn = "";
    for (let j = 0; j < WIDTH; j++){
      fullPrintColumn = "Tu es stupide!";
      console.log(fullPrintColumn);
    }
  }
}