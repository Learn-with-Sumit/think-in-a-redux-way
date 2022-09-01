# Project Plan - Chat Application with RTK Query

## Requirement Analysis

1. user can register. afer registering, user will be automatically logged in, we will store login info to localstorage (for login persistance) and redirected to inbox page

2. user can login and after login we will save the login information in localstorage (for login persistance) and redirect user to inbox

3. load sidebar messages from conversation API and implement load more feature

4. load specific conversation messages when user clicks on it and implement load more feature

5. when user sends message,
   a) if conversation id is present, update conversation table and also inserts into messages table
   b) if conversation id is missing, get conversation id using filter
   _ if conversation id exists, then update that conversation and add to messages table
   _ if conversation id is missing, insert that conversation and add to messages table

6. sidebar conversation list scroll - sort by latest first and when user loads more, bring previous "10 conversations sorted by latest first" and pushed into the conversations array

7. messages list scroll - bring "10 latest messages per request sorted by oldest first". when user loads more, "bring previous 10 messages sorted again by oldest first" and unshift into the array

## Required APIs

1. register
2. login
3. get list of users other than requesting user
4. update conversation
5. insert conversation
6. find conversation
7. list conversation
8. list messages by conversation id
9. send message (insert messages into messages table)
