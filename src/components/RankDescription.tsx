type TypeProps = {
  name?: string;
  rank?: number;
};

export const RankDescription = (props: TypeProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-xl">
        Hello {props.name}, your current rank is...
      </p>
      <h1 className="text-4xl">#{props.rank}</h1>
    </div>
  );
};
