const isDebug = "false";
let data = {loading:1, image:[]};

let time_load = setInterval(function(){

    data.loading += 1;
    isStatus = "";
    if(data.loading < 5){
        isStatus = "добре";
       
    }else if(data.loading < 12){
        isStatus = "cередньо, потрібна оптмізація Lite";
    }else{
        isStatus = "погано, потрібна оптмізація Full";
    }
    let label = $(".doDebugGETW").text(`${data.loading}s (${isStatus})`);
    
},1000);


let images = $("img").each(function(){
    $(this).on("load", function(){
        let dataL = {time: data.loading, src: $(this).attr("src")};
        
        data.image.push(dataL);
    });
});

window.onload = function () {
    clearInterval(time_load);
    setTimeout(function(){
        $(".preloader").fadeOut(300);

        $.ajax({
            method: "POST",
            url: "debug.php",
            data: {"data":  data},
          }).done(function(data){
            console.log(data);
          });
        
    },600);
}

