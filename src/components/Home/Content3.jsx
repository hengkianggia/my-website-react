import React from 'react'
import gambar from '../../assets/sungai.jpg'

export const Content3 = () => {
  return (
    <section className="w-full h-screen relative mt-20">
      <div className="flex flex-col justify-between h-full z-10 absolute inset-0">
        <div className="w-full h-20 bg-gradient-to-b from-primary" />
        <div className="w-full h-20 bg-gradient-to-t from-primary" />
      </div>
      <div className=" w-full h-full text-abu px-16 relative">
        <h1 className="text-xl font-Fabulous absolute top-5 z-20">
          Vidéo & Motion
        </h1>
        <div className="w-full h-full flex justify-between">
          <aside className="w-4/12 flex flex-col h-full justify-center gap-8 text-sm font-Runs">
            <p>
              Idée, préparation, tournage, prise son, montage, mixage,
              étalonnage, motion design... Je peux gérer la création d'une vidéo
              de A à Z, jusqu'à sa publication.
            </p>
            <p>
              #Adobe Premiere Pro <br /> #After Effects <br /> #Adobe Studio
            </p>
          </aside>
          <aside className="w-6/12 h-full flex justify-center">
            <div className='w-7/12 h-full pt-14 text-center'>
              <img src={gambar} alt="" className='w-full h-[80%] object-cover object-center rounded-xl mb-4'/>
              <h3 className='text-md font-Fabulous'>China Lake</h3>
              <p className='text-sm font-Runs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, cumque?</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
