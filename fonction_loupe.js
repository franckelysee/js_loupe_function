loupe_fonction = function(){
    var menu = document.querySelector(".nav_menu_item_product");
    var main_loupe_zone = document.querySelector("._products-list");
    var louped_zone = main_loupe_zone.querySelector(".listeProduits");
    var item_products = louped_zone.querySelectorAll(".listeProduits_item");
    var carre, largeur,zoom
    var loupe = document.getElementById("loupe");
    var loupe_img = loupe.querySelector(".loupe_img");
    
    item_products.forEach((item)=>{
        if(item.classList.contains("active")){
            var image_louped = item.querySelector(".image_louped");
            item.addEventListener("mousemove", (event) => {
                console.log("move")
                loupe_img.src = image_louped.src;
            })
                
        }

    })

    menu_init(menu);


    initialise_loupe = function(){
        carre = 250;
        zoom = 2;
        largeur = 500;

        loupe.style.width = carre + "px";
        loupe.style.height = carre + "px";        
        loupe_img.style.width = (largeur * zoom) + "px";
    }
    if (window.matchMedia('(min-width: 1024px)').matches){
        initialise_loupe();
        main_loupe_zone.addEventListener("mousemove", (event)=>{
            //Calcul des coordonnées de la souris par rapport à l'image
            const rect = main_loupe_zone.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            //Definir la position de la loupe
            loupe.style.display = "block";

            loupe.style.left = x -(carre/2 ) + "px";
            loupe.style.top = y -(carre/2 ) + "px";

            //je retire le curseur de la souris pour la loupe
            main_loupe_zone.style.cursor = "none";

            //calcule des coordonnées de la souris par rapport a l'image de la loupe
            const offsetX = (x / rect.width) * (largeur * zoom);
            const offsetY = (y / rect.height) * (largeur * zoom);

            //Definir la position de l'image agrandie dans la loupe
            loupe_img.style.left = -offsetX + 150 + "px";
            loupe_img.style.top = -offsetY +220 + "px";

        });
        //je verifie si la loupe ne se trouve pas sur l'image
        main_loupe_zone.addEventListener("mouseleave", ()=>{
            loupe.style.display = "none";
        });
        
    }
};
