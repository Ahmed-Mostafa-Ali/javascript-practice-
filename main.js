let btn = document.getElementsByClassName("acc");
let adv = document.getElementsByClassName('desc');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",function () {
    if (adv[i].style.maxHeight==='100%') {
      adv[i].style.maxHeight="0"
    }else{
      adv[i].style.maxHeight="100%"
    }
    
    console.log(adv);
  })
}
//problem solving 
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tal
//use if condition to output a message
let marksWeight = 78;
let marksHeight = 1.69;
let johnWeight = 92 ;
let johanHeight = 1.95 ;
let bmimarks = marksWeight/(marksHeight*marksHeight);
let bmijohan = johnWeight/(johanHeight*johanHeight);
//also we can do that 
const marhHigher= bmimarks>bmijohan;
console.log(marhHigher);
console.log(Math.round(bmimarks)); 
console.log(Math.round(bmijohan));
if (bmimarks>bmijohan) {
  console.log(`bmimarks ${Math.round(bmimarks)} is heigher than bmijohan ${Math.round(bmijohan)}`);
} else{
  console.log(`bmimarks ${Math.round(bmimarks)} is less than bmijohan ${Math.round(bmijohan)}`);
}
/////////////////////
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
let dolpinaFirst = 96;   // next we will use object because we have one element has properties 
let dolphinSecond = 108;
let dolphinThird = 89;
let aveDolphin = (dolpinaFirst + dolphinSecond + dolphinThird )/ 3;
let kolasFirst = 88;  // next we will use object because we have one element has properties 
let kolasSecond = 91;
let kolasThird = 110;
let avekolas = (kolasFirst + kolasSecond + kolasThird) / 3;
if (aveDolphin>avekolas) {
  console.log(`dolphina wins the trophy and their score is ${Math.floor(aveDolphin)}`);
}else if (avekolas>aveDolphin) {
  console.log(`kolas wins the trophy and their score is ${Math.floor(avekolas)}`);
}else if (aveDolphin===avekolas) {
  console.log(`they have same score`);
}
//bonus 1 i will use the logiacl operator && to check if the value === 100 or no && should be all true to get true
//////////////////////clock////
let hr = document.querySelector('#hr');
let mm = document.querySelector('#mm');
let sec = document.querySelector('#sec');

setInterval(() => {
  let day = new Date();
  let hR = (day.getUTCHours() + 1) * 30; // add 1 hour to adjust for Lithuania time zone
  let mM = (day.getUTCMinutes() + 1) * 6;
  let sS = (day.getUTCSeconds() + 1) * 6;
  hr.style.transform = `rotateZ(${hR + (mM/12)}deg)`;
  mm.style.transform = `rotateZ(${mM}deg)`;
  sec.style.transform = `rotateZ(${sS}deg)`;
}, 1000); // update every second

