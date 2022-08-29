import React from "react";

function Repos(props) {
  function renderRepo(db, html) {
    // document.querySelector(".repos").innerHTML = null;
    if (!html) {
      props.getDataFunc();
    } else if (html) {
      db.forEach((repo) => {
        let card = document.createElement("div");
        card.classList.add("repos__repo");
        let link = document.createElement("a");
        link.classList.add("over__title");
        link.textContent = repo.name;
        link.href = `/${repo?.id}`;
        let wrap = document.createElement("div");
        wrap.classList.add("repo__wrap");
        let lang = document.createElement("p");
        lang.classList.add("repo__lang");
        lang.textContent = repo.language;
        let visib = document.createElement("p");
        visib.classList.add("over__visib");
        visib.classList.add("repo__visib");
        visib.textContent = repo.visibility;
        let lang_color = document.createElement("span");
        if (repo.language === "HTML") {
          lang_color.classList.add("lang_color");
        } else if (repo.language === "CSS") {
          lang_color.classList.add("lang_color2");
        } else if (repo.language === "JavaScript") {
          lang_color.classList.add("lang_color3");
        } else if (repo.language === "SCSS") {
          lang_color.classList.add("lang_color4");
        }
        lang.appendChild(lang_color);
        wrap.appendChild(link);
        wrap.appendChild(visib);
        card.appendChild(wrap);
        card.appendChild(lang);
        html.appendChild(card);
      });
    }
  }

  return (
    <section className="repos">
      {renderRepo(props.data, document.querySelector(".repos"))}
    </section>
  );
}

export default Repos;
