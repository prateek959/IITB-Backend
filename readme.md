prateek959: create readme file for every endpoint with example

Workspace: Collecting workspace informationHere is a README file documenting the endpoints for your project:

```markdown
# API Documentation

## User Endpoints

### Register User
- **URL:** `/user/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "JohnDoe",
    "email": "john@example.com",
    "password": "password123",
    "role": "member"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "User register successfully"
  }
  ```

### Login User
- **URL:** `/user/login`
- **Method:** `POST`
- **Description:** Login a user.
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "Login successful",
    "token": "jwt_token_here"
  }
  ```

## Library Endpoints

### Add Book
- **URL:** `/library/add`
- **Method:** `POST`
- **Description:** Add a new book to the library.
- **Request Body:**
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "publicationYear": "2023",
    "status": "available"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "Book created Successfully"
  }
  ```

### Update Book
- **URL:** `/library/update/:id`
- **Method:** `PUT`
- **Description:** Update book details.
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "publicationYear": "2024",
    "status": "borrowed"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "Book updated Successfully"
  }
  ```

### Delete Book
- **URL:** `/library/delete/:id`
- **Method:** `DELETE`
- **Description:** Delete a book from the library.
- **Response:**
  ```json
  {
    "msg": "Book Deleted successfully"
  }
  ```

### Register User (Librarian)
- **URL:** `/library/user/add`
- **Method:** `POST`
- **Description:** Register a new user by librarian.
- **Request Body:**
  ```json
  {
    "username": "JaneDoe",
    "email": "jane@example.com",
    "password": "password123",
    "role": "member"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "User register successfully"
  }
  ```

### Get User
- **URL:** `/library/user/:id`
- **Method:** `GET`
- **Description:** Get user details by ID.
- **Response:**
  ```json
  {
    "_id": "user_id_here",
    "username": "JaneDoe",
    "email": "jane@example.com",
    "role": "member",
    "BookId": []
  }
  ```

### Update User
- **URL:** `/library/user/:id`
- **Method:** `PUT`
- **Description:** Update user details.
- **Request Body:**
  ```json
  {
    "username": "UpdatedName",
    "email": "updated@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "User updated Successfully"
  }
  ```

### Delete User
- **URL:** `/library/user/:id`
- **Method:** `DELETE`
- **Description:** Delete a user.
- **Response:**
  ```json
  {
    "msg": "User deleted successfully"
  }
  ```

## Book Endpoints

### Borrow Book
- **URL:** `/book/borrow/:id`
- **Method:** `POST`
- **Description:** Borrow a book.
- **Response:**
  ```json
  {
    "msg": "Book borrow successfully"
  }
  ```

### Return Book
- **URL:** `/book/return/:id`
- **Method:** `POST`
- **Description:** Return a borrowed book.
- **Response:**
  ```json
  {
    "msg": "Book return successfully"
  }
  ```

## Setup

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with the following content:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET_KEY=your_jwt_secret_key
   PORT=3003
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

## License

This project is licensed under the ISC License.
```

This README file provides detailed documentation for each endpoint in your project, including example request bodies and responses.
This README file provides detailed documentation for each endpoint in your project, including example request bodies and responses.