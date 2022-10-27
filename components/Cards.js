import React from 'react'
import Image from 'next/image'
import disney from '../assets/images/HomePage/disney.jpg'
import cruzeiro from '../assets/images/HomePage/cruzeiro.jpg'

const Cards = () => {
  return (
    <div className="mx-20 grid -mt-20 grid-cols-3 ">
      <div className="bg-slate-200 w-[32em] rounded-t-3xl hover:scale-105 shadow-xl ">
        <Image className="rounded-t-3xl"src={disney}/>
        <div className="flex flex-col items-center m-4 px-4">
        <p>Disney Viaje com segurança, qualidade, confiança e competência. A GTA oferece muito mais benefícios para você. Seja para viagens a lazer, estudos ou negócios! Atendimento 24 horas em português, em qualquer parte do mundo, 365 dias no ano. Viaje protegido. Diante de eventuais problemas de saúde, legais, perda de bagagem ou documentos, um simples chamado ativa o mais avançado sistema de assistência para oferecer soluções em qualquer parte do mundo. Um seguro de viagens vai muito além dos destinos obrigatórios.</p>
        <button className="flex my-3 bg-slate-500 p-4 rounded-lg text-white hover:bg-slate-600">Compre Agora</button>
        </div>
        </div>

        {/* <div className="bg-slate-200 w-[32em] h-80 container  rounded-t-3xl hover:scale-105 shadow-xl ">
         <div className="w-10">
         <Image className="object-cover object-center" src={cruzeiro}/>
         </div>
        
        <p>Disney Viaje com segurança, qualidade, confiança e competência. A GTA oferece muito mais benefícios para você. Seja para viagens a lazer, estudos ou negócios! Atendimento 24 horas em português, em qualquer parte do mundo, 365 dias no ano. Viaje protegido. Diante de eventuais problemas de saúde, legais, perda de bagagem ou documentos, um simples chamado ativa o mais avançado sistema de assistência para oferecer soluções em qualquer parte do mundo. Um seguro de viagens vai muito além dos destinos obrigatórios.</p>
        <button className="flex my-3 bg-slate-500 p-4 rounded-lg text-white hover:bg-slate-600">Compre Agora</button>

        </div> */}

        <div className="bg-slate-200 w-[32em] rounded-t-3xl hover:scale-105 shadow-xl ">
        <Image className="rounded-t-3xl"src={disney}/>
        <div className="flex flex-col items-center m-4 px-4">
        <p>Disney Viaje com segurança, qualidade, confiança e competência. A GTA oferece muito mais benefícios para você. Seja para viagens a lazer, estudos ou negócios! Atendimento 24 horas em português, em qualquer parte do mundo, 365 dias no ano. Viaje protegido. Diante de eventuais problemas de saúde, legais, perda de bagagem ou documentos, um simples chamado ativa o mais avançado sistema de assistência para oferecer soluções em qualquer parte do mundo. Um seguro de viagens vai muito além dos destinos obrigatórios.</p>
        <button className="flex my-3 bg-slate-500 p-4 rounded-lg text-white hover:bg-slate-600">Compre Agora</button>
        </div>
        </div>

        <div className="bg-slate-200 w-[32em] rounded-t-3xl hover:scale-105 shadow-xl ">
        <Image className="rounded-t-3xl"src={disney}/>
        <div className="flex flex-col items-center m-4 px-4">
        <p>Disney Viaje com segurança, qualidade, confiança e competência. A GTA oferece muito mais benefícios para você. Seja para viagens a lazer, estudos ou negócios! Atendimento 24 horas em português, em qualquer parte do mundo, 365 dias no ano. Viaje protegido. Diante de eventuais problemas de saúde, legais, perda de bagagem ou documentos, um simples chamado ativa o mais avançado sistema de assistência para oferecer soluções em qualquer parte do mundo. Um seguro de viagens vai muito além dos destinos obrigatórios.</p>
        <button className="flex my-3 bg-slate-500 p-4 rounded-lg text-white hover:bg-slate-600">Compre Agora</button>
        </div>
        </div>

    </div>
  )
}

export default Cards
