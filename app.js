const info = document.getElementById("info");
const dialog = document.getElementById("dialog");
const preview = document.getElementById("preview");
const dialogContent = dialog.querySelector(".content");
const guideInfo = dialogContent.innerHTML;
const senderSelect = document.getElementById('senderSelect');
const subjectSelect = document.getElementById('subjectSelect');
const senderPreview = document.getElementById('senderPreview')
const subjectPreview = document.getElementById('subjectPreview')


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

const setSenderPreview = () =>{
  senderSelect.addEventListener('change', () =>{
    senderPreview.innerHTML = '<b>From:</b> ' + senderSelect.value + '@gamestop.com'
  })
}
const setSubjectPreview = () =>{
  subjectSelect.addEventListener('keyup', (e) =>{
    subjectPreview.innerHTML = '<b>Subject:</b> ' + e.target.value
  })
}

setSubjectPreview()

setSenderPreview()

// playground

info.addEventListener("click", () => {
  dialogContent.innerHTML = guideInfo;
  activeDialog();
});

preview.addEventListener("click", (e) => {
  dialogContent.innerHTML = "";
  dialogContent.innerHTML += '<h2>Mail Content</h2>';
  dialogContent.innerHTML += preview.innerHTML;

  activeDialog();

  closeOnclickingOutsideDialog();
});
