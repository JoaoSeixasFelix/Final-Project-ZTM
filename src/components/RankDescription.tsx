type TypeProps = {
  name?: string;
  rank?: number;
};

export const RankDescription = (props: TypeProps) => {
  return (
    <div className="flex flex-col text-white justify-start items-center">
      <p className="text-center text-2xl">
        Hello {props.name}, your current rank is...
      </p>
      <h1 className="text-6xl">#{props.rank}</h1>
    </div>
  );
};
