$(function () {
  const kosar = new Kosar()

  const myAjax = new MyAjax;
  const termekekTomb=[];
  const szuloElem = $(".termekek");
  let apivegpont="http://localhost:3000/termekek";
  console.log(apivegpont);
  myAjax.adatBetolt(apivegpont, termekekTomb, termekLista);

  

   let keresomezo= $("#kereso");
   keresomezo.on("keyup", () =>{
       let apivegpont="http://localhost:3000/termekek";
       apivegpont += "?q=" + keresomezo.val();
       console.log(apivegpont);
       myAjax.adatBetolt(apivegpont, termekekTomb, termekLista);
   })

   $("#rendezesiszempont").on("change", function() {
    // let rendezes="?_sort=ar&_order=desc";
    // apivegpont += rendezes;
    // myAjax.adatBetolt(apivegpont, termekekTomb, termekLista);
    
    //rendezés
    const rendezesElem = $("#rendezesiszempont");
    //rendezesElem.splice(0, alaptomb.length);
    let ujvegpont="http://localhost:3000/termekek";
    let szempont = $(this).val();
    console.log(szempont);

  switch(szempont) {
  case "nevRendezNo":
    ujvegpont = apivegpont + "?_sort=nev&_order=asc";
    myAjax.adatBetolt(ujvegpont, termekekTomb, termekLista);
    break;
    case "nevRendezCsokken":
      ujvegpont = apivegpont + "?_sort=nev&_order=desc";
      myAjax.adatBetolt(ujvegpont, termekekTomb, termekLista);
      break;
    case "arRendezNo":
      ujvegpont = apivegpont + "?_sort=ar&_order=asc";   
      myAjax.adatBetolt(ujvegpont, termekekTomb, termekLista);
      break;
    case "nevRendezCsokken":
      ujvegpont = apivegpont + "?_sort=ar&_order=desc";
      myAjax.adatBetolt(ujvegpont, termekekTomb, termekLista);
      break;
  default:
    text = "I have never heard of that fruit...";
  }
  })
  function termekLista(termekek) {
    // const szuloElem = $('.termekek')
    const sablonElem = $('.buttonok .termek');
    szuloElem.empty();
    sablonElem.show();
    


    termekek.forEach(function (elem) {
      let node = sablonElem.clone().appendTo(szuloElem);
      const obj = new TermekAruhaz(node, elem);
    })
    sablonElem.hide(); //sablonelem elrejtése

    

    
  }
  $(window).on('termekKosarba', (event) => {
    //itt hívjuk meg a kosarat és belepakoljuk a kosár tömbbe az
    //aktuális termék adatait
    kosar.setKosar(event.detail);
  })
});
