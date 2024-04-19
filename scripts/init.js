Hooks.on("renderActorDirectory", (app, html, data) => {
  html.find(".actor").contextmenu((event) => {
    // Prevent the default right-click context menu
    event.preventDefault();

    // Get the actor's ID
    let actorId = $(event.currentTarget).attr("data-entry-id");

    // Find the nearest child element with id 'context-menu'
    setTimeout(() => {
      let contextMenu = $(event.currentTarget).find("nav");

      if (contextMenu.length) {
        // Execute your code here
        console.log(`Right-clicked on actor with ID: ${actorId}`);
        let listItem = $("<li>").addClass("context-item");
        let icon = $("<i>").addClass("fa-solid fa-screwdriver-wrench");
        listItem.append(icon).append(" Duplicate and generate");

        // Append the list item to a ul or another parent element
        contextMenu.append(listItem);

        // You can also retrieve the actor object using the ID if needed
        let actor = game.actors.get(actorId);
        if (actor) {
          // Execute more code here if needed
          listItem.on("click", () => {
            openDuplicateAndEditDialog(actor);
          });
        }
      }
    }, 100);
  });
});
