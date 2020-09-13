(function () {
  const MOBILE_SIZE = 920;
  const images = [
    {
      className: 'image-clip-container',
      initialPosition: 0,
      direction: 1,
      speed: 2,
    },
    {
      className: 'background-image2',
      initialPosition: 0,
      direction: 1,
      speed: 1.8,
    },
    {
      className: 'background-image3',
      initialPosition: 50,
      direction: -1,
      speed: 1.9,
    },
    {
      className: 'background-image4',
      initialPosition: -240,
      direction: 1,
      speed: 10,
    },
    {
      className: 'background-image5',
      initialPosition: 95,
      direction: -1,
      speed: 1.2,
    },
  ];
  function setScrolling(images) {
    images.forEach((image) => {
      smoothScroll.addElement(
        image.className,
        image.initialPosition,
        image.direction,
        image.speed
      );
    });
  }

  init();

  // reset position of images
  function resetImagesPosition(images) {
    images.forEach((image) => {
      document.querySelector('.' + image.className).style.backgroundPositionY =
        image.initialPosition;
    });
  }

  function init() {
    if (document.body.clientWidth > MOBILE_SIZE) {
      setScrolling(images);
    } else {
      resetImagesPosition(images);
    }
  }
})();
