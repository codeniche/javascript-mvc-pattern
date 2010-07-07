var Room = function (elementId) {
  // public properties
  this.element = $("#" + elementId);
  this.tooltip = this.element.find(".tooltip");
  
  // Any function calls in here will be executed when a room object is instantiated
  this.initalizeTooltip();
}

// Here we are defining a class method that can be called like this: Room.count();
Room.count = function() {
  return $(".room").length;
}

// By assigning a function to the 'prototype' member it means it can only be used as an instance function.
// This means you must first create an instance of a room before using the function. eg:
// r = new Room("room_1");
// r.initalizeTooltip();
Room.prototype.initalizeTooltip = function() {
  // Store a copy of the the this.tooltip object so we can still access it within the hover callback functions
  var tooltip = this.tooltip;
  this.element.hover(function() {
    // In here the 'this' keyword refers to the element we hovered over. 
    // That's why we had to store a copy of this.tooltip outside of this callback function.
    tooltip.show();
  }, function() {
    tooltip.hide();
  });
};
  
Room.prototype.roomText = function() {
  return this.element.find("p").text();
};
  
Room.prototype.next = function() {
  return this.element.next();
};
