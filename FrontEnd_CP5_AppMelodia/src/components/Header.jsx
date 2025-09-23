import "../styles/variables.css";
import "../styles/index.css";
import logo from '../assets/logo.png';


const Header = () => {
    return (
    <header className="w-full bg-[var(--fundo)] px-4 md:px-6 py-4 md:py-6 fixed">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
                <img className="w-10 h-10 md:w-12 md:h-12" src={logo} alt="Logo" />
                <h1 className="text-lg md:text-xl font-bold text-[var(--primaria)]">Melodia</h1>
            </div>

            <nav className="hidden md:flex space-x-4 lg:space-x-6">
                <a href="#beneficios" className="text-[var(--primaria)] hover:text-[var(--secundaria)] transition text-sm lg:text-base">Benefícios</a>
                <a href="#funcionalidades" className="text-[var(--primaria)] hover:text-[var(--secundaria)] transition text-sm lg:text-base">Funcionalidades</a>
                <a href="#depoimentos" className="text-[var(--primaria)] hover:text-[var(--secundaria)] transition text-sm lg:text-base">Depoimentos</a>
                <a href="#contato" className="text-[var(--primaria)] hover:text-[var(--secundaria)] transition text-sm lg:text-base">Contato</a>
            </nav>
        </div>
    </header>
    );
};

export default Header;