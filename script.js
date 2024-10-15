var style = document.createElement("style");
style.innerHTML = `
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }
    #navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 10px 20px;
    }
    #navbar a {
        color: black;
        text-decoration: none;
        margin: 0 10px;
    }
    #navbar .nav-button {
        padding: 10px 20px;
        background-color: #e8593b;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    #navbar .nav-button:hover {
        background-color: #0056b3;
    }
    #main-container {
        height: calc(100vh - 60px);
        background-image: url('./img/ElPeso2.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #f2f2f2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
    }
    #main-container h1 {
        color: black;
        font-size: 3rem;
        margin-top: 9px;
    }
    .content-box {
        height: 480px;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 0;
        border-radius: 10px;
        width: 70%;
        margin-right: 80px;
        border: 2px solid rgb(191, 191, 191);
        overflow: hidden;
    }
    .content-box .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 2px;
        border-bottom: 2px solid #ccc;
    }
    .content-box .top-bar img {
        width: 55px;
        height: 30px;
        border-radius: 50%;
    }
    #text {
        font-size: 18px;
        font-weight: bold;
    }
    .content-box .top-bar .options {
        display: flex;
        gap: 10px;
        font-size: 14px;
        color: #555;
    }
    .content-box .main-content {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        height: 346px;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
    }
    .content-box .image-container {
        flex: 2;
        padding-right: 1px;
        margin-top: -19.9px;
        border-right: 1px solid #ccc; 
    }
    .content-box .image-container img {
        margin-top: 10px;
        width: 77%;
        height: 375px;
        max-width: 400px;
        border-radius: 1px;
        border: 1px solid #ccc;
    }
    .content-box .button-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top:-21px;
        border-top: 1px solid #ccc;
    }
    .button-container {
        display: flex;
        justify-content: center;
        gap: 1px;
        padding: 20px;
        margin-top: 0px;
        border-bottom: 1px solid #ccc;
    }
    .button {
        padding: 10px 20px;
        background-color: #white;
        outline: 1px solid #007bff;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .button:hover {
        background-color: #0056b3;
    }
    .retrato-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        gap: 10px;
        margin-bottom: 25px;
        padding-left: 10px;
    }
    .retrato {
        width: 113px;
        height: 120px;
        border-radius: 5%;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        overflow: hidden;
    }
    .retrato img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .paginacion {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin-top: 1px;
    }
    .page {
        display: block;
        padding: 10px 20px;
        text-decoration: none;
        color: black;
        background-color: #ccc;
        position: relative;
        font-family: Arial, sans-serif;
        font-weight: bold;
        border-radius: 5px 0 0 5px;
        margin-right: -10px;
    }
    .page::before {
        content: '';
        position: absolute;
        right: -20px;
        top: 0;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid #ccc;
    }
    .page:last-child {
        border-radius: 5px;
    }
    .page:hover {
        background-color: #999;
    }
    .page:hover::before {
        border-left-color: #999;
    }  
`;
document.head.appendChild(style);

var navbar = document.createElement("nav");
navbar.id = "navbar";
document.body.appendChild(navbar);

var logo = document.createElement("div");
logo.innerHTML = '<img src="./img/LogoMonoConGorra.png" alt="Logo">';
navbar.appendChild(logo);

var menuItems = ["Features", "Pricing", "Support", "Blog", "More"];
menuItems.forEach(function (item) {
  var menuLink = document.createElement("a");
  menuLink.href = "#";
  menuLink.textContent = item;
  navbar.appendChild(menuLink);
});

var signUpButton = document.createElement("button");
signUpButton.classList.add("nav-button");
signUpButton.textContent = "Sign Up";
navbar.appendChild(signUpButton);

var logInButton = document.createElement("button");
logInButton.classList.add("nav-button");
logInButton.textContent = "Log In";
navbar.appendChild(logInButton);

var mainContainer = document.createElement("div");
mainContainer.id = "main-container";
document.body.appendChild(mainContainer);

var heading = document.createElement("h1");
heading.textContent = "Send Better Email";
mainContainer.appendChild(heading);

var contentBox = document.createElement("div");
contentBox.classList.add("content-box");
mainContainer.appendChild(contentBox);

var topBar = document.createElement("div");
topBar.classList.add("top-bar");
contentBox.appendChild(topBar);

var smallLogo = document.createElement("img");
smallLogo.src = "./img/LogoMonoConGorra.png";
topBar.appendChild(smallLogo);

var text = document.createElement("div");
text.id = "text";
text.textContent = "Double Double Newsletter";
topBar.appendChild(text);

var options = document.createElement("div");
options.classList.add("options");
var helpButton = document.createElement("button");
helpButton.classList.add("nav-button");
helpButton.textContent = "Help";
options.appendChild(helpButton);

var saveButton = document.createElement("button");
saveButton.classList.add("nav-button");
saveButton.textContent = "Save & Exit";
options.appendChild(saveButton);

topBar.appendChild(options);

var mainContent = document.createElement("div");
mainContent.classList.add("main-content");
contentBox.appendChild(mainContent);

var imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
mainContent.appendChild(imageContainer);

var image = document.createElement("img");
image.src = "./img/revista.png";
imageContainer.appendChild(image);

var buttonSection = document.createElement("div");
buttonSection.classList.add("button-section");
mainContent.appendChild(buttonSection);

var buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
buttonSection.appendChild(buttonContainer);

var buttonNames = ["Layout", "Comment", "Design", "Gobernt"];
buttonNames.forEach(function (name) {
  var button = document.createElement("button");
  button.classList.add("button");
  button.textContent = name;
  buttonContainer.appendChild(button);
});

var retratoContainer = document.createElement("div");
retratoContainer.classList.add("retrato-container");
buttonSection.appendChild(retratoContainer);

var retratoImages = [
  "./img/retrato1.png",
  "./img/retrato2.png",
  "./img/retrato3.png",
  "./img/retrato4.png",
  "./img/retrato5.png",
];

retratoImages.forEach(function (src) {
  var retrato = document.createElement("div");
  retrato.classList.add("retrato");

  var img = document.createElement("img");
  img.src = src;

  retrato.appendChild(img);
  retratoContainer.appendChild(retrato);
});

var paginacion = document.createElement("div");
paginacion.classList.add("paginacion");
contentBox.appendChild(paginacion);

var pageNames = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];
pageNames.forEach(function (page) {
  var pageLink = document.createElement("a");
  pageLink.href = "#";
  pageLink.classList.add("page");
  pageLink.textContent = page;
  paginacion.appendChild(pageLink);
});
