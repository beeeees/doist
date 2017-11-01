(function($, window){
  var MainScripts = {
    elements: {},
    selectors: {
      body: 'body',
      hamburger: '#hamburger',
      headerImage: '#header-img',
      file: '#file',
      topBar: '#top-bar',
    },

    _bindEvents: function() {
      var self = this;

      $(window).on('scroll', function(){ //on scroll
        self.fixTopBar();
       });
    },

    _getElements: function(){
      for( var key in this.selectors ) {
          this.elements[key] = $( this.selectors[key] );
      }
      this.elements.body = $('body');
      this.elements.window = $(window);
    },

    hamburger: function(){
      // hamburger navigation (keeping it simple for this project)
      // to do, add a check for the active class, add aria-expanded
      this.elements.hamburger.on('click', function() {
        $(this).toggleClass('active');
        $(this).parent().find('.nav').toggleClass('active');
      });
    },

    headerImg: function(){
      // trigger animation on header image
      this.elements.headerImage.addClass('active');
    },

    fileInput: function(){
      // custom file input selection, show file name
      this.elements.file.on('change',function() {
        var value = $(this).val().replace(/^.*\\/, '');
        $(this).parent().find('#file-path').addClass('selected').text(value);
      });
    },

    fixTopBar: function(){
      // position fixed for navbar on scroll
      var self = this;
      var navHeight = this.elements.topBar.outerHeight();
      var windowOffset = this.elements.window.scrollTop();
      if (windowOffset > navHeight) {
        $('#fixed').addClass('sticky');
      } else if (windowOffset === 0) {
        $('#fixed').removeClass('sticky');
      }

    },

    initialize: function(){
      this._getElements();
      this._bindEvents();
      this.hamburger();
      this.headerImg();
      this.fileInput();
      this.fixTopBar();
    }
  }; // MainScripts

  // Send to global namespace
  window.MainScripts = MainScripts;

  // DOM Ready
  $(function(){
    MainScripts.initialize();
  });


})(jQuery, window);
