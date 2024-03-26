function checkForSpam(message) {
  const forbiddenWords1 = "spam";
  const forbiddenWords2 = "sale";
  const normMessage = message.toLowerCase();
  const includesMessage1 = normMessage.includes(forbiddenWords1);
  const includesMessage2 = normMessage.includes(forbiddenWords2);

  if (includesMessage1) {
    return "true";
  } else if (includesMessage2) {
    return "true";
  } else {
    return "false";
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
