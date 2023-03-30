import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front end developer</h3>

      <div className="skills__box">
        <div className="skills_data">
          <i class="uil uil-html5-alt"></i>
          <div>
            <h3 className="skill__name">Html</h3>
            <span className="skilld__level">Advanced</span>
          </div>
        </div>
        <div className="skills_data">
          <i class="uil uil-css3-simple"></i>
          <div>
            <h3 className="skill__name">CSS</h3>
            <span className="skilld__level">Advanced</span>
          </div>
        </div>
        <div className="skills_data">
          <i class="uil uil-java-script"></i>
          <div>
            <h3 className="skill__name">Java script</h3>
            <span className="skilld__level">Intermediate</span>
          </div>
        </div>

        <div className="skills_data">
          <i class="uil uil-blogger-alt"></i>
          <div>
            <h3 className="skill__name">Bootstrap</h3>
            <span className="skilld__level"> intermediate</span>
          </div>
        </div>
        <div className="skills_data">
          <i class="uil uil-github"></i>
          <div>
            <h3 className="skill__name">git-hub</h3>
            <span className="skilld__level">intermediate</span>
          </div>
        </div>
        <div className="skills_data">
          <i class="uil uil-react"></i>
          <div>
            <h3 className="skill__name">React </h3>
            <span className="skilld__level">Advanced</span>
          </div>
        </div>

        <div className="skills_data">
        <i class='bx bxl-redux' ></i>
          <div>
            <h3 className="skill__name">Redux</h3>
            <span className="skilld__level">Intermediate</span>
          </div>
        </div>
        <div className="skills_data">
        <i class='bx bxl-tailwind-css'></i>

          <div>
            <h3 className="skill__name">Tailwind</h3>
            <span className="skilld__level">Advanced</span>
          </div>
        </div>
         <div className="skills_data">
         <i class='bx bxl-angular' ></i>
          <div>
            <h3 className="skill__name">Angular</h3>
            <span className="skilld__level">Intermediate</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Frontend;
