//Bienvenida (USUARIO)
let nombre=prompt("Ingrese su nombre para empezar a navegar...")
alert("Bienvenido " + nombre + " a la familia más grande de ropa deportiva");
let genero = prompt("Seleccione el genero de ropa para navegar. Ingrese... \n-M para masculino \n-F para femenino");
let temporada = prompt("Eliga su temporada (30% de descuento en cualquier prenda de verano \n-V para verano \n-I para invierno) ")



//seccion masculina VERANO / INVIERNO

//seccion masculina VERANO
if ((genero == "M" ||  genero=="m") && (temporada=="V" || temporada=="v")){
    alert ("Ingreso a la seccion Masculina de verano");
    let selecion= prompt ("Seleccione el tipo de prenda deseada: \n1-Remeras \n2-Bermudas \n3-Mayas \n4-musculosas");
    
    switch(selecion){

        case "1": alert("Selecciono Remeras");
        let i= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $17.700")
            
            switch(i){
            case "1": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")

        break;

        case "2": alert("Selecciono Bermudas");

        let e= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $20.500 \n2° modelo / $14.000 \n3° modelo / $18.700")
            
            switch(e){
            case "1": alert("Seleccionaste la prenda deseada!");
            e= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(e != "C")
                //condicion de salida
                e= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            e= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(e != "C")
                //condicion de salida
                e= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            e= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(e != "C")
                //condicion de salida
                e= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")

        break;

        case "3": alert("Selecciono Mayas");

        let h= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $17.700")
            
            switch(h){
            case "1": alert("Seleccionaste la prenda deseada!");
            h= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(h != "C")
                //condicion de salida
                h= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            h= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(h != "C")
                //condicion de salida
                h= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            h= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(h != "C")
                //condicion de salida
                h= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")

        break;

        case "4": alert("Selecciono Musculosas");

        let u= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $14.500 \n2° modelo / $17.850 \n3° modelo / $16.170")
            
            switch(u){
            case "1": alert("Seleccionaste la prenda deseada!");
            u= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(u != "C")
                //condicion de salida
                u= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            u= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(u != "C")
                //condicion de salida
                u= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            u= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(u != "C")
                //condicion de salida
                u= prompt("... Introdusca C- para confirmar la compra")
            break;

            }
            alert("Hasta la proxima!")

        break;
    }
    


}else{
//seccion masculina INVIERNO
if ((genero == "M" ||  genero=="m") && (temporada=="I" || temporada=="i")){
        alert ("Ingreso a la seccion Masculina de invierno");
        let selecion= prompt ("Seleccione el tipo de prenda deseada: \n1-Remeras manga larga \n2-joggins \n3-camperas \n4-buzos");

            switch(selecion){

            case "1": alert("Selecciono Remeras manga larga");
            let i= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $18.500 \n2° modelo / $22.500 \n3° modelo / $20.222")
            
            switch(i){
            case "1": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")

            break;

            case "2": alert("Selecciono Joggins");
            let a= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $18.500 \n2° modelo / $22.500 \n3° modelo / $20.222")
            switch(a){
            case "1": alert("Seleccionaste la prenda deseada!");
            a= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(a != "C")
                //condicion de salida
                a= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            }
            alert("Hasta la proxima!")
            break;

            case "3": alert("Selecciono Camperas");
            let b= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $20.500 \n2° modelo / $27.500 \n3° modelo / $25.222")
            switch(b){
            case "1": alert("Seleccionaste la prenda deseada!");
            b= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(b != "C")
                //condicion de salida
                b= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            }
            alert("Hasta la proxima!")
            break;

            case "4": alert("Selecciono buzos");
            let c= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $32.500 \n2° modelo / $28.500 \n3° modelo / $240.222")
            switch(c){
            case "1": alert("Seleccionaste la prenda deseada!");
            c= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(c != "C")
                //condicion de salida
                c= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            i= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                i= prompt("... Introdusca C- para confirmar la compra")
            break;
            }
            alert("Hasta la proxima!")
            break;
        }

    } else{}
}


//seccion femenina VERANO/INVIERNO

//seccion femenina VERANO
if ((genero == "F" ||  genero=="f") && (temporada=="V" || temporada=="v")){
    alert ("Ingreso a la seccion Femenina de verano");
    let selecion= prompt ("Seleccione el tipo de prenda deseada: \n1-Remeras \n2-Bermudas \n3-Mayas \n4-musculosas \n5-tops");
    
    switch(selecion){

        case "1": alert("Selecciono Remeras");
        let p= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $10.500 \n2° modelo / $13.000 \n3° modelo / $12.700")
            
            switch(p){

            case "1": alert("Seleccionaste la prenda deseada!");

            p= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(i != "C")
                //condicion de salida
                p= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            p= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(p != "C")
                //condicion de salida
                p= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            p= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(p != "C")
                //condicion de salida
                p= prompt("... Introdusca C- para confirmar la compra")
            break;

            }
            alert("Hasta la proxima!")
        break;

        case "2": alert("Selecciono Bermudas");
        let l= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $17.700")
            
            switch(l){

            case "1": alert("Seleccionaste la prenda deseada!");
            l= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(l != "C")
                //condicion de salida
                l= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            l= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(l != "C")
                //condicion de salida
                l= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            l= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(l != "C")
                //condicion de salida
                l= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")
        break;

        case "3": alert("Selecciono Mayas");
        let t= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $17.700")
            
            switch(t){

            case "1": alert("Seleccionaste la prenda deseada!");
            t= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(t != "C")
                //condicion de salida
                t= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            t= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(t != "C")
                //condicion de salida
                t= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            t= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(t != "C")
                //condicion de salida
                t= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")
        break;

        case "4": alert("Selecciono Musculosas");
        let k= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $17.700")
            
            switch(k){

            case "1": alert("Seleccionaste la prenda deseada!");
            k= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(k != "C")
                //condicion de salida
                k= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            k= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(k != "C")
                //condicion de salida
                k= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            k= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(k != "C")
                //condicion de salida
                k= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")
        break;

        case "5": alert("Selecciono Tops");

        let j= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $20.500 \n2° modelo / $13.000 \n3° modelo / $19.100")
            
            switch(j){
            case "1": alert("Seleccionaste la prenda deseada!");
            j= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(j != "C")
                //condicion de salida
                j= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            j= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(j != "C")
                //condicion de salida
                j= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            j= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(j != "C")
                //condicion de salida
                j= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")
    }
    


}else{

//seccion femenina de Invierno
if ((genero == "F" ||  genero=="f") && (temporada=="I" || temporada=="i")){
        alert ("Ingreso a la seccion Femenina de invierno");
        let selecion= prompt ("Seleccione el tipo de prenda deseada: \n1-Remeras manga larga \n2-joggins \n3-camperas \n4-buzos");
        
        switch(selecion){

            case "1": alert("Selecciono Remeras manga larga");
            let i= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $17.700")
            
            switch(g){
            case "1": alert("Seleccionaste la prenda deseada!");
            g= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(g != "C")
                //condicion de salida
                g= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            g= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(g != "C")
                //condicion de salida
                g= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            g= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(g != "C")
                //condicion de salida
                g= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")
            break;

            case "2": alert("Selecciono Joggins")
            let m= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $17.500 \n2° modelo / $15.875 \n3° modelo / $17.700")
            
            switch(m){
            case "1": alert("Seleccionaste la prenda deseada!");
            m= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(m != "C")
                //condicion de salida
                m= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            m= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(m != "C")
                //condicion de salida
                m= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            m= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(m != "C")
                //condicion de salida
                m= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")
            break;
            case "3": alert("Selecciono Camperas");
            let f= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $45.500 \n2° modelo / $38.500 \n3° modelo / $48.570")
            
            switch(f){
            case "1": alert("Seleccionaste la prenda deseada!");
            f= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(f != "C")
                //condicion de salida
                f= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            f= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(f != "C")
                //condicion de salida
                f= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            f= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(f != "C")
                //condicion de salida
                f= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")
            break;
            case "4": alert("Selecciono buzos");
            let c= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $29.750 \n2° modelo / $35.200 \n3° modelo / $40.700")
            
            switch(c){
            case "1": alert("Seleccionaste la prenda deseada!");
            c= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(c != "C")
                //condicion de salida
                c= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "2": alert("Seleccionaste la prenda deseada!");
            c= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(c != "C")
                //condicion de salida
                c= prompt("... Introdusca C- para confirmar la compra")
            break;
            case "3": alert("Seleccionaste la prenda deseada!");
            c= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(c != "C")
                //condicion de salida
                c= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")
            break;
        }

    } else{}
}


