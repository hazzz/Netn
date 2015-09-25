/**
 * Created by haoaho on 2015/6/28.
 */

$(function(){
//百度搜索tab切换
    $('.serach_form a').click(function(){
        $(this).parent().children().removeClass('nub_sel');
        $(this).addClass('nub_sel');
    })

//换肤
    $(".skin_change").click(function(){
        $(".skin").addClass('animated fadeInDown').removeClass("flipOutX");
        $(".skin").css("display","block");
    })

    $(".close_skin").click(function(){
        $(".skin").css("display","none");
    })

    $(".skin a").click(function(){
        var a_img=$(this).attr("href");
        $('#ebody').css('background-image','url('+a_img+')');
        $('.i_s').addClass("skin_select");
        $('').css('border','2px solid #80a0f5').css('width','96px').css('height','76px');
    })


/*云盘操作*/
    $(".storage").click(function(){
        $(".skyatlas_href").css('display','block');
    })

    $(".skyatlas_href").mouseleave(function(){
        $(".skyatlas_href").css('display','none');
    })


//添加URL
    $(".manage").click(function(){
        $(".add_url").css('display','block');
        $('.right_cont').css('height','360px');
        $('.left_cont').css('height','360px');
        $('.wrap').css('height',"410px");
    })

    $(".close_add").click(function(){
        $(".add_url").css('display','none');
        $('.right_cont').css('height','320px');
        $('.left_cont').css('height','320px');
        $('.wrap').css('height',"370px");
    })


//置顶
    $(".feedback").click(function(){
        $('html body').stop(true).animate({scrollTop:'0px'}, 500);
    })

//cont中的内容切换
    $(".left_cont ul li a").click(function(){
        $(this).parent().parent().find('a').removeClass('select');//获得所有的a标签，并且将所有的a标签的select属性移除掉；
        $(this).addClass('select');//给当前的点击的a标签添加一个select的class；
        $('.right_cont').find('.page_cont').hide();//给当前的点击的a标签添加一个select的class；
        var indx=$(this).parent().parent().children().index($(this).parent());
        $('.right_cont').find('.page_cont').eq(indx).show();
    })

})