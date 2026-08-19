const CAMERA_DB_URL="https://raw.githubusercontent.com/BrunoSetTools/BOS-CAMERA-DB/main/cameras.json";
const CAMERA_DB_CACHE_KEY="bos-camera-db-cache-v2";
const FALLBACK_CAMERA_DB={"schemaVersion":1,"databaseVersion":"1.2","updated":"2026-08-18","cameras":[{"id":"fx30","name":"Sony FX30","brand":"Sony","group":"SONY","sensorWidthMm":23.3,"dof":{"label":"Super 35 / APS-C","cocMm":0.019,"cropToFF":1.5},"media":{"label":"FX30","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":140,"50":200,"100":280,"23.98":100,"29.97":140,"59.94":200,"119.88":280},"note":"Long GOP · 4:2:2 10 bit"},"XAVC HS":{"kind":"fixed","rates":{"50":200,"100":280,"23.98":100,"59.94":200,"119.88":280},"note":"HEVC Long GOP · 4:2:2 10 bit"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":50,"50":50,"100":100,"23.98":50,"29.97":50,"59.94":50,"119.88":100},"note":"Long GOP · preset 4:2:2 10 bit / débit haut"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Cine EI","baseValues":[800,2500],"defaultValue":800,"baseType":"dualBaseISO","gain":{"type":"cameraSpecific"},"sources":["https://helpguide.sony.net/ilc/2220/v1/en/contents/TP1000888939.html"]},"scinetone":{"label":"S-Cinetone","baseValues":[],"defaultValue":null,"baseType":"notPublished","gain":{"type":"cameraSpecific"},"note":"Sony ne publie pas de Base ISO Cine EI pour S-Cinetone ; ne pas surligner un ISO natif par déduction.","sources":["https://helpguide.sony.net/ilc/2220/v1/en/contents/TP1000876510.html"]}}}},{"id":"fx3","name":"Sony FX3","brand":"Sony","group":"SONY","sensorWidthMm":35.6,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0},"media":{"label":"FX3","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":140,"50":200,"100":280,"23.98":100,"29.97":140,"59.94":200,"119.88":280},"note":"Long GOP · 4:2:2 10 bit"},"XAVC HS":{"kind":"fixed","rates":{"50":200,"100":280,"23.98":100,"59.94":200,"119.88":280},"note":"HEVC Long GOP · 4:2:2 10 bit"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S":{"kind":"fixed","rates":{"25":50,"50":50,"100":100,"23.98":50,"29.97":50,"59.94":50,"119.88":100},"note":"Long GOP · preset 4:2:2 10 bit / débit haut"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Cine EI","baseValues":[800,12800],"defaultValue":800,"baseType":"dualBaseISO","gain":{"type":"cameraSpecific"},"sources":["https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000888939.html"]},"scinetone":{"label":"S-Cinetone","baseValues":[],"defaultValue":null,"baseType":"notPublished","gain":{"type":"cameraSpecific"},"note":"Ne pas déduire les Base ISO S-Log3 pour S-Cinetone.","sources":["https://www.sony.fr/electronics/appareils-photo-a-objectifs-interchangeables/ilme-fx3a"]}}}},{"id":"fx5","name":"Sony FX5","brand":"Sony","group":"SONY","sensorWidthMm":35.9,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0},"media":{"label":"FX5","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S-L 422":{"kind":"fixed","rates":{"25":140,"50":200,"100":280,"23.98":100,"29.97":140,"59.94":200,"119.88":280},"note":"Long GOP · 4:2:2 10 bit"},"XAVC HS-L 422":{"kind":"fixed","rates":{"50":200,"100":280,"23.98":100,"59.94":200,"119.88":280},"note":"HEVC Long GOP · 4:2:2 10 bit"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC S-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC S-L 422":{"kind":"fixed","rates":{"25":50,"50":50,"100":100,"23.98":50,"29.97":50,"59.94":50,"119.88":100},"note":"Long GOP · preset 4:2:2 10 bit / débit haut"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Cine EI / Flexible ISO","baseValues":[800,4000,12800],"defaultValue":800,"baseType":"multiBaseISO","gain":{"type":"cameraSpecific"},"specialModes":[{"id":"iso800DualGain","label":"ISO 800 (Dual Gain)","value":800,"type":"dualGain"}],"sources":["https://helpguide.sony.net/ilc/2630/v1/en/contents/base_iso.html"]},"scinetone":{"label":"S-Cinetone","baseValues":[],"defaultValue":null,"baseType":"notPublished","gain":{"type":"cameraSpecific"},"note":"S-Cinetone est disponible en mode Custom ; les valeurs Base ISO du mode Log ne doivent pas être transposées automatiquement.","sources":["https://helpguide.sony.net/ilc/2630/v1/en/contents/paint_look.html"]}}}},{"id":"fx6","name":"Sony FX6","brand":"Sony","group":"SONY","sensorWidthMm":35.6,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0},"media":{"label":"FX6","modes":{"DCI 4K":{"width":4096,"height":2160,"codecs":{"XAVC-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"}}},"UHD 4K":{"width":3840,"height":2160,"codecs":{"XAVC-I":{"kind":"fixed","rates":{"24":240,"25":250,"50":500,"23.98":240,"29.97":300,"59.94":600},"note":"All-Intra · 4:2:2 10 bit"},"XAVC-L":{"kind":"fixed","rates":{"25":100,"50":150,"23.98":100,"29.97":100,"59.94":150},"note":"Long GOP · VBR"}}},"HD":{"width":1920,"height":1080,"codecs":{"XAVC-I":{"kind":"fixed","rates":{"25":93,"50":185,"23.98":89,"29.97":111,"59.94":222},"note":"All-Intra · 4:2:2 10 bit"},"XAVC-L 50":{"kind":"fixed","rates":{"25":50,"50":50,"23.98":50,"29.97":50,"59.94":50},"note":"Long GOP · VBR · 50 Mb/s max"},"XAVC-L 35":{"kind":"fixed","rates":{"25":35,"50":35,"23.98":35,"29.97":35,"59.94":35},"note":"Long GOP · VBR · 35 Mb/s max"}}}}},"exposure":{"unit":"ISO","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3 / Cine EI","baseValues":[800,12800],"defaultValue":800,"baseType":"dualBaseISO","gain":{"type":"cameraSpecific"},"sources":["https://pro.sony/bp_BR/products/handheld-camcorders/ilme-fx6"]},"scinetone":{"label":"S-Cinetone","baseValues":[],"defaultValue":null,"baseType":"notPublished","gain":{"type":"cameraSpecific"},"note":"Le second Base ISO 12 800 est documenté par Sony pour S-Log3 ; ne pas le transposer à S-Cinetone sans source dédiée.","sources":["https://pro.sony/en_GB/filmmaking/filmmaking-stories/ilme-fx6-wilderness-bts"]}}}},{"id":"vraptor","name":"RED V-RAPTOR VV","brand":"RED","group":"ARRI / RED","sensorWidthMm":40.96,"dof":{"label":"Vista Vision","cocMm":0.033,"cropToFF":0.88},"exposure":{"unit":"ISO","defaultProfile":"ipp2","profiles":{"ipp2":{"label":"IPP2 / Log3G10","baseValues":[],"referenceValues":[800],"defaultValue":800,"baseType":"referenceOnly","isoRange":[250,12800],"gain":{"type":"metadata"},"note":"RED décrit ISO 800 comme valeur ISO par défaut et point de départ recommandé. L’ISO R3D est un réglage de monitoring/métadonnée ajustable en post, pas un Dual Native ISO.","sources":["https://docs.red.com/955-0199/955-0199_V1.3_Rev-B_RED_PS_V-RAPTOR_8K_VV_Operation_Guide/Content/4_Menus/a_Image_LUT/02_ISO.htm"]}}}},{"id":"miniLF","name":"ARRI ALEXA Mini LF","brand":"ARRI","group":"ARRI / RED","sensorWidthMm":36.7,"dof":{"label":"Large Format","cocMm":0.03,"cropToFF":0.98},"media":{"label":"ALEXA Mini LF","modes":{"4.5K Open Gate":{"width":4448,"height":3096,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","40"]},"UHD":{"width":3840,"height":2160,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60"]},"HD":{"width":1920,"height":1080,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60","75","90"]}}},"exposure":{"unit":"EI","defaultProfile":"logc3","profiles":{"logc3":{"label":"ARRI Log C3","baseValues":[800],"defaultValue":800,"baseType":"baseSensitivity","eiRange":[160,3200],"gain":{"type":"ei"},"sources":["https://www.arri.com/en/cine-systems/cine-cameras/alexa-mini-lf"]}}}},{"id":"alexa35","name":"ARRI ALEXA 35","brand":"ARRI","group":"ARRI / RED","sensorWidthMm":27.99,"dof":{"label":"Super 35","cocMm":0.023,"cropToFF":1.29},"media":{"label":"ALEXA 35","modes":{"4.6K Open Gate":{"width":4608,"height":3164,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60"]},"4K 16:9":{"width":4096,"height":2304,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60","75","100"]},"UHD":{"width":3840,"height":2160,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60","100","120"]},"HD":{"width":1920,"height":1080,"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 4444":{"kind":"prores","target1080":330,"note":"ProRes · débit cible VBR"},"ProRes 4444 XQ":{"kind":"prores","target1080":500,"note":"ProRes · débit cible VBR"}},"fps":["24","25","30","48","50","60","100","120"]}}},"exposure":{"unit":"EI","defaultProfile":"logc4","profiles":{"logc4":{"label":"ARRI LogC4 / REVEAL","baseValues":[800],"defaultValue":800,"baseType":"baseSensitivity","eiRange":[160,6400],"gain":{"type":"ei"},"specialModes":[{"id":"enhancedSensitivity","label":"Enhanced Sensitivity","type":"enhancedSensitivity"}],"note":"EI 800 reste la sensibilité de base ALEV4 ; Enhanced Sensitivity améliore le bruit en basse lumière sans être traité ici comme un second ISO natif.","sources":["https://www.arri.com/en/cine-systems/cine-cameras/legacy-cine-cameras/alexa-35","https://www.arri.com/en/learn-help/learn-help-camera-system/image-science/hdr-faq"]}}}},{"id":"bmpcc4k","name":"Blackmagic Pocket Cinema Camera 4K","brand":"Blackmagic","group":"BLACKMAGIC","sensorWidthMm":18.96,"sensorHeightMm":10.0,"dof":{"label":"Four Thirds","cocMm":0.014,"cropToFF":1.9},"media":{"label":"Cinema 4K","modes":{"4K DCI":{"width":4096,"height":2160,"fps":["24","25","30","50","60"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":136,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":82,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":51,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":35,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"UHD":{"width":3840,"height":2160,"fps":["24","25","30","50","60"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":127,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":77,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":48,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":32,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"HD":{"width":1920,"height":1080,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":33,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":20,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":13,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":8.4,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}}}},"exposure":{"unit":"ISO","defaultProfile":"bmfilm5","profiles":{"bmfilm5":{"label":"Blackmagic Film Gen 5","baseValues":[400,3200],"defaultValue":400,"baseType":"dualNativeISO","gain":{"type":"cameraSpecific"},"sources":["https://www.blackmagicdesign.com/products/blackmagicpocketcinemacamera"]}}}},{"id":"bmpcc6k","name":"Blackmagic Pocket Cinema Camera 6K","brand":"Blackmagic","group":"BLACKMAGIC","sensorWidthMm":23.1,"sensorHeightMm":12.99,"dof":{"label":"Super 35","cocMm":0.018,"cropToFF":1.56},"media":{"label":"Cinema 6K","modes":{"6K":{"width":6144,"height":3456,"fps":["24","25","30","50"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":323,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":194,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":121,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":81,"note":"Blackmagic RAW · débit constant"}}},"4K DCI":{"width":4096,"height":2160,"fps":["24","25","30","50","60"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":136,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":82,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":51,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":35,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"UHD":{"width":3840,"height":2160,"fps":["24","25","30","50","60"],"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"HD":{"width":1920,"height":1080,"fps":["24","25","30","50","60"],"codecs":{"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}}}},"exposure":{"unit":"ISO","defaultProfile":"bmfilm5","profiles":{"bmfilm5":{"label":"Blackmagic Film Gen 5","baseValues":[400,3200],"defaultValue":400,"baseType":"dualNativeISO","gain":{"type":"cameraSpecific"},"sources":["https://www.blackmagicdesign.com/products/blackmagicpocketcinemacamera/techspecs"]}}}},{"id":"ursamp46kg2","name":"Blackmagic URSA Mini Pro 4.6K G2","brand":"Blackmagic","group":"BLACKMAGIC","sensorWidthMm":25.34,"sensorHeightMm":14.25,"dof":{"label":"Super 35","cocMm":0.019,"cropToFF":1.42},"media":{"label":"URSA Mini Pro 4.6K","modes":{"4.6K":{"width":4608,"height":2592,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":183,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":110,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":68,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":46,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"UHD":{"width":3840,"height":2160,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":127,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":76,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":48,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":32,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}},"HD":{"width":1920,"height":1080,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 3:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":33,"note":"Blackmagic RAW · débit constant"},"BRAW 5:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":20,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":12,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":30,"baseMBps":8,"note":"Blackmagic RAW · débit constant"},"ProRes 422 HQ":{"kind":"prores","target1080":220,"note":"ProRes · débit cible VBR"},"ProRes 422":{"kind":"prores","target1080":147,"note":"ProRes · débit cible VBR"},"ProRes 422 LT":{"kind":"prores","target1080":102,"note":"ProRes · débit cible VBR"},"ProRes Proxy":{"kind":"prores","target1080":45,"note":"ProRes · débit cible VBR"}}}}},"exposure":{"unit":"ISO","defaultProfile":"bmfilm","profiles":{"bmfilm":{"label":"Blackmagic Film","baseValues":[800],"defaultValue":800,"baseType":"nativeISO","gain":{"type":"cameraSpecific"},"note":"La 4.6K G2 n’est pas traitée comme dual-native dans BOS. ISO 800 est la référence native retenue.","sources":["https://www.blackmagicdesign.com/products/blackmagicursaminipro/gallery"]}}}},{"id":"ursamp12k","name":"Blackmagic URSA Mini Pro 12K","brand":"Blackmagic","group":"BLACKMAGIC","sensorWidthMm":27.03,"sensorHeightMm":14.25,"dof":{"label":"Super 35","cocMm":0.02,"cropToFF":1.33},"media":{"label":"URSA Mini Pro 12K","modes":{"12K":{"width":12288,"height":6480,"fps":["24","25","30","50","60"],"codecs":{"BRAW 5:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":578,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":361,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":241,"note":"Blackmagic RAW · débit constant"},"BRAW 18:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":160,"note":"Blackmagic RAW · débit constant"}}},"8K":{"width":8192,"height":4320,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 5:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":257,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":161,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":107,"note":"Blackmagic RAW · débit constant"},"BRAW 18:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":71,"note":"Blackmagic RAW · débit constant"}}},"6K S16":{"width":6144,"height":3240,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 5:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":146,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":91,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":61,"note":"Blackmagic RAW · débit constant"},"BRAW 18:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":40,"note":"Blackmagic RAW · débit constant"}}},"4K":{"width":4096,"height":2160,"fps":["24","25","30","50","60","100","120"],"codecs":{"BRAW 5:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":161,"note":"Blackmagic RAW · débit constant"},"BRAW 8:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":107,"note":"Blackmagic RAW · débit constant"},"BRAW 12:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":80,"note":"Blackmagic RAW · débit constant"},"BRAW 18:1":{"kind":"scaledMBps","baseFps":24,"baseMBps":53,"note":"Blackmagic RAW · débit constant"}}}}},"exposure":{"unit":"ISO","defaultProfile":"bmfilm5","profiles":{"bmfilm5":{"label":"Blackmagic Film Gen 5","baseValues":[800],"defaultValue":800,"baseType":"nativeISO","gain":{"type":"cameraSpecific"},"sources":["https://www.blackmagicdesign.com/products/blackmagicursaminipro"]}}}},{"id":"ff","name":"Full Frame 36 mm","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":36.0,"dof":{"label":"Full Frame","cocMm":0.029,"cropToFF":1.0}},{"id":"s35","name":"Super 35","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":24.89,"dof":{"label":"Super 35","cocMm":0.019,"cropToFF":1.5}},{"id":"apsc","name":"APS-C","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":23.5,"dof":{"label":"APS-C","cocMm":0.019,"cropToFF":1.53}},{"id":"mft","name":"Micro 4/3","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":17.3,"dof":{"label":"Micro 4/3","cocMm":0.014,"cropToFF":2.08}},{"id":"oneinch","name":"1 pouce","brand":"Générique","group":"GÉNÉRIQUE","sensorWidthMm":13.2,"dof":{"label":"1 pouce","cocMm":0.011,"cropToFF":2.73}}],"notes":["V1.2 : ajout des données d’exposition aux 11 caméras réelles de la base.","Les capteurs génériques ff/s35/apsc/mft/oneinch n’ont volontairement pas de bloc exposure.","baseType distingue ISO natif/base EI, dual/multi-base et simple ISO de référence (RED).","Ne pas convertir ISO↔dB avec une formule universelle : utiliser gain.type et les données spécifiques caméra.","V1.1: profils MEDIA centralisés + Blackmagic ajoutées à la liste commune."]};
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
  scenes.forEach((scene,index)=>{
    scene.settings=normalizeSituationSettings(scene.settings);
    const number=index+2;
    const safeName=escapeHtml(scene.name||`Situation ${number}`);
    const v=scene.settings;
    const previous=all[index]; // situation immediately before this one
    const base=all[0];
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
    simpleSetCalcSummary("Situation 1 modifiée : CALCUL a été réaligné automatiquement.","ok");
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
});


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
// BOS EXPO V3.47 — situations & transition alternatives workflow
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
    simpleSetCalcSummary("Situation 1 incomplète ou invalide.","warning");
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
  simpleRenderRows();simpleRenderReference();updateBaseIsoNote();renderScenes();
}
// Replace the legacy updater once the original app has initialised.
// V3.34 : les changements restent libres tant que CALCULER n'est pas pressé.
updateUI=function(){
  ensureProfileValid();ensureGainBaseValid();
  const methodSig=simpleMethodSig();
  const methodChanged=methodSig!==simpleLastMethodSig;
  if(methodChanged){simpleLastMethodSig=methodSig;simpleLimitsLoadedFor="";simpleLoadLimits(true);}
  simpleRenderLimits();
  simpleRenderLocks();
  // Garde les valeurs de référence et de calcul dans les limites choisies, sans lancer de compensation.
  simpleClampReferenceToLimits();
  simpleClampCurrentToLimits();
  simpleRenderRows();simpleRenderReference();updateBaseIsoNote();renderScenes();
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
