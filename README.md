# Dynamic Community Portal Website

![Project Screenshot](/public/images/image.png)

## Project Overview
A community portal website built with Node.js, Express, and EJS templating engine. The portal features dynamic content rendering across five pages:
- Home
- About (with team information)
- Events (displaying upcoming community events)
- Contact (with form submission)
- Thank You (confirmation page)

## Technologies Used
- **Backend**: Node.js (v18+), Express.js (v4+)
- **Templating**: EJS (v3+)
- **Frontend**: Bootstrap 5, CSS
- **Development Tools**: nodemon, Git/GitHub
- **Additional Packages**: 
  - express-flash for validation messages
  - nodemailer for potential email functionality
  - express-session for session management

## Team Members and Roles
| Name                | Role                  | Responsibilities |
|---------------------|-----------------------|------------------|
| Natasja Nell        | Team Lead             | Project coordination, quality assurance |
| Tshifhiwa Makhani   | Frontend Developer    | EJS templates, CSS styling |
| Nhlanhla Mbatha     | Backend Developer     | Express routes, server logic |
| Oarabile Mahlaba     | Data Manager          | Data structure, form handling |

## Features
- Dynamic page rendering using EJS templates
- Modular Express routing
- Contact form with client-side and server-side validation
- Reusable partials (header/footer)
- Responsive design with Bootstrap 5
- Proper separation of concerns (MVC-like structure)

## Folder Structure 

![Screenshot](/public/images/Screenshot-2025-05-14-191209.png)

## Setup Instructions
1. Clone the repository:
   
   git clone [https://github.com/Tasja0/WPR-381-Project.git]

2. Install dependencies:

    npm install
3. install nodemon
     npm install -g nodemon
4. install dotenv:
     npm install dotenv

5. Start the development server:

    npm run dev

7. Access the application at:

   http://localhost:8000

**Project Highlights**

Implemented dynamic event rendering from backend arrays

Created reusable EJS partials for consistent layout

Added form validation with client-side feedback

Followed proper Git collaboration workflow

Maintained clean code structure throughout

**Reflection**

This project helped us understand:

The power of EJS templating for dynamic content

Proper Express route organization

Team collaboration using Git version control

The importance of input validation

Responsive design principles with Bootstrap
