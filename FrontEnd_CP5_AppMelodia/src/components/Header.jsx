import "../styles/variables.css";
import "../styles/index.css";
import logo from '../assets/logo.png';


const Header = () => {
    return (
    <header class="w-full bg-[var(--fundo)] px-[10px] py-[20px]">
        <div class="max-w-[1140px] mx-auto flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <img class="w-12 h-12" src={logo} alt="Logo" />
                <h1 class="text-xl font-bold text-[var(--primaria)]">Melodia</h1>
            </div>

            <nav class="hidden md:flex space-x-6">
                <a href="#beneficios" class="text-[var(--primaria)] hover:text-[var(--secundaria)] transition">Benefícios</a>
                <a href="#funcionalidades" class="text-[var(--primaria)] hover:text-[var(--secundaria)] transition">Funcionalidades</a>
                <a href="#depoimentos" class="text-[var(--primaria)] hover:text-[var(--secundaria)] transition">Depoimentos</a>
                <a href="#contato" class="text-[var(--primaria)] hover:text-[var(--secundaria)] transition">Contato</a>
            </nav>
        </div>
    </header>
    );
};

export default Header;