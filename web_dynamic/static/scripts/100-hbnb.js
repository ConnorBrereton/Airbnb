$(document).ready(function () {
  // checkboxes amenity
  let selected = [];
  let amId = [];
  $('.amenities input[type=checkbox]').change(function () {
    $(this).each(function () {
      let name = $(this).attr('data-name');
      if ($(this).is(':checked')) {
        selected.push(name);
        amId.push($(this).attr('data-id'));
      } else {
        selected = selected.filter(val => val !== name);
        amId = amId.filter(val => val !== $(this).attr('data-id'));
      }
      if (selected.length === 0) {
        $('.amenities h4').text('\u00A0');
      } else {
        $('.amenities h4').text(selected.join(', '));
      }
    });
  });
  // checkboxes state
  let stSelected = [];
  let stateId = [];
  $('.states input[type=checkbox]').change(function () {
    $(this).each(function () {
      let name = $(this).attr('data-name');
      if ($(this).is(':checked')) {
        stSelected.push(name);
        stateId.push($(this).attr('data-id'));
      } else {
        stSelected = stSelected.filter(val => val !== name);
        stateId = stateId.filter(val => val !== $(this).attr('data-id'));
      }
      if (stSelected.length === 0) {
        $('.locations h4').text('\u00A0');
      } else {
        $('.locations h4').text(stSelected.join(', '));
      }
    });
  });
 // checkboxes city
 // let ctSelected = [];
  let cityId = [];
  $('.cities input[type=checkbox]').change(function () {
    $(this).each(function () {
      if ($(this).is(':checked')) {
        cityId.push($(this).attr('data-id'));
      } else {
        cityId = cityId.filter(val => val !== $(this).attr('data-id'));
      }
    });
  });
// red and grey disc
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    dataType: 'json',
    success: function (res) {
      if (res.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    },
    error: function (res) {
      $('DIV#api_status').removeClass('available');
    }
  });
// build places
  makePlaces({});
// filter places by selected amenities
  $('button').click(function () {
    makePlaces({'amenities': amId, 'states': stateId, 'cities': cityId});
      // adding state and city filters
  });
});

function makePlaces (dict) {
  console.log('makePlaces arguments');
  console.log(dict);
  $('.places').empty();
  $('.places').append('<h1>Places</h1>');
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(dict),
    error: function (res) {
      $('.places').append('<p>Server issue</p>');
      console.log(res);
    },
    success: function (res) {
      console.log('results');
      console.log(res);
      let count = 0;
      $.each(res, function (k, v) {
        let article = $('<article>');
        count += 1;
        article.append($('<div>', {'class': 'price_by_night', 'text': '$' + v.price_by_night}));
        article.append($('<h2>').text(v.name));
        let info = $('<div>', {'class': 'informations'});
        info.append($('<div>', {'class': 'max_guest', 'text': v.max_guest + 'Guests'}));
        info.append($('<div>', {'class': 'number_rooms', 'text': v.number_rooms + 'Rooms'}));
        info.append($('<div>', {'class': 'number_bathrooms', 'text': v.number_bathrooms + 'Bathrooms'}));
        article.append(info);
        writeOwner(v.user_id, count);
        article.append($('<div>', {'class': 'user', 'id': count}));
        article.append($('<div>', {'class': 'description', 'html': v.description}));
        $('.places').append(article);
      });
    }
  });
}

function writeOwner (uid, count) {
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/users/' + uid,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      let v = '#' + count + '.user';
      $(v).html('<b>Owner</b>: ' + data.first_name + ' ' + data.last_name);
    }
  });
}
