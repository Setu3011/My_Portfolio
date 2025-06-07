const text1 = "B.Tech in Computer Engineering from Ganpat University with excellent academic background and ";
const text2 = "skillset. I am well versed with Java, Python, C++ and basics of JavaScript & CSS. My problem-solving skills and ability to adapt to new technologies drive me to deliver efficient and scalable solutions. I am eager to expand my knowledge and skills in a dynamic professional environment to contribute to innovative projects and grow as a software engineer.";
const typingSpeed = 50;

let index = 0;
let fullText = text1 + text2;

function typeWriter() {
    if (index < fullText.length) {
        document.getElementById('typewriter-text').innerHTML += fullText.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start typing when the page loads
window.onload = typeWriter;
