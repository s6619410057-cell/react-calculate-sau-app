import bmr from "./../assets/bmr.png";
import { Link } from "react-router";

export default function Bmr() {
  return (
    <div className="w-200 mt-50 mx-auto border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">
      <p className="text-3xl font-kanit font-bold text-center">
        BMR Calculator
      </p>

      <p className="text-gl font-kanit text-center text-gray-500">
        คำนวณ BMR
      </p>

      <img src={bmr} alt="bmr" className="mt-5 w-70" />

      <form className="w-full flex flex-col">
        <label className="font-kanit text-sg text-gray-500">
          ป้อนน้ำหนัก (กิโลกรัม)
        </label>

        <input
          type="number"
          name="weight"
          className="border border-white shadow-sm rounded-sm p-2"
        />

        <label className="font-kanit text-sg mt-5 text-gray-500">
          ป้อนส่วนสูง (เซนติเมตร)
        </label>

        <input
          type="number"
          name="height"
          className="border border-white shadow-sm rounded-sm p-2"
        />

        <label className="font-kanit text-sg mt-5 text-gray-500">
          ป้อนอายุ (ปี)
        </label>

        <input
          type="number"
          name="age"
          className="border border-white shadow-sm rounded-sm p-2"
        />

        <label className="font-kanit text-sg text-gray-500 mt-5">
          เพศ:
        </label>

        <label className="font-kanit text-sg text-gray-500 mt-1 flex items-center gap-2">
          <input type="radio" name="gender" value="male" className="accent-gray-600" />
          ชาย
        </label>

        <label className="font-kanit text-sg text-gray-500 mt-1 flex items-center gap-2">
          <input type="radio" name="gender" value="female" className="accent-gray-600" />
          หญิง
        </label>

        <div className="flex gap-3">
          <button
            className="w-1/2 bg-indigo-700 text-white p-2 mt-5 rounded-xl font-kanit font-bold hover:bg-gray-800 cursor-pointer"
          >
            คำนวณ BMR
          </button>

          <button
            className="w-1/2 bg-red-500 text-white p-2 mt-5 rounded-xl font-kanit font-bold hover:bg-gray-600 cursor-pointer"
          >
            รีเซ็ต
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center mt-1 gap-2">
        <p className="font-kanit font-bold mt-5 text-gray-600">
          ค่า BMR ที่คำนวณได้
        </p>

        <p className="font-kanit font-bold mt-5 text-indigo-800">
          0.00
        </p>
      </div>

      <Link
        to="/"
        className="w-full text-center bg-gray-200 text-gray-600 p-2 mt-5 rounded-sm font-kanit font-bold"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  );
}
