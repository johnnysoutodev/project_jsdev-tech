// analytics

// Google Analytics

function refuseGA(){
    window['ga-disable-G-05QDHZNLE0'] = true;
}

function acceptGA() {
    window['ga-disable-G-05QDHZNLE0'] = false;
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-05QDHZNLE0', {
        'cookie_prefix': 'JSDTech',
        'cookie_domain': 'www.jsdeveloper.com.br',
        'cookie_expires': 0 * 24 * 60 * 60
    });

}