function execute(url) {
    var doc = Http.get(url).html();
    doc.select(".ad_content").remove();
    var htm = doc.select("#contentbox").html();
    htm = htm.replace(/[UＵ][UＵ]看书\s*[wｗ][wｗ][wｗ][\.][uｕ][uｕ][kｋ][aａ][nｎ][sｓ][uｕ][hｈ][uｕ][\.][cｃ][oｏ][mｍ]/g, "");
    htm = htm.replace(/\&nbsp;/g, "");
    return Response.success(htm);
}