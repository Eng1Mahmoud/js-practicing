let info = document.querySelector(".info");
let copyDiv = document.querySelector(".copy");
let successMessage = document.querySelector(".success-copy");

const copyText = async () => {
  try {
    let text = info.textContent;
    navigator.clipboard.writeText(text);
    successMessage.classList.add("show");
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 3000);
    console.log("Copied");
  } catch (err) {
    console.log(err);
  }
};
copyDiv.addEventListener("click", copyText);

