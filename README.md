
# Car booking and rental

It is an online car rental system that allows users to browse available cars, select rental dates, and make reservations.

---
## Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Backend (Laravel)](#backend-laravel)
  - [Frontend (React)](#frontend-react)
- [Author & Contact](#author--contact)

---

## About the Project

This system is designed to streamline the process of renting a car online. Features include:
- Car listing with search and filtering
- Booking system with date picker
- Admin panel for managing cars, bookings, users, and categories

## Technologies Used

- **Backend:** Laravel, PHP, MySQL
- **Frontend:** ReactJS, JavaScript, HTML, CSS
- **Libraries & Tools:** Axios, Litepicker, Bootstrap, Intl-Tel-Input, Swiper
## ⚙️ Requirements

Before running the project, make sure you have the following installed:

- **PHP** >= 8.1  
- **Composer**  
- **Apache** (or any compatible web server)  
- **Node.js & npm**  
- **Git**  
- **MySQL** (or another supported database)

### Backend (Laravel)

1. Clone the repository:
   ```bash
   git clone https://github.com/olksy/car_rent.git
   
2. Navigate into the project folder:
   ```bash
   cd car_rent

3. Install PHP dependencies:
   ```bash
   composer install

4. Copy the .env file.
⚠️ Important: To enable password reset functionality via email, make sure to set your mail settings in .env file!
   ```bash
   cp .env.example .env
   ```
  
5. Generate application key:
   ```bash
   php artisan key:generate

6. Run database migrations and seeders:
   ```bash
   php artisan migrate --seed

7. Start the Laravel server:
   ```bash
   php artisan serve

### Frontend (React)
1. Navigate to the React frontend directory:
   ```bash
   cd resources/react

2. Install JS dependencies:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run dev

The React app will run at http://localhost:5173 and the Laravel backend at http://127.0.0.1:8000

## Author & Contact
- **Author**: Olksy
- **GitHub**: https://github.com/olksy
- **Email**: olksyzatyliuk@gmail.com