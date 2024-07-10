# Expense Tracker Application

## Overview

This expense tracker is a full-stack application designed to help users manage their personal finances. It allows users to record, categorize, and analyze their expenses over time.

## Features

- User authentication (registration and login)
- Add, edit, and delete expenses
- Categorize expenses
- Filter expenses by date range and category
- Generate expense summaries and reports
- RESTful API for backend operations
- React-based frontend for user interaction

## Technology Stack

- Backend: Node.js with Express.js
- Database: PostgreSQL with TypeORM
- Frontend: React with TypeScript
- Authentication: JSON Web Tokens (JWT)
- Testing: Jest with Supertest

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your PostgreSQL database
4. Create a `.env` file in the root directory with the following contents:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/expense_tracker
   JWT_SECRET=your_jwt_secret_here
   ```
5. Run database migrations:
   ```
   npm run typeorm migration:run
   ```
6. Start the server:
   ```
   npm start
   ```

## Running Tests

Run the test suite with:

```
npm test
```

## Design Choices

1. **TypeORM for Database Interactions**:
   We chose TypeORM as our ORM (Object-Relational Mapping) tool for its excellent TypeScript support and ease of use with PostgreSQL. It provides a robust way to define entity relationships and perform database operations.

2. **JWT for Authentication**:
   JSON Web Tokens were selected for authentication due to their stateless nature, which allows for better scalability. They also provide a secure way to transmit information between parties as a JSON object.

3. **Express.js for API Framework**:
   Express.js was chosen for its minimalist approach and flexibility. It allows for easy setup of middleware and routing, which is crucial for our RESTful API design.

4. **PostgreSQL as Database**:
   PostgreSQL was selected for its robustness, support for complex queries, and excellent performance with relational data. It's particularly well-suited for financial applications where data integrity is crucial.

5. **React for Frontend**:
   React was chosen for its component-based architecture, which allows for reusable UI elements and efficient rendering. Its virtual DOM implementation also provides excellent performance for our dynamic user interface.

6. **TypeScript**:
   TypeScript is used throughout the project to provide static typing, which helps catch errors early in the development process and improves code maintainability.

7. **Jest for Testing**:
   Jest was selected as our testing framework due to its simplicity and powerful mocking capabilities. It integrates well with TypeScript and provides good coverage reporting.

8. **RESTful API Design**:
   We implemented a RESTful API to ensure a clear separation of concerns between the frontend and backend. This design choice allows for easier scalability and potential future integration with mobile applications or third-party services.

9. **Modular Architecture**:
   The application is structured in a modular way, with clear separation between entities, services, controllers, and routes. This design choice enhances maintainability and allows for easier testing of individual components.

10. **Environment-based Configuration**:
    We use environment variables for configuration, allowing for easy deployment across different environments (development, testing, production) without code changes.

11. **Comprehensive Error Handling**:
    The application implements thorough error handling and validation, providing clear feedback to users and developers about what went wrong and why.

## Future Improvements

- Implement data visualization for expense trends
- Add support for multiple currencies
- Implement budget setting and tracking features
- Enhance security with two-factor authentication
- Develop a mobile application using React Native

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.# Expense Tracker Application

## Overview

This expense tracker is a full-stack application designed to help users manage their personal finances. It allows users to record, categorize, and analyze their expenses over time.

## Features

- User authentication (registration and login)
- Add, edit, and delete expenses
- Categorize expenses
- Filter expenses by date range and category
- Generate expense summaries and reports
- RESTful API for backend operations
- React-based frontend for user interaction

## Technology Stack

- Backend: Node.js with Express.js
- Database: PostgreSQL with TypeORM
- Frontend: React with TypeScript
- Authentication: JSON Web Tokens (JWT)
- Testing: Jest with Supertest

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your PostgreSQL database
4. Create a `.env` file in the root directory with the following contents:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/expense_tracker
   JWT_SECRET=your_jwt_secret_here
   ```
5. Run database migrations:
   ```
   npm run typeorm migration:run
   ```
6. Start the server:
   ```
   npm start
   ```

## Running Tests

Run the test suite with:

```
npm test
```

## Design Choices

1. **TypeORM for Database Interactions**:
   We chose TypeORM as our ORM (Object-Relational Mapping) tool for its excellent TypeScript support and ease of use with PostgreSQL. It provides a robust way to define entity relationships and perform database operations.

2. **JWT for Authentication**:
   JSON Web Tokens were selected for authentication due to their stateless nature, which allows for better scalability. They also provide a secure way to transmit information between parties as a JSON object.

3. **Express.js for API Framework**:
   Express.js was chosen for its minimalist approach and flexibility. It allows for easy setup of middleware and routing, which is crucial for our RESTful API design.

4. **PostgreSQL as Database**:
   PostgreSQL was selected for its robustness, support for complex queries, and excellent performance with relational data. It's particularly well-suited for financial applications where data integrity is crucial.

5. **React for Frontend**:
   React was chosen for its component-based architecture, which allows for reusable UI elements and efficient rendering. Its virtual DOM implementation also provides excellent performance for our dynamic user interface.

6. **TypeScript**:
   TypeScript is used throughout the project to provide static typing, which helps catch errors early in the development process and improves code maintainability.

7. **Jest for Testing**:
   Jest was selected as our testing framework due to its simplicity and powerful mocking capabilities. It integrates well with TypeScript and provides good coverage reporting.

8. **RESTful API Design**:
   We implemented a RESTful API to ensure a clear separation of concerns between the frontend and backend. This design choice allows for easier scalability and potential future integration with mobile applications or third-party services.

9. **Modular Architecture**:
   The application is structured in a modular way, with clear separation between entities, services, controllers, and routes. This design choice enhances maintainability and allows for easier testing of individual components.

10. **Environment-based Configuration**:
    We use environment variables for configuration, allowing for easy deployment across different environments (development, testing, production) without code changes.

11. **Comprehensive Error Handling**:
    The application implements thorough error handling and validation, providing clear feedback to users and developers about what went wrong and why.

## Future Improvements

- Implement data visualization for expense trends
- Add support for multiple currencies
- Implement budget setting and tracking features
- Enhance security with two-factor authentication
- Develop a mobile application using React Native