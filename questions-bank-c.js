const BANK_C = [
  // ── JavaScript Advanced (Q1–40) ──────────────────────────────────────────
  {
    id:"c1",
    question:"What is the output? <code>console.log(0.1 + 0.2 === 0.3)</code>",
    choices:[{id:"c1c1",text:"true"},{id:"c1c2",text:"false"},{id:"c1c3",text:"NaN"},{id:"c1c4",text:"undefined"}],
    correctChoiceId:"c1c2",
    explanation:"Due to floating-point precision in binary representation, 0.1 + 0.2 = 0.30000000000000004, not 0.3."
  },
  {
    id:"c2",
    question:"What does <code>Array.isArray([])</code> return?",
    choices:[{id:"c2c1",text:"false"},{id:"c2c2",text:"'array'"},{id:"c2c3",text:"true"},{id:"c2c4",text:"undefined"}],
    correctChoiceId:"c2c3",
    explanation:"Array.isArray() returns true for arrays and false for everything else."
  },
  {
    id:"c3",
    question:"What is the output? <code>console.log(typeof undefined)</code>",
    choices:[{id:"c3c1",text:"'null'"},{id:"c3c2",text:"'object'"},{id:"c3c3",text:"'undefined'"},{id:"c3c4",text:"undefined"}],
    correctChoiceId:"c3c3",
    explanation:"typeof undefined correctly returns the string 'undefined'."
  },
  {
    id:"c4",
    question:"Which approach correctly chains map() and filter()?",
    choices:[{id:"c4c1",text:"arr.map(f).filter(g)"},{id:"c4c2",text:"arr.map(f, g)"},{id:"c4c3",text:"arr.chain(f).chain(g)"},{id:"c4c4",text:"arr[map(f)][filter(g)]"}],
    correctChoiceId:"c4c1",
    explanation:"map() and filter() both return arrays, so you can chain them: arr.map(fn1).filter(fn2)."
  },
  {
    id:"c5",
    question:"What does <code>Object.freeze(obj)</code> do?",
    choices:[{id:"c5c1",text:"Converts object to string"},{id:"c5c2",text:"Prevents adding, removing, or modifying properties on the object"},{id:"c5c3",text:"Makes the object immutable permanently across sessions"},{id:"c5c4",text:"Clones the object"}],
    correctChoiceId:"c5c2",
    explanation:"Object.freeze() makes an object immutable — properties cannot be added, deleted, or changed."
  },
  {
    id:"c6",
    question:"Which code correctly uses destructuring to swap two variables?",
    choices:[{id:"c6c1",text:"a = b; b = a;"},{id:"c6c2",text:"[a, b] = [b, a];"},{id:"c6c3",text:"swap(a, b);"},{id:"c6c4",text:"{ a, b } = { b, a };"}],
    correctChoiceId:"c6c2",
    explanation:"Array destructuring [a, b] = [b, a] is the elegant ES6 way to swap two variables without a temp."
  },
  {
    id:"c7",
    question:"What does <code>Promise.race([p1, p2])</code> resolve with?",
    choices:[{id:"c7c1",text:"The last promise to settle"},{id:"c7c2",text:"An array of all results"},{id:"c7c3",text:"The first promise to settle (resolve or reject)"},{id:"c7c4",text:"Only when all promises resolve"}],
    correctChoiceId:"c7c3",
    explanation:"Promise.race() resolves/rejects as soon as the FIRST promise in the iterable settles."
  },
  {
    id:"c8",
    question:"What is a generator function?",
    choices:[{id:"c8c1",text:"A function that generates random numbers"},{id:"c8c2",text:"A function that can pause and resume execution using yield"},{id:"c8c3",text:"A function that creates class instances"},{id:"c8c4",text:"A function that runs in parallel"}],
    correctChoiceId:"c8c2",
    explanation:"Generator functions (function*) use yield to pause execution and return values iteratively."
  },
  {
    id:"c9",
    question:"What will <code>console.log(+' 5 ')</code> output?",
    choices:[{id:"c9c1",text:"' 5 '"},{id:"c9c2",text:"NaN"},{id:"c9c3",text:"5"},{id:"c9c4",text:"undefined"}],
    correctChoiceId:"c9c3",
    explanation:"The unary + operator converts a string to a number. Whitespace is trimmed automatically."
  },
  {
    id:"c10",
    question:"Which method creates a new object with a specified prototype?",
    choices:[{id:"c10c1",text:"Object.create(proto)"},{id:"c10c2",text:"new Object(proto)"},{id:"c10c3",text:"Object.make(proto)"},{id:"c10c4",text:"Object.prototype.new(proto)"}],
    correctChoiceId:"c10c1",
    explanation:"Object.create(proto) creates a new object with the given object as its prototype."
  },
  {
    id:"c11",
    question:"What does event.stopPropagation() do?",
    choices:[{id:"c11c1",text:"Prevents the default browser action"},{id:"c11c2",text:"Stops the event from bubbling up to parent elements"},{id:"c11c3",text:"Cancels the event loop"},{id:"c11c4",text:"Removes the event listener"}],
    correctChoiceId:"c11c2",
    explanation:"stopPropagation() prevents an event from bubbling up to parent elements in the DOM tree."
  },
  {
    id:"c12",
    question:"What is the output? <code>console.log([1,2,3].reduce((a,b) => a*b))</code>",
    choices:[{id:"c12c1",text:"6"},{id:"c12c2",text:"3"},{id:"c12c3",text:"[1,2,3]"},{id:"c12c4",text:"0"}],
    correctChoiceId:"c12c1",
    explanation:"Without an initial value, reduce starts with index 0 (1). Then 1*2=2, 2*3=6."
  },
  {
    id:"c13",
    question:"What does the <code>Symbol()</code> type guarantee?",
    choices:[{id:"c13c1",text:"It creates a mutable string"},{id:"c13c2",text:"It creates a unique and immutable primitive value"},{id:"c13c3",text:"It creates a global constant"},{id:"c13c4",text:"It creates an enum value"}],
    correctChoiceId:"c13c2",
    explanation:"Every Symbol() call creates a completely unique primitive — useful as unique object property keys."
  },
  {
    id:"c14",
    question:"In a Map object, what is allowed as a key (unlike plain objects)?",
    choices:[{id:"c14c1",text:"Only strings"},{id:"c14c2",text:"Only numbers"},{id:"c14c3",text:"Any value including functions, objects, and primitives"},{id:"c14c4",text:"Only symbols"}],
    correctChoiceId:"c14c3",
    explanation:"Map keys can be any value: objects, functions, numbers, strings — unlike plain objects which coerce keys to strings."
  },
  {
    id:"c15",
    question:"What does <code>arr.flat()</code> do?",
    choices:[{id:"c15c1",text:"Sorts array from smallest to largest"},{id:"c15c2",text:"Removes duplicate values"},{id:"c15c3",text:"Flattens one level of nested arrays into a single array"},{id:"c15c4",text:"Reverses the array"}],
    correctChoiceId:"c15c3",
    explanation:"flat() concatenates sub-array elements into the parent array up to one level of depth by default."
  },
  {
    id:"c16",
    question:"What is the output? <code>console.log(NaN === NaN)</code>",
    choices:[{id:"c16c1",text:"true"},{id:"c16c2",text:"false"},{id:"c16c3",text:"NaN"},{id:"c16c4",text:"undefined"}],
    correctChoiceId:"c16c2",
    explanation:"NaN is the only JavaScript value that is NOT equal to itself. Use Number.isNaN() to check."
  },
  {
    id:"c17",
    question:"Which syntax creates a Set in JavaScript?",
    choices:[{id:"c17c1",text:"new Set([1,2,3])"},{id:"c17c2",text:"Set.create([1,2,3])"},{id:"c17c3",text:"{1, 2, 3}"},{id:"c17c4",text:"set [1,2,3]"}],
    correctChoiceId:"c17c1",
    explanation:"new Set([iterable]) creates a Set — a collection of unique values."
  },
  {
    id:"c18",
    question:"What does <code>String.prototype.includes('x')</code> return?",
    choices:[{id:"c18c1",text:"The index of 'x'"},{id:"c18c2",text:"true if the string contains 'x', false otherwise"},{id:"c18c3",text:"The count of 'x' occurrences"},{id:"c18c4",text:"A new string with 'x' highlighted"}],
    correctChoiceId:"c18c2",
    explanation:"String.includes() returns a boolean indicating whether the search string is found."
  },
  {
    id:"c19",
    question:"What is the output? <code>console.log('abc'.split(''))</code>",
    choices:[{id:"c19c1",text:"'abc'"},{id:"c19c2",text:"['abc']"},{id:"c19c3",text:"['a','b','c']"},{id:"c19c4",text:"3"}],
    correctChoiceId:"c19c3",
    explanation:"split('') with an empty delimiter splits every single character into its own array element."
  },
  {
    id:"c20",
    question:"Which method removes all occurrences of a value from an array efficiently?",
    choices:[{id:"c20c1",text:"arr.remove(val)"},{id:"c20c2",text:"arr.delete(val)"},{id:"c20c3",text:"arr.filter(x => x !== val)"},{id:"c20c4",text:"arr.splice(val)"}],
    correctChoiceId:"c20c3",
    explanation:"filter() with a negation condition effectively removes all elements matching a value."
  },
  {
    id:"c21",
    question:"What is output? <code>const f = x => x * x; console.log(f(5));</code>",
    choices:[{id:"c21c1",text:"10"},{id:"c21c2",text:"5"},{id:"c21c3",text:"55"},{id:"c21c4",text:"25"}],
    correctChoiceId:"c21c4",
    explanation:"The arrow function squares its input. f(5) = 5 * 5 = 25."
  },
  {
    id:"c22",
    question:"Which method clears all data from localStorage?",
    choices:[{id:"c22c1",text:"localStorage.removeAll()"},{id:"c22c2",text:"localStorage.reset()"},{id:"c22c3",text:"localStorage.flush()"},{id:"c22c4",text:"localStorage.clear()"}],
    correctChoiceId:"c22c4",
    explanation:"localStorage.clear() removes ALL key-value pairs from localStorage."
  },
  {
    id:"c23",
    question:"What is the output? <code>const obj = { x: 1 }; const { x: y } = obj; console.log(y);</code>",
    choices:[{id:"c23c1",text:"undefined"},{id:"c23c2",text:"x"},{id:"c23c3",text:"1"},{id:"c23c4",text:"{ x: 1 }"}],
    correctChoiceId:"c23c3",
    explanation:"{ x: y } = obj destructures obj.x into a new variable named y. So y = 1."
  },
  {
    id:"c24",
    question:"Which of the following describes 'hoisting'?",
    choices:[{id:"c24c1",text:"Moving HTML elements to the top of the page"},{id:"c24c2",text:"JavaScript moving function and var declarations to the top of their scope during compilation"},{id:"c24c3",text:"Running code asynchronously"},{id:"c24c4",text:"Converting string values to numbers"}],
    correctChoiceId:"c24c2",
    explanation:"Hoisting moves function declarations and var declarations to the top of their scope before execution."
  },
  {
    id:"c25",
    question:"Which feature allows iterating custom objects using for...of?",
    choices:[{id:"c25c1",text:"Implementing [Symbol.iterator]()"},{id:"c25c2",text:"Adding a forEach() method"},{id:"c25c3",text:"Using a generator as prototype"},{id:"c25c4",text:"Implementing Symbol.asyncIterator"}],
    correctChoiceId:"c25c1",
    explanation:"Implementing the [Symbol.iterator]() method on an object makes it iterable with for...of."
  },
  {
    id:"c26",
    question:"What is a WeakMap in JavaScript?",
    choices:[{id:"c26c1",text:"A Map with a maximum entry limit"},{id:"c26c2",text:"A Map that only accepts string keys"},{id:"c26c3",text:"A Map where keys are objects and entries can be garbage collected"},{id:"c26c4",text:"A less performant version of Map"}],
    correctChoiceId:"c26c3",
    explanation:"WeakMap holds object keys weakly — if the key object has no other references, it can be garbage collected."
  },
  {
    id:"c27",
    question:"What is the output? <code>console.log([...'hello'].length)</code>",
    choices:[{id:"c27c1",text:"1"},{id:"c27c2",text:"5"},{id:"c27c3",text:"'hello'"},{id:"c27c4",text:"NaN"}],
    correctChoiceId:"c27c2",
    explanation:"Spreading 'hello' into an array creates ['h','e','l','l','o'], which has length 5."
  },
  {
    id:"c28",
    question:"Which fetch option is needed to send cookies with a cross-origin request?",
    choices:[{id:"c28c1",text:"{ mode: 'cors', credentials: 'include' }"},{id:"c28c2",text:"{ withCookies: true }"},{id:"c28c3",text:"{ sendCookies: 'always' }"},{id:"c28c4",text:"{ cookies: 'send' }"}],
    correctChoiceId:"c28c1",
    explanation:"credentials: 'include' tells fetch to send cookies in cross-origin requests; mode: 'cors' enables CORS."
  },
  {
    id:"c29",
    question:"What does <code>arr.findIndex(fn)</code> return?",
    choices:[{id:"c29c1",text:"The matching element"},{id:"c29c2",text:"The index of the first element that passes the test, or -1"},{id:"c29c3",text:"An array of matching indices"},{id:"c29c4",text:"A boolean"}],
    correctChoiceId:"c29c2",
    explanation:"findIndex() returns the index (0-based) of the first element that satisfies the callback, or -1 if none."
  },
  {
    id:"c30",
    question:"What will <code>console.log(typeof class{})</code> output?",
    choices:[{id:"c30c1",text:"'class'"},{id:"c30c2",text:"'object'"},{id:"c30c3",text:"'function'"},{id:"c30c4",text:"'constructor'"}],
    correctChoiceId:"c30c3",
    explanation:"Classes are syntactic sugar over functions. typeof returns 'function' for class declarations."
  },
  {
    id:"c31",
    question:"Which method flattens AND maps an array in one step?",
    choices:[{id:"c31c1",text:"arr.flatMap(fn)"},{id:"c31c2",text:"arr.mapFlat(fn)"},{id:"c31c3",text:"arr.map(fn).flat(2)"},{id:"c31c4",text:"arr.reduce(fn)"}],
    correctChoiceId:"c31c1",
    explanation:"flatMap() maps each element then flattens the result by one level — equivalent to map().flat(1)."
  },
  {
    id:"c32",
    question:"How do you correctly import a default export named 'anything' from './mod.js'?",
    choices:[{id:"c32c1",text:"import { default } from './mod.js'"},{id:"c32c2",text:"import anything from './mod.js'"},{id:"c32c3",text:"import * from './mod.js'"},{id:"c32c4",text:"import mod.default as anything from './mod.js'"}],
    correctChoiceId:"c32c2",
    explanation:"Default exports are imported without curly braces and can be given any name: import myName from './mod.js'."
  },
  {
    id:"c33",
    question:"What does <code>Number.isNaN('hello')</code> return?",
    choices:[{id:"c33c1",text:"true"},{id:"c33c2",text:"false"},{id:"c33c3",text:"NaN"},{id:"c33c4",text:"undefined"}],
    correctChoiceId:"c33c2",
    explanation:"Number.isNaN() returns true ONLY for the actual NaN value, NOT for non-numeric strings (unlike global isNaN())."
  },
  {
    id:"c34",
    question:"Which method removes the FIRST element from an array and returns it?",
    choices:[{id:"c34c1",text:"arr.pop()"},{id:"c34c2",text:"arr.shift()"},{id:"c34c3",text:"arr.dequeue()"},{id:"c34c4",text:"arr.removeFirst()"}],
    correctChoiceId:"c34c2",
    explanation:"shift() removes and returns the first element of an array, shifting all other elements down by one."
  },
  {
    id:"c35",
    question:"What does <code>performance.now()</code> return?",
    choices:[{id:"c35c1",text:"The current Unix timestamp in seconds"},{id:"c35c2",text:"A high-resolution timestamp in milliseconds since page load"},{id:"c35c3",text:"The current date and time"},{id:"c35c4",text:"The number of milliseconds since January 1, 1970"}],
    correctChoiceId:"c35c2",
    explanation:"performance.now() returns a DOMHighResTimeStamp in milliseconds with sub-millisecond precision."
  },
  {
    id:"c36",
    question:"Which type of scope is created by a function in JavaScript?",
    choices:[{id:"c36c1",text:"Block scope"},{id:"c36c2",text:"Module scope"},{id:"c36c3",text:"Function scope"},{id:"c36c4",text:"Global scope"}],
    correctChoiceId:"c36c3",
    explanation:"Functions create their own scope. Variables declared with var inside a function are function-scoped."
  },
  {
    id:"c37",
    question:"What will <code>JSON.stringify(undefined)</code> return?",
    choices:[{id:"c37c1",text:"'undefined'"},{id:"c37c2",text:"null"},{id:"c37c3",text:"'null'"},{id:"c37c4",text:"undefined (not a string)"}],
    correctChoiceId:"c37c4",
    explanation:"JSON.stringify(undefined) returns undefined (the primitive), not a string — undefined is not a valid JSON value."
  },
  {
    id:"c38",
    question:"Which of these is a <strong>pure function</strong>?",
    choices:[{id:"c38c1",text:"function add(a,b){ total = a+b; return total; }"},{id:"c38c2",text:"function add(a,b){ return a+b; }"},{id:"c38c3",text:"function add(a,b){ console.log(a+b); }"},{id:"c38c4",text:"function add(a){ return a + Date.now(); }"}],
    correctChoiceId:"c38c2",
    explanation:"A pure function has no side effects and always returns the same output for the same input."
  },
  {
    id:"c39",
    question:"What does MutationObserver API do?",
    choices:[{id:"c39c1",text:"Observes changes to CSS animations"},{id:"c39c2",text:"Monitors network requests"},{id:"c39c3",text:"Watches for changes in the DOM tree and triggers a callback"},{id:"c39c4",text:"Tracks JavaScript errors"}],
    correctChoiceId:"c39c3",
    explanation:"MutationObserver watches for DOM mutations (attribute, child node, or text content changes) and fires a callback."
  },
  {
    id:"c40",
    question:"What is the output? <code>const a = [1]; const b = [1]; console.log(a == b)</code>",
    choices:[{id:"c40c1",text:"true"},{id:"c40c2",text:"false"},{id:"c40c3",text:"NaN"},{id:"c40c4",text:"1"}],
    correctChoiceId:"c40c2",
    explanation:"Arrays are objects in JS. a and b point to different objects in memory, so == returns false."
  },
  // ── PHP & MySQL Integration (Q41–80) ────────────────────────────────────
  {
    id:"c41",
    question:"Which PHP function returns the maximum value in an array?",
    choices:[{id:"c41c1",text:"arr_max()"},{id:"c41c2",text:"max()"},{id:"c41c3",text:"highest()"},{id:"c41c4",text:"array_top()"}],
    correctChoiceId:"c41c2",
    explanation:"max($array) or max($val1, $val2, ...) returns the highest value."
  },
  {
    id:"c42",
    question:"Which PHP function sorts an array and maintains key association?",
    choices:[{id:"c42c1",text:"sort()"},{id:"c42c2",text:"rsort()"},{id:"c42c3",text:"asort()"},{id:"c42c4",text:"ksort()"}],
    correctChoiceId:"c42c3",
    explanation:"asort() sorts an array by value while maintaining the original key-value associations."
  },
  {
    id:"c43",
    question:"What does PHP's <code>intval($var)</code> do?",
    choices:[{id:"c43c1",text:"Checks if a variable is an integer"},{id:"c43c2",text:"Converts a variable to an integer"},{id:"c43c3",text:"Returns the integer portion of a float"},{id:"c43c4",text:"Both B and C are correct"}],
    correctChoiceId:"c43c4",
    explanation:"intval() converts a value to integer. 'intval(3.9)' returns 3, 'intval('5abc')' returns 5."
  },
  {
    id:"c44",
    question:"In MySQL, which data type stores up to 65,535 characters of text?",
    choices:[{id:"c44c1",text:"VARCHAR(255)"},{id:"c44c2",text:"CHAR(65535)"},{id:"c44c3",text:"TEXT"},{id:"c44c4",text:"MEDIUMBLOB"}],
    correctChoiceId:"c44c3",
    explanation:"TEXT stores up to 65,535 bytes. MEDIUMTEXT = 16MB, LONGTEXT = 4GB."
  },
  {
    id:"c45",
    question:"What is wrong with this PHP code? <code>$name = 'Juan'; echo \"Hello $name\";</code>",
    choices:[{id:"c45c1",text:"Single quotes should not be used"},{id:"c45c2",text:"Nothing is wrong — it outputs 'Hello Juan'"},{id:"c45c3",text:"Variables cannot be used inside double-quoted strings"},{id:"c45c4",text:"echo needs parentheses"}],
    correctChoiceId:"c45c2",
    explanation:"PHP interpolates variables inside double-quoted strings. This outputs 'Hello Juan' correctly."
  },
  {
    id:"c46",
    question:"Which SQL function returns the current date and time?",
    choices:[{id:"c46c1",text:"CURDATE()"},{id:"c46c2",text:"DATE()"},{id:"c46c3",text:"NOW()"},{id:"c46c4",text:"TIMESTAMP()"}],
    correctChoiceId:"c46c3",
    explanation:"NOW() returns the current date and time as 'YYYY-MM-DD HH:MM:SS'. CURDATE() returns date only."
  },
  {
    id:"c47",
    question:"What does the <code>->fetchAll(PDO::FETCH_ASSOC)</code> do in PDO?",
    choices:[{id:"c47c1",text:"Fetches only the first row as an associative array"},{id:"c47c2",text:"Fetches all remaining rows as an array of associative arrays"},{id:"c47c3",text:"Fetches all rows as indexed arrays"},{id:"c47c4",text:"Counts the total rows"}],
    correctChoiceId:"c47c2",
    explanation:"fetchAll(PDO::FETCH_ASSOC) retrieves all rows at once as an array of associative arrays."
  },
  {
    id:"c48",
    question:"In PHP OOP, which access modifier makes a property accessible only within its own class?",
    choices:[{id:"c48c1",text:"public"},{id:"c48c2",text:"protected"},{id:"c48c3",text:"private"},{id:"c48c4",text:"static"}],
    correctChoiceId:"c48c3",
    explanation:"private restricts access to the class that declared the member. No external or child class access."
  },
  {
    id:"c49",
    question:"What is the output? <code>echo strlen('PHP Rocks!');</code>",
    choices:[{id:"c49c1",text:"9"},{id:"c49c2",text:"10"},{id:"c49c3",text:"8"},{id:"c49c4",text:"11"}],
    correctChoiceId:"c49c2",
    explanation:"'PHP Rocks!' has 10 characters: P-H-P-space-R-o-c-k-s-! = 10."
  },
  {
    id:"c50",
    question:"Which PHP function returns the number of elements in an array?",
    choices:[{id:"c50c1",text:"sizeof()"},{id:"c50c2",text:"count()"},{id:"c50c3",text:"Both A and B are correct"},{id:"c50c4",text:"length()"}],
    correctChoiceId:"c50c3",
    explanation:"Both count($arr) and sizeof($arr) return the number of elements. sizeof is an alias for count."
  },
  {
    id:"c51",
    question:"Which SQL statement gives you only rows where the email contains 'gmail'?",
    choices:[{id:"c51c1",text:"WHERE email = 'gmail'"},{id:"c51c2",text:"WHERE email CONTAINS 'gmail'"},{id:"c51c3",text:"WHERE email LIKE '%gmail%'"},{id:"c51c4",text:"WHERE email MATCH 'gmail'"}],
    correctChoiceId:"c51c3",
    explanation:"LIKE '%gmail%' with % wildcards on both sides matches any value containing 'gmail' anywhere."
  },
  {
    id:"c52",
    question:"In PHP, which method determines whether a form was submitted via POST?",
    choices:[
      {id:"c52c1",text:"if (isset($_POST['submit']))"},
      {id:"c52c2",text:"if ($_SERVER['REQUEST_METHOD'] === 'POST')"},
      {id:"c52c3",text:"Both A and B can work"},
      {id:"c52c4",text:"if ($_POST !== null)"}
    ],
    correctChoiceId:"c52c3",
    explanation:"Both approaches work. Checking REQUEST_METHOD is more reliable; checking a submit button name is also common."
  },
  {
    id:"c53",
    question:"What does MySQL's <code>TRUNCATE TABLE users</code> do differently from DELETE?",
    choices:[{id:"c53c1",text:"TRUNCATE is slower than DELETE"},{id:"c53c2",text:"TRUNCATE resets AUTO_INCREMENT and cannot be rolled back; DELETE can be rolled back"},{id:"c53c3",text:"They are identical"},{id:"c53c4",text:"TRUNCATE deletes only rows older than 30 days"}],
    correctChoiceId:"c53c2",
    explanation:"TRUNCATE drops and recreates the table (faster, resets auto-increment, non-transactional). DELETE is row-by-row."
  },
  {
    id:"c54",
    question:"Which PHP function converts all string characters to lowercase?",
    choices:[{id:"c54c1",text:"tolower()"},{id:"c54c2",text:"str_lowercase()"},{id:"c54c3",text:"lower()"},{id:"c54c4",text:"strtolower()"}],
    correctChoiceId:"c54c4",
    explanation:"strtolower($str) converts every character in a string to its lowercase equivalent."
  },
  {
    id:"c55",
    question:"Which PHP error handling function registers a custom error handler?",
    choices:[{id:"c55c1",text:"set_error_handler(callback)"},{id:"c55c2",text:"register_error(callback)"},{id:"c55c3",text:"error_set(callback)"},{id:"c55c4",text:"handle_error(callback)"}],
    correctChoiceId:"c55c1",
    explanation:"set_error_handler(callable) registers a user-defined function to handle PHP errors."
  },
  {
    id:"c56",
    question:"Which statement about PHP's <code>foreach</code> loop is correct?",
    choices:[{id:"c56c1",text:"It can iterate over strings"},{id:"c56c2",text:"It always provides both key and value automatically"},{id:"c56c3",text:"It can iterate over arrays and objects"},{id:"c56c4",text:"It cannot iterate over associative arrays"}],
    correctChoiceId:"c56c3",
    explanation:"foreach works with arrays and objects. Use 'foreach ($arr as $k => $v)' to get keys."
  },
  {
    id:"c57",
    question:"What does <code>PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION</code> configure?",
    choices:[{id:"c57c1",text:"Disables all error reporting"},{id:"c57c2",text:"Makes PDO throw a PDOException on database errors"},{id:"c57c3",text:"Enables verbose query logging"},{id:"c57c4",text:"Switches PDO to silent mode"}],
    correctChoiceId:"c57c2",
    explanation:"ERRMODE_EXCEPTION makes PDO throw catchable PDOExceptions instead of silent failures."
  },
  {
    id:"c58",
    question:"Which SQL function returns the total sum of values in a column?",
    choices:[{id:"c58c1",text:"COUNT(col)"},{id:"c58c2",text:"TOTAL(col)"},{id:"c58c3",text:"ADD(col)"},{id:"c58c4",text:"SUM(col)"}],
    correctChoiceId:"c58c4",
    explanation:"SUM(column) returns the sum of all non-null values in the specified column."
  },
  {
    id:"c59",
    question:"What is the output? <code>echo str_repeat('ab', 3);</code>",
    choices:[{id:"c59c1",text:"'ab3'"},{id:"c59c2",text:"'aabbbb'"},{id:"c59c3",text:"'ababab'"},{id:"c59c4",text:"'ab ab ab'"}],
    correctChoiceId:"c59c3",
    explanation:"str_repeat($str, $times) repeats the string $times times: 'ab' × 3 = 'ababab'."
  },
  {
    id:"c60",
    question:"In PDO, named parameter placeholders look like…",
    choices:[{id:"c60c1",text:"?"},{id:"c60c2",text:":name"},{id:"c60c3",text:"@name"},{id:"c60c4",text:"$name"}],
    correctChoiceId:"c60c2",
    explanation:"PDO supports named placeholders like :email — used with bindParam(':email', $email) or in bindValue."
  },
  {
    id:"c61",
    question:"Which PHP function joins array elements into a string with a separator?",
    choices:[{id:"c61c1",text:"concat()"},{id:"c61c2",text:"str_join()"},{id:"c61c3",text:"glue()"},{id:"c61c4",text:"implode()"}],
    correctChoiceId:"c61c4",
    explanation:"implode($separator, $array) joins elements with the given separator. join() is an alias."
  },
  {
    id:"c62",
    question:"What SQL aggregate function returns the average of values in a column?",
    choices:[{id:"c62c1",text:"MEAN()"},{id:"c62c2",text:"AVG()"},{id:"c62c3",text:"AVERAGE()"},{id:"c62c4",text:"MED()"}],
    correctChoiceId:"c62c2",
    explanation:"AVG(column) returns the arithmetic mean of all non-null values in the column."
  },
  {
    id:"c63",
    question:"Which PHP code reads a cookie named 'theme'?",
    choices:[{id:"c63c1",text:"$_SESSION['theme']"},{id:"c63c2",text:"getCookie('theme')"},{id:"c63c3",text:"$_COOKIE['theme']"},{id:"c63c4",text:"cookie_get('theme')"}],
    correctChoiceId:"c63c3",
    explanation:"Cookies are accessed via the $_COOKIE superglobal array by their name."
  },
  {
    id:"c64",
    question:"What does <code>password_verify($input, $hash)</code> return?",
    choices:[{id:"c64c1",text:"The decrypted password"},{id:"c64c2",text:"true if input matches the hash, false otherwise"},{id:"c64c3",text:"The hash of the input"},{id:"c64c4",text:"An integer similarity score"}],
    correctChoiceId:"c64c2",
    explanation:"password_verify() compares a plain text password against a hash created by password_hash()."
  },
  {
    id:"c65",
    question:"Which SQL clause filters GROUPS (used after GROUP BY)?",
    choices:[{id:"c65c1",text:"WHERE"},{id:"c65c2",text:"FILTER"},{id:"c65c3",text:"HAVING"},{id:"c65c4",text:"LIMIT"}],
    correctChoiceId:"c65c3",
    explanation:"HAVING filters groups after GROUP BY. WHERE filters individual rows before grouping."
  },
  {
    id:"c66",
    question:"What is the purpose of <code>ob_start()</code> in PHP?",
    choices:[{id:"c66c1",text:"Opens a database connection"},{id:"c66c2",text:"Starts output buffering, capturing echo output instead of sending to browser"},{id:"c66c3",text:"Starts a PHP session"},{id:"c66c4",text:"Opens a file for writing"}],
    correctChoiceId:"c66c2",
    explanation:"ob_start() starts output buffering — all output is stored in a buffer until ob_get_clean() or ob_end_flush()."
  },
  {
    id:"c67",
    question:"What does <code>array_slice($arr, 1, 3)</code> return?",
    choices:[{id:"c67c1",text:"First 3 elements"},{id:"c67c2",text:"Elements at indices 1, 2, 3"},{id:"c67c3",text:"3 elements starting at index 1"},{id:"c67c4",text:"Elements from index 1 to 3 inclusive"}],
    correctChoiceId:"c67c3",
    explanation:"array_slice($arr, offset, length) returns $length elements starting from $offset."
  },
  {
    id:"c68",
    question:"In MySQL, which constraint prevents a column from storing NULL values?",
    choices:[{id:"c68c1",text:"UNIQUE"},{id:"c68c2",text:"NOT NULL"},{id:"c68c3",text:"REQUIRED"},{id:"c68c4",text:"DEFAULT"}],
    correctChoiceId:"c68c2",
    explanation:"NOT NULL constraint ensures the column must always have a value and cannot store NULL."
  },
  {
    id:"c69",
    question:"What is the correct PHP syntax for a heredoc string?",
    choices:[
      {id:"c69c1",text:"$str = <<< EOT\ntext\nEOT;"},
      {id:"c69c2",text:"$str = \"\"\" text \"\"\";"},
      {id:"c69c3",text:"$str = `text`;"},
      {id:"c69c4",text:"$str = #text#;"}
    ],
    correctChoiceId:"c69c1",
    explanation:"Heredoc syntax: $str = <<<LABEL\\ncontent\\nLABEL; — behaves like double-quoted strings (parses variables)."
  },
  {
    id:"c70",
    question:"What does <code>file_get_contents('file.txt')</code> do?",
    choices:[{id:"c70c1",text:"Opens a file handle"},{id:"c70c2",text:"Reads an entire file into a string"},{id:"c70c3",text:"Reads the first line of a file"},{id:"c70c4",text:"Returns the file size"}],
    correctChoiceId:"c70c2",
    explanation:"file_get_contents() reads an entire local or remote file and returns it as a string."
  },
  {
    id:"c71",
    question:"Which SQL statement removes a column from an existing table?",
    choices:[{id:"c71c1",text:"DELETE COLUMN col FROM table"},{id:"c71c2",text:"REMOVE COLUMN col FROM table"},{id:"c71c3",text:"ALTER TABLE table DROP COLUMN col"},{id:"c71c4",text:"UPDATE TABLE table REMOVE col"}],
    correctChoiceId:"c71c3",
    explanation:"ALTER TABLE tableName DROP COLUMN columnName removes a column from an existing table."
  },
  {
    id:"c72",
    question:"In PHP, the spaceship operator <code><=></code> returns…",
    choices:[{id:"c72c1",text:"true or false"},{id:"c72c2",text:"-1, 0, or 1 depending on comparison"},{id:"c72c3",text:"The larger of the two values"},{id:"c72c4",text:"0 if equal, null otherwise"}],
    correctChoiceId:"c72c2",
    explanation:"$a <=> $b returns -1 if $a < $b, 0 if $a == $b, or 1 if $a > $b. Useful in usort() callbacks."
  },
  {
    id:"c73",
    question:"Which PHP function checks whether a file exists?",
    choices:[{id:"c73c1",text:"is_file_exists()"},{id:"c73c2",text:"check_file()"},{id:"c73c3",text:"file_exists()"},{id:"c73c4",text:"exists_file()"}],
    correctChoiceId:"c73c3",
    explanation:"file_exists($path) returns true if the file or directory at $path exists."
  },
  {
    id:"c74",
    question:"What does MySQL's <code>ON DELETE CASCADE</code> foreign key option do?",
    choices:[{id:"c74c1",text:"Prevents deletion of parent rows"},{id:"c74c2",text:"Automatically deletes child rows when the parent row is deleted"},{id:"c74c3",text:"Sets child foreign key to NULL on parent delete"},{id:"c74c4",text:"Throws an error on parent delete"}],
    correctChoiceId:"c74c2",
    explanation:"ON DELETE CASCADE automatically removes all matching child records when the referenced parent row is deleted."
  },
  {
    id:"c75",
    question:"What does <code>array_unique($arr)</code> do?",
    choices:[{id:"c75c1",text:"Sorts the array"},{id:"c75c2",text:"Returns a new array with duplicate values removed"},{id:"c75c3",text:"Shuffles the array"},{id:"c75c4",text:"Returns only non-null values"}],
    correctChoiceId:"c75c2",
    explanation:"array_unique() removes duplicate values from an array and returns the result."
  },
  {
    id:"c76",
    question:"Which PHP construct allows multiple interfaces to be implemented?",
    choices:[{id:"c76c1",text:"class MyClass extends A, B {}"},{id:"c76c2",text:"class MyClass implements A, B {}"},{id:"c76c3",text:"class MyClass uses A, B {}"},{id:"c76c4",text:"class MyClass with A, B {}"}],
    correctChoiceId:"c76c2",
    explanation:"PHP classes can implement multiple interfaces: class MyClass implements InterfaceA, InterfaceB {}."
  },
  {
    id:"c77",
    question:"What is the output? <code>echo implode('-', ['a','b','c']);</code>",
    choices:[{id:"c77c1",text:"'a,b,c'"},{id:"c77c2",text:"'a-b-c'"},{id:"c77c3",text:"['a','b','c']"},{id:"c77c4",text:"'abc'"}],
    correctChoiceId:"c77c2",
    explanation:"implode('-', ['a','b','c']) joins the elements with '-' as separator: 'a-b-c'."
  },
  {
    id:"c78",
    question:"In MySQL, what does <code>INDEX</code> on a column do?",
    choices:[{id:"c78c1",text:"Makes the column the primary key"},{id:"c78c2",text:"Prevents duplicate values"},{id:"c78c3",text:"Speeds up searches and queries on that column"},{id:"c78c4",text:"Allows storing larger values"}],
    correctChoiceId:"c78c3",
    explanation:"An index creates a data structure that dramatically speeds up SELECT queries on indexed columns."
  },
  {
    id:"c79",
    question:"Which PHP OOP concept allows a child class to provide its own implementation of a parent method?",
    choices:[{id:"c79c1",text:"Abstraction"},{id:"c79c2",text:"Encapsulation"},{id:"c79c3",text:"Method Overriding"},{id:"c79c4",text:"Method Overloading"}],
    correctChoiceId:"c79c3",
    explanation:"Method Overriding allows a subclass to redefine a method from its parent class."
  },
  {
    id:"c80",
    question:"What does <code>compact('name', 'email', 'age')</code> do in PHP?",
    choices:[{id:"c80c1",text:"Compresses the strings to save memory"},{id:"c80c2",text:"Creates an associative array from variable names and their current values"},{id:"c80c3",text:"Returns a JSON string"},{id:"c80c4",text:"Creates an indexed array of the values"}],
    correctChoiceId:"c80c2",
    explanation:"compact() creates an array by pairing variable names as keys with their current values."
  }
];
