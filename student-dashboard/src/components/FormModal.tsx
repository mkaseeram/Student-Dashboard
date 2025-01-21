import Image from 'next/image';
import React from 'react'


function FormModal({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) {

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =type === "create"? "bg-janYellow": type === "update"? "bg-janSky": "bg-janPurple";

  return (<>
          <button className={`flex justify-center items-center rounded-full ${size} ${bgColor}`}>
            <Image src={`/${type}.png`} alt='' width={16} height={16} />
          </button>
  </>)
}

export default FormModal
