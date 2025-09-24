import Header from '../components/Header';
import ApresentationCard from '../components/ApresentationCard';
import UserCommentary from '../components/UserCommentary';
import Footer from '../components/Footer';
import "../styles/variables.css";
import "../styles/index.css";
import ProductApresentation from '../components/ProductApresentation';


const LandingPage = () => {
  return (  
    <>
      <Header/>

        <div className="bg-[var(--primaria)] w-full h-[250px] md:h-[300px] lg:h-[350px] flex flex-col justify-center items-center p-4 md:p-6 text-center overflow-hidden ">
            <h1 className="title"> Melodia: Sua Música, Sua Forma</h1>
            <p className="subtitle px-2 md:px-4">Descubra novos artistas, crie playlists personalizadas e viva a melhor experiência musical com qualidade de som superior.</p>
            <button className="bg-[var(--secundaria)] text-[var(--text)] px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[var(--text-secundaria)] transition text-sm md:text-base"><a href='https://soundcloud.com/musicas-sem-copyright1'>Ouvir Agora</a></button>
        </div>

        <div id="beneficios" className="flex flex-col justify-center items-center p-4 md:p-8 bg-white">
            <h2 className="text-black font-bold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">Por que escolher o Melodia?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl px-2">                
                <ApresentationCard
                title={"Qualidade de Som"}
                text={"Áudio cristalino para você curtir cada batida."}
                image={"../src/assets/headphones.svg"}
                alt={"Ícone de Headphones"}
                />
                <ApresentationCard
                title={"Playlists Personalizadas"}
                text={"Monte sua trilha sonora de acordo com seu estilo."}
                image={"../src/assets/list.svg"}
                alt={"Ícone de Lista"}
                />
                <ApresentationCard
                title={"Novos Artistas"}
                text={"Descubra sons e vozes que você ainda não conhece."}
                image={"../src/assets/music-icon.svg"}
                alt={"Ícone de Nota Musical"}
                />
            </div>
        </div>

        <div id="depoimentos" className="flex flex-col justify-center items-center p-4 md:p-8 bg-white">
            <h2 className="text-black font-bold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">O que dizem nossos usuários</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl px-2">                
                <UserCommentary
                name={"Pedro Cunha Coutinho"}
                text={"O melhor app de música que já usei!"}
                photo={"../src/assets/user.svg"}
                alt={"Foto de Usúario"}
                />
                <UserCommentary
                name={"Thomaz Vasconcelos Mendes"}
                text={"A qualidade do áudio é incrível!"}
                photo={"../src/assets/user.svg"}
                alt={"Foto de Usúario"}
                />
                <UserCommentary 
                name={"Pedro Henrique dos Santos"}
                text={"Não consigo parar de escutar músicas nesse app."}
                photo={"../src/assets/user.svg"}
                alt={"Foto de Usúario"}
                />
            </div>
        </div>
    <div>
        <ProductApresentation
            title={"App Melodia"}
            image_missao={"../src/assets/bullseye-solid-full.svg"}
            alt_missao={"Imagem de Alvo"}
            text={"Proporcionar uma experiência musical excepcional através de tecnologia inovadora, conectando pessoas às suas paixões musicais com qualidade cristalina de áudio e descobertas personalizadas."}
            image_valores={"../src/assets/heart-solid-full.svg"}
            alt_valores={"Imagem Coração"}
            text2={"Ser a plataforma de música preferida globalmente, revolucionando como as pessoas descobrem, compartilham e vivenciam a música, criando uma comunidade musical vibrante e inclusiva."}
            image_visao={"../src/assets/glasses-solid-full.svg"}
            alt_visao={"Imagem Óculos"}
            text3={"Descubra uma experiência musical única com o design moderno do Melodia. Nossa interface em tons vibrantes de roxo e rosa oferece navegação simplificada, playlists personalizadas e acesso instantâneo às suas músicas favoritas. Com visual clean e funcionalidades inteligentes, encontre e organize sua trilha sonora perfeita em poucos toques."}
            image={"../src/assets/interface.png"}
            alt={"Interface do produto em um celular"}
        />
     </div>
    <div id="contato" className="w-full flex justify-center items-center py-8 md:py-12 bg-[var(--primaria)] px-4">
        <form className="w-full max-w-sm md:max-w-lg rounded-xl p-4 md:p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-center text-[var(--texto)]">
            Fale Conosco
            </h2>

            <div>
            <input type="text" id="nome" placeholder="Seu Nome" className="mt-1 w-full p-2 md:p-3 bg-[var(--fundo)] rounded-lg text-[var(--primaria)] focus:ring-2 focus:ring-[var(--text-secundaria)] focus:outline-none text-sm md:text-base"
            />
            </div>

            <div>
            <input
                type="email" id="email" placeholder="Seu E-mail" className="mt-1 w-full p-2 md:p-3 bg-[var(--fundo)] rounded-lg text-[var(--primaria)] focus:ring-2 focus:ring-[var(--text-secundaria)] focus:outline-none text-sm md:text-base"
            />
            </div>

            <div>
            <textarea id="mensagem" rows="4" placeholder="Escreva sua mensagem..." className="mt-1 w-full p-2 md:p-3 bg-[var(--fundo)] rounded-lg text-[var(--primaria)] focus:ring-2 focus:ring-[var(--text-secundaria)] focus:outline-none text-sm md:text-base"></textarea>
            </div>

            <button type="submit" className="w-full bg-[var(--secundaria)] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-[var(--text-secundaria)] transition text-sm md:text-base">
            Enviar
            </button>
        </form>
    </div>
    <Footer/>
    </>
  );
};

export default LandingPage;