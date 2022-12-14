const userChoice = "funny";
// Write either "FuNNy" for funny quotes or 
// "moTivatiOn" to get motivational quotes between the "" marks and 
// RUN the Program :)



const numGenerator = Math.floor(Math.random() * 8);
const funnyQuotes = [
"The elevator to success is out of order. You'll have to use the stairs, one step at a time. - Joe Girard", 
"Be a positive energy trampoline - absorb what you need and rebound more back. - Dave Carolan", 
"People often say that motivation doesn't last. Well, neither does bathing - that's why we recommend it daily. - Zig Ziglar", 
"Work until your bank account looks like a phone number. - Unknown", 
"I am so clever that sometimes I don't understand a single word of what I am saying. - Oscar Wilde", 
"People say nothing is impossible, but I do nothing every day. - Winnie the Pooh", 
"Life is like a sewer… what you get out of it depends on what you put into it. - Tom Lehrer", 
"I always wanted to be somebody, but now I realize I should have been more specific. - Lily Tomlin"
];
const motivationalQuotes = [
"You've got to get up every morning with determination if you're going to go to bed with satisfaction. — George Lorimer ",
"The most difficult thing is the decision to act, the rest is merely tenacity. - Amelia Earhart",
"Take the attitude of a student, never be too big to ask questions, never know too much to learn something new. — Augustine Og Mandino", 
"We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein ", 
"Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi ", 
"When you change your thoughts, remember to also change your world. — Norman Vincent Peale ", 
"Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together. — Diane McLaren ", 
"It is better to fail in originality than to succeed in imitation. — Herman Melville "
];

function returnQuote(userChoice) {
  if (userChoice.toLowerCase() === "funny") {
    console.log(funnyQuotes[numGenerator]);
  } else if (userChoice.toLowerCase() === "motivation") {
    console.log(motivationalQuotes[numGenerator]);
  }
}
returnQuote(userChoice);
