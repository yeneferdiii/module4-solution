 /*
   Ask the user to enter a name 
   if starts with j or J, then Say goodbye JSomeName
   If not, then Say Goodbye SomeName
 */
document.getElementById("myButton").onclick = function() {
   var name = document.getElementById("textBox1").value;
   if (name[0] == "J" || name[0] == "j") {
      document.getElementById("myLabel").textContent = `Goodbye ${name}`;
   } else {
      document.getElementById("myLabel").textContent = `Hello ${name}`;
   }
}