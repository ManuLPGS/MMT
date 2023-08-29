const info = document.getElementById("info");
const dialog = document.getElementById("dialog");
const preview = document.getElementById("preview");
const dialogContent = dialog.querySelector(".content");
const guideInfo = dialogContent.innerHTML;
const senderSelect = document.getElementById("senderSelect");
const subjectSelect = document.getElementById("subjectSelect");
const senderPreview = document.getElementById("senderPreview");
const subjectPreview = document.getElementById("subjectPreview");
const resetFormBtn = document.getElementById("reset");
const mailerForm = document.getElementById("mailerForm")

const activeDialog = () => {
  closeDialogBtn();
  dialog.classList.add("active");
};
const deactiveDialog = () => dialog.classList.remove("active");
const closeOnclickingOutsideDialog = () => {
  dialog.addEventListener("click", (e) => {
    if (e.target != dialog) return;
    deactiveDialog();
  });
};
const closeDialogBtn = () => {
  const closeBtn = '<i class="fa-solid fa-xmark" id="closeDialog"></i>';
  dialogContent.insertAdjacentHTML("afterbegin", closeBtn);
  const closeDialog = document.getElementById("closeDialog");
  closeDialog.addEventListener("click", () => {
    deactiveDialog();
  });
};

const setSenderPreview = () => {
  senderSelect.addEventListener("change", () => {
    senderPreview.innerHTML = ["<b>From:</b> ",senderSelect.value,"@gamestop.com"].join('');
  });
};
const setSubjectPreview = () => {
  subjectSelect.addEventListener("keyup", (e) => {
    subjectPreview.innerHTML = ["<b>Subject:</b> ",e.target.value].join('');
  });
};

const resetForm = () => {
  mailerForm.addEventListener("change", () => {
    resetFormBtn.disabled = false;
    resetFormBtn.addEventListener("click", () => {
      mailerForm.reset();
    });
  });
};

// playground

setSubjectPreview();
setSenderPreview();
resetForm();

info.addEventListener("click", () => {
  dialogContent.innerHTML = guideInfo;
  activeDialog();
});

preview.addEventListener("click", () => {
  dialogContent.innerHTML = ["<h2>Mail Content</h2>",preview.innerHTML].join('\n');
  activeDialog();
  closeOnclickingOutsideDialog();
})
