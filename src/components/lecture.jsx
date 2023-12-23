import React from "react";

export default function Lecture({ lectureData }) {
  return (
    <div className="bg-stone-200 shadow-md border-1 border-stone-300 text-black p-6 min-w-[250px] rounded-lg">
      <section className="flex justify-between gap-4">
        <div>
          <p className="font-medium text-2xl leading-6">{lectureData.title}</p>
          <p className="text-base text-stone-800 mt-1">
            {lectureData.instructor}.
          </p>
        </div>
        <div className="flex font-medium flex-col items-end">
          <p className="">{new Date(lectureData.date).toLocaleDateString()}</p>
          <p>
            At <span className="">{lectureData.time}</span>
          </p>
        </div>
      </section>
      <section>
        <p className="opacity-80">
          Hall: <span className="font-bold">{lectureData.hall}</span>
        </p>
      </section>
      {lectureData.note && (
        <section className="mt-4">
          <p className="opacity-80">Note:</p>
          {lectureData.note}
        </section>
      )}
    </div>
  );
}
