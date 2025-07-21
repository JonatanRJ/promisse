import { useState } from 'react';

function App() {
  const [isRolled, setIsRolled] = useState(true);
  
    // Helper function to get correct asset paths
  const getAssetPath = (filename: string) => {
    // Use import.meta.env.BASE_URL for Vite's base URL
    return `${import.meta.env.BASE_URL || '/'}${filename}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-4 font-serif overflow-hidden">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl text-amber-200 text-center mb-8 tracking-wider animate-pulse">
          Contrato de corazón para Cristy
        </h1>
        
        {/* Scroll container */}
        <div className="flex justify-center items-center w-full">
          {isRolled ? (
            <div className="transition-all duration-1000 ease-in-out ">
              <img 
                src={getAssetPath('background-pergamino-rollo.png')} 
                alt="Pergamino enrollado"
                className="mx-auto max-h-[500px] "
              />
            </div>
          ) : (
            <div 
              className="transition-all duration-1000 ease-in-out w-[90vw] max-w-5xl"
              style={{
                backgroundImage: `url(${getAssetPath('background-pergamino.png')})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
                position: 'relative',
              }}
            >
              {/* Content overlay */}
              <div className="flex flex-col justify-center px-4 md:px-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl mt-55 md:m-6 font-bold text-center border-amber-800 pb-2 md:pb-4 text-amber-900">
                  Mi Promesa para Ti
                </h1>
                <div className="flex justify-center md:m-8">
                  <div className="w-64 md:w-32 h-1 bg-amber-700 rounded-full opacity-60"></div>
                </div>
                <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  En este día, con todo mi corazón, te prometo amor eterno y devoción inquebrantable. 
                </p>
                
                <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  Prometo ser tu refugio en las tormentas, tu compañero en las alegrías, y tu apoyo en cada paso del camino.
                </p>
                
                <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  Me comprometo a siempre cuidar tu sonrisa, proteger tus sueños y celebrar cada uno de tus logros.
                </p>

              <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  Prometo escuchar con atención cada palabra tuya, valorar tus opiniones y aprender de tu sabiduría.
                </p>
                
                <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  En cada desafío, prometo ser tu cómplice y aliado. Juntos encontraremos soluciones.
                </p>
                
                <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  Prometo respetar tu esencia única, admirar tu fuerza interior y nutrir la llama de tu espíritu.
                </p>

                <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  Seguire peleandote & molestandote hasta que mi corazón deje de latir.
                </p>

                <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  Contemplaré esos ojos que me llenan de paz y alegría, y prometo hacer todo lo posible para verte sonreír cada día.
                </p>

                <p className="text-lg md:text-lg leading-relaxed my-2 mx-4 md:m-6 indent-6 md:indent-8 text-amber-900">
                  Te prometo momentos de ternura, risas compartidas y silencios cómodos.
                </p>

                <div className="flex justify-center md:m-8">
                  <div className="w-64 md:w-32 h-1 bg-amber-700 rounded-full opacity-60"></div>
                </div>
                
                <p className="text-lg md:text-lg leading-relaxed text-center text-amber-900">
                  Firmado con todo mi amor,<br />
                  <span className="text-xl md:text-2xl font-bold m-2 inline-block">Att: Jonatan Ramirez Jimenez</span>
                </p>
                
                <div className="mb-55 md:m-8 flex justify-center">
                  <div className="bg-amber-700 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center text-amber-100 text-lg md:text-xl opacity-90 shadow-md">
                    ❤️
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
        
        {/* Roll button */}
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => setIsRolled(!isRolled)}
            className="px-8 py-3 bg-gradient-to-r from-amber-700 to-amber-800 text-amber-100 rounded-full font-medium tracking-wide shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
          >
            {isRolled ? 'Desenrollar' : 'Enrollar'}
          </button>
        </div>
        
        {/* Instructions */}
        <p className="text-amber-500 text-center mt-6 text-sm">
          Haz clic para {isRolled ? 'desenrollar' : 'enrollar'} el pergamino
        </p>
      </div>
      
      
      {/* Floating hearts animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-red-500 opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 12}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;