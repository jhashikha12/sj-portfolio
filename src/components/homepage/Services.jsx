import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Frontend",
    "AI/ML",
    "Problem solving ",
    
  ];

  const toolBoxItems = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Python",
    
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="experience" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="Specializing in web development and front-end design, I'm a full-stack developer 
          with a flair for AI/ML integration and problem-solving. My passion lies in crafting immersive digital
          experiences that resonate with users,
          blending intuitive interfaces with cutting-edge technology to leave a lasting impression."
          items={expertiseItems}
        />
        <ServiceUi
          title="my tech stack."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
