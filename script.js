var CommaMachine = {
  init: function(){
    this.attachHandlers();
  },
  attachHandlers: function(){
    $('p.content').on('click','span', this.toggleComma);
  },
  toggleComma: function() {
    $(this).toggleClass('comma');
  }
};

$(document).ready( function() {
  CommaMachine.init();
});
