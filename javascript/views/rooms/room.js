if (views.rooms == undefined) { views.rooms = {}; }
views.rooms.room = function(name) {
  return "<div class='room' id='room_"+(Room.count() + 1)+"'>\
            <p>"+name+"</p>\
          </div>";
};