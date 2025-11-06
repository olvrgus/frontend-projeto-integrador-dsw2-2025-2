import React from 'react'
import { useState } from 'react';

const ThemeButton = () => {
        const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode")?? false);

        const handleBtnThemeClick = (e) => {
            if (e.target.checked == true)
                document.querySelector("html").setAttribute("data-bs-theme", "dark");
            else
                document.querySelector("html").setAttribute("data-bs-theme", "light");
            setDarkMode(!darkMode);
            localStorage.setItem("darkMode", e.target.checked); //Salva no localStorage
        }
        useEffect(() =>){
            if (darkMode == true) 
                document.querySelector("html").setAttribute("data-bs-theme", "dark");
            else
                document.querySelector("html").setAttribute("data-bs-theme", "light");
        }
        return (
            <div className="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={darkMode} onChange={handleBtnThemeClick} />
            </div>
        )
    }

export default ThemeButton