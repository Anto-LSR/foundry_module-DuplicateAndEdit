function openDuplicateAndEditDialog(actor) {
  let dialogContent = `
    <form>
        <div class="form-group">
            <img src="${actor.img}"></img>
        </div>   
        <div class="form-group">
            <label>Name:</label>
            <div style="display: flex; align-items: center;">
                <input type="text" name="name" placeholder="${actor.name}" value="${actor.name}">
                <a id="DAP-generateName" class="create-button" style="margin-left: 10px; margin-right: 3px;">
                    <i class="fa-solid fa-shuffle"> </i>
                </a>
            </div>
        </div>
        
        <div class="form-group">
            <label> Sexe : </label>
            <div>
                <input type="radio" id="male" name="sexe" value="male" checked />
                <label for="male">Male</label>
            </div>
            <div>
                <input type="radio" id="female" name="sexe" value="female" />
                <label for="female">Female </label>
            </div>
        </div>
    </form>
`;

  let dialog = new Dialog({
    title: "Duplicate and Edit Actor",
    content: dialogContent,
    buttons: {
      save: {
        label: "Save",
        callback: (html) => {
          let name = html.find('input[name="name"]').val();
          duplicateActor(name, actor);
        },
      },
      cancel: {
        label: "Cancel",
        callback: () => {},
      },
    },
    default: "save",
  });

  dialog.render(true);

  let sexe = "male";
  // Attach event listener for generateNameButton after rendering
  setTimeout(() => {
    //Gestion NAME
    dialog.element.find("#DAP-generateName").click(() => {
      const name = generateName(sexe);
      dialog.element.find('input[name="name"]').val(name);
    });

    dialog.element.find('input[name="name"]').on('change', () => {
      const name = dialog.element.find('input[name="name"]').val()
      dialog.element.find('input[name="name"]').val(name);
    });
    //Gestion Sexe
    let inputs = dialog.element.find('input[name="sexe"]').get();
    inputs.forEach((input) => {
      $(input).on("change", () => {
        sexe = $(input).val();
      });
    });
  }, 100);
}
