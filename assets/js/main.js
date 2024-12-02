const loadScript = (src) =>
    new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(src);
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.head.appendChild(script);
    });

const loadScripts = async () => {
    const scripts = ["./assets/js/items-add.js", "./assets/js/nav-menu.js", "./assets/js/libs/jquery-3.1.1.min.js", "./assets/js/libs/sort-items.js"];

    try {
        for (const script of scripts) {
            await loadScript(script);
            console.log(`Script ${script} loaded`);
        }
    } catch (error) {
        console.error("Error loading scripts:", error);
    }
};

loadScripts();
