(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name in names) {
    var currentName = names[name];
    
    var upperFirstLetter = currentName.charAt(0);
    var firstLetter = upperFirstLetter.toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(currentName);
    } else {
      helloSpeaker.speak(currentName);
    }
  }
})();

