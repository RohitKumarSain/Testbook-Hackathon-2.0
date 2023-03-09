let input = document.getElementById("input");
let add = document.getElementById("add");
let ul = document.getElementsByTagName("ul")[0];
let p = document.getElementById("empty");

add.onclick = () => {
  let item = input.value.trim();
  if (item !== "") {
    p.remove();
    let li = document.createElement("li");

    // Create span for item text
      let itemSpan = document.createElement("span");
      itemSpan.classList.add("item");
    itemSpan.innerHTML = item;

    // Create span for buttons
    let buttonSpan = document.createElement("span");
    buttonSpan.classList.add("tools");

    // Add right tick to span
    let rightTick = document.createElement("button");
    rightTick.innerHTML = "&#x2713;";
    rightTick.classList.add("right-tick");
    rightTick.onclick = () => {
      if (itemSpan.style.textDecoration === "line-through") {
        itemSpan.style.textDecoration = "none";
      } else {
        itemSpan.style.textDecoration = "line-through";
      }
    };
    buttonSpan.append(rightTick);

    // Add edit function to span
    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit-btn");
editButton.onclick = () => {
  // Create edit section
  let editSection = document.createElement("div");
  editSection.classList.add("edit");

  // Create edit heading
  let editHeading = document.createElement("h3");
  editHeading.id = "edith3";
  editHeading.innerHTML = "Edit Task:";
  editSection.append(editHeading);

  // Create edit input
  let editInput = document.createElement("input");
  editInput.type = "text";
  editInput.id = "editinput";
  editInput.value = item;
  editSection.append(editInput);

  // Create edit buttons section
  let editBtns = document.createElement("div");
  editBtns.classList.add("btns");

  // Create submit button
  let submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.classList.add("editbtn");
  submitBtn.innerHTML = "SUBMIT";
submitBtn.onclick = () => {
  let newItem = editInput.value;
  itemSpan.innerHTML = newItem;
  editSection.replaceWith(li);
  input.value = item;
};

  editBtns.append(submitBtn);
  

  // Create cancel button
  let cancelBtn = document.createElement("button");
  cancelBtn.type = "submit";
  cancelBtn.classList.add("editbtn");
  cancelBtn.innerHTML = "CANCEL";
  cancelBtn.onclick = () => {
    editSection.remove();
  };
  editBtns.append(cancelBtn);

  editSection.append(editBtns);

  // Replace li with edit section
  li.replaceWith(editSection);
};

    buttonSpan.append(editButton);

    // Add delete option to span
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#10005";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = () => {
      li.remove();
      if (ul.children.length === 0) {
        ul.append(p);
      }
    };
    buttonSpan.append(deleteButton);

    li.append(itemSpan);
    li.append(buttonSpan);
    ul.append(li);
    input.value = "";
  }
};
