import { useState } from "react";
import { Input } from "./ui/input";
import Modal from "./ui/modal";

export default function AddLectureModal({
  handleToggleModal,
  handleSetLectureList,
  handleConflect,
  isConflect,
}) {
  const [newLecutre, setNewLecture] = useState({
    title: "",
    instructor: "",
    date: new Date(),
    time: new Date().getTime(),
    hall: "",
    instruments: "",
    note: "",
  });

  const handleInputChange = (key, value) => {
    setNewLecture({
      ...newLecutre,
      [key]: value,
    });
  };

  const checkAvailability = (lectures, newLecture) => {
    for (const lecture of lectures) {
      if (lecture.hall.toLowerCase() === newLecture.hall.toLowerCase()) {
        if (lecture.date === newLecture.date) {
          return true; // Conflict on the same date
        }
        if (
          lecture.time === newLecture.time ||
          lecture.time - newLecture.time < 2
        ) {
          return true; // Conflict on the same time or within 2 hours
        }
      }
    }
    return false; // No conflicts found
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve lectures from localStorage
    const lectures = JSON.parse(localStorage.getItem("lectures")) || [];

    // Add the new lecture to the array
    const newLectureData = { ...newLecutre };
    lectures.push(newLectureData);

    if (checkAvailability(lectures, newLecutre)) return handleConflect();
    // Save the updated array back to localStorage
    localStorage.setItem("lectures", JSON.stringify(lectures));
    handleSetLectureList(newLectureData);
    // Reset the form after saving
    setNewLecture({
      title: "",
      instructor: "",
      date: new Date(),
      time: new Date().getTime(),
      hall: "",
      instruments: "",
    });

    // Close the modal
    handleToggleModal();
  };

  return (
    <Modal handleCloseShiftModal={handleToggleModal}>
      <div className="bg-white p-6 min-w-[350px] min-h-[250px] w-[50%] h-[70%] rounded-xl">
        <div className="flex justify-between items-center">
          <p className="font-medium text-xl">New lecture</p>
          <button
            onClick={() => handleToggleModal()}
            className="font-bold text-lg "
          >
            x
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 mt-4 flex flex-col  items-center"
        >
          <div className="flex gap-2 w-full">
            <Input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              name="title"
              value={newLecutre.title}
              placeholder="Lecture title"
              required
            />
            <Input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              name="instructor"
              value={newLecutre.instructor}
              placeholder="Instructor name"
              required
            />
          </div>
          <div className="flex gap-2 w-full">
            <Input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              name="date"
              value={newLecutre.date}
              placeholder="Date"
              type="date"
              required
            />
            <Input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              name="time"
              value={newLecutre.time}
              placeholder="Date"
              type="time"
              required
            />
          </div>
          <div className="flex gap-2 w-full">
            <Input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              name="hall"
              value={newLecutre.hall}
              placeholder="Lecture hall"
              required
            />
            <Input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              name="instruments"
              value={newLecutre.instruments}
              placeholder="Instruments"
            />
          </div>
          <textarea
            onChange={(e) => handleInputChange("note", e.target.value)}
            className=" max-h-[100px] h-24 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Notes.."
            maxLength={20}
          />
          <button className="relative top-2 bg-[#0A0B0C]  text-white py-2 px-8 rounded-xl text-base">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
}
