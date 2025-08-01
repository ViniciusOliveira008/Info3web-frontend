import "./index.css";
import Sidebar from "./components/sidebar.jsx";

export default function Perfil(){

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
            <div className="flex flex-col items-center">
                <img 
                    className="w-32 h-32 rounded-full object-cover shadow-md mb-3"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYR1ZmkBOhqTpBkbRchB48qc8paZPx64WUA&s"
                    alt="Foto de perfil"
                />
                <h1 className="text-4xl font-semibold text-roxo_destaque"> Vinícius Alves</h1>
                <p className="text-3x1 font-medium text-black mt-3 text-center max-w-md">
                    Oi, eu me chamo Vinícius. Sou um completo nerd em história. Se você me perguntar toda a lore de todos os super-heróis, eu vou saber.
                </p>
                <h1 className="text-4xl font-semibold text-roxo_destaque mt-15"> Posts</h1>

            </div>
            <Sidebar />
        </div>
    );
}
