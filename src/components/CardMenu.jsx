
export default function CardMenu({imgShow, titleShow, stitleShow}) {
  return (
    <div>
        <div className="w-100 border-l border-gray-200 p-10 rounded-2xl shadow-2xl flex flex-col items-center">
            <img src={imgShow} alt="รูปภาพ" className="w-40"/>

            <p className="mt-4 font-kanit text-xl font-bold">
                {titleShow}
            </p>

            <p className="mt-4 font-charm text-gl text-gray-500 text-center">
                {stitleShow}
            </p>
        </div>
    </div>
  )
}
