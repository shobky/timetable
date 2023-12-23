import React, { useState } from "react";
import AddLectureModal from "./addLectureModal";

export default function AddNewLecture({ handleSetLectureList }) {
  const [open, setOpen] = useState(false);
  const [isConflect, setIsConflect] = useState(false);

  const handleConflect = () => {
    setIsConflect(!isConflect);
    setTimeout(() => {
      setIsConflect(false);
    }, 3500);
  };

  function renderModal() {
    if (open)
      return (
        <AddLectureModal
          isConflect={isConflect}
          handleConflect={handleConflect}
          handleSetLectureList={handleSetLectureList}
          handleToggleModal={() => setOpen(!open)}
        />
      );
  }

  function renderConflectAlert() {
    if (isConflect)
      return (
        <div className=" z-50 max-w-[400px] font-semibold bg-red-500 text-white p-4  absolute top-6 right-6 rounded-lg flex justify-between flex-row-reverse items-start">
          <button
            onClick={handleConflect}
            className=" relative -top-4  -right-2 text-xl"
          >
            x
          </button>
          <p className="w-[95%] ">
            Can't add lecture due to conflects, check if the hall is available
            first.
          </p>
        </div>
      );
  }
  return (
    <>
      {renderModal()}
      {renderConflectAlert()}
      <button
        onClick={() => setOpen(true)}
        className="font-medium p-2 text-lg hover:opacity-90 realteive hover:-mt-1 hover:mb-1 ease-in-out duration-75 hover:pb-2 underline"
      >
        +Add new
      </button>
    </>
  );
}
