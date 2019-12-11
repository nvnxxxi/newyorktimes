$("button").click(function() {
  // setup API query based off of params passed by user
  const query = $(this).val();
  const fromDate = $("#from-date").value;
  const toDate = $("#to-date").value;
  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&facet=true&begin_date=${fromDate}&end_date=${toDate}&api-key=CBxn9s26XG0ivGlGxRAWeoP4FZfWAzAD`;

  // ajax call to hit API and pull data to display
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then((response) => {
    const result = response;
    for (element in results) {
      // bind response to object body
      const articleResults = result.docs[element];

      // initialize layout for dynamically generated elements
      const resultsDiv = $("<div>");
      const h1 = $("<h1>");
      const p = $("<p>");

      // write content to elements
      h1.innerHTML = `<a href="${articleResults.multimedia.url}">${articleResults.headline.main}</a>`;
      p.text = `${articleResults.pub_date} \n ${articleResults.snippet}`;

      // write content to page
      resultsDiv.append(h1);
      resultsDiv.append(p);
      $("#results-container").append(resultsDiv);
    }
  });
});
