// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");
// const button4 = document.getElementById("button4");

// const text1 = document.getElementById("text1");
// const text2 = document.getElementById("text2");
// const site_address = document.getElementById("site_address");
// const gmail_address = document.getElementById("gmail_address");


//1
document.addEventListener('DOMContentLoaded', function() {
  const button1 = document.getElementById("button1");

  button1.addEventListener('click', function(event) {
      event.preventDefault();
      const text1 = document.getElementById("text1");

      let text_t1 = text1.textContent;
      let regexp1 = /[а-яА-ЯіІїЇєЄґҐ]+-[а-яА-ЯіІїЇєЄґҐ]+/g;
      let matches1 = text_t1.match(regexp1);
      console.log(matches1);
  });
});


//2
document.addEventListener('DOMContentLoaded', function() {
  const button2 = document.getElementById("button2");

  button2.addEventListener('click', function(event) {
      event.preventDefault();
      const text2 = document.getElementById("text2");

      let text_t2 = text2.textContent;
      let regexp2 = /[0-9]{3}.[0-9]{3}.[0-9]{1}.[0-9]{3}/g;
      let matches2 = text_t2.match(regexp2);
      console.log(matches2);
  });
});


//3
document.addEventListener('DOMContentLoaded', function() {
  const button3 = document.getElementById("button3");

  button3.addEventListener('click', function(event) {
      event.preventDefault();
      const site_address = document.getElementById("site_address");

      let site = site_address.value;
      let regexp3 = /\bwww\.[a-z0-9_]+(?:\.[a-z0-9_]+)*\.com\b/g;
      let matches3 = site.match(regexp3);
      console.log(matches3);

      if(matches3 === null || matches3[0] !== site){
        site_address.style.border = "2px solid red";
      } else {
        site_address.style.border = "2px solid green";
      }
  });
});


//4
document.addEventListener('DOMContentLoaded', function() {
  const button4 = document.getElementById("button4");

  button4.addEventListener('click', function(event) {
      event.preventDefault();
      const gmail_address = document.getElementById("gmail_address");

      let gmail = gmail_address.value;
      let regexp4 = /\b[a-z0-9\.\_]+@gmail\.com\b/g;
      let matches4 = gmail.match(regexp4);
      console.log(matches4);

      if(matches4 === null || matches4[0] !== gmail){
        gmail_address.style.border = "2px solid red";
      } else {
        gmail_address.style.border = "2px solid green";
      }
  });
});








