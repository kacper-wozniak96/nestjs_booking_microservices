# Reservation API

A robust and modular API built with NestJS, designed for handling reservation workflows with a focus on scalability, maintainability, and security. The architecture leverages microservices, containerization, and industry-standard libraries to ensure seamless integration and high availability.

## Features

- **Reservation Management**: Create and manage reservations through a RESTful interface.
- **Microservices Architecture**: Decoupled services for enhanced scalability and resilience.
- **Authentication & Authorization**: Secure access via JWT-based authentication.
- **Email Notifications**: Automated email handling through Nodemailer.
- **Validation**: Data validation and parsing using Zod.
- **Payments**: Integrated Stripe support for handling transactions.
- **Database**: MongoDB for flexible and performant data storage.
- **Containerized Deployment**: Docker-based environment for both development and production.

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Microservices**: Native NestJS microservice architecture
- **Containerization**: Docker, Docker Compose
- **Email Service**: Nodemailer
- **Validation**: Joi
- **Authentication**: JWT (JSON Web Tokens)
- **Payments**: Stripe
- **Database**: MongoDB (with Mongoose)

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Stripe Account](https://stripe.com/)

### Environment Configuration

Create a `.env` file in the root directory and configure the following variables:

### 1. Auth Service

Handles authentication, JWT issuance, and user identity validation.

**.env**
```env
MONGODB_URI=mongodb://user:pass@mongo:27017/sleepr?authSource=admin
JWT_SECRET=your_jwtsecret
JWT_EXPIRATION=3600
PORT=3001
RABBITMQ_URI=amqp://user:pass@rabbitmq:5672
```

### 2. Notification Service

Responsible for sending email notifications using OAuth2-authenticated SMTP and handling user communication flows.

**.env**
```env
PORT=3004
GOOGLE_OAUTH_CLIENT_ID=your_google_client_id
GOOGLE_OAUTH_CLIENT_SECRET=your_google_client_secret
GOOGLE_OAUTH_REFRESH_TOKEN=your_refresh_token
SMTP_USER=your_email@example.com
RABBITMQ_URI=amqp://user:pass@rabbitmq:5672
```

### 3. Reservation Service

Handles reservation logic.

**.env**
```env
MONGODB_URI=mongodb://user:pass@mongo:27017/sleepr?authSource=admin
PORT=3000
RABBITMQ_URI=amqp://user:pass@rabbitmq:5672
```

### 4. Payments Service

Manages Stripe transactions and payment confirmation logic.

**.env**
```env
PORT=3003
STRIPE_SECRET_KEY=your_stripe_secret_key
RABBITMQ_URI=amqp://user:pass@rabbitmq:5672
```
