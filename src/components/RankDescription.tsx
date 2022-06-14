type TypeProps = {
  name?: string;
  rank?: number;
};

export const RankDescription = (props: TypeProps) => {
  return (
    <div className="flex flex-col h-full text-white lg:justify-end justify-center items-center">
      <p className="text-center lg:text-2xl text-lg">
        Hello {props.name}, your current rank is...
      </p>
      <h1 className="lg:text-6xl text-3xl ">#{props.rank}</h1>
    </div>
  );
};
