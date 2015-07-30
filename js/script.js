/**
 * Created by MapleMap on 27.05.14.
 * Updated by MapleMap on 27.07.15.
 */
var Helper = {

    initOwlCarousel: function (element) {
        $(element).owlCarousel({
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
        });
    },

    initCreatedData: function () {
        var createdYear = 2014,
            currentYear = new Date().getFullYear(),
            $copyRightSpan = $('.copyright span');

        (createdYear == currentYear)?
            $copyRightSpan.html(createdYear) : $copyRightSpan.html(+createdYear + ' - ' + currentYear);
    },

    initAuthorSign: function () {
        $('.copyright span')
            .after('<a href="//maplemap.net/" target="_blank" title="Design & Develop - MapleMap" class="author-signature">O</a>');
    },

    initMainMenu: function () {
        var $headerNav =  $('#header').find('.nav'),
            $iconMenu = $('.icon-menu');

        Helper.setActiveClass('.icon-menu');

        $iconMenu
            .on('click', function(){
                $(this).toggleClass('rotate-180');
                $headerNav.toggleClass('active');
                Cookies.set('main_menu', $headerNav.hasClass('active'));
            });


        if(Cookies.get('main_menu') == 'true') {
            $iconMenu.trigger('click');
        }
    },

    initUbaPlayer: function () {
        $("#ubaplayer").ubaPlayer({
            codecs: [{name:"MP3", codec: 'audio/mpeg;'}]
        });
    },

    initMobileBtnMenu: function () {
        $(".more").click(function () {
            $('#header').find('.nav').slideToggle("fast");
        });
    },

    setActiveClass: function (element) {
        $(element).addClass('active');
    }

};