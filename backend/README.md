# Plant E-Commerce Backend

Spring Boot backend API for the plant e-commerce website.

## Setup

### Prerequisites
- Java 17+
- Maven 3.6+
- MySQL 8.0+

### Installation

1. Create database:
```sql
CREATE DATABASE plant_ecommerce;
```

2. Update `application.yml`:
```yaml
datasource:
  url: jdbc:mysql://localhost:3306/plant_ecommerce
  username: root
  password: your_password
```

3. Install dependencies:
```bash
mvn clean install
```

4. Run the application:
```bash
mvn spring-boot:run
```

The API will run on `http://localhost:8080/api`

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/category/{category}` - Get products by category
- `POST /api/products` - Create new product
- `PUT /api/products/{id}` - Update product

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

## Database Schema

See `database/schema.sql` for complete schema.

## Key Features

- RESTful APIs for products, orders, users
- JWT-based authentication
- Password encryption with BCrypt
- JPA/Hibernate ORM
- CORS enabled

## Next Steps

- Implement JWT token generation
- Add order management endpoints
- Implement cart operations
- Add payment integration
- Add admin endpoints
