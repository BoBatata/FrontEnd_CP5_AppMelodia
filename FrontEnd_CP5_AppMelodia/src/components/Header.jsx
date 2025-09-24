import "../styles/variables.css";
import "../styles/index.css";


const Header = () => {
    return (
    <header  className="w-full bg-[var(--fundo)]/70 backdrop-blur-sm px-4 md:px-6 py-4 md:py-6 sticky top-0">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
                <img className="w-10 h-10 md:w-12 md:h-12" src="/logo.png" alt="Logo" />
                <h1 className="text-lg md:text-xl font-bold text-[var(--primaria)]">Melodia</h1>
            </div>

            <nav className="hidden md:flex space-x-4 lg:space-x-6">
                <a href="#beneficios" className="text-[var(--primaria)] hover:text-[var(--secundaria)] transition text-sm lg:text-base">Benefícios</a>
                <a href="#depoimentos" className="text-[var(--primaria)] hover:text-[var(--secundaria)] transition text-sm lg:text-base">Depoimentos</a>
                <a href="#interface" className="text-[var(--primaria)] hover:text-[var(--secundaria)] transition text-sm lg:text-base">Interface</a>
                <a href="#contato" className="text-[var(--primaria)] hover:text-[var(--secundaria)] transition text-sm lg:text-base">Contato</a>
            </nav>
        </div>
    </header>
    );
};

export default Header;