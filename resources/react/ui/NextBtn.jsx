import { RiArrowRightSLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
export default function NextBtn ({onClick}) {
  return (
    <>
      <button className="my-next-button" onClick={onClick}>
        <RiArrowRightSLine fill="#fff"/>
      </button>
    </>
  );
}