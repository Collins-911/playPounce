import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../css/entry.css';
import duck from '../assets/duck.png';
import cat from '../assets/cat.png';
import pacman from '../assets/pacman.png';
import mc from '../assets/mc.png';
import ghost from '../assets/ghost.png';
import mario from '../assets/mario.png';
import frog from '../assets/frog.png';

export default function Entry() {
    const navigate = useNavigate();

    
    const [name, setName] = useState('');

    const submit = () => {
        console.log(name); 
        navigate("/Gamehub");
    };

    return (
        <div className="containerEntry">
            <div className="object">
                <img src={duck} alt="duck" className="duck duck1" />
                <img src={cat} alt="cat" className="duck duck2" />
                <img src={frog} alt="frog" className="duck duck3" />
                <img src={pacman} alt="pacman" className="duck duck4" />
                <img src={mc} alt="minecraft" className="duck duck5" />
                <img src={mario} alt="mario" className="duck duck6" />
                <img src={ghost} alt="ghost" className="duck duck7" />
            </div>

            <div className="enterUser">
                <div className="avatar">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="Avatar"
                    />
                </div>

                {/* 👇 Bind input value to state */}
                <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <select name="Language">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                </select>

                <button className="btnEntry" onClick={submit}>Ok!</button>
            </div>
        </div>
    );
}
