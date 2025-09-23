import "../styles/variables.css";
import "../styles/index.css";
import logo from '../assets/logo.png';


const Header = () => {
    return (
    <header class="w-full bg-(--fundo) px-[10px] py-[20px] flex items-center">
        <div class="max-w-[1140px] mx-auto flex items-center">
            <img class="w-12 h-12" src={logo} alt="Logo" />
            <h1 class="text-xl font-bold text-(--primaria)">Melodia</h1>

            <nav class="hidden md:flex space-x-6">
                <a href="#beneficios" class="text-(--primaria) hover:text-(--secundaria) transition">Benefícios</a>
                <a href="#funcionalidades" class="text-(--primaria) hover:text-(--secundaria) transition">Funcionalidades</a>
                <a href="#depoimentos" class="text-(--primaria) hover:text-(--secundaria) transition">Depoimentos</a>
                <a href="#contato" class="text-(--primaria) hover:text-(--secundaria) transition">Contato</a>
            </nav>
        </div>
    </header>
    );
};

export default Header;