export interface IHeading {
  sampleTextProp: string;
}

const Heading = ({ sampleTextProp }: IHeading) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};

export default Heading;
