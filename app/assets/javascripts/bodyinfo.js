window.addEventListener('DOMContentLoaded', function(){
  
  //初期sex-radio
  $('input[id="man"]').prop('checked', true);
  $('input[id="woman"]').prop('checked', false);

  //性別選択イベント
  $('input[name="man"]').change(function() {
    $('input[name="woman"]').prop('checked', false);
    var man = $(this).val();
    console.log( man );
    })
  $('input[name="woman"]').change(function() {
    $('input[name="man"]').prop('checked', false);
    var woman = $(this).val();
    console.log( woman );
    })

  //計算ボタンクリックアクション
  $('input[name="button"]').click(function() { 

    var weight = $('input[name="weight"]').val();
    var tall = $('input[name="tall"]').val();
    var age = $('input[name="age"]').val();
    //性別分岐
    var element = document.getElementById( "sex" ) ;
    var radioNodeList = element.sex ;
    var a = radioNodeList.value ;
    if ( a === "" ) {
    } else {
      var sex = a ;
    }
    //運動量分岐
    var element = document.getElementById( "active" ) ;
    var radioNodeList = element.active ;
    var a = radioNodeList.value ;
    if ( a === "" ) {
    } else {
      var active = a ;
    }
    //目的分岐
    var element = document.getElementById( "purpose" ) ;
    var radioNodeList = element.purpose ;
    var a = radioNodeList.value ;
    if ( a === "" ) {
    } else {
      var purpose = a ;
    }
    //一日の摂取カロリー
    total_kcl = 10 *parseInt(weight) +6.25 * parseInt(tall) -5 *parseInt(age)+parseInt(sex);
      total_kcl_act = parseInt(total_kcl) *parseInt(active)*1/100 ;
      total_kcl_pps = parseInt(total_kcl_act) *parseInt(purpose)*1/100 ;
      console.log( total_kcl_pps );
      total_kcl = parseInt(total_kcl_pps) *10;
      total_kcl_fin = Math.round(total_kcl) /10;
      target = document.getElementById("kcl");
      target.innerHTML = parseInt(total_kcl_fin) ;
      console.log( target );
    //摂取炭水化物
    total_carbo = parseInt(total_kcl_fin) *0.75 / 4 *10
      total_carbo = Math.round(total_carbo) / 10;
      target = document.getElementById("carbo");
      target.innerHTML = parseInt(total_carbo);
    //摂取タンパク質
    total_protein = 2 *parseInt(weight)
      target = document.getElementById("protein");
      target.innerHTML = total_protein;
    //摂取脂質
    total_lipid = parseInt(total_kcl_fin) *0.25 / 9 *10
      total_lipid = Math.round(total_lipid) / 10;
      target = document.getElementById("lipid");
      target.innerHTML = total_lipid;
    })
    //リセットボタン
    $('input[name="reset"]').click(function() { 
      //性別radio
      $('input[id="man"]').prop('checked', true);
      $('input[id="woman"]').prop('checked', false);
      //性別radio
      $('input[id="simple"]').prop('checked', true);
      $('input[id="less"]').prop('checked', false);
      $('input[id="athlete"]').prop('checked', false);
      //性別radio
      $('input[id="retain"]').prop('checked', true);
      $('input[id="loss"]').prop('checked', false);
      $('input[id="increase"]').prop('checked', false);
      //input-text
      $('input[name="age"]').val('');
      $('input[name="tall"]').val('');
      $('input[name="weight"]').val('');
      //output-txit
      kcl = document.getElementById("kcl");
      kcl.innerHTML = '';
      carbo = document.getElementById("carbo");
      carbo.innerHTML = '';
      protein = document.getElementById("protein");
      protein.innerHTML = '';
      lipid = document.getElementById("lipid");
      lipid.innerHTML = '';
    })
});
