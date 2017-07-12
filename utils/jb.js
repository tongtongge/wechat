

function improve() {
  //alert($j('#muqian').text()+",,"+$j('#keti').text());

  if ($j('#muqian').text() != $j('#keti').text()) {
    var dd = $j('#select1').children('option:selected').text();
    //console.log(dzdata[100000]);不会报错，很好
    if (dzdata[dd] == '店主') {
      //bz0
      if ($j('#keti').attr('iswanshan') == 1) {
        tijiaoshenqing();
      } else {
        //询问框
        layer.open({
          title: '提示',
          content: '请先完善门店资料',
          btn: ['嗯', '不要'],
          style: 'width:75%',
          yes: function (index) {
            location.href = "/index.php/myinfo/index.html";
          }
        });
      }
      //bz1
    } else {
      layer.open({
        content: '只有店主才能提额',
        time: 2
      });
    }
  } else {
    layer.open({
      content: '额度为当前最大额度，良好的还款记录跟完善资料有助于提额哦！',
      time: 5
    });
  }
}