import {Page,GoTo,GoBack,AnchorWithoutFeedback,AnchorHighlight,AnchorOpacity} from './DaojiaReactNative/common/PageManager';
import {api_tester_login} from './DaojiaReactNative/api/api_user';

// var list = ['Home','Category','Cartlist','Orderlist','Mine'];
// global.c__ = 0;
// setTimeout(function(){
//     return;
//     setInterval(function(){
//         if(global.c__>200){
//             return;
//         }
//         GoTo({
//             pagename:list[(global.c__++)%2],
//             args:{}
//         });
//     },300);
// },4000)  ;

// 模拟登陆，将jdPin设置为自己的账号jdPin即可

setTimeout(function(){
    //return;
    api_tester_login({jdPin:'cheung1984'}).done(function(result,resp){
        // alert(JSON.stringify(result));
    }).fail(function(error){
        //alert(JSON.stringify(error));
    });
},0);

module.exports = {
    pagename:'Vip',

};
