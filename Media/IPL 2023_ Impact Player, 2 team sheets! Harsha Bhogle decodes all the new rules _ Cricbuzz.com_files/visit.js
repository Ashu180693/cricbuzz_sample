try{var dv_win = window._dv_win || window.parent._dv_win; dv_win['dvCallback_1679767258162726']($dv,window,'5a8190cb1d6c43809f2d59d71e0b510b','tpsc-ae1.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=('https://tps.doubleverify.com/visit.jpg'||(window.location.protocol+'//tps30.doubleverify.com/visit.jpg'))+'?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}var dvObj=$dv;var impId='5a8190cb1d6c43809f2d59d71e0b510b';var dup='';dvObj.pubSub.subscribe('ImpressionServed',impId,'ResearchIPv6FromAkamai',function(){   var tagObj = dvObj.tags[impId];   var serverName = tagObj['ServerPublicDns'].substr(0, tagObj['ServerPublicDns'].indexOf('.'));   var tpsServerUrl = 'https://cdn.doubleverify.com/redirect/?host=' + serverName + '&param=akipv6&impid=' + impId + '&dup=' + dup + '&eoid=1000';   dvObj.domUtilities.addImage(tpsServerUrl, null, true);});$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;$dv.tags[$uid].deviceType = 1;$dv.tags[$uid].detectedDeliveryType = 1;try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}