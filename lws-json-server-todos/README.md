# lws-json-server-todos

Example in memory todos api with json-server by Learn with Sumit

# Installation

```bash
git clone git@github.com:learnwithsumit/lws-json-server-todos.git
cd lws-json-server-todos
npm install json-server
npm start
```

Now opens:

- http://localhost:3000

You now have a full REST API. Test with POSTMAN or any other REST Client):

Retrieve all (GET):

```bash
GET http://localhost:3000/todos
```

Retrieve one (GET):

```bash
GET http://localhost:3000/todos/1
```

Post a todo (POST):

```bash
POST http://localhost:3000/todos text="Learn Redux" completed=false color="red"
```

Update todo (PUT):

```bash
PUT http://localhost:3000/todos/3 name="Learn Redux with Learn with Sumit" completed=true color="green"
```

Delete todo (DELETE):

```bash
DELETE http://localhost:3000/todos/1
```


# Links

- https://github.com/typicode/json-server
- Jswon view Chrome plugin: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc
- Learn with Sumit official website: htts://learnwithsumit.com