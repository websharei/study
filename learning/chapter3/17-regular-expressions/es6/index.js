// 극히 간단한 이메일 정규표현식
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
console.log(email);

// 미국 전화번호 정규 표현식
const phone =  /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;
console.log(phone);
