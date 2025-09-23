import "../styles/variables.css";
import "../styles/index.css";

const UserCommentary = ({name, text, photo, alt}) => {
    return (
        <div className="h-fit w-full flex flex-col items-center text-center bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow mx-auto">
            <img className="w-12 h-12 md:w-16 md:h-16 mb-3 rounded-full" src={photo} alt={alt} />
            <h3 className="text-black font-bold text-sm md:text-base mb-2 leading-relaxed">{text}</h3>
            <p className="text-black text-xs md:text-sm font-medium">{name}</p>
        </div>
    );
};

export default UserCommentary;