$(document).ready(function(){

   // malibu ga rang berish

    $('.color').on('click', function(){
       let img1 = $(this).attr('data-color');
        $('#img').attr('src', img1);
       let car_malibu = $(this).attr('data-narx');
       $('#price_malibu').text(car_malibu);
      
    });

    // ./ malibu ga rang berish

    //gentraga rang berish

     $('.color_1').on('click', function(){
       let img_1 = $(this).attr('data-color');
       $('#img_lasetti').attr('src', img_1);
        let car_gentra = $(this).attr('data-narx');
       $('#price_gentra').text(car_gentra);
    });

     //  ./gentraga rang berish

    // trakerga rang berish

      $('.color_2').on('click', function(){
       let img_2 = $(this).attr('data-color');
       $('#img_traker').attr('src', img_2);
        let car_traker = $(this).attr('data-narx');
       $('#price_traker').text(car_traker);
    });

       //  ./trakerga rang berish

       // malibuni chiqarish

    $('.malibu_btn').on('click', function(){
        $('.gentra').hide();
        $('.traker').hide();
        $('.malibu').show();
    });

     // ./malibuni chiqarish

     //gentrani chiqarish

     $('.gentra_btn').on('click', function(){
        $('.traker').hide();
        $('.malibu').hide();
        $('.gentra').show();
    });

     //  ./gentrani chiqarish

     // trakerni chiqarish

    $('.traker_btn').on('click', function(){
        $('.malibu').hide();
        $('.gentra').hide();
        $('.traker').show();
    });
    //  ./ trakerni chiqarish

  // positsiya tanlash malibu

$('input[name=positsiya_malibu]').on('change', function(){
    let positsiya_narx_maibu;
    positsiya_narx_maibu = $(this).val();
});

  // ./positsiya tanlash malibu

  // positsiya tanlash gentra

$('input[name=positsiya_gentra]').on('change', function(){
    let positsiya_narx_gentra;
    positsiya_narx_gentra = $(this).val();
});


  // ./positsiya tanlash genta


  // positsiya tanlash traker

$('input[name=positsiya_traker]').on('change', function(){
    let positsiya_narx_traker;
    positsiya_narx_traker = $(this).val();
});


  // ./positsiya tanlash traker

  // Jami narxi

// let all_prise=0;

// function(add){
//     all_prise=parseInt($('input[name=positsiya_malibu]:cheked').val());
//     all_prise+=parseInt($('input[ name=malibu_rang_prise]:cheked').val());
//     $('#price_malibu').text(all_prise);
// }
//   $('input').on('change', function(){
//    add();
//   })

  // ./ Jami narxi
});




