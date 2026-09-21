const BANK_B = [
  // ── JavaScript Advanced (Q1–40) ──────────────────────────────────────────
  {
    id:"b1",
    question:"Which statement correctly declares a variable that cannot be reassigned?",
    choices:[{id:"b1c1",text:"var x = 5"},{id:"b1c2",text:"let x = 5"},{id:"b1c3",text:"const x = 5"},{id:"b1c4",text:"fixed x = 5"}],
    correctChoiceId:"b1c3",
    explanation:"const prevents reassignment of the variable binding (though object properties can still change)."
  },
  {
    id:"b2",
    question:"What is the output? <code>console.log(typeof null)</code>",
    choices:[{id:"b2c1",text:"\"null\""},{id:"b2c2",text:"\"undefined\""},{id:"b2c3",text:"\"object\""},{id:"b2c4",text:"\"boolean\""}],
    correctChoiceId:"b2c3",
    explanation:"typeof null returns 'object' — a well-known JavaScript quirk/bug kept for legacy compatibility."
  },
  {
    id:"b3",
    question:"Which method creates a <strong>shallow copy</strong> of an array?",
    choices:[{id:"b3c1",text:"arr.copy()"},{id:"b3c2",text:"[...arr]"},{id:"b3c3",text:"arr.deepCopy()"},{id:"b3c4",text:"Object.clone(arr)"}],
    correctChoiceId:"b3c2",
    explanation:"The spread operator ([...arr]) creates a shallow copy of an array into a new array."
  },
  {
    id:"b4",
    question:"What does <code>Promise.all([p1, p2, p3])</code> do?",
    choices:[{id:"b4c1",text:"Runs promises sequentially"},{id:"b4c2",text:"Runs all in parallel and waits for all to resolve"},{id:"b4c3",text:"Returns the fastest resolved promise"},{id:"b4c4",text:"Retries failed promises"}],
    correctChoiceId:"b4c2",
    explanation:"Promise.all() runs all promises in parallel and resolves when ALL of them resolve (or rejects if any fails)."
  },
  {
    id:"b5",
    question:"Which method removes the last element of an array and returns it?",
    choices:[{id:"b5c1",text:"arr.shift()"},{id:"b5c2",text:"arr.splice()"},{id:"b5c3",text:"arr.pop()"},{id:"b5c4",text:"arr.remove()"}],
    correctChoiceId:"b5c3",
    explanation:"pop() removes and returns the last element of an array, mutating the original."
  },
  {
    id:"b6",
    question:"What is 'event bubbling' in the DOM?",
    choices:[{id:"b6c1",text:"An event that fires multiple times"},{id:"b6c2",text:"Events propagating from the target up to the document root"},{id:"b6c3",text:"A CSS animation effect"},{id:"b6c4",text:"A method to create events"}],
    correctChoiceId:"b6c2",
    explanation:"Event bubbling means an event fired on a child element propagates upward through its ancestors."
  },
  {
    id:"b7",
    question:"What is the output? <code>console.log(2 ** 10)</code>",
    choices:[{id:"b7c1",text:"20"},{id:"b7c2",text:"210"},{id:"b7c3",text:"1024"},{id:"b7c4",text:"NaN"}],
    correctChoiceId:"b7c3",
    explanation:"** is the exponentiation operator. 2 ** 10 = 2 to the power of 10 = 1024."
  },
  {
    id:"b8",
    question:"Which method converts an array-like object into a real Array?",
    choices:[{id:"b8c1",text:"Array.toArray()"},{id:"b8c2",text:"Array.from()"},{id:"b8c3",text:"Array.convert()"},{id:"b8c4",text:"Array.cast()"}],
    correctChoiceId:"b8c2",
    explanation:"Array.from() creates a new Array instance from an iterable or array-like object."
  },
  {
    id:"b9",
    question:"Which keyword is used to define a class method that can be called without creating an instance?",
    choices:[{id:"b9c1",text:"global"},{id:"b9c2",text:"shared"},{id:"b9c3",text:"class"},{id:"b9c4",text:"static"}],
    correctChoiceId:"b9c4",
    explanation:"static methods belong to the class itself and are called as ClassName.method() without instantiation."
  },
  {
    id:"b10",
    question:"What does <code>Object.keys(obj)</code> return?",
    choices:[{id:"b10c1",text:"An array of the object's values"},{id:"b10c2",text:"An array of the object's own enumerable property names"},{id:"b10c3",text:"An array of [key, value] pairs"},{id:"b10c4",text:"The number of properties"}],
    correctChoiceId:"b10c2",
    explanation:"Object.keys() returns an array of a given object's own enumerable property names (keys)."
  },
  {
    id:"b11",
    question:"What is a closure in JavaScript?",
    choices:[{id:"b11c1",text:"A function that stops execution"},{id:"b11c2",text:"A function bundled with its lexical environment, retaining access to outer variables"},{id:"b11c3",text:"A method to close browser windows"},{id:"b11c4",text:"A class with no constructor"}],
    correctChoiceId:"b11c2",
    explanation:"A closure is a function that remembers and accesses variables from its outer lexical scope even after that scope has finished executing."
  },
  {
    id:"b12",
    question:"Which array method tests whether at least one element passes the given test?",
    choices:[{id:"b12c1",text:"every()"},{id:"b12c2",text:"find()"},{id:"b12c3",text:"includes()"},{id:"b12c4",text:"some()"}],
    correctChoiceId:"b12c4",
    explanation:"some() returns true if at least one element satisfies the testing function."
  },
  {
    id:"b13",
    question:"What does <code>document.querySelectorAll('p')</code> return?",
    choices:[{id:"b13c1",text:"The first p element"},{id:"b13c2",text:"A NodeList of ALL p elements"},{id:"b13c3",text:"An HTMLCollection of p elements"},{id:"b13c4",text:"An array of p elements"}],
    correctChoiceId:"b13c2",
    explanation:"querySelectorAll() returns a static NodeList containing all matching elements."
  },
  {
    id:"b14",
    question:"Which syntax uses object shorthand property when variable name matches key?",
    choices:[{id:"b14c1",text:"{ name: name }"},{id:"b14c2",text:"{ name }"},{id:"b14c3",text:"{ 'name' }"},{id:"b14c4",text:"{ [name] }"}],
    correctChoiceId:"b14c2",
    explanation:"ES6 shorthand: if the key and variable name are the same, you can write { name } instead of { name: name }."
  },
  {
    id:"b15",
    question:"What is the output? <code>console.log(!!0)</code>",
    choices:[{id:"b15c1",text:"0"},{id:"b15c2",text:"1"},{id:"b15c3",text:"true"},{id:"b15c4",text:"false"}],
    correctChoiceId:"b15c4",
    explanation:"!! double-negation converts to boolean. 0 is falsy, so !0 = true, !!0 = false."
  },
  {
    id:"b16",
    question:"How do you handle an error thrown inside an async function?",
    choices:[{id:"b16c1",text:"Use an if/else block"},{id:"b16c2",text:"Use try/catch inside the async function"},{id:"b16c3",text:"Pass a second callback"},{id:"b16c4",text:"Use .error() chained to the async call"}],
    correctChoiceId:"b16c2",
    explanation:"try/catch inside an async function catches both synchronous throws and awaited Promise rejections."
  },
  {
    id:"b17",
    question:"Which method adds an element to the <strong>beginning</strong> of an array?",
    choices:[{id:"b17c1",text:"arr.push()"},{id:"b17c2",text:"arr.append()"},{id:"b17c3",text:"arr.unshift()"},{id:"b17c4",text:"arr.prepend()"}],
    correctChoiceId:"b17c3",
    explanation:"unshift() inserts one or more elements at the beginning of an array and returns the new length."
  },
  {
    id:"b18",
    question:"In ES6 class inheritance, <code>extends</code> is used to…",
    choices:[{id:"b18c1",text:"Create a copy of the parent class"},{id:"b18c2",text:"Establish a parent-child relationship between two classes"},{id:"b18c3",text:"Add static methods"},{id:"b18c4",text:"Define getter methods"}],
    correctChoiceId:"b18c2",
    explanation:"extends creates a class that inherits properties and methods from the specified parent class."
  },
  {
    id:"b19",
    question:"What does <code>classList.toggle('active')</code> do?",
    choices:[{id:"b19c1",text:"Removes all classes"},{id:"b19c2",text:"Adds 'active' if absent, removes it if present"},{id:"b19c3",text:"Checks if 'active' exists"},{id:"b19c4",text:"Replaces all classes with 'active'"}],
    correctChoiceId:"b19c2",
    explanation:"classList.toggle() adds the class if it doesn't exist, removes it if it does — like a light switch."
  },
  {
    id:"b20",
    question:"What is the correct way to return an object literal from an arrow function on one line?",
    choices:[{id:"b20c1",text:"const f = () => { key: 'val' }"},{id:"b20c2",text:"const f = () => ({ key: 'val' })"},{id:"b20c3",text:"const f = () => [key: 'val']"},{id:"b20c4",text:"const f = () => return { key: 'val' }"}],
    correctChoiceId:"b20c2",
    explanation:"Wrapping the object in parentheses tells JS it's an expression, not a block statement."
  },
  {
    id:"b21",
    question:"Which fetch property checks if the HTTP response was successful (status 200-299)?",
    choices:[{id:"b21c1",text:"response.status === 200"},{id:"b21c2",text:"response.success"},{id:"b21c3",text:"response.ok"},{id:"b21c4",text:"response.valid"}],
    correctChoiceId:"b21c3",
    explanation:"response.ok is a boolean that is true when the HTTP status is in the 200-299 range."
  },
  {
    id:"b22",
    question:"What is the output? <code>[1,2,3].filter(x => x > 1).length</code>",
    choices:[{id:"b22c1",text:"1"},{id:"b22c2",text:"2"},{id:"b22c3",text:"3"},{id:"b22c4",text:"true"}],
    correctChoiceId:"b22c2",
    explanation:"filter(x => x > 1) keeps elements 2 and 3, resulting in an array of length 2."
  },
  {
    id:"b23",
    question:"Which method stores data in localStorage?",
    choices:[{id:"b23c1",text:"localStorage.store()"},{id:"b23c2",text:"localStorage.put()"},{id:"b23c3",text:"localStorage.setItem()"},{id:"b23c4",text:"localStorage.save()"}],
    correctChoiceId:"b23c3",
    explanation:"localStorage.setItem(key, value) stores a key-value pair in localStorage."
  },
  {
    id:"b24",
    question:"When destructuring, how do you assign a default value if a property doesn't exist?",
    choices:[{id:"b24c1",text:"const { name || 'default' } = obj"},{id:"b24c2",text:"const { name = 'default' } = obj"},{id:"b24c3",text:"const { name ?? 'default' } = obj"},{id:"b24c4",text:"const { name: 'default' } = obj"}],
    correctChoiceId:"b24c2",
    explanation:"Destructuring default: const { name = 'Anonymous' } = obj; — uses = inside the braces."
  },
  {
    id:"b25",
    question:"What is the correct way to define a class <code>Cat</code> that inherits from <code>Animal</code>?",
    choices:[{id:"b25c1",text:"class Cat inherits Animal {}"},{id:"b25c2",text:"class Cat : Animal {}"},{id:"b25c3",text:"class Cat extends Animal {}"},{id:"b25c4",text:"class Cat(Animal) {}"}],
    correctChoiceId:"b25c3",
    explanation:"'extends' is the ES6 keyword for class inheritance: class Cat extends Animal {}."
  },
  {
    id:"b26",
    question:"Which describes the difference between map() and reduce()?",
    choices:[{id:"b26c1",text:"map() returns one value; reduce() returns an array"},{id:"b26c2",text:"map() transforms each element into a new array; reduce() combines all elements into a single value"},{id:"b26c3",text:"They are identical"},{id:"b26c4",text:"reduce() filters elements; map() adds elements"}],
    correctChoiceId:"b26c2",
    explanation:"map() = 1-to-1 transformation. reduce() = many-to-one accumulation."
  },
  {
    id:"b27",
    question:"What happens when you call <code>new</code> on an arrow function?",
    choices:[{id:"b27c1",text:"It creates a new instance"},{id:"b27c2",text:"It returns undefined"},{id:"b27c3",text:"It throws a TypeError"},{id:"b27c4",text:"It calls the function normally"}],
    correctChoiceId:"b27c3",
    explanation:"Arrow functions cannot be used as constructors. Calling new on one throws a TypeError."
  },
  {
    id:"b28",
    question:"What does <code>response.json()</code> return?",
    choices:[{id:"b28c1",text:"A string"},{id:"b28c2",text:"A JSON object directly"},{id:"b28c3",text:"A Promise that resolves to a JavaScript object"},{id:"b28c4",text:"An array"}],
    correctChoiceId:"b28c3",
    explanation:"response.json() also returns a Promise; you must await it to get the parsed JavaScript object."
  },
  {
    id:"b29",
    question:"Which is true about 'let' vs 'var'?",
    choices:[{id:"b29c1",text:"let is function-scoped; var is block-scoped"},{id:"b29c2",text:"let is block-scoped; var is function-scoped"},{id:"b29c3",text:"Both are block-scoped"},{id:"b29c4",text:"Both are global-scoped"}],
    correctChoiceId:"b29c2",
    explanation:"let is block-scoped (exists only within {}). var is function-scoped and hoisted."
  },
  {
    id:"b30",
    question:"Which callback format is used with setTimeout()?",
    choices:[{id:"b30c1",text:"setTimeout(1000, callback)"},{id:"b30c2",text:"setTimeout(callback, 1000)"},{id:"b30c3",text:"setTimeout(callback)(1000)"},{id:"b30c4",text:"setTimeout.run(callback, 1000)"}],
    correctChoiceId:"b30c2",
    explanation:"setTimeout(callback, milliseconds) calls the callback after the specified delay."
  },
  {
    id:"b31",
    question:"What is the output? <code>console.log('2' + 2)</code>",
    choices:[{id:"b31c1",text:"4"},{id:"b31c2",text:"22"},{id:"b31c3",text:"NaN"},{id:"b31c4",text:"'22'"}],
    correctChoiceId:"b31c2",
    explanation:"When + is used with a string, JavaScript coerces the number to a string and concatenates: '2' + '2' = '22'."
  },
  {
    id:"b32",
    question:"Which syntax correctly imports ALL named exports from a module?",
    choices:[{id:"b32c1",text:"import * as utils from './utils.js'"},{id:"b32c2",text:"import all from './utils.js'"},{id:"b32c3",text:"import { * } from './utils.js'"},{id:"b32c4",text:"import everything from './utils.js'"}],
    correctChoiceId:"b32c1",
    explanation:"import * as alias bundles all named exports into a namespace object."
  },
  {
    id:"b33",
    question:"Which method can you use to check if an array includes a specific value?",
    choices:[{id:"b33c1",text:"arr.has()"},{id:"b33c2",text:"arr.contains()"},{id:"b33c3",text:"arr.includes()"},{id:"b33c4",text:"arr.find()"}],
    correctChoiceId:"b33c3",
    explanation:"arr.includes(value) returns true if the value exists in the array."
  },
  {
    id:"b34",
    question:"What does <code>element.style.display = 'none'</code> do?",
    choices:[{id:"b34c1",text:"Removes the element from DOM"},{id:"b34c2",text:"Hides the element while keeping it in the DOM"},{id:"b34c3",text:"Changes the element's color to none"},{id:"b34c4",text:"Sets display to block"}],
    correctChoiceId:"b34c2",
    explanation:"display: none hides the element visually and removes it from layout flow, but it remains in the DOM."
  },
  {
    id:"b35",
    question:"What does the <code>set</code> keyword do in a class?",
    choices:[{id:"b35c1",text:"Creates a static method"},{id:"b35c2",text:"Defines a setter that intercepts property assignment"},{id:"b35c3",text:"Sets an initial value"},{id:"b35c4",text:"Freezes a property"}],
    correctChoiceId:"b35c2",
    explanation:"A setter (set keyword) intercepts assignment operations on a property and runs custom code."
  },
  {
    id:"b36",
    question:"Which syntax correctly performs optional chaining to avoid errors on undefined objects?",
    choices:[{id:"b36c1",text:"obj.user && obj.user.name"},{id:"b36c2",text:"obj?.user?.name"},{id:"b36c3",text:"obj!.user!.name"},{id:"b36c4",text:"obj->user->name"}],
    correctChoiceId:"b36c2",
    explanation:"Optional chaining (?.) short-circuits and returns undefined if any part of the chain is null/undefined."
  },
  {
    id:"b37",
    question:"What does <code>[...str]</code> do when str is a string?",
    choices:[{id:"b37c1",text:"Duplicates the string"},{id:"b37c2",text:"Converts the string into an array of its characters"},{id:"b37c3",text:"Reverses the string"},{id:"b37c4",text:"Throws a TypeError"}],
    correctChoiceId:"b37c2",
    explanation:"Spreading a string with [...str] creates an array of individual characters since strings are iterable."
  },
  {
    id:"b38",
    question:"Which is NOT a valid pending-state outcome for a Promise?",
    choices:[{id:"b38c1",text:"fulfilled"},{id:"b38c2",text:"rejected"},{id:"b38c3",text:"cancelled"},{id:"b38c4",text:"Both fulfilled and rejected are valid"}],
    correctChoiceId:"b38c3",
    explanation:"Promises only have three states: pending, fulfilled, and rejected. There is no 'cancelled' state."
  },
  {
    id:"b39",
    question:"Which built-in method sorts an array in place?",
    choices:[{id:"b39c1",text:"arr.sort()"},{id:"b39c2",text:"arr.order()"},{id:"b39c3",text:"arr.arrange()"},{id:"b39c4",text:"arr.rank()"}],
    correctChoiceId:"b39c1",
    explanation:"sort() sorts the array in place (mutates the original) and also returns it."
  },
  {
    id:"b40",
    question:"What does the nullish coalescing operator <code>??</code> return?",
    choices:[{id:"b40c1",text:"The left side if truthy, otherwise the right side"},{id:"b40c2",text:"The left side if NOT null or undefined, otherwise the right side"},{id:"b40c3",text:"The right side always"},{id:"b40c4",text:"Converts null to false"}],
    correctChoiceId:"b40c2",
    explanation:"?? only falls back to the right side when the left is null or undefined (not for 0, false, or '')."
  },
  // ── PHP & MySQL Integration (Q41–80) ────────────────────────────────────
  {
    id:"b41",
    question:"Which PHP function formats a number with thousands separator and decimal places?",
    choices:[{id:"b41c1",text:"round()"},{id:"b41c2",text:"printf()"},{id:"b41c3",text:"number_format()"},{id:"b41c4",text:"sprintf()"}],
    correctChoiceId:"b41c3",
    explanation:"number_format($num, 2) formats as '1,234.56' — useful for displaying prices."
  },
  {
    id:"b42",
    question:"Which PHP global gives information about uploaded files?",
    choices:[{id:"b42c1",text:"$_POST['file']"},{id:"b42c2",text:"$_FILES"},{id:"b42c3",text:"$_UPLOAD"},{id:"b42c4",text:"$_SERVER['files']"}],
    correctChoiceId:"b42c2",
    explanation:"$_FILES is the superglobal that contains information about uploaded files via HTTP POST."
  },
  {
    id:"b43",
    question:"What is the correct PHP syntax to start an if/elseif/else block?",
    choices:[{id:"b43c1",text:"if ($x > 5) { } elif ($x > 2) { } else { }"},{id:"b43c2",text:"if ($x > 5) { } else if ($x > 2) { } else { }"},{id:"b43c3",text:"if ($x > 5) { } elsif ($x > 2) { } else { }"},{id:"b43c4",text:"check ($x > 5) { } otherwise { }"}],
    correctChoiceId:"b43c2",
    explanation:"PHP uses elseif (one word) or else if (two words). Both are valid."
  },
  {
    id:"b44",
    question:"Which SQL aggregate function counts the number of rows?",
    choices:[{id:"b44c1",text:"SUM()"},{id:"b44c2",text:"TOTAL()"},{id:"b44c3",text:"COUNT()"},{id:"b44c4",text:"NUM()"}],
    correctChoiceId:"b44c3",
    explanation:"COUNT(*) returns the total number of rows; COUNT(col) counts non-null values in a column."
  },
  {
    id:"b45",
    question:"Which PHP function validates that a string is a valid email address?",
    choices:[{id:"b45c1",text:"validate_email($str)"},{id:"b45c2",text:"is_email($str)"},{id:"b45c3",text:"filter_var($str, FILTER_VALIDATE_EMAIL)"},{id:"b45c4",text:"check_email($str)"}],
    correctChoiceId:"b45c3",
    explanation:"filter_var($email, FILTER_VALIDATE_EMAIL) returns the email if valid or false if not."
  },
  {
    id:"b46",
    question:"What does <code>$conn->affected_rows</code> tell you?",
    choices:[{id:"b46c1",text:"Number of columns selected"},{id:"b46c2",text:"Number of rows affected by the last INSERT/UPDATE/DELETE"},{id:"b46c3",text:"Number of rows in the table"},{id:"b46c4",text:"The last insert ID"}],
    correctChoiceId:"b46c2",
    explanation:"affected_rows returns the number of rows affected by the previous write operation."
  },
  {
    id:"b47",
    question:"What SQL keyword retrieves unique/distinct values from a column?",
    choices:[{id:"b47c1",text:"UNIQUE"},{id:"b47c2",text:"DIFFERENT"},{id:"b47c3",text:"DISTINCT"},{id:"b47c4",text:"SINGLE"}],
    correctChoiceId:"b47c3",
    explanation:"SELECT DISTINCT col FROM table returns only unique values from that column."
  },
  {
    id:"b48",
    question:"In PHP, what does <code>die('Error message')</code> do?",
    choices:[{id:"b48c1",text:"Shows an error and continues"},{id:"b48c2",text:"Logs the message and restarts"},{id:"b48c3",text:"Outputs the message and immediately stops script execution"},{id:"b48c4",text:"Sends an HTTP 500 error"}],
    correctChoiceId:"b48c3",
    explanation:"die() (alias of exit()) prints the message and immediately terminates the PHP script."
  },
  {
    id:"b49",
    question:"Which PHP construct allows switching between multiple specific values?",
    choices:[{id:"b49c1",text:"if/elseif"},{id:"b49c2",text:"for"},{id:"b49c3",text:"match"},{id:"b49c4",text:"switch"}],
    correctChoiceId:"b49c4",
    explanation:"switch($var) { case 'a': ... } tests a single variable against multiple specific values."
  },
  {
    id:"b50",
    question:"What is the correct way to hash a password securely in PHP?",
    choices:[{id:"b50c1",text:"md5($password)"},{id:"b50c2",text:"sha1($password)"},{id:"b50c3",text:"password_hash($password, PASSWORD_DEFAULT)"},{id:"b50c4",text:"base64_encode($password)"}],
    correctChoiceId:"b50c3",
    explanation:"password_hash() uses bcrypt by default and is the modern secure way to hash passwords in PHP."
  },
  {
    id:"b51",
    question:"Which SQL clause groups rows sharing the same value in a column?",
    choices:[{id:"b51c1",text:"SORT BY"},{id:"b51c2",text:"GROUP BY"},{id:"b51c3",text:"CLUSTER BY"},{id:"b51c4",text:"PARTITION BY"}],
    correctChoiceId:"b51c2",
    explanation:"GROUP BY groups rows with identical values in the specified column(s), used with aggregate functions."
  },
  {
    id:"b52",
    question:"What does <code>htmlspecialchars_decode()</code> do?",
    choices:[{id:"b52c1",text:"Converts HTML entities back to special characters"},{id:"b52c2",text:"Strips all HTML tags"},{id:"b52c3",text:"Encodes characters for URLs"},{id:"b52c4",text:"Validates HTML structure"}],
    correctChoiceId:"b52c1",
    explanation:"htmlspecialchars_decode() reverses htmlspecialchars(), converting &amp; back to &, &lt; to <, etc."
  },
  {
    id:"b53",
    question:"Which PHP function returns the length of a string?",
    choices:[{id:"b53c1",text:"str_length()"},{id:"b53c2",text:"count()"},{id:"b53c3",text:"strlen()"},{id:"b53c4",text:"size()"}],
    correctChoiceId:"b53c3",
    explanation:"strlen($str) returns the number of bytes (characters) in the string."
  },
  {
    id:"b54",
    question:"Which SQL statement creates a new table?",
    choices:[{id:"b54c1",text:"MAKE TABLE users (...)"},{id:"b54c2",text:"BUILD TABLE users (...)"},{id:"b54c3",text:"NEW TABLE users (...)"},{id:"b54c4",text:"CREATE TABLE users (...)"}],
    correctChoiceId:"b54c4",
    explanation:"CREATE TABLE tableName (columns definitions); is the DDL command to define a new table."
  },
  {
    id:"b55",
    question:"What is the output of: <code>echo 10 % 3;</code> in PHP?",
    choices:[{id:"b55c1",text:"3"},{id:"b55c2",text:"3.33"},{id:"b55c3",text:"1"},{id:"b55c4",text:"0"}],
    correctChoiceId:"b55c3",
    explanation:"% is the modulo operator. 10 divided by 3 is 3 remainder 1."
  },
  {
    id:"b56",
    question:"Which PHP function splits a string by a delimiter into an array?",
    choices:[{id:"b56c1",text:"str_split()"},{id:"b56c2",text:"split()"},{id:"b56c3",text:"explode()"},{id:"b56c4",text:"chunk()"}],
    correctChoiceId:"b56c3",
    explanation:"explode($delimiter, $string) splits a string by delimiter and returns an array."
  },
  {
    id:"b57",
    question:"What does <code>PRIMARY KEY</code> enforce in a MySQL table?",
    choices:[{id:"b57c1",text:"Values must be integers"},{id:"b57c2",text:"Values must be unique and not null"},{id:"b57c3",text:"Values must be indexed only"},{id:"b57c4",text:"Values must be sequential"}],
    correctChoiceId:"b57c2",
    explanation:"A PRIMARY KEY uniquely identifies each row — it enforces both UNIQUE and NOT NULL constraints."
  },
  {
    id:"b58",
    question:"How do you execute a prepared statement in MySQLi?",
    choices:[{id:"b58c1",text:"$stmt->run()"},{id:"b58c2",text:"$stmt->query()"},{id:"b58c3",text:"$stmt->execute()"},{id:"b58c4",text:"$stmt->send()"}],
    correctChoiceId:"b58c3",
    explanation:"After prepare() and bind_param(), call $stmt->execute() to send the query to MySQL."
  },
  {
    id:"b59",
    question:"Which PHP function returns the current date as a formatted string?",
    choices:[{id:"b59c1",text:"current_date()"},{id:"b59c2",text:"getdate()"},{id:"b59c3",text:"now()"},{id:"b59c4",text:"date('Y-m-d')"}],
    correctChoiceId:"b59c4",
    explanation:"date('Y-m-d') returns the current date formatted as YYYY-MM-DD, e.g. '2024-09-21'."
  },
  {
    id:"b60",
    question:"What is the purpose of <code>FOREIGN KEY</code> in MySQL?",
    choices:[{id:"b60c1",text:"Speeds up queries"},{id:"b60c2",text:"Links a column to the PRIMARY KEY in another table"},{id:"b60c3",text:"Creates an index automatically"},{id:"b60c4",text:"Prevents NULLs"}],
    correctChoiceId:"b60c2",
    explanation:"A FOREIGN KEY establishes a referential integrity link between two tables."
  },
  {
    id:"b61",
    question:"What does <code>array_push($arr, $val)</code> do?",
    choices:[{id:"b61c1",text:"Adds a value to the beginning of an array"},{id:"b61c2",text:"Removes the last element"},{id:"b61c3",text:"Adds a value to the end of an array"},{id:"b61c4",text:"Merges two arrays"}],
    correctChoiceId:"b61c3",
    explanation:"array_push() appends one or more values to the end of an array."
  },
  {
    id:"b62",
    question:"Which SQL keyword joins two tables based on related columns?",
    choices:[{id:"b62c1",text:"MERGE"},{id:"b62c2",text:"COMBINE"},{id:"b62c3",text:"CONNECT"},{id:"b62c4",text:"JOIN"}],
    correctChoiceId:"b62c4",
    explanation:"JOIN (INNER JOIN, LEFT JOIN etc.) combines rows from two or more tables based on related columns."
  },
  {
    id:"b63",
    question:"Which PHP function checks if a value exists in an array?",
    choices:[{id:"b63c1",text:"array_key_exists()"},{id:"b63c2",text:"in_array()"},{id:"b63c3",text:"array_search()"},{id:"b63c4",text:"array_contains()"}],
    correctChoiceId:"b63c2",
    explanation:"in_array($needle, $haystack) returns true if the value exists in the array."
  },
  {
    id:"b64",
    question:"What does <code>$stmt->get_result()</code> return?",
    choices:[{id:"b64c1",text:"A boolean"},{id:"b64c2",text:"A MySQLi_Result object you can iterate with fetch_assoc()"},{id:"b64c3",text:"An array of all rows"},{id:"b64c4",text:"The row count"}],
    correctChoiceId:"b64c2",
    explanation:"get_result() returns a MySQLi_Result so you can call fetch_assoc() on a prepared statement's SELECT."
  },
  {
    id:"b65",
    question:"What is the correct PHP syntax to define a function?",
    choices:[{id:"b65c1",text:"def greet($name) { }"},{id:"b65c2",text:"fn greet($name) { }"},{id:"b65c3",text:"function greet($name) { }"},{id:"b65c4",text:"func greet($name) { }"}],
    correctChoiceId:"b65c3",
    explanation:"PHP functions are declared using the 'function' keyword: function name($params) { body }"
  },
  {
    id:"b66",
    question:"Which PHP variable scope keyword allows accessing global variables inside a function?",
    choices:[{id:"b66c1",text:"extern"},{id:"b66c2",text:"shared"},{id:"b66c3",text:"public"},{id:"b66c4",text:"global"}],
    correctChoiceId:"b66c4",
    explanation:"The 'global' keyword inside a function tells PHP to use the global scope's version of a variable."
  },
  {
    id:"b67",
    question:"In the CRUD acronym, what operation does DELETE represent?",
    choices:[{id:"b67c1",text:"Data Elimination"},{id:"b67c2",text:"The D in CRUD — removing records from the database"},{id:"b67c3",text:"Deactivating a record"},{id:"b67c4",text:"Disabling a table column"}],
    correctChoiceId:"b67c2",
    explanation:"CRUD = Create, Read, Update, Delete. DELETE removes records from the database."
  },
  {
    id:"b68",
    question:"What does <code>setcookie('token', 'abc', time()+3600)</code> do?",
    choices:[{id:"b68c1",text:"Stores 'abc' in a session"},{id:"b68c2",text:"Creates a cookie named 'token' that expires in 1 hour"},{id:"b68c3",text:"Stores 3600 seconds in a variable"},{id:"b68c4",text:"Deletes the 'token' cookie"}],
    correctChoiceId:"b68c2",
    explanation:"setcookie(name, value, expiry) creates a cookie expiring at time()+3600 = now + 1 hour."
  },
  {
    id:"b69",
    question:"Which is the correct syntax for a PHP ternary operator?",
    choices:[{id:"b69c1",text:"$result = $x > 5 ? 'big' : 'small'"},{id:"b69c2",text:"$result = if($x>5) 'big' else 'small'"},{id:"b69c3",text:"$result = ($x > 5) then 'big' else 'small'"},{id:"b69c4",text:"$result = $x > 5 | 'big' : 'small'"}],
    correctChoiceId:"b69c1",
    explanation:"PHP ternary: condition ? valueIfTrue : valueIfFalse"
  },
  {
    id:"b70",
    question:"What PHP function merges two or more arrays?",
    choices:[{id:"b70c1",text:"array_join()"},{id:"b70c2",text:"array_combine()"},{id:"b70c3",text:"array_merge()"},{id:"b70c4",text:"array_concat()"}],
    correctChoiceId:"b70c3",
    explanation:"array_merge($a, $b) merges two arrays. Numeric keys are re-indexed; string keys override from last array."
  },
  {
    id:"b71",
    question:"Which SQL command permanently removes a table from the database?",
    choices:[{id:"b71c1",text:"DELETE TABLE users"},{id:"b71c2",text:"REMOVE TABLE users"},{id:"b71c3",text:"DROP TABLE users"},{id:"b71c4",text:"CLEAR TABLE users"}],
    correctChoiceId:"b71c3",
    explanation:"DROP TABLE removes the table structure AND all its data permanently."
  },
  {
    id:"b72",
    question:"What is the difference between <code>include</code> and <code>include_once</code>?",
    choices:[{id:"b72c1",text:"include_once throws an error if file is missing"},{id:"b72c2",text:"include_once includes the file only once, preventing duplicate inclusions"},{id:"b72c3",text:"They are identical"},{id:"b72c4",text:"include can include remote files; include_once cannot"}],
    correctChoiceId:"b72c2",
    explanation:"include_once checks if the file was already included and skips it if so, preventing duplicate function definitions."
  },
  {
    id:"b73",
    question:"Which of these correctly creates a new MySQLi OOP connection?",
    choices:[
      {id:"b73c1",text:"$conn = mysqli('localhost','root','','db')"},
      {id:"b73c2",text:"$conn = new mysqli('localhost','root','','db')"},
      {id:"b73c3",text:"$conn = MySQLi::connect('localhost')"},
      {id:"b73c4",text:"$conn = open_mysqli('localhost','root','','db')"}
    ],
    correctChoiceId:"b73c2",
    explanation:"The OOP MySQLi syntax uses 'new mysqli(host, user, pass, db)' to create a connection object."
  },
  {
    id:"b74",
    question:"What is the PHP null coalescing operator?",
    choices:[{id:"b74c1",text:"||"},{id:"b74c2",text:"&&"},{id:"b74c3",text:"??"},{id:"b74c4",text:"?:"}],
    correctChoiceId:"b74c3",
    explanation:"?? returns the left operand if it exists and is not null; otherwise returns the right operand."
  },
  {
    id:"b75",
    question:"What does SQL INNER JOIN return?",
    choices:[{id:"b75c1",text:"All rows from both tables"},{id:"b75c2",text:"Only rows that have matching values in both tables"},{id:"b75c3",text:"All rows from the left table plus matches from right"},{id:"b75c4",text:"All rows from the right table"}],
    correctChoiceId:"b75c2",
    explanation:"INNER JOIN returns only the rows where there is a match in BOTH tables."
  },
  {
    id:"b76",
    question:"Which PHP function converts a string to all uppercase?",
    choices:[{id:"b76c1",text:"uppercase()"},{id:"b76c2",text:"str_upper()"},{id:"b76c3",text:"toUpperCase()"},{id:"b76c4",text:"strtoupper()"}],
    correctChoiceId:"b76c4",
    explanation:"strtoupper($str) returns the string with all letters converted to uppercase."
  },
  {
    id:"b77",
    question:"What does <code>$_SERVER['PHP_SELF']</code> contain?",
    choices:[{id:"b77c1",text:"The PHP version"},{id:"b77c2",text:"The filename of the currently executing PHP script"},{id:"b77c3",text:"The server's hostname"},{id:"b77c4",text:"The user's IP address"}],
    correctChoiceId:"b77c2",
    explanation:"$_SERVER['PHP_SELF'] returns the filename + path of the currently executing script."
  },
  {
    id:"b78",
    question:"Which SQL command selects only records where age is between 18 and 30?",
    choices:[{id:"b78c1",text:"SELECT * FROM users WHERE age IN (18,30)"},{id:"b78c2",text:"SELECT * FROM users WHERE age RANGE 18 TO 30"},{id:"b78c3",text:"SELECT * FROM users WHERE age BETWEEN 18 AND 30"},{id:"b78c4",text:"SELECT * FROM users WHERE 18 < age < 30"}],
    correctChoiceId:"b78c3",
    explanation:"BETWEEN is inclusive: WHERE age BETWEEN 18 AND 30 selects ages 18 through 30."
  },
  {
    id:"b79",
    question:"What is the output? <code>echo count([1, 2, 3, 4, 5]);</code>",
    choices:[{id:"b79c1",text:"4"},{id:"b79c2",text:"15"},{id:"b79c3",text:"5"},{id:"b79c4",text:"1"}],
    correctChoiceId:"b79c3",
    explanation:"count() returns the number of elements in an array. The array has 5 elements."
  },
  {
    id:"b80",
    question:"In PHP, the <code>static</code> variable keyword inside a function…",
    choices:[{id:"b80c1",text:"Makes the variable global"},{id:"b80c2",text:"Deletes the variable after function ends"},{id:"b80c3",text:"Retains the variable's value between multiple calls to the function"},{id:"b80c4",text:"Prevents modification of the variable"}],
    correctChoiceId:"b80c3",
    explanation:"A static variable inside a function is only initialized once and retains its value across multiple calls."
  }
];
