/**
 * Created by Administrator on 2018/3/15.
 */
window.onload=function(){
    //阻止touchmove的默认事件
    document.body.addEventListener("touchmove",function(event){
        event=event?event:window.event;
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },false);
    var mypages=function(obj){
        var box=document.getElementById(obj.wrapper);
        var box2=document.getElementById(obj.pages);
        var len=obj.len;
        var n=obj.n;
        var timer;//设置定时器
        //开始位置,滑动的距离，屏幕高度
        var startY,moveY,cliH;

        //获取屏幕高度
        var getH=function(){
            cliH=document.body.clientHeight;
        }
        getH();
        window.addEventListener("resize",getH,false);

        //touchStart
        var touchstart=function(event){
            if(!event.touches.length){
                return;
            }
            startY=event.touches[0].pageY;
            move=0;    
        };
        //touchMove
        var touchmove=function(){
            if(!event.touches.length){
                return;
            }
            moveY=event.touches[0].pageY-startY;
            box2.style.transform = 'translateY(' + (-n * cliH + moveY) + 'px)'; //根据手指的位置移动页面
            //将下面的代码改为switch语句
            if(moveY>50||moveY<-50){
                switch(n){
                    case 1:
                    {
                        timer=setTimeout(function(){
                        var getPage2=document.getElementById("page2");                   
                        //获取第一个img
                        var img1=getPage2.getElementsByTagName("img")[0];
                        img1.className="p2_anima1";
                        },300);
                    }
                    break;
                    case 2:
                    {
                        timer=setTimeout(function(){
                        var getPage3=document.getElementById("page3");                   
                        //获取第一个img
                        var img1=getPage3.getElementsByTagName("img")[0];
                        img1.className="p3_anima1";
                        },300);
                    }
                    break;
                    case 3:
                    {
                        timer=setTimeout(function(){
                        var getPage4=document.getElementById("page4");                   
                        //获取第一个img
                        var img1=getPage4.getElementsByTagName("img")[0];
                        img1.className="p4_anima1";
                        },300);
                    }
                    break;
                    case 4:
                    {
                        timer=setTimeout(function(){
                        var getPage5=document.getElementById("page5");                   
                        //获取第一个img
                        var img1=getPage5.getElementsByTagName("img")[0];
                        img1.className="p5_anima1";
                        },300);
                    }
                    break;
                    case 5:
                    {
                        timer=setTimeout(function(){
                        var getPage6=document.getElementById("page6");                   
                        //获取第一个img
                        var img1=getPage6.getElementsByTagName("img")[0];
                        img1.className="p6_anima1";
                        },300);
                    }
                    break;
                }
            }

}
        //     //去除p2_anima1_on属性
        //     if(n==1&&(moveY>50)||n==1&&(moveY<-50)){
        //         timer=setTimeout(function(){
        //             var getPage2=document.getElementById("page2");                   
        //         //获取第一个img
        //         var img1=getPage2.getElementsByTagName("img")[0];
        //         img1.className="p2_anima1";
            
        //     },300);
        //     }
        // };
        //touchEnd
        var touchend=function(event){
            //位移小于正负50则不翻页
            if(moveY<-50){n++;}
            if(moveY>50){n--;}
            //最后页和最前页控制
            if(n<0){n=0;}
            if(n>len-1) n=len-1;
            // console.log(n); 测试，待删除

            //将下面内容的实现改为switch条件语句
            switch(n){
                case 1:
                {
                    var getPage2=document.getElementById("page2");
                    var img1=getPage2.getElementsByTagName("img")[0];
                    img1.className+=" p2_anima1_on";
                }
                break;
                case 2:
                {
                    var getPage3=document.getElementById("page3");
                    var img1=getPage3.getElementsByTagName("img")[0];
                    img1.className+=" p3_anima1_on";
                }
                break;
                case 3:
                {
                    var getPage4=document.getElementById("page4");
                    var img1=getPage4.getElementsByTagName("img")[0];
                    img1.className+=" p4_anima1_on";
                }
                break;
                case 4:
                {
                    var getPage5=document.getElementById("page5");
                    var img1=getPage5.getElementsByTagName("img")[0];
                    img1.className+=" p5_anima1_on";
                }
                break;
                case 5:
                {
                    var getPage6=document.getElementById("page6");
                    var img1=getPage6.getElementsByTagName("img")[0];
                    img1.className+=" p6_anima1_on";
                }
                break;
            }


            // if(n==1){
            //     var getPage2=document.getElementById("page2");
            //     //获取第一个img
            //     var img1=getPage2.getElementsByTagName("img")[0];
            //     img1.className+=" p2_anima1_on";
            //     //这里的有问题，待改
            //     // //获取第二个img
            //     // var img2=getPage2=document.getElementsByTagName("img")[1];
            //     // img2.className="p2_anima2_on";
            //     // console.log(img2);
            //     clearTimeout(timer);
            // }
            // if(n==2){
            //     var getPage3=document.getElementById("page3");
            //     //获取第一个img
            //     var img1=getPage3.getElementsByTagName("img")[0];
            //     img1.className+=" p3_anima1_on";
            // }

            //测试代码,测试成功，待删除
            // console.log("当前的页面为："+n);
            // if(n==6){
            //     var getPage7=document.getElementById("page7");
            //     //获取含有circle的标签
            //     var circle=getPage7.getElementsByTagName("div")[1];
            //     console.log(circle);
            //     circle.className+=" circleOn";
            //     console.log(circle);
            // }

            //重定位
            box2.style.transform = 'translateY(' + (-n * 10) + '%)'; //根据百分比位置移动页面
        };
        //touch事件绑定
        box.addEventListener("touchstart", function(event) {
            touchstart(event)
        }, false);
        box.addEventListener("touchmove", function(event) {
            touchmove(event)
        }, false);
        box.addEventListener("touchend", function(event) {
            touchend(event)
        }, false);
    };
    mypages({
        wrapper: 'wrapper',
        pages: 'pages',
        len:10, //页数
        n: 0 //页面打开开始的页数
    });
}
