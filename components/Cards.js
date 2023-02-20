import React from 'react'
import Image from 'next/image'
import disney from '../assets/images/HomePage/disney.jpg'
import cruzeiro from '../assets/images/HomePage/cruzeiro.png'

const Cards = () => {
  return (
    <div className="px-20">
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
        <div className='shadow-lg rounded-lg flex flex-col items-center pb-5'>
          <Image className="rounded-t-lg" src={disney} />
          <h3 className="text-3xl font-bold textd-slate-700 mb-3">Disney</h3>
          <p className='text-lg font-normal text-gray-600 mb-3'>Todos os anos, mais de um milhão de turistas visitam a pequena Caldas Novas. Eles chegam em busca das águas quentes do balneário, considerado a maior estância hidrotermal do mundo. Com temperaturas variando entre 30 e 57 graus, as centenas de piscinas dos hotéis e dos clubes atraem especialmente grupos da terceira idade e famílias com crianças,</p>
          <button className='bg-slate-500 p-3 rounded-lg'>Saiba mais</button>
        </div>

        <div className='shadow-lg rounded-lg flex flex-col items-center pb-5 hover:scale-105'>
          <Image className="rounded-t-lg" src={cruzeiro} />
          <h3 className="text-3xl font-bold textd-slate-700 mb-3">Cruzeiro</h3>
          <p className='text-lg font-normal text-gray-600 mb-10'>Faça a viagem dos seus sonhos com estilo, privacidade, luxo e conforto. Confira. Parcele em 10x Sem Juros. Ofertas Especiais. Pacotes para o Réveillon. Cruzeiros Internacionais. Destinations: Nordeste, América do Sul, Argentina, Brasil, Uruguai, Caribe, Mediterrâneo, Norte da Europa, Cuba.</p>
          <button className='bg-slate-500 p-3 rounded-lg hover:bg-slate-600'>Saiba mais</button>
        </div>

        <div className='shadow-lg rounded-lg flex flex-col items-center pb-5'>
          <Image className="rounded-t-lg" src={disney} />
          <h3 className="text-3xl font-bold textd-slate-700 mb-3">Disney</h3>
          <p className='text-lg font-normal text-gray-600 mb-3'>Todos os anos, mais de um milhão de turistas visitam a pequena Caldas Novas. Eles chegam em busca das águas quentes do balneário, considerado a maior estância hidrotermal do mundo. Com temperaturas variando entre 30 e 57 graus, as centenas de piscinas dos hotéis e dos clubes atraem especialmente grupos da terceira idade e famílias com crianças,</p>
          <button className='bg-slate-500 p-3 rounded-lg'>Saiba mais</button>
        </div>

        <div className='shadow-lg rounded-lg flex flex-col items-center pb-5'>
          <Image className="rounded-t-lg" src={cruzeiro} />
          <h3 className="text-3xl font-bold textd-slate-700 mb-3">Cruzeiro</h3>
          <p className='text-lg font-normal text-gray-600 mb-3'>Todos os anos, mais de um milhão de turistas visitam a pequena Caldas Novas. Eles chegam em busca das águas quentes do balneário, considerado a maior estância hidrotermal do mundo. Com temperaturas variando entre 30 e 57 graus, as centenas de piscinas dos hotéis e dos clubes atraem especialmente grupos da terceira idade e famílias com crianças,</p>
          <button className='bg-slate-500 p-3 rounded-lg'>Saiba mais</button>
        </div>

        <div className='shadow-lg rounded-lg flex flex-col items-center pb-5'>
          <Image className="rounded-t-lg" src={disney} />
          <h3 className="text-3xl font-bold textd-slate-700 mb-3">Disney</h3>
          <p className='text-lg font-normal text-gray-600 mb-3'>Todos os anos, mais de um milhão de turistas visitam a pequena Caldas Novas. Eles chegam em busca das águas quentes do balneário, considerado a maior estância hidrotermal do mundo. Com temperaturas variando entre 30 e 57 graus, as centenas de piscinas dos hotéis e dos clubes atraem especialmente grupos da terceira idade e famílias com crianças,</p>
          <button className='bg-slate-500 p-3 rounded-lg'>Saiba mais</button>
        </div>

        <div className='shadow-lg rounded-lg flex flex-col items-center pb-5'>
          <Image className="rounded-t-lg" src={cruzeiro} />
          <h3 className="text-3xl font-bold textd-slate-700 mb-3">Cruzeiro</h3>
          <p className='text-lg font-normal text-gray-600 mb-3'>Todos os anos, mais de um milhão de turistas visitam a pequena Caldas Novas. Eles chegam em busca das águas quentes do balneário, considerado a maior estância hidrotermal do mundo. Com temperaturas variando entre 30 e 57 graus, as centenas de piscinas dos hotéis e dos clubes atraem especialmente grupos da terceira idade e famílias com crianças,</p>
          <button className='bg-slate-500 p-3 rounded-lg'>Saiba mais</button>
        </div>
    </div>
    </div>

  )
      }

export default Cards


