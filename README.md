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
- **Validation**: Zod
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

```env
MONGO_URI=mongodb://mongo:27017/reservations
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
