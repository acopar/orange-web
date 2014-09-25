/* ======= Animations ======= */
jQuery(document).ready(function($) {

    // Allow tooltips only when using non-mobile devices
    if (jQuery.browser.mobile === false) {
        $('.img-hover').tooltip();
        $('.alert').alert();
    }

    /* Facebook */
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    /* Google +1 */
    window.___gcfg = {
      lang: 'en-US',
      parsetags: 'onload'
    };
    (function() {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js?onload=onLoadCallback';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
});
