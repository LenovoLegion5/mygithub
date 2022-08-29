import { Link } from "react-router-dom";
function Overview({ needed, getDataFunc }) {
  function renderRepo(db, html) {
    if (!html) {
      getDataFunc();
    } else if (html) {
      document.querySelector(".repos__wrapper").innerHTML = null;
      db.forEach((repo) => {
        let card = document.createElement("div");
        card.classList.add("over__card");
        let wrap = document.createElement("div");
        wrap.classList.add("card__wrap");
        let link = document.createElement("a");
        link.classList.add("over__title");
        link.textContent = repo.name;
        link.href = "/:id";
        let lang = document.createElement("p");
        lang.classList.add("over__lang");
        lang.textContent = repo.language;
        let visib = document.createElement("p");
        visib.classList.add("over__visib");
        visib.textContent = repo.visibility;
        let lang_color = document.createElement("span");

        if (repo.language === "HTML") {
          lang_color.classList.add("lang_color");
        } else if (repo.language === "CSS") {
          lang_color.classList.add("lang_color2");
        } else if (repo.language === "JavaScript") {
          lang_color.classList.add("lang_color3");
        }
        wrap.appendChild(link);
        wrap.appendChild(lang);
        lang.appendChild(lang_color);
        card.appendChild(wrap);
        card.appendChild(visib);
        html.appendChild(card);
      });
    }
  }

  return (
    <section className="overview">
      <h3 className="section_titie">Popular repositories</h3>
      <div className="repos__wrapper">
        {renderRepo(needed, document.querySelector(".repos__wrapper"))}
      </div>
    </section>
  );
}

export default Overview;
