import React, { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);    

    useEffect(() => {
        fetch('/noticias.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar las noticias");
                }
                return response.json();
            })
            .then(data => setNews(data))
            .catch(error => console.error("Error:", error));
    }, []);

    return (
        <NewsContext.Provider value={{ news }}>
            {children}
        </NewsContext.Provider>
    );
};
