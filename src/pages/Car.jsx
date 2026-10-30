import car from "./../assets/car.png";
import { Link } from "react-router";

export default function Car() {
  return (
    <div className="w-200 mt-50 mx-auto border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">
      <p className="text-3xl font-kanit font-bold text-center">
        Car Installment Calculator
      </p>

      <p className="text-gl font-kanit text-center text-gray-500">
        คำนวณ Car Installment
      </p>

      <img src={car} alt="car" className="mt-5 w-70" />

      <form className="w-full flex flex-col mt-5">
        <label className="font-kanit text-sg text-gray-700">
          ชื่อผู้คำนวณ
        </label>

        <input
          type="text"
          name="username"
          className="border border-gray-300 shadow-sm rounded-sm p-2"
        />

        <label className="font-kanit text-sg mt-5 text-gray-700">
          ราคารถ (บาท)
        </label>

        <input
          type="number"
          name="price"
          className="border border-gray-300 shadow-sm rounded-sm p-2"
        />

        <label className="font-kanit text-sg mt-5 text-gray-700">
          ดอกเบี้ยต่อปี (%)
        </label>

        <input
          type="number"
          name="interest"
          className="border border-gray-300 shadow-sm rounded-sm p-2"
        />

        <label className="font-kanit text-sg text-gray-700 mt-5">
          เงินดาวน์ (%)
        </label>

        <div className="flex items-center gap-2 mt-2 font-kanit text-sg text-gray-700">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="downPayment"
              value="15"
              defaultChecked
              className="accent-gray-600"
            />
            15%
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="downPayment"
              value="20"
              className="accent-gray-600"
            />
            20%
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="downPayment"
              value="25"
              className="accent-gray-600"
            />
            25%
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="downPayment"
              value="30"
              className="accent-gray-600"
            />
            30%
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="downPayment"
              value="35"
              className="accent-gray-600"
            />
            35%
          </label>
        </div>

        <label className="font-kanit text-sg text-gray-700 mt-5">
          จำนวนเดือนที่ผ่อน
        </label>

        <select
          name="installment"
          className="border border-gray-300 shadow-sm rounded-sm p-2 mt-2 font-kanit text-sg"
        >
          <option value="24">24 เดือน</option>
          <option value="36">36 เดือน</option>
          <option value="48">48 เดือน</option>
          <option value="60">60 เดือน</option>
          <option value="72">72 เดือน</option>
          <option value="84">84 เดือน</option>
        </select>

        <div className="flex gap-2 mt-3">
          <button
            type="button"
            className="w-1/2 bg-blue-600 text-white p-2 mt-5 rounded-xl font-kanit font-bold hover:bg-gray-800 cursor-pointer"
          >
            คำนวณ
          </button>

          <button
            type="button"
            className="w-1/2 bg-gray-300 text-gray-700 p-2 mt-5 rounded-xl font-kanit font-bold hover:bg-gray-400 cursor-pointer"
          >
            ล้างข้อมูล
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center mt-1 gap-2">
        <p className="font-kanit font-bold mt-5 text-gray-700">
          ผ่อนชำระต่อเดือน: 0.00 บาท
        </p>
      </div>

      <Link
        to="/"
        className="w-full text-center bg-gray-200 text-gray-700 p-2 mt-5 rounded-sm font-kanit font-bold"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  );
}
