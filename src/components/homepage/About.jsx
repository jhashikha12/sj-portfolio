import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile-pic.png";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden flex justify-center items-center rounded-md md:sticky md:w-1/2 ">
          <img
            ref={profile}
            loading="lazy"
            // className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            className="object-center rounded-md object-cover "
            src={profileImg}
            width="90%"
            
            alt=""
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              I am an final year Electrical & Electronics undergrad
              @ C.V Raman Global University, Bhubaneshwar, Odisha.
              <br></br>
              <br></br>
              I bring a robust background in electronics and electrical engineering to the realm of computer science, 
              where I excel in crafting comprehensive web applications with a strong emphasis on frontend development, 
              seamlessly transitioning from the world of circuits to the dynamic landscape of IT.
              <br></br>
              <br></br>
              When I am not developing or coding, I delve into research activities exploring the fascinating intersection 
              of electronics and computer science. From delving into the intricacies of embedded systems to exploring the 
              potential of IoT (Internet of Things) and robotics, 
              I am driven by the pursuit of innovation and discovery at this dynamic crossroads.
              <br />
              <br />
              If you would like to know more about me:{" "}
              <a className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://drive.google.com/file/d/1ELNnxdBYGurQBMU4KPuNPTTO4ZNGu6i6/view?usp=sharing">
                  My Resume 📄
                </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
