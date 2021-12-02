$(function() {

    //myAjax("termekek.json", termekLista);
    const myAjax = new MyAjax;
    const adminTomb=[];
    const szuloElem = $(".termekek");
    let apivegpont="http://localhost:3000/termekek";
    console.log(apivegpont);
    myAjax.adatBetolt(apivegpont, adminTomb, termekLista);

    function termekLista(termekek) {
        
        
        
        const sablonElem = $('thead .termek');
        szuloElem.empty();
        sablonElem.show();
        

        termekek.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TermekAdmin(node, elem);

        });
        sablonElem.hide(); //sablonelem eltávolítása
    }
    $("#torol").on("click", () =>{
        myAjax.deleteBetolt(apivegpont,1)
    });
    $("#modosit").on("click", () =>{
        let modosit= {
            "termeknev":$("#termeknev").val(),
            "kep":$("#kep").val(),
            "leiras":$("#leiras").val(),
            "ar": $("#ar").val()
        }
        myAjax.putBetolt(apivegpont,modosit, 2)
    });
    
    $(window).on("torles", () => {
        console.log("Töröltem magam!")
    });
    $(window).on("modositas", () => {
        console.log("Módosítottam magam!")
    });

});