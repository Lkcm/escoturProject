import React from 'react'
import logo from '../assets/images/escoturLogo.png'
import Link from 'next/link'

const Navbar = ({ color, position_shadow }) => {

  console.log(color)

  return (
    <div>

      <div className={`flex ${position_shadow} z-10 w-full lg:justify-between justify-center`}>
        <Link href="/">
          <img
            src="https://www.escotur.com.br/gallery_gen/4aa713203cefafb7eb1023da6a553037_800x320.png"
            alt="logo"
            className="w-[200px] cursor-pointer lg:scale-100 scale-50"

          />
        </Link>

        <div className="text-xl flex items-center mr-5 text-white lg:scale-100 scale-50">
          <div className={`flex gap-6 ${color}`}>
            <Link href="/">

              <a >
                Pagina Inicial
              </a>
            </Link>
            <a href="https://api.whatsapp.com/send/?phone=5531985273945&text&type=phone_number&app_absent=0">
              Fale Conosco
            </a>



            <Link href="/Sobre">
              <a>
                Sobre
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
