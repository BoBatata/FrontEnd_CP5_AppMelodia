import Header from '../components/Header';
import ApresentationCard from '../components/ApresentationCard';
import UserCommentary from '../components/UserCommentary';
import Footer from '../components/Footer';
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
      
    <div className="w-full flex justify-center items-center py-10 bg-(--primaria)">
        <form className="w-full max-w-lg rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-center text-(--texto)">
            Fale Conosco
            </h2>

            <div>
            <input type="text" id="nome" placeholder="Seu Nome" className="mt-1 w-full p-2 bg-(--fundo-secundaria) rounded-lg text-(--texto) focus:ring-2 focus:ring-(--text-secundaria) focus:outline-none"
            />
            </div>

            <div>
            <input
                type="email" id="email" placeholder="Seu E-mail" class="mt-1 w-full p-2 bg-(--fundo-secundaria) rounded-lg text-(--texto) focus:ring-2 focus:ring-(--text-secundaria) focus:outline-none"
            />
            </div>

            <div>
            <textarea id="mensagem" rows="4" placeholder="Escreva sua mensagem..." class="mt-1 w-full p-2 bg-(--secundaria) rounded-lg text-(--primaria) focus:ring-2 focus:ring-(--text-secundaria) focus:outline-none"></textarea>
            </div>

            <button type="submit" class="w-full bg-(--secundaria) text-white py-2 rounded-lg font-semibold hover:bg-(--fundo-secundaria) transition">
            Enviar
            </button>
        </form>
    </div>
    <Footer/>
    </>
  );
};

export default LandingPage;