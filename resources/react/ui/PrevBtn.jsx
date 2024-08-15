import { RiArrowLeftSLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
export default function PrevBtn({ onClick }) {
  return (
    <>
      <button className="my-prev-button" onClick={onClick}>
        <RiArrowLeftSLine fill="#fff"/>
      </button>
    </>
  );
}
