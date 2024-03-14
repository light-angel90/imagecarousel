# image-carousel

A simple JavaScript package for creating an image carousel/slider.

## Installation

You can install the image-carousel package via npm:

\`\`\`bash
npm install image-carousel
\`\`\`

## Usage

\`\`\`javascript
// Import the ImageCarousel class
const ImageCarousel = require('image-carousel');

// Provide image URLs or paths
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

// Initialize the carousel
const carousel = new ImageCarousel(images);
carousel.init();
\`\`\`

## Options

- \`images\`: An array of image URLs or paths.
- \`options\`: An optional object specifying configuration options.
  - \`interval\`: Interval between slides in milliseconds (default: 3000).
  - \`container\`: DOM element to append the carousel to (default: document.body).

## Methods

- \`init()\`: Initializes the carousel.
- \`start()\`: Starts automatic sliding.
- \`stop()\`: Stops automatic sliding.
- \`next()\`: Moves to the next image.
- \`prev()\`: Moves to the previous image.
- \`updateImage()\`: Updates the displayed image.

## Example

Check out the \`example\` directory for a simple usage example.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.