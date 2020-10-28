$(function(){
//main_menu
  $('#menu').hide();
  $('#hdr').on('click', function(){
    $('#menu').fadeToggle(399);
  })
//hide_pdf
//  $('#pdf_data').hide();
  // $('#pdf').on('click', function(){
  //   $('#pdf_data').fadeToggle(399);
  // })
//i_menu
  $('#i_menu_btn').on('click', function(){
    $('.i_menu').addClass('open')
  })
  $('.i_menu').on('click', function(){
    $('.i_menu').removeClass('open')
  })

})
