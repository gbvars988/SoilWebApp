# SOIL WebApp

SOIL is a long-term organic food grocer with several store locations around Melbourne, Australia. They focus on premium, organic fresh food. This WebApp serves as SOIL's online presence, allowing customers to shop online, learn about organic produce with tips and tricks, and create customised meal plans based on preferences and dietary requirements.

## Prerequisites

- Node.js (^v21.7.1)
- npm (included with Node.js)

## Features

- Online shopping for organic groceries
- Educational resources about organic produce
- Customisable meal plans based on dietary restrictions and preferences

## Running

To run, cd into root directory and run command `npm install` to install dependencies.

The webapp can then be started by running command: `npm start`

The application will be hosted locally on `localhost:3000`, assuming port 3000 is available.

## Usage

To fully benefit from the SOIL WebApp, users are encouraged to register and log in. This enables access to a variety of member-exclusive features designed to enhance your shopping and meal planning experience.

### Register

Create your free SOIL account using just an email address. Registration unlocks full access to all features and a personalised experience.

### Login

Log in to access your personalised dashboard and take advantage of enhanced functionalities:

#### Member-Exclusive Features

- **Shopping**

  - **Deals Section**: Explore and shop weekly specials exclusively available to registered members. Simply navigate to the 'Deals' section, add products to your cart, and proceed to checkout.

- **Meal Planning**
  - **Diet Plan Section**: Input your personal metrics (such as age, weight, height, and activity level) along with your dietary preferences to generate a customised meal plan tailored just for you. Access this feature by visiting the 'Diet Plan' section.

### Benefits of Membership

By logging in, you not only gain access to these exclusive features but also contribute to a more sustainable shopping practice by selecting organic products suited to your lifestyle and preferences. Enjoy enhanced functionalities designed to simplify and personalise your online grocery shopping and meal planning process.

## Troubleshooting

If you encounter issues with missing dependcies or environment errors, try running: `npm install`

If you encounter errors when generating meal plans - it is possible that the daily quota for requests to Spoonacular API has been reached. This quota will reset the following day.

## References

- Images were sourced from [unsplash](https://unsplash.com/)
- Meal planning and recipes utilise the [Spoonacular API](https://spoonacular.com/food-api) (free account) **NOTE**: there is a daily quota of 150 requests.
- Meal planning functionality was inspired by [Aleks Popovic's tutorial](https://www.youtube.com/watch?v=N5or5jBstg8&t=401s&ab_channel=AleksPopovic)
