class MMT {
  constructor(element) {
    element = document.querySelector(element);
    this.info = element.querySelector("#info");
    this.dialog = element.querySelector("#dialog");
    this.preview = element.querySelector("#preview");
    this.dialogContent = this.dialog.querySelector(".content");
    this.senderSelect = element.querySelector("#senderSelect");
    this.subjectSelect = element.querySelector("#subjectSelect");
    this.senderPreview = element.querySelector("#senderPreview");
    this.subjectPreview = element.querySelector("#subjectPreview");
    this.resetFormBtn = element.querySelector("#reset");
    this.mailerForm = element.querySelector("#mailerForm");
    this.guideInfo = this.dialogContent.innerHTML;

    this.initialize();
  }

  openDialog() {
    this.closeDialogBtnHandler();
    this.dialog.classList.add("active");
  }

  closeDialog() {
    this.dialog.classList.remove("active");
  }

  closeOnclickingOutsideDialog() {
    this.dialog.addEventListener("click", (e) => {
      if (e.target != this.dialog) return;
      this.closeDialog();
    });
  }

  closeDialogBtnHandler() {
    const closeBtn = '<i class="fa-solid fa-xmark" id="closeDialog"></i>';
    this.dialogContent.insertAdjacentHTML("afterbegin", closeBtn);
    const closeDialog = document.getElementById("closeDialog");
    closeDialog.addEventListener("click", () => {
      this.closeDialog();
    });
  }

  setSenderPreview() {
    this.senderSelect.addEventListener("change", () => {
      this.senderPreview.innerHTML = [
        "<b>From:</b> ",
        this.senderSelect.value,
        "@gamestop.com",
      ].join("");
    });
  }

  setSubjectPreview() {
    this.subjectSelect.addEventListener("keyup", (e) => {
      this.subjectPreview.innerHTML = ["<b>Subject:</b> ", e.target.value].join(
        ""
      );
    });
  }

  clearForm() {
    this.mailerForm.addEventListener("change", () => {
      this.resetFormBtn.disabled = false;
      this.resetFormBtn.addEventListener("click", () => {
        this.mailerForm.reset();
      });
    });
  }

  initialize() {
    this.setSubjectPreview();
    this.setSenderPreview();
    this.clearForm();

    this.info.addEventListener("click", () => {
      this.dialogContent.innerHTML = this.guideInfo;
      this.openDialog();
    });

    this.preview.addEventListener("click", () => {
      this.dialogContent.innerHTML = [
        "<h2>Mail Content</h2>",
        this.preview.innerHTML,
      ].join("\n");
      this.openDialog();
      this.closeOnclickingOutsideDialog();
    });
  }
}

const massiveMailTester = new MMT(".MMT");
