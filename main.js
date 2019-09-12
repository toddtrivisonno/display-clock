

setInterval(clock, 1000);
function clock (){
   var time = new Date ();
   var hours = time.getHours();
   var minutes = time.getMinutes();
   var seconds = time.getSeconds();
   
   minutes = fixTime(minutes);
   seconds = fixTime(seconds);
   //hours = standardTime(hours);

   document.getElementById('displayClock').innerHTML = hours + ":" + minutes + ":" + seconds;

   function fixTime(i) {
      if (i < 10) {
         i = "0" + i;
      }
      return i;
   }

   if (document.getElementById('standard').checked) {
      var suffix = 'am';
      if (hours >= 12) {
         suffix = 'pm';
         hours = hours - 12;
      }
      if (hours === 12) {
         hours = 12;
      }
      document.getElementById('displayClock').innerHTML = hours + ":" + minutes + ":" + seconds + suffix;
   }
}
   
