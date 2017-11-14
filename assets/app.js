(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.zurbFoundationReveal = {
    attach: function(context, settings) {
      if(typeof(Drupal.settings.zurbFoundationReveals !== 'undefined')) {
        $('body', context).once('zurb-foundation-reveals', function() {
          for(var rv in Drupal.settings.zurbFoundationReveals) {
            var rvobj = $(Drupal.settings.zurbFoundationReveals[rv].reveal);
            $('body', context).append(rvobj);
            Drupal.attachBehaviors($('body', context), settings);
          }
          $(document).foundation();
        });
      }
    }
  };
})(jQuery, Drupal, this, this.document);