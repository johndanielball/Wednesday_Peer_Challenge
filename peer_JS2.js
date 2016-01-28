//Step 1
var value = 42;
console.log(value);
//Step 2
if(value >= 53) {
	value += 42;
} else {
	value -= 13;
};
console.log(value);

//Step 3
value += '11';
console.log(value);

//Step 4
ourArray = [];

for(var i = 0; i < value.length; i++) {
	ourArray[i] = value.charAt(i);
};
console.log(ourArray);

//Step 5
ourArray.shift();
ourArray.pop();
console.log(ourArray);

//Step 6
var backwards = '';
var i = 1;

while (i >= 0) {
	backwards += ourArray[i];
	i--;
}

// for(var i = 1; i >= 0; i--) {
// 	backwards += ourArray[i];
// };	
console.log(backwards);

// Step 7
value = parseInt(value);
backwards = parseInt(backwards);
console.log(value);
console.log(backwards);

//Step 8
value = value + backwards;

//Step 9
if(value < 60) {
	value = 14;
}  else if(value = 2930) {
	value = 27;
} else {
	value = 2;
}
//Step 10
var i = 10
while (i > 0) {
	value += 1;
	i--;
}
//Step 11
var ourFunction = function(val) {
	val = val.toString();
	val = val.substring(1);
	value = val;
};

//Step 12
ourFunction(value);
//Step 13
console.log(value);