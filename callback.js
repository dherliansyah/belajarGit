const name =  ["Abigail","Alexandra","Alison","Amanda","Angela","Bella","Carol","Caroline","Carolyn","Deirdre",
                "Diana","Elizabeth","Ella","Faith","Olivia","Penelope"];

    function sayHello(quote, huruf, callback){

        const data = callback(quote)
        const hasil = data.filter((item, index) => index > huruf)
        
        return hasil 
    };

    function cari(quote){
        const data = name.filter(item=>{
            const word = item.toUpperCase().search(quote.toUpperCase())
            return word >=0
        })
        return data
    };
    
    console.log(sayHello("an", 3, cari));






    






    

