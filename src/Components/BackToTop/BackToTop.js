import { useEffect } from "react";
import imgTop from "../../assets/arrowtop.png";

function BackToTop() {
  useEffect(() => {
    const backToTopLink = document.createElement("a");
    backToTopLink.href = "#";
    backToTopLink.className = "back-to-top";

    const backToTopImg = document.createElement("img");
    backToTopImg.src = `${imgTop}`;

    backToTopLink.appendChild(backToTopImg);
    document.body.appendChild(backToTopLink);

    function toTop() {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
          backToTopLink.style.display = "block";
        } else {
          backToTopLink.style.display = "none";
        }
      });

      backToTopLink.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    toTop();
  }, []);

  return null;
}

export default BackToTop;
