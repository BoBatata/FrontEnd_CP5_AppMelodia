import "../styles/variables.css";
import "../styles/index.css";

const ApresentationCard = ({title,text,text2,text3, image, alt,image_missao,alt_missao,image_valores,alt_valores,image_visao,alt_visao}) => {
  return(
    <div id="interface" className="flex flex-col lg:flex-row justify-center items-start gap-6 md:gap-8 lg:gap-12 p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full w-full max-w-7xl mx-auto">
        
        
        <div className="flex flex-col items-center lg:w-1/3 lg:flex-shrink-0">
          <img className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[300px] mb-4" src={image} alt={alt} />
          <h3 className="text-black font-bold text-lg md:text-xl lg:text-2xl text-center">{title}</h3>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-3 md:gap-4 lg:gap-3 xl:gap-4 w-full lg:w-2/3">
          <div className="shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow flex-1 rounded-lg bg-gray-50">
            <img className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] mx-auto mb-2" src={image_missao} alt={alt_missao}></img>
            <h3 className="text-black font-bold text-sm md:text-base lg:text-lg mb-2 text-center">Missão</h3>  
            <p className="text-black text-xs md:text-sm lg:text-base text-left leading-relaxed">{text}</p>
          </div>
          <div className="shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow flex-1 rounded-lg bg-gray-50">
            <img className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] mx-auto mb-2" src={image_visao} alt={alt_visao}></img>
            <h3 className="text-black font-bold text-sm md:text-base lg:text-lg mb-2 text-center">Visão</h3>
            <p className="text-black text-xs md:text-sm lg:text-base text-left leading-relaxed">{text2}</p>
          </div>
          <div className="shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow flex-1 rounded-lg bg-gray-50">
            <img className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[150px] mx-auto mb-2" src={image_valores} alt={alt_valores}></img>
            <h3 className="text-black font-bold text-sm md:text-base lg:text-lg mb-2 text-center">Valores</h3>
            <p className="text-black text-xs md:text-sm lg:text-base text-left leading-relaxed">{text3}</p>
          </div>
        </div>
    </div>
  )
}
export default ApresentationCard;