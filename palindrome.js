function checkPalindrome(str) {
  let new_str = "";

  for (let i = str.length - 1; i >= 0; i--) {
    new_str = new_str + str[i];
  }
  if (str == new_str) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
}
checkPalindrome("nayanhhh");
