# React Router App

A React application with routing functionality built with React Router DOM and Vite.

## Features

- **Multiple Routes**: Home, About, Products, Contact pages
- **Dynamic Routes**: Product detail pages with URL parameters
- **Navigation**: Sticky navbar with active link highlighting
- **404 Page**: Custom not found page for invalid routes
- **Programmatic Navigation**: Use navigate hooks for navigation
- **Layout Component**: Shared layout with navigation and footer

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
react-router-app/
├── src/
│   ├── components/
│   │   ├── Layout.jsx       # Main layout with navigation
│   │   └── Layout.css
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact page with form
│   │   ├── Products.jsx     # Products listing page
│   │   ├── ProductDetail.jsx # Dynamic product detail page
│   │   ├── NotFound.jsx     # 404 page
│   │   └── Page.css         # Shared page styles
│   ├── App.jsx              # Main app with routes
│   ├── App.css
│   ├── main.jsx             # Entry point with BrowserRouter
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Routes

- `/` - Home page
- `/about` - About page
- `/products` - Products listing
- `/products/:id` - Product detail (dynamic route)
- `/contact` - Contact page
- `*` - 404 Not Found page

## Technologies Used

- React 19
- React Router DOM 7
- Vite
- JavaScript (ES6+)

