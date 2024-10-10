"use client";

import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const SingleStudentPage = () => {
  const { id } = useParams();

  return (
    <div className="flex-1 flex flex-col xl:flex-row p-4 gap-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-eSky py-6 px-4 rounded-lg flex-1 flex gap-4 overflow-hidden">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover bg-red-600"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Lenoard Synder</h1>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-sm font-medium">
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+25190234242</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@example.com</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex justify-between gap-4 flex-wrap">
            {/* CARD */}
            <div className="bg-white w-full p-4 rounded-lg flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="font-semibold text-xl">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white w-full p-4 rounded-lg flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="font-semibold text-xl">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white w-full p-4 rounded-lg flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="font-semibold text-xl">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white w-full p-4 rounded-lg flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="font-semibold text-xl">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-lg p-4 h-[1000px]">
          <h1>Student&apos;s schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-lg">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-eSkyLight" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-ePurpleLight" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-eYellowLight" href="/">
              Student&apos;s Results
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-eSkyLight" href="/">
              Student&apos;s Assignemnts
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
