# learn_node

### Reference/Credits
#### test-00
* https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
* Note : Unlike the tutorial, in my implementation I have used mongoBD running locally!

#### api-00
* slack invitation api. 
* To run :  `node app.js`
* To access : `localhost:3000/invite` (HTTP POST, requires {email : email_id})

#### yargs-00
* Command line tool with yargs (http://yargs.js.org/)
* Install : `npm install yargs`
* To Run
```
node notes.js add --title="mytitle" --body="mybody"
node notes.js remove --title="mytitle"
node notes.js read --title="mytitle"
node notes.js list
```