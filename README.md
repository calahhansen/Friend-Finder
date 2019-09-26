# Friend-Finder - Node and Express Servers

# Overview

In this activity, I built a compatibility-based "FriendFinder" application. This full-stack site takes in results from the user survey, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.  I used Express to handle routing and deployed the app to Heroku so other users can fill it out.

# Links

[Github Repository](#)
[Heroku deployed site](#)


This needs to be finished...

With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.
