//====================================================================================================
// [插件名称] jQuery formValidator
//----------------------------------------------------------------------------------------------------
// [描    述] jQuery formValidator表单验证插件，它是基于jQuery类库，实现了js脚本于页面的分离。对一个表
//            单对象，你只需要写一行代码就可以轻松实现20种以上的脚本控制。现支持一个表单元素累加很多种
//            校验方式,采用配置信息的思想，而不是把信息写在表单元素上，能比较完美的实现ajax请求。
//----------------------------------------------------------------------------------------------------
// [作者网名] 猫冬	
// [日    期] 2008-01-11	
// [邮    箱] wzmaodong@126.com
// [作者博客] http://wzmaodong.cnblogs.com
//====================================================================================================
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 P;(b($){$.a={2H:b(9,3){5 k=$("#"+9).m(0);5 v=k.1U;5 q=k.s;1g(3.u){f"1V":d c;f"1p":4(v=="1w"||v=="1v"||v=="2e"){d c}g{d e}f"1o":4(v=="1w"||v=="1v"){4(q=="1f"||q=="1e"){d e}g{d c}}d e;f"Q":4(q=="1c"||q=="1b"||q=="1a"||q=="Z-1z"){d c}g{d e}f"1m":4(v=="1w"||v=="1v"){4(q=="1f"||q=="1e"){d e}g{d c}}d e;f"1l":d c}},3g:b(l){5 7={o:"1",M:e,14:b(){d c},U:b(){},2z:e};l=l||{};$.K(7,l);4(P==F){P=1A 2G()}P.2F(7)},J:b(9,3){4(!$.a.2H(9,3))d-1;5 j=$("#"+9).m(0);4(3.u=="1V"||!j.7||j.7==11){j.7=1A 2G()}5 w=j.7.2F(3);j.7[w-1].25=w-1;d w-1},A:b(o){4(P!=F){15(i=0;i<P.z;i++){4(o==P[i].o){d P[i]}}}d F},2B:b(6){1g(6.3.u){f"1p":$.a.2u(6);r;f"1o":$.a.2r(6);r;f"Q":$.a.1s(6);r;f"1m":$.a.2x(6);r;f"1l":$.a.2v(6);r}},x:b(p,V,t){5 H=$("#"+p);H.2E();H.2D(V);H.1H(t)},3f:b(p,t){5 H=$("#"+p);H.2E();H.2D("U");H.1H(t)},S:b(6){5 9=6.9;5 8=6.8;5 3=6.3;5 t="";5 V="";5 7=$("#"+9).m(0).7;4(!8){4(3.u=="Q"){4(3.1J==""){V="2k";t=3.1B}g{V="U";t=3.y}}g{t=(6.1h==""?3.y:6.1h);V="U"}4($.a.A(7[0].o).M){5 k=$("#"+9).m(0);4(k.1t!=$(k).n())2h(t)}g{$.a.x(7[0].p,V,t)}}g{4(!$.a.A(3.o).M){5 t="";4($.a.Y(9)){t=3.2o}g{t=3.1k}$.a.x(3.p,"14",t)}}},20:b(9){5 j=$("#"+9);10=j.m(0).s;5 w=0;1g(10){f"1c":f"2t":f"1R":f"1b":f"1a":5 n=j.n();15(5 i=0;i<n.z;i++){4(n.2C(i)>=3e&&n.2C(i)<=3d){w+=2}g{w++}}r;f"1f":f"1e":w=$("1u[@s=\'"+10+"\'][@X=\'"+j.1d("X")+"\'][@2m]").z;r;f"Z-1z":w=j.m(0).1O?j.m(0).1O.3c:-1;r;f"Z-2s":r}d w},Y:b(9){4($("#"+9).m(0).7[0].1y&&$.a.20(9)==0){d c}g{d e}},3b:b(9){d W(9,1).8},W:b(9,25){5 6=1A 3a();6.9=9;6.T=-1;6.1h="";5 k=$("#"+9).m(0);5 7=k.7;5 1Q=7.z;4($.a.Y(9)){6.3=7[0];6.8=c}g{15(5 i=25;i<1Q;i++){6.3=7[i];4(7[i].u!="Q"){$.a.2B(6)}g{6.T=i}4(!7[i].8){6.8=e;6.3=7[i];r}g{6.8=c;6.3=7[0];4(7[i].u=="Q")r}}}4(6.8){5 B=6.3.2n($("#"+9).m(0),$("#"+9).n());4(B!=11){4(1Z B=="1n"){6.1h=B;6.8=e}g{7[7.z-1].8=B;6.8=B}}}d 6},39:b(o){4(o==F||o==11)o="1";5 8=c;5 O="";5 6,3;5 1j="^";$("38").C(b(i,24){15(i=0;i<24.2A.z;i++){k=24.2A[i];4(k.7!=11&&k.7!=F){4(k.7[0].o==o){4($.a.A(o).M){4(8){6=$.a.W(k.9,1);4(!6.8){$.a.S(6);8=e;4(O==""){O=6.9;3=6.3}}}}g{6=$.a.W(k.9,1);4(!6.8){8=e;4(O==""){O=6.9;3=6.3}4(1j.23("^"+k.7[0].p+"^")==-1){1j=1j+k.7[0].p+"^";$.a.S(6)}}g{4(1j.23("^"+k.7[0].p+"^")==-1){$.a.S(6)}}}}}}});4(8){8=$.a.A(o).14();4($.a.A(o).2z){$("1u[@s=\'37\']").1d("21",c)}}g{$.a.A(o).U(3.y,$("#"+O));4(O!=""){$("#"+O).1M()}}d 8},1s:b(6){5 9=6.9;5 j=$("#"+9);5 3=j.m(0).7[6.T];5 1i=3.1I;4(j.1q()==0&&j.m(0).7[0].1y){6.3=$("#"+9).m(0).7[0];6.8=c;$.a.S(6);3.8=c;d}4(3.27){5 22=9+"="+36(j.n());1i=1i+((1i).23("?")>0?("&"+22):("?"+22))}$.T({35:"34",s:3.s,1I:1i,16:3.16,1G:3.1G,33:3.17,1E:b(16){13=j.m(0).7[0];4(3.1E(16)){$.a.x(13.p,"14",13.1k);3.8=c}g{$.a.x(13.p,"U",3.y);3.8=e}},1D:b(){4(3.R&&3.R.z>0)3.R.1d({"21":e});3.1D},32:b(){4(3.R&&3.R.z>0)3.R.1d({"21":c});5 2y=3.1F();4(2y)3.8=e;3.1J="-1";d 3.1F},1C:b(){13=j.m(0).7[0];$.a.x(13.p,"U",3.y);3.8=e;3.1C()},31:3.26})},2x:b(6){5 9=6.9;5 3=6.3;5 v=$("#"+9).m(0).1U;5 k=$("#"+9).m(0);4(k.7[0].1y&&k.1N==""){3.8=c}g{5 12=3.2a;4(3.17=="30"){12=2Z("2Y."+12)}4(12==11||12==""){3.8=e;d}5 2w=1A 2X(12,3.29);4(2w.2W($("#"+9).n())){3.8=c}g{3.8=e}}},2v:b(6){5 9=6.9;5 3=6.3;5 j=$("#"+9);5 B=3.28(j.n(),j.m(0));4(B!=11){4(1Z B=="1n"){3.8=e;6.1h=B}g{3.8=B}}},2u:b(6){5 9=6.9;5 3=6.3;5 j=$("#"+9);5 k=j.m(0);5 n=j.n();5 10=k.s;5 w=$.a.20(9);1g(10){f"1c":f"2t":f"1R":f"1b":f"1a":f"1f":f"Z-1z":f"1e":4(10=="Z-1z"){3.s="1q"}4(3.s=="1q"){4(w<3.18||w>3.1r){3.8=e}g{3.8=c}}g{q=(1Z 3.18);4(q=="2p"){4(!1X(n)){1Y=1W(n);4(1Y>=3.18&&1Y<=3.1r){3.8=c}g{3.8=e}}g 3.8=e}4(q=="1n"){4(n>=3.18&&n<=3.1r){3.8=c}g{3.8=e}}}r;f"Z-2s":r}},2r:b(6){5 9=6.9;5 3=6.3;5 j=$("#"+9);5 2q=$("#"+3.1K);3.8=e;E=j.n();D=2q.n();4(3.17=="2p"){4(!1X(E)&&!1X(D)){E=1W(E);D=1W(D)}g{d}}1g(3.2b){f"=":4(E==D){3.8=c}r;f"!=":4(E!=D){3.8=c}r;f">":4(E>D){3.8=c}r;f">=":4(E>=D){3.8=c}r;f"<":4(E<D){3.8=c}r;f"<=":4(E<=D){3.8=c}r;f"2V":4($.a.Y(9)||$.a.Y(Y.1K)){3.8=e}g{3.8=c}}}};$.I.a=b(1x){5 3={o:"1",1y:e,2U:e,2j:e,2T:c,1P:"请输入内容",1L:"请输入内容",1k:"输入正确",2o:"输入内容为空",2n:b(){d c},2l:b(){},2f:b(){},p:h.m(0).9+"2S",1S:F,u:"1V"};1x=1x||{};$.K(3,1x);d h.C(b(){5 19=h.9;5 H=$("#"+3.p);$.a.J(19,3);4(!$.a.A(3.o).M){$.a.x(3.p,"2g",3.1P)}5 v=h.1U;5 L=3.1S;4(v=="1w"||v=="1v"){5 q=h.s;5 G=$(h);4(q=="1f"||q=="1e"){G=$("1u[@X="+h.X+"]");4(L){1T=$("1u[@X="+h.X+"][@1N=\'"+L+"\']");4(1T.z==1)1T.1d("2m","c")}}g{4(L)G.n(3.1S)}G.1M(b(){5 7=G.m(0).7;4(!$.a.A(7[0].o).M){$.a.x(7[0].p,"2d",7[0].1L)}4(q=="1R"||q=="1c"||q=="1b"||q=="1a"){h.1t=$(h).n()}7[0].2l(G.m(0))});G.2R(b(){5 k=G.m(0);5 N=k.7;5 1Q=N.z;5 6=$.a.W(19,1);4(6.T>=0&&k.1t!=$(k).n()){$.a.x(N[0].p,"2k",N[6.T].1B);$.a.1s(6)}g{$.a.S(6);4(!6.8){5 2i=N[0].2j&&(k.s=="1c"||k.s=="1b"||k.s=="1a");4(2i&&!$.a.A(N[0].o).M){2h(6.3.y);$.a.x(N[0].p,"2g",3.1P)}}}N[0].2f(G.m(0))})}g 4(v=="2e"){j=$(h);5 7=h.7;4(L){$.C(h.1O,b(){4(h.1N==L)h.2Q=c})}j.1M(b(){4(!$.a.A(3.o).M){$.a.x(7[0].p,"2d",7[0].1L)}});j.2P("2O",b(){5 6=$.a.W(19,1);4(6.T>=0&&h.1t!=$(h).n()){$.a.1s(19,6.3)}g{$.a.S(6)}})}})};$.I.1p=b(l){5 7={8:e,18:0,1r:2N,2M:e,s:"1q",L:F,y:"输入错误",u:"1p"};l=l||{};$.K(7,l);d h.C(b(){$.a.J(h.9,7)})};$.I.2c=b(l){5 7={8:e,y:"必须选择",L:F,u:"2c"};l=l||{};$.K(7,l);d h.C(b(){$.a.J(h.9,7)})};$.I.1o=b(l){5 7={8:e,1K:"",2b:"=",y:"输入错误",u:"1o"};l=l||{};$.K(7,l);d h.C(b(){5 2L=$.a.J(h.9,7)})};$.I.1m=b(l){5 7={8:e,2a:"",29:"i",17:"1n",y:"输入的格式不正确",u:"1m"};l=l||{};$.K(7,l);d h.C(b(){$.a.J(h.9,7)})};$.I.1l=b(l){5 7={8:c,y:"你输入的数据不正确，请确认",28:b(){h.8=c},u:"1l"};l=l||{};$.K(7,l);d h.C(b(){$.a.J(h.9,7)})};$.I.Q=b(l){5 7={8:e,1J:"",s:"2K",1I:"",27:c,17:"1H",16:"",1G:c,1F:b(){d c},1E:b(){d c},1D:b(){},26:e,1C:b(){},R:F,y:"服务器校验没有通过",1B:"正在等待服务器返回数据",u:"Q"};l=l||{};$.K(7,l);d h.C(b(){$.a.J(h.9,7)})};$.I.2J=b(){d h.C(b(){5 7=h.7;15(5 i=1;i<7.z;i++){7[i].8=c;$.a.x(7[0].p,"14",7[0].1k)}})}})(2I);',62,203,'|||setting|if|var|returnObj|settings|isValid|id|formValidator|function|true|return|false|case|else|this||srcjo|elem|controlOptions|get|val|validatorGroup|tipid|stype|break|type|showmsg|validateType|srcTag|len|SetTipState|onerror|length|getInitConfig|lb_ret|each|ls_data|curvalue|null|joeach|tip|fn|appendValid|extend|defaultValue|alertMessage|thefirstsettings|thefirstid|jQuery_formValidator_initConfig|AjaxValidator|buttons|ShowMessage|ajax|onError|showclass|OneIsValid|name|IsEmpty|select|sType|undefined|regexpress|setting0|onSuccess|for|data|datatype|min|triggerID|file|textarea|text|attr|radio|checkbox|switch|errormsg|ls_url|error_tip|oncorrect|FunctionValidator|RegexValidator|string|CompareValidator|InputValidator|size|max|AjaxValid|validoldvalue|input|TEXTAREA|INPUT|msgOptions|empty|one|new|onwait|error|complete|success|beforesend|async|html|url|lastValid|desID|onfocus|focus|value|options|onshow|settingslen|password|defaultvalue|checkobj|tagName|InitValidator|parseFloat|isNaN|nval|typeof|GetLength|disabled|parm|indexOf|form1|index|processdata|addidvalue|fun|param|regexp|operateor|SelectValidator|onFocus|SELECT|onblurevent|onShow|alert|auto|automodify|onLoad|onfocusevent|checked|onvalid|onempty|number|desjo|CompareValid|more|hidden|InputValid|FunctionValid|exp|RegexValid|isvalid|submitOnce|elements|triggerValidate|charCodeAt|addClass|removeClass|push|Array|sustainType|jQuery|DefaultPassed|GET|li_index|forceValid|99999999999999|change|bind|selected|blur|Tip|entermovetonext|submitonce|oneok|test|RegExp|regexEnum|eval|enum|processData|beforeSend|dataType|abort|mode|escape|submit|form|PageIsValid|Object|IsOneValid|selectedIndex|0x9fa5|0x4e00|SetFailState|initConfig'.split('|'),0,{}))