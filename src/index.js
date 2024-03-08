// image-carousel.js

class ImageCarousel {
    constructor(images, options = {}) {
      this.images = images;
      this.currentIndex = 0;
      this.intervalId = null;
      this.options = {
        interval: options.interval || 3000, // Default interval of 3 seconds
        container: options.container || document.body,
      };
    }
  
    // Initialize the carousel
    init() {
      this.render();
      this.start();
    }
  
    // Render the carousel
    render() {
      const container = document.createElement('div');
      container.classList.add('image-carousel');
  
      const imgElement = document.createElement('img');
      imgElement.src = this.images[this.currentIndex];
      container.appendChild(imgElement);
  
      this.options.container.appendChild(container);
    }
  
    // Start automatic sliding
    start() {
      this.intervalId = setInterval(() => {
        this.next();
      }, this.options.interval);
    }
  
    // Stop automatic sliding
    stop() {
      clearInterval(this.intervalId);
    }
  
    // Show next image
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateImage();
    }
  
    // Show previous image
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.updateImage();
    }
  
    // Update the displayed image
    updateImage() {
      const imgElement = this.options.container.querySelector('.image-carousel img');
      imgElement.src = this.images[this.currentIndex];
    }
  }
  
  // Example usage
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Provide image URLs or paths
  
  const carousel = new ImageCarousel(images, { container: document.getElementById('carousel-container') });
  carousel.init();
  
  // Export the class
  module.exports = ImageCarousel;
  