import "../styles/variables.css";
import "../styles/index.css";

const UserCommentary = ({name, text, photo}) => {
    return (
        <div class="h-fit w-100 flex flex-col items-center text-center bg-(--secundaria) rounded-md p-3 m-2">
            <img class="w-12 h-12" src={photo} alt="" />
            <h3 class="text-black font-bold">{text}</h3>
            <p class="text-black">{name}</p>
        </div>
    );
};

export default UserCommentary;