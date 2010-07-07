(function () {
  // For each room div that is on the page we want to create a new Room object.
  // In this example we are then saving the objects into a global 'rooms' array.
  window.rooms = [];
  $(".room").each(function() {
    rooms.push(new Room(this.id));
  });
  
  // Here we are defining an event listener to listen for when a room div is clicked.
  $("#rooms").delegate(".room", "click", function () {
    $(this).toggleClass("dark");
    return false;
  });
  
  $("#new_room").click(function () {
    var name = prompt("What is the name of the new room?");
    $("#rooms").append(views.rooms.room(name));
    return false;
  });
  
  $("#show_flash").click(function () {
    var message = prompt("What message do you want to show?");
    app.flash("<p>"+message+"</p>");
    return false;
  });
  
})();
