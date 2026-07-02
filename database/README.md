# Database Setup

## MySQL Installation

1. Install MySQL Server (if not already installed)
2. Start MySQL service
3. Create database:

```bash
mysql -u root -p
```

4. Run the schema:

```bash
mysql -u root -p plant_ecommerce < schema.sql
```

## Database Configuration

Update `backend/src/main/resources/application.yml`:

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/plant_ecommerce
    username: root
    password: your_mysql_password
```

## Tables

1. **users** - User accounts and profiles
2. **products** - Plant products catalog
3. **orders** - Customer orders
4. **order_items** - Items in orders
5. **carts** - Shopping carts
6. **cart_items** - Items in carts

## Sample Data

The schema includes sample plant products for testing.
