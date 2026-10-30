import calculate from './../assets/calculate.png';
import CardMenu from './../components/CardMenu';
import bmi from './../assets/Bmi.png';
import bmr from './../assets/Bmr.png';
import car from './../assets/car.png';
import Footer from './../components/Footer';
import {Link} from 'react-router';
export default function Home() {
  return (
    <div>
        <div className='flex flex-col items-center mt-20'>
            <img src={calculate} alt="calculate" className='w-30' />

            <p className='font-kanit text-3xl font-bold mt-5'>
                เครื่องคำนวนออนไลน์
            </p>

            <p className='font-itim text-xl text-gray-700'>
                เลือกคำนวนที่คุณต้องการจากเมนูด้านล่าง
            </p>

            <div className='mt-18 flex gap-10'>
                <Link to="/bmi">
                <CardMenu imgShow={bmi} titleShow="BMI (ดัชนีมวลกาย)" stitleShow="คำนวนน้ำหนักและส่วนสูงว่าเหมาะสมหรือไม่" />
                </Link>

                <Link to="/bmr">
                <CardMenu imgShow={bmr} titleShow="BMR (อัตราเผาพลาญร่างกาย)" stitleShow="คำนวนอัตราเผาพลาญร่างกายต้องการ" />
                </Link>

                <Link to="/car">
                <CardMenu imgShow={car}  titleShow="Car (เงินผ่อนรถต่อเดือน)" stitleShow="คำนวนเงินผ่อนรถยนต์หรือรถเครื่องต่อเดือน" />
                </Link>
            </div>

            <Footer />
        </div>
    </div>
  )
}
