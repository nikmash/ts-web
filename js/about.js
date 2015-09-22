$(document).ready(function () {
  $('.carousel-prev').click(function () {
    console.log('prev clicked');
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

});
