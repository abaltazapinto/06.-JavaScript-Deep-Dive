/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 143;
const isModerator = true;

const bino = isModerator && karma > 140 || false

console.log(bino)

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma = true ? karma > 142 : false

console.log(hasEnoughKarma)
//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote = hasEnoughKarma || isModerator

console.log("canUpvote:", canUpvote);


/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete = hasEnoughKarma && isModerator

console.log("canDelete:", canDelete);


// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

const response = "André";
const hasValidEmail = true;
const user = hasValidEmail && (response || "guest");

console.log("user: ", user);



