"use strict";

var userDialog = document.querySelector(".setup");

document.querySelector(".setup-similar").classList.remove("hidden");
var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

var WIZARDS_NAMES = ["Дамблдор", "Волдеморт", "Доктор Стрендж", "Гарри Поттер"];
var wizards = [
  {
    name: WIZARDS_NAMES[0],
    coatColor: "rgb(241, 43, 107)"
  },
  {
    name: WIZARDS_NAMES[1],
    coatColor: "rgb(215, 210, 55)"
  },
  {
    name: WIZARDS_NAMES[2],
    coatColor: "rgb(101, 137, 164)"
  },
  {
    name: WIZARDS_NAMES[3],
    coatColor: "rgb(127, 127, 127)"
  }
];

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (let i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);