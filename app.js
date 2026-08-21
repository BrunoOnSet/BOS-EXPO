const CAMERA_DB_URL="https://raw.githubusercontent.com/BrunoSetTools/BOS-CAMERA-DB/main/cameras.json";
const CAMERA_DB_CACHE_KEY="bos-camera-db-cache-v3";
const FALLBACK_CAMERA_DB={"schemaVersion":1,"databaseVersion":"1.6","updated":"2026-08-20","cameras":[{"id":"fx30","name":"Sony FX30","brand":"Sony","group":"SONY","sensorWidthMm":23.3,"dof":{"label":"Super 35 / APS-C","cocMm":0.019,"cropToFF":1.5},"media":{"label":"FX30","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":140,"50":200,"100":280,"23.98":100,"29.97":140,"59.94":200,"119.88":280},"note":"Long GOP · 4:2:2 10 bit"},"XAVC HS":{"kind":"fixed","rates":{"50":200,"100":280,"23.98":100,"59.94":200,"119.88":280},"note":"HEVC Long GOP · 4:2:2 10 bit"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":50,"50":50,"100":100,"23.98":50,"29.97":50,"59.94":50,"119.88":100},"note":"Long GOP · preset 4:2:2 10 bit / débit haut"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Cine EI","baseValues":[800,2500],"defaultValue":800,"baseType":"dualBaseISO","gain":{"type":"cameraSpecific"},"sources":["https://helpguide.sony.net/ilc/2220/v1/en/contents/TP1000888939.html"]},"scinetone":{"label":"S-Cinetone","baseValues":[125,400],"defaultValue":125,"baseType":"dualGainReference","gain":{"type":"cameraSpecific"},"note":"S-Cinetone/PP11 : ISO 125 est la valeur ISO par défaut publiée par Sony. ISO 400 est conservé comme repère de bascule de gain haute sensibilité utilisé par BOS/EXPO. Sony ne présente pas 125/400 comme deux Base ISO Cine EI ; les distinguer des Base ISO S-Log3 800/2500.","sources":["https://helpguide.sony.net/ilc/2220/v1/en/contents/TP1000888857.html","https://helpguide.sony.net/ilc/2220/v1/en/contents/TP1000876510.html"],"publishedBaseValues":[125],"operationalGainSwitchValues":[400]}}}},{"id":"fx3","name":"Sony FX3","brand":"Sony","group":"SONY","sensorWidthMm":35.6,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0},"media":{"label":"FX3","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":140,"50":200,"100":280,"23.98":100,"29.97":140,"59.94":200,"119.88":280},"note":"Long GOP · 4:2:2 10 bit"},"XAVC HS":{"kind":"fixed","rates":{"50":200,"100":280,"23.98":100,"59.94":200,"119.88":280},"note":"HEVC Long GOP · 4:2:2 10 bit"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":50,"50":50,"100":100,"23.98":50,"29.97":50,"59.94":50,"119.88":100},"note":"Long GOP · preset 4:2:2 10 bit / débit haut"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Cine EI","baseValues":[800,12800],"defaultValue":800,"baseType":"dualBaseISO","gain":{"type":"cameraSpecific"},"sources":["https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000888939.html"]},"scinetone":{"label":"S-Cinetone","baseValues":[100,2000],"defaultValue":100,"baseType":"dualGainReference","gain":{"type":"cameraSpecific"},"note":"S-Cinetone/PP11 : ISO 100 est la valeur ISO par défaut publiée par Sony. ISO 2000 est conservé comme repère de bascule de gain haute sensibilité utilisé par BOS/EXPO. Sony ne présente pas 100/2000 comme deux Base ISO Cine EI ; les distinguer des Base ISO S-Log3 800/12800.","sources":["https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000888852.html","https://helpguide.sony.net/ilc/2035/v1/en/contents/TP1000275664.html"],"publishedBaseValues":[100],"operationalGainSwitchValues":[2000]}}}},{"id":"fx5","name":"Sony FX5","brand":"Sony","group":"SONY","sensorWidthMm":35.9,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0},"media":{"label":"FX5","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S-L 422":{"kind":"fixed","rates":{"25":140,"50":200,"100":280,"23.98":100,"29.97":140,"59.94":200,"119.88":280},"note":"Long GOP · 4:2:2 10 bit"},"XAVC HS-L 422":{"kind":"fixed","rates":{"50":200,"100":280,"23.98":100,"59.94":200,"119.88":280},"note":"HEVC Long GOP · 4:2:2 10 bit"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S-L 422":{"kind":"fixed","rates":{"25":50,"50":50,"100":100,"23.98":50,"29.97":50,"59.94":50,"119.88":100},"note":"Long GOP · preset 4:2:2 10 bit / débit haut"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Cine EI / Flexible ISO","baseValues":[800,4000,12800],"defaultValue":800,"baseType":"multiBaseISO","gain":{"type":"cameraSpecific"},"specialModes":[{"id":"iso800DualGain","label":"ISO 800 (Dual Gain)","value":800,"type":"dualGain"}],"sources":["https://helpguide.sony.net/ilc/2630/v1/en/contents/base_iso.html"]},"scinetone":{"label":"S-Cinetone","baseValues":[320,1600,5000],"defaultValue":320,"baseType":"multiBaseSensitivity","gain":{"type":"cameraSpecific"},"note":"S-Cinetone en mode Custom SDR : Sony documente Base Sensitivity Low = ISO 320, Mid = ISO 1600 et High = ISO 5000. Le mode Low (Dual Gain) utilise également ISO 320. Ces valeurs sont distinctes des Base ISO Log 800/4000/12800.","sources":["https://helpguide.sony.net/ilc/2630/v1/en/contents/paint_look.html","https://helpguide.sony.net/ilc/2630/v1/en/print.pdf"],"publishedBaseValues":[320,1600,5000],"specialModes":[{"id":"iso320LowDualGain","label":"ISO 320 (Low Dual Gain)","value":320,"type":"dualGain"}]}}}},{"id":"fx6","name":"Sony FX6","brand":"Sony","group":"SONY","sensorWidthMm":35.6,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0},"media":{"label":"FX6","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC-L":{"kind":"fixed","rates":{"25":100,"50":150,"23.98":100,"29.97":100,"59.94":150},"note":"Long GOP · VBR"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC-L 50":{"kind":"fixed","rates":{"25":50,"50":50,"23.98":50,"29.97":50,"59.94":50},"note":"Long GOP · VBR · 50 Mb/s max"},"XAVC-L 35":{"kind":"fixed","rates":{"25":35,"50":35,"23.98":35,"29.97":35,"59.94":35},"note":"Long GOP · VBR · 35 Mb/s max"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Cine EI","baseValues":[800,12800],"defaultValue":800,"baseType":"dualBaseISO","gain":{"type":"cameraSpecific"},"sources":["https://pro.sony/bp_BR/products/handheld-camcorders/ilme-fx6"]},"scinetone":{"label":"S-Cinetone","baseValues":[320,5000],"defaultValue":320,"baseType":"dualBaseSensitivity","gain":{"type":"cameraSpecific"},"note":"S-Cinetone en mode Custom SDR : Sony documente Base Sensitivity Low = ISO 320 et High = ISO 5000. Ce sont des sensibilités de base Custom, distinctes des Base ISO S-Log3 800/12800.","sources":["https://www.sony.com/electronics/support/res/manuals/5026/b901aadf2abc305696e120a05920b63d/50262277M.pdf"],"publishedBaseValues":[320,5000]}}}},{"id":"a7siii","name":"Sony α7S III","brand":"Sony","group":"SONY","sensorWidthMm":35.6,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0},"media":{"label":"α7S III","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240},"note":"All-Intra · 4:2:2 10 bit · DCI 4K/24.00p via licence LCN-MFDCI4K (firmware 3.00+)"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":140,"50":200,"100":280,"23.98":100,"29.97":140,"59.94":200,"119.88":280},"note":"Long GOP · 4:2:2 10 bit · débits hauts"},"XAVC HS":{"kind":"fixed","rates":{"50":200,"100":280,"23.98":100,"59.94":200,"119.88":280},"note":"HEVC Long GOP · 4:2:2 10 bit · débits hauts"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":50,"50":50,"100":100,"23.98":50,"29.97":50,"59.94":50,"119.88":100},"note":"Long GOP · 4:2:2 10 bit · débits hauts"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Flexible ISO","baseValues":[640,12800],"defaultValue":640,"baseType":"dualGainReference","gain":{"type":"cameraSpecific"},"note":"Sony documente ISO 640 comme limite basse standard en S-Log3 sur l’α7S III. Contrairement à la FX3 en Cine EI, Sony ne présente pas l’α7S III avec un sélecteur officiel de deux Base ISO. ISO 12800 est conservé par BOS/EXPO comme repère opérationnel de bascule haute sensibilité ; ne pas le présenter comme un Base ISO Cine EI publié par Sony.","sources":["https://www.sony.jp/ichigan/products/ILCE-7SM3/feature_2.html","https://helpguide.sony.net/ilc/2410/v1/en/contents/211h_log_shoot_setting.html"],"publishedReferenceValues":[640],"operationalGainSwitchValues":[12800]},"scinetone":{"label":"S-Cinetone","baseValues":[100,2000],"defaultValue":100,"baseType":"dualGainReference","gain":{"type":"cameraSpecific"},"note":"S-Cinetone est disponible sur l’α7S III (PP11 / firmware compatible). Pour BOS/EXPO, 100 / 2000 ISO sont conservés comme repères opérationnels de gain, selon la même convention que la FX3. Sony ne les publie pas comme un couple officiel de Base ISO Cine EI.","sources":["https://helpguide.sony.net/ilc/2410/v1/en/contents/0412D_picture_profile.html","https://www.sony.jp/ichigan/products/ILCE-7SM3/feature_2.html"],"operationalGainSwitchValues":[2000]}}}},{"id":"vraptor","name":"RED V-RAPTOR VV","brand":"RED","group":"ARRI / RED","sensorWidthMm":40.96,"dof":{"label":"Vista Vision","cocMm":0.033,"cropToFF":0.88},"exposure":{"unit":"ISO","defaultProfile":"ipp2","profiles":{"ipp2":{"label":"IPP2 / Log3G10","baseValues":[],"referenceValues":[800],"defaultValue":800,"baseType":"referenceOnly","isoRange":[250,12800],"gain":{"type":"metadata"},"note":"RED décrit ISO 800 comme valeur ISO par défaut et point de départ recommandé. L’ISO R3D est un réglage de monitoring/métadonnée ajustable en post, pas un Dual Native ISO.","sources":["https://docs.red.com/955-0199/955-0199_V1.3_Rev-B_RED_PS_V-RAPTOR_8K_VV_Operation_Guide/Content/4_Menus/a_Image_LUT/02_ISO.htm"]}}}},{"id":"miniLF","name":"ARRI ALEXA Mini LF","brand":"ARRI","group":"ARRI / RED","sensorWidthMm":36.7,"dof":{"label":"Large Format","cocMm":0.03,"cropToFF":0.98},"media":{"label":"ALEXA Mini LF","modes":{"4.5K Open Gate":{"width":4448,"height":3096,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","40"]},"UHD":{"width":3840,"height":2160,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60"]},"HD":{"width":1920,"height":1080,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60","75","90"]}}},"exposure":{"unit":"EI","defaultProfile":"logc3","profiles":{"logc3":{"label":"ARRI Log C3","baseValues":[800],"defaultValue":800,"baseType":"baseSensitivity","eiRange":[160,3200],"gain":{"type":"ei"},"sources":["https://www.arri.com/en/cine-systems/cine-cameras/alexa-mini-lf"]}}}},{"id":"alexa35","name":"ARRI ALEXA 35","brand":"ARRI","group":"ARRI / RED","sensorWidthMm":27.99,"dof":{"label":"Super 35","cocMm":0.023,"cropToFF":1.29},"media":{"label":"ALEXA 35","modes":{"4.6K Open Gate":{"width":4608,"height":3164,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60"]},"4K 16:9":{"width":4096,"height":2304,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60","75","100"]},"UHD":{"width":3840,"height":2160,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60","100","120"]},"HD":{"width":1920,"height":1080,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60","100","120"]}}},"exposure":{"unit":"EI","defaultProfile":"logc4","profiles":{"logc4":{"label":"ARRI LogC4 / REVEAL","baseValues":[800],"defaultValue":800,"baseType":"baseSensitivity","eiRange":[160,6400],"gain":{"type":"ei"},"specialModes":[{"id":"enhancedSensitivity","label":"Enhanced Sensitivity","type":"enhancedSensitivity"}],"note":"EI 800 reste la sensibilité de base ALEV4 ; Enhanced Sensitivity améliore le bruit en basse lumière sans être traité ici comme un second ISO natif.","sources":["https://www.arri.com/en/cine-systems/cine-cameras/legacy-cine-cameras/alexa-35","https://www.arri.com/en/learn-help/learn-help-camera-system/image-science/hdr-faq"]}}}},{"id":"bmpcc4k","name":"Blackmagic Pocket Cinema Camera 4K","brand":"Blackmagic","group":"BLACKMAGIC","sensorWidthMm":18.96,"sensorHeightMm":10.0,"dof":{"label":"Four Thirds","cocMm":0.014,"cropToFF":1.9},"media":{"label":"Cinema 4K","modes":{"4K DCI":{"width":4096,"height":2160,"fps":["24","25","30","50","60"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":136,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":82,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":51,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":35,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"UHD":{"width":3840,"height":2160,"fps":["24","25","30","50","60"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":127,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":77,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":48,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":32,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"HD":{"width":1920,"height":1080,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":33,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":20,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":13,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":8.4,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}}}},"exposure":{"unit":"ISO","defaultProfile":"bmfilm5","profileType":"dynamicRange","profileSensitivityRelationship":"sharedNativeISO","note":"Video, Extended Video et Film Gen 5 utilisent les mêmes sensibilités natives du capteur. Le profil modifie le rendu/dynamic range, pas les ISO natifs.","profiles":{"video":{"label":"Video","baseValues":[400,3200],"defaultValue":400,"baseType":"dualNativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/fr/UserManuals/BlackmagicPocketCinemaCamera4KManual.pdf"],"waveformGuide":{"kind":"lutDerived","status":"VIDEO · GEN 5","signalUnit":"percent","middleGrayPercent":40.23,"stopTable":[{"stop":-4.0,"percent":5.22},{"stop":-3.0,"percent":10.11},{"stop":-2.0,"percent":17.35},{"stop":-1.0,"percent":27.37},{"stop":0.0,"percent":40.23},{"stop":1.0,"percent":53.87},{"stop":2.0,"percent":67.57},{"stop":3.0,"percent":81.12},{"stop":4.0,"percent":91.22},{"stop":5.0,"percent":96.41},{"stop":6.0,"percent":98.51}],"zones":[{"min":0,"max":10.11,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Sous environ −3 stops du gris, le signal est très bas dans le rendu Video."},{"min":10.11,"max":27.37,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres du rendu Video, plus contrasté que Extended Video."},{"min":27.37,"max":67.57,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen, avec un rendu plus contrasté et direct."},{"min":67.57,"max":91.22,"label":"HAUTES","title":"Hautes lumières","text":"Les hautes lumières montent rapidement vers le haut du signal."},{"min":91.22,"max":98.51,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Le rendu Video approche très vite le plafond ; la marge visible devient faible."},{"min":98.51,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes","text":"Pratiquement au plafond de sortie. Ne pas confondre ce plafond de rendu avec la latitude RAW du capteur."}],"markers":[{"value":17.35,"label":"17.3 %","sub":"−2 stops"},{"value":40.23,"label":"40.2 %","sub":"gris 18 %"},{"value":67.57,"label":"67.6 %","sub":"+2 stops"},{"value":91.22,"label":"91.2 %","sub":"+4 stops"}],"note":"Video Gen 5 dérivé de la LUT Blackmagic officielle. Le rendu atteint le haut du signal plus vite qu’Extended Video.","refNote":"Le gris 18 % Film Gen 5 (≈38,36 %) ressort à ≈40,23 % après la LUT Video.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","lutFile":"Blackmagic Gen 5 Film to Video.cube","lutSha256":"348f288dec66a6d472d4d1b7c85dec6579af8a84c448316c586f8643492e1da1","method":"Neutral-axis 3D LUT interpolation applied to Film Gen 5 stop references"}}},"extendedvideo":{"label":"Extended Video","baseValues":[400,3200],"defaultValue":400,"baseType":"dualNativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/fr/UserManuals/BlackmagicPocketCinemaCamera4KManual.pdf"],"waveformGuide":{"kind":"lutDerived","status":"EXTENDED VIDEO · GEN 5","signalUnit":"percent","middleGrayPercent":41.1,"stopTable":[{"stop":-4.0,"percent":6.73},{"stop":-3.0,"percent":10.3},{"stop":-2.0,"percent":16.61},{"stop":-1.0,"percent":27.39},{"stop":0.0,"percent":41.1},{"stop":1.0,"percent":55.11},{"stop":2.0,"percent":69.3},{"stop":3.0,"percent":80.88},{"stop":4.0,"percent":88.25},{"stop":5.0,"percent":93.0},{"stop":6.0,"percent":96.08}],"zones":[{"min":0,"max":10.3,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Sous environ −3 stops du gris, le signal est très bas dans le rendu Extended Video."},{"min":10.3,"max":27.39,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres : davantage de séparation qu’en Video, avec un contraste encore modéré."},{"min":27.39,"max":69.3,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen. Extended Video conserve un rendu plus doux que Video."},{"min":69.3,"max":88.25,"label":"HAUTES","title":"Hautes lumières","text":"Les hautes lumières montent progressivement et restent moins comprimées que dans Video."},{"min":88.25,"max":96.08,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Zone de roll-off progressif avant le plafond du signal."},{"min":96.08,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes","text":"Très proche du plafond de sortie. Vérifie le clipping réel du capteur et du signal."}],"markers":[{"value":16.61,"label":"16.6 %","sub":"−2 stops"},{"value":41.1,"label":"41.1 %","sub":"gris 18 %"},{"value":69.3,"label":"69.3 %","sub":"+2 stops"},{"value":88.25,"label":"88.3 %","sub":"+4 stops"}],"note":"Extended Video Gen 5 dérivé de la LUT Blackmagic officielle. Les repères décrivent la sortie de la LUT, pas la latitude capteur garantie.","refNote":"Le gris 18 % Film Gen 5 (≈38,36 %) ressort à ≈41,10 % après la LUT Extended Video.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","lutFile":"Blackmagic Gen 5 Film to Extended Video.cube","lutSha256":"c1424b30899da95708ef346e1e386496b28fe742b6d29f704f43dfea8f616c5f","method":"Neutral-axis 3D LUT interpolation applied to Film Gen 5 stop references"}}},"bmfilm5":{"label":"Film Gen 5","baseValues":[400,3200],"defaultValue":400,"baseType":"dualNativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/fr/UserManuals/BlackmagicPocketCinemaCamera4KManual.pdf"],"waveformGuide":{"kind":"logCurve","status":"FILM GEN 5","signalUnit":"percent","middleGrayPercent":38.36,"stopTable":[{"stop":-4.0,"percent":17.45},{"stop":-3.0,"percent":21.92},{"stop":-2.0,"percent":27.05},{"stop":-1.0,"percent":32.58},{"stop":0.0,"percent":38.36},{"stop":1.0,"percent":44.25},{"stop":2.0,"percent":50.21},{"stop":3.0,"percent":56.2},{"stop":4.0,"percent":62.21},{"stop":5.0,"percent":68.23},{"stop":6.0,"percent":74.25},{"stop":7.0,"percent":80.27},{"stop":8.0,"percent":86.3}],"zones":[{"min":0,"max":13.39,"label":"PIED / TRÈS BASSES","title":"Pied de courbe","text":"Portion basse de Film Gen 5."},{"min":13.39,"max":32.58,"label":"OMBRES LOG","title":"Ombres","text":"Portion logarithmique sous le gris moyen."},{"min":32.58,"max":56.2,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen Blackmagic."},{"min":56.2,"max":74.25,"label":"HAUTES","title":"Hautes lumières","text":"Zone de hautes lumières comprimées par la courbe Log."},{"min":74.25,"max":86.3,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Headroom d’encodage élevé ; le capteur peut clipper avant la limite mathématique."},{"min":86.3,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes encodés","text":"Zone très haute de la courbe."}],"markers":[{"value":13.39,"label":"≈13,4 %","sub":"passage pied → log"},{"value":38.36,"label":"38,4 %","sub":"gris moyen"},{"value":44.25,"label":"44,3 %","sub":"+1 stop"},{"value":74.25,"label":"74,3 %","sub":"+6 stops"}],"note":"Blackmagic Film Gen 5 : repères de signal issus de la fonction de transfert Gen 5.","refNote":"Le gris 18 % Film Gen 5 est à ≈38,36 %.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","method":"Public Blackmagic Film Gen 5 transfer function evaluated from 18% middle gray"}}}}}},{"id":"bmpcc6k","name":"Blackmagic Pocket Cinema Camera 6K","brand":"Blackmagic","group":"BLACKMAGIC","sensorWidthMm":23.1,"sensorHeightMm":12.99,"dof":{"label":"Super 35","cocMm":0.018,"cropToFF":1.56},"media":{"label":"Cinema 6K","modes":{"6K":{"width":6144,"height":3456,"fps":["24","25","30","50"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":323,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":194,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":121,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":81,"note":"Blackmagic RAW · débit constant"}}},"4K DCI":{"width":4096,"height":2160,"fps":["24","25","30","50","60"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":136,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":82,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":51,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":35,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"UHD":{"width":3840,"height":2160,"fps":["24","25","30","50","60"],"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"HD":{"width":1920,"height":1080,"fps":["24","25","30","50","60"],"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}}}},"exposure":{"unit":"ISO","defaultProfile":"bmfilm5","profileType":"dynamicRange","profileSensitivityRelationship":"sharedNativeISO","note":"Video, Extended Video et Film Gen 5 utilisent les mêmes sensibilités natives du capteur. Le profil modifie le rendu/dynamic range, pas les ISO natifs.","profiles":{"video":{"label":"Video","baseValues":[400,3200],"defaultValue":400,"baseType":"dualNativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/fr/UserManuals/BlackmagicPocketCinemaCamera4KManual.pdf"],"waveformGuide":{"kind":"lutDerived","status":"VIDEO · GEN 5","signalUnit":"percent","middleGrayPercent":40.23,"stopTable":[{"stop":-4.0,"percent":5.22},{"stop":-3.0,"percent":10.11},{"stop":-2.0,"percent":17.35},{"stop":-1.0,"percent":27.37},{"stop":0.0,"percent":40.23},{"stop":1.0,"percent":53.87},{"stop":2.0,"percent":67.57},{"stop":3.0,"percent":81.12},{"stop":4.0,"percent":91.22},{"stop":5.0,"percent":96.41},{"stop":6.0,"percent":98.51}],"zones":[{"min":0,"max":10.11,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Sous environ −3 stops du gris, le signal est très bas dans le rendu Video."},{"min":10.11,"max":27.37,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres du rendu Video, plus contrasté que Extended Video."},{"min":27.37,"max":67.57,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen, avec un rendu plus contrasté et direct."},{"min":67.57,"max":91.22,"label":"HAUTES","title":"Hautes lumières","text":"Les hautes lumières montent rapidement vers le haut du signal."},{"min":91.22,"max":98.51,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Le rendu Video approche très vite le plafond ; la marge visible devient faible."},{"min":98.51,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes","text":"Pratiquement au plafond de sortie. Ne pas confondre ce plafond de rendu avec la latitude RAW du capteur."}],"markers":[{"value":17.35,"label":"17.3 %","sub":"−2 stops"},{"value":40.23,"label":"40.2 %","sub":"gris 18 %"},{"value":67.57,"label":"67.6 %","sub":"+2 stops"},{"value":91.22,"label":"91.2 %","sub":"+4 stops"}],"note":"Video Gen 5 dérivé de la LUT Blackmagic officielle. Le rendu atteint le haut du signal plus vite qu’Extended Video.","refNote":"Le gris 18 % Film Gen 5 (≈38,36 %) ressort à ≈40,23 % après la LUT Video.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","lutFile":"Blackmagic Gen 5 Film to Video.cube","lutSha256":"348f288dec66a6d472d4d1b7c85dec6579af8a84c448316c586f8643492e1da1","method":"Neutral-axis 3D LUT interpolation applied to Film Gen 5 stop references"}}},"extendedvideo":{"label":"Extended Video","baseValues":[400,3200],"defaultValue":400,"baseType":"dualNativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/fr/UserManuals/BlackmagicPocketCinemaCamera4KManual.pdf"],"waveformGuide":{"kind":"lutDerived","status":"EXTENDED VIDEO · GEN 5","signalUnit":"percent","middleGrayPercent":41.1,"stopTable":[{"stop":-4.0,"percent":6.73},{"stop":-3.0,"percent":10.3},{"stop":-2.0,"percent":16.61},{"stop":-1.0,"percent":27.39},{"stop":0.0,"percent":41.1},{"stop":1.0,"percent":55.11},{"stop":2.0,"percent":69.3},{"stop":3.0,"percent":80.88},{"stop":4.0,"percent":88.25},{"stop":5.0,"percent":93.0},{"stop":6.0,"percent":96.08}],"zones":[{"min":0,"max":10.3,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Sous environ −3 stops du gris, le signal est très bas dans le rendu Extended Video."},{"min":10.3,"max":27.39,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres : davantage de séparation qu’en Video, avec un contraste encore modéré."},{"min":27.39,"max":69.3,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen. Extended Video conserve un rendu plus doux que Video."},{"min":69.3,"max":88.25,"label":"HAUTES","title":"Hautes lumières","text":"Les hautes lumières montent progressivement et restent moins comprimées que dans Video."},{"min":88.25,"max":96.08,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Zone de roll-off progressif avant le plafond du signal."},{"min":96.08,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes","text":"Très proche du plafond de sortie. Vérifie le clipping réel du capteur et du signal."}],"markers":[{"value":16.61,"label":"16.6 %","sub":"−2 stops"},{"value":41.1,"label":"41.1 %","sub":"gris 18 %"},{"value":69.3,"label":"69.3 %","sub":"+2 stops"},{"value":88.25,"label":"88.3 %","sub":"+4 stops"}],"note":"Extended Video Gen 5 dérivé de la LUT Blackmagic officielle. Les repères décrivent la sortie de la LUT, pas la latitude capteur garantie.","refNote":"Le gris 18 % Film Gen 5 (≈38,36 %) ressort à ≈41,10 % après la LUT Extended Video.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","lutFile":"Blackmagic Gen 5 Film to Extended Video.cube","lutSha256":"c1424b30899da95708ef346e1e386496b28fe742b6d29f704f43dfea8f616c5f","method":"Neutral-axis 3D LUT interpolation applied to Film Gen 5 stop references"}}},"bmfilm5":{"label":"Film Gen 5","baseValues":[400,3200],"defaultValue":400,"baseType":"dualNativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/fr/UserManuals/BlackmagicPocketCinemaCamera4KManual.pdf"],"waveformGuide":{"kind":"logCurve","status":"FILM GEN 5","signalUnit":"percent","middleGrayPercent":38.36,"stopTable":[{"stop":-4.0,"percent":17.45},{"stop":-3.0,"percent":21.92},{"stop":-2.0,"percent":27.05},{"stop":-1.0,"percent":32.58},{"stop":0.0,"percent":38.36},{"stop":1.0,"percent":44.25},{"stop":2.0,"percent":50.21},{"stop":3.0,"percent":56.2},{"stop":4.0,"percent":62.21},{"stop":5.0,"percent":68.23},{"stop":6.0,"percent":74.25},{"stop":7.0,"percent":80.27},{"stop":8.0,"percent":86.3}],"zones":[{"min":0,"max":13.39,"label":"PIED / TRÈS BASSES","title":"Pied de courbe","text":"Portion basse de Film Gen 5."},{"min":13.39,"max":32.58,"label":"OMBRES LOG","title":"Ombres","text":"Portion logarithmique sous le gris moyen."},{"min":32.58,"max":56.2,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen Blackmagic."},{"min":56.2,"max":74.25,"label":"HAUTES","title":"Hautes lumières","text":"Zone de hautes lumières comprimées par la courbe Log."},{"min":74.25,"max":86.3,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Headroom d’encodage élevé ; le capteur peut clipper avant la limite mathématique."},{"min":86.3,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes encodés","text":"Zone très haute de la courbe."}],"markers":[{"value":13.39,"label":"≈13,4 %","sub":"passage pied → log"},{"value":38.36,"label":"38,4 %","sub":"gris moyen"},{"value":44.25,"label":"44,3 %","sub":"+1 stop"},{"value":74.25,"label":"74,3 %","sub":"+6 stops"}],"note":"Blackmagic Film Gen 5 : repères de signal issus de la fonction de transfert Gen 5.","refNote":"Le gris 18 % Film Gen 5 est à ≈38,36 %.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","method":"Public Blackmagic Film Gen 5 transfer function evaluated from 18% middle gray"}}}}}},{"id":"ursamp46kg2","name":"Blackmagic URSA Mini Pro 4.6K G2","brand":"Blackmagic","group":"BLACKMAGIC","sensorWidthMm":25.34,"sensorHeightMm":14.25,"dof":{"label":"Super 35","cocMm":0.019,"cropToFF":1.42},"media":{"label":"URSA Mini Pro 4.6K","modes":{"4.6K":{"width":4608,"height":2592,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":183,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":110,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":68,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":46,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"UHD":{"width":3840,"height":2160,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":127,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":76,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":48,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":32,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"HD":{"width":1920,"height":1080,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":33,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":20,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":12,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":8,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}}}},"exposure":{"unit":"ISO","defaultProfile":"bmfilm","profileType":"dynamicRange","profileSensitivityRelationship":"sharedNativeISO","note":"Video, Extended Video et Film utilisent la même sensibilité native de référence. Sur la 4.6K G2, le profil Film reste identifié comme Gen 4 dans BOS ; ne pas l’étiqueter Film Gen 5 natif.","profiles":{"video":{"label":"Video","baseValues":[800],"defaultValue":800,"baseType":"nativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 4","sources":["https://documents.blackmagicdesign.com/UserManuals/BlackmagicURSAMiniManual.pdf"],"note":"La 4.6K G2 n’est pas traitée comme dual-native dans BOS. ISO 800 est la référence native retenue.","waveformGuide":{"kind":"lutDerived","status":"VIDEO · GEN 4","signalUnit":"percent","middleGrayPercent":41.12,"stopTable":[{"stop":-3.0,"percent":2.9},{"stop":-2.0,"percent":14.37},{"stop":-1.0,"percent":26.72},{"stop":0.0,"percent":41.12},{"stop":1.0,"percent":59.4},{"stop":2.0,"percent":83.83},{"stop":3.0,"percent":99.9},{"stop":4.0,"percent":99.9},{"stop":5.0,"percent":99.9}],"zones":[{"min":0,"max":14.37,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Très basses valeurs du rendu Video Gen 4."},{"min":14.37,"max":26.72,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres du rendu Video."},{"min":26.72,"max":59.4,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen."},{"min":59.4,"max":83.83,"label":"HAUTES","title":"Hautes lumières","text":"Le contraste augmente rapidement dans les hautes lumières."},{"min":83.83,"max":99.5,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Le rendu Video approche très rapidement le plafond."},{"min":99.5,"max":100.01,"label":"PLAFOND","title":"Plafond de sortie","text":"À partir d’environ +3 stops dans ces repères, la LUT Video est pratiquement au plafond de sortie."}],"markers":[{"value":14.37,"label":"14.4 %","sub":"≈ −2 stops"},{"value":41.12,"label":"41.1 %","sub":"gris 18 %"},{"value":59.4,"label":"59.4 %","sub":"≈ +1 stop"},{"value":83.83,"label":"83.8 %","sub":"≈ +2 stops"},{"value":99.9,"label":"≈100 %","sub":"≈ +3 stops"}],"note":"Video Gen 4 dérivé de la LUT Blackmagic fournie. Le rendu arrive pratiquement au plafond vers le repère +3 stops de la table 4.6K Film utilisée.","refNote":"Le gris moyen 4.6K Film de référence (≈38,4 %) ressort à ≈41,12 % après la LUT Video v4.","accuracy":"lutExact_stopReferencesApproximate","provenance":{"inputCurve":"Blackmagic 4.6K Film (Gen 4 workflow)","stopReferenceMethod":"Legacy measured 4.6K Film stop table; values are approximate","stopReferenceUrl":"https://forum.blackmagicdesign.com/viewtopic.php?t=57619","lutFile":"Blackmagic 4.6K Film to Video v4.cube","lutSha256":"0e9de21e501115d8cd093937543b307f78bc5fa4599443a77efad6e1b5f7d903","method":"Neutral-axis 3D LUT interpolation applied to legacy 4.6K Film stop references"}}},"extendedvideo":{"label":"Extended Video","baseValues":[800],"defaultValue":800,"baseType":"nativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 4","sources":["https://documents.blackmagicdesign.com/UserManuals/BlackmagicURSAMiniManual.pdf"],"note":"La 4.6K G2 n’est pas traitée comme dual-native dans BOS. ISO 800 est la référence native retenue.","waveformGuide":{"kind":"lutDerived","status":"EXTENDED VIDEO · GEN 4","signalUnit":"percent","middleGrayPercent":41.06,"stopTable":[{"stop":-3.0,"percent":3.06},{"stop":-2.0,"percent":13.67},{"stop":-1.0,"percent":25.8},{"stop":0.0,"percent":41.06},{"stop":1.0,"percent":57.62},{"stop":2.0,"percent":71.72},{"stop":3.0,"percent":82.62},{"stop":4.0,"percent":90.5},{"stop":5.0,"percent":96.34}],"zones":[{"min":0,"max":13.67,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Très basses valeurs du rendu Extended Video Gen 4."},{"min":13.67,"max":25.8,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres avec davantage de douceur que le rendu Video."},{"min":25.8,"max":71.72,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen."},{"min":71.72,"max":90.5,"label":"HAUTES","title":"Hautes lumières","text":"Montée progressive des hautes lumières."},{"min":90.5,"max":96.34,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Roll-off encore progressif près du plafond."},{"min":96.34,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes","text":"Très proche du plafond de sortie."}],"markers":[{"value":13.67,"label":"13.7 %","sub":"≈ −2 stops"},{"value":41.06,"label":"41.1 %","sub":"gris 18 %"},{"value":71.72,"label":"71.7 %","sub":"≈ +2 stops"},{"value":90.5,"label":"90.5 %","sub":"≈ +4 stops"}],"note":"Extended Video Gen 4 dérivé de la LUT Blackmagic fournie. Les positions en stops reposent sur des repères 4.6K Film historiques et sont donc indiquées comme approximatives.","refNote":"Le gris moyen 4.6K Film de référence (≈38,4 %) ressort à ≈41,06 % après la LUT Extended Video v4.","accuracy":"lutExact_stopReferencesApproximate","provenance":{"inputCurve":"Blackmagic 4.6K Film (Gen 4 workflow)","stopReferenceMethod":"Legacy measured 4.6K Film stop table; values are approximate","stopReferenceUrl":"https://forum.blackmagicdesign.com/viewtopic.php?t=57619","lutFile":"Blackmagic 4.6K Film to Extended Video v4.cube","lutSha256":"fdaa7d4b9e0642800cd3eb9c9ef3484af95582dc18ce96c350216c58f17a5e24","method":"Neutral-axis 3D LUT interpolation applied to legacy 4.6K Film stop references"}}},"bmfilm":{"label":"Film","baseValues":[800],"defaultValue":800,"baseType":"nativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 4","sources":["https://documents.blackmagicdesign.com/UserManuals/BlackmagicURSAMiniManual.pdf"],"note":"La 4.6K G2 n’est pas traitée comme dual-native dans BOS. ISO 800 est la référence native retenue.","waveformGuide":{"kind":"legacyLogReference","status":"FILM · GEN 4","signalUnit":"percent","middleGrayPercent":38.4,"stopTable":[{"stop":-3.0,"percent":10.2},{"stop":-2.0,"percent":19.6},{"stop":-1.0,"percent":29.0},{"stop":0.0,"percent":38.4},{"stop":1.0,"percent":48.0},{"stop":2.0,"percent":58.0},{"stop":3.0,"percent":69.0},{"stop":4.0,"percent":80.0},{"stop":5.0,"percent":91.0}],"zones":[{"min":0,"max":19.6,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Très basses valeurs de Blackmagic 4.6K Film."},{"min":19.6,"max":29.0,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres sous le gris moyen."},{"min":29.0,"max":69.0,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen."},{"min":69.0,"max":91.0,"label":"HAUTES","title":"Hautes lumières","text":"Zone haute du signal Film 4.6K."},{"min":91.0,"max":100.01,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Très hautes valeurs du signal Film."}],"markers":[{"value":29.0,"label":"≈29 %","sub":"≈ −1 stop"},{"value":38.4,"label":"≈38,4 %","sub":"gris moyen"},{"value":48.0,"label":"≈48 %","sub":"≈ +1 stop"},{"value":69.0,"label":"≈69 %","sub":"≈ +3 stops"},{"value":91.0,"label":"≈91 %","sub":"≈ +5 stops"}],"note":"Blackmagic 4.6K Film / Gen 4 : repères historiques utilisés pour situer le signal. Ils sont conservés comme approximatifs.","refNote":"Les niveaux historiques 4.6K Film sont utilisés comme table de référence pour la G2.","accuracy":"approximateLegacyMeasured","provenance":{"inputCurve":"Blackmagic 4.6K Film (Gen 4 workflow)","stopReferenceMethod":"Legacy measured 4.6K Film stop table; values are approximate","stopReferenceUrl":"https://forum.blackmagicdesign.com/viewtopic.php?t=57619","method":"Legacy measured 4.6K Film stop references"}}}}}},{"id":"ursamp12k","name":"Blackmagic URSA Mini Pro 12K","brand":"Blackmagic","group":"BLACKMAGIC","sensorWidthMm":27.03,"sensorHeightMm":14.25,"dof":{"label":"Super 35","cocMm":0.02,"cropToFF":1.33},"media":{"label":"URSA Mini Pro 12K","modes":{"12K":{"width":12288,"height":6480,"fps":["24","25","30","50","60"],"codecs":{"BRAW 5:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":578,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":361,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":241,"note":"Blackmagic RAW · débit constant"},"BRAW 18:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":160,"note":"Blackmagic RAW · débit constant"}}},"8K":{"width":8192,"height":4320,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 5:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":257,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":161,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":107,"note":"Blackmagic RAW · débit constant"},"BRAW 18:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":71,"note":"Blackmagic RAW · débit constant"}}},"6K S16":{"width":6144,"height":3240,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 5:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":146,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":91,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":61,"note":"Blackmagic RAW · débit constant"},"BRAW 18:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":40,"note":"Blackmagic RAW · débit constant"}}},"4K":{"width":4096,"height":2160,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 5:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":161,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":107,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":80,"note":"Blackmagic RAW · débit constant"},"BRAW 18:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":53,"note":"Blackmagic RAW · débit constant"}}}}},"exposure":{"unit":"ISO","defaultProfile":"bmfilm5","profileType":"dynamicRange","profileSensitivityRelationship":"sharedNativeISO","note":"Video, Extended Video et Film Gen 5 utilisent la même sensibilité native de référence du capteur. Le profil modifie le rendu/dynamic range.","profiles":{"video":{"label":"Video","baseValues":[800],"defaultValue":800,"baseType":"nativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/UserManuals/BlackmagicURSAMiniManual.pdf"],"waveformGuide":{"kind":"lutDerived","status":"VIDEO · GEN 5","signalUnit":"percent","middleGrayPercent":40.23,"stopTable":[{"stop":-4.0,"percent":5.22},{"stop":-3.0,"percent":10.11},{"stop":-2.0,"percent":17.35},{"stop":-1.0,"percent":27.37},{"stop":0.0,"percent":40.23},{"stop":1.0,"percent":53.87},{"stop":2.0,"percent":67.57},{"stop":3.0,"percent":81.12},{"stop":4.0,"percent":91.22},{"stop":5.0,"percent":96.41},{"stop":6.0,"percent":98.51}],"zones":[{"min":0,"max":10.11,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Sous environ −3 stops du gris, le signal est très bas dans le rendu Video."},{"min":10.11,"max":27.37,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres du rendu Video, plus contrasté que Extended Video."},{"min":27.37,"max":67.57,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen, avec un rendu plus contrasté et direct."},{"min":67.57,"max":91.22,"label":"HAUTES","title":"Hautes lumières","text":"Les hautes lumières montent rapidement vers le haut du signal."},{"min":91.22,"max":98.51,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Le rendu Video approche très vite le plafond ; la marge visible devient faible."},{"min":98.51,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes","text":"Pratiquement au plafond de sortie. Ne pas confondre ce plafond de rendu avec la latitude RAW du capteur."}],"markers":[{"value":17.35,"label":"17.3 %","sub":"−2 stops"},{"value":40.23,"label":"40.2 %","sub":"gris 18 %"},{"value":67.57,"label":"67.6 %","sub":"+2 stops"},{"value":91.22,"label":"91.2 %","sub":"+4 stops"}],"note":"Video Gen 5 dérivé de la LUT Blackmagic officielle. Le rendu atteint le haut du signal plus vite qu’Extended Video.","refNote":"Le gris 18 % Film Gen 5 (≈38,36 %) ressort à ≈40,23 % après la LUT Video.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","lutFile":"Blackmagic Gen 5 Film to Video.cube","lutSha256":"348f288dec66a6d472d4d1b7c85dec6579af8a84c448316c586f8643492e1da1","method":"Neutral-axis 3D LUT interpolation applied to Film Gen 5 stop references"}}},"extendedvideo":{"label":"Extended Video","baseValues":[800],"defaultValue":800,"baseType":"nativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/UserManuals/BlackmagicURSAMiniManual.pdf"],"waveformGuide":{"kind":"lutDerived","status":"EXTENDED VIDEO · GEN 5","signalUnit":"percent","middleGrayPercent":41.1,"stopTable":[{"stop":-4.0,"percent":6.73},{"stop":-3.0,"percent":10.3},{"stop":-2.0,"percent":16.61},{"stop":-1.0,"percent":27.39},{"stop":0.0,"percent":41.1},{"stop":1.0,"percent":55.11},{"stop":2.0,"percent":69.3},{"stop":3.0,"percent":80.88},{"stop":4.0,"percent":88.25},{"stop":5.0,"percent":93.0},{"stop":6.0,"percent":96.08}],"zones":[{"min":0,"max":10.3,"label":"TRÈS BASSES","title":"Très basses lumières","text":"Sous environ −3 stops du gris, le signal est très bas dans le rendu Extended Video."},{"min":10.3,"max":27.39,"label":"OMBRES","title":"Ombres","text":"Zone d’ombres : davantage de séparation qu’en Video, avec un contraste encore modéré."},{"min":27.39,"max":69.3,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen. Extended Video conserve un rendu plus doux que Video."},{"min":69.3,"max":88.25,"label":"HAUTES","title":"Hautes lumières","text":"Les hautes lumières montent progressivement et restent moins comprimées que dans Video."},{"min":88.25,"max":96.08,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Zone de roll-off progressif avant le plafond du signal."},{"min":96.08,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes","text":"Très proche du plafond de sortie. Vérifie le clipping réel du capteur et du signal."}],"markers":[{"value":16.61,"label":"16.6 %","sub":"−2 stops"},{"value":41.1,"label":"41.1 %","sub":"gris 18 %"},{"value":69.3,"label":"69.3 %","sub":"+2 stops"},{"value":88.25,"label":"88.3 %","sub":"+4 stops"}],"note":"Extended Video Gen 5 dérivé de la LUT Blackmagic officielle. Les repères décrivent la sortie de la LUT, pas la latitude capteur garantie.","refNote":"Le gris 18 % Film Gen 5 (≈38,36 %) ressort à ≈41,10 % après la LUT Extended Video.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","lutFile":"Blackmagic Gen 5 Film to Extended Video.cube","lutSha256":"c1424b30899da95708ef346e1e386496b28fe742b6d29f704f43dfea8f616c5f","method":"Neutral-axis 3D LUT interpolation applied to Film Gen 5 stop references"}}},"bmfilm5":{"label":"Film Gen 5","baseValues":[800],"defaultValue":800,"baseType":"nativeISO","gain":{"type":"cameraSpecific"},"colorScience":"Gen 5","sources":["https://documents.blackmagicdesign.com/UserManuals/BlackmagicURSAMiniManual.pdf"],"waveformGuide":{"kind":"logCurve","status":"FILM GEN 5","signalUnit":"percent","middleGrayPercent":38.36,"stopTable":[{"stop":-4.0,"percent":17.45},{"stop":-3.0,"percent":21.92},{"stop":-2.0,"percent":27.05},{"stop":-1.0,"percent":32.58},{"stop":0.0,"percent":38.36},{"stop":1.0,"percent":44.25},{"stop":2.0,"percent":50.21},{"stop":3.0,"percent":56.2},{"stop":4.0,"percent":62.21},{"stop":5.0,"percent":68.23},{"stop":6.0,"percent":74.25},{"stop":7.0,"percent":80.27},{"stop":8.0,"percent":86.3}],"zones":[{"min":0,"max":13.39,"label":"PIED / TRÈS BASSES","title":"Pied de courbe","text":"Portion basse de Film Gen 5."},{"min":13.39,"max":32.58,"label":"OMBRES LOG","title":"Ombres","text":"Portion logarithmique sous le gris moyen."},{"min":32.58,"max":56.2,"label":"MÉDIUMS","title":"Médiums","text":"Zone centrale autour du gris moyen Blackmagic."},{"min":56.2,"max":74.25,"label":"HAUTES","title":"Hautes lumières","text":"Zone de hautes lumières comprimées par la courbe Log."},{"min":74.25,"max":86.3,"label":"TRÈS HAUTES","title":"Très hautes lumières","text":"Headroom d’encodage élevé ; le capteur peut clipper avant la limite mathématique."},{"min":86.3,"max":100.01,"label":"EXTRÊMES","title":"Extrêmes encodés","text":"Zone très haute de la courbe."}],"markers":[{"value":13.39,"label":"≈13,4 %","sub":"passage pied → log"},{"value":38.36,"label":"38,4 %","sub":"gris moyen"},{"value":44.25,"label":"44,3 %","sub":"+1 stop"},{"value":74.25,"label":"74,3 %","sub":"+6 stops"}],"note":"Blackmagic Film Gen 5 : repères de signal issus de la fonction de transfert Gen 5.","refNote":"Le gris 18 % Film Gen 5 est à ≈38,36 %.","accuracy":"derived","provenance":{"inputCurve":"Blackmagic Film Gen 5","method":"Public Blackmagic Film Gen 5 transfer function evaluated from 18% middle gray"}}}}}},{"id":"ff","name":"Full Frame 36 mm","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":36.0,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0}},{"id":"s35","name":"Super 35","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":24.89,"dof":{"label":"Super 35","cocMm":0.019,"cropToFF":1.5}},{"id":"apsc","name":"APS-C","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":23.5,"dof":{"label":"APS-C","cocMm":0.019,"cropToFF":1.53}},{"id":"mft","name":"Micro 4/3","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":17.3,"dof":{"label":"Micro 4/3","cocMm":0.014,"cropToFF":2.08}},{"id":"oneinch","name":"1 pouce","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":13.2,"dof":{"label":"1 pouce","cocMm":0.011,"cropToFF":2.73}}],"notes":["V1.4 : ajout de la Sony α7S III (DOF, MEDIA et exposition).","α7S III : S-Log3 distingue la limite basse standard Sony ISO 640 du repère opérationnel haute sensibilité BOS/EXPO ISO 12800 ; ne pas assimiler ce couple au sélecteur Base ISO 800/12800 Cine EI de la FX3.","α7S III : S-Cinetone 100/2000 conservé comme repère opérationnel BOS/EXPO, pas comme couple de Base ISO Cine EI publié par Sony.","V1.3 : restauration et formalisation des sensibilités / repères de gain S-Cinetone pour FX30, FX3, FX5 et FX6.","FX5/FX6 : valeurs S-Cinetone issues des Base Sensitivity Custom SDR documentées par Sony.","FX30/FX3 : la valeur basse est documentée comme ISO par défaut Sony ; la valeur haute est conservée comme repère de bascule de gain BOS/EXPO et n’est pas présentée comme Base ISO Cine EI publiée par Sony.","Les capteurs génériques ff/s35/apsc/mft/oneinch n’ont volontairement pas de bloc exposure.","baseType distingue ISO natif/base EI, dual/multi-base et simple ISO de référence (RED).","Ne pas convertir ISO↔dB avec une formule universelle : utiliser gain.type et les données spécifiques caméra.","V1.1: profils MEDIA centralisés + Blackmagic ajoutées à la liste commune.","V1.5 : ajout des profils Blackmagic Video / Extended Video / Film par modèle. Pocket 4K/6K et URSA 12K utilisent Film Gen 5 ; URSA Mini Pro 4.6K G2 reste Film Gen 4. Les ISO natifs sont partagés entre ces rendus.","V1.6 : ajout des waveformGuide Blackmagic pour Video, Extended Video et Film (Gen 5 ou Gen 4 selon le modèle).","Les guides Video/Extended Video sont dérivés des LUT .cube Blackmagic fournies ; les fichiers LUT eux-mêmes ne sont pas redistribués dans la DB.","URSA Mini Pro 4.6K G2 : la transformation LUT v4 est exacte sur l’axe neutre, mais les repères stops Film 4.6K historiques sont marqués approximatifs."]};
let cameraDb=FALLBACK_CAMERA_DB;
let expoCameras=[];

const $ = id => document.getElementById(id);

const inputs = {
  refAperture:$("refAperture"), refIso:$("refIso"), refShutter:$("refShutter"), refNd:$("refNd"),
  newAperture:$("newAperture"), newIso:$("newIso"), newShutter:$("newShutter"), newNd:$("newNd")
};

let sensitivityMode="iso";
let cameraMode="fx30";
let gammaMode="slog3";
let gainBaseIso=800;
let shutterMode="speed";
let currentFps=25;
let manualParam="aperture";
let internalUpdate=false;

const sensitivityState={
  iso:{ref:800,new:1600},
  gain:{ref:0,new:6}
};

const FPS_VALUES=[23.98,24,25,29.97,30,50,60,100,120,200,240];

const APERTURE_THIRDS=[
  1.0,1.1,1.2,1.4,1.6,1.8,2.0,2.2,2.5,2.8,3.2,3.5,4.0,4.5,5.0,5.6,
  6.3,7.1,8.0,9.0,10.0,11.0,13.0,14.0,16.0,18.0,20.0,22.0
];
const ISO_THIRDS=[
  50,64,80,100,125,160,200,250,320,400,500,640,800,1000,1250,1600,
  2000,2500,3200,4000,5000,6400,8000,10000,12800,16000,20000,25600,
  32000,40000,51200
];
const GAIN_VALUES=[];
for(let g=-12;g<=54;g+=1) GAIN_VALUES.push(g);

const SHUTTER_SPEEDS=[25,40,50,100,200,400,800];
const SHUTTER_ANGLES=[45,60,90,120,144,172.8,180,216,270,360];
const ND_STOPS=[0,1,2,3,4,5,6,7,8];


const LAST_CAMERA_BY_BRAND_KEY="bos-expo-last-camera-by-brand-v1";
const METHOD_STORAGE_KEY="bruno-set-tools-exposure-method-v2";

function num(v){return Number(String(v).replace(",",".").replace("+","").replace(" dB","").trim());}
function log2(v){return Math.log(v)/Math.log(2);}
function fmt(v,d=1){
  if(!Number.isFinite(v))return "—";
  const n=Number(v.toFixed(d));
  return String(n).replace(".",",");
}
function fmtStop(v){
  if(!Number.isFinite(v))return "—";
  if(Math.abs(v)<0.005)return "0,0 stop";
  return `${v>0?"+":"−"}${Math.abs(v).toFixed(1).replace(".",",")} stop`;
}
function fmtAperture(v){return Number.isFinite(v)?fmt(v,2):"—";}
function fmtIso(v){return Number.isFinite(v)?String(Math.max(1,Math.round(v))):"—";}
function fmtGain(v,unit=true){
  if(!Number.isFinite(v))return "—";
  const n=Number(v.toFixed(1));
  const txt=`${n>0?"+":""}${String(n).replace(".",",")}`;
  return unit?`${txt} dB`:txt;
}
function formatSensitivity(v){
  return sensitivityMode==="iso"?`${currentSensitivityUnit()} ${fmtIso(v)}`:fmtGain(v,true);
}
function formatThousands(v){
  return Number(v).toLocaleString("fr-FR").replace(/\u202f/g," ");
}
function ndDisplay(v){
  const stops=Number(v);
  if(!Number.isFinite(stops))return "—";
  const factor=Math.pow(2,stops);
  const density=(stops*0.3).toFixed(1).replace(".",",");
  return `${fmt(stops,0)} ${Math.abs(stops-1)<1e-9?"stop":"stops"} · ND${fmt(factor,0)} · ${density}`;
}

function nearestIndex(list,value,logarithmic=true){
  let best=0,dist=Infinity;
  list.forEach((v,i)=>{
    const d=logarithmic&&v>0&&value>0?Math.abs(Math.log(v/value)):Math.abs(v-value);
    if(d<dist){dist=d;best=i;}
  });
  return best;
}
function apertureIndexIfStandard(value){
  if(!(value>0))return -1;
  const i=nearestIndex(APERTURE_THIRDS,value,true);
  const ratio=Math.max(APERTURE_THIRDS[i],value)/Math.min(APERTURE_THIRDS[i],value);
  return ratio<1.025?i:-1;
}
function apertureDeltaStops(refValue,newValue){
  const ri=apertureIndexIfStandard(refValue);
  const ni=apertureIndexIfStandard(newValue);
  if(ri>=0&&ni>=0)return (ri-ni)/3;
  return 2*log2(refValue/newValue);
}
function targetApertureFromStops(refValue,requiredStops){
  const ri=apertureIndexIfStandard(refValue);
  if(ri>=0){
    const targetIndex=Math.round(ri-requiredStops*3);
    return APERTURE_THIRDS[Math.max(0,Math.min(APERTURE_THIRDS.length-1,targetIndex))];
  }
  const raw=refValue/Math.pow(2,requiredStops/2);
  return APERTURE_THIRDS[nearestIndex(APERTURE_THIRDS,raw,true)];
}
function sensitivityValid(v){return sensitivityMode==="iso"?v>0:Number.isFinite(v);}
function sensitivityDeltaStops(refValue,newValue){
  return sensitivityMode==="iso"?log2(newValue/refValue):(newValue-refValue)/6;
}
function targetSensitivityFromStops(refValue,requiredStops){
  if(sensitivityMode==="iso"){
    const raw=refValue*Math.pow(2,requiredStops);
    return ISO_THIRDS[nearestIndex(ISO_THIRDS,raw,true)];
  }
  const raw=refValue+requiredStops*6;
  return GAIN_VALUES[nearestIndex(GAIN_VALUES,raw,false)];
}

function timeFromShutter(v){
  if(!(v>0&&currentFps>0))return NaN;
  return shutterMode==="speed"?1/v:v/(360*currentFps);
}
function shutterEquiv(v){
  if(!(v>0&&currentFps>0))return "—";
  return shutterMode==="speed"
    ?`${fmt(360*currentFps/v,1)}° à ${fmt(currentFps,2)} fps`
    :`1/${fmt(360*currentFps/v,1)} s à ${fmt(currentFps,2)} fps`;
}

function cameraShortLabel(c){
  const name=String(c?.name||c?.id||"");
  const brand=String(c?.brand||"").trim();
  return brand&&name.toLowerCase().startsWith((brand+" ").toLowerCase())?name.slice(brand.length+1):name;
}
function normalizeCameraDb(data){
  if(!data||!Array.isArray(data.cameras))return null;
  const cameras=data.cameras.map(c=>{
    if(c?.expo?.profiles)return {...c,expo:{unit:"ISO",...c.expo}};
    const exposure=c?.exposure;
    if(!exposure?.profiles)return c;
    const profiles={};
    Object.entries(exposure.profiles).forEach(([key,p])=>{
      const bases=Array.isArray(p?.baseValues)?p.baseValues:[];
      profiles[key]={
        ...p,
        nativeBases:bases.map(v=>({iso:Number(v),gainDb:0})),
        referenceValues:Array.isArray(p?.referenceValues)?p.referenceValues.map(Number).filter(v=>v>0):[]
      };
    });
    return {...c,expo:{
      label:cameraShortLabel(c),
      unit:exposure.unit||"ISO",
      defaultProfile:exposure.defaultProfile,
      profiles
    }};
  });
  return {...data,cameras};
}
function validCameraDb(data){
  const normalized=normalizeCameraDb(data);
  return !!(normalized&&normalized.cameras.some(c=>c?.id&&c?.expo?.profiles&&Object.keys(c.expo.profiles).length));
}
function compareDbVersions(a,b){
  const pa=String(a||"0").split(".").map(v=>Number(v)||0),pb=String(b||"0").split(".").map(v=>Number(v)||0);
  for(let i=0;i<Math.max(pa.length,pb.length);i++){const d=(pa[i]||0)-(pb[i]||0);if(d)return d;}
  return 0;
}
function setCameraDb(data){
  const normalized=normalizeCameraDb(data);
  if(!validCameraDb(normalized))return false;
  if(cameraDb&&compareDbVersions(normalized.databaseVersion,cameraDb.databaseVersion)<0)return false;
  cameraDb=normalized;
  expoCameras=normalized.cameras.filter(c=>c?.id&&c?.expo?.profiles&&Object.keys(c.expo.profiles).length);
  if(!expoCameras.length)return false;
  if(!expoCameras.some(c=>c.id===cameraMode))cameraMode=expoCameras[0].id;
  ensureProfileValid();
  ensureGainBaseValid();
  renderBrandButtons();renderCameraButtons();renderGammaButtons();renderGainBaseButtons();
  return true;
}
function loadCachedCameraDb(){
  try{const cached=JSON.parse(localStorage.getItem(CAMERA_DB_CACHE_KEY)||"null");if(cached)setCameraDb(cached);}catch(_){}
}
async function refreshCameraDb(){
  try{
    const res=await fetch(`${CAMERA_DB_URL}?bosdb=${Date.now()}`,{cache:"no-store"});
    if(!res.ok)throw new Error(String(res.status));
    const data=await res.json();
    if(!setCameraDb(data))throw new Error("invalid camera db");
    try{localStorage.setItem(CAMERA_DB_CACHE_KEY,JSON.stringify(data));}catch(_){}
    saveMethodPreferences();updateUI();
  }catch(_){}
}
function currentCamera(){return expoCameras.find(c=>c.id===cameraMode)||expoCameras[0]||null;}
function currentProfile(){return currentCamera()?.expo?.profiles?.[gammaMode]||null;}
function currentSensitivityUnit(){return currentCamera()?.expo?.unit||"ISO";}
function currentGainSupported(){return currentProfile()?.gain?.type==="cameraSpecific";}
function currentReferenceValues(){return (currentProfile()?.referenceValues||[]).map(Number).filter(v=>v>0);}
function profileKeys(){return Object.keys(currentCamera()?.expo?.profiles||{});}
function ensureProfileValid(){
  const cam=currentCamera();if(!cam)return;
  const keys=Object.keys(cam.expo.profiles||{});
  if(!keys.includes(gammaMode))gammaMode=(cam.expo.defaultProfile&&keys.includes(cam.expo.defaultProfile))?cam.expo.defaultProfile:keys[0];
}
function currentBaseIsos(){return (currentProfile()?.nativeBases||[]).map(b=>Number(b.iso)).filter(v=>v>0);}
function isNativeIso(v){return sensitivityMode==="iso"&&currentBaseIsos().some(x=>Math.abs(x-v)<0.001);}
function nearestNativeBase(iso){
  const bases=currentBaseIsos();if(!bases.length)return null;
  return bases.reduce((best,b)=>Math.abs(Math.log(b/iso))<Math.abs(Math.log(best/iso))?b:best,bases[0]);
}
function ensureGainBaseValid(preferred){
  const bases=currentBaseIsos();
  if(!bases.length){gainBaseIso=null;return;}
  if(preferred>0)gainBaseIso=nearestNativeBase(preferred);
  else if(!bases.includes(Number(gainBaseIso)))gainBaseIso=bases[0];
}
function isoToGainDb(iso){return gainBaseIso>0&&iso>0?6*log2(iso/gainBaseIso):NaN;}
function gainDbToIso(gain){return gainBaseIso>0&&Number.isFinite(gain)?gainBaseIso*Math.pow(2,gain/6):NaN;}
function snapIso(v){return ISO_THIRDS[nearestIndex(ISO_THIRDS,v,true)];}
function cameraBrand(c){
  return String(c?.brand||c?.group||"Autre").trim()||"Autre";
}
function cameraBrands(){
  const seen=new Set(),brands=[];
  expoCameras.forEach(c=>{const brand=cameraBrand(c);if(!seen.has(brand)){seen.add(brand);brands.push(brand);}});
  return brands;
}
function renderBrandButtons(){
  const host=$("cameraBrandMode");if(!host)return;host.innerHTML="";
  const activeBrand=cameraBrand(currentCamera());
  cameraBrands().forEach(brand=>{
    const b=document.createElement("button");b.type="button";b.dataset.brand=brand;b.textContent=brand;b.classList.toggle("active",brand===activeBrand);host.appendChild(b);
  });
}
function camerasForBrand(brand){
  return expoCameras.filter(c=>cameraBrand(c)===brand);
}
function getLastCameraForBrand(brand){
  try{
    const saved=JSON.parse(localStorage.getItem(LAST_CAMERA_BY_BRAND_KEY)||"{}");
    const id=saved?.[brand];
    return camerasForBrand(brand).some(c=>c.id===id)?id:null;
  }catch(_){return null;}
}
function rememberCameraForBrand(camera){
  if(!camera)return;
  try{
    const saved=JSON.parse(localStorage.getItem(LAST_CAMERA_BY_BRAND_KEY)||"{}");
    saved[cameraBrand(camera)]=camera.id;
    localStorage.setItem(LAST_CAMERA_BY_BRAND_KEY,JSON.stringify(saved));
  }catch(_){}
}
function renderCameraButtons(){
  const host=$("cameraMode");if(!host)return;host.innerHTML="";
  const cam=currentCamera();
  const summary=$("cameraSettingsSummary");
  if(summary&&cam)summary.textContent=cam.expo?.label||cam.name||cameraShortLabel(cam);
  const activeBrand=cameraBrand(cam);
  camerasForBrand(activeBrand).forEach(c=>{
    const option=document.createElement("option");
    option.value=c.id;
    option.textContent=c.expo.label||cameraShortLabel(c);
    option.selected=c.id===cameraMode;
    host.appendChild(option);
  });
  host.value=cameraMode;
  host.title=host.options[host.selectedIndex]?.textContent||"";
}
function renderGammaButtons(){
  const host=$("gammaMode"),cam=currentCamera();if(!host||!cam)return;host.innerHTML="";
  Object.entries(cam.expo.profiles||{}).forEach(([key,p])=>{const b=document.createElement("button");b.type="button";b.dataset.value=key;b.textContent=p.label||key;b.classList.toggle("active",key===gammaMode);host.appendChild(b);});
}
function renderGainBaseButtons(){
  const row=$("gainBaseRow"),host=$("gainBaseMode"),help=$("gainBaseHelp");if(!row||!host)return;
  const bases=currentBaseIsos(),gainSupported=currentGainSupported();
  const gainBtn=$("sensitivityMode")?.querySelector('button[data-value="gain"]');if(gainBtn)gainBtn.disabled=!bases.length||!gainSupported;
  row.classList.toggle("hidden",sensitivityMode!=="gain"||!bases.length||!gainSupported);host.innerHTML="";
  bases.forEach(iso=>{const b=document.createElement("button");b.type="button";b.dataset.value=String(iso);b.textContent=`ISO ${formatThousands(iso)}`;b.classList.toggle("active",Number(gainBaseIso)===iso);host.appendChild(b);});
  if(help)help.textContent=bases.length>1?"0 dB = base native sélectionnée · change de base sans changer l’exposition équivalente":"0 dB = base native de ce profil";
}

function saveMethodPreferences(){
  try{
    localStorage.setItem(METHOD_STORAGE_KEY,JSON.stringify({
      cameraMode,gammaMode,sensitivityMode,shutterMode,currentFps,gainBaseIso
    }));
  }catch(_){}
}
function loadMethodPreferences(){
  try{
    const saved=JSON.parse(localStorage.getItem(METHOD_STORAGE_KEY)||"null");
    if(!saved)return;
    const legacyCameraMap={FX30:"fx30",FX3:"fx3",FX5:"fx5",FX6:"fx6"};
    const wantedCamera=legacyCameraMap[saved.cameraMode]||saved.cameraMode;
    if(expoCameras.some(c=>c.id===wantedCamera))cameraMode=wantedCamera;
    ensureProfileValid();
    if(profileKeys().includes(saved.gammaMode))gammaMode=saved.gammaMode;
    if(["iso","gain"].includes(saved.sensitivityMode))sensitivityMode=saved.sensitivityMode;
    if(Number(saved.gainBaseIso)>0)gainBaseIso=Number(saved.gainBaseIso);
    ensureGainBaseValid();
    if(["speed","angle"].includes(saved.shutterMode))shutterMode=saved.shutterMode;
    if(FPS_VALUES.includes(Number(saved.currentFps)))currentFps=Number(saved.currentFps);

    inputs.refIso.value=String(sensitivityState[sensitivityMode].ref);
    inputs.newIso.value=String(sensitivityState[sensitivityMode].new);
    if(shutterMode==="angle"){
      inputs.refShutter.value="180";
      inputs.newShutter.value="180";
    }
  }catch(_){}
}
function syncMethodButtons(){
  renderBrandButtons();renderCameraButtons();renderGammaButtons();renderGainBaseButtons();
  [["gammaMode",gammaMode],["sensitivityMode",sensitivityMode],["shutterMode",shutterMode]]
    .forEach(([id,val])=>{
      $(id)?.querySelectorAll("button[data-value]").forEach(b=>b.classList.toggle("active",b.dataset.value===String(val)));
    });
  $("fpsRow").classList.toggle("hidden",shutterMode!=="angle");
  $("refShutterUnit").textContent=shutterMode==="speed"?"1/x s":"degrés";
  $("newShutterUnit").textContent=shutterMode==="speed"?"1/x s":"degrés";
}

function updateBaseIsoNote(){
  const bases=currentBaseIsos(),refs=currentReferenceValues(),note=$("baseIsoNote"),unit=currentSensitivityUnit();
  if(!note)return;
  const cam=currentCamera()?.expo?.label||currentCamera()?.name||cameraMode;
  const profile=currentProfile()?.label||gammaMode;
  if(bases.length){
    note.classList.remove("no-base");
    const title=unit==="EI"?"Base EI":"ISO natifs / Lo-Hi";
    note.innerHTML=`<span class="base-dot"></span><span>${title} · ${cam} · ${profile} : ${bases.map(formatThousands).join(" / ")}</span>`;
  }else if(refs.length){
    note.classList.add("no-base");
    note.innerHTML=`<span class="base-dot"></span><span>${cam} · ${profile} : ${unit} de référence ${refs.map(formatThousands).join(" / ")} (non marqué comme natif)</span>`;
  }else{
    note.classList.add("no-base");
    note.innerHTML=`<span class="base-dot"></span><span>${cam} · ${profile} : repères de sensibilité non renseignés</span>`;
  }
}

function calcDeltas(){
  const rN=num(inputs.refAperture.value),nN=num(inputs.newAperture.value);
  const rS=num(inputs.refIso.value),nS=num(inputs.newIso.value);
  const rSh=num(inputs.refShutter.value),nSh=num(inputs.newShutter.value);
  const rNd=num(inputs.refNd.value),nNd=num(inputs.newNd.value);
  if(!(rN>0&&nN>0&&sensitivityValid(rS)&&sensitivityValid(nS)&&rSh>0&&nSh>0&&rNd>=0&&nNd>=0))return null;
  const dA=apertureDeltaStops(rN,nN);
  const dI=sensitivityDeltaStops(rS,nS);
  const dS=log2(timeFromShutter(nSh)/timeFromShutter(rSh));
  const dN=-(nNd-rNd);
  return {dA,dI,dS,dN,total:dA+dI+dS+dN};
}

function solveAuto(){
  const rN=num(inputs.refAperture.value),rS=num(inputs.refIso.value);
  const rSh=num(inputs.refShutter.value),nSh=num(inputs.newShutter.value);
  const rNd=num(inputs.refNd.value),nNd=num(inputs.newNd.value);
  if(!(rN>0&&sensitivityValid(rS)&&rSh>0&&nSh>0&&rNd>=0&&nNd>=0))return;
  const tR=timeFromShutter(rSh),tN=timeFromShutter(nSh);
  if(!(tR>0&&tN>0))return;

  internalUpdate=true;
  if(manualParam==="aperture"){
    const nN=num(inputs.newAperture.value);
    if(nN>0){
      const dA=apertureDeltaStops(rN,nN);
      const dS=log2(tN/tR);
      const dN=-(nNd-rNd);
      const target=targetSensitivityFromStops(rS,-(dA+dS+dN));
      inputs.newIso.value=sensitivityMode==="iso"?fmtIso(target):fmt(target,1);
    }
  }else{
    const nS=num(inputs.newIso.value);
    if(sensitivityValid(nS)){
      const dI=sensitivityDeltaStops(rS,nS);
      const dS=log2(tN/tR);
      const dN=-(nNd-rNd);
      inputs.newAperture.value=fmtAperture(targetApertureFromStops(rN,-(dI+dS+dN)));
    }
  }
  internalUpdate=false;
}

function updateModes(){
  const apAuto=manualParam==="sensitivity";
  $("apertureBadge").textContent=apAuto?"AUTO":"MANUEL";
  $("apertureBadge").className=`mode-badge ${apAuto?"auto":"manual"}`;
  $("sensitivityBadge").textContent=apAuto?"MANUEL":"AUTO";
  $("sensitivityBadge").className=`mode-badge ${apAuto?"manual":"auto"}`;
  $("apertureCard").classList.toggle("auto-card",apAuto);
  $("sensitivityCard").classList.toggle("auto-card",!apAuto);
}

function updateSensitivityLabels(){
  const gain=sensitivityMode==="gain",unit=currentSensitivityUnit();
  const isoBtn=$("sensitivityMode")?.querySelector('button[data-value="iso"]');if(isoBtn)isoBtn.textContent=unit;
  $("refSensitivityLabel").textContent=gain?"Gain":unit;
  $("refSensitivityUnit").textContent=gain?(gainBaseIso?`dB · base ${unit} ${formatThousands(gainBaseIso)}`:"dB"):"sensibilité";
  $("newSensitivityLabel").textContent=gain?"GAIN":unit.toUpperCase();
  $("newSensitivityUnit").textContent=gain?(gainBaseIso?`dB · base ${unit} ${formatThousands(gainBaseIso)}`:"dB · compensation"):"compensation";
  $("quickSensitivityLabel").textContent=gain?"Gain":unit;
}

function updateSelectDisplays(){
  $("refApertureSelect").innerHTML=`f/${fmtAperture(num(inputs.refAperture.value))} <span>⌄</span>`;
  $("newApertureSelect").innerHTML=`f/${fmtAperture(num(inputs.newAperture.value))} <span>⌄</span>`;

  $("refSensitivitySelect").innerHTML=`${formatSensitivity(num(inputs.refIso.value))} <span>⌄</span>`;
  $("newSensitivitySelect").innerHTML=`${formatSensitivity(num(inputs.newIso.value))} <span>⌄</span>`;

  const rSh=num(inputs.refShutter.value),nSh=num(inputs.newShutter.value);
  $("refShutterSelect").innerHTML=shutterMode==="speed"
    ?`1/${fmt(rSh,1)} s <span>⌄</span>`:`${fmt(rSh,1)}° <span>⌄</span>`;
  $("newShutterSelect").innerHTML=shutterMode==="speed"
    ?`1/${fmt(nSh,1)} s <span>⌄</span>`:`${fmt(nSh,1)}° <span>⌄</span>`;

  const rNd=num(inputs.refNd.value),nNd=num(inputs.newNd.value);
  $("refNdSelect").innerHTML=`${ndDisplay(rNd)} <span>⌄</span>`;
  $("newNdSelect").innerHTML=`${ndDisplay(nNd)} <span>⌄</span>`;

  $("fpsSelect").innerHTML=`${fmt(currentFps,2)} fps <span>⌄</span>`;
}

function updateUI(){
  if(sensitivityMode!=="iso" || shutterMode!=="speed") forceSimplifiedExpoModes();
  $("refShutterEquiv").textContent=shutterEquiv(num(inputs.refShutter.value));
  $("newShutterEquiv").textContent=shutterEquiv(num(inputs.newShutter.value));
  solveAuto();
  updateModes();
  updateSensitivityLabels();
  updateBaseIsoNote();
  updateSelectDisplays();

  const d=calcDeltas();
  if(!d)return;

  const rN=num(inputs.refAperture.value),nN=num(inputs.newAperture.value);
  const rS=num(inputs.refIso.value),nS=num(inputs.newIso.value);

  if(manualParam==="aperture"){
    $("resultValue").textContent=formatSensitivity(nS);
    $("equivMessage").textContent=`f/${fmtAperture(nN)} → ${formatSensitivity(nS)} pour conserver l’exposition.`;
  }else{
    $("resultValue").textContent=`f/${fmtAperture(nN)}`;
    $("equivMessage").textContent=`${formatSensitivity(nS)} → f/${fmtAperture(nN)} pour conserver l’exposition.`;
  }

  $("resultState").textContent=Math.abs(d.total)<0.08?"EXPOSITION ÉQUIVALENTE":`${fmtStop(d.total)} D’ÉCART APRÈS ARRONDI`;

  const sensDetail=sensitivityMode==="iso"
    ?`${currentSensitivityUnit()} ${fmtIso(rS)} → ${fmtIso(nS)}`
    :`${fmtGain(rS)} → ${fmtGain(nS)}`;

  $("resultDetail").textContent=
    `f/${fmtAperture(rN)} → f/${fmtAperture(nN)} : ${fmtStop(d.dA)} · ${sensDetail} : ${fmtStop(d.dI)}`;

  $("quickAperture").textContent=fmtStop(d.dA);
  $("quickIso").textContent=fmtStop(d.dI);
  $("quickShutter").textContent=fmtStop(d.dS);
  $("quickNd").textContent=fmtStop(d.dN);
  renderScenes();
}


// ---------- Situations ----------
const SCENES_STORAGE_KEY="bos-expo-situations-v2";
let scenes=[];
let situation1Name="Situation 1";

function escapeHtml(value){
  return String(value??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function normalizeSituationSettings(v){
  const ref=(typeof simpleReferenceValues==="function")?simpleReferenceValues():{aperture:2.8,iso:800,shutter:50,nd:0};
  const s=v&&typeof v==="object"?v:{};
  return {
    aperture:Number(s.aperture)>0?Number(s.aperture):ref.aperture,
    iso:Number(s.iso)>0?Number(s.iso):ref.iso,
    shutter:Number(s.shutter)>0?Number(s.shutter):ref.shutter,
    nd:Number(s.nd)>=0?Number(s.nd):ref.nd
  };
}
function loadScenes(){
  try{
    const saved=JSON.parse(localStorage.getItem(SCENES_STORAGE_KEY)||"null");
    if(saved&&typeof saved==="object"&&!Array.isArray(saved)){
      situation1Name=String(saved.situation1Name||"Situation 1");
      scenes=Array.isArray(saved.scenes)?saved.scenes.filter(s=>s&&typeof s==="object").map((s,i)=>({
        id:String(s.id||`situation-${Date.now()}-${i}`),
        name:String(s.name||`Situation ${i+2}`),
        settings:normalizeSituationSettings(s.settings)
      })):[];
    }else{
      scenes=[];
      situation1Name="Situation 1";
    }
  }catch(_){scenes=[];situation1Name="Situation 1";}
  syncSituation1NameUI();
}
function saveScenes(){
  try{localStorage.setItem(SCENES_STORAGE_KEY,JSON.stringify({situation1Name,scenes}));}catch(_){}
}
function syncSituation1NameUI(){
  const el=$("situation1Name");
  if(el&&document.activeElement!==el)el.value=situation1Name||"Situation 1";
}
function situation1Object(){
  return {id:"situation-1",name:situation1Name||"Situation 1",settings:simpleReferenceValues()};
}
function allSituations(){return [situation1Object(),...scenes];}
function situationById(id){
  if(id==="situation-1")return situation1Object();
  return scenes.find(s=>s.id===id)||null;
}
function situationPickerTarget(id,key){return `situation|${id}|${key}`;}
function parseSituationPickerTarget(target){
  const m=/^situation\|([^|]+)\|(aperture|iso|shutter|nd)$/.exec(String(target||""));
  return m?{id:m[1],key:m[2]}:null;
}
function situationSettingText(key,value){return simpleValueText(key,value);}
function situationTotal(settings){return simpleTotal(settings);}
function situationDelta(fromSettings,toSettings){return situationTotal(toSettings)-situationTotal(fromSettings);}
function transitionCandidateValues(key){
  if(key==="aperture")return simpleAvailableApertureValues().filter(v=>v>=simpleApertureMin-1e-9&&v<=simpleApertureMax+1e-9);
  if(key==="iso")return simpleAvailableIsoValues().filter(v=>v>=simpleIsoMin-1e-9&&v<=simpleIsoMax+1e-9);
  if(key==="shutter")return (shutterMode==="speed"?SHUTTER_SPEEDS:SHUTTER_ANGLES).slice();
  if(key==="nd")return ND_STOPS.slice();
  return [];
}
function transitionSingleProposal(key,fromSettings,delta){
  const start=Number(fromSettings[key]);
  const vals=transitionCandidateValues(key);
  if(!Number.isFinite(start)||!vals.length)return {key,ok:false,text:"Impossible avec les réglages actuels"};
  const startStop=simpleStopFor(key,start);
  const desired=startStop+delta;
  let best=null,bestDiff=Infinity;
  vals.forEach(v=>{
    const d=Math.abs(simpleStopFor(key,v)-desired);
    if(d<bestDiff){bestDiff=d;best=v;}
  });
  const move=simpleStopFor(key,best)-startStop;
  const residual=delta-move;
  const exact=Math.abs(residual)<0.08;
  let action="";
  if(key==="aperture")action=best>start?`Fermer le diaph à ${simpleValueText(key,best)}`:best<start?`Ouvrir le diaph à ${simpleValueText(key,best)}`:`Garder le diaph à ${simpleValueText(key,best)}`;
  if(key==="iso")action=best>start?`Monter les ${currentSensitivityUnit()} à ${simpleValueText(key,best)}`:best<start?`Baisser les ${currentSensitivityUnit()} à ${simpleValueText(key,best)}`:`Garder ${simpleValueText(key,best)}`;
  if(key==="nd")action=best>start?`Ajouter du ND jusqu’à ${simpleValueText(key,best)}`:best<start?`Retirer du ND jusqu’à ${simpleValueText(key,best)}`:`Garder ${simpleValueText(key,best)}`;
  if(key==="shutter")action=`Passer le shutter à ${simpleValueText(key,best)}`;
  const label={aperture:"DIAPH",iso:currentSensitivityUnit().toUpperCase(),nd:"ND",shutter:"SHUTTER"}[key];
  return {key,label,best,residual,ok:exact,text:action,detail:exact?"Équivalent":`Seul : reste ${fmtStop(residual).replace(/^\+/,"")}`};
}
function transitionDescription(delta){
  if(Math.abs(delta)<0.08)return "Même exposition caméra";
  return `${delta>0?"+":"−"}${Math.abs(delta).toLocaleString("fr-FR",{maximumFractionDigits:2})} stop${Math.abs(delta)>=2?"s":""} à compenser`;
}
function transitionCard(from,to,kind="sequence"){
  const delta=situationDelta(from.settings,to.settings);
  const proposals=["aperture","iso","nd","shutter"].map(k=>transitionSingleProposal(k,from.settings,delta));
  const fromName=escapeHtml(from.name||"Situation");
  const toName=escapeHtml(to.name||"Situation");
  const direct=kind==="direct"?'<span class="transition-direct-badge">DIRECT</span>':'';
  const options=proposals.map(p=>`<div class="transition-option ${p.ok?"ok":"limit"}"><span class="transition-option-label">${p.label}</span><strong>${escapeHtml(p.text)}</strong><small>${escapeHtml(p.detail||"")}</small></div>`).join("");
  return `<div class="situation-transition ${kind}">
    <div class="transition-head"><div><span>PASSAGE</span><strong>${fromName} → ${toName}</strong></div><div class="transition-delta">${direct}${escapeHtml(transitionDescription(delta))}</div></div>
    ${Math.abs(delta)<0.08?'<div class="transition-same">Aucun changement d’exposition nécessaire.</div>':`<div class="transition-intro">Tu peux compenser uniquement avec :</div><div class="transition-options">${options}</div>`}
  </div>`;
}
function renderScenes(){
  const host=$("scenesList"),empty=$("sceneEmpty");if(!host||!empty)return;
  syncSituation1NameUI();
  empty.hidden=scenes.length>0;
  host.innerHTML="";
  const all=allSituations();

  // Situation 1 is always shown here as a read-only recap.
  // Its name and settings are edited only in the main Situation 1 block above.
  const base=all[0];
  const baseV=base.settings;
  const baseCard=document.createElement("div");
  baseCard.className="scene-card situation-card situation-settings-card situation-base-recap";
  baseCard.innerHTML=`
    <div class="scene-card-head situation-card-head-v2">
      <div class="situation-number-block">
        <div class="situation-recap-kicker"><span>SITUATION 1</span><span class="situation-base-badge">BASE</span></div>
        <strong class="situation-recap-name">${escapeHtml(base.name||"Situation 1")}</strong>
      </div>
    </div>
    <div class="simple-section-note situation-setting-note">Réglage de référence · modifiable dans Situation 1 plus haut.</div>
    <div class="simple-reference-grid situation-setting-grid">
      <div class="simple-reference-value situation-readonly-value"><span>Diaph</span><strong>${situationSettingText("aperture",baseV.aperture)}</strong></div>
      <div class="simple-reference-value situation-readonly-value"><span>${currentSensitivityUnit()}</span><strong>${situationSettingText("iso",baseV.iso)}</strong></div>
      <div class="simple-reference-value situation-readonly-value"><span>Shutter</span><strong>${situationSettingText("shutter",baseV.shutter)}</strong></div>
      <div class="simple-reference-value situation-readonly-value"><span>ND</span><strong>${situationSettingText("nd",baseV.nd)}</strong></div>
    </div>`;
  host.appendChild(baseCard);

  scenes.forEach((scene,index)=>{
    scene.settings=normalizeSituationSettings(scene.settings);
    const number=index+2;
    const safeName=escapeHtml(scene.name||`Situation ${number}`);
    const v=scene.settings;
    const previous=all[index]; // situation immediately before this one
    const to={...scene,name:scene.name||`Situation ${number}`};
    const directNeeded=number>2;
    const card=document.createElement("div");
    card.className="scene-card situation-card situation-settings-card";
    card.dataset.sceneId=scene.id;
    card.innerHTML=`
      <div class="scene-card-head situation-card-head-v2">
        <div class="situation-number-block"><span>SITUATION ${number}</span><input class="scene-name" data-scene-name value="${safeName}" aria-label="Nom de la situation ${number}" /></div>
        <button class="scene-remove" data-scene-remove type="button" aria-label="Supprimer la situation">×</button>
      </div>
      <div class="simple-section-note situation-setting-note">Réglage donnant une exposition juste dans cette situation.</div>
      <div class="simple-reference-grid situation-setting-grid">
        <button type="button" class="simple-reference-value" data-picker-target="${situationPickerTarget(scene.id,"aperture")}"><span>Diaph</span><strong>${situationSettingText("aperture",v.aperture)}</strong></button>
        <button type="button" class="simple-reference-value" data-picker-target="${situationPickerTarget(scene.id,"iso")}"><span>${currentSensitivityUnit()}</span><strong>${situationSettingText("iso",v.iso)}</strong></button>
        <button type="button" class="simple-reference-value" data-picker-target="${situationPickerTarget(scene.id,"shutter")}"><span>Shutter</span><strong>${situationSettingText("shutter",v.shutter)}</strong></button>
        <button type="button" class="simple-reference-value" data-picker-target="${situationPickerTarget(scene.id,"nd")}"><span>ND</span><strong>${situationSettingText("nd",v.nd)}</strong></button>
      </div>
      <div class="situation-transitions">
        ${transitionCard(previous,to,"sequence")}
        ${directNeeded?transitionCard(base,to,"direct"):""}
      </div>`;
    host.appendChild(card);
  });
}
function addScene(){
  const number=scenes.length+2;
  const ref=simpleReferenceValues();
  scenes.push({
    id:`situation-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,
    name:`Situation ${number}`,
    settings:normalizeSituationSettings(ref)
  });
  saveScenes();renderScenes();
}

// ---------- Picker ----------
const pickerDialog=$("valuePickerDialog");
const pickerGrid=$("pickerGrid");
const pickerTitle=$("pickerTitle");
const pickerNativeLegend=$("pickerNativeLegend");
let activePickerTarget=null;

function pickerConfig(target){
  const sit=parseSituationPickerTarget(target);
  const key=sit?.key||(
    target==="refAperture"||target==="newAperture"?"aperture":
    target==="refIso"||target==="newIso"?"iso":
    target==="refShutter"||target==="newShutter"?"shutter":
    target==="refNd"||target==="newNd"?"nd":null
  );
  if(key==="aperture"){
    return {title:"Ouverture",values:simpleAvailableApertureValues().filter(v=>v>=simpleApertureMin-1e-9&&v<=simpleApertureMax+1e-9),label:v=>`f/${fmt(v,2)}`};
  }
  if(key==="iso"){
    const unit=currentSensitivityUnit();
    if(sensitivityMode==="gain"){
      const vals=GAIN_VALUES.filter(v=>{const iso=gainBaseIso>0?gainDbToIso(v):NaN;return iso>=simpleIsoMin-1e-9&&iso<=simpleIsoMax+1e-9;});
      return {title:"Gain",values:vals,label:v=>fmtGain(v,true)};
    }
    const vals=simpleAvailableIsoValues().filter(v=>v>=simpleIsoMin-1e-9&&v<=simpleIsoMax+1e-9);
    return {title:unit,values:vals,label:v=>`${unit} ${formatThousands(v)}`,native:v=>isNativeIso(v)};
  }
  if(key==="shutter"){
    return shutterMode==="speed"
      ?{title:"Shutter — vitesse",values:SHUTTER_SPEEDS,label:v=>`1/${fmt(v,1)} s`}
      :{title:"Shutter — angle",values:SHUTTER_ANGLES,label:v=>`${fmt(v,1)}°`};
  }
  if(key==="nd")return {title:"ND",values:ND_STOPS,label:v=>ndDisplay(v)};
  if(target==="fps")return {title:"Cadence",values:FPS_VALUES,label:v=>`${fmt(v,2)} fps`};
  return null;
}
function situationPickerCurrent(target){
  const sit=parseSituationPickerTarget(target);if(!sit)return null;
  const scene=situationById(sit.id);if(!scene)return null;
  const value=Number(scene.settings?.[sit.key]);
  if(sit.key==="iso"&&sensitivityMode==="gain"&&gainBaseIso>0)return isoToGainDb(value);
  return value;
}

function openPicker(target){
  const cfg=pickerConfig(target);
  if(!cfg)return;
  activePickerTarget=target;
  pickerTitle.textContent=cfg.title;
  const isIsoPicker=!!cfg.native;
  pickerGrid.classList.toggle("iso-picker",isIsoPicker);
  pickerNativeLegend?.classList.toggle("hidden",!isIsoPicker);

  const situationCurrent=situationPickerCurrent(target);
  const current=situationCurrent!==null?situationCurrent:(target==="fps"?currentFps:num(inputs[target].value));
  pickerGrid.innerHTML=cfg.values.map(v=>{
    const selected=Math.abs(v-current)<0.001?" selected":"";
    const native=cfg.native?.(v)?" native-choice":"";
    return `<button type="button" class="picker-option${selected}${native}" data-value="${v}">${cfg.label(v)}</button>`;
  }).join("");

  pickerDialog.showModal();

  requestAnimationFrame(()=>{
    pickerGrid.querySelector(".picker-option.selected")?.scrollIntoView({block:"center",inline:"nearest"});
  });
}

document.addEventListener("click",e=>{
  const trigger=e.target.closest("[data-picker-target]");
  if(trigger){
    e.preventDefault();
    openPicker(trigger.dataset.pickerTarget);
  }
});

pickerGrid.addEventListener("click",e=>{
  const btn=e.target.closest(".picker-option[data-value]");
  if(!btn||!activePickerTarget)return;
  const v=Number(btn.dataset.value);

  const sitTarget=parseSituationPickerTarget(activePickerTarget);
  if(sitTarget){
    const scene=scenes.find(s=>s.id===sitTarget.id);
    if(scene){
      scene.settings=normalizeSituationSettings(scene.settings);
      scene.settings[sitTarget.key]=(sitTarget.key==="iso"&&sensitivityMode==="gain"&&gainBaseIso>0)?gainDbToIso(v):v;
      saveScenes();
    }
    pickerDialog.close();
    renderScenes();
    return;
  }

  let simpleChangedKey=null;
  let referenceEdited=false;
  if(activePickerTarget==="fps"){
    currentFps=v;
    saveMethodPreferences();
  }else{
    inputs[activePickerTarget].value=String(v);
    if(activePickerTarget==="newAperture"){manualParam="aperture";simpleChangedKey="aperture";}
    if(activePickerTarget==="newIso"){manualParam="sensitivity";simpleChangedKey="iso";}
    if(activePickerTarget==="newShutter")simpleChangedKey="shutter";
    if(activePickerTarget==="newNd")simpleChangedKey="nd";
    if(activePickerTarget==="refAperture"||activePickerTarget==="refIso"||activePickerTarget==="refShutter"||activePickerTarget==="refNd")referenceEdited=true;
  }

  pickerDialog.close();
  if(referenceEdited){
    simpleSetCurrentFromValues(simpleReferenceValues());
    simpleLastRecap=null;
    updateUI();
    simpleSetCalcSummary("Référence modifiée : CALCUL a été réaligné automatiquement.","ok");
  }else{
    updateUI();
    if(simpleChangedKey)simpleCalculateNow(simpleChangedKey);
  }
});

$("pickerClose").addEventListener("click",()=>pickerDialog.close());
pickerDialog.addEventListener("click",e=>{if(e.target===pickerDialog)pickerDialog.close();});

function applyCameraSelection(nextCameraId){
  if(!expoCameras.some(c=>c.id===nextCameraId)||nextCameraId===cameraMode){
    renderBrandButtons();renderCameraButtons();return;
  }
  const oldBase=gainBaseIso,oldRef=num(inputs.refIso.value),oldNew=num(inputs.newIso.value);
  const isoRef=sensitivityMode==="gain"&&oldBase?oldBase*Math.pow(2,oldRef/6):oldRef;
  const isoNew=sensitivityMode==="gain"&&oldBase?oldBase*Math.pow(2,oldNew/6):oldNew;
  cameraMode=nextCameraId;rememberCameraForBrand(currentCamera());ensureProfileValid();ensureGainBaseValid(isoRef);
  if(sensitivityMode==="gain"){
    if(gainBaseIso&&currentGainSupported()){inputs.refIso.value=fmt(isoToGainDb(isoRef),1);inputs.newIso.value=fmt(isoToGainDb(isoNew),1);}
    else{sensitivityMode="iso";inputs.refIso.value=String(snapIso(isoRef));inputs.newIso.value=String(snapIso(isoNew));}
  }
  renderBrandButtons();renderCameraButtons();renderGammaButtons();renderGainBaseButtons();
  saveMethodPreferences();updateUI();
}

// ---------- Method controls ----------
$("cameraBrandMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-brand]");if(!btn)return;
  const brand=btn.dataset.brand;
  const remembered=getLastCameraForBrand(brand);
  const first=camerasForBrand(brand)[0];
  if(remembered)applyCameraSelection(remembered);
  else if(first)applyCameraSelection(first.id);
});
$("cameraMode").addEventListener("change",e=>{
  applyCameraSelection(e.target.value);
});
$("gammaMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn)return;
  const oldBase=gainBaseIso,oldRef=num(inputs.refIso.value),oldNew=num(inputs.newIso.value);
  const isoRef=sensitivityMode==="gain"&&oldBase?oldBase*Math.pow(2,oldRef/6):oldRef;
  const isoNew=sensitivityMode==="gain"&&oldBase?oldBase*Math.pow(2,oldNew/6):oldNew;
  gammaMode=btn.dataset.value;ensureGainBaseValid(isoRef);
  if(sensitivityMode==="gain"){
    if(gainBaseIso&&currentGainSupported()){inputs.refIso.value=fmt(isoToGainDb(isoRef),1);inputs.newIso.value=fmt(isoToGainDb(isoNew),1);}
    else{sensitivityMode="iso";inputs.refIso.value=String(snapIso(isoRef));inputs.newIso.value=String(snapIso(isoNew));}
  }
  renderGammaButtons();renderGainBaseButtons();
  saveMethodPreferences(); updateUI();
});
$("sensitivityMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn||btn.dataset.value===sensitivityMode)return;
  const next=btn.dataset.value;
  if(next==="gain"){
    const bases=currentBaseIsos();
    if(!bases.length||!currentGainSupported()){updateBaseIsoNote();return;}
    const refIso=num(inputs.refIso.value),newIso=num(inputs.newIso.value);
    ensureGainBaseValid(refIso);
    sensitivityState.iso={ref:refIso,new:newIso};
    sensitivityMode="gain";
    inputs.refIso.value=fmt(isoToGainDb(refIso),1);
    inputs.newIso.value=fmt(isoToGainDb(newIso),1);
  }else{
    const refGain=num(inputs.refIso.value),newGain=num(inputs.newIso.value);
    sensitivityState.gain={ref:refGain,new:newGain};
    const refIso=gainDbToIso(refGain),newIso=gainDbToIso(newGain);
    sensitivityMode="iso";
    inputs.refIso.value=String(snapIso(refIso));
    inputs.newIso.value=String(snapIso(newIso));
  }
  manualParam="aperture";
  syncMethodButtons();saveMethodPreferences();updateUI();
});
$("gainBaseMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]");if(!btn||sensitivityMode!=="gain")return;
  const oldBase=Number(gainBaseIso),nextBase=Number(btn.dataset.value);if(!(oldBase>0&&nextBase>0)||oldBase===nextBase)return;
  const refIso=oldBase*Math.pow(2,num(inputs.refIso.value)/6);
  const newIso=oldBase*Math.pow(2,num(inputs.newIso.value)/6);
  gainBaseIso=nextBase;
  inputs.refIso.value=fmt(isoToGainDb(refIso),1);
  inputs.newIso.value=fmt(isoToGainDb(newIso),1);
  renderGainBaseButtons();saveMethodPreferences();updateUI();
});
$("shutterMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn)return;
  const next=btn.dataset.value;
  if(next===shutterMode)return;

  ["refShutter","newShutter"].forEach(id=>{
    const v=num(inputs[id].value);
    if(v>0)inputs[id].value=fmt(360*currentFps/v,1);
  });

  shutterMode=next;
  $("shutterMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  $("fpsRow").classList.toggle("hidden",next!=="angle");
  $("refShutterUnit").textContent=next==="speed"?"1/x s":"degrés";
  $("newShutterUnit").textContent=next==="speed"?"1/x s":"degrés";
  saveMethodPreferences(); updateUI();
});

$("copyRefBtn").addEventListener("click",()=>{
  inputs.newAperture.value=inputs.refAperture.value;
  inputs.newIso.value=inputs.refIso.value;
  inputs.newShutter.value=inputs.refShutter.value;
  inputs.newNd.value=inputs.refNd.value;
  manualParam="aperture";
  updateUI();
});

$("resetBtn").addEventListener("click",()=>{
  sensitivityMode="iso"; cameraMode="fx30"; gammaMode="slog3"; gainBaseIso=800; shutterMode="speed"; currentFps=25;
  manualParam="aperture";
  sensitivityState.iso={ref:800,new:1600};
  sensitivityState.gain={ref:0,new:6};

  inputs.refAperture.value="2.8"; inputs.refIso.value="800"; inputs.refShutter.value="50"; inputs.refNd.value="0";
  inputs.newAperture.value="4"; inputs.newIso.value="1600"; inputs.newShutter.value="50"; inputs.newNd.value="0";

  syncMethodButtons(); saveMethodPreferences(); updateUI();
}
);


// Situation controls
$("addSceneBtn")?.addEventListener("click",addScene);
$("situation1Name")?.addEventListener("input",e=>{situation1Name=e.target.value;saveScenes();renderScenes();});
$("scenesList")?.addEventListener("input",e=>{
  const card=e.target.closest(".scene-card");if(!card)return;
  const scene=scenes.find(s=>s.id===card.dataset.sceneId);if(!scene)return;
  if(e.target.matches("[data-scene-name]")){scene.name=e.target.value;saveScenes();}
});
$("scenesList")?.addEventListener("change",e=>{
  if(e.target.matches("[data-scene-name]"))renderScenes();
});
$("scenesList")?.addEventListener("click",e=>{
  const card=e.target.closest(".scene-card");if(!card)return;
  const remove=e.target.closest("[data-scene-remove]");
  if(remove){scenes=scenes.filter(s=>s.id!==card.dataset.sceneId);saveScenes();renderScenes();}
});

// Collapsible "Réglages caméra"
const cameraSettingsPanel=$("cameraSettingsPanel");
const cameraSettingsToggle=$("cameraSettingsToggle");
const cameraSettingsContent=$("cameraSettingsContent");
function setCameraSettingsOpen(open){
  cameraSettingsPanel.classList.toggle("collapsed",!open);
  cameraSettingsToggle.setAttribute("aria-expanded",open?"true":"false");
  cameraSettingsContent.hidden=!open;
}
cameraSettingsToggle.addEventListener("click",()=>{
  setCameraSettingsOpen(cameraSettingsToggle.getAttribute("aria-expanded")!=="true");
});
setCameraSettingsOpen(false);

function forceSimplifiedExpoModes(){
  const prevSens=sensitivityMode;
  const prevShutter=shutterMode;
  let refIsoPhysical=prevSens==="gain"?gainDbToIso(num(inputs.refIso.value)):num(inputs.refIso.value);
  let newIsoPhysical=prevSens==="gain"?gainDbToIso(num(inputs.newIso.value)):num(inputs.newIso.value);
  if(!(refIsoPhysical>0))refIsoPhysical=800;
  if(!(newIsoPhysical>0))newIsoPhysical=refIsoPhysical;
  let refSeconds=prevShutter==="angle"?(num(inputs.refShutter.value)/(360*currentFps)):timeFromShutter(num(inputs.refShutter.value));
  let newSeconds=prevShutter==="angle"?(num(inputs.newShutter.value)/(360*currentFps)):timeFromShutter(num(inputs.newShutter.value));
  if(!(refSeconds>0))refSeconds=1/50;
  if(!(newSeconds>0))newSeconds=refSeconds;
  sensitivityMode="iso";
  shutterMode="speed";
  inputs.refIso.value=String(snapIso(refIsoPhysical));
  inputs.newIso.value=String(snapIso(newIsoPhysical));
  inputs.refShutter.value=String(SHUTTER_SPEEDS[nearestIndex(SHUTTER_SPEEDS,1/refSeconds,true)]);
  inputs.newShutter.value=String(SHUTTER_SPEEDS[nearestIndex(SHUTTER_SPEEDS,1/newSeconds,true)]);
  syncMethodButtons();
}

function makePanelCollapsible(panelId,headSelector,defaultOpen=true){
  const panel=$(panelId); if(!panel) return;
  const head=panel.querySelector(headSelector); if(!head || head.dataset.collapsibleReady==="1") return;
  head.dataset.collapsibleReady="1";
  const content=document.createElement('div');
  content.className='panel-collapse-content';
  content.id=`${panelId}Content`;
  while(head.nextSibling){content.appendChild(head.nextSibling);}
  panel.appendChild(content);
  const btn=document.createElement('button');
  btn.type='button';
  btn.className='panel-collapse-btn';
  btn.setAttribute('aria-expanded', defaultOpen ? 'true' : 'false');
  btn.setAttribute('aria-controls', content.id);
  btn.innerHTML='<span class="collapse-chevron" aria-hidden="true">⌃</span>';
  head.appendChild(btn);
  const setOpen=(open)=>{panel.classList.toggle('collapsed',!open); content.hidden=!open; btn.setAttribute('aria-expanded',open?'true':'false');};
  btn.addEventListener('click',e=>{e.stopPropagation(); setOpen(content.hidden);});
  setOpen(defaultOpen);
}

function setupExpoUiTweaks(){
  forceSimplifiedExpoModes();
  const stack=$("exposeSupported"), read=$("readToolPanel");
  if(stack && read && stack.firstElementChild!==read){ stack.insertBefore(read, stack.firstElementChild); }
  if($("placeToolPanel")){ $("placeToolPanel").hidden=true; $("placeToolPanel").classList.add('hidden'); }
  document.querySelector('.method-profile-grid .method-compact-item:nth-child(2)')?.classList.add('hidden');
  $("gainBaseRow")?.classList.add('hidden');
  document.querySelector('.method-exposure-grid')?.classList.add('hidden');
  $("fpsRow")?.classList.add('hidden');
  makePanelCollapsible('readToolPanel','.waveform-explorer-head',true);
  makePanelCollapsible('simpleExpoPanel','.simple-expo-head',true);
}

// Theme
const themeToggle=$("themeToggle"),themeColor=$("themeColor");
function applyTheme(theme){
  const dark=theme==="dark";
  document.body.classList.toggle("dark",dark);
  themeToggle.textContent=dark?"LIGHT":"DARK";
  themeColor.setAttribute("content",dark?"#0B0C0E":"#F3F1EC");
}
applyTheme(localStorage.getItem("bruno-set-tools-theme")||"light");
themeToggle.addEventListener("click",()=>{
  const next=document.body.classList.contains("dark")?"light":"dark";
  localStorage.setItem("bruno-set-tools-theme",next); applyTheme(next);
});

// Tips
const tipsPage=$("tipsPage"),mainApp=$("mainApp");
$("tipsBtn").addEventListener("click",()=>{mainApp.hidden=true;tipsPage.hidden=false;window.scrollTo(0,0);});
$("tipsBackBtn").addEventListener("click",()=>{tipsPage.hidden=true;mainApp.hidden=false;window.scrollTo(0,0);});

// Info
const dialog=$("infoDialog");
$("infoBtn").addEventListener("click",()=>dialog.showModal());
$("closeDialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});

setCameraDb(FALLBACK_CAMERA_DB);
loadCachedCameraDb();
loadMethodPreferences();
ensureProfileValid();ensureGainBaseValid();
syncMethodButtons();
updateUI();
refreshCameraDb();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}


// ============================================================
// BOS EXPO V3.52 — Situation 1 recap + transition alternatives workflow
// ============================================================
const SIMPLE_EXPO_STORAGE_KEY="bos-expo-simple-v1";
let simpleRoles={aperture:"auto",iso:"auto",shutter:"auto",nd:"auto"};
let simpleIsoMin=null;
let simpleIsoMax=null;
let simpleApertureMin=null;
let simpleApertureMax=null;
let simpleBaselineValues=null;
let simpleLastMethodSig="";
let simpleLastRecap=null;
let simpleLocks={aperture:false,iso:false,shutter:false,nd:false};
let simpleLimitsLoadedFor="";

function simpleMethodSig(){return `${cameraMode}|${gammaMode}|${sensitivityMode}|${shutterMode}|${currentFps}`;}
function simpleCurrentIsoPhysical(v=num(inputs.newIso.value)){
  if(sensitivityMode==="gain") return gainBaseIso>0?gainDbToIso(v):NaN;
  return v;
}
function simpleSetIsoPhysical(iso){
  if(!(iso>0))return;
  if(sensitivityMode==="gain"&&gainBaseIso>0)inputs.newIso.value=fmt(isoToGainDb(iso),1);
  else inputs.newIso.value=String(snapIso(iso));
}
function simpleAvailableIsoValues(){
  const p=currentProfile()||{};
  let minRange=null,maxRange=null;
  const range=Array.isArray(p.isoRange)?p.isoRange:(Array.isArray(p.eiRange)?p.eiRange:null);
  if(range&&range.length>=2){minRange=Number(range[0]);maxRange=Number(range[1]);}
  let vals=[...ISO_THIRDS,...currentBaseIsos(),...currentReferenceValues()].map(Number).filter(v=>v>0&&Number.isFinite(v));
  if(minRange>0)vals.push(minRange);
  if(maxRange>0)vals.push(maxRange);
  vals=[...new Set(vals)].sort((a,b)=>a-b);
  if(minRange>0)vals=vals.filter(v=>v>=minRange);
  if(maxRange>0)vals=vals.filter(v=>v<=maxRange);
  return vals.length?vals:[50,100,200,400,800,1600,3200,6400,12800,25600,51200];
}
function simpleAvailableApertureValues(){return APERTURE_THIRDS.slice();}
function simpleDefaultMin(){
  const bases=currentBaseIsos(); if(bases.length)return Math.min(...bases);
  const p=currentProfile()||{};
  if(Number(p.defaultValue)>0)return Number(p.defaultValue);
  const refs=currentReferenceValues();if(refs.length)return Math.min(...refs);
  return simpleAvailableIsoValues()[0];
}
function simpleDefaultMax(){const vals=simpleAvailableIsoValues();return vals[vals.length-1];}
function simpleDefaultApertureMin(){const vals=simpleAvailableApertureValues();return vals[0];}
function simpleDefaultApertureMax(){const vals=simpleAvailableApertureValues();return vals[vals.length-1];}
function simpleLimitKey(){return `${cameraMode}|${gammaMode}`;}
function simpleLoadLimits(force=false){
  const key=simpleLimitKey();
  if(!force&&simpleLimitsLoadedFor===key&&simpleIsoMin>0&&simpleIsoMax>0&&simpleApertureMin>0&&simpleApertureMax>0)return;
  let saved=null;try{saved=JSON.parse(localStorage.getItem(SIMPLE_EXPO_STORAGE_KEY)||"null");}catch(_){saved=null;}
  const lim=saved?.limits?.[key];
  simpleIsoMin=Number(lim?.min)>0?Number(lim.min):simpleDefaultMin();
  simpleIsoMax=Number(lim?.max)>0?Number(lim.max):simpleDefaultMax();
  simpleApertureMin=Number(lim?.apMin)>0?Number(lim.apMin):simpleDefaultApertureMin();
  simpleApertureMax=Number(lim?.apMax)>0?Number(lim.apMax):simpleDefaultApertureMax();
  if(simpleIsoMin>simpleIsoMax)simpleIsoMax=simpleIsoMin;
  if(simpleApertureMin>simpleApertureMax)simpleApertureMax=simpleApertureMin;
  simpleLimitsLoadedFor=key;
}
function simpleSave(){
  try{
    const saved=JSON.parse(localStorage.getItem(SIMPLE_EXPO_STORAGE_KEY)||"{}");
    saved.roles=simpleRoles;
    saved.locks={...simpleLocks};
    saved.limits=saved.limits||{};
    saved.limits[simpleLimitKey()]={min:simpleIsoMin,max:simpleIsoMax,apMin:simpleApertureMin,apMax:simpleApertureMax};
    localStorage.setItem(SIMPLE_EXPO_STORAGE_KEY,JSON.stringify(saved));
  }catch(_){ }
}
function simpleLoadRoles(){
  try{
    const saved=JSON.parse(localStorage.getItem(SIMPLE_EXPO_STORAGE_KEY)||"null");
    if(saved?.roles)Object.keys(simpleRoles).forEach(k=>{if(["manual","auto"].includes(saved.roles[k]))simpleRoles[k]=saved.roles[k];});
    if(saved?.locks&&typeof saved.locks==="object"){
      Object.keys(simpleLocks).forEach(k=>{simpleLocks[k]=!!saved.locks[k];});
    }
  }catch(_){ }
}
function simpleStopFor(key,value){
  if(key==="aperture")return -2*log2(Number(value));
  if(key==="iso")return log2(Number(value));
  if(key==="shutter")return log2(timeFromShutter(Number(value)));
  if(key==="nd")return -Number(value);
  return 0;
}
function simplePhysicalValues(){return {aperture:num(inputs.newAperture.value),iso:simpleCurrentIsoPhysical(),shutter:num(inputs.newShutter.value),nd:num(inputs.newNd.value)};}
function simpleReferenceValues(){
  const rawIso=num(inputs.refIso.value);
  const physicalIso=sensitivityMode==="gain"?(gainBaseIso>0?gainDbToIso(rawIso):NaN):rawIso;
  return {aperture:num(inputs.refAperture.value),iso:physicalIso,shutter:num(inputs.refShutter.value),nd:num(inputs.refNd.value)};
}
function simpleSetReferenceFromValues(v){
  if(v.aperture>0)inputs.refAperture.value=String(v.aperture);
  if(v.iso>0){
    if(sensitivityMode==="gain"&&gainBaseIso>0)inputs.refIso.value=fmt(isoToGainDb(v.iso),1);
    else inputs.refIso.value=String(snapIso(v.iso));
  }
  if(v.shutter>0)inputs.refShutter.value=String(v.shutter);
  if(v.nd>=0)inputs.refNd.value=String(v.nd);
}
function simpleSetCurrentFromValues(v){
  if(v.aperture>0)inputs.newAperture.value=String(v.aperture);
  if(v.iso>0)simpleSetIsoPhysical(v.iso);
  if(v.shutter>0)inputs.newShutter.value=String(v.shutter);
  if(v.nd>=0)inputs.newNd.value=String(v.nd);
}
function simpleRenderReference(){
  const v=simpleReferenceValues(),unit=currentSensitivityUnit();
  const set=(id,label,value)=>{
    const el=$(id);if(!el)return;
    el.querySelector("span").textContent=label;
    el.querySelector("strong").textContent=value;
  };
  set("simpleRefAperture","Diaph",simpleValueText("aperture",v.aperture));
  set("simpleRefIso",unit,simpleValueText("iso",v.iso));
  set("simpleRefShutter","Shutter",simpleValueText("shutter",v.shutter));
  set("simpleRefNd","ND",simpleValueText("nd",v.nd));
}
function simpleTotal(v=simplePhysicalValues()){return simpleStopFor("aperture",v.aperture)+simpleStopFor("iso",v.iso)+simpleStopFor("shutter",v.shutter)+simpleStopFor("nd",v.nd);}
function simpleCandidates(key){
  if(key==="aperture")return simpleAvailableApertureValues().filter(v=>v>=simpleApertureMin-1e-9&&v<=simpleApertureMax+1e-9);
  if(key==="iso")return simpleAvailableIsoValues().filter(v=>v>=simpleIsoMin-1e-9&&v<=simpleIsoMax+1e-9);
  if(key==="shutter")return (shutterMode==="speed"?SHUTTER_SPEEDS:SHUTTER_ANGLES).slice();
  if(key==="nd")return ND_STOPS.slice();
  return [];
}
function simpleSetPhysicalValue(key,value){
  if(key==="iso")simpleSetIsoPhysical(value);else inputs[{aperture:"newAperture",shutter:"newShutter",nd:"newNd"}[key]].value=String(value);
}
function simpleBestCandidate(key,current,remaining){
  const vals=simpleCandidates(key);if(!vals.length)return current;
  const currentStop=simpleStopFor(key,current),target=currentStop+remaining;
  let best=current,bestDiff=Infinity;
  vals.forEach(v=>{
    const s=simpleStopFor(key,v),move=s-currentStop;
    if(remaining>0&&move<-1e-9)return;
    if(remaining<0&&move>1e-9)return;
    const d=Math.abs(s-target);
    if(d<bestDiff-1e-12){bestDiff=d;best=v;}
  });
  return best;
}
function simplePriorityOrders(delta){
  // delta < 0 : il faut assombrir ; delta > 0 : il faut éclaircir.
  return delta<0
    ? ["aperture","iso","nd","shutter"]
    : ["aperture","nd","iso","shutter"];
}
function simplePriorityNoteText(){
  return "Assombrir : Diaph ↑ → ISO ↓ → ND ↑ → Shutter · Éclaircir : Diaph ↓ → ND ↓ → ISO ↑ → Shutter.";
}
function simpleRenderLocks(){
  document.querySelectorAll("[data-simple-lock]").forEach(btn=>{
    const key=btn.dataset.simpleLock;
    const locked=!!simpleLocks[key];
    btn.classList.toggle("locked",locked);
    btn.setAttribute("aria-pressed",locked?"true":"false");
    const names={aperture:"diaph",iso:(currentSensitivityUnit()||"ISO").toLowerCase(),shutter:"shutter",nd:"ND"};
    const label=locked?`Déverrouiller ${names[key]||key}`:`Verrouiller ${names[key]||key}`;
    btn.setAttribute("aria-label",label);
    btn.setAttribute("title",label);
  });
  const note=$("simplePriorityNote");if(note)note.textContent=simplePriorityNoteText();
}
function simpleApplyCompensation(targetTotal,changedKey,baseBefore){
  let remaining=targetTotal-simpleTotal();
  const order=simplePriorityOrders(remaining);
  const changes=[];
  for(const key of order){
    if(Math.abs(remaining)<0.015)break;
    if(key===changedKey||simpleLocks[key])continue;
    const before=simplePhysicalValues()[key];
    const beforeStop=simpleStopFor(key,before);
    const next=simpleBestCandidate(key,before,remaining);
    if(!(Number.isFinite(next))||Math.abs(next-before)<1e-9)continue;
    simpleSetPhysicalValue(key,next);
    const after=simplePhysicalValues()[key];
    const move=simpleStopFor(key,after)-beforeStop;
    remaining-=move;
    changes.push({key,before,after,stops:move});
  }
  return {changes,residual:targetTotal-simpleTotal(),direction:(targetTotal-simpleTotal())};
}
function simpleValueText(key,v){
  if(key==="aperture")return `f/${fmtAperture(v)}`;
  if(key==="iso")return `${currentSensitivityUnit()} ${fmtIso(v)}`;
  if(key==="shutter")return shutterMode==="speed"?`1/${fmt(v,1)}`:`${fmt(v,1)}°`;
  if(key==="nd")return ndDisplay(v);
  return String(v);
}
function simpleDeltaText(change){return `${simpleValueText(change.key,change.before)} → ${simpleValueText(change.key,change.after)} : ${fmtStop(change.stops)}`;}
function simpleRenderLimits(){
  simpleLoadLimits();
  const unit=currentSensitivityUnit();
  $("isoMinLabel").textContent=`${unit} MIN`;
  $("isoMaxLabel").textContent=`${unit} MAX`;
  const isoVals=simpleAvailableIsoValues();
  const apVals=simpleAvailableApertureValues();
  const fillIso=(sel,current)=>{sel.innerHTML=isoVals.map(v=>`<option value="${v}" ${Math.abs(v-current)<.001?"selected":""}>${unit} ${formatThousands(v)}</option>`).join("");};
  const fillAp=(sel,current)=>{sel.innerHTML=apVals.map(v=>`<option value="${v}" ${Math.abs(v-current)<.001?"selected":""}>f/${fmtAperture(v)}</option>`).join("");};
  fillIso($("isoMinSelect"),simpleIsoMin);
  fillIso($("isoMaxSelect"),simpleIsoMax);
  fillAp($("apertureMinSelect"),simpleApertureMin);
  fillAp($("apertureMaxSelect"),simpleApertureMax);
  const bases=currentBaseIsos();
  $("isoLimitHelp").textContent=bases.length?`${unit} MIN reprend la base native la plus basse (${bases.map(formatThousands).join(" / ")}). Tu peux aussi fixer diaph min / max selon tes optiques.`:`Les limites ${unit.toLowerCase()} et diaph restent modifiables pour cette caméra.`;
}
function simpleRenderRows(){
  const vals=simplePhysicalValues();
  const set=(id,label,value)=>{
    const el=$(id);if(!el)return;
    el.querySelector("span").textContent=label;
    el.querySelector("strong").textContent=value;
  };
  set("simpleApertureSelect","Diaph",simpleValueText("aperture",vals.aperture));
  set("simpleIsoSelect",currentSensitivityUnit(),simpleValueText("iso",vals.iso));
  set("simpleShutterSelect","Shutter",simpleValueText("shutter",vals.shutter));
  set("simpleNdSelect","ND",simpleValueText("nd",vals.nd));
  const label=$("simpleSensitivityLabel");if(label)label.textContent=currentSensitivityUnit();
}
function simpleClampValue(v,minv,maxv){return Math.min(maxv,Math.max(minv,v));}
function simpleClampReferenceToLimits(){
  const r=simpleReferenceValues();
  simpleSetReferenceFromValues({...r,aperture:simpleClampValue(r.aperture,simpleApertureMin,simpleApertureMax),iso:simpleClampValue(r.iso,simpleIsoMin,simpleIsoMax)});
}
function simpleClampCurrentToLimits(){
  const c=simplePhysicalValues();
  simpleSetCurrentFromValues({...c,aperture:simpleClampValue(c.aperture,simpleApertureMin,simpleApertureMax),iso:simpleClampValue(c.iso,simpleIsoMin,simpleIsoMax)});
}
function simpleChangedKey(prev,now){
  if(!prev)return null;
  for(const k of ["aperture","iso","shutter","nd"]){if(Math.abs((prev[k]||0)-(now[k]||0))>1e-7)return k;}
  return null;
}
function simpleNetChangeParts(before,after){
  if(!before||!after)return [];
  return ["aperture","iso","shutter","nd"].flatMap(key=>{
    const a=Number(before[key]),b=Number(after[key]);
    if(!Number.isFinite(a)||!Number.isFinite(b)||Math.abs(a-b)<1e-7)return [];
    const stops=simpleStopFor(key,b)-simpleStopFor(key,a);
    return [`${simpleValueText(key,a)} → ${simpleValueText(key,b)} : ${fmtStop(stops)}`];
  });
}
function simpleSetCalcSummary(text,state=""){
  const el=$("simpleCalcSummary");if(!el)return;
  el.textContent=text;el.classList.toggle("is-ok",state==="ok");el.classList.toggle("is-warning",state==="warning");
}
function simpleCalculateNow(changedKey=null){
  const reference=simpleReferenceValues();
  const current=simplePhysicalValues();
  if(!(reference.aperture>0&&reference.iso>0&&reference.shutter>0&&reference.nd>=0)){
    simpleSetCalcSummary("Référence incomplète ou invalide.","warning");
    return;
  }
  const targetTotal=simpleTotal(reference);
  const result=simpleApplyCompensation(targetTotal,changedKey,reference);
  const after=simplePhysicalValues();
  const parts=simpleNetChangeParts(reference,after);
  const residual=result?.residual??(targetTotal-simpleTotal(after));
  if(!parts.length){
    simpleSetCalcSummary(changedKey?"Réglage aligné sur la référence.":"Nouveau réglage identique à la référence.");
  }else if(Math.abs(residual)<.08){
    simpleSetCalcSummary(`${parts.join(" · ")} · EXPOSITION CONSERVÉE`,"ok");
  }else{
    simpleSetCalcSummary(`${parts.join(" · ")} · ${fmtStop(residual)} restant`,"warning");
  }
  simpleLastRecap={reference,current,after,result};
  simpleRenderRows();simpleRenderReference();updateBaseIsoNote();renderExposureGuide();
}

// ---------- ANALYSE WAVEFORM · 3 points + simulation d’exposition ----------
let waveformScene={skin:52,high:90,shadow:20,shift:0};
let compactExpoState={read:70,placeStop:1};
let exposureGuideProfileKey="";

function slog3CodeValue(linear){
  const x=Math.max(0,Number(linear)||0);
  if(x>=0.01125)return 420 + Math.log10((x+0.01)/(0.18+0.01))*261.5;
  return x*(171.2102946929-95)/0.01125+95;
}
function slog3IreForLinear(linear){
  const code=slog3CodeValue(linear);
  return (code-64)/(940-64)*100;
}
function slog3IreFromStops(stops){return slog3IreForLinear(0.18*Math.pow(2,Number(stops)||0));}
function slog3IreForReflectance(reflectance){return slog3IreForLinear(Number(reflectance)||0);}

// ARRI LogC3 EI 800. Constantes reproduisant la table officielle ARRI EI 800.
function logc3Ei800IreFromStops(stops){
  const x=0.18*Math.pow(2,Number(stops)||0);
  const cut=0.010591;
  const y=x<=cut ? 5.367655*x+0.092809 : 0.247190*Math.log10(5.555556*x+0.052272)+0.385537;
  return y*100;
}

// Blackmagic Film Gen 5. Fonction de transfert publique du SDK/technical reference.
function bmFilmGen5IreFromStops(stops){
  const x=0.18*Math.pow(2,Number(stops)||0);
  const A=0.08692876065491224,B=0.005494072432257808,C=0.5300133392291939,D=8.283605932402494,E=0.09246575342465753;
  return (x<0.005 ? D*x+E : A*Math.log(x+B)+C)*100;
}

function inverseStopsFromSignal(fn,signal,minStop=-12,maxStop=12){
  const target=Number(signal);
  if(!Number.isFinite(target))return NaN;
  let lo=minStop,hi=maxStop;
  for(let i=0;i<64;i++){
    const mid=(lo+hi)/2;
    if(fn(mid)<target)lo=mid;else hi=mid;
  }
  return (lo+hi)/2;
}

function waveformStopsFnFromTable(table){
  const pts=(Array.isArray(table)?table:[])
    .map(x=>({stop:Number(x?.stop),percent:Number(x?.percent)}))
    .filter(x=>Number.isFinite(x.stop)&&Number.isFinite(x.percent))
    .sort((a,b)=>a.stop-b.stop);
  if(pts.length<2)return null;
  return function(stops){
    const s=Number(stops);
    if(!Number.isFinite(s)||s<pts[0].stop||s>pts[pts.length-1].stop)return NaN;
    if(Math.abs(s-pts[0].stop)<1e-9)return pts[0].percent;
    if(Math.abs(s-pts[pts.length-1].stop)<1e-9)return pts[pts.length-1].percent;
    for(let i=1;i<pts.length;i++){
      const a=pts[i-1],b=pts[i];
      if(s<=b.stop){
        const t=(s-a.stop)/(b.stop-a.stop);
        return a.percent+(b.percent-a.percent)*t;
      }
    }
    return NaN;
  };
}
function waveformGuideFromDbProfile(p){
  const g=p?.waveformGuide;
  if(!g||!Array.isArray(g.zones)||!g.zones.length)return null;
  const table=(Array.isArray(g.stopTable)?g.stopTable:[])
    .map(x=>({stop:Number(x?.stop),percent:Number(x?.percent)}))
    .filter(x=>Number.isFinite(x.stop)&&Number.isFinite(x.percent))
    .sort((a,b)=>a.stop-b.stop);
  const fn=waveformStopsFnFromTable(table);
  const first=table[0]||null,last=table[table.length-1]||null;
  const approximate=/approx/i.test(String(g.accuracy||''));
  const highStop=last?.stop;
  return {
    key:`db:${cameraMode}:${gammaMode}`,
    status:String(g.status||p?.label||"PROFIL"),
    grey:Number(g.middleGrayPercent),
    stopsFn:fn,
    stopRange:first&&last?[first.stop,last.stop]:null,
    stopTable:table,
    signalRange:first&&last?[Math.min(first.percent,last.percent),Math.max(first.percent,last.percent)]:null,
    lowStop:Number.isFinite(first?.stop)?first.stop:null,
    lowLabel:Number.isFinite(first?.stop)?`${approximate?"≈ ":""}${first.stop>=0?"+":""}${fmt(first.stop,1)} stops / gris`:"repère bas DB",
    highStop:Number.isFinite(highStop)?highStop:null,
    highSignal:last?.percent,
    highLabel:Number.isFinite(highStop)?`${approximate?"≈ ":""}${highStop>=0?"+":""}${fmt(highStop,1)} stops / gris`:"repère haut DB",
    zones:g.zones,
    markers:Array.isArray(g.markers)?g.markers:[],
    note:String(g.note||""),
    refWhite:String(g.refWhite||"—"),
    refNote:String(g.refNote||g.note||""),
    accuracy:String(g.accuracy||""),
    dbDriven:true
  };
}

function exposureProfileGuide(){
  const p=currentProfile()||{};
  const label=String(p.label||"");
  const dbGuide=waveformGuideFromDbProfile(p);
  if(dbGuide)return dbGuide;
  if(gammaMode==="slog3" || /s-?log3/i.test(label)){
    const grey=slog3IreFromStops(0),toe=slog3IreFromStops(-4),m1=slog3IreFromStops(-1),p3=slog3IreFromStops(3),p5=slog3IreFromStops(5),p6=slog3IreFromStops(6);
    return {
      key:"slog3",status:"S-LOG3",grey,stopsFn:slog3IreFromStops,lowStop:-4,lowLabel:"−4 stops / gris · passage pied → log",highStop:6,highSignal:p6,highLabel:"+6 stops / gris",
      zones:[
        {min:0,max:toe,label:"PIED / TRÈS BASSES",title:"Pied de courbe"},
        {min:toe,max:m1,label:"OMBRES LOG",title:"Ombres"},
        {min:m1,max:p3,label:"MÉDIUMS",title:"Médiums"},
        {min:p3,max:p5,label:"HAUTES",title:"Hautes lumières"},
        {min:p5,max:p6,label:"TRÈS HAUTES",title:"Très hautes lumières"},
        {min:p6,max:100.01,label:"EXTRÊMES",title:"Extrêmes"}
      ],
      markers:[
        {value:toe,label:"≈12 %",sub:"passage pied → log"},
        {value:grey,label:"≈41 %",sub:"gris 18 %"},
        {value:slog3IreForReflectance(.9),label:"≈61 %",sub:"blanc 90 %"},
        {value:p6,label:"≈94 %",sub:"+6 stops / gris"}
      ],
      note:"Simulation S-Log3 sans LUT. Les valeurs indiquent où le signal se déplacerait dans la courbe. Le repère haut n’est pas une garantie de clipping capteur : la latitude réelle dépend de la caméra et de son mode d’exposition.",
      refWhite:`${Math.round(slog3IreForReflectance(.9))} %`,refNote:"Sony place le gris 18 % S-Log3 autour de 41 %."
    };
  }
  if(gammaMode==="scinetone" || /s-?cinetone/i.test(label)){
    return {
      key:"scinetone",status:"S-CINETONE",grey:null,stopsFn:null,highStop:null,highSignal:100,highLabel:"saturation signal 100 %",
      rolloffStart:70,
      zones:[
        {min:0,max:1.5,label:"SOUS LE NOIR",title:"Sous le noir nominal",text:"Sous le niveau noir S-Cinetone documenté par Sony."},
        {min:1.5,max:12,label:"OMBRES PROFONDES",title:"Ombres profondes",text:"Zone très basse : détails et nuances deviennent plus fragiles."},
        {min:12,max:30,label:"BASSES LUMIÈRES",title:"Basses lumières",text:"S-Cinetone renforce légèrement le contraste dans les basses lumières."},
        {min:30,max:50,label:"MÉDIUMS BAS",title:"Médiums bas",text:"Zone de transition confortable pour conserver texture et couleur."},
        {min:50,max:70,label:"MÉDIUMS HAUTS",title:"Médiums hauts",text:"Zone principale lumineuse avant le début du roll-off documenté."},
        {min:70,max:85,label:"ROLL-OFF DOUX",title:"Début du roll-off",text:"À partir de 70 %, Sony réduit progressivement le contraste des hautes lumières."},
        {min:85,max:100.01,label:"ROLL-OFF FORT",title:"Très hautes lumières",text:"Compression plus forte en approchant de la saturation : les écarts de lumière se resserrent dans le signal."}
      ],
      markers:[
        {value:1.5,label:"1,5 %",sub:"niveau noir"},
        {value:70,label:"70 %",sub:"début roll-off"},
        {value:100,label:"100 %",sub:"saturation signal"}
      ],
      note:"S-Cinetone n’est pas une courbe Log. Les seuils 1,5 % et 70 % sont documentés par Sony. Les subdivisions intermédiaires sont des zones de lecture pratiques BOS destinées à montrer que le comportement n’est pas uniforme ; les transitions réelles sont progressives.",
      refWhite:"—",refNote:"Sony documente un niveau noir à 1,5 %, un contraste légèrement renforcé dans les basses lumières et une réduction progressive du contraste des hautes lumières à partir de 70 %."
    };
  }
  if(gammaMode==="logc3" || /log\s*c3/i.test(label)){
    const grey=logc3Ei800IreFromStops(0),toe=logc3Ei800IreFromStops(Math.log2(0.010591/0.18)),m1=logc3Ei800IreFromStops(-1),p3=logc3Ei800IreFromStops(3),p6=logc3Ei800IreFromStops(6),p76=logc3Ei800IreFromStops(7+2/3);
    return {
      key:"logc3",status:"LOG C3 · EI 800",grey,stopsFn:logc3Ei800IreFromStops,lowStop:Math.log2(0.010591/0.18),lowLabel:"passage pied → log",highStop:7+2/3,highSignal:p76,highLabel:"+7⅔ stops · EI800",
      zones:[
        {min:0,max:toe,label:"PIED / TRÈS BASSES",title:"Pied de courbe"},
        {min:toe,max:m1,label:"OMBRES LOG",title:"Ombres"},
        {min:m1,max:p3,label:"MÉDIUMS",title:"Médiums"},
        {min:p3,max:p6,label:"HAUTES",title:"Hautes lumières"},
        {min:p6,max:p76,label:"TRÈS HAUTES",title:"Très hautes lumières"},
        {min:p76,max:100.01,label:"HORS REPÈRE EI800",title:"Au-delà du repère EI 800"}
      ],
      markers:[
        {value:toe,label:"≈15 %",sub:"passage pied → log"},
        {value:grey,label:"39,1 %",sub:"gris moyen"},
        {value:p3,label:"61,0 %",sub:"+3 stops"},
        {value:p6,label:"83,2 %",sub:"+6 stops"},
        {value:p76,label:"95,6 %",sub:"+7⅔ stops · EI800"}
      ],
      note:"Simulation LogC3 à EI 800. La relation signal ↔ stops varie légèrement avec l’EI ; cette version utilise donc le repère EI 800 et ne présente pas sa limite haute comme un clipping universel.",
      refWhite:"—",refNote:"ARRI place le gris moyen LogC3 à 39,1 % à EI 800."
    };
  }
  if(gammaMode==="bmfilm5" || /blackmagic.*film.*gen\s*5|film\s*gen\s*5/i.test(label)){
    const grey=bmFilmGen5IreFromStops(0),toe=(8.283605932402494*0.005+0.09246575342465753)*100,m1=bmFilmGen5IreFromStops(-1),p3=bmFilmGen5IreFromStops(3),p6=bmFilmGen5IreFromStops(6),p8=bmFilmGen5IreFromStops(8);
    return {
      key:"bmfilm5",status:"FILM GEN 5",grey,stopsFn:bmFilmGen5IreFromStops,lowStop:Math.log2(0.005/0.18),lowLabel:"passage pied → log",highStop:8,highSignal:p8,highLabel:"repère +8 stops",
      zones:[
        {min:0,max:toe,label:"PIED / TRÈS BASSES",title:"Pied de courbe"},
        {min:toe,max:m1,label:"OMBRES LOG",title:"Ombres"},
        {min:m1,max:p3,label:"MÉDIUMS",title:"Médiums"},
        {min:p3,max:p6,label:"HAUTES",title:"Hautes lumières"},
        {min:p6,max:p8,label:"TRÈS HAUTES",title:"Très hautes lumières"},
        {min:p8,max:100.01,label:"EXTRÊMES",title:"Extrêmes encodés"}
      ],
      markers:[
        {value:toe,label:"≈13,4 %",sub:"passage pied → log"},
        {value:grey,label:"38,4 %",sub:"gris moyen"},
        {value:bmFilmGen5IreFromStops(1),label:"44,3 %",sub:"+1 stop"},
        {value:p6,label:"74,3 %",sub:"+6 stops"},
        {value:p8,label:"86,3 %",sub:"+8 stops"}
      ],
      note:"Simulation Blackmagic Film Gen 5. Le repère +8 est un repère dans la fonction d’encodage, pas une promesse de latitude capteur : le modèle de caméra et l’ISO peuvent limiter les hautes lumières avant.",
      refWhite:"—",refNote:"Blackmagic Film Gen 5 place le gris moyen autour de 38,4 %."
    };
  }
  return null;
}

function waveformZoneFor(guide,value){
  return guide?.zones?.find(z=>value>=z.min && value<z.max) || guide?.zones?.[guide.zones.length-1] || null;
}
function renderWaveformSegments(guide){
  const host=$("exposeWaveformSegments");if(!host)return;
  host.innerHTML=(guide.zones||[]).map((z,i)=>{
    const left=Math.max(0,Math.min(100,z.min)),right=Math.max(left,Math.min(100,z.max));
    return `<span class="wave-seg wave-seg-${(i%5)+1}" style="left:${left}%;width:${Math.max(.15,right-left)}%" title="${escapeHtml(z.label)}"></span>`;
  }).join("");
}
function renderWaveformMarkers(guide){
  const host=$("exposeWaveformMarkers");if(!host)return;
  host.innerHTML=(guide.markers||[]).map(m=>`<span class="wave-marker" style="left:${Math.max(0,Math.min(100,m.value))}%"><i></i><b>${escapeHtml(m.label)}</b></span>`).join("");
}
function sceneStopText(v){
  if(!Number.isFinite(v))return "—";
  if(Math.abs(v)<.05)return "0,0 stop";
  return `${v>0?"+":""}${fmt(v,1)} stop${Math.abs(v)>=1.5?"s":""}`;
}
function sceneSignalText(v){
  if(!Number.isFinite(v))return "—";
  if(v>100)return "> 100 %";
  if(v<0)return "< 0 %";
  return `${fmt(v,1)} %`;
}
function scenePointInfo(guide,value,shift){
  const v=Math.max(0,Math.min(100,Number(value)||0));
  const zone=waveformZoneFor(guide,v);
  if(!guide?.stopsFn)return {value:v,zone,stop:NaN,afterSignal:NaN,afterStop:NaN,afterZone:null};
  const minStop=Array.isArray(guide.stopRange)?guide.stopRange[0]:-12;
  const maxStop=Array.isArray(guide.stopRange)?guide.stopRange[1]:12;
  const signalInRange=!Array.isArray(guide.signalRange)||(v>=guide.signalRange[0]-1e-6&&v<=guide.signalRange[1]+1e-6);
  const stop=signalInRange?inverseStopsFromSignal(guide.stopsFn,v,minStop,maxStop):NaN;
  const afterStop=Number.isFinite(stop)?stop+(Number(shift)||0):NaN;
  const afterSignal=Number.isFinite(afterStop)?guide.stopsFn(afterStop):NaN;
  const afterZone=Number.isFinite(afterSignal)?waveformZoneFor(guide,Math.max(0,Math.min(100,afterSignal))):null;
  return {value:v,zone,stop,afterSignal,afterStop,afterZone};
}
function scenePointDom(key){
  const cap=key==="skin"?"Skin":key==="high"?"High":"Shadow";
  return {input:$("scenePoint"+cap),now:$("scenePoint"+cap+"Now"),after:$("scenePoint"+cap+"After")};
}
function renderScenePins(guide,infos,shift){
  const host=$("scenePointPins");if(!host)return;
  const defs=[{k:"skin",c:"S"},{k:"high",c:"H"},{k:"shadow",c:"O"}];
  const pins=[];
  defs.forEach(d=>{
    const i=infos[d.k];if(!i)return;
    pins.push(`<span class="scene-pin scene-pin-${d.k}" style="left:${Math.max(0,Math.min(100,i.value))}%"><b>${d.c}</b></span>`);
    if(guide.stopsFn&&Math.abs(shift)>.04&&Number.isFinite(i.afterSignal)){
      pins.push(`<span class="scene-pin scene-pin-after scene-pin-${d.k}" style="left:${Math.max(0,Math.min(100,i.afterSignal))}%"><b>${d.c}</b></span>`);
    }
  });
  host.innerHTML=pins.join("");
}
function scenePresetButtons(){
  document.querySelectorAll("#sceneShiftPresets button").forEach(btn=>{
    const v=Number(btn.dataset.shift);
    btn.classList.toggle("active",Math.abs(v-waveformScene.shift)<.01);
  });
}
function setSceneShift(v){
  waveformScene.shift=Math.max(-2.5,Math.min(2.5,Number(v)||0));
  const slider=$("sceneShiftSlider");if(slider)slider.value=waveformScene.shift.toFixed(1);
  renderExposureGuide();
}
function compactStopLabel(v){
  if(!Number.isFinite(v))return "—";
  if(Math.abs(v)<.05)return "0 stop";
  return `${v>0?"+":""}${fmt(v,1)} stop${Math.abs(v)>=1.5?"s":""}`;
}
function waveformStopTableForGuide(guide){
  if(Array.isArray(guide?.stopTable)&&guide.stopTable.length>=2){
    return guide.stopTable.filter(x=>Number.isFinite(x?.stop)&&Number.isFinite(x?.percent)).sort((a,b)=>a.stop-b.stop);
  }
  if(!guide?.stopsFn)return [];
  let min=-4,max=6;
  if(guide.key==="bmfilm5")max=8;
  else if(guide.key==="logc3")max=7;
  else if(guide.key==="slog3")max=6;
  else if(Array.isArray(guide.stopRange)){min=Math.ceil(guide.stopRange[0]);max=Math.floor(guide.stopRange[1]);}
  const out=[];
  for(let s=Math.ceil(min);s<=Math.floor(max);s++){
    const percent=guide.stopsFn(s);
    if(Number.isFinite(percent)&&percent>=0&&percent<=100)out.push({stop:s,percent});
  }
  return out;
}
function renderWaveformStopRuler(guide){
  const tickHost=$("quickWaveformStops"), bandHost=$("quickWaveformStopBands"), help=$("quickWaveformStopHelp");
  if(!tickHost||!bandHost||!help)return;
  const table=waveformStopTableForGuide(guide);
  if(table.length<2){
    tickHost.innerHTML="";bandHost.innerHTML="";
    help.textContent="Pas de conversion fiable waveform ↔ diaph pour ce profil.";
    help.classList.add("no-stops");
    return;
  }
  help.classList.remove("no-stops");
  help.textContent="Chaque espace entre deux traits = 1 diaph de lumière réelle (×2 / ÷2).";
  bandHost.innerHTML=table.slice(0,-1).map((a,i)=>{
    const b=table[i+1];
    const left=Math.max(0,Math.min(100,a.percent)), right=Math.max(left,Math.min(100,b.percent));
    return `<span class="wave-stop-band ${i%2?'alt':''}" style="left:${left}%;width:${Math.max(.1,right-left)}%" title="${a.stop>=0?'+':''}${fmt(a.stop,0)} → ${b.stop>=0?'+':''}${fmt(b.stop,0)} : 1 diaph"></span>`;
  }).join("");
  tickHost.innerHTML=table.map((x,i)=>{
    const pos=Math.max(0,Math.min(100,x.percent));
    const label=Math.abs(x.stop)<1e-9?'0':`${x.stop>0?'+':''}${fmt(x.stop,0)}`;
    const edge=i===0?' edge-left':i===table.length-1?' edge-right':'';
    return `<span class="wave-stop-tick${edge}" style="left:${pos}%" title="${label} stop · ${fmt(x.percent,1)} %"><i></i><b>${label}</b></span>`;
  }).join("");
}
function waveformSignalTrend(zone,value){
  const label=String(zone?.label||zone?.title||'').toUpperCase();
  const min=Number(zone?.min),max=Number(zone?.max);
  const progress=Number.isFinite(min)&&Number.isFinite(max)&&max>min?Math.max(0,Math.min(1,(Number(value)-min)/(max-min))):.5;
  const high=/ROLL-OFF|HAUTES|EXTRÊME|SATURATION|HORS REPÈRE/.test(label);
  if(high){
    return {
      mode:'compression',progress,
      left:'Plus de marge',right:'Plus comprimé',
      note:'Dans cette zone, monter encore le signal ne signifie pas « meilleure image » : la marge diminue et la compression augmente.'
    };
  }
  return {
    mode:'cleaner',progress,
    left:'Bas de zone · plus fragile',right:'Haut de zone · plus robuste',
    note:'À zone comparable, placer le signal plus haut donne généralement davantage de signal utile et une image plus robuste, tant qu’on ne sacrifie pas les hautes lumières.'
  };
}
function renderSignalTrend(zone,value){
  const visual=$("quickReadQualityVisual"),cursor=$("quickReadQualityCursor"),left=$("quickReadQualityLeft"),right=$("quickReadQualityRight");
  if(!visual||!cursor||!left||!right)return null;
  const trend=waveformSignalTrend(zone,value);
  visual.classList.toggle('compression',trend.mode==='compression');
  visual.classList.toggle('cleaner',trend.mode==='cleaner');
  cursor.style.left=`${5+trend.progress*90}%`;
  left.textContent=trend.left;right.textContent=trend.right;
  return trend;
}

function renderQuickWaveformBar(guide){
  const segHost=$("quickWaveformSegments"), markerHost=$("quickWaveformMarkers"), cursor=$("quickWaveformCursor");
  if(!guide)return;
  renderWaveformStopRuler(guide);
  if(segHost){
    segHost.innerHTML=(guide.zones||[]).map((z,i)=>{
      const left=Math.max(0,Math.min(100,z.min)), right=Math.max(left,Math.min(100,z.max));
      return `<span class="wave-seg wave-seg-${(i%5)+1}" style="left:${left}%;width:${Math.max(.15,right-left)}%" title="${escapeHtml(z.label)}"></span>`;
    }).join("");
  }
  if(markerHost){
    markerHost.innerHTML=(guide.markers||[]).slice(0,6).map(m=>`<span class="wave-marker" style="left:${Math.max(0,Math.min(100,m.value))}%"><i></i><b>${escapeHtml(m.label)}</b></span>`).join("");
  }
  if(cursor){
    const v=Math.max(0,Math.min(100,Number(compactExpoState.read)||0));
    cursor.style.left=`${v}%`;
  }
}

function renderQuickHighBar(guide){
  const segHost=$("quickHighSegments"), markerHost=$("quickHighMarkers"), cursor=$("quickHighCursor");
  if(!guide)return;
  if(segHost){
    segHost.innerHTML=(guide.zones||[]).map((z,i)=>{
      const left=Math.max(0,Math.min(100,z.min)), right=Math.max(left,Math.min(100,z.max));
      return `<span class="wave-seg wave-seg-${(i%5)+1}" style="left:${left}%;width:${Math.max(.15,right-left)}%" title="${escapeHtml(z.label)}"></span>`;
    }).join("");
  }
  if(markerHost){
    markerHost.innerHTML=(guide.markers||[]).slice(0,4).map(m=>`<span class="wave-marker" style="left:${Math.max(0,Math.min(100,m.value))}%"><i></i><b>${escapeHtml(m.label)}</b></span>`).join("");
  }
  if(cursor){
    const v=Math.max(0,Math.min(100,Number(waveformScene.high)||0));
    cursor.style.left=`${v}%`;
  }
}

function waveformExplorerAdvice(zone,value,guide){
  const label=String(zone?.label||zone?.title||'').toUpperCase();
  const v=Math.max(0,Math.min(100,Number(value)||0));

  // S-Cinetone : le comportement varie progressivement. Les seules ruptures constructeur
  // utilisées comme repères durs sont le noir 1,5 % et le début de roll-off à 70 %.
  if(guide?.key==="scinetone"){
    if(v<1.5)return {
      useTitle:'NOIR / INFORMATION NON PRIORITAIRE',
      useText:'Sous le niveau noir nominal : à réserver à ce que tu acceptes de perdre.',
      quality:'TRÈS FRAGILE',
      qualityText:'Très peu de séparation utile dans le signal ; le détail sombre devient difficile à conserver.'
    };
    if(v<12)return {
      useTitle:'OMBRES PROFONDES',
      useText:'Pour des noirs avec juste assez de matière, pas pour un détail critique.',
      quality:'FRAGILE',
      qualityText:'Le signal est bas : la texture et la propreté dépendent fortement du niveau réel de lumière et de l’ISO.'
    };
    if(v<30)return {
      useTitle:'OMBRES AVEC MATIÈRE',
      useText:'Bonne zone pour garder du relief dans une partie sombre de l’image.',
      quality:'CORRECTE / CONTRASTÉE',
      qualityText:'S-Cinetone renforce légèrement le contraste des basses lumières : le rendu paraît dense, mais la réserve de correction reste moindre que dans les médiums.'
    };
    if(v<50)return {
      useTitle:'MÉDIUMS / TEXTURES',
      useText:'Zone confortable pour les matières, décors et sujets que tu veux garder riches en nuances.',
      quality:'BONNE',
      qualityText:'Signal confortable et encore peu comprimé ; bon compromis entre texture, contraste et souplesse.'
    };
    if(v<70)return {
      useTitle:'SUJETS LUMINEUX / PEAUX',
      useText:'Zone pratique pour les éléments importants que tu veux lumineux tout en gardant de la texture.',
      quality:'TRÈS CONFORTABLE',
      qualityText:'Signal fort avant le roll-off. La séparation tonale reste généreuse, sans supposer que toute valeur de cette zone est artistiquement idéale.'
    };
    if(v<85)return {
      useTitle:'HAUTES LUMIÈRES À PRÉSERVER',
      useText:'Le roll-off commence : utile pour conserver des hautes lumières avec une transition plus douce.',
      quality:'COMPRESSION DOUCE',
      qualityText:'Depuis 70 %, le contraste diminue progressivement. Les détails restent présents mais les écarts de lumière sont davantage comprimés.'
    };
    if(v<96)return {
      useTitle:'TRÈS HAUTES LUMIÈRES',
      useText:'À utiliser pour les zones très lumineuses dont tu veux encore garder un peu de texture.',
      quality:'FORTEMENT COMPRIMÉE',
      qualityText:'On approche de la saturation : les nuances se resserrent et la marge de correction diminue rapidement.'
    };
    return {
      useTitle:'SPÉCULAIRES / LIMITE',
      useText:'À réserver aux pics lumineux ou aux zones dont la texture n’est plus essentielle.',
      quality:'LIMITE',
      qualityText:'Très proche de la saturation du signal : faible séparation tonale restante.'
    };
  }

  if(/SOUS LE NOIR|PIED|TRÈS BASSES/.test(label))return {
    useTitle:'NOIRS / DÉTAIL NON PRIORITAIRE',
    useText:'À réserver aux noirs assumés ou aux zones dont le détail n’est pas essentiel.',
    quality:'FRAGILE',
    qualityText:'Très peu de signal utile : le bruit et la perte de détail deviennent plus visibles.'
  };
  if(/OMBRE/.test(label))return {
    useTitle:'OMBRES AVEC DÉTAIL',
    useText:'Intéressant pour garder de la matière dans les ombres sans les remonter inutilement.',
    quality:'CORRECTE À SURVEILLER',
    qualityText:'Détail exploitable, mais la propreté dépend davantage du capteur, de l’ISO/EI et du niveau réel de lumière.'
  };
  if(/MÉDIUM|ZONE PRINCIPALE|CONTRASTE PRINCIPAL/.test(label))return {
    useTitle:'SUJETS ET INFORMATIONS IMPORTANTES',
    useText:'Zone généralement confortable pour les éléments dont tu veux conserver texture et nuances.',
    quality:'TRÈS BONNE',
    qualityText:'Zone de signal robuste et facile à travailler, sous réserve du rendu artistique recherché.'
  };
  if(/TRÈS HAUTES|ROLL-OFF/.test(label))return {
    useTitle:'HAUTES LUMIÈRES À PRÉSERVER',
    useText:'Utile pour placer des sources, fenêtres ou reflets que tu veux encore conserver sans les sacrifier.',
    quality:'COMPRIMÉE',
    qualityText:'La courbe consacre moins de variation de signal aux écarts de lumière ; les nuances deviennent plus serrées.'
  };
  if(/HAUTES/.test(label))return {
    useTitle:'ÉLÉMENTS LUMINEUX IMPORTANTS',
    useText:'Bonne zone pour des hautes lumières dont tu veux garder la texture tout en restant lumineuses.',
    quality:'BONNE',
    qualityText:'Signal encore confortable, avec une compression croissante en allant vers le haut de la courbe.'
  };
  if(/EXTRÊME|HORS REPÈRE|SATURATION/.test(label))return {
    useTitle:'SPÉCULAIRES / ZONES SACRIFIABLES',
    useText:'À réserver de préférence aux pics lumineux ou aux éléments dont la texture n’est pas critique.',
    quality:'TRÈS COMPRIMÉE / LIMITE',
    qualityText:'Très faible marge de signal : risque de perte rapide de nuances ou de dépassement du repère documenté.'
  };
  return {
    useTitle:'SELON LE SUJET',
    useText:zone?.text||zone?.title||'Zone de la courbe sélectionnée.',
    quality:'À INTERPRÉTER',
    qualityText:'La qualité finale dépend de la caméra, de l’ISO/EI et de la quantité réelle de lumière.'
  };
}
function waveformExplorerLatitude(guide,info){
  if(!Number.isFinite(info?.stop)){
    if(Number.isFinite(guide?.highSignal)){
      const pts=guide.highSignal-info.value;
      return {value:`${fmt(Math.max(0,pts),1)} points vers le haut`,text:`Jusqu’au repère ${guide.highLabel}. Ce profil n’a pas de conversion fiable en stops.`};
    }
    return {value:'—',text:'Latitude non renseignée de façon suffisamment fiable pour ce profil.'};
  }
  const low=Array.isArray(guide?.stopRange)&&guide.stopRange.length===2?Number(guide.stopRange[0]):Number(guide?.lowStop);
  const high=Array.isArray(guide?.stopRange)&&guide.stopRange.length===2?Number(guide.stopRange[1]):Number(guide?.highStop);
  const parts=[];
  if(Number.isFinite(high)) parts.push(`+${fmt(Math.max(0,high-info.stop),1)} stops ↑`);
  if(Number.isFinite(low)) parts.push(`−${fmt(Math.max(0,info.stop-low),1)} stops ↓`);
  if(parts.length===2){
    return {value:parts.join(' · '),text:'Jusqu’aux repères haut et bas documentés de la courbe. Ce n’est pas une mesure garantie de la latitude réelle du capteur.'};
  }
  if(parts.length===1){
    return {value:parts[0],text:Number.isFinite(high)?`Jusqu’au repère ${guide.highLabel}. Le repère bas n’est pas suffisamment documenté.`:'Jusqu’au repère bas documenté. Le repère haut n’est pas suffisamment documenté.'};
  }
  return {value:'—',text:'Latitude non renseignée de façon suffisamment fiable pour ce profil.'};
}

function waveformTerrainKey(zone,value,guide,stop){
  if(Number.isFinite(stop)){
    if(stop>=3) return 'window';
    if(stop>=1) return 'bright-face';
    if(stop>=-1) return 'dark-face';
    if(stop>=-3) return 'shadow-detail';
    return 'shadow-low';
  }
  const label=String(zone?.label||zone?.title||'').toUpperCase();
  const z=guide?.zones||[];
  const idx=Math.max(0,z.indexOf(zone));
  const count=Math.max(1,z.length);
  const rel=(idx+.5)/count;
  if(/EXTRÊME|ROLL-OFF FORT|TRÈS HAUTES|SATURATION|HORS REPÈRE/.test(label) || rel>.82) return 'window';
  if(/HAUTES|ROLL-OFF DOUX|MÉDIUMS HAUTS/.test(label) || rel>.62) return 'bright-face';
  if(/MÉDIUM|ZONE PRINCIPALE|CONTRASTE PRINCIPAL/.test(label) || rel>.42) return 'dark-face';
  if(/OMBRE|BASSES LUMIÈRES/.test(label) || rel>.20) return 'shadow-detail';
  return 'shadow-low';
}
function renderTerrainExamples(zone,value,guide,stop){
  const key=waveformTerrainKey(zone,value,guide,stop);
  document.querySelectorAll('#quickReadTerrainExamples [data-terrain]').forEach(el=>el.classList.toggle('active',el.dataset.terrain===key));
  const note=$("quickReadTerrainNote");
  if(note){
    const labels={
      'window':'Exemples typiques : fenêtre, ciel clair, source visible ou reflet très lumineux.',
      'bright-face':'Exemples typiques : visage très éclairé, peau claire lumineuse, matière claire importante.',
      'dark-face':'Exemples typiques : visage plus sombre, sujet principal volontairement dense, matière en médiums bas.',
      'shadow-detail':'Exemples typiques : ombre avec matière, côté non éclairé d’un visage, décor sombre dont tu veux garder le détail.',
      'shadow-low':'Exemples typiques : ombre profonde, fond sombre ou zone dont le détail est secondaire.'
    };
    note.textContent=`${labels[key]} Repères indicatifs : le placement dépend du rendu recherché.`;
  }
}

function renderCompactExpoTools(guide,cam,p,bases){
  if(!guide)return;
  renderQuickWaveformBar(guide);
  renderQuickHighBar(guide);
  const canSim=!!guide.stopsFn;
  const high=scenePointInfo(guide,waveformScene.high,0);

  if($("quickHighInput")&&document.activeElement!==$("quickHighInput"))$("quickHighInput").value=String(waveformScene.high);
  if($("quickHighSlider")&&document.activeElement!==$("quickHighSlider"))$("quickHighSlider").value=String(waveformScene.high);
  if($("quickHighCursor"))$("quickHighCursor").style.left=`${Math.max(0,Math.min(100,Number(waveformScene.high)||0))}%`;

  const openEl=$("quickOpenMargin"),openTxt=$("quickOpenText");
  let highLimitSignal=Number.isFinite(guide.highSignal)?Math.max(0,Math.min(100,guide.highSignal)):100;
  if(canSim&&Number.isFinite(guide.highStop)&&Number.isFinite(high.stop)){
    const m=guide.highStop-high.stop;
    if(openEl)openEl.textContent=m>=0?`+${fmt(m,1)} stop${m>=1.5?"s":""}`:"DÉPASSÉ";
    if(openTxt)openTxt.textContent=m>=0?`avant le repère haut ${guide.highLabel}`:`la haute lumière dépasse déjà le repère ${guide.highLabel}`;
  }else if(Number.isFinite(highLimitSignal)){
    const pts=highLimitSignal-high.value;
    if(openEl)openEl.textContent=pts>=0?`${fmt(pts,1)} points`:"DÉPASSÉ";
    if(openTxt)openTxt.textContent=guide.key==="scinetone"?`jusqu’à la saturation du signal · conversion en stops non fiable`:`jusqu’au repère haut · conversion en stops non disponible`;
  }else{
    if(openEl)openEl.textContent="—";if(openTxt)openTxt.textContent="Repère haut non renseigné.";
  }

  const currentPct=Math.max(0,Math.min(100,high.value));
  const limitPct=Math.max(currentPct,Math.min(100,highLimitSignal));
  if($("quickHighRailCurrent"))$("quickHighRailCurrent").style.left=`${currentPct}%`;
  if($("quickHighRailLimit"))$("quickHighRailLimit").style.left=`${limitPct}%`;
  if($("quickHighRailFill")){
    $("quickHighRailFill").style.left=`${currentPct}%`;
    $("quickHighRailFill").style.width=`${Math.max(0,limitPct-currentPct)}%`;
  }
  if($("quickHighRailNow"))$("quickHighRailNow").textContent=`ACTUEL ${fmt(currentPct,1)} %`;
  if($("quickHighRailEnd"))$("quickHighRailEnd").textContent=`LIMITE ${fmt(limitPct,1)} %`;

  const readV=Math.max(0,Math.min(100,Number(compactExpoState.read)||0));
  if($("quickReadSlider")&&document.activeElement!==$("quickReadSlider"))$("quickReadSlider").value=String(readV);
  if($("quickReadValue"))$("quickReadValue").textContent=fmt(readV,readV%1?1:0);
  if($("quickWaveformCursor"))$("quickWaveformCursor").style.left=`${readV}%`;
  const readInfo=scenePointInfo(guide,readV,0);
  const advice=waveformExplorerAdvice(readInfo.zone,readV,guide);
  const latitude=waveformExplorerLatitude(guide,readInfo);
  const signalTrend=renderSignalTrend(readInfo.zone,readV);
  if($("quickReadAnswer"))$("quickReadAnswer").textContent=canSim&&Number.isFinite(readInfo.stop)?`${readInfo.zone?.label||"—"} · ${compactStopLabel(readInfo.stop)}`:(readInfo.zone?.label||"—");
  if($("quickReadText"))$("quickReadText").textContent=readInfo.zone?.text||readInfo.zone?.title||"Position dans la courbe.";
  if($("quickReadUseTitle"))$("quickReadUseTitle").textContent=advice.useTitle;
  if($("quickReadUseText"))$("quickReadUseText").textContent=advice.useText;
  if($("quickReadLatitude"))$("quickReadLatitude").textContent=latitude.value;
  if($("quickReadLatitudeText"))$("quickReadLatitudeText").textContent=latitude.text;
  if($("quickReadQuality"))$("quickReadQuality").textContent=advice.quality;
  if($("quickReadQualityText"))$("quickReadQualityText").textContent=signalTrend?`${advice.qualityText} ${signalTrend.note}`:advice.qualityText;
  renderTerrainExamples(readInfo.zone,readV,guide,readInfo.stop);

  const place=Number(compactExpoState.placeStop)||0;
  let signal=canSim?guide.stopsFn(place):NaN;
  if($("quickPlaceSignal"))$("quickPlaceSignal").textContent=Number.isFinite(signal)?`${fmt(signal,1)} %`:"—";
  if($("quickPlaceText"))$("quickPlaceText").textContent=canSim?`${compactStopLabel(place)} par rapport au gris de la courbe.`:"Pas de table stops ↔ signal suffisamment fiable pour ce profil.";
  document.querySelectorAll("#placeStopPresets button").forEach(b=>{
    const s=Number(b.dataset.stop);const valid=canSim&&Number.isFinite(guide.stopsFn(s));
    b.disabled=!valid;b.classList.toggle("active",Math.abs(s-place)<.01);
  });
  const cineEi=/cine\s*ei/i.test(String(p?.label||""))&&bases?.length&&canSim;
  if($("quickPlaceEi")){
    if(cineEi){
      $("quickPlaceEi").textContent=bases.map(base=>`Base ${formatThousands(base)} → EI ${formatThousands(Math.max(1,Math.round(base/Math.pow(2,place))))}`).join(" · ");
    }else $("quickPlaceEi").textContent="";
  }
}

function renderExposureGuide(){
  const cam=currentCamera(),p=currentProfile()||{},guide=exposureProfileGuide();
  const line=$("exposeProfileLine"),status=$("exposeStatus"),yes=$("exposeSupported"),no=$("exposeUnsupported");
  if(line)line.textContent=`${cam?.name||cam?.expo?.label||"Caméra"} · ${p.label||gammaMode||"Profil"}`;
  if(status){status.textContent=guide?guide.status:"NON RENSEIGNÉ";status.classList.toggle("off",!guide);}
  yes?.classList.toggle("hidden",!guide);no?.classList.toggle("hidden",!!guide);
  const bases=currentBaseIsos();
  const camSummary=$("cameraSettingsSummary");
  if(camSummary)camSummary.textContent=`${cam?.expo?.label||cam?.name||"Caméra"} · ${p.label||gammaMode||"Profil"}`;
  renderCompactExpoTools(guide,cam,p,bases);
  if($("refProfileName"))$("refProfileName").textContent=p.label||gammaMode||"—";
  if($("refBaseValues"))$("refBaseValues").textContent=bases.length?bases.map(formatThousands).join(" / "):"—";
  if($("refGreyValue"))$("refGreyValue").textContent=guide&&Number.isFinite(guide.grey)?`${fmt(guide.grey,1)} %`:"—";
  if($("refWhiteValue"))$("refWhiteValue").textContent=guide?.refWhite||"—";
  if($("cameraRefNote"))$("cameraRefNote").textContent=guide?.refNote||"Les repères précis de ce profil seront ajoutés lorsqu’ils sont documentés de façon fiable.";
  if(!guide)return;

  renderWaveformSegments(guide);renderWaveformMarkers(guide);
  const keyGrid=$("exposeKeyGrid");
  if(keyGrid)keyGrid.innerHTML=(guide.markers||[]).map(m=>`<div class="wave-key"><b>${escapeHtml(m.label)}</b><span>${escapeHtml(m.sub||"")}</span></div>`).join("");
  if($("exposeNote"))$("exposeNote").textContent=guide.note||"";

  const canSim=!!guide.stopsFn;
  const shift=canSim?waveformScene.shift:0;
  const pointKeys=["skin","high","shadow"];
  const infos={};
  pointKeys.forEach(key=>{
    const dom=scenePointDom(key);
    if(dom.input && document.activeElement!==dom.input)dom.input.value=String(waveformScene[key]);
    const info=scenePointInfo(guide,waveformScene[key],shift);infos[key]=info;
    if(dom.now){
      dom.now.textContent=canSim?`${sceneStopText(info.stop)} · ${info.zone?.label||"—"}`:(info.zone?.label||"—");
    }
    if(dom.after){
      if(canSim&&Math.abs(shift)>.04){
        const flag=Number.isFinite(guide.highStop)&&info.afterStop>guide.highStop+.02?" · AU-DESSUS DU REPÈRE HAUT":"";
        dom.after.textContent=`Après ${sceneStopText(shift)} → ${sceneSignalText(info.afterSignal)} · ${sceneStopText(info.afterStop)}${flag}`;
      }else if(canSim){
        dom.after.textContent="Déplace l’exposition pour simuler.";
      }else{
        dom.after.textContent="Lecture de zone uniquement pour ce profil.";
      }
    }
  });
  renderScenePins(guide,infos,shift);

  const stopVals=pointKeys.map(k=>infos[k].stop).filter(Number.isFinite);
  if($("sceneContrast"))$("sceneContrast").textContent=canSim&&stopVals.length>=2?`${fmt(Math.max(...stopVals)-Math.min(...stopVals),1)} stops`:"—";
  if($("sceneContrastText"))$("sceneContrastText").textContent=canSim?"Écart entre la valeur la plus basse et la plus haute saisies.":"Pas de conversion stops ↔ signal fiable pour cette courbe.";

  const highInfo=pointKeys.map(k=>({k,...infos[k]})).sort((a,b)=>b.value-a.value)[0];
  if($("sceneHighPoint"))$("sceneHighPoint").textContent=highInfo?`${fmt(highInfo.value,1)} %`:"—";
  if($("sceneHighText"))$("sceneHighText").textContent=highInfo?`${highInfo.zone?.label||"—"}${canSim?` · ${sceneStopText(highInfo.stop)}`:""}`:"—";

  if($("sceneHighMargin")){
    if(canSim&&highInfo&&Number.isFinite(guide.highStop)&&Number.isFinite(highInfo.stop)){
      const margin=guide.highStop-highInfo.stop;
      $("sceneHighMargin").textContent=margin>=0?`${fmt(margin,1)} stops`:`+${fmt(Math.abs(margin),1)} au-dessus`;
      if($("sceneHighMarginText"))$("sceneHighMarginText").textContent=margin>=0?`Jusqu’au repère ${guide.highLabel}. Ce n’est pas une marge capteur garantie.`:`Le point dépasse déjà le repère ${guide.highLabel}. Ce n’est pas une mesure de clipping capteur.`;
    }else{
      $("sceneHighMargin").textContent=guide.highSignal?`${fmt(Math.max(0,guide.highSignal-(highInfo?.value||0)),1)} points`:"—";
      if($("sceneHighMarginText"))$("sceneHighMarginText").textContent=guide.key==="scinetone"?"Distance en niveau vidéo jusqu’au début du roll-off à 70 %, pas en stops.":"Repère de courbe uniquement.";
    }
  }

  const shiftSlider=$("sceneShiftSlider"),shiftCard=$("sceneShiftCard");
  if(shiftSlider){shiftSlider.disabled=!canSim;shiftSlider.value=(canSim?waveformScene.shift:0).toFixed(1);}
  shiftCard?.classList.toggle("disabled",!canSim);
  document.querySelectorAll("#sceneShiftPresets button").forEach(b=>b.disabled=!canSim);
  if($("sceneShiftIntent"))$("sceneShiftIntent").textContent=canSim?sceneStopText(waveformScene.shift):"NON DISPONIBLE";
  if($("sceneShiftCopy")){
    if(!canSim)$("sceneShiftCopy").textContent="Cette courbe n’a pas encore de relation stops ↔ signal suffisamment fiable dans BOS pour simuler un déplacement.";
    else if(Math.abs(waveformScene.shift)<.05)$("sceneShiftCopy").textContent="Déplace le curseur pour voir où arriveraient les trois zones sur le waveform.";
    else $("sceneShiftCopy").textContent=waveformScene.shift>0?`Si tu augmentes l’exposition de ${sceneStopText(waveformScene.shift)}, les trois points montent dans la courbe. Les valeurs hors de la plage documentée restent volontairement non extrapolées.`:`Si tu réduis l’exposition de ${sceneStopText(Math.abs(waveformScene.shift))}, les trois points descendent dans la courbe. Les valeurs hors de la plage documentée restent volontairement non extrapolées.`;
  }
  scenePresetButtons();

  const sim=$("sceneSimList");
  if(sim){
    const rows=[
      ["SUJET / PEAU",infos.skin],
      ["HAUTE LUMIÈRE",infos.high],
      ["OMBRE À CONSERVER",infos.shadow]
    ];
    sim.innerHTML=rows.map(([label,i])=>{
      if(!canSim)return `<div class="scene-sim-row"><span>${label}</span><strong>${fmt(i.value,1)} %</strong><small>${i.zone?.title||"—"}</small></div>`;
      const after=sceneSignalText(i.afterSignal),warn=Number.isFinite(guide.highStop)&&i.afterStop>guide.highStop+.02;
      return `<div class="scene-sim-row${warn?" warning":""}"><span>${label}</span><strong>${fmt(i.value,1)} % → ${after}</strong><small>${sceneStopText(i.stop)} → ${sceneStopText(i.afterStop)}${warn?` · au-dessus du repère ${escapeHtml(guide.highLabel)}`:""}</small></div>`;
    }).join("");
  }

  const card=$("cineEiCard"),values=$("cineEiValues"),title=$("cineEiTitle");
  const cineEi=guide.key==="slog3" && /cine\s*ei/i.test(String(p.label||"")) && canSim && bases.length;
  card?.classList.toggle("hidden",!cineEi);
  if(cineEi){
    if(title)title.textContent=Math.abs(waveformScene.shift)>.05?`Pour déplacer de ${sceneStopText(waveformScene.shift)}`:"Base nominale";
    if(values)values.innerHTML=bases.map(base=>{
      const ei=Math.max(1,Math.round(base/Math.pow(2,waveformScene.shift)));
      return `<span class="cine-ei-pill">Base ${formatThousands(base)} → EI ${formatThousands(ei)}</span>`;
    }).join("");
  }
}

[["scenePointSkin","skin"],["scenePointHigh","high"],["scenePointShadow","shadow"]].forEach(([id,key])=>{
  $(id)?.addEventListener("input",e=>{
    const v=Math.max(0,Math.min(100,Number(String(e.target.value).replace(",","."))||0));
    waveformScene[key]=v;renderExposureGuide();
  });
});
$("sceneShiftSlider")?.addEventListener("input",e=>setSceneShift(e.target.value));
$("sceneShiftReset")?.addEventListener("click",()=>setSceneShift(0));
document.querySelectorAll("#sceneShiftPresets button").forEach(btn=>btn.addEventListener("click",()=>setSceneShift(btn.dataset.shift)));

$("quickHighInput")?.addEventListener("input",e=>{waveformScene.high=Math.max(0,Math.min(100,Number(String(e.target.value).replace(",","."))||0));renderExposureGuide();});
$("quickHighSlider")?.addEventListener("input",e=>{waveformScene.high=Math.max(0,Math.min(100,Number(String(e.target.value).replace(",","."))||0));renderExposureGuide();});
$("quickReadSlider")?.addEventListener("input",e=>{compactExpoState.read=Math.max(0,Math.min(100,Number(String(e.target.value).replace(",","."))||0));renderExposureGuide();});
document.querySelectorAll("#placeStopPresets button").forEach(btn=>btn.addEventListener("click",()=>{compactExpoState.placeStop=Number(btn.dataset.stop)||0;renderExposureGuide();}));

// Replace the legacy updater once the original app has initialised.
// V3.34 : les changements restent libres tant que CALCULER n'est pas pressé.
updateUI=function(){
  ensureProfileValid();ensureGainBaseValid();
  const methodSig=simpleMethodSig();
  const methodChanged=methodSig!==simpleLastMethodSig;
  if(methodChanged){simpleLastMethodSig=methodSig;simpleLimitsLoadedFor="";simpleLoadLimits(true);}
  simpleRenderLimits();
  simpleRenderLocks();
  renderExposureGuide();
  // Garde les valeurs de référence et de calcul dans les limites choisies, sans lancer de compensation.
  simpleClampReferenceToLimits();
  simpleClampCurrentToLimits();
  simpleRenderRows();simpleRenderReference();updateBaseIsoNote();renderExposureGuide();
  if(methodChanged){
    // Sur changement caméra/profil, garde une référence valide et lisible.
    const r=simpleReferenceValues();
    if(!(r.iso>0)){
      const v=simplePhysicalValues();simpleSetReferenceFromValues(v);
    }
    simpleRenderReference();
    simpleSetCalcSummary("Change un réglage dans CALCUL : les autres s’adaptent automatiquement.");
  }
};

simpleLoadRoles();
$("isoMinSelect")?.addEventListener("change",e=>{simpleIsoMin=Number(e.target.value);if(simpleIsoMin>simpleIsoMax)simpleIsoMax=simpleIsoMin;simpleSave();updateUI();});
$("isoMaxSelect")?.addEventListener("change",e=>{simpleIsoMax=Number(e.target.value);if(simpleIsoMax<simpleIsoMin)simpleIsoMin=simpleIsoMax;simpleSave();updateUI();});
$("apertureMinSelect")?.addEventListener("change",e=>{simpleApertureMin=Number(e.target.value);if(simpleApertureMin>simpleApertureMax)simpleApertureMax=simpleApertureMin;simpleSave();updateUI();});
$("apertureMaxSelect")?.addEventListener("change",e=>{simpleApertureMax=Number(e.target.value);if(simpleApertureMax<simpleApertureMin)simpleApertureMin=simpleApertureMax;simpleSave();updateUI();});
document.querySelectorAll("[data-simple-lock]").forEach(btn=>btn.addEventListener("click",()=>{
  const key=btn.dataset.simpleLock;
  if(!(key in simpleLocks))return;
  simpleLocks[key]=!simpleLocks[key];
  simpleSave();
  simpleRenderLocks();
  const names={aperture:"Diaph",iso:(currentSensitivityUnit()||"ISO").toUpperCase(),shutter:"Shutter",nd:"ND"};
  simpleSetCalcSummary(`${names[key]} ${simpleLocks[key]?"verrouillé : le calcul ne le modifiera pas.":"déverrouillé : le calcul peut le modifier."}`,"ok");
}));
$("simpleResetBtn")?.addEventListener("click",()=>{
  simpleRoles={aperture:"auto",iso:"auto",shutter:"auto",nd:"auto"};
  simpleLocks={aperture:false,iso:false,shutter:false,nd:false};
  simpleLimitsLoadedFor="";simpleLoadLimits(true);
  inputs.newAperture.value="2.8";simpleSetIsoPhysical(simpleDefaultMin());inputs.newShutter.value=shutterMode==="speed"?"50":"180";inputs.newNd.value="0";
  simpleSetReferenceFromValues(simplePhysicalValues());
  simpleBaselineValues=null;simpleLastRecap=null;simpleSave();updateUI();simpleSetCalcSummary("Situation 1 et CALCUL réinitialisés.","ok");
});

$("simpleCalcResetBtn")?.addEventListener("click",()=>{
  simpleSetCurrentFromValues(simpleReferenceValues());
  simpleLastRecap=null;
  updateUI();
  simpleSetCalcSummary("CALCUL réaligné sur la Situation 1.","ok");
});

// Initial current values for the simplified workflow.
inputs.newAperture.value=inputs.newAperture.value||"2.8";
if(!(simpleCurrentIsoPhysical()>0))simpleSetIsoPhysical(simpleDefaultMin());
if(!(num(inputs.newShutter.value)>0))inputs.newShutter.value=shutterMode==="speed"?"50":"180";
if(!(num(inputs.newNd.value)>=0))inputs.newNd.value="0";
const initialRef=simpleReferenceValues();
if(!(initialRef.aperture>0&&initialRef.iso>0&&initialRef.shutter>0&&initialRef.nd>=0))simpleSetReferenceFromValues(simplePhysicalValues());
loadScenes();
simpleLastMethodSig="";simpleBaselineValues=null;updateUI();
