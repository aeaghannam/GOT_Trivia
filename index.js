/*Abe’s Style/CSS Comments: Last updated on 2017.04.05 */


/* Abe comment: GOT World Map background*/

body {
    background-image: url("map.jpg.jpg");
}


/*Abe comment: Nav bar elements..*/

.topnav {
    background-color: black;
    opacity: 1;
    overflow: hidden;
}

.topnav a {
    float: left;
    display: block;
    color: gold;
    text-align: center;
    padding: 14px;
    text-decoration: none;
    font-size: 16px;
}

.topnav a:hover {
    background-color: #ddd;
    color: gold;
}

.topnav a.active {
    background-color: #4CAF50;
    color: brown;
}


/*Abe comment - Header area...*/

header {
    padding: 5px 5px 5px 5px;
    background-color: black;
    opacity: 0.9;
    font-family: 'Macondo', cursive;
    margin-top: 50px;
}

header h1 {
    color: white;
    font-size: 120px;
    margin-bottom: 5px;
    margin-top: 5px;
}

header h3 {
    color: white;
    font-size: 15px;
    background-color: black;
    margin-bottom: 3px;
}


/*Abe comment: Text effects edited from a CodePen example that used a rapid flame movment.*/

.fire {
    animation: animation 1s ease-in-out infinite alternate;
}

.burn {
    animation: animation .65s ease-in-out infinite alternate;
}

@keyframes animation {
    0% {
        text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
    }
    100% {
        text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #fefcc9, -20px -20px 40px #feec85, 22px -42px 60px #ffae34, -22px -58px 50px #ec760c, 0 -82px 80px #cd4606, 10px -90px 80px #973716;
    }
}


/*Abe comment question area section....*/

form {
    font-family: 'Macondo', sans-serif;
    font-size: 16px;
    align: auto;
    color: black;
    text-decoration-color: white;
    background-color: grey;
    opacity: 0.8;
    margin-top: 30px;
    margin-bottom: 30px;
}

form h2 {
    color: black;
    font-size: 28px;
    background-color: gold;
    opacity: 0.9;
    text-shadow: 2px 2px gold;
}

button {
    width: 100%;
    background-color: gold;
    color: black;
    text-shadow: 2px 2px gold;
    display: inline-block;
    border: 0px solid #000000;
    padding: 3px;
    border-radius: 1px 1px;
    font-family: 'Macondo', sans-serif;
    font-size: 22px;
    text-align: left;
}

button:hover {
    background-color: white;
}

footer {
    opacity: 0.9;
    text-align: left;
    color: white;
    background-color: black;
    padding: 5px;
    text-decoration: none;
    font-size: 14px;
    font-family: 'Macondo', sans-serif;
    margin-top: px;
    margin-bottom: 50px;
}

footer p1 {
    color: rgb(215, 219, 168);
}

footer p2 {
    color: rgb(227, 237, 113);
}

footer p3 {
    color: rgb(224, 156, 20);
}
