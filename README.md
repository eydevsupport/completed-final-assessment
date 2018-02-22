# Big Tomato Case Study - Final Assessment

Great work team! Farmer Toma Toe is very pleased with the MVP of his website. He thinks after a few more features he can deploy the site to his domain www.getsauced.farm. Toma’s daughter, Cherry, is addicted to FarmBook (the agriculture industry’s version of Facebook) and browses their FarmFeed (appropriately nicknamed “The Fertilizer”) all day long. After watching Cherry scroll through her feed, Toma realizes that the next feature he needs for his site is an announcements feed and he would like to name the feed, "The Vine".

The EY Developers have discussed the requirements with Toma at length. They have provided the following requirements and user stories for the announcements feed.

Note: If you completed the Big Tomato Case Study Intermediate Assessment - you will not be using that code repository. We have provided a blank slate for you.

## Pre-requisites:

* Register for a github account (if you do not already have one)
* Install Dependencies
* [Git tools](http://msysgit.github.io/)
* [Node JS](https://nodejs.org/en/)

## Setting Up Local Repository

* Login to Github. 
* In Github click the New Repository button. Name your repository "surname-final-assessment-day1".
* Set your repository to Public and do not initialize with a readme.
* Click Create Repository.
* Copy the repository URL.
* Using the command line, navigate to a directory on your machine where you would like to save your repository.
* Run `git clone REPOSITORY_URL`. 
* Navigate to the [repo](https://github.com/eydevsupport/final-assessment-student-day1) for the final assessment.
* Copy the repository URL.
* Using the command line, navigate to a directory on your machine where you would like to save this repository. It should not be inside the directory you just created - ideally it would be at the same level as that directory. 
* Run `git clone REPOSITORY_URL`. Using Windows Explorer or the command line, copy and paste all of the contents of this repository into your repository labeled "surname-final-assessment-day1". If you see a folder labeled ".git" do not copy or paste this folder. Also, do not copy the folder labeled "final-assessment-student-day1", ONLY the contents. 
* Now that you have copied the contents it's time to push them up to your remote repository.
* Using the command line, navigate to your "surname-final-assesment-day1" directory. 
* Using the command line, run `git add .` then hit enter. Then run `git commit -m "initial commit"`. Then run `git push`. Now your github repo is ready to go and it's time to install the required dependencies.
* Run the command `npm install`
  * If running this command alters the .package.json file and the .json file, use the `git checkout` command to discard those changes. Running `git status` will give you instructions on how to use `git checkout`.
* When you are ready to run the site locally, run the commands:
  * `npm run api`
  * `npm run dev`

Note: You will need to run these commands in separate command line windows. The command `npm run dev` runs a local server on your machine that hosts the site. The command `npm run api` runs a mock api that hosts all of the data for the assessment.

You are now ready to start working on the site. The site is set up with LiveReload. This means that when you save your code in your text editor, the page will automatically reload for you. We have noticed that there are a few instances where the LiveReload can lag, so if you are not seeing your changes immediately, give it a few seconds to catch up.

## Requirements:

### General

* Use git branching (i.e., do not push code to master).
* Write all angular code (AngularJS 1.x) consistent with the [John Papa Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).
* DO NOT USE ES6 or later.
* Stick to the requirements, however, if you feel that there are other opportunities to improve the code or create new features feel free to do so.
* Remember, styling is important! This is going directly to a client. Feel free to add all custom styles to the main.css file.
* Your application should be mobile friendly.
* The application requires you to use Toma's Tomato Farm API. The API allows you to retrieve Tomato and Farm information.
  * The API has the following endpoints:
    * `http://localhost:3000/announcements` - Get All Announcements
    * `http://localhost:3000/owners` - Get All Announcement Owners
* We have created the basic file structure for your new code. Use this as guidance but feel free to change/add/remove additional files where you see fit. 
* In certain files we have indicated where to add your code. Use this as guidance but it does not indicate every section you may need to add code. Additionally, you need to add code to every section indicated if you do not see fit. 

## Part I

In Part I of the final assessment you will begin creating an announcements feed based on the user stories below. As you create your announcements feed, please also adhere to the following code requirements:
* You must create the announcements feed with AT LEAST one custom directive.
* You must create the announcements feed with AT LEAST one custom service.
* You will have to use the restService to get Announcement Data and Announcement Owner Data.
  * Request the data on the tomato-announcements-home page and pass the data into your announcement-feed directive(s).
Refer to User Stories for the specific requirements. 

#### User Stories

* As a user, when I am on the home page, I want to view a link in the top navigation on the right side, for the announcements page.
* As a user, I want to click on the "Announcements" link and navigate to a new page.
* As a user, I want to view the announcements feed in a tomato card (shared-component) that is centered in the browser but does not take up the entire width of the screen (think facebook feed).
* As a user, I want to be able to scroll down the feed to view additional announcements (i.e., the feed should have a scrollbar, not the page).
* As a user, I want to view each of the following fields in an announcement: Title, Date, Type, Created By (Owner).
  * The OwnerID is provided to you in the Announcements Data and the Owner information is provided in the Announcements Owner Data. 

## Part II

In Part II of the final assessment you will continue to work on the announcements feed. You will be adding additional features and professional styling. Refer to User Stories for the specific requirements. Please note that you may need to manipulate the data to fulfill all requirements. 

#### User Stories

* As a user, I want to see the Announcement 'Type' font-awesome icon included in the announcement.
  * The data includes a font awesome class style which can be used in the announcement. 
* As a user, I want to view the date in the following format: MMM. DD, YYYY (e.g., Jan. 15, 2018).
* As a user, I want all announcements to be default sorted by date (the most recent announcement at the top of the news feed).
  * Make sure the feed is being sorted by the actual date and not the string value of the date. 
* As a user, I want to be able to filter (not sort) announcements by Type (use a drop down menu).

Note: Make sure to use CSS to style the announcement feed and components so that it is professional and presentable. Feel free to use bootstrap - the framework has already been included in the application. This is the final product that will be going on Toma's website. 

## Part III

An urgent request just came in on a high profile client engagement. The EY Developers need your assistance with laying the groundwork for the new features the client has requested. The team needs to create new data visualizations for the client. 

In exercise 1, you will be writing functions to request data from SharePoint. You will then need to anticipate and provide the format that you believe the response data will be returned. A basic sample has been provided for you in the respective files.

In exercise 2, you will then need to take raw data that has been given to you and write functions to manipulate the data into the specified format. The EY developers will then take your data and wire up the charts. 

### Requirements

#### Exercise 1
  * Navigate to the mockRest.service.js file within the tomato-exercise-tree folder. This file contains a sample GET request to the SharePoint API. Use this function to write your own data calls. Refer to the example within the file for additional guidance.
  * Add your own data calls in the section indicated in the mockRest.servicejs file to obtain the following list information: 
    * From the Risks and Issues List, get ID, Title, Function, Description, and Risk Owner for All Issues with a High Risk Impact. Return a maximum of 500 results. 
    * From the Work Plan List, get ID, Task Owner, Function, Work Plan Task Type, and Work Plan Task Status. Sort by Due Date (oldest due date should be first). Return a maximum of 2000 results. 
  * Below your data calls, provide the anticipated response data format with comment syntax.  
  * Use the charts below for information on the SharePoint lists you will be requesting data from.

Note: You will not be able to test your data calls or anticipated format. We are reviewing them based on your understanding of the API. 

### SharePoint Lists

  #### Risks and Issues

| Column| Internal Name | Display Name | Field Type | Is Lookup? | Lookup List | 
| --- | --- | --- |  --- |  --- |  --- | 
| 1 | ID | ID | Integer | False | N/A | 
| 2 | Title | Description | Text | False | N/A | 
| 3 | Issue Risk Category | IssueRiskCategory | Choice | False | N/A | 
| 4 | Function | Function | Lookup | True | Functions | 
| 5 | Description | Description | Text | False | N/A |
| 6 | Item Owner | ItemOwner | Lookup | True | User Profiles | 
| 7 | Risk Impact | RiskImpact | Choice | False | N/A | 
| 8 | Risk Probability | RiskProbability | Choice | False | N/A | 


  #### Work Plan

| Column| Internal Name | Display Name | Field Type | Is Lookup? | Lookup List | 
| --- | --- | --- |  --- |  --- |  --- | 
| 1 | ID | ID | Integer | False | N/A | 
| 2 | Title | Description | Text | False | N/A | 
| 3 | Work Plan Task Status | WorkPlanTaskStatus | Lookup | True | Statuses | 
| 4 | Function | Function | Lookup | True | Functions | 
| 5 | Task Owner | Owner | Lookup | True | User Profiles | 
| 6 | Work Plan Task Type | WorkPlanTaskType  | Choice | False | N/A | 
| 7 | Task Comments | TaskComments | Text | False | N/A |
| 8 | Due Date | TaskDueDate | Date and Time | False | N/A |

#### Exercise 2

* Navigate to http://localhost:8080/#/part-three and open up your chrome developer tools console. Use the tomato-exercise-three.controller.js in conjunction with the developer tools to view and modify the data.
* You will need to modify the results data that is returned from the activateComplete function on line 23 of the tomato-exercise-three.controller.js. 
* Manipulate the response data so that the final output matches the format indicated in the code snippet below. You will need to provide two sets of data manipulation functions. See the snippet for the two required formats. 
* You should be able to pass the response data into the function and it should return the data in the specific format.
* Please write your functions in the controller.
* Don’t be afraid to use lodash.

## Required Format for Response Data
```js
// FORMAT ONE: Orders by Country Details (including information from the lookup fields)
{
  "United States": [
    {
      "ID": 2,
      "Title": "Order #: 18703",
      "Countries": {
        "ID": 3,
        "Title": "United States",
        "Ordinal": 8
      },
      "Tomato": {
        "ID": 1,
        "Color": "Red",
        "Type": "Heirloom",
        "Size": "Large",
      },
      "Qty": 355,
      "Status": {
        "ID": 1,
        "Title": "Completed",
        "Color Code": "#0051c0",
        "Font Awesome Icon Name": "fa-check-circle",
        "Ordinal": 1
      }
    },
    {...},
    {...}
  ],
  "Spain": [
    {
      "ID": 1,
      "Title": "Order #: 11682",
      "Country": {
        "ID": 8,
        "Title": "Spain",
        "Ordinal": 6
      },
      "Tomato": {
        "ID": 3,
        "Color": "Red",
        "Type": "Beefsteak",
        "Size": "Tiny",
      },
      "Qty": 484,
      "Status": {
        "ID": 2,
        "Title": "Not Started",
        "Color Code": "#d8d8d8",
        "Font Awesome Icon Name": "fa-circle",
        "Ordinal": 2
      }
    },
    {...},
    {...}
  ],
  {...},
  {...}
}

//FORMAT TWO: Total Tomatoes Ordered by Country (Ensure that your numbers actually add up to the real total)
{
  "China":1132,
  "Egypt":1230,
  "India":977,
  "Iran":829,
  "Italy":1242,
  "Spain":743,
  "Turkey":668,
  "United States":1323
}

```


