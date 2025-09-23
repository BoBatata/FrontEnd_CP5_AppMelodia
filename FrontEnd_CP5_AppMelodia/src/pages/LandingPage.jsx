import Header from '../components/Header';
import ApresentationCard from '../components/ApresentationCard';
import UserCommentary from '../components/UserCommentary';
import "../styles/variables.css";
import "../styles/index.css";


const LandingPage = () => {
  return (
    <>
      <Header/>

        <div class="bg-(--primaria) w-full h-[300px] flex flex-col justify-center items-center p-6 text-center space-y-4 overflow-hidden">
            <h1 class="title"> Melodia: Sua Música, Sua Forma</h1>
            <p class="subtitle">Descubra novos artistas, crie playlists personalizadas e viva a melhor experiência musical com qualidade de som superior.</p>
            <button class="bg-(--secundaria) text-color-(--primaria) px-6 py-2 rounded-full hover:bg-(--text-secundaria) transition">Ouvir Agora</button>
        </div>

        <div class="flex flex-col justify-center items-center p-5">
            <h2 class="text-black font-bold text-2xl">Por que escolher o Melodia?</h2>
            
            <div class="flex">                
                <ApresentationCard
                title={"Qualidade de Som"}
                text={"Áudio cristalino para você curtir cada batida."}
                image={"../src/assets/headphones.svg"}/>
                <ApresentationCard
                title={"Playlists Personalizadas"}
                text={"Monte sua trilha sonora de acordo com seu estilo."}
                image={"../src/assets/list.svg"}/>
                <ApresentationCard
                title={"Novos Artistas"}
                text={"Descubra sons e vozes que você ainda não conhece."}
                image={"../src/assets/music-icon.svg"}/>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center p-5">
            <h2 class="text-black font-bold text-2xl">O que dizem nossos usuários</h2>
            
            <div class="flex">                
                <UserCommentary
                name={"Pedro Cunha Coutinho"}
                text={"O melhor app de música que já usei!"}
                photo={"../src/assets/user.svg"}/>
                <UserCommentary
                name={"Thomaz Vasconcelos Mendes"}
                text={"A qualidade do áudio é incrível!"}
                photo={"../src/assets/user.svg"}/>
                <UserCommentary
                name={"Pedro Henrique dos Santos"}
                text={"Não consigo para de escutar músicas nesse app."}
                photo={"../src/assets/user.svg"}/>
            </div>
        </div>
      
        <div>
            
        </div>

    </>
  );
};

export default LandingPage;