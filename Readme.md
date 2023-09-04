# Fund Flow Hub

Fund Flow Hub is an application designed to streamline the process of initiating fund requests

Video link below

[Watch the Fund Flow Hub Video](https://drive.google.com/file/d/1FH70iqLVc5sSMbvj8fzOP4Tkq7H7nHHa/view?usp=sharing)

## Application Workflow

1. **Initiating the Application**: Users start by initiating a fund request within the application.

2. **Filling the Form**: Once the application is initiated, users are required to fill out the necessary forms and provide relevant information.

3. **Get the Balance Sheet to Review**: Users have the option to review their balance sheet before submitting the application.

4. **Submit Application**: After reviewing the application and ensuring all information is accurate, users can submit their fund request.

5. **Final Outcome**: The application processes the request, and users receive a final outcome regarding the fund request.

## Problems and Solutions

### Adding the Accounting Provider in the Future

**Problem**: How will you add the accounting provider in the future?

**Solution**: To add an accounting provider in the future, I have implemented the following approach:

- Seeded Admin Data: I have seeded admin data into the application's database. This data allows the admin to log in using a unique token.

- Admin Validation: Once logged in, the admin will be validated using the token. Once validated, the admin can access a api where they can add accounting providers along with the endpoint.

- Adding Accounting Providers: The admin can add accounting providers by specifying their name, including the API endpoint for integration.

### Making Requests to Different Accounting Providers

**Problem**: How will you make requests to different accounting providers?

**Solution**: To make requests to different accounting providers, I have implemented the following approach:

- Database Integration: In the database, I have stored the API endpoints of various accounting providers.

- Querying the Database: When a fund request requires interaction with a specific accounting provider, the application queries the database to retrieve the corresponding API endpoint.

- API Calls: With the API endpoint obtained from the database, the application can make the necessary API calls to interact with the selected accounting provider.

### Adding Pre-Assessment Logic

**Problem**: How will you add the pre-assessment logic?

**Solution**: To include pre-assessment logic, I have implemented the following approach:

- BusinessUtils.js: I have created a file named `businessUtils.js` within the application. This file contains the logic for conducting pre-assessments.

- Integration with Workflow: During the form-filling process, the application utilizes the logic defined in `businessUtils.js` to perform pre-assessments based on user-provided data.

---

This Markdown document provides an overview of the Fund Flow Hub application, addressing its workflow and solutions to potential challenges. These solutions are designed to ensure the flexibility, scalability, and reliability of the application as it grows and evolves.
