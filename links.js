const links = [
  {
    label: "فيسبوك",
    iconClass: "fab fa-facebook-f",
    url: "https://www.facebook.com/profile.php?id=61582477494871",
  },
  {
    label: "واتساب",
    iconClass: "fab fa-whatsapp",
    url: "https://api.whatsapp.com/message/PKXI73UZ22JRK1?autoload=1&app_absent=0",
  },
  {
    label: "العنوان",
    iconClass: "fas fa-map-marker-alt",
    url: "https://maps.app.goo.gl/3a5miJD9HZdBL4S7A?g_st=iw",
  },
];

(function renderButtons() {
  const list = document.getElementById("buttons-list");

  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = link.url;
    a.target = "_blank";
    a.className = "button-main";

    a.innerHTML = `
      <div class="icon-container"><i class="${link.iconClass}"></i></div>
      <span class="overflow-wrap">${link.label}</span>
    `;

    li.appendChild(a);
    list.appendChild(li);
  });
})();
