# KMS API - Knowledge Management System

A comprehensive REST API for a Knowledge Management System built with Node.js, Express, TypeScript, and PostgreSQL. This system provides Q&A functionality, real-time chat, AI integration, file management, and comprehensive user management.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Deployment](#deployment)
- [AWS S3 Integration](#aws-s3-integration)
- [WebSocket Integration](#websocket-integration)
- [Contributing](#contributing)

## ✨ Features

### Core Features
- **User Management**: Multi-role authentication (Admin, Creator, User) with division-based access
- **Question & Answer System**: Complete Q&A workflow with attachments, comments, and likes
- **Real-time Chat**: WebSocket-powered messaging system
- **AI Integration**: AI-powered conversations and responses
- **File Management**: Support for attachments with AWS S3 integration
- **Notification System**: Real-time notifications for user interactions
- **Search & Tagging**: Question categorization and search functionality
- **Feedback System**: Question feedback and rating system

### Additional Features
- **Profile Management**: User profile with avatar upload
- **Task Scheduling**: Automated background tasks with node-cron
- **Email Integration**: Transactional emails with Nodemailer
- **Security**: JWT authentication, password hashing, CORS, and Helmet
- **File Validation**: Comprehensive file upload validation and security

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **Real-time**: Socket.io
- **File Upload**: Multer + AWS S3
- **Email**: Nodemailer
- **Scheduling**: node-cron
- **Testing**: Jest + Supertest

### Infrastructure
- **Database**: PostgreSQL 16
- **File Storage**: AWS S3 + CloudFront
- **Containerization**: Docker & Docker Compose
- **Process Management**: PM2 (recommended for production)

## 📋 Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- Docker & Docker Compose (optional)
- AWS Account (for S3 integration)
- SMTP Server (for email functionality)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.development
   # Edit .env.development with your configuration
   ```

4. **Start PostgreSQL database**
   ```bash
   # Using Docker Compose
   docker-compose up -d db
   
   # Or install PostgreSQL locally
   ```

5. **Run database migrations**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Configuration

Create `.env.development` file with the following variables:

**⚠️ SECURITY WARNING: Never commit your `.env` files to version control. Add them to `.gitignore`!**

```env
# Server Configuration
NODE_ENV=development
PORT=4700

# Database Configuration
DATABASE_URL="postgresql://your_db_user:your_db_password@localhost:5432/your_database_name"

# PostgreSQL Docker Configuration (for docker-compose)
POSTGRES_DB=your_database_name
POSTGRES_USER=your_db_user
POSTGRES_PASSWORD=your_secure_password
POSTGRES_PORT=5432

# JWT Configuration
SECRET_KEY_GENERATE_TOKEN=your-super-secret-generate-key
SECRET_KEY_ACCESS_TOKEN=your-super-secret-access-key

# Email Configuration (Nodemailer)
TRANSPORTER_SERVICE=gmail
TRANSPORTER_USER=your-email@gmail.com
TRANSPORTER_KEY=your-app-password

# AWS S3 Configuration (Optional)
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET_NAME=your-bucket-name
AWS_CLOUDFRONT_DOMAIN=https://your-cloudfront-domain.com

# AI Integration (Optional)
OPENROUTER_API_KEY=your-openrouter-api-key

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

## 🗄 Database Setup

### Using Docker Compose (Recommended)

The docker-compose.yaml file is configured to use environment variables from your `.env.development` file.

```bash
# Make sure your .env.development file has the PostgreSQL variables set
# Start PostgreSQL container
docker-compose up -d db

# Run migrations and seed data
npx prisma migrate dev
npx prisma db seed
```

**Required Environment Variables:** Make sure your `.env.development` file contains:
- `POSTGRES_DB` - Database name
- `POSTGRES_USER` - Database username  
- `POSTGRES_PASSWORD` - Database password
- `POSTGRES_PORT` - Database port (usually 5432)

### Manual PostgreSQL Setup

1. Install PostgreSQL
2. Create database:
   ```sql
   CREATE DATABASE your_database_name;
   CREATE USER your_db_user WITH PASSWORD 'your_secure_password';
   GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_db_user;
   ```
3. Run migrations:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

### Database Schema Overview

The system includes the following main entities:
- **Users**: Multi-role user system with divisions
- **Questions**: Q&A system with status tracking
- **Answers**: Responses to questions with acceptance workflow
- **Comments**: Nested comments on questions and answers
- **Attachments**: File uploads linked to questions/answers/comments
- **Notifications**: Real-time user notifications
- **Chat Messages**: Real-time messaging system
- **AI Conversations**: AI-powered chat conversations

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
Server runs on http://localhost:4700

### Production Mode
```bash
npm run build
npm run serve
```

### Using Docker
```bash
# Build and run all services
docker-compose up --build

# Run in background
docker-compose up -d
```

## 📚 API Documentation

### Base URL
```
http://localhost:4700/api
```

### Authentication
This API uses **cookie-based authentication** with JWT tokens. The token is automatically handled through HTTP cookies using the `verifyUserToken` middleware.

**For Frontend Integration:**
- Use `withCredentials: true` in Axios requests
- Use `credentials: 'include'` in fetch requests
- No need to manually handle Authorization headers

**Example with Axios:**
```javascript
// Configure Axios instance with credentials
const api = axios.create({
  baseURL: 'http://localhost:4700/api',
  withCredentials: true
});

// Make authenticated requests
const response = await api.get('/profile');
```

**Example with Fetch:**
```javascript
// Make authenticated requests with fetch
const response = await fetch('http://localhost:4700/api/profile', {
  method: 'GET',
  credentials: 'include'
});
```

**Token Handling:**
- Tokens are stored in HTTP-only cookies for security
- Tokens are automatically sent with requests when using `withCredentials: true`
- The `verifyUserToken` middleware extracts tokens from `req.cookies`
- No manual token management required on the frontend

### Standard Response Format
All API responses follow this structure:
```json
{
  "error": boolean,
  "message": string,
  "data": object | array
}
```

### Error Response Format
```json
{
  "error": true,
  "message": "Error description",
  "stack": "Error stack trace (development only)"
}
```

### Common HTTP Status Codes
- **200**: Success
- **201**: Created successfully
- **400**: Bad Request (validation errors, missing parameters)
- **401**: Unauthorized (invalid/missing token)
- **403**: Forbidden (insufficient permissions)
- **404**: Not Found (resource doesn't exist)
- **409**: Conflict (duplicate data)
- **500**: Internal Server Error

### Common Error Examples

**Validation Error (400):**
```json
{
  "error": true,
  "message": "Email is required"
}
```

**Authentication Error (401):**
```json
{
  "error": true,
  "message": "No token provided"
}
```

**Authorization Error (403):**
```json
{
  "error": true,
  "message": "Insufficient permissions"
}
```

**Not Found Error (404):**
```json
{
  "error": true,
  "message": "Question not found"
}
```

**Duplicate Error (409):**
```json
{
  "error": true,
  "message": "Admin already exists"
}
```

---

## 🔐 Authentication Endpoints

### Register User
**POST** `/api/auth/register/user`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Validation Rules:**
- `email`: Required, must be valid email format, must be unique

**Response (200):**
```json
{
  "error": false,
  "message": "Registration email sent successfully",
  "data": {}
}
```

### Register Creator
**POST** `/api/auth/register/creator`

**Request Body:**
```json
{
  "email": "creator@example.com"
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Registration email sent successfully",
  "data": {}
}
```

### Register Admin
**POST** `/api/auth/register/admin`

**Request Body:**
```json
{
  "email": "admin@example.com"
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Success",
  "data": {}
}
```

### Create User Account (Complete Registration)
**POST** `/api/auth/create/user`

**Request Body:**
```json
{
  "token": "jwt_registration_token",
  "first_name": "John",
  "last_name": "Doe",
  "username": "johndoe",
  "password": "securePassword123",
  "division_id": 1
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "User account created successfully",
  "data": {
    "user_id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "username": "johndoe",
    "role": {
      "role_id": 2,
      "name": "user"
    },
    "division": {
      "id": 1,
      "division_name": "IT Department"
    }
  }
}
```

### User Login
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Login successful",
  "data": {
    "user": {
      "user_id": 1,
      "email": "user@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "username": "johndoe",
      "profile_picture": "https://s3.amazonaws.com/bucket/profiles/profile-123.jpg",
      "role": {
        "role_id": 2,
        "name": "user"
      },
      "division": {
        "id": 1,
        "division_name": "IT Department"
      }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Keep Login (Verify Token)
**GET** `/api/auth/`
*Requires Authentication*

**Response (200):**
```json
{
  "error": false,
  "message": "Token is valid",
  "data": {
    "user": {
      "user_id": 1,
      "email": "user@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "username": "johndoe",
      "profile_picture": "https://s3.amazonaws.com/bucket/profiles/profile-123.jpg",
      "role": {
        "role_id": 2,
        "name": "user"
      },
      "division": {
        "id": 1,
        "division_name": "IT Department"
      }
    }
  }
}
```

### Change Password
**PATCH** `/api/auth/change-password`
*Requires Authentication*

**Request Body:**
```json
{
  "current_password": "oldPassword123",
  "new_password": "newPassword456"
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Password changed successfully",
  "data": {}
}
```

### Forgot Password
**POST** `/api/auth/forget`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Password reset email sent",
  "data": {}
}
```

### Logout
**GET** `/api/auth/logout`

**Response (200):**
```json
{
  "error": false,
  "message": "Logged out successfully",
  "data": {}
}
```

---

## ❓ Question Management

### Get All Questions
**GET** `/api/question/`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): PENDING, ASSIGNED, ANSWERED, CLOSED
- `tag_ids` (optional): Comma-separated tag IDs
- `search` (optional): Search term

**Response (200):**
```json
{
  "error": false,
  "message": "Questions retrieved successfully",
  "data": {
    "questions": [
      {
        "question_id": 1,
        "title": "How to implement JWT authentication?",
        "content": "I need help with implementing JWT authentication in Node.js",
        "status": "PENDING",
        "is_published": true,
        "created_at": "2024-01-15T10:00:00Z",
        "due_date": "2024-01-20T10:00:00Z",
        "collaborator_type": "PERSONAL",
        "creator": {
          "user_id": 1,
          "first_name": "John",
          "last_name": "Doe",
          "username": "johndoe",
          "profile_picture": "https://s3.amazonaws.com/bucket/profiles/profile-123.jpg"
        },
        "collaborator": {
          "user_id": 2,
          "first_name": "Jane",
          "last_name": "Smith",
          "username": "janesmith",
          "profile_picture": null
        },
        "tags": [
          {
            "tag_id": 1,
            "name": "javascript"
          },
          {
            "tag_id": 2,
            "name": "authentication"
          }
        ],
        "answers_count": 3,
        "likes_count": 2,
        "comments_count": 1,
        "attachments": [
          {
            "attachment_id": 1,
            "file_name": "jwt-diagram.png",
            "file_path": "https://s3.amazonaws.com/bucket/attachments/jwt-diagram.png"
          }
        ]
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_items": 48,
      "items_per_page": 10
    }
  }
}
```

### Get Question Details
**GET** `/api/question/details/:question_id`

**Response (200):**
```json
{
  "error": false,
  "message": "Question details retrieved successfully",
  "data": {
    "question": {
      "question_id": 1,
      "title": "How to implement JWT authentication?",
      "content": "I need help with implementing JWT authentication in Node.js. I've tried several approaches but keep running into issues with token validation.",
      "status": "ANSWERED",
      "is_published": true,
      "created_at": "2024-01-15T10:00:00Z",
      "updated_at": "2024-01-16T14:30:00Z",
      "due_date": "2024-01-20T10:00:00Z",
      "collaborator_type": "PERSONAL",
      "creator": {
        "user_id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "username": "johndoe",
        "profile_picture": "https://s3.amazonaws.com/bucket/profiles/profile-123.jpg",
        "division": {
          "id": 1,
          "division_name": "IT Department"
        }
      },
      "collaborator": {
        "user_id": 2,
        "first_name": "Jane",
        "last_name": "Smith",
        "username": "janesmith",
        "profile_picture": null
      },
      "tags": [
        {
          "tag_id": 1,
          "name": "javascript"
        },
        {
          "tag_id": 2,
          "name": "authentication"
        }
      ],
      "attachments": [
        {
          "attachment_id": 1,
          "file_name": "jwt-diagram.png",
          "file_path": "https://s3.amazonaws.com/bucket/attachments/jwt-diagram.png",
          "created_at": "2024-01-15T10:00:00Z"
        }
      ],
      "answers": [
        {
          "answer_id": 1,
          "content": "Here's how you can implement JWT authentication...",
          "is_accepted": true,
          "created_at": "2024-01-16T09:00:00Z",
          "updated_at": "2024-01-16T09:15:00Z",
          "user": {
            "user_id": 3,
            "first_name": "Bob",
            "last_name": "Wilson",
            "username": "bobwilson",
            "profile_picture": "https://s3.amazonaws.com/bucket/profiles/profile-456.jpg"
          },
          "likes_count": 5,
          "comments_count": 2,
          "attachments": [
            {
              "attachment_id": 2,
              "file_name": "jwt-example.js",
              "file_path": "https://s3.amazonaws.com/bucket/attachments/jwt-example.js"
            }
          ]
        }
      ],
      "comments": [
        {
          "comment_id": 1,
          "content": "This is a great question! I had the same issue.",
          "created_at": "2024-01-15T12:00:00Z",
          "parent_id": null,
          "user": {
            "user_id": 4,
            "first_name": "Alice",
            "last_name": "Brown",
            "username": "alicebrown",
            "profile_picture": null
          },
          "replies": []
        }
      ],
      "likes_count": 3,
      "user_has_liked": false,
      "user_has_saved": true
    }
  }
}
```

### Create Question
**POST** `/api/question/`
*Requires Authentication*
*Content-Type: multipart/form-data*

**Request Body:**
```json
{
  "title": "How to implement JWT authentication?",
  "content": "I need help with implementing JWT authentication in Node.js",
  "due_date": "2024-01-20T10:00:00Z",
  "collaborator_type": "PERSONAL",
  "collaborator_id": 2,
  "collaborator_division_id": null,
  "tag_ids": "[1, 2]",
  "attachments": "File upload (optional)"
}
```

**Response (201):**
```json
{
  "error": false,
  "message": "Question successfully created",
  "data": {
    "question_id": 1,
    "title": "How to implement JWT authentication?",
    "content": "I need help with implementing JWT authentication in Node.js",
    "status": "PENDING",
    "created_at": "2024-01-15T10:00:00Z",
    "attachments": [
      {
        "attachment_id": 1,
        "file_name": "jwt-diagram.png",
        "file_path": "https://s3.amazonaws.com/bucket/attachments/jwt-diagram.png"
      }
    ]
  }
}
```

### Edit Question
**PATCH** `/api/question/`
*Requires Authentication*
*Content-Type: multipart/form-data*

**Request Body:**
```json
{
  "question_id": 1,
  "title": "Updated: How to implement JWT authentication?",
  "content": "Updated content with more details...",
  "due_date": "2024-01-25T10:00:00Z",
  "tag_ids": "[1, 2, 3]",
  "attachments": "File upload (optional)"
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Question updated successfully",
  "data": {
    "question_id": 1,
    "title": "Updated: How to implement JWT authentication?",
    "content": "Updated content with more details...",
    "updated_at": "2024-01-16T14:30:00Z"
  }
}
```

### Like/Unlike Question
**POST** `/api/question/like`
*Requires Authentication*

**Request Body:**
```json
{
  "question_id": 1
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Question liked successfully",
  "data": {
    "liked": true,
    "likes_count": 4
  }
}
```

### Get Like Status
**GET** `/api/question/:question_id/like/status`
*Requires Authentication*

**Response (200):**
```json
{
  "error": false,
  "message": "Like status retrieved",
  "data": {
    "user_has_liked": true,
    "likes_count": 4
  }
}
```

### Add Comment
**POST** `/api/question/comment`
*Requires Authentication*
*Content-Type: multipart/form-data*

**Request Body:**
```json
{
  "question_id": 1,
  "content": "This is a great question!",
  "parent_id": null,
  "attachments": "File upload (optional)"
}
```

**Response (201):**
```json
{
  "error": false,
  "message": "Comment added successfully",
  "data": {
    "comment_id": 1,
    "content": "This is a great question!",
    "created_at": "2024-01-15T12:00:00Z",
    "parent_id": null
  }
}
```

### Save Question
**POST** `/api/question/save`
*Requires Authentication*

**Request Body:**
```json
{
  "question_id": 1
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Question saved successfully",
  "data": {
    "saved": true
  }
}
```

### Get All Tags
**GET** `/api/question/tags`

**Response (200):**
```json
{
  "error": false,
  "message": "Tags retrieved successfully",
  "data": {
    "tags": [
      {
        "tag_id": 1,
        "name": "javascript",
        "created_at": "2024-01-01T00:00:00Z"
      },
      {
        "tag_id": 2,
        "name": "authentication",
        "created_at": "2024-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Create New Tag
**POST** `/api/question/tags`

**Request Body:**
```json
{
  "name": "react"
}
```

**Response (201):**
```json
{
  "error": false,
  "message": "Tag created successfully",
  "data": {
    "tag_id": 3,
    "name": "react",
    "created_at": "2024-01-15T10:00:00Z"
  }
}
```

### Get Notifications
**GET** `/api/question/notifications`
*Requires Authentication*

**Response (200):**
```json
{
  "error": false,
  "message": "Notifications retrieved successfully",
  "data": {
    "notifications": [
      {
        "id": 1,
        "content": "Your question has been answered",
        "is_read": false,
        "created_at": "2024-01-16T09:00:00Z",
        "notification_type": "ANSWER_SUBMITTED",
        "question": {
          "question_id": 1,
          "title": "How to implement JWT authentication?"
        },
        "answer": {
          "answer_id": 1,
          "user": {
            "first_name": "Bob",
            "last_name": "Wilson"
          }
        }
      }
    ],
    "unread_count": 3
  }
}
```

---

## 💬 Answer Management

### Create Answer
**POST** `/api/answer/`
*Requires Authentication*
*Content-Type: multipart/form-data*

**Request Body:**
```json
{
  "question_id": 1,
  "content": "Here's how you implement JWT authentication...",
  "attachments": "File upload (optional)"
}
```

**Response (201):**
```json
{
  "error": false,
  "message": "Answer successfully created",
  "data": {}
}
```

### Edit Answer
**PATCH** `/api/answer/`
*Requires Authentication*
*Content-Type: multipart/form-data*

**Request Body:**
```json
{
  "answer_id": 1,
  "content": "Updated answer content...",
  "attachments": "File upload (optional)"
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Answer updated successfully",
  "data": {
    "answer_id": 1,
    "content": "Updated answer content...",
    "updated_at": "2024-01-16T14:30:00Z"
  }
}
```

### Accept Answer
**POST** `/api/answer/accept`
*Requires Authentication*

**Request Body:**
```json
{
  "answer_id": 1
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Answer accepted successfully",
  "data": {
    "answer_id": 1,
    "is_accepted": true
  }
}
```

---

## 👤 Profile Management

### Get User Profile
**GET** `/api/profile/`
*Requires Authentication*

**Response (200):**
```json
{
  "error": false,
  "message": "Profile retrieved successfully",
  "data": {
    "user": {
      "user_id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "username": "johndoe",
      "email": "john@example.com",
      "profile_picture": "https://s3.amazonaws.com/bucket/profiles/profile-123.jpg",
      "created_at": "2024-01-01T00:00:00Z",
      "role": {
        "role_id": 2,
        "name": "user"
      },
      "division": {
        "id": 1,
        "division_name": "IT Department"
      },
      "statistics": {
        "questions_created": 15,
        "answers_submitted": 23,
        "accepted_answers": 8,
        "total_likes_received": 45
      }
    }
  }
}
```

### Update Profile
**PATCH** `/api/profile/`
*Requires Authentication*

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Smith",
  "username": "johnsmith"
}
```

**Response (200):**
```json
{
  "error": false,
  "message": "Profile updated successfully",
  "data": {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Smith",
    "username": "johnsmith",
    "updated_at": "2024-01-16T14:30:00Z"
  }
}
```

---

## 🤖 AI Integration

### Start AI Conversation
**POST** `/api/ai/conversation`
*Requires Authentication*

**Request Body:**
```json
{
  "title": "Help with React Hooks",
  "prompt": "Can you explain React useEffect hook?"
}
```

**Response (201):**
```json
{
  "error": false,
  "message": "AI conversation started",
  "data": {
    "conversation": {
      "conversation_id": 1,
      "title": "Help with React Hooks",
      "created_at": "2024-01-15T10:00:00Z"
    },
    "message": {
      "message_id": 1,
      "prompt": "Can you explain React useEffect hook?",
      "response": "The useEffect hook is used for side effects in React functional components...",
      "ai_model": "gpt-3.5-turbo",
      "created_at": "2024-01-15T10:00:00Z"
    }
  }
}
```

### Get User Conversations
**GET** `/api/ai/conversations`
*Requires Authentication*

**Response (200):**
```json
{
  "error": false,
  "message": "Conversations retrieved successfully",
  "data": {
    "conversations": [
      {
        "conversation_id": 1,
        "title": "Help with React Hooks",
        "created_at": "2024-01-15T10:00:00Z",
        "updated_at": "2024-01-15T10:30:00Z",
        "message_count": 5,
        "last_message": {
          "prompt": "How do I use useCallback?",
          "created_at": "2024-01-15T10:30:00Z"
        }
      }
    ]
  }
}
```

---

## 💬 Real-time Chat

### Get Chat Messages
**GET** `/api/chat/messages`
*Requires Authentication*

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Messages per page (default: 50)

**Response (200):**
```json
{
  "error": false,
  "message": "Chat messages retrieved successfully",
  "data": {
    "messages": [
      {
        "message_id": 1,
        "content": "Hello everyone!",
        "message_type": "text",
        "created_at": "2024-01-15T10:00:00Z",
        "user": {
          "user_id": 1,
          "first_name": "John",
          "last_name": "Doe",
          "username": "johndoe",
          "profile_picture": "https://s3.amazonaws.com/bucket/profiles/profile-123.jpg"
        },
        "reply_to": null
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 3,
      "total_items": 125
    }
  }
}
```

### Send Chat Message
**POST** `/api/chat/message`
*Requires Authentication*

**Request Body:**
```json
{
  "content": "Hello everyone!",
  "message_type": "text",
  "reply_to_id": null
}
```

**Response (201):**
```json
{
  "error": false,
  "message": "Message sent successfully",
  "data": {
    "message_id": 1,
    "content": "Hello everyone!",
    "message_type": "text",
    "created_at": "2024-01-15T10:00:00Z",
    "reply_to_id": null
  }
}
```

---

## 📎 File Management

### Upload Attachment
**POST** `/api/attachment/`
*Requires Authentication*
*Content-Type: multipart/form-data*

**Request Body:**
```
attachments: File(s)
question_id: 1 (optional)
answer_id: 1 (optional)
comment_id: 1 (optional)
```

**Response (201):**
```json
{
  "error": false,
  "message": "Attachment uploaded successfully",
  "data": {
    "attachments": [
      {
        "attachment_id": 1,
        "file_name": "document.pdf",
        "file_path": "https://s3.amazonaws.com/bucket/attachments/attachment-123-document.pdf",
        "created_at": "2024-01-15T10:00:00Z"
      }
    ]
  }
}
```

---

## 👨‍💼 Admin Endpoints

### Get All Users
**GET** `/api/admin/users`
*Requires Admin Authentication*

**Response (200):**
```json
{
  "error": false,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "user_id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "username": "johndoe",
        "email": "john@example.com",
        "is_active": true,
        "created_at": "2024-01-01T00:00:00Z",
        "role": {
          "role_id": 2,
          "name": "user"
        },
        "division": {
          "id": 1,
          "division_name": "IT Department"
        }
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_items": 48
    }
  }
}
```

### Get System Statistics
**GET** `/api/admin/statistics`
*Requires Admin Authentication*

**Response (200):**
```json
{
  "error": false,
  "message": "Statistics retrieved successfully",
  "data": {
    "total_users": 150,
    "total_questions": 245,
    "total_answers": 523,
    "pending_questions": 12,
    "answered_questions": 198,
    "closed_questions": 35,
    "active_users_today": 45,
    "questions_this_month": 67,
    "answers_this_month": 134
  }
}
```

## 📁 Project Structure

```
api/
├── src/
│   ├── controllers/          # Request handlers
│   │   ├── auth.controller.ts
│   │   ├── question.controller.ts
│   │   ├── answer.controller.ts
│   │   ├── ai.controller.ts
│   │   ├── chat.controller.ts
│   │   └── profile.controller.ts
│   ├── services/            # Business logic
│   │   ├── auth.service/
│   │   ├── question.service/
│   │   ├── answer.service/
│   │   ├── ai.service/
│   │   └── chat.service/
│   ├── routers/            # Route definitions
│   │   ├── auth.routers/
│   │   ├── question.routers/
│   │   ├── answer.routers/
│   │   └── index.ts
│   ├── middleware/         # Custom middleware
│   │   ├── auth.middleware.ts
│   │   ├── uploader.ts
│   │   ├── uploader.s3.ts
│   │   └── verify.token.ts
│   ├── utils/             # Utility functions
│   │   ├── jwt.ts
│   │   ├── hash.password.ts
│   │   ├── s3.ts
│   │   ├── scheduler.ts
│   │   └── web.socket.ts
│   ├── config/           # Configuration files
│   │   └── aws.ts
│   ├── tests/           # Test files
│   │   ├── index.test.ts
│   │   └── setup.ts
│   ├── app.ts          # Express app setup
│   ├── index.ts        # Application entry point
│   └── prisma.ts       # Prisma client
├── prisma/
│   ├── schema.prisma   # Database schema
│   ├── seed.ts        # Database seeding
│   └── migrations/    # Database migrations
├── docker-compose.yaml
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## 🧪 Testing

The project includes Jest testing setup with TypeScript support.

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- Unit tests for services and utilities
- Integration tests for API endpoints
- Mock implementations for external services

## 🚀 Deployment

### Production Environment Setup

1. **Set up production environment variables**
   ```bash
   cp .env.development .env.production
   ```

2. **Build the application**
   ```bash
   npm run build
   ```

3. **Run database migrations**
   ```bash
   npx prisma migrate deploy
   ```

4. **Start the production server**
   ```bash
   npm run serve
   ```

### Docker Deployment

```bash
# Build production image
docker build -t kms-api .

# Run with Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

### PM2 Process Management

```bash
# Install PM2 globally
npm install -g pm2

# Start application with PM2
pm2 start dist/index.js --name "kms-api"

# Monitor application
pm2 monit

# View logs
pm2 logs kms-api
```

### Environment-specific Scripts

```json
{
  "scripts": {
    "dev": "NODE_ENV=development ts-node-dev src/index.ts",
    "build": "tsc && tsc-alias",
    "serve": "NODE_ENV=production node dist/index.js",
    "test": "jest",
    "prisma:generate": "npx prisma generate",
    "prisma:migrate": "npx prisma migrate dev",
    "prisma:deploy": "npx prisma migrate deploy",
    "prisma:seed": "npx prisma db seed"
  }
}
```

## ☁️ AWS S3 Integration

The system supports AWS S3 integration for file storage. See `AWS_S3_INTEGRATION_GUIDE.md` for detailed setup instructions.

### Key Features:
- Automatic file upload to S3
- CloudFront integration for CDN
- Signed URLs for secure access
- File type validation and security
- Automatic cleanup of temporary files

### Quick Setup:
1. Configure AWS credentials in environment
2. Replace `uploader` middleware with `uploaderS3`
3. Update file URL handling in frontend

## 🔌 WebSocket Integration

Real-time features powered by Socket.io:

### Supported Events:
- User authentication
- Chat messages
- Notifications
- Online user tracking
- Question/answer updates

### Client Connection:
```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:4700', {
  withCredentials: true
});

// Listen for chat messages
socket.on('newMessage', (message) => {
  console.log('New message:', message);
});

// Send a message
socket.emit('sendMessage', {
  content: 'Hello World',
  messageType: 'text'
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines:
- Follow TypeScript best practices
- Write tests for new features
- Use conventional commit messages
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📝 API Rate Limiting

Consider implementing rate limiting for production:

```bash
npm install express-rate-limit
```

## 🔒 Security Considerations

- JWT tokens for authentication
- Password hashing with bcrypt
- File upload validation and sanitization
- CORS configuration for frontend integration
- Helmet.js for security headers
- Input validation with express-validator
- SQL injection protection with Prisma ORM

## 📊 Monitoring and Logging

- Structured logging with timestamps
- Error tracking and reporting
- Performance monitoring
- Database query optimization
- Health check endpoints

## 🆘 Troubleshooting

### Common Issues:

1. **Database Connection Issues**
   - Verify PostgreSQL is running
   - Check DATABASE_URL format
   - Ensure database exists and user has permissions

2. **File Upload Issues**
   - Check file size limits
   - Verify upload directory permissions
   - For S3: validate AWS credentials and bucket access

3. **WebSocket Connection Issues**
   - Verify CORS configuration
   - Check firewall settings
   - Ensure Socket.io client/server version compatibility

4. **JWT Token Issues**
   - Verify JWT_SECRET is set
   - Check token expiration settings
   - Validate token format and claims

### Support

For technical support or questions:
1. Check the troubleshooting section above
2. Review existing GitHub issues
3. Create a new issue with detailed description
4. Include error logs and environment details

---

**License**: ISC
**Version**: 1.0.0
**Node Version**: >= 16.0.0

For more detailed information about specific features, refer to the inline code documentation and the `AWS_S3_INTEGRATION_GUIDE.md` file.