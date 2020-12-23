# Simple React Movie Search
<!-- Author: Chung Hak Ngor -->
## Implemented to understand React Hooks (useReducer) and Context API

<!-- Hosted on Github Pages -->
## [Live Deployment](https://chunghakngor.github.io/movie-db/)

### Requirements: 
```
- TMDb API Key
- Node.js
- [Optional] Docker 
```

To run the application:
1. Clone the repo and run `npm install` to install all the dependencies
2. Fill the `.env` file using `template.env` 
   - Due to how Create React App takes in .ENV file, they will only be import in Production build, thus you may need to assign your own API key in the `src/App.js`
3. You can now run the website using `npm run start` 
    - Or build the website using `npm run build` and host using `serve -s build` 
    - `.env` file will work in this situation
4. Access the website on `http://localhost:3000`

To run using docker:
1. Clone the repo 
2. Fill the `.env` file using `template.env`
3. Run `docker-compose up`
4. Access the website on `http://localhost:3000`
or
1. `docker pull chunghakngor/movie-db:0.1.0`
2. `docker run -p 3000:3000 chunghakngor/movie-db:0.1.0`
3. Access the website on `http://localhost:3000`

To complete:
- [ ] Sticky bottom for Card Action below each result 
- [ ] Replace in-line styling
- [ ] Typescript support
- [ ] Unit Testing with Jest
- [x] Add Docker support
- [x] Remove unnecessary dependencies
### Some screenshot below: 

![main](screenshots/main.png)
![search](screenshots/search.png)
![error](screenshots/error.png)
