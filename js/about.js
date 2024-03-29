$(document).ready(function () {
  $('.carousel-prev').click(function () {

    var currPicture = parseInt($(this).parent().data("picture"));
    var newPicture;
    if (currPicture === 1) {
      newPicture = 5;
    } else {
      newPicture = currPicture - 1;
    }

    //Set Data of New Picture
    $(this).parent().data("picture", newPicture);

    //Remove CSS of old picture
    $(this).parent().removeClass("picture-" + currPicture);
    $(".thumbnail" + currPicture).removeClass('thumbnail-active');

    //Set CSS of new picture
    $(this).parent().addClass("picture-" + newPicture);
    $(".thumbnail" + newPicture).addClass('thumbnail-active');

  });

  $('.carousel-next').click(function () {
    var currPicture = parseInt($(this).parent().data("picture"));
    var newPicture;
    if (currPicture === 5) {
      newPicture = 1;
    } else {
      newPicture = currPicture + 1;
    }

    //Set Data of New Picture
    $(this).parent().data("picture", newPicture);

    //Remove CSS of old picture
    $(this).parent().removeClass("picture-" + currPicture);
    $(".thumbnail" + currPicture).removeClass('thumbnail-active');

    //Set CSS of new picture
    $(this).parent().addClass("picture-" + newPicture);
    $(".thumbnail" + newPicture).addClass('thumbnail-active');

  });

  $(".thumbnail").click(function () {
    if ($(this).hasClass('thumbnail-active')) {
      console.log('already active');
      return;
    }
    var $selectedPicture = $('.selected-picture')
    var currPicture = parseInt($selectedPicture.data("picture"));
    var newPicture = $(this).data("picture");

    //Set Data of New Picture
    $selectedPicture.data("picture", newPicture);

    //Remove CSS of old picture
    $selectedPicture.removeClass('picture-' + currPicture);
    $('.thumbnail-active').removeClass('thumbnail-active');

    //Set CSS of new picture
    $selectedPicture.addClass('picture-' + newPicture);
    $(this).addClass('thumbnail-active');
  });


});
