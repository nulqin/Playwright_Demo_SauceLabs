# SauceDemo Automation Testing

This repository contains an automated test suite for the SauceDemo website (https://www.saucedemo.com/v1/index.html) using **Playwright** with **JavaScript**, **Page Object Model (POM)** design pattern, and **Cucumber** framework for behavior-driven development (BDD).

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (usually comes with Node.js)
- **Playwright** (will be installed via `npm install`)
- **Git** (optional, for cloning the repository)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nulqin/Playwright_Demo_SauceLabs.git
   cd Playwright_Demo_SauceLabs
2. **Install Dependecies**
    npm install
3. **Install Playwright Browser**
    npx playwright install

## Project Structure 
├── features/               # Cucumber feature files
│   └── login.feature
│   └── cart.feature
│   └── checkout.feature
├── step-definitions/       # Step definitions for Cucumber
│   └── cartSteps.js
│   └── checkoutSteps.js
│   └── loginSteps.js
├── pages/                  # Page Object Model classes
│   └── LoginPage.js
│   └── CartPage.js
│   └── CheckoutPage.js
├── .gitignore              # Files and directories to ignore in Git
├── package.json            # Project dependencies and scripts
├── playwright.config.js    # Playwright configuration
└── README.md               # This file

## Running Tests 
npx cucumber-js features/feature_name.feature

## Contributing 
Contributions are welcome! If you'd like to contribute, please follow these steps:
Fork the repository.
Create a new branch for your feature or bugfix.
Commit your changes.
Push your branch and submit a pull request.

## License 
This project is licensed under the MIT License.

## Acknowledgments
1. https://playwright.dev/ for providing a powerful automation framework.
2. https://cucumber.io/ https://cucumber.io/
3. https://www.saucedemo.com/ for providing a demo website for testing.
