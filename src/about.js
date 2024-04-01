export class About {
  content = document.getElementById("content");

  _addToContent(el) {
    return this.content.appendChild(el);
  }

  _createAboutPage() {
    let containerDiv = document.createElement("div");
    let aboutDiv = document.createElement("div");
    aboutDiv.classList.add("contentAbout");
    aboutDiv.innerHTML = "About Us";
    containerDiv.classList.add("about");
    containerDiv.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolor. Sit perferendis voluptatem aspernatur nihil aliquam quisquam dolorum dolores culpa quam sapiente provident a optio reprehenderit amet saepe vitae excepturi blanditiis odio numquam, fugiat quod. Voluptate, tempora consequuntur, aut nemo, illum voluptatibus repellat distinctio nisi cumque beatae et nesciunt dicta deleniti vero quo nulla tenetur mollitia explicabo? Maxime recusandae nobis quisquam neque, ipsa nemo optio nesciunt exercitationem repellat ut minima. Ipsum aliquid, neque, optio facere laboriosam voluptate nobis corporis modi, blanditiis possimus praesentium molestias! Sint quibusdam error nulla, vero deserunt libero, modi fugit minima excepturi reprehenderit nisi in numquam? Voluptate!";
    aboutDiv.appendChild(containerDiv);
    return aboutDiv;
  }

  load() {
    // return this.content.classList.add("content-about")
    return this._addToContent(this._createAboutPage());
  }
}
