Hello to the future group working on the Laguna Ocean Foundation Web Application!

Looking at the work thats already been layed out for you may seem daunting at first 
but I assure that all of the code is very easy to understand and you'll be able to get started right away!

To get started this application was developed in Expo, a platform that runs on the React framework that allows easy app and web development.
 The structure of the file system has the majority of the html, css and javascript inside of the app directory, 
 with each js file being its own page in the application, with the exception of those in the components directory, 
 which include reusable components that do not stand alone as a webpage by themselves. 

The assets directory includes all the images and svgs that are used in the program so far, 
and all other files and directories are part of the configuration of the environment and the codebase so you will have to modify if you make changes to dependencies or the environment.

What is currently working? As of right now this code base has the majority of the front-end of the application complete. 
We have a working homepage with tidechart API which displays information for the day; a Map page with markers, callouts and camera functionality;
 a Wide variety of different pages with information for the user, such as a page for every location and a page for how to read the tidecharts;
  a directory of different organisms, with a page and information for each organism, that page including important information about each organism, and an image gallery/carousel.

What is next? As the LOF team will probably let you know, the main goal for the future of the application is the Log Book Functionality, 
what this entails is making a user-login-signup system and storing information about the users in their accounts. 
Users should be able to post their observations for everyone to see, and should be able to obtain stamps for their efforts, (which is up to your descretion how that is implemented). 
The Other thing that needs to be implemented is the database system integration. 
As of right now the way that information is stored is all in the directory under the info.js file, making it very quick and easy to access the information, 
but is not flexible and is very hard to add further data, especially when thinking about scalability.

Structure of each file. Each file consists of a default function which returns what is viewed on the screen. 
In order to change the style of the different elements you have to change the appropiate stylesheet underneath the code. 
There may also be functions before the return statement of the code which may be used for interaction of the software, but they will be self explanatory. The code will by default begin in the index.js page, and any other directories such as the wildlife pages and the guidebook pages will also have their own index.js as a hub for all of their pages.

Running the application. In order to run the application you need to go through the instructions on the expo development website. 
That includes installing expo cli, as well as having the proper version od node and npx/yarn installed. 
You will also need to familiarize yourself with running an expo project. 
To run the project, you have to go to the root of the directory and run 'npx expo start' this will open a menu on where to run the system.
 After that you can just press 'w' in order to run the web version of the application.
  As of this moment the web app is only  optimized to run in mobile browsers however it is up to you whether you want to optimize it to run for desktop browsers as well.

Side note. In order to run the map feature you are going to need a google maps API Key and a google maps Map ID. 
These are both given when you setup a google maps account and are necessary for any billing information to use the maps when the application goes public.
 The best practice for doing so would be to save the keys in a .env file under this format 
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=*Insert Key Here*
EXPO_PUBLIC_GOOGLE_MAP_ID=*Insert ID Here*
There has also been various issues with the css of the application, as the expo development environment has strange practices when it comes to storing the cache.
This might be a difficulty during development so keep that in mind, but know this is not an issue for the actual deployment.