import "../styles/variables.css";
import "../styles/index.css";

const ApresentationCard = ({title,text, image, alt}) => {
  return(
    <div className="flex flex-col justify-center items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
        <h3 className="text-black font-bold text-base md:text-lg mb-2">{title}</h3>
        <img className="w-12 h-12 md:w-16 md:h-16 mb-3" src={image} alt={alt} />
        <p className="text-black text-sm md:text-base text-center leading-relaxed">{text}</p>
    </div>

  )
}
export default ApresentationCard;