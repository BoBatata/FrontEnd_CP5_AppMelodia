import "../styles/variables.css";
import "../styles/index.css";
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
    return (
        <footer class="bg-[var(--fundo)] text-white py-5 flex flex-col items-center">
            <div class="m-2">
                <img src={logo} alt="Logo" class="w-16 h-16" />
                <p class="max-w-md text-center text-[var(--primaria)] font-bold">Melodia</p>
            </div>

            <div class="flex space-x-6 text-2xl m-2">
                <a href="#" aria-label="Facebook">
                    <img class="w-10 h-10" src={facebook} alt="Facebook" />
                </a>
                <a href="#" aria-label="Instagram">
                    <img class="w-10 h-10" src={instagram} alt="Instagram" />
                </a>
                <a href="#" aria-label="LinkedIn">
                    <img class="w-10 h-10" src={linkedin} alt="LinkedIn" />
                </a>
            </div>
            
            <p class="text-sm text-black">© 2025 Melodia. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;