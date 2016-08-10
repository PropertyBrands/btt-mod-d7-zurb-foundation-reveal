(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.zurbFoundationReveal = {
    attach: function(context, settings) {
      if(typeof(Drupal.settings.zurbFoundationReveals !== 'undefined')) {
        $('body', context).once('zurb-foundation-reveals', function() {
          for(var rv in Drupal.settings.zurbFoundationReveals) {
            var rvobj = $(Drupal.settings.zurbFoundationReveals[rv].reveal);
            Drupal.attachBehaviors(rvobj, settings);
            $('body', context).append(rvobj);
          }
          $(document).foundation();
        });
      }
    }
  };
})(jQuery, Drupal, this, this.document);