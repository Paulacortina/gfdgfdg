'use client'
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



const DataVizTemplate = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();

  // Configura el rango de frames según la duración del video
  const videoDuration = 60; // en segundos
  const scrollRange = 13000; // Define el rango de scroll en px para ajustar

  // Mapea el progreso del scroll al tiempo de reproducción del video
  const videoTime = useTransform(scrollY, [2060, scrollRange], [0, videoDuration]);

  useEffect(() => {
    const unsubscribe = videoTime.on("change", (currentTime) => {
      if (videoRef.current) {
        videoRef.current.currentTime = currentTime;
      }
    });

    // Retorna la función de limpieza para evitar suscripciones duplicadas
    return () => unsubscribe();
  }, [videoTime]);

  return (
    <div className="px-[20px]  mx-auto grid grid-cols-12 gap-x-5">
      <header>
        {/* Barra de navegación */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 col-span-12">
          <div className="container mx-auto flex items-center justify-between py-4 px-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            {/* Menú */}
            <div className="flex space-x-8 text-[#6A73AF] text-lg">
              <a href="#home" className="hover:text-[#FF6054] hover:font-semibold">Home</a>
              <a href="#venues" className="hover:text-[#FF6054] hover:font-semibold">Venues</a>
              <a href="#infraestructura" className="hover:text-[#FF6054] hover:font-semibold">Infraestructura</a>
              <a href="#audiencia" className="hover:text-[#FF6054] hover:font-semibold">Audiencia</a>
              <a href="#economia" className="hover:text-[#FF6054] hover:font-semibold">Economía</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="col-span-12">

        {/* Sección 1 */}
        <section id="home" className="flex flex-col justify-center items-center text-center col-span-12 mt-32">
          <div style={{ width: '1100px', height: '500px' }} className="flex items-center justify-center mt-12">
            <img src="/paris2024.svg" alt="SVG Image" style={{ width: '100%', height: '100%' }} />
          </div>
          <p className="text-[#6A73AF] font-semibold mt-4">
            JUEGOS OLÍMPICOS
          </p>
        </section>

        {/* Sección 2 */}
        <section className="flex flex-col justify-center items-center text-center col-span-6 mt-64">
          <h1 className="text-6xl text-[#2A305C] font-bold">¿QUÉ SON?</h1> 
          <p className="text-lg text-[#6A73AF] font-normal mt-12">
            Una celebración de la excelencia atlética y la unión entre naciones.
          </p>
          <div style={{ width: '600px', height: '600px' }}>
            <img src="/arosintro.svg" alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        </section>

        {/* Sección 3 */}
        <section className="flex flex-col justify-center items-center text-center col-span-8 mt-24">
          <h1 className="text-6xl mb-2 text-[#2A305C] font-bold">¿ESPECTÁCULO O DEPORTE?</h1>
          <h2 className="text-3xl mb-2 text-[#6F77AF] font-normal mt-2">
            ¿Por Qué Millones Siguen los Juegos Olímpicos?
          </h2>
          <div className="flourish-embed flourish-chart" data-src="visualisation/19289043"></div>
        </section>

        {/* Sección 4 */}
        <section className="flex flex-col justify-center items-center text-center col-span-12 mt-24">
          <h1 className="text-6xl mb-2 text-[#2A305C] font-bold">FANÁTICOS EN FOCO</h1>
          <h2 className="text-3xl mb-2 text-[#6F77AF] font-normal mt-2">¿Quiénes Siguen el Espectáculo?</h2>
        </section>

        {/* Sección 5 */}
        <section className="flex flex-col justify-center items-center text-center col-span-5 mt-12">
          <h2 className="text-3xl mb-2 text-[#FF6054] font-normal">Más de 500.000 espectadores</h2>
          <p className="text-md mb-2 text-[#4C5173] font-bold mt-4">En la ceremonia de apertura</p>
          <div style={{ width: '600px', height: '300px' }} className="mt-12 mb-4">
            <img src="/venue1.svg" alt="" style={{ width: '100%', height: '100%' }} />
          </div>
          <h1 className="text-4xl mb-2 text-[#6F77AF] font-semibold mt-12">Entradas vendidas</h1>
          <h2 className="text-3xl mb-2 text-[#FF6054] font-normal mt-12">8.8 Millones</h2>
          <p className="text-lg mb-2 text-[#6A73AF] font-normal mt-2 mx-80">
            A partir de julio de 2024, el Comité Organizador de París anunció una venta récord de 8,8 millones de entradas para los Juegos Olímpicos de 2024, superando el máximo anterior de 8,3 millones establecido durante los Juegos de Atlanta 1996
          </p>
        </section>

        {/* Video que se controla con scroll y Sección 6 */}
        <div className="grid grid-cols-12 gap-5 h-[150vh] mt-32">
          {/* Sección 6 - ocupa las primeras 8 columnas */}
          <section className="col-span-8">
           
            {/* seccion Venues */}
            <section id="venues" className="flex flex-col justify-center items-center text-center col-span-12 mt-64">
              <h1 className="text-6xl text-[#2A305C] font-bold">Venues</h1>
              
              <h2 className="text-3xl mb-2 text-[#6F77AF] font-normal mt-6">Capacidad total de espectadores</h2>
              <h3 className="text-3xl mb-2 text-[#FF6054] font-normal mt-2">300.000 a 800.000</h3>
              <div className= "flex flex-col justify-center items-center mt-24 mx-20">
                <p className="text-3xl mb-6 text-[#2A305C] font-semibold text-center ">Espectadores diarios</p>
                <p className="text-lg mb-2 text-[#6A73AF] font-normal mt-2 text-center">La construcción y modernización de sedes deportivas para los Juegos de París 2024 ha tenido un impacto significativo en la ciudad y sus alrededores. Un ejemplo clave es el Centro Acuático Olímpico, situado cerca del Stade de France en Saint-Denis. Esta es la única instalación deportiva permanente construida específicamente para los Juegos y seguirá siendo utilizada después del evento como un centro público para nadadores locales y atletas de élite.</p>

                <div style={{ width: '600px', height: '338px' }} className="mt-12 mb-24">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/SGDzpycZv9w"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Video de YouTube"
                  ></iframe>
                </div>
              </div>
            
              <div className= "flex flex-col justify-center items-center mx-20 mb-24">
                <p className="text-3xl mb-6 text-[#2A305C] font-semibold text-center ">Modernización</p>
                <p className="text-lg mb-2 text-[#6A73AF] font-normal mt-2 text-center">Además, varias infraestructuras deportivas existentes fueron renovadas y modernizadas, como el Stade Roland Garros para el tenis y el Arena Bercy para el baloncesto. Estas inversiones han fortalecido la infraestructura deportiva de París, asegurando un legado duradero para el deporte y beneficiando a la comunidad local en el futuro.</p>
              </div>

              {/* seccion Villa olimpica */}
              <div className= "flex flex-col justify-center items-center mx-20 mb-12">
                <p className="text-3xl mb-6 text-[#2A305C] font-semibold text-center ">La villa olímpica</p>
                <p className="text-lg mb-2 text-[#6A73AF] font-bold mt-2 text-center">Construcción de la villa olímpica. </p>
                <h3 className="text-3xl mb-2 text-[#FF6054] font-normal mt-2">Edificio en Saint-Denis</h3>
                <p className="text-lg mb-2 text-[#6A73AF] font-normal mt-2 text-center">La Villa Olímpica de los Juegos Olímpicos de París 2024 está ubicada en la región de Saint-Denis, al norte de París. Este proyecto no solo proporcionó infraestructura moderna y sostenible para albergar a los atletas, sino que también revitalizó una zona previamente subdesarrollada. </p>
              </div>
              
              <div className="flex items-center justify-center">
                {/* Contenedor para el texto y el subtítulo */}
                <div className="ml-16">
                  <h1 className="text-lg text-[#6A73AF] font-bold">Saint Denis</h1>
                  <p className="text-lg text-[#6A73AF] font-normal mt-2">Tras los Juegos, la villa se transformará en viviendas, oficinas y espacios comunitarios, creando nuevas oportunidades económicas y mejorando la calidad de vida local. <br /><br /> Además, la inversión en transporte y servicios ha dejado una infraestructura robusta y accesible que beneficiará a los residentes durante muchos años, reforzando el legado de París como una ciudad verde e inclusiva.</p>
                </div>
                <div style={{ width: '300px', height: '300px' }} className="flex-shrink-0 px-4">
                  <img src="/saints-denis.svg" alt="Saint Denis" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              
            </section>
            
           
            {/*seccion Infraestructura*/} 
            <section id="infraestructura" className="flex flex-col justify-center items-center text-center col-span-12 mt-64">
                <h1 className="text-6xl text-[#2A305C] font-bold">Infraestructura</h1>
             
              <div className= "flex flex-col justify-center items-center mt-24 mx-20">
               
                <div style={{ width: '300px', height: '300px' }} className= "mb-40" >
                <div className="flourish-embed flourish-chart" data-src="visualisation/19833720"style={{ width: '100%', height: '100%' }}>
                </div>
                </div> 

                <h2 className="text-3xl mb-2 text-[#6F77AF] font-normal mt-6">Modernización de </h2>
                <h3 className="text-3xl mb-2 text-[#FF6054] font-normal mt-0">infraestructura</h3>
                  <p className="text-lg mb-2 text-[#6A73AF] font-normal mt-2 text-center">Se han renovado y modernizado varias instalaciones deportivas existentes, como el Stade Roland Garros para el tenis y el Arena Bercy para el baloncesto.</p>
              </div>

              <div className= "flex flex-col justify-center items-center mt-24 mx-20">
                <p className="text-3xl mb-6 text-[#2A305C] font-semibold text-center ">Hoteles</p>
                <h2 className="text-3xl mb-2 text-[#6F77AF] font-normal mt-2 text-center">Mejoras en alojamiento e infraestructuras urbanas </h2>
                <div className="flex items-center justify-center">
                <div>
                  <p className="text-lg text-[#6A73AF] font-normal mt-6"> Se han construido nuevos hoteles y se han mejorado las infraestructuras de alojamiento para manejar el aumento de turistas durante los Juegos. Además, se han realizado mejoras en infraestructuras urbanas, como la expansión de ciclovías y zonas peatonales para facilitar el acceso y promover la movilidad sostenible.</p>
                </div>
                <div style={{ width: '300px', height: '300px' }} className="flex-shrink-0 px-6">
                  <img src="\hoteles.svg" alt="Saint Denis" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
               </div>

              {/* seccion Transporte publico */}
              <div className= "flex flex-col justify-center items-center mt-24 mx-20">
                <p className="text-3xl mb-6 text-[#2A305C] font-semibold text-center ">Transporte Público</p>
                <p className="text-lg mb-2 text-[#6A73AF] font-normal mt-2 text-center">Se han llevado a cabo mejoras significativas en la red de transporte público, incluida la expansión de la linea de tren RER B que conecta el aeropuerto Charles de Gaulle con el centro de París y la Villa Olímpica. También se están desarrollando nuevas lineas de metro dentro del proyecto Grand Paris Express, que facilitarán el acceso a los diferentes recintos olímpicos y mejorarán la movilidad en la región. </p>

                <div style={{ width: '600px', height: '300px' }} className="mt-12">
                <img src="\lineas-de-tren.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>

              {/* seccion Turismo */}
              <div className= "flex flex-col justify-center items-center mt-16 mx-20 mb-32">
                <p className="text-3xl mb-6 text-[#2A305C] font-semibold text-center ">Turismo</p>
                <h1 className="text-lg text-[#6A73AF] font-bold">Crecimiento del turismo</h1>
                <h3 className="text-3xl mb-2 text-[#FF6054] font-normal mt-0">3 Miillones de visitantes</h3>
                <h2 className="text-3xl text-[#6F77AF] font-normal mt-2 text-center">Adicionales en 2024 </h2>
                <div style={{ width: '300px', height: '100px' }} className="my-6">
                <img src="\personitas.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
                <p className="text-lg text-[#6A73AF] font-normal text-center mb-12">Generaron ingresos de €4 mil millones en gastos turísticos. Estas cifras subrayan el impacto de los Juegos en el crecimiento económico, la mejora de infraestructuras y el legado duradero que dejaron en París y sus alrededores</p>
                <div style={{ width: '600px', height: '300px' }} className= "mb-40">
                   <div className="flourish-embed flourish-pictogram" data-src="visualisation/19831846" style={{ width: '100%', height: '100%' }}></div>
                </div>
             
              </div>
            </section>

        
            {/*seccion Audiencia*/}
            <section id="audiencia" className="flex flex-col justify-center items-center text-center col-span-12 mt-16">

              <h1 className="text-6xl text-[#2A305C] font-bold">Audiencia</h1>  
              
              <div className="flex items-center justify-center">
                    <div>            
                      <h2 className="text-3xl mb-2 text-[#6F77AF] font-normal mt-6">Espectadores Totales <br /> de la Ceremonia de <br /> Apertura (tv) </h2>
                      <h1 className="text-6xl mb-2 text-[#FF6054] font-bold mt-6">1000</h1>
                      <h3 className="text-3xl mb-2 text-[#FF6054] font-normal mt-2">Millones</h3>
                      <p className="text-lg text-[#6A73AF] font-normal mt-6"> El alcance global y la visibilidad que recibe el país pueden mejorar su reputación internacional, atrayendo futuras inversiones y turismo.</p>
                    </div>
                    <div style={{ width: '300px', height: '600px' }} className="flex-shrink-0 px-6">
                      <img src="\antena.svg" alt="Saint Denis" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
          
                <div className= "flex flex-col justify-center items-center mt-24 mx-20">
                        <p className="text-3xl mb-6 text-[#2A305C] font-semibold text-center ">La batalla por la audiencia</p>
                        <div style={{ width: '500px', height: '200px' }} className= "mb-80">
                          <div className="flourish-embed flourish-chart" data-src="visualisation/20281431" style={{ width: '100%', height: '100%' }}></div>
                        </div>  
                        <h1 className="text-lg text-[#2A305C] font-bold mt-40">Se reunieron dos tipos de audiencia</h1>                    
                </div>

                <div className= "flex flex-col justify-center items-center mt-64 mx-20">
                      <h2 className="text-3xl text-[#6F77AF] font-normal mt-6 text-center">Las Físicas y las Digitales</h2>  
                      <h3 className="text-3xl mb-2 text-[#FF6054] font-normal mt-0">Con experiencias muy distintas</h3>    
                      <p className="text-lg text-[#6A73AF] font-normal mt-6 text-center"> Quienes asistieron en persona vivieron la emoción del ambiente, el contacto directo con los atletas y el espectáculo de la ciudad, haciendo de su experiencia algo inolvidable. Al mismo tiempo, las audiencias digitales disfrutaron del evento desde casa, accediendo a contenido exclusivo y personalizado. A través de plataformas en línea, pudieron seguir sus deportes favoritos en tiempo real, interactuar en redes sociales y sentir la conexión con la emoción olímpica a distancia. </p>                                  
                </div>
              
            </section>
        
        
            

          {/*seccion Economia*/}
              <section id="economia" className="flex flex-col justify-center items-center text-center col-span-12 mt-64">
              <div className="flex items-center">
                  <div>            
                  <h1 className="text-6xl text-[#2A305C] font-bold justify-left">Economía</h1> 
                  </div>
                  <div style={{ width: '300px', height: '300px' }} className="flex-shrink-0 px-12 ml-16">
                    <img src="\signo-euro.svg" alt="Saint Denis" style={{ width: '100%', height: '100%' }} />
                  </div>
            </div>


            <div className= "flex flex-col justify-center items-center mt-6 mx-20 mt-24 mb-24 text-center">
              <p className="text-3xl text-[#2A305C] font-semibold mb-6">Inversión</p>
              <h1 className="text-lg text-[#2A305C] font-bold mx-20">Total estimado con $3 mil millones de fondos públicos</h1> 
              <p className="text-lg text-[#6A73AF] font-normal mt-6 "> Esta inversión tuvo como objetivo no solo la celebración del evento, sino también el impulso de sectores clave como la construcción, los servicios y el turismo, fortaleciendo la economía de la ciudad y del país. <br /> <br />El impacto económico fue considerable: los Juegos generaron €10.7 mil millones para la economía francesa, con la región de Île-de-France, que incluye a París, recibiendo €5.7 mil millones de esa contribución. </p>  
            </div>


            <div className= "flex flex-col justify-center items-center mt-6 mx-20 mt-24 mb-24 text-center">
              <p className="text-3xl text-[#2A305C] font-semibold mb-6">Presupuesto</p>
              <h3 className="text-3xl mb-2 text-[#FF6054] font-normal mt-0">de €8.8 millones</h3>  
              <h1 className="text-lg text-[#2A305C] font-bold mx-20">La organización de los Juegos Olímpicos 2024 representó una inversión significativa</h1> 
              <p className="text-lg text-[#6A73AF] font-normal mt-6 ">Estos datos reflejan una inversión significativa que podría impulsar sectores como la construcción, los servicios, y el turismo. Analizar el retorno de esta inversión a través del aumento del PIB, creación de empleos, y la mejora de infraestructuras puede respaldar la hipótesis.</p>  
            </div>    

            <div className= "flex flex-col justify-center items-center mt-6 mx-20 mt-24 mb-24 text-center">
              <p className="text-3xl text-[#2A305C] font-semibold mb-6">Ganancia</p>
              <p className="text-lg text-[#6A73AF] font-normal mt-6 ">Se espera que los Juegos Olímpicos y Paralímpicos de París 2024 generen una contribución económica de 10.700 millones de euros en Francia, con la región de Île-de-France, donde se encuentra París, recibiendo 5.700 millones de euros.</p>  
            </div>    

            <div className= "flex flex-col justify-center items-center mt-6 mx-20 mt-24 mb-24 text-center">
              <p className="text-3xl text-[#2A305C] font-semibold mb-6">Empleo</p>
              <h1 className="text-lg text-[#2A305C] font-bold mx-20">Se proyecta que el evento creará </h1> 
              <h3 className="text-3xl mb-2 text-[#FF6054] font-normal mt-0">119.000 Empleos</h3>  
              <h1 className="text-lg text-[#2A305C] font-bold mx-20">cada año desde 2024 hasta 2030</h1> 
              <p className="text-lg text-[#6A73AF] font-normal mt-6 ">Esto es debido al impacto a largo plazo de los juegos en el turismo y la economía. Los Juegos Olímpicos impulsarán directamente el turismo, con expectativas de hasta 3 millones de turistas adicionales en 2024, lo que podría sumar hasta 4.000 millones de euros en gastos turísticos.</p>  
            </div>    
            </section>
            
          </section>

          {/* Video - ocupa las últimas 4 columnas y es sticky */}
          <div className="col-span-4 flex justify-center">
            <div className="sticky top-1/2 transform -translate-y-1/2 h-[80vh] flex items-start justify-centert">
               <div className="relative" style={{ width: '600px', height: '800px' }}>
                <motion.video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  src="\composicion-mapa-paris_8.mp4"
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* Ciudad completa */}
          <section className='ml-24'>
            <div style={{ width: '1000px', height: '1000px' }} className="flex-shrink-0">
                <img src="\ciudad-completa.svg" alt="Saint Denis" style={{ width: '100%', height: '100%' }} />
            </div>
          </section>

        </div>

      </main>
    </div>
  );
};

export default DataVizTemplate;