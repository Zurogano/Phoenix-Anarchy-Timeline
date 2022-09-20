// settings
var DATA_FILES = ["../data/gallery.json"];

var requestsLeft = 0;

function finishedLoading() {
  document.body.removeChild(document.getElementById("loading-message"));
}

function loadedData(data, loadedFiles) {
  var container = $("#gallery");
  var imageCount = 0;

  // loop on each project to be added
  data.forEach(function (e) {
    imageCount += 1;
    loadedFiles -= 1
    image = ""

    e["images"].forEach(function (data) {
      image +=
      '<a target="_blank" href="/images/'+ data[0] +'">' +
      '<img src="/images/'+ data[0] +'" alt="Image '+ imageCount +'" width="'+ data[1] +'" height="'+ data[2] +'">';
    });

    elem =
    '<div class="gallery-image">' +
    image +
    '</a>' +
    '</div>'

    projectElem = $(elem);
    container.append(projectElem);
  });

  finishedLoading();
}

$(function () {
  // make list of all data retrieved
  retrievedData = [];

  requestsLeft = DATA_FILES.length;

  // iterate through all data files to retrieve
  DATA_FILES.forEach(function (file) {
    // asynchronous call to retrieve data
    $.getJSON(file)
      .done(function (d) {
        // add response data to list
        d.forEach(function (entry) {
          retrievedData.push(entry);
        });
      })
      .fail(function (jqxhr, textStatus, error) {
        console.log("Couldn't load " + file);
      })
      .always(function () {
        requestsLeft -= 1;

        // if all requests have finished
        if (requestsLeft == 0) {
          console.log(retrievedData);
          loadedData(retrievedData, retrievedData.length);
        }
      });
  });
});