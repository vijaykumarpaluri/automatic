# Plant E-Commerce Frontend

React.js frontend for the plant e-commerce website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
REACT_APP_API_URL=http://localhost:8080/api
```

3. Start development server:
```bash
npm start
```

The app will run on `http://localhost:3000`

## Project Structure

```
src/
├── components/     # Reusable components (Header, Footer)
├── pages/          # Page components (Home, ProductList, Cart, etc.)
├── App.js          # Main app component with routing
└── index.js        # Entry point
```

## Features Implemented

- ✅ Responsive header and footer
- ✅ Home page with hero section and features
- ✅ Product listing page with category filters
- ✅ Placeholder pages for product detail, cart, checkout, login, signup, profile

## Next Steps

- Connect to Spring Boot API
- Implement cart functionality
- Implement authentication
- Add product detail pages
- Implement checkout flow
