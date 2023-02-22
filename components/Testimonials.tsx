import testimonials from "@/data/testimonials";
import Testimonial from "./Testimonial";
import SectionTitle from "./SectionTitle";
import styles from "@/styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="my-20">
      <div className="container mx-auto">
        <SectionTitle title="What clients have to <br class='hidden md:block' /> say about me" />
      </div>

      <div
        className={`px-10 py-10 flex justify-center gap-12 w-max ${styles.testimonialContainer}`}
      >
        {testimonials.slice(0, 5).map((t, index) => {
          return (
            <Testimonial
              key={index}
              text={t.text}
              name={t.name}
              date={t.date}
            />
          );
        })}
      </div>

      <div
        className={`px-10 flex justify-center gap-12 w-max ${styles.testimonialContainerReverse}`}
      >
        {testimonials.slice(5).map((t, index) => {
          return (
            <Testimonial
              key={index}
              text={t.text}
              name={t.name}
              date={t.date}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
