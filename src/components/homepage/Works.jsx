import ecom from "/src/assets/images/ecom.png";
import cloudf from "/src/assets/images/cloudf-square.png";
import brain from "/src/assets/images/brain.webp";
import wine from "/src/assets/images/wine.png";
import weather from "/src/assets/images/weather.png";
import amazon from "/src/assets/images/amazon.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";


export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://jhashikha12.github.io/E-commerce-responsive-site/"
            img={ecom}
            alt="ecommerce website mockup"
            name="Cara "
            type="Frontend Development • E-commerce"
            year="2024"
            tools="HTML • CSS • JavaScript"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-0">
          <Projects
            link="https://github.com/jhashikha12/brain-tumor-detection"
            img={brain}
            alt="brain project desc"
            name="Brain tumor detection "
            type="Machine Learning"
            year="2022"
            tools="Pyhton • Jupyter notebook"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-40">
          <Projects
            link="https://github.com/jhashikha12/wine-quality-prediction"
            img={wine}
            alt="wine project description"
            name="Wine Quality prediction"
            type="Machine Learning "
            year="2023"
            tools="Pyhton • Jupyter notebook "
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-0">
          <Projects
            link="https://jhashikha12.github.io/amazon-home/"
            img={amazon}
            alt="amazon clone page mockup"
            name="Amazon LANDING PAGE CLONE"
            type="Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 xl:pt-40 md:col-span-4 md:pt-0">
        <Projects
            link="https://sj-weatherapp.netlify.app"
            img={weather}
            alt="weather project mockup"
            name="Weather app"
            type="Frontend Development, API"
            year="2024"
            tools="React • API • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
