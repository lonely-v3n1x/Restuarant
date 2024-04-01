import { Menu } from "./menu.js";
import { About } from "./about.js";

import bgImage from "./assets/images/home_background.jpg";
import menuImg from "./assets/images/menu.jpg";
import aboutImg from "./assets/images/pic-1.jpg";
import contactImg from "./assets/images/pic-2.jpg";

export class Home {
  content = document.getElementById("content");

  clearPage() {
    content.innerHTML = ""; // clear HTML
    content.setAttribute("class", ""); //reset class to none
  }

  _addToContent(el) {
    this.content.appendChild(el);
  }
  _createHomePage() {
    // this.content.classList.add("contentHome");
    this._homeBackgroundImage.src = bgImage;
    let imageBg = document.createElement("div");
    imageBg.classList.add("contentHome");
    imageBg.appendChild(this._homeBackgroundImage());

    // imageBg.appendChild(this._createFooter());
    return imageBg;
  }

  _homeBackgroundImage() {
    const backgroundImage = new Image();
    backgroundImage.src = bgImage;

    return backgroundImage;
  }

  _createFooter() {
    let footer = document.createElement("div");
    footer.classList.add("footer");
    //generate 2 div one for menu and the other for  the about section with same classes;

    footer.appendChild(this._menuSubFooter());
    footer.appendChild(this._aboutSubFooter());
    footer.appendChild(this._contactSubFooter());
    // footer.appendChild(about);
    return footer;
  }

  _menuSubFooter() {
    let image = new Image();
    let menu = document.createElement("div");
    let subImageDiv = document.createElement("div");
    let subTextDiv = document.createElement("div");
    menu.classList.add("footerSubMenu");
    image.src = menuImg;
    subImageDiv.appendChild(image);
    subTextDiv.innerHTML = "MENU";

    menu.appendChild(subTextDiv);
    menu.appendChild(subImageDiv);
    menu.addEventListener("click", ()=>{
        this.clearPage();
        let menu = new Menu;
        menu.load();
      //   import {Menu } from ("./menu.js").then((Menu) =>{
      //     let x = new Menu;
      //     x.load();
      //   })
    })
    return menu;
  }

  _aboutSubFooter() {
    let image = new Image();
    let about = document.createElement("div");
    let subImageDiv = document.createElement("div");
    let subTextDiv = document.createElement("div");
    about.classList.add("footerSubAbout");
    // about.classList.add("footerMA");
    image.src = aboutImg;
    subImageDiv.appendChild(image);
    subTextDiv.innerHTML = "ABOUT";

    about.appendChild(subTextDiv);
    about.appendChild(subImageDiv);
    about.addEventListener("click",()=>{
      this.clearPage();
      let about = new About;
      about.load();

    });
    return about;
  }

  _contactSubFooter() {
    let image = new Image();
    let contact = document.createElement("div");
    contact.classList.add("footerSubContact");
    let subImageDiv = document.createElement("div");
    let subTextDiv = document.createElement("div");

    image.src = contactImg;
    subImageDiv.appendChild(image);
    subTextDiv.innerHTML = "Contact";

    contact.appendChild(subTextDiv);
    contact.appendChild(subImageDiv);
    return contact;
  }

  load() {
    this._addToContent(this._createHomePage());
    this._addToContent(this._createFooter());
    // console.log(this._createHomePage());
  }
}
