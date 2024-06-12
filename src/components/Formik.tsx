"use client";

import { useState } from "react";

export default function Formik() {
  const [attendance, setAttendance] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || attendance === "") {
      setError("Барлық ақпараттар толтырылуы керек.");
      return;
    }
    setError("");
    const formEle = e.currentTarget;
    const formData = new FormData(formEle);

    formData.append("attendance", attendance);

    setLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwZiu-tfU5aJzVPpjiJgPDi4cbMEHiIv2fFezWIueP2PJyvFOEQngDe4OzcTk2r1YSTZw/exec",
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await response.json();
      setAttendance("");
      setName("");
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md px-4">
        <div className="flex flex-col text-center font-georgia">
          <div className="mb-4 mt-3 text-xl uppercase text-[#98761A]">
            тойға келетініңізді <br /> растауыңызды <br /> сұраймыз!
          </div>
          <div className="mt-2 flex flex-col items-center">
            <input
              type="text"
              name="Name"
              value={name}
              placeholder="Есіміңіз"
              onChange={(e) => setName(e.target.value)}
              className="h-10 w-full max-w-[85%] rounded-3xl bg-[#FAFAFA] px-3 text-lg outline-none"
            />
            <div className="mt-3 w-full max-w-[85%] text-left text-lg">
              Тойға келесіз бе?
            </div>
            <div className="mt-4 flex w-full max-w-[85%] items-center justify-start">
              <input
                type="radio"
                id="willAttend"
                name="attendance"
                value="Келемін"
                checked={attendance === "Келемін"}
                onChange={() => setAttendance("Келемін")}
                className="h-5 w-5 flex-shrink-0"
              />
              <label
                htmlFor="willAttend"
                className="ml-2 w-full max-w-[85%] flex-shrink-0 text-left"
              >
                ӘРИНЕ, КЕЛЕМІН
              </label>
            </div>
            <div className="mt-3 flex w-full max-w-[85%] items-center justify-start">
              <input
                type="radio"
                id="cannotAttend"
                name="attendance"
                value="Келе алмаймын"
                checked={attendance === "Келе алмаймын"}
                onChange={() => setAttendance("Келе алмаймын")}
                className="h-5 w-5 flex-shrink-0"
              />
              <label
                htmlFor="cannotAttend"
                className="ml-2 w-full flex-shrink-0 text-left"
              >
                ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН
              </label>
            </div>
            {error && (
              <div className="mt-3 w-full max-w-[85%] text-left text-red-500">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="mt-8 h-10 w-full max-w-[85%] rounded-3xl bg-[#98761A] px-2 text-lg text-[#FFFFFF] drop-shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? "Жіберілуде..." : "Жіберу"}
            </button>
          </div>
        </div>
      </form>
      <div className="mb-10 mt-16 flex flex-col text-center font-xxx text-2xl leading-relaxed text-[#090909]">
        Келіңіздер, <br /> салтанатты тоймыздың қадірлі <br /> қонағы
        болыңыздар!
      </div>
    </>
  );
}
