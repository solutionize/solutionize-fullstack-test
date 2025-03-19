

### 1. Install dependencies & start the application on an iOS or Android emulator
```
[Terminal 1]
cd api
npm install
npm start
```
```
[Terminal 2]
cd app
npm install
npm start
› Press a │ open Android
› Press i │ open iOS simulator
```

### 2. Add a /users endpoint
Add a `"/users"` endpoint to `api/index.ts` to return all users in `data.ts` as an array

### 3. Fetch users
Update `App.tsx` to fetch all users from the endpoint

### 4. Display a User Picker
Update `App.tsx` to display a [Picker](https://github.com/react-native-picker/picker) (dependency already installed)\
The Picker should display the username and allow us to select a user

### 5. Add a /posts/:userId endpoint
Add a `"/posts/:userId"` endpoint to `api/index.ts` that allows us to fetch all posts from `data.ts` for a given `userId`

### 6. Render Posts
For the user selected by the Picker, fetch and render the list of posts for the given user.\
This can be a simple card display the title and subject of the post.