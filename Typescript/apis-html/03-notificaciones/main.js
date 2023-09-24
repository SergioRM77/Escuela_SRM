// Comprobar si el navegador admite notificacion
if(Notification == "undefined"){
    console.log("El navegador no admite notificaciones");
}else{
    console.log("El navegador admite notificaciones");
    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }

    let titulo = "Título de la notificación";
    let opciones = {
        body: "Contenido de la notificación",
        icon: "https://th.bing.com/th/id/OIP.8ZrjQn_Elu6ZelcPP7mTMwHaHa?pid=ImgDet&rs=1"
    };

    const notificacion = new Notification(titulo, opciones);
}
