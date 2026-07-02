document.addEventListener("DOMContentLoaded", () => {
  const colors = {
    light: { background: "#FAF9F6", foreground: "#42943B" },
    green: { background: "#42943B", foreground: "#FAF9F6" },
    black: { background: "#000000", foreground: "#FFFFFF" },
  };

  const fonts = [
    "Modulaire",
    "Regibility",
    "Milos",
    "ueberwolken",
    "DataVisualizer",
    "1234567",
    "Blockfont",
    "Helvetica-SingleLine",
    "kandieshop",
    "Dschungel",
    "Tarifa Regular",
    "Tarifa Mono",
    "Tarifa Italic",
    "SplitFlap VF",
    "Dorn Knight",
    "Snowman VF",
    "moor",
  ];

  document.querySelectorAll(".textarea, .textarea-lonely").forEach((textarea) => {
    textarea.value = textarea.value.replace(/<br\s*\/?>/gi, "\n");
  });

  document.querySelectorAll(".fontSizeSlider").forEach((slider) => {
    const textarea = slider.closest(".textfeld")?.querySelector(".textarea, .textarea-lonely");
    if (!textarea) return;

    slider.addEventListener("input", () => {
      textarea.style.fontSize = `${slider.value}px`;
    });
  });

  const getRandomFont = () => fonts[Math.floor(Math.random() * fonts.length)] || "Alte Haas Grotesk";
  const headline = document.getElementById("dynamicHeadline");
  const introText = document.getElementById("dynamicText");

  if (headline) headline.style.fontFamily = getRandomFont();
  if (introText) introText.style.fontFamily = getRandomFont();

  const themeButton = document.getElementById("themeToggleButton");
  const themeNames = ["light", "green", "black"];
  let themeState = 0;

  const applyTheme = () => {
    const theme = themeNames[themeState];
    document.body.dataset.theme = theme;
    document.documentElement.style.setProperty("--theme-bg", colors[theme].background);
    document.documentElement.style.setProperty("--theme-fg", colors[theme].foreground);
  };

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      themeState = (themeState + 1) % themeNames.length;
      applyTheme();
    });

    applyTheme();
  }

  const sendEmailButton = document.getElementById("sendEmailButton");
  if (sendEmailButton) {
    sendEmailButton.addEventListener("click", () => {
      const recipient = "alexanderdelaporte@gmail.com";
      const subject = "Neue HAWburger Font";
      const body = "Deine Schrift soll auf HAWburger Fonts erscheinen?\n↓\n↓\n!!BITTE ALLES AUSFÜLLEN!!↓\n\n\n---\ntitle:\ninfo:(Semester/Kurs/etc.)\nauthor:\ncontact:\ndescription:(das was im bearbeitbaren Textfeld & in der Beschreibung steht)\ndate-of-creation: dd/mm/yyyy\norder:!frei lassen!\n---\n\nfüge bitte deine Schriftdatei als .ttf oder .otf als Anhang hinzu.\nDanke :)";
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  const addImgButton = document.getElementById("addImgButton");
  if (addImgButton) {
    addImgButton.addEventListener("click", () => {
      const recipient = "alexanderdelaporte@gmail.com";
      const title = document.querySelector(".fonth1")?.textContent.trim() || "HAWburger Font";
      const subject = `Usecase Font ${title}`;
      const body = `Usecase für "${title}"\nHier jpg/png einfügen!\nDanke :)`;
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});
