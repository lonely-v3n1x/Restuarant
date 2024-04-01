_menuItems() {
    let menu = document.createElement("ul");
    menu.classList.add("card-items");
  
    for (let i = 0; i < 13; i++) {
      let listItem = document.createElement("li");
  
      // Create an image element
      let imgElement = document.createElement("img");
      imgElement.src = eval(`menuImg${i + 1}`); // Use the imported image variable
      imgElement.alt = `Menu Item ${i + 1}`; // Set an appropriate alt text
      listItem.appendChild(imgElement);
  
      // Create a div for text content
      let textDiv = document.createElement("div");
      textDiv.textContent = `Menu Item ${i + 1} Description`; // Add your desired text
      listItem.appendChild(textDiv);
  
      menu.append(listItem); // Append the list item to the menu
    }
  
    // Now you can use the 'menu' element as needed
  }

  _menuItems() {
    let menu = document.createElement("ul");
    menu.classList.add("card-items");
  
    for (let i = 0; i < 13; i++) {
      let listItem = document.createElement("li");
  
      // Create a container div for the image and text
      let containerDiv = document.createElement("div");
      containerDiv.classList.add("menu-item-container"); // Add your desired styling class
  
      // Create an image element
      let imgElement = document.createElement("img");
      imgElement.src = eval(`menuImg${i + 1}`); // Use the imported image variable
      imgElement.alt = `Menu Item ${i + 1}`; // Set an appropriate alt text
      containerDiv.appendChild(imgElement);
  
      // Create a div for text content
      let textDiv = document.createElement("div");
      textDiv.textContent = `Menu Item ${i + 1} Description`; // Add your desired text
      containerDiv.appendChild(textDiv);
  
      // Append the container div to the list item
      listItem.appendChild(containerDiv);
  
      menu.append(listItem); // Append the list item to the menu
    }
  
    // Now you can use the 'menu' element as needed
  }
  


  function createMenuItems() {
    let menu = document.createElement("ul");
    menu.classList.add("card-items");
  
    const menuImageSources = [
      "menuImg1.jpg",
      "menuImg2.jpg",
      // ... (add the remaining image sources here)
    ];
  
    for (let i = 0; i < menuImageSources.length; i++) {
      let listItem = document.createElement("li");
  
      // Create a container div for the image and text
      let containerDiv = document.createElement("div");
      containerDiv.classList.add("menu-item-container"); // Add your desired styling class
  
      // Create an image element
      let imgElement = document.createElement("img");
      imgElement.src = menuImageSources[i]; // Use the predefined image sources
      imgElement.alt = `Menu Item ${i + 1}`; // Set an appropriate alt text
      containerDiv.appendChild(imgElement);
  
      // Create a div for text content
      let textDiv = document.createElement("div");
      textDiv.textContent = `Menu Item ${i + 1} Description`; // Add your desired text
      containerDiv.appendChild(textDiv);
  
      // Append the container div to the list item
      listItem.appendChild(containerDiv);
  
      menu.append(listItem); // Append the list item to the menu
    }
  
    // Now you can use the 'menu' element as needed
    return menu;
  }
  
  // Example usage:
  const menuElement = createMenuItems();
  document.body.appendChild(menuElement); // Append the menu to the document
  



  function createMenuItems() {
    const menuImageSources = [
      { src: "menuImg1.jpg", description: "Delicious Burger" },
      { src: "menuImg2.jpg", description: "Refreshing Smoothie" },
      // Add more image sources and descriptions as needed
    ];
  
    const menu = document.createElement("ul");
    menu.classList.add("card-items");
  
    for (let i = 0; i < menuImageSources.length; i++) {
      const listItem = document.createElement("li");
  
      // Create a container div for the image and text
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("menu-item-container"); // Add your desired styling class
  
      // Create an image element
      const imgElement = document.createElement("img");
      imgElement.src = menuImageSources[i].src;
      imgElement.alt = `Menu Item ${i + 1}`; // Set an appropriate alt text
      containerDiv.appendChild(imgElement);
  
      // Create a div for the description
      const descriptionDiv = document.createElement("div");
      descriptionDiv.textContent = menuImageSources[i].description;
      containerDiv.appendChild(descriptionDiv);
  
      // Append the container div to the list item
      listItem.appendChild(containerDiv);
  
      menu.append(listItem); // Append the list item to the menu
    }
  
    // Now you can use the 'menu' element as needed
    return menu;
  }
  
  // Example usage:
  const menuElement = createMenuItems();
  document.body.appendChild(menuElement); // Append the menu to the document
  


  const menuImageSources = [
    { name: "menuImg1", description: `<strong>Grilled Chicken Wings</strong><p> A plate of grilled chicken wings that are perfectly cooked, boasting a golden-brown hue that suggests they might be delightfully crispy. Accompanying the wings are two types of sauces: one appears to be ketchup, while the other is a creamy white sauce—possibly mayonnaise or ranch dressing. A sprig of parsley adds a touch of greenery and freshness to the presentation.These grilled chicken wings promise a delightful culinary experience, combining savory flavors and satisfying textures. 🍗🔥</p>` },
    { name: "menuImg2", description: `<strong>Fried Calamari</strong><p>A plate of golden brown, crispy fried calamari served on a white plate. The calamari rings are perfectly cooked, and their crispy texture is visually appealing. A sprig of parsley adds a touch of freshness, and wedges of lemon are placed alongside the calamari. The presentation is completed with a rustic wooden table as the backdrop.Fried calamari is a deligh image captures its inviting and savory qualities. 🦑🔥</p>` },
    { name: "menuImg3", description: `<strong>Baked Cheese Dish</strong><p> A delicious baked cheese dish. The cheese is golden brown and inviting, served in a rustic brown bowl. It’s garnished with fresh green chives, bits of crispy bacon, and sliced mushrooms. The combination of melted cheese, savory bacon, and earthy mushrooms promises a delightful culinary experience.Bon appétit! 🧀🔥</p>` },
    { name: "menuImg4", description: `<strong>Ramen</strong><p>A steaming bowl of ramen, with chopsticks lifting some noodles, showcasing their texture and the rich color of the broth. Fresh herbs are garnished on top, adding a vibrant touch. The inviting aroma suggested by the steam invites you to savor this comforting and flavorful dish. 🍜🔥</p> ` },
    { name: "menuImg5", description: `<strong>Naan Bread and Chicken Curry </strong> <p>We have two components of a classic Indian meal: Naan Bread and Chicken Curry.</p><p>Together, naan bread and chicken curry create a harmonious and beloved combination in Indian cuisine. 🍛🥖</p>` },
    { name: "menuImg6", description: `<strong>Tacos</strong> <p> A trio of delicious tacos served on a wooden plate. Each taco is generously filled with a mix of ground meat, fresh lettuce, diced tomatoes, corn kernels, and black beans. The crispy yellow taco shells beautifully contrast with the colorful and flavorful fillings. These vibrant and appetizing tacos promise a delightful culinary experience! 🌮🔥</p>` },
    { name: "menuImg7", description: `<strong>Orange Juice</strong><p>A glass of freshly squeezed orange juice, enriched with a slice of green lime and served with a yellow straw. The vibrant color and freshness of the juice make it visually appealing and inviting. 🍊🥤</p>`},
    { name: "menuImg8", description: `<strong>French Fries</strong><p>A tempting serving of golden-brown French fries spilling out from a brown paper wrap. The crispy exterior of the fries contrasts beautifully with their soft and fluffy insides. Adjacent to the fries are two small bowls containing ketchup and what appears to be mayonnaise or another type of creamy sauce, ready for dipping. This classic snack captures the universal appeal of perfectly cooked French fries. 🍟🔥</p>` },
    { name: "menuImg9", description: `<strong>Rainbow Cocktail</strong><p>A vibrant, multicolored cocktail garnished with a slice of orange and a sprig of mint, exuding an inviting and refreshing aura. The combination of vivid colors and fresh garnish promises a delightful taste experience. 🌈🍹</p>` },
    { name: "menuImg10", description: `<strong>Grapefruit Cocktail</strong><p> This refreshing cocktail features a slice of grapefruit and a sprig of rosemary, served in a misted glass that enhances its visual appeal. The combination of vivid colors and fresh garnish promises a delightful taste experience. 🍹🌿</p>` },
    { name: "menuImg11", description: `<strong>Tacos</strong><p>These are delicious looking tacos filled with a mix of grilled meat, fresh vegetables including lettuce and onions, garnished with herbs, and accompanied by slices of avocado. The tacos are presented on a wooden board, surrounded by ingredients like tomatoes, onions, and a bowl of mixed corn and beans.Mouth-watering tacos filled with colorful ingredients that make it visually appealing and indicative of a flavorful experience. 🌮🔥</p>` },
    { name: "menuImg12", description: `<strong>Ramen</strong><p>A steaming bowl of ramen is presented, featuring a rich assortment of toppings that include succulent slices of chicken, a soft-boiled egg with a runny yolk sprinkled with black sesame seeds and pepper, fresh green onions chopped finely, beautifully sliced avocado, and two halves of a red tomato.A delicious bowl of ramen adorned with an array of colorful and appetizing toppings, capturing the essence of a well-prepared, nourishing meal. 🍜🔥</p>`},
    // { name: "menuImg13", description: "Refreshing Smoothie" },
    // Add more image sources and descriptions as needed
  ];

  tful seafood dish, and this
  //give a short description with the food name as a header

  Freshly made and golden-brown, naan bread is showcased on a dark plate.
  Garnished with green herbs, it invites you to savor its soft texture and warm flavor.

  In the background, a bowl of rich and creamy chicken curry awaits.
            Topped with fresh herbs, it promises a comforting and aromatic experience.





            menuImageSources = [
              {
                name: menuImg1,
                description: `<p><strong>Grilled Chicken Wings</strong></p>
                <p> A plate of grilled chicken wings that are perfectly cooked, boasting a golden-brown hue that suggests they might be delightfully crispy.
                 Accompanying the wings are two types of sauces: one appears to be ketchup, while the other is a creamy white sauce—possibly mayonnaise or ranch dressing.
                 A sprig of parsley adds a touch of greenery and freshness to the presentation.These grilled chicken wings promise a delightful culinary experience, combining savory flavors and satisfying textures. 🍗🔥</p>`,
              },
              {
                name: menuImg2,
                description: `<p><strong>Fried Calamari</strong></p>  <p>A plate of golden brown, crispy fried calamari served on a white plate. The calamari rings are perfectly cooked, and their crispy texture is visually appealing. A sprig of parsley adds a touch of freshness, and wedges of lemon are placed alongside the calamari. The presentation is completed with a rustic wooden table as the backdrop.Fried calamari is a deligh image captures its inviting and savory qualities. 🦑🔥</p>`,
              },
              {
                name: menuImg3,
                description: `<p><strong>Baked Cheese Dish</strong></p>   <p> A delicious baked cheese dish. The cheese is golden brown and inviting, served in a rustic brown bowl. It’s garnished with fresh green chives, bits of crispy bacon, and sliced mushrooms. The combination of melted cheese, savory bacon, and earthy mushrooms promises a delightful culinary experience.Bon appétit! 🧀🔥</p>`,
              },
              {
                name: menuImg4,
                description: `<p><strong>Ramen</strong></p>  <p>A steaming bowl of ramen, with chopsticks lifting some noodles, showcasing their texture and the rich color of the broth. Fresh herbs are garnished on top, adding a vibrant touch. The inviting aroma suggested by the steam invites you to savor this comforting and flavorful dish. 🍜🔥</p> `,
              },
              {
                name: menuImg5,
                description: `<p><strong>Naan Bread and Chicken Curry </strong></p> <p>We have two components of a classic Indian meal: Naan Bread and Chicken Curry.</p><p>Together, naan bread and chicken curry create a harmonious and beloved combination in Indian cuisine. 🍛🥖</p>`,
              },
              {
                name: menuImg6,
                description: `<p><strong>Tacos</strong></p> <p> A trio of delicious tacos served on a wooden plate. Each taco is generously filled with a mix of ground meat, fresh lettuce, diced tomatoes, corn kernels, and black beans. The crispy yellow taco shells beautifully contrast with the colorful and flavorful fillings. These vibrant and appetizing tacos promise a delightful culinary experience! 🌮🔥</p>`,
              },
              {
                name: menuImg7,
                description: `<p><strong>Orange Juice</strong></p>   <p>A glass of freshly squeezed orange juice, enriched with a slice of green lime and served with a yellow straw. The vibrant color and freshness of the juice make it visually appealing and inviting. 🍊🥤</p>`,
              },
              {
                name: menuImg8,
                description: `<p><strong>French Fries</strong></p>  <p>A tempting serving of golden-brown French fries spilling out from a brown paper wrap. The crispy exterior of the fries contrasts beautifully with their soft and fluffy insides. Adjacent to the fries are two small bowls containing ketchup and what appears to be mayonnaise or another type of creamy sauce, ready for dipping. This classic snack captures the universal appeal of perfectly cooked French fries. 🍟🔥</p>`,
              },
              {
                name: menuImg9,
                description: `<p><strong>Rainbow Cocktail</strong></p> <p>A vibrant, multicolored cocktail garnished with a slice of orange and a sprig of mint, exuding an inviting and refreshing aura. The combination of vivid colors and fresh garnish promises a delightful taste experience. 🌈🍹</p>`,
              },
              {
                name: menuImg10,
                description: `<p><strong>Grapefruit Cocktail</strong></p>  <p> This refreshing cocktail features a slice of grapefruit and a sprig of rosemary, served in a misted glass that enhances its visual appeal. The combination of vivid colors and fresh garnish promises a delightful taste experience. 🍹🌿</p>`,
              },
              {
                name: menuImg11,
                description: `<p><strong>Tacos</strong></p>  <p>These are delicious looking tacos filled with a mix of grilled meat, fresh vegetables including lettuce and onions, garnished with herbs, and accompanied by slices of avocado. The tacos are presented on a wooden board, surrounded by ingredients like tomatoes, onions, and a bowl of mixed corn and beans.Mouth-watering tacos filled with colorful ingredients that make it visually appealing and indicative of a flavorful experience. 🌮🔥</p>`,
              },
              {
                name: menuImg12,
                description: `<p><strong>Ramen</strong></p>  <p>A steaming bowl of ramen is presented, featuring a rich assortment of toppings that include succulent slices of chicken, a soft-boiled egg with a runny yolk sprinkled with black sesame seeds and pepper, fresh green onions chopped finely, beautifully sliced avocado, and two halves of a red tomato.A delicious bowl of ramen adorned with an array of colorful and appetizing toppings, capturing the essence of a well-prepared, nourishing meal. 🍜🔥</p>`,
              },
              // { name: "menuImg13", description: "Refreshing Smoothie" },
              // Add more image sources and descriptions as needed
            ];
          