const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => {
      b.classList.remove("selected");
      const body = b.querySelector(".box-body");
      if (body) body.style.display = "none";
    });

    box.classList.add("selected");
    const body = box.querySelector(".box-body");
    if (body) body.style.display = "block";

    const radio = box.querySelector("input[type='radio']");
    if (radio) radio.checked = true;
  });
});
 