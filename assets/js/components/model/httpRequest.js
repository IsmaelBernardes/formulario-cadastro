
export function dadosIniciais(callback){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://private-21e8de-rafaellucio.apiary-mock.com/users");

    xhr.onreadystatechange = function (){

        if(xhr.readyState == 4){

            if(xhr.status == 200){
                
                callback(JSON.parse(xhr.responseText));
            }            
        }
    
    }
    
    xhr.send();
    
}