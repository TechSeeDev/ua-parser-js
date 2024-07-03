/* UAParser.js v1.0.38
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */
!function(b,d){"use strict";function i(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e}function r(i,e){return typeof i==p&&-1!==F(e).indexOf(F(i))}function w(i,e){if(typeof i==p)return i=i.replace(/^\s\s*/,""),typeof e==u?i:i.substring(0,500)}function l(i,e){for(var o,a,r,t,n,s=0;s<e.length&&!t;){for(var b=e[s],w=e[s+1],l=o=0;l<b.length&&!t&&b[l];)if(t=b[l++].exec(i))for(a=0;a<w.length;a++)n=t[++o],typeof(r=w[a])==m&&0<r.length?2===r.length?typeof r[1]==c?this[r[0]]=r[1].call(this,n):this[r[0]]=r[1]:3===r.length?typeof r[1]!=c||r[1].exec&&r[1].test?this[r[0]]=n?n.replace(r[1],r[2]):d:this[r[0]]=n?r[1].call(this,n,r[2]):d:4===r.length&&(this[r[0]]=n?r[3].call(this,n.replace(r[1],r[2])):d):this[r]=n||d;s+=2}}function e(i,e){for(var o in e)if(typeof e[o]==m&&0<e[o].length){for(var a=0;a<e[o].length;a++)if(r(e[o][a],i))return"?"===o?d:o}else if(r(e[o],i))return"?"===o?d:o;return i}var c="function",u="undefined",m="object",p="string",f="major",h="model",g="name",v="type",x="vendor",k="version",y="architecture",o="console",S="mobile",A="tablet",a="smarttv",t="wearable",n="embedded",s="Amazon",_="Apple",C="ASUS",U="BlackBerry",T="Browser",q="Chrome",H="Firefox",z="Google",N="Huawei",P="LG",M="Microsoft",E="Motorola",O="Opera",V="Samsung",j="Sharp",B="Sony",R="Xiaomi",D="Zebra",I="Facebook",G="Chromium OS",L="Mac OS",F=function(i){return i.toLowerCase()},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},W={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[k,[g,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[k,[g,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[g,k],[/opios[\/ ]+([\w\.]+)/i],[k,[g,O+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[k,[g,O+" GX"]],[/\bopr\/([\w\.]+)/i],[k,[g,O]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[k,[g,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[g,k],[/\bddg\/([\w\.]+)/i],[k,[g,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[k,[g,"UC"+T]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[k,[g,"WeChat"]],[/konqueror\/([\w\.]+)/i],[k,[g,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[k,[g,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[k,[g,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[k,[g,"Smart Lenovo "+T]],[/(avast|avg)\/([\w\.]+)/i],[[g,/(.+)/,"$1 Secure "+T],k],[/\bfocus\/([\w\.]+)/i],[k,[g,H+" Focus"]],[/\bopt\/([\w\.]+)/i],[k,[g,O+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[k,[g,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[k,[g,"Dolphin"]],[/coast\/([\w\.]+)/i],[k,[g,O+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[k,[g,"MIUI "+T]],[/fxios\/([-\w\.]+)/i],[k,[g,H]],[/\bqihu|(qi?ho?o?|360)browser/i],[[g,"360 "+T]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[g,/(.+)/,"$1 "+T],k],[/samsungbrowser\/([\w\.]+)/i],[k,[g,V+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[g,/_/g," "],k],[/metasr[\/ ]?([\d\.]+)/i],[k,[g,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[g,"Sogou Mobile"],k],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[g,k],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[g],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[g,I],k],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[g,k],[/\bgsa\/([\w\.]+) .*safari\//i],[k,[g,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[k,[g,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[k,[g,q+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[g,q+" WebView"],k],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[k,[g,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[g,k],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[k,[g,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[k,g],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[g,[k,e,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[g,k],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[g,"Netscape"],k],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[k,[g,H+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[g,k],[/(cobalt)\/([\w\.]+)/i],[g,[k,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[y,"amd64"]],[/(ia32(?=;))/i],[[y,F]],[/((?:i[346]|x)86)[;\)]/i],[[y,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[y,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[y,"armhf"]],[/windows (ce|mobile); ppc;/i],[[y,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[y,/ower/,"",F]],[/(sun4\w)[;\)]/i],[[y,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[y,F]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[h,[x,V],[v,A]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[h,[x,V],[v,S]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[h,[x,_],[v,S]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[h,[x,_],[v,A]],[/(macintosh);/i],[h,[x,_]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[h,[x,j],[v,S]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[h,[x,N],[v,A]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[h,[x,N],[v,S]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[h,/_/g," "],[x,R],[v,S]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[h,/_/g," "],[x,R],[v,A]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[h,[x,"OPPO"],[v,S]],[/\b(opd2\d{3}a?) bui/i],[h,[x,"OPPO"],[v,A]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[h,[x,"Vivo"],[v,S]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[h,[x,"Realme"],[v,S]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[h,[x,E],[v,S]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[h,[x,E],[v,A]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[h,[x,P],[v,A]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[h,[x,P],[v,S]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[h,[x,"Lenovo"],[v,A]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[h,/_/g," "],[x,"Nokia"],[v,S]],[/(pixel c)\b/i],[h,[x,z],[v,A]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[h,[x,z],[v,S]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[h,[x,B],[v,S]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[h,"Xperia Tablet"],[x,B],[v,A]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[h,[x,"OnePlus"],[v,S]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[h,[x,s],[v,A]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[h,/(.+)/g,"Fire Phone $1"],[x,s],[v,S]],[/(playbook);[-\w\),; ]+(rim)/i],[h,x,[v,A]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[h,[x,U],[v,S]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[h,[x,C],[v,A]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[h,[x,C],[v,S]],[/(nexus 9)/i],[h,[x,"HTC"],[v,A]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[x,[h,/_/g," "],[v,S]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[h,[x,"Acer"],[v,A]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[h,[x,"Meizu"],[v,S]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[h,[x,"Ulefone"],[v,S]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[x,h,[v,S]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[x,h,[v,A]],[/(surface duo)/i],[h,[x,M],[v,A]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[h,[x,"Fairphone"],[v,S]],[/(u304aa)/i],[h,[x,"AT&T"],[v,S]],[/\bsie-(\w*)/i],[h,[x,"Siemens"],[v,S]],[/\b(rct\w+) b/i],[h,[x,"RCA"],[v,A]],[/\b(venue[\d ]{2,7}) b/i],[h,[x,"Dell"],[v,A]],[/\b(q(?:mv|ta)\w+) b/i],[h,[x,"Verizon"],[v,A]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[h,[x,"Barnes & Noble"],[v,A]],[/\b(tm\d{3}\w+) b/i],[h,[x,"NuVision"],[v,A]],[/\b(k88) b/i],[h,[x,"ZTE"],[v,A]],[/\b(nx\d{3}j) b/i],[h,[x,"ZTE"],[v,S]],[/\b(gen\d{3}) b.+49h/i],[h,[x,"Swiss"],[v,S]],[/\b(zur\d{3}) b/i],[h,[x,"Swiss"],[v,A]],[/\b((zeki)?tb.*\b) b/i],[h,[x,"Zeki"],[v,A]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[x,"Dragon Touch"],h,[v,A]],[/\b(ns-?\w{0,9}) b/i],[h,[x,"Insignia"],[v,A]],[/\b((nxa|next)-?\w{0,9}) b/i],[h,[x,"NextBook"],[v,A]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[x,"Voice"],h,[v,S]],[/\b(lvtel\-)?(v1[12]) b/i],[[x,"LvTel"],h,[v,S]],[/\b(ph-1) /i],[h,[x,"Essential"],[v,S]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[h,[x,"Envizen"],[v,A]],[/\b(trio[-\w\. ]+) b/i],[h,[x,"MachSpeed"],[v,A]],[/\btu_(1491) b/i],[h,[x,"Rotor"],[v,A]],[/(shield[\w ]+) b/i],[h,[x,"Nvidia"],[v,A]],[/(sprint) (\w+)/i],[x,h,[v,S]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[x,M],[v,S]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[h,[x,D],[v,A]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[h,[x,D],[v,S]],[/smart-tv.+(samsung)/i],[x,[v,a]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[x,V],[v,a]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[x,P],[v,a]],[/(apple) ?tv/i],[x,[h,_+" TV"],[v,a]],[/crkey/i],[[h,q+"cast"],[x,z],[v,a]],[/droid.+aft(\w+)( bui|\))/i],[h,[x,s],[v,a]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[h,[x,j],[v,a]],[/(bravia[\w ]+)( bui|\))/i],[h,[x,B],[v,a]],[/(mitv-\w{5}) bui/i],[h,[x,R],[v,a]],[/Hbbtv.*(technisat) (.*);/i],[x,h,[v,a]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[x,w],[h,w],[v,a]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[v,a]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[x,h,[v,o]],[/droid.+; (shield) bui/i],[h,[x,"Nvidia"],[v,o]],[/(playstation [345portablevi]+)/i],[h,[x,B],[v,o]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[h,[x,M],[v,o]],[/((pebble))app/i],[x,h,[v,t]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[h,[x,_],[v,t]],[/droid.+; (glass) \d/i],[h,[x,z],[v,t]],[/droid.+; (wt63?0{2,3})\)/i],[h,[x,D],[v,t]],[/(quest( \d| pro)?)/i],[h,[x,I],[v,t]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[x,[v,n]],[/(aeobc)\b/i],[h,[x,s],[v,n]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[h,[v,S]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[h,[v,A]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[v,A]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[v,S]],[/(android[-\w\. ]{0,9});.+buil/i],[h,[x,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[k,[g,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[k,[g,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[g,k],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[k,g]],os:[[/microsoft (windows) (vista|xp)/i],[g,k],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[g,[k,e,Z]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[k,e,Z],[g,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[k,/_/g,"."],[g,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[g,L],[k,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[k,g],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[g,k],[/\(bb(10);/i],[k,[g,U]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[k,[g,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[k,[g,H+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[k,[g,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[k,[g,"watchOS"]],[/crkey\/([\d\.]+)/i],[k,[g,q+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[g,G],k],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[g,k],[/(sunos) ?([\w\.\d]*)/i],[[g,"Solaris"],k],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[g,k]]},X=function(i,e){if(typeof i==m&&(e=i,i=d),!(this instanceof X))return new X(i,e).getResult();var o,a=typeof b!=u&&b.navigator?b.navigator:d,r=i||(a&&a.userAgent?a.userAgent:""),t=a&&a.userAgentData?a.userAgentData:d,n=e?function(i,e){var o,a={};for(o in i)e[o]&&e[o].length%2==0?a[o]=e[o].concat(i[o]):a[o]=i[o];return a}(W,e):W,s=a&&a.userAgent==r;return this.useBrowserClientHints=function(){return new Promise(function(e,i){void 0!==a.userAgentData?a.userAgentData.getHighEntropyValues(["model","mobile","platform","platformVersion"]).then(function(i){console.log("Client hints: ",i),o={"Sec-CH-UA-Mobile":i.mobile,"Sec-CH-UA-Model":i.model,"Sec-CH-UA-Platform":i.platform,"Sec-CH-UA-Platform-Version":i.platformVersion},e()}):(o=null,e())})},this.useHeaderClientHints=function(i){o={"Sec-CH-UA-Mobile":i["Sec-CH-UA-Mobile"],"Sec-CH-UA-Model":i["Sec-CH-UA-Model"],"Sec-CH-UA-Platform":i["Sec-CH-UA-Platform"],"Sec-CH-UA-Platform-Version":i["Sec-CH-UA-Platform-Version"]}},this.clearClientHints=function(){o=d},this.getBrowser=function(){var i,e={};return e[g]=d,e[k]=d,l.call(e,r,n.browser),e[f]=typeof(i=e[k])==p?i.replace(/[^\d\.]/g,"").split(".")[0]:d,s&&a&&a.brave&&typeof a.brave.isBrave==c&&(e[g]="Brave"),e},this.getCPU=function(){var i={};return i[y]=d,l.call(i,r,n.cpu),i},this.getDevice=function(){var i={};return i[x]=d,i[h]=d,i[v]=d,l.call(i,r,n.device),s&&!i[v]&&t&&t.mobile&&(i[v]=S),s&&"Macintosh"==i[h]&&a&&typeof a.standalone!=u&&a.maxTouchPoints&&2<a.maxTouchPoints&&(i[h]="iPad",i[v]=A),o&&(i[h]=o["Sec-CH-UA-Model"]||i[h],i[v]="1"==o["Sec-CH-UA-Mobile"]?S:i[v]),i},this.getEngine=function(){var i={};return i[g]=d,i[k]=d,l.call(i,r,n.engine),i},this.getOS=function(){var i={};return i[g]=d,i[k]=d,l.call(i,r,n.os),s&&!i[g]&&t&&t.platform&&"Unknown"!=t.platform&&(i[g]=t.platform.replace(/chrome os/i,G).replace(/macos/i,L)),o&&(i[k]=o["Sec-CH-UA-Platform-Version"]||i[k]),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(i){return r=typeof i==p&&500<i.length?w(i,500):i,this},this.setUA(r),this};X.VERSION="1.0.38",X.BROWSER=i([g,k,f]),X.CPU=i([y]),X.DEVICE=i([h,x,v,o,S,a,A,t,n]),X.ENGINE=X.OS=i([g,k]),typeof exports!=u?(typeof module!=u&&module.exports&&(exports=module.exports=X),exports.UAParser=X):typeof define==c&&define.amd?define(function(){return X}):typeof b!=u&&(b.UAParser=X);var $,K=typeof b!=u&&(b.jQuery||b.Zepto);K&&!K.ua&&($=new X,K.ua=$.getResult(),K.ua.get=function(){return $.getUA()},K.ua.set=function(i){$.setUA(i);var e,o=$.getResult();for(e in o)K.ua[e]=o[e]})}("object"==typeof window?window:this);