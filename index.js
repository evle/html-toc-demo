


// console.log($('header').height());
// console.log( $(window).scrollTop() );
// console.log($('header').text());
// console.log( document.documentElement.clientHeight);

// $(document).ready(function(){

//     $(document).scroll(function(){
//         var top = $("article").offset().top;
//             // 
//             console.log(top - $(document).scrollTop())
//     });
// });

$(function () {

    var Toc = '<ul>';
    let i = 1;
    $('article h2,h3,h4,h5').each(function(){
        let el = $(this);
        let title = el.text();
        let link = `#${el.attr('id')}`;
        let indent = '';
        
        let newLine = `<li><a href="${link}" class="indent-${el[0].tagName}">${title}</a></li>`;
        Toc += newLine;
    })
    
    Toc += '</ul>';
    
    $('.toc').prepend(Toc);


    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    })


    let arrMd = [];

    
    $('article').find('h2,h3,h4,h5').each(function(){
        arrMd.push($(this));
    })
    console.log(arrMd);

   
    function highlight(id){

        $('.toc a').removeClass('active');
        $(`[href='#${id}']`).addClass('active');   
     }

    function update(){
        var scrollH = $(window).scrollTop();
        // console.log(arrMd[2]);
        // console.log(scrollH);
        

        arrMd.forEach(id => {
             let mdH = $(id).offset().top;
            //console.log(id[0].id);
            
            // console.log(mdH);
            if(mdH < scrollH + 20) highlight(id[0].id);
        });
        // arrMd.each(function(){
            // let mdH = arrMd[i].offset().top;
            // if(scrollH > mdH) highlight(arrMd[i]);
        // })


    }

    $(window).bind('scroll', update);

})




// 网页被卷起来的高度/宽度（即浏览器滚动条滚动后隐藏的页面内容高度）

// (javascript)        document.documentElement.scrollTop //firefox

// (javascript)        document.documentElement.scrollLeft //firefox

// (javascript)        document.body.scrollTop //IE

// (javascript)        document.body.scrollLeft //IE

// (jqurey)             $(window).scrollTop() 

// (jqurey)             $(window).scrollLeft()

// 网页工作区域的高度和宽度

// (javascript)       document.documentElement.clientHeight// IE firefox       

// (jqurey)             $(window).height()

// 元素距离文档顶端和左边的偏移值

// (javascript)        DOM元素对象.offsetTop //IE firefox

// (javascript)        DOM元素对象.offsetLeft //IE firefox

// (jqurey)             jq对象.offset().top

// (jqurey)             jq对象.offset().left



// 获取页面元素距离浏览器工作区顶端的距离

// 页面元素距离浏览器工作区顶端的距离 = 元素距离文档顶端偏移值 - 网页被卷起来的高度

// 即：

// 页面元素距离浏览器工作区顶端的距离 = DOM元素对象.offsetTop - document.documentElement.scrollTop