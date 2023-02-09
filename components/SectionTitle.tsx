interface ISectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: ISectionTitleProps) => {
  return (
    <h1
      className="text-5xl font-semibold text-dark-gray mb-8 leading-normal"
      dangerouslySetInnerHTML={{ __html: title }}
    ></h1>
  );
};

export default SectionTitle;
