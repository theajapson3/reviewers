const BANK_A = [
  // ── JavaScript Advanced (Q1–40) ──────────────────────────────────────────
  {
    id:"a1",
    question:"What is the output of: <code>console.log(typeof (() => {}))</code>?",
    choices:[{id:"a1c1",text:"\"function\""},{id:"a1c2",text:"\"arrow\""},{id:"a1c3",text:"\"object\""},{id:"a1c4",text:"\"undefined\""}],
    correctChoiceId:"a1c1",
    explanation:"Arrow functions are still of type 'function' in JavaScript."
  },
  {
    id:"a2",
    question:"Which array method returns <strong>undefined</strong> instead of a new array?",
    choices:[{id:"a2c1",text:"map()"},{id:"a2c2",text:"filter()"},{id:"a2c3",text:"forEach()"},{id:"a2c4",text:"reduce()"}],
    correctChoiceId:"a2c3",
    explanation:"forEach() executes a callback for side-effects only and always returns undefined."
  },
  {
    id:"a3",
    question:"What does <code>JSON.parse('[1,2,3]')</code> return?",
    choices:[{id:"a3c1",text:"A string"},{id:"a3c2",text:"A JavaScript array"},{id:"a3c3",text:"A JSON object"},{id:"a3c4",text:"undefined"}],
    correctChoiceId:"a3c2",
    explanation:"JSON.parse() converts a JSON-formatted string into a native JavaScript value — here, an array."
  },
  {
    id:"a4",
    question:"Which keyword pauses execution inside an async function until a Promise resolves?",
    choices:[{id:"a4c1",text:"defer"},{id:"a4c2",text:"pause"},{id:"a4c3",text:"await"},{id:"a4c4",text:"hold"}],
    correctChoiceId:"a4c3",
    explanation:"await pauses the async function and waits for the Promise to settle before continuing."
  },
  {
    id:"a5",
    question:"What will <code>[1,2,3].map(x => x * 2)</code> return?",
    choices:[{id:"a5c1",text:"[1,2,3]"},{id:"a5c2",text:"[2,4,6]"},{id:"a5c3",text:"6"},{id:"a5c4",text:"undefined"}],
    correctChoiceId:"a5c2",
    explanation:"map() transforms every element and returns a new array of the same length."
  },
  {
    id:"a6",
    question:"Which operator spreads an array into individual elements?",
    choices:[{id:"a6c1",text:"... (spread)"},{id:"a6c2",text:"@ (at)"},{id:"a6c3",text:"# (hash)"},{id:"a6c4",text:"* (star)"}],
    correctChoiceId:"a6c1",
    explanation:"The spread operator (...) expands an iterable into individual elements."
  },
  {
    id:"a7",
    question:"What is the output? <code>const [a,,b] = [10,20,30]; console.log(b);</code>",
    choices:[{id:"a7c1",text:"20"},{id:"a7c2",text:"10"},{id:"a7c3",text:"30"},{id:"a7c4",text:"undefined"}],
    correctChoiceId:"a7c3",
    explanation:"The double comma skips index 1 (20), so b gets index 2 which is 30."
  },
  {
    id:"a8",
    question:"An async function always returns a…",
    choices:[{id:"a8c1",text:"Plain value"},{id:"a8c2",text:"Promise"},{id:"a8c3",text:"Callback"},{id:"a8c4",text:"Generator"}],
    correctChoiceId:"a8c2",
    explanation:"async functions always wrap the return value in a Promise, even if you return a plain number."
  },
  {
    id:"a9",
    question:"Which array method returns the <strong>first</strong> element that passes a test?",
    choices:[{id:"a9c1",text:"filter()"},{id:"a9c2",text:"some()"},{id:"a9c3",text:"find()"},{id:"a9c4",text:"indexOf()"}],
    correctChoiceId:"a9c3",
    explanation:"find() returns the first matching element (not an array), or undefined if none match."
  },
  {
    id:"a10",
    question:"What is a higher-order function?",
    choices:[{id:"a10c1",text:"A function that runs faster than others"},{id:"a10c2",text:"A function that accepts or returns another function"},{id:"a10c3",text:"A function declared with 'higher' keyword"},{id:"a10c4",text:"A function inside a class"}],
    correctChoiceId:"a10c2",
    explanation:"A higher-order function takes functions as arguments or returns a function as its result."
  },
  {
    id:"a11",
    question:"What does <code>localStorage.getItem('missing')</code> return if the key doesn't exist?",
    choices:[{id:"a11c1",text:"undefined"},{id:"a11c2",text:"false"},{id:"a11c3",text:"null"},{id:"a11c4",text:"empty string"}],
    correctChoiceId:"a11c3",
    explanation:"localStorage.getItem() returns null when the specified key is not found."
  },
  {
    id:"a12",
    question:"Which statement correctly exports a default from a module?",
    choices:[{id:"a12c1",text:"export { default: myFunc }"},{id:"a12c2",text:"export default myFunc"},{id:"a12c3",text:"module.export = myFunc"},{id:"a12c4",text:"export main myFunc"}],
    correctChoiceId:"a12c2",
    explanation:"'export default myFunc' sets myFunc as the default export of the module."
  },
  {
    id:"a13",
    question:"What is the output? <code>[5,10,15].reduce((acc,n) => acc+n, 0)</code>",
    choices:[{id:"a13c1",text:"15"},{id:"a13c2",text:"30"},{id:"a13c3",text:"0"},{id:"a13c4",text:"[5,10,15]"}],
    correctChoiceId:"a13c2",
    explanation:"reduce() starts accumulator at 0, adds 5, 10, 15 successively, giving 30."
  },
  {
    id:"a14",
    question:"Template literals use which delimiters?",
    choices:[{id:"a14c1",text:"Single quotes ''"},{id:"a14c2",text:"Double quotes \"\""},{id:"a14c3",text:"Backticks ``"},{id:"a14c4",text:"Curly braces {}"}],
    correctChoiceId:"a14c3",
    explanation:"Template literals are enclosed in backtick characters (`) and support ${expression} interpolation."
  },
  {
    id:"a15",
    question:"Arrow functions do NOT have their own…",
    choices:[{id:"a15c1",text:"return statement"},{id:"a15c2",text:"this keyword"},{id:"a15c3",text:"parameters"},{id:"a15c4",text:"scope"}],
    correctChoiceId:"a15c2",
    explanation:"Arrow functions inherit 'this' lexically from their surrounding scope, they do not bind their own 'this'."
  },
  {
    id:"a16",
    question:"What does <code>some()</code> return?",
    choices:[{id:"a16c1",text:"All matching elements"},{id:"a16c2",text:"The first matching element"},{id:"a16c3",text:"true if at least one element passes the test"},{id:"a16c4",text:"The count of matching elements"}],
    correctChoiceId:"a16c3",
    explanation:"some() returns true if at least one element satisfies the callback, otherwise false."
  },
  {
    id:"a17",
    question:"Which Promise method runs regardless of success or failure?",
    choices:[{id:"a17c1",text:".then()"},{id:"a17c2",text:".catch()"},{id:"a17c3",text:".finally()"},{id:"a17c4",text:".always()"}],
    correctChoiceId:"a17c3",
    explanation:".finally() executes after the Promise settles, whether it was fulfilled or rejected."
  },
  {
    id:"a18",
    question:"What does <code>every()</code> do?",
    choices:[{id:"a18c1",text:"Returns true only if ALL elements pass the test"},{id:"a18c2",text:"Returns the count of all elements"},{id:"a18c3",text:"Returns a new array of passing elements"},{id:"a18c4",text:"Loops without returning"}],
    correctChoiceId:"a18c1",
    explanation:"every() returns true only if every single element in the array passes the provided test."
  },
  {
    id:"a19",
    question:"What is the correct way to add a click handler to a button?",
    choices:[{id:"a19c1",text:"btn.onClick = handler"},{id:"a19c2",text:"btn.addEventListener('click', handler)"},{id:"a19c3",text:"btn.listen('click', handler)"},{id:"a19c4",text:"btn.on('click', handler)"}],
    correctChoiceId:"a19c2",
    explanation:"addEventListener(event, callback) is the standard DOM method for attaching event listeners."
  },
  {
    id:"a20",
    question:"What does <code>event.preventDefault()</code> do?",
    choices:[{id:"a20c1",text:"Stops event bubbling"},{id:"a20c2",text:"Removes the event listener"},{id:"a20c3",text:"Prevents the browser's default action for the event"},{id:"a20c4",text:"Delays event execution"}],
    correctChoiceId:"a20c3",
    explanation:"event.preventDefault() cancels the default browser action, such as a form page reload on submit."
  },
  {
    id:"a21",
    question:"What is the 3-step order for using the Fetch API to read JSON?",
    choices:[{id:"a21c1",text:"fetch → .text() → JSON.parse()"},{id:"a21c2",text:"fetch → .json() → use data"},{id:"a21c3",text:"xhr.open() → xhr.send() → xhr.onload()"},{id:"a21c4",text:"fetch → callback → result"}],
    correctChoiceId:"a21c2",
    explanation:"After fetch() returns a Response, call .json() on it (also a Promise) to parse the JSON body."
  },
  {
    id:"a22",
    question:"sessionStorage data is cleared when…",
    choices:[{id:"a22c1",text:"The browser is restarted"},{id:"a22c2",text:"The user logs out"},{id:"a22c3",text:"The tab or window is closed"},{id:"a22c4",text:"24 hours pass"}],
    correctChoiceId:"a22c3",
    explanation:"sessionStorage persists only for the duration of the browser tab session. Closing the tab clears it."
  },
  {
    id:"a23",
    question:"Which state is a Promise in while waiting for an async operation to complete?",
    choices:[{id:"a23c1",text:"resolved"},{id:"a23c2",text:"pending"},{id:"a23c3",text:"waiting"},{id:"a23c4",text:"idle"}],
    correctChoiceId:"a23c2",
    explanation:"A Promise starts in the 'pending' state before it either fulfills (resolves) or rejects."
  },
  {
    id:"a24",
    question:"In a class, which method name is automatically called when using <code>new ClassName()</code>?",
    choices:[{id:"a24c1",text:"init()"},{id:"a24c2",text:"setup()"},{id:"a24c3",text:"constructor()"},{id:"a24c4",text:"create()"}],
    correctChoiceId:"a24c3",
    explanation:"The constructor() method is automatically called when a new class instance is created."
  },
  {
    id:"a25",
    question:"What must be called <strong>before</strong> accessing <code>this</code> in a subclass constructor?",
    choices:[{id:"a25c1",text:"parent()"},{id:"a25c2",text:"super()"},{id:"a25c3",text:"base()"},{id:"a25c4",text:"this.init()"}],
    correctChoiceId:"a25c2",
    explanation:"super() must be called first in a derived class constructor before any 'this' access."
  },
  {
    id:"a26",
    question:"Static methods in a class are called on…",
    choices:[{id:"a26c1",text:"Instances of the class"},{id:"a26c2",text:"The class itself"},{id:"a26c3",text:"The prototype"},{id:"a26c4",text:"The parent class only"}],
    correctChoiceId:"a26c2",
    explanation:"Static methods belong to the class itself (ClassName.method()), not to individual instances."
  },
  {
    id:"a27",
    question:"What does <code>filter()</code> always return?",
    choices:[{id:"a27c1",text:"The first matching element"},{id:"a27c2",text:"A boolean"},{id:"a27c3",text:"An array (possibly empty)"},{id:"a27c4",text:"undefined"}],
    correctChoiceId:"a27c3",
    explanation:"filter() always returns an array — it may be empty if nothing matches, never undefined."
  },
  {
    id:"a28",
    question:"What is a callback function?",
    choices:[{id:"a28c1",text:"A function that calls itself"},{id:"a28c2",text:"A function passed as an argument to another function"},{id:"a28c3",text:"A function that returns an object"},{id:"a28c4",text:"A function defined inside a class"}],
    correctChoiceId:"a28c2",
    explanation:"A callback is a function passed into another function to be invoked later."
  },
  {
    id:"a29",
    question:"Which DOM method selects the FIRST matching element?",
    choices:[{id:"a29c1",text:"document.getElementById()"},{id:"a29c2",text:"document.querySelectorAll()"},{id:"a29c3",text:"document.querySelector()"},{id:"a29c4",text:"document.findElement()"}],
    correctChoiceId:"a29c3",
    explanation:"querySelector() returns the first Element in the document that matches the specified CSS selector."
  },
  {
    id:"a30",
    question:"Object destructuring syntax uses which brackets?",
    choices:[{id:"a30c1",text:"Square brackets []"},{id:"a30c2",text:"Curly braces {}"},{id:"a30c3",text:"Parentheses ()"},{id:"a30c4",text:"Angle brackets <>"}],
    correctChoiceId:"a30c2",
    explanation:"Object destructuring uses curly braces: const { name, age } = person;"
  },
  {
    id:"a31",
    question:"What is the output? <code>console.log([3,1,4].find(x => x > 2))</code>",
    choices:[{id:"a31c1",text:"[3,4]"},{id:"a31c2",text:"3"},{id:"a31c3",text:"4"},{id:"a31c4",text:"true"}],
    correctChoiceId:"a31c2",
    explanation:"find() returns the first element greater than 2, which is 3."
  },
  {
    id:"a32",
    question:"What does <code>JSON.stringify({ a: 1 })</code> return?",
    choices:[{id:"a32c1",text:"An object"},{id:"a32c2",text:"'{\"a\":1}'"},{id:"a32c3",text:"[object Object]"},{id:"a32c4",text:"undefined"}],
    correctChoiceId:"a32c2",
    explanation:"JSON.stringify() converts a JavaScript object into a JSON-formatted string."
  },
  {
    id:"a33",
    question:"The rest operator in a function signature…",
    choices:[{id:"a33c1",text:"Spreads array into arguments"},{id:"a33c2",text:"Collects remaining arguments into an array"},{id:"a33c3",text:"Duplicates parameters"},{id:"a33c4",text:"Ignores extra arguments"}],
    correctChoiceId:"a33c2",
    explanation:"The rest operator (...args) collects all remaining function arguments into a real Array."
  },
  {
    id:"a34",
    question:"Which fetch option sets the HTTP method to POST?",
    choices:[{id:"a34c1",text:"{ type: 'POST' }"},{id:"a34c2",text:"{ verb: 'POST' }"},{id:"a34c3",text:"{ method: 'POST' }"},{id:"a34c4",text:"{ http: 'POST' }"}],
    correctChoiceId:"a34c3",
    explanation:"The fetch options object uses the 'method' key to specify the HTTP verb."
  },
  {
    id:"a35",
    question:"Which getter/setter keyword is used to intercept reading a class property?",
    choices:[{id:"a35c1",text:"read"},{id:"a35c2",text:"get"},{id:"a35c3",text:"access"},{id:"a35c4",text:"fetch"}],
    correctChoiceId:"a35c2",
    explanation:"The 'get' keyword defines a getter that intercepts reading of a property on an object or class."
  },
  {
    id:"a36",
    question:"What does <code>fetch(url)</code> return immediately?",
    choices:[{id:"a36c1",text:"The parsed JSON data"},{id:"a36c2",text:"A Response object"},{id:"a36c3",text:"A Promise"},{id:"a36c4",text:"A string"}],
    correctChoiceId:"a36c3",
    explanation:"fetch() returns a Promise that resolves to a Response object once the server replies."
  },
  {
    id:"a37",
    question:"Which is the correct syntax for an arrow function with an implicit return?",
    choices:[{id:"a37c1",text:"const f = (x) => { return x * 2; }"},{id:"a37c2",text:"const f = (x) => x * 2"},{id:"a37c3",text:"const f = function(x) => x * 2"},{id:"a37c4",text:"const f = x -> x * 2"}],
    correctChoiceId:"a37c2",
    explanation:"Without curly braces, an arrow function implicitly returns the expression result."
  },
  {
    id:"a38",
    question:"Named exports are imported using…",
    choices:[{id:"a38c1",text:"Parentheses ()"},{id:"a38c2",text:"Square brackets []"},{id:"a38c3",text:"Curly braces {}"},{id:"a38c4",text:"Backticks ``"}],
    correctChoiceId:"a38c3",
    explanation:"Named exports must be imported using curly braces: import { myFunc } from './module.js';"
  },
  {
    id:"a39",
    question:"What does <code>innerHTML</code> do differently from <code>innerText</code>?",
    choices:[{id:"a39c1",text:"innerText parses HTML tags; innerHTML does not"},{id:"a39c2",text:"innerHTML parses HTML tags; innerText returns visible text only"},{id:"a39c3",text:"They are identical"},{id:"a39c4",text:"innerHTML only works on div elements"}],
    correctChoiceId:"a39c2",
    explanation:"innerHTML gets/sets content including HTML tags; innerText only deals with visible text."
  },
  {
    id:"a40",
    question:"localStorage stores data as…",
    choices:[{id:"a40c1",text:"Numbers"},{id:"a40c2",text:"Objects directly"},{id:"a40c3",text:"Strings only"},{id:"a40c4",text:"Binary data"}],
    correctChoiceId:"a40c3",
    explanation:"localStorage only stores strings. Use JSON.stringify() to store objects and JSON.parse() to retrieve them."
  },
  // ── PHP & MySQL Integration (Q41–80) ────────────────────────────────────
  {
    id:"a41",
    question:"In PHP, all variables must start with…",
    choices:[{id:"a41c1",text:"@"},{id:"a41c2",text:"$"},{id:"a41c3",text:"#"},{id:"a41c4",text:"%"}],
    correctChoiceId:"a41c2",
    explanation:"PHP variables always begin with a dollar sign ($), e.g. $name."
  },
  {
    id:"a42",
    question:"Which PHP operator concatenates two strings?",
    choices:[{id:"a42c1",text:"+"},{id:"a42c2",text:"&"},{id:"a42c3",text:"."},{id:"a42c4",text:","}],
    correctChoiceId:"a42c3",
    explanation:"The dot (.) is PHP's string concatenation operator. + is only for arithmetic."
  },
  {
    id:"a43",
    question:"What does <code>$_POST['email']</code> contain?",
    choices:[{id:"a43c1",text:"The URL query string"},{id:"a43c2",text:"Data sent in the HTTP request body via POST"},{id:"a43c3",text:"A server environment variable"},{id:"a43c4",text:"A session variable"}],
    correctChoiceId:"a43c2",
    explanation:"$_POST contains data submitted through an HTML form using method='POST'."
  },
  {
    id:"a44",
    question:"What error does <code>require</code> produce if the file is missing?",
    choices:[{id:"a44c1",text:"E_WARNING — script continues"},{id:"a44c2",text:"E_NOTICE — script continues"},{id:"a44c3",text:"Fatal Error — script halts"},{id:"a44c4",text:"E_DEPRECATED"}],
    correctChoiceId:"a44c3",
    explanation:"require() causes a fatal compile-time error and immediately halts script execution if the file is missing."
  },
  {
    id:"a45",
    question:"Which function must be called before accessing $_SESSION?",
    choices:[{id:"a45c1",text:"session_create()"},{id:"a45c2",text:"session_open()"},{id:"a45c3",text:"session_start()"},{id:"a45c4",text:"session_init()"}],
    correctChoiceId:"a45c3",
    explanation:"session_start() must be called at the top of the PHP file before sending any output to start the session."
  },
  {
    id:"a46",
    question:"Which superglobal stores form data sent via the URL query string?",
    choices:[{id:"a46c1",text:"$_POST"},{id:"a46c2",text:"$_REQUEST"},{id:"a46c3",text:"$_GET"},{id:"a46c4",text:"$_URL"}],
    correctChoiceId:"a46c3",
    explanation:"$_GET collects data from the URL query string, e.g. ?name=Juan&age=21."
  },
  {
    id:"a47",
    question:"What is the MySQLi method to create a prepared statement?",
    choices:[{id:"a47c1",text:"$conn->query()"},{id:"a47c2",text:"$conn->prepare()"},{id:"a47c3",text:"$conn->execute()"},{id:"a47c4",text:"$conn->compile()"}],
    correctChoiceId:"a47c2",
    explanation:"$conn->prepare() creates a prepared statement template with ? placeholders."
  },
  {
    id:"a48",
    question:"In bind_param('ssi', ...), what does the second 's' represent?",
    choices:[{id:"a48c1",text:"Session"},{id:"a48c2",text:"String"},{id:"a48c3",text:"Symbol"},{id:"a48c4",text:"Statement"}],
    correctChoiceId:"a48c2",
    explanation:"In MySQLi bind_param(), 's' stands for string. Other types: i=integer, d=double, b=blob."
  },
  {
    id:"a49",
    question:"What SQL command adds a new row to a table?",
    choices:[{id:"a49c1",text:"ADD"},{id:"a49c2",text:"INSERT INTO"},{id:"a49c3",text:"NEW INTO"},{id:"a49c4",text:"CREATE ROW"}],
    correctChoiceId:"a49c2",
    explanation:"INSERT INTO table (col1, col2) VALUES (val1, val2) adds a new record."
  },
  {
    id:"a50",
    question:"What happens if you run <code>DELETE FROM users;</code> without a WHERE clause?",
    choices:[{id:"a50c1",text:"Deletes the first row only"},{id:"a50c2",text:"Syntax error"},{id:"a50c3",text:"Deletes all rows in the table"},{id:"a50c4",text:"Deletes the table structure too"}],
    correctChoiceId:"a50c3",
    explanation:"Without WHERE, DELETE removes every row from the table."
  },
  {
    id:"a51",
    question:"Which PHP function prevents XSS by escaping HTML special characters?",
    choices:[{id:"a51c1",text:"strip_tags()"},{id:"a51c2",text:"trim()"},{id:"a51c3",text:"htmlspecialchars()"},{id:"a51c4",text:"md5()"}],
    correctChoiceId:"a51c3",
    explanation:"htmlspecialchars() converts <, >, \", ', & into HTML entities, neutralizing XSS payloads."
  },
  {
    id:"a52",
    question:"Which MySQLi method fetches a row as an associative array?",
    choices:[{id:"a52c1",text:"fetch_array()"},{id:"a52c2",text:"fetch_row()"},{id:"a52c3",text:"fetch_assoc()"},{id:"a52c4",text:"get_row()"}],
    correctChoiceId:"a52c3",
    explanation:"fetch_assoc() returns a row where the column names are the array keys."
  },
  {
    id:"a53",
    question:"What is SQL Injection?",
    choices:[{id:"a53c1",text:"A way to speed up SQL queries"},{id:"a53c2",text:"Injecting malicious SQL through user input to manipulate the database"},{id:"a53c3",text:"A PHP function for inserting data"},{id:"a53c4",text:"A MySQL stored procedure"}],
    correctChoiceId:"a53c2",
    explanation:"SQL injection inserts malicious SQL code through input fields to compromise or manipulate the database."
  },
  {
    id:"a54",
    question:"Which MySQLi connection code correctly checks for a connection error?",
    choices:[{id:"a54c1",text:"if (!$conn) { die(); }"},{id:"a54c2",text:"if ($conn->connect_error) { die($conn->connect_error); }"},{id:"a54c3",text:"if ($conn == false) { die(); }"},{id:"a54c4",text:"if ($conn->error) { die(); }"}],
    correctChoiceId:"a54c2",
    explanation:"$conn->connect_error contains the connection error message if the connection failed."
  },
  {
    id:"a55",
    question:"What is the difference between cookies and sessions in PHP?",
    choices:[{id:"a55c1",text:"Cookies are on the server; sessions are on the client"},{id:"a55c2",text:"Cookies are on the client; sessions are on the server"},{id:"a55c3",text:"They are identical"},{id:"a55c4",text:"Sessions use GET; cookies use POST"}],
    correctChoiceId:"a55c2",
    explanation:"PHP cookies are stored in the user's browser; session data is kept on the web server."
  },
  {
    id:"a56",
    question:"Which PHP operator checks equality of value AND type?",
    choices:[{id:"a56c1",text:"=="},{id:"a56c2",text:"==="},{id:"a56c3",text:"!="},{id:"a56c4",text:"<>"}],
    correctChoiceId:"a56c2",
    explanation:"=== (strict equality) checks both value and data type without type coercion."
  },
  {
    id:"a57",
    question:"What does <code>$result->num_rows</code> return?",
    choices:[{id:"a57c1",text:"The number of columns"},{id:"a57c2",text:"The number of rows in the result set"},{id:"a57c3",text:"The last inserted ID"},{id:"a57c4",text:"The number of affected rows from UPDATE"}],
    correctChoiceId:"a57c2",
    explanation:"num_rows gives the count of rows returned by a SELECT query result."
  },
  {
    id:"a58",
    question:"Which SQL clause filters records by a condition?",
    choices:[{id:"a58c1",text:"HAVING"},{id:"a58c2",text:"FILTER"},{id:"a58c3",text:"WHERE"},{id:"a58c4",text:"LIMIT"}],
    correctChoiceId:"a58c3",
    explanation:"WHERE filters which rows are returned or affected by SELECT, UPDATE, and DELETE queries."
  },
  {
    id:"a59",
    question:"What is PDO in PHP?",
    choices:[{id:"a59c1",text:"A design pattern for objects"},{id:"a59c2",text:"PHP Data Objects — a database abstraction layer supporting multiple databases"},{id:"a59c3",text:"A PHP debugging tool"},{id:"a59c4",text:"A PHP template engine"}],
    correctChoiceId:"a59c2",
    explanation:"PDO (PHP Data Objects) provides a consistent interface to interact with 12+ different database systems."
  },
  {
    id:"a60",
    question:"Which PHP loop is guaranteed to execute at least once?",
    choices:[{id:"a60c1",text:"for"},{id:"a60c2",text:"while"},{id:"a60c3",text:"do...while"},{id:"a60c4",text:"foreach"}],
    correctChoiceId:"a60c3",
    explanation:"do...while checks the condition AFTER executing the body, guaranteeing at least one execution."
  },
  {
    id:"a61",
    question:"Which PHP array syntax uses named keys?",
    choices:[{id:"a61c1",text:"$arr = [1, 2, 3]"},{id:"a61c2",text:"$arr = ['key' => 'value']"},{id:"a61c3",text:"$arr = array(1, 2, 3)"},{id:"a61c4",text:"$arr = {key: 'value'}"}],
    correctChoiceId:"a61c2",
    explanation:"Associative arrays use the => (fat arrow) operator to map string keys to values."
  },
  {
    id:"a62",
    question:"In MySQL, which data type auto-generates a unique integer for each new row?",
    choices:[{id:"a62c1",text:"UNIQUE INT"},{id:"a62c2",text:"SERIAL"},{id:"a62c3",text:"AUTO_INCREMENT"},{id:"a62c4",text:"IDENTITY"}],
    correctChoiceId:"a62c3",
    explanation:"AUTO_INCREMENT automatically assigns the next available integer when a new row is inserted."
  },
  {
    id:"a63",
    question:"What does <code>trim($str)</code> do?",
    choices:[{id:"a63c1",text:"Reverses the string"},{id:"a63c2",text:"Converts to uppercase"},{id:"a63c3",text:"Removes leading and trailing whitespace"},{id:"a63c4",text:"Splits the string"}],
    correctChoiceId:"a63c3",
    explanation:"trim() removes whitespace (or other characters) from the beginning and end of a string."
  },
  {
    id:"a64",
    question:"Which SQL command sorts results in descending order?",
    choices:[{id:"a64c1",text:"ORDER BY col ASC"},{id:"a64c2",text:"SORT col DESC"},{id:"a64c3",text:"ORDER BY col DESC"},{id:"a64c4",text:"ARRANGE col DESC"}],
    correctChoiceId:"a64c3",
    explanation:"ORDER BY column DESC sorts results from highest to lowest (or Z to A for strings)."
  },
  {
    id:"a65",
    question:"What is the output of: <code>var_dump('5' == 5);</code> in PHP?",
    choices:[{id:"a65c1",text:"bool(false)"},{id:"a65c2",text:"bool(true)"},{id:"a65c3",text:"int(1)"},{id:"a65c4",text:"NULL"}],
    correctChoiceId:"a65c2",
    explanation:"Loose equality (==) in PHP converts the string '5' to integer 5 before comparing, yielding true."
  },
  {
    id:"a66",
    question:"Which PHP function ends the current session and destroys all session data?",
    choices:[{id:"a66c1",text:"session_kill()"},{id:"a66c2",text:"session_end()"},{id:"a66c3",text:"session_destroy()"},{id:"a66c4",text:"session_close()"}],
    correctChoiceId:"a66c3",
    explanation:"session_destroy() destroys all data registered to a session. Pair it with session_unset() for full cleanup."
  },
  {
    id:"a67",
    question:"Which $_SERVER key contains the current HTTP request method?",
    choices:[{id:"a67c1",text:"$_SERVER['HTTP_TYPE']"},{id:"a67c2",text:"$_SERVER['REQUEST_TYPE']"},{id:"a67c3",text:"$_SERVER['REQUEST_METHOD']"},{id:"a67c4",text:"$_SERVER['FORM_METHOD']"}],
    correctChoiceId:"a67c3",
    explanation:"$_SERVER['REQUEST_METHOD'] returns 'GET', 'POST', 'PUT', etc. depending on the current request."
  },
  {
    id:"a68",
    question:"What is the placeholder character used in MySQLi prepared statements?",
    choices:[{id:"a68c1",text:"@"},{id:"a68c2",text:":"},{id:"a68c3",text:"#"},{id:"a68c4",text:"?"}],
    correctChoiceId:"a68c4",
    explanation:"MySQLi uses ? as placeholder in prepared statements. PDO supports both ? and :named parameters."
  },
  {
    id:"a69",
    question:"Which SQL command modifies existing data in a table?",
    choices:[{id:"a69c1",text:"MODIFY"},{id:"a69c2",text:"CHANGE"},{id:"a69c3",text:"ALTER"},{id:"a69c4",text:"UPDATE"}],
    correctChoiceId:"a69c4",
    explanation:"UPDATE table SET column = value WHERE condition; modifies existing rows."
  },
  {
    id:"a70",
    question:"Which PHP construct is used to loop over every element of an array?",
    choices:[{id:"a70c1",text:"each()"},{id:"a70c2",text:"for()"},{id:"a70c3",text:"foreach()"},{id:"a70c4",text:"loop()"}],
    correctChoiceId:"a70c3",
    explanation:"foreach($array as $key => $value) iterates over every element in an array."
  },
  {
    id:"a71",
    question:"How does MySQLi differ from PDO?",
    choices:[{id:"a71c1",text:"MySQLi is newer than PDO"},{id:"a71c2",text:"MySQLi only supports MySQL; PDO supports 12+ database systems"},{id:"a71c3",text:"PDO only supports MySQL"},{id:"a71c4",text:"They are identical internally"}],
    correctChoiceId:"a71c2",
    explanation:"MySQLi is MySQL-specific; PDO is a database-agnostic abstraction layer supporting many DBMS."
  },
  {
    id:"a72",
    question:"Which PHP function checks if a variable is set and not null?",
    choices:[{id:"a72c1",text:"exists($var)"},{id:"a72c2",text:"defined($var)"},{id:"a72c3",text:"isset($var)"},{id:"a72c4",text:"has($var)"}],
    correctChoiceId:"a72c3",
    explanation:"isset() returns true if the variable exists and is not null."
  },
  {
    id:"a73",
    question:"In a CRUD application, which operation does SELECT represent?",
    choices:[{id:"a73c1",text:"Create"},{id:"a73c2",text:"Read"},{id:"a73c3",text:"Update"},{id:"a73c4",text:"Delete"}],
    correctChoiceId:"a73c2",
    explanation:"SELECT maps to the READ operation in CRUD (Create, Read, Update, Delete)."
  },
  {
    id:"a74",
    question:"What does <code>$stmt->insert_id</code> return after a successful INSERT?",
    choices:[{id:"a74c1",text:"The number of rows in the table"},{id:"a74c2",text:"The auto-incremented ID of the newly inserted row"},{id:"a74c3",text:"The SQL query string"},{id:"a74c4",text:"The column name"}],
    correctChoiceId:"a74c2",
    explanation:"insert_id returns the ID generated by AUTO_INCREMENT for the most recently inserted row."
  },
  {
    id:"a75",
    question:"Which PHP function removes backslashes from a string?",
    choices:[{id:"a75c1",text:"trim()"},{id:"a75c2",text:"stripslashes()"},{id:"a75c3",text:"strip_tags()"},{id:"a75c4",text:"clean()"}],
    correctChoiceId:"a75c2",
    explanation:"stripslashes() un-quotes a string that has been quoted with addslashes()."
  },
  {
    id:"a76",
    question:"The SQL keyword <code>LIKE</code> is used with…",
    choices:[{id:"a76c1",text:"Exact matches only"},{id:"a76c2",text:"Pattern matching using % and _"},{id:"a76c3",text:"Numeric range queries"},{id:"a76c4",text:"Joining tables"}],
    correctChoiceId:"a76c2",
    explanation:"LIKE uses % (any sequence of characters) and _ (single character) for pattern matching."
  },
  {
    id:"a77",
    question:"Which PHP include statement skips the file if it was already included once?",
    choices:[{id:"a77c1",text:"include"},{id:"a77c2",text:"require"},{id:"a77c3",text:"include_once"},{id:"a77c4",text:"require_all"}],
    correctChoiceId:"a77c3",
    explanation:"include_once and require_once check if the file was already included and skip it if so."
  },
  {
    id:"a78",
    question:"What is the correct PHP syntax to redirect to another page?",
    choices:[{id:"a78c1",text:"redirect('page.php')"},{id:"a78c2",text:"go('page.php')"},{id:"a78c3",text:"header('Location: page.php'); exit;"},{id:"a78c4",text:"navigate('page.php')"}],
    correctChoiceId:"a78c3",
    explanation:"header('Location: page.php') sends a redirect header, and exit stops further PHP execution."
  },
  {
    id:"a79",
    question:"Which SQL clause limits the number of rows returned?",
    choices:[{id:"a79c1",text:"TOP"},{id:"a79c2",text:"LIMIT"},{id:"a79c3",text:"MAX"},{id:"a79c4",text:"ROWCOUNT"}],
    correctChoiceId:"a79c2",
    explanation:"LIMIT n restricts a SELECT query to return at most n rows."
  },
  {
    id:"a80",
    question:"What is the correct way to connect to MySQL using MySQLi OOP in PHP?",
    choices:[
      {id:"a80c1",text:"$conn = mysql_connect('localhost','root','')"},
      {id:"a80c2",text:"$conn = new mysqli('localhost','root','','db')"},
      {id:"a80c3",text:"$conn = PDO::connect('localhost','root','')"},
      {id:"a80c4",text:"$conn = mysqli_open('localhost','root','','db')"}
    ],
    correctChoiceId:"a80c2",
    explanation:"new mysqli(host, user, password, database) is the OOP syntax for a MySQLi connection."
  }
];
