

export interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: string;
  className?: string;
}

const Heading = ({ level = 'h3', children, className }: IHeading) => {
  const Heading = level
  return (
    <Heading className={className}>{children}</Heading>
  );
};

export default Heading;
