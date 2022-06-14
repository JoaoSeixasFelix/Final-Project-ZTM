import Image from "next/image";

type PropsType = {
  pictures:string | undefined;
};

const ImageRecognition = (props: PropsType) => {
  return (
    <div className="flex justify-center items-center mt-5 mb-5 sm:w-auto w-64">
      <img src={props.pictures} width={"400px"} />
    </div>
  );
};

export default ImageRecognition;
