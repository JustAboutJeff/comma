var CommaMachine = {
  init: function(){
    this.attachHandlers();
  },
  attachHandlers: function(){
    $('p.content').on('click','span', this.toggleComma);
  },
  toggleComma: function() {
    $this = $(this);
    var strippedWord = $this.text().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    $this.text(strippedWord).toggleClass('comma');
  }
};

$(document).ready( function() {
  CommaMachine.init();
});
