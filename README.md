# Atelier
Front-End-Capstone Project - Atelier

# Overview
  - This project was completed as part of the Hack Reactor senior curriculum.


 # Description
-  Project Atelier is an online shopping application that was built to industry standards for a great user experience.  We all love the convenience of shopping online , but that convenience only goes as far as the integrity of the application and the quality of its user experience.  Project Atelier  has the following features that make it  a competitive online store in the digital marketplace :
    -   A  Product overview page that  shows users the  details of the product they are looking at , including  the price, sale price, availability in different styles,  features and more.
    - An Image gallery available in two viewable states.  The default view  allows the user to browse styles by using intuitive buttons or by simply clicking on the thumbnails overlaid on the image. By simply clicking on the main image, the user can inspect the photo of the product in an expanded gallery which allows  for zooming in to the image with a click and smoothly pans with mouse movement.
    - A View of  Related Products that correspond to the currently selected item
    - A Questions and answers  feature similar to Amazon or Etsy  where a user can search questions, ask  and answer them,  and mark them as helpful or report them as inappropriate for quality control.
    - A complete Ratings and reviews feature clearly displays the products ratings as given by other people who have purchased the item.  Users can leave their own reviews,  mark reviews as helpful, recommend products or report the review.  This feature has several metrics by which the user can break down the reviews including by newest, most relevant or most helpful.  There are also convenient Star ratings and bar charts that help the user make sense of reviews and decide if the product is for them.





# Dependencies
- React and React DOM 17.0.2
- Express
- webpack.config + webpack-cli
    - style-loader
    - css loader
    - file loader
    - babel-loader
    - babel
- multer
- cors
- compression
- axios
- aws-sdk
- underscore
- daysjs
- @fortawesome/fontawesome-svg core
- eslinter
- eslint-plugin-react
- react-inner-image-zoom (third party npm package)

# Installation
1. Clone the repository locally
2. *cd* Atelier
3. Open this repo in VS Code
4. create a .config.js file and ensure its added to .gitignore.
5.  Paste your  github API token in this file.
    EXAMPLE:  module.exports = {
    token: 'YOURTOKENHERE',
     };
6. Run *npm install* in the terminal directory of the project
7. Open two terminal on VS Code
8. In the first terminal run *npm run client-dev*
9. In another terminal, run *npm run server-dev*
10. Open http://localhost:3000/ on browser.


# Team Members
 - Ashequl Haque
 - Aaron Fife
 - Joe Haines


# UI for Product Overview

![Screen Shot 2021-10-06 at 9 20 23 PM](https://user-images.githubusercontent.com/38839596/136315191-d1120dc9-ce4a-4a3d-9c1c-098e8b67ca61.png)
