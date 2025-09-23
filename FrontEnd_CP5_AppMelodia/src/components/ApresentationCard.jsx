import "../styles/variables.css";
import "../styles/index.css";

const ApresentationCard = ({title,text, image, alt}) => {
    return (
        <div class="flex flex-col justify-center items-center text-center p-3">
            <img class="w-12 h-12" src={image} alt={alt} />
            <h3 class="text-black font-bold">{title}</h3>
            <p class="text-black">{text}</p>
        </div>
    );
};

export default ApresentationCard;