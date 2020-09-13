//A simple service to make an element move smooth on scroll
// method "add"
// arguments:
//  newClassName - moving element selector
//  newDirection - moving direction (1 or -1)
//  newSpeed - moving speed
var smoothScroll = (function () {
  var elementsToMove = [];

  // var className = "";
  // var initialPosition = 0;
  // var direction = 1;
  // var speed = 0;

  //Scroll throttling
  var ticking = false;
  var lastKnownScrollPosition = null;
  window.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        moveElements(lastKnownScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  });

  function moveElements(position) {
    elementsToMove.forEach(function (element) {
      moveElement(
        position,
        element.initialPosition,
        element.speed,
        element.direction,
        element.dom
      );
    });
  }

  function moveElement(position, initialPosition, speed, direction, element) {
    var percentage =
      (position / document.body.clientHeight) * 100 * speed * direction;
    element.style.backgroundPositionY = initialPosition + percentage + '%';
  }

  var methods = {
    addElement: function (className, initialPosition, direction, speed) {
      elementsToMove.push({
        dom: document.getElementsByClassName(className)[0],
        initialPosition: initialPosition || 0,
        speed: speed || 0,
        direction: direction || 1,
      });
    },
    //TODO removeElement ?
  };

  return methods;
})();
