# Photo Gallery

A responsive photo gallery web application that displays a curated collection of animal, flower, and plant images with category-based filtering and a lightbox viewer.

## Features

- **Category Filtering** – Filter images by category (All, Animals, Flowers, Plants) using interactive buttons.
- **Lightbox Viewer** – Click any image to view it in a full-screen lightbox overlay with navigation controls powered by [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/).
- **Responsive Grid Layout** – Images are displayed in a 4-column CSS Grid layout that adapts to different screen sizes.
- **Hover Effects** – Images feature a grayscale-to-color transition with a rotation and scale animation on hover.
- **Dark Theme** – Sleek dark background design for an immersive viewing experience.

## How to Run

1. **Clone or download** this repository to your local machine.
2. Open the `photoGallery.html` file directly in any modern web browser (Chrome, Firefox, Edge, etc.).

No build tools, package managers, or server setup required — it's a static HTML/CSS/JS project.

## Project Structure

```
Photo Gallery/
├── photoGallery.html          # Main HTML page
├── css/
│   ├── photoGallery.css       # Custom styles
│   └── lightbox.min.css       # Lightbox2 styles
├── js/
│   ├── photoGallery.js        # Category filter logic
│   └── lightbox-plus-jquery.min.js  # Lightbox2 + jQuery bundle
├── assets/                    # Image assets (thumbnails and full-size)
└── README.md
```

## Technologies Used

- HTML5
- CSS3 (Grid, Transitions, Filters)
- JavaScript (Vanilla)
- Lightbox2 (with jQuery)
