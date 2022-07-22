import "./style.css";
import Img from "./jonathan-borba-8l8Yl2ruUsg-unsplash.jpg";

function main() {

    const mainSection = document.createElement('div');
    
    const mainHeader = document.createElement('h1');
    mainHeader.id = "main-header-title";
    mainHeader.innerText = "TOP Restaurant";

    const mainDescription = document.createElement('div');
    mainDescription.id = "description";
    mainDescription.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    mainSection.appendChild(mainHeader);
    mainSection.appendChild(mainDescription);

    return mainSection;

}

document.getElementById('content').appendChild(main());