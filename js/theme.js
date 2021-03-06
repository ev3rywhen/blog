(function() {
  // back to top
  var b2t = document.getElementById('back2top'),
      timer = null,
      isTop = true;
  window.onscroll = function (){
    if (!isTop) {
      clearInterval(timer);
    }
    isTop = false;
  }
  b2t.onclick = function () {
    timer = setInterval(function() {
      var osTop = document.documentElement.scrollTop ||
                  document.body.scrollTop;
      var ispeed = Math.floor(-osTop / 5);
      document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
      isTop = true;
      if (osTop == 0) {
        clearInterval(timer);
      }
    }, 30)
  }
})();

$(function() {
    var $sidebar   = $("#sidebar"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;
 
    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            console.log("Run");
            $sidebar.css({
              "position": "fixed",
              "top": "15px"
            });
        } else {
            $sidebar.css({
              "position": "absolute",
              "top": offset.top
            });
        }
    });
});