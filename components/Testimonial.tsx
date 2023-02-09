interface ITestimonialProps {
  name: string;
  text: string;
  date: string;
}

const Testimonial = ({ name, text, date }: ITestimonialProps) => {
  return (
    <div className="p-6 rounded-lg w-[430px] glass">
      <p className="mb-4 text-lg">{text}</p>
      <h1 className="text-gray-500">
        - {name}, {date}
      </h1>
    </div>
  );
};

export default Testimonial;
