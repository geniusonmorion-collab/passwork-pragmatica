;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "01f0ab27-c294-706d-5e6c-6a7912677609");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 639823, (a) => {
  "use strict";
  var i = a.i(68982), t = a.i(799458), e = a.i(856757), n = a.i(817422), p = a.i(167815), o = a.i(23210), l = a.i(833288), c = a.i(304153), r = a.i(824627);
  try {
    var s = "u" > typeof window ? window : a.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  let d = /* @__PURE__ */ new Map([["1km", "application/vnd.1000minds.decision-model+xml"], ["3dml", "text/vnd.in3d.3dml"], ["3ds", "image/x-3ds"], ["3g2", "video/3gpp2"], ["3gp", "video/3gp"], ["3gpp", "video/3gpp"], ["3mf", "model/3mf"], ["7z", "application/x-7z-compressed"], ["7zip", "application/x-7z-compressed"], ["123", "application/vnd.lotus-1-2-3"], ["aab", "application/x-authorware-bin"], ["aac", "audio/x-acc"], ["aam", "application/x-authorware-map"], ["aas", "application/x-authorware-seg"], ["abw", "application/x-abiword"], ["ac", "application/vnd.nokia.n-gage.ac+xml"], ["ac3", "audio/ac3"], ["acc", "application/vnd.americandynamics.acc"], ["ace", "application/x-ace-compressed"], ["acu", "application/vnd.acucobol"], ["acutc", "application/vnd.acucorp"], ["adp", "audio/adpcm"], ["aep", "application/vnd.audiograph"], ["afm", "application/x-font-type1"], ["afp", "application/vnd.ibm.modcap"], ["ahead", "application/vnd.ahead.space"], ["ai", "application/pdf"], ["aif", "audio/x-aiff"], ["aifc", "audio/x-aiff"], ["aiff", "audio/x-aiff"], ["air", "application/vnd.adobe.air-application-installer-package+zip"], ["ait", "application/vnd.dvb.ait"], ["ami", "application/vnd.amiga.ami"], ["amr", "audio/amr"], ["apk", "application/vnd.android.package-archive"], ["apng", "image/apng"], ["appcache", "text/cache-manifest"], ["application", "application/x-ms-application"], ["apr", "application/vnd.lotus-approach"], ["arc", "application/x-freearc"], ["arj", "application/x-arj"], ["asc", "application/pgp-signature"], ["asf", "video/x-ms-asf"], ["asm", "text/x-asm"], ["aso", "application/vnd.accpac.simply.aso"], ["asx", "video/x-ms-asf"], ["atc", "application/vnd.acucorp"], ["atom", "application/atom+xml"], ["atomcat", "application/atomcat+xml"], ["atomdeleted", "application/atomdeleted+xml"], ["atomsvc", "application/atomsvc+xml"], ["atx", "application/vnd.antix.game-component"], ["au", "audio/x-au"], ["avi", "video/x-msvideo"], ["avif", "image/avif"], ["aw", "application/applixware"], ["azf", "application/vnd.airzip.filesecure.azf"], ["azs", "application/vnd.airzip.filesecure.azs"], ["azv", "image/vnd.airzip.accelerator.azv"], ["azw", "application/vnd.amazon.ebook"], ["b16", "image/vnd.pco.b16"], ["bat", "application/x-msdownload"], ["bcpio", "application/x-bcpio"], ["bdf", "application/x-font-bdf"], ["bdm", "application/vnd.syncml.dm+wbxml"], ["bdoc", "application/x-bdoc"], ["bed", "application/vnd.realvnc.bed"], ["bh2", "application/vnd.fujitsu.oasysprs"], ["bin", "application/octet-stream"], ["blb", "application/x-blorb"], ["blorb", "application/x-blorb"], ["bmi", "application/vnd.bmi"], ["bmml", "application/vnd.balsamiq.bmml+xml"], ["bmp", "image/bmp"], ["book", "application/vnd.framemaker"], ["box", "application/vnd.previewsystems.box"], ["boz", "application/x-bzip2"], ["bpk", "application/octet-stream"], ["bpmn", "application/octet-stream"], ["bsp", "model/vnd.valve.source.compiled-map"], ["btif", "image/prs.btif"], ["buffer", "application/octet-stream"], ["bz", "application/x-bzip"], ["bz2", "application/x-bzip2"], ["c", "text/x-c"], ["c4d", "application/vnd.clonk.c4group"], ["c4f", "application/vnd.clonk.c4group"], ["c4g", "application/vnd.clonk.c4group"], ["c4p", "application/vnd.clonk.c4group"], ["c4u", "application/vnd.clonk.c4group"], ["c11amc", "application/vnd.cluetrust.cartomobile-config"], ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"], ["cab", "application/vnd.ms-cab-compressed"], ["caf", "audio/x-caf"], ["cap", "application/vnd.tcpdump.pcap"], ["car", "application/vnd.curl.car"], ["cat", "application/vnd.ms-pki.seccat"], ["cb7", "application/x-cbr"], ["cba", "application/x-cbr"], ["cbr", "application/x-cbr"], ["cbt", "application/x-cbr"], ["cbz", "application/x-cbr"], ["cc", "text/x-c"], ["cco", "application/x-cocoa"], ["cct", "application/x-director"], ["ccxml", "application/ccxml+xml"], ["cdbcmsg", "application/vnd.contact.cmsg"], ["cda", "application/x-cdf"], ["cdf", "application/x-netcdf"], ["cdfx", "application/cdfx+xml"], ["cdkey", "application/vnd.mediastation.cdkey"], ["cdmia", "application/cdmi-capability"], ["cdmic", "application/cdmi-container"], ["cdmid", "application/cdmi-domain"], ["cdmio", "application/cdmi-object"], ["cdmiq", "application/cdmi-queue"], ["cdr", "application/cdr"], ["cdx", "chemical/x-cdx"], ["cdxml", "application/vnd.chemdraw+xml"], ["cdy", "application/vnd.cinderella"], ["cer", "application/pkix-cert"], ["cfs", "application/x-cfs-compressed"], ["cgm", "image/cgm"], ["chat", "application/x-chat"], ["chm", "application/vnd.ms-htmlhelp"], ["chrt", "application/vnd.kde.kchart"], ["cif", "chemical/x-cif"], ["cii", "application/vnd.anser-web-certificate-issue-initiation"], ["cil", "application/vnd.ms-artgalry"], ["cjs", "application/node"], ["cla", "application/vnd.claymore"], ["class", "application/octet-stream"], ["clkk", "application/vnd.crick.clicker.keyboard"], ["clkp", "application/vnd.crick.clicker.palette"], ["clkt", "application/vnd.crick.clicker.template"], ["clkw", "application/vnd.crick.clicker.wordbank"], ["clkx", "application/vnd.crick.clicker"], ["clp", "application/x-msclip"], ["cmc", "application/vnd.cosmocaller"], ["cmdf", "chemical/x-cmdf"], ["cml", "chemical/x-cml"], ["cmp", "application/vnd.yellowriver-custom-menu"], ["cmx", "image/x-cmx"], ["cod", "application/vnd.rim.cod"], ["coffee", "text/coffeescript"], ["com", "application/x-msdownload"], ["conf", "text/plain"], ["cpio", "application/x-cpio"], ["cpp", "text/x-c"], ["cpt", "application/mac-compactpro"], ["crd", "application/x-mscardfile"], ["crl", "application/pkix-crl"], ["crt", "application/x-x509-ca-cert"], ["crx", "application/x-chrome-extension"], ["cryptonote", "application/vnd.rig.cryptonote"], ["csh", "application/x-csh"], ["csl", "application/vnd.citationstyles.style+xml"], ["csml", "chemical/x-csml"], ["csp", "application/vnd.commonspace"], ["csr", "application/octet-stream"], ["css", "text/css"], ["cst", "application/x-director"], ["csv", "text/csv"], ["cu", "application/cu-seeme"], ["curl", "text/vnd.curl"], ["cww", "application/prs.cww"], ["cxt", "application/x-director"], ["cxx", "text/x-c"], ["dae", "model/vnd.collada+xml"], ["daf", "application/vnd.mobius.daf"], ["dart", "application/vnd.dart"], ["dataless", "application/vnd.fdsn.seed"], ["davmount", "application/davmount+xml"], ["dbf", "application/vnd.dbf"], ["dbk", "application/docbook+xml"], ["dcr", "application/x-director"], ["dcurl", "text/vnd.curl.dcurl"], ["dd2", "application/vnd.oma.dd2+xml"], ["ddd", "application/vnd.fujixerox.ddd"], ["ddf", "application/vnd.syncml.dmddf+xml"], ["dds", "image/vnd.ms-dds"], ["deb", "application/x-debian-package"], ["def", "text/plain"], ["deploy", "application/octet-stream"], ["der", "application/x-x509-ca-cert"], ["dfac", "application/vnd.dreamfactory"], ["dgc", "application/x-dgc-compressed"], ["dic", "text/x-c"], ["dir", "application/x-director"], ["dis", "application/vnd.mobius.dis"], ["disposition-notification", "message/disposition-notification"], ["dist", "application/octet-stream"], ["distz", "application/octet-stream"], ["djv", "image/vnd.djvu"], ["djvu", "image/vnd.djvu"], ["dll", "application/octet-stream"], ["dmg", "application/x-apple-diskimage"], ["dmn", "application/octet-stream"], ["dmp", "application/vnd.tcpdump.pcap"], ["dms", "application/octet-stream"], ["dna", "application/vnd.dna"], ["doc", "application/msword"], ["docm", "application/vnd.ms-word.template.macroEnabled.12"], ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], ["dot", "application/msword"], ["dotm", "application/vnd.ms-word.template.macroEnabled.12"], ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"], ["dp", "application/vnd.osgi.dp"], ["dpg", "application/vnd.dpgraph"], ["dra", "audio/vnd.dra"], ["drle", "image/dicom-rle"], ["dsc", "text/prs.lines.tag"], ["dssc", "application/dssc+der"], ["dtb", "application/x-dtbook+xml"], ["dtd", "application/xml-dtd"], ["dts", "audio/vnd.dts"], ["dtshd", "audio/vnd.dts.hd"], ["dump", "application/octet-stream"], ["dvb", "video/vnd.dvb.file"], ["dvi", "application/x-dvi"], ["dwd", "application/atsc-dwd+xml"], ["dwf", "model/vnd.dwf"], ["dwg", "image/vnd.dwg"], ["dxf", "image/vnd.dxf"], ["dxp", "application/vnd.spotfire.dxp"], ["dxr", "application/x-director"], ["ear", "application/java-archive"], ["ecelp4800", "audio/vnd.nuera.ecelp4800"], ["ecelp7470", "audio/vnd.nuera.ecelp7470"], ["ecelp9600", "audio/vnd.nuera.ecelp9600"], ["ecma", "application/ecmascript"], ["edm", "application/vnd.novadigm.edm"], ["edx", "application/vnd.novadigm.edx"], ["efif", "application/vnd.picsel"], ["ei6", "application/vnd.pg.osasli"], ["elc", "application/octet-stream"], ["emf", "image/emf"], ["eml", "message/rfc822"], ["emma", "application/emma+xml"], ["emotionml", "application/emotionml+xml"], ["emz", "application/x-msmetafile"], ["eol", "audio/vnd.digital-winds"], ["eot", "application/vnd.ms-fontobject"], ["eps", "application/postscript"], ["epub", "application/epub+zip"], ["es", "application/ecmascript"], ["es3", "application/vnd.eszigno3+xml"], ["esa", "application/vnd.osgi.subsystem"], ["esf", "application/vnd.epson.esf"], ["et3", "application/vnd.eszigno3+xml"], ["etx", "text/x-setext"], ["eva", "application/x-eva"], ["evy", "application/x-envoy"], ["exe", "application/octet-stream"], ["exi", "application/exi"], ["exp", "application/express"], ["exr", "image/aces"], ["ext", "application/vnd.novadigm.ext"], ["ez", "application/andrew-inset"], ["ez2", "application/vnd.ezpix-album"], ["ez3", "application/vnd.ezpix-package"], ["f", "text/x-fortran"], ["f4v", "video/mp4"], ["f77", "text/x-fortran"], ["f90", "text/x-fortran"], ["fbs", "image/vnd.fastbidsheet"], ["fcdt", "application/vnd.adobe.formscentral.fcdt"], ["fcs", "application/vnd.isac.fcs"], ["fdf", "application/vnd.fdf"], ["fdt", "application/fdt+xml"], ["fe_launch", "application/vnd.denovo.fcselayout-link"], ["fg5", "application/vnd.fujitsu.oasysgp"], ["fgd", "application/x-director"], ["fh", "image/x-freehand"], ["fh4", "image/x-freehand"], ["fh5", "image/x-freehand"], ["fh7", "image/x-freehand"], ["fhc", "image/x-freehand"], ["fig", "application/x-xfig"], ["fits", "image/fits"], ["flac", "audio/x-flac"], ["fli", "video/x-fli"], ["flo", "application/vnd.micrografx.flo"], ["flv", "video/x-flv"], ["flw", "application/vnd.kde.kivio"], ["flx", "text/vnd.fmi.flexstor"], ["fly", "text/vnd.fly"], ["fm", "application/vnd.framemaker"], ["fnc", "application/vnd.frogans.fnc"], ["fo", "application/vnd.software602.filler.form+xml"], ["for", "text/x-fortran"], ["fpx", "image/vnd.fpx"], ["frame", "application/vnd.framemaker"], ["fsc", "application/vnd.fsc.weblaunch"], ["fst", "image/vnd.fst"], ["ftc", "application/vnd.fluxtime.clip"], ["fti", "application/vnd.anser-web-funds-transfer-initiation"], ["fvt", "video/vnd.fvt"], ["fxp", "application/vnd.adobe.fxp"], ["fxpl", "application/vnd.adobe.fxp"], ["fzs", "application/vnd.fuzzysheet"], ["g2w", "application/vnd.geoplan"], ["g3", "image/g3fax"], ["g3w", "application/vnd.geospace"], ["gac", "application/vnd.groove-account"], ["gam", "application/x-tads"], ["gbr", "application/rpki-ghostbusters"], ["gca", "application/x-gca-compressed"], ["gdl", "model/vnd.gdl"], ["gdoc", "application/vnd.google-apps.document"], ["geo", "application/vnd.dynageo"], ["geojson", "application/geo+json"], ["gex", "application/vnd.geometry-explorer"], ["ggb", "application/vnd.geogebra.file"], ["ggt", "application/vnd.geogebra.tool"], ["ghf", "application/vnd.groove-help"], ["gif", "image/gif"], ["gim", "application/vnd.groove-identity-message"], ["glb", "model/gltf-binary"], ["gltf", "model/gltf+json"], ["gml", "application/gml+xml"], ["gmx", "application/vnd.gmx"], ["gnumeric", "application/x-gnumeric"], ["gpg", "application/gpg-keys"], ["gph", "application/vnd.flographit"], ["gpx", "application/gpx+xml"], ["gqf", "application/vnd.grafeq"], ["gqs", "application/vnd.grafeq"], ["gram", "application/srgs"], ["gramps", "application/x-gramps-xml"], ["gre", "application/vnd.geometry-explorer"], ["grv", "application/vnd.groove-injector"], ["grxml", "application/srgs+xml"], ["gsf", "application/x-font-ghostscript"], ["gsheet", "application/vnd.google-apps.spreadsheet"], ["gslides", "application/vnd.google-apps.presentation"], ["gtar", "application/x-gtar"], ["gtm", "application/vnd.groove-tool-message"], ["gtw", "model/vnd.gtw"], ["gv", "text/vnd.graphviz"], ["gxf", "application/gxf"], ["gxt", "application/vnd.geonext"], ["gz", "application/gzip"], ["gzip", "application/gzip"], ["h", "text/x-c"], ["h261", "video/h261"], ["h263", "video/h263"], ["h264", "video/h264"], ["hal", "application/vnd.hal+xml"], ["hbci", "application/vnd.hbci"], ["hbs", "text/x-handlebars-template"], ["hdd", "application/x-virtualbox-hdd"], ["hdf", "application/x-hdf"], ["heic", "image/heic"], ["heics", "image/heic-sequence"], ["heif", "image/heif"], ["heifs", "image/heif-sequence"], ["hej2", "image/hej2k"], ["held", "application/atsc-held+xml"], ["hh", "text/x-c"], ["hjson", "application/hjson"], ["hlp", "application/winhlp"], ["hpgl", "application/vnd.hp-hpgl"], ["hpid", "application/vnd.hp-hpid"], ["hps", "application/vnd.hp-hps"], ["hqx", "application/mac-binhex40"], ["hsj2", "image/hsj2"], ["htc", "text/x-component"], ["htke", "application/vnd.kenameaapp"], ["htm", "text/html"], ["html", "text/html"], ["hvd", "application/vnd.yamaha.hv-dic"], ["hvp", "application/vnd.yamaha.hv-voice"], ["hvs", "application/vnd.yamaha.hv-script"], ["i2g", "application/vnd.intergeo"], ["icc", "application/vnd.iccprofile"], ["ice", "x-conference/x-cooltalk"], ["icm", "application/vnd.iccprofile"], ["ico", "image/x-icon"], ["ics", "text/calendar"], ["ief", "image/ief"], ["ifb", "text/calendar"], ["ifm", "application/vnd.shana.informed.formdata"], ["iges", "model/iges"], ["igl", "application/vnd.igloader"], ["igm", "application/vnd.insors.igm"], ["igs", "model/iges"], ["igx", "application/vnd.micrografx.igx"], ["iif", "application/vnd.shana.informed.interchange"], ["img", "application/octet-stream"], ["imp", "application/vnd.accpac.simply.imp"], ["ims", "application/vnd.ms-ims"], ["in", "text/plain"], ["ini", "text/plain"], ["ink", "application/inkml+xml"], ["inkml", "application/inkml+xml"], ["install", "application/x-install-instructions"], ["iota", "application/vnd.astraea-software.iota"], ["ipfix", "application/ipfix"], ["ipk", "application/vnd.shana.informed.package"], ["irm", "application/vnd.ibm.rights-management"], ["irp", "application/vnd.irepository.package+xml"], ["iso", "application/x-iso9660-image"], ["itp", "application/vnd.shana.informed.formtemplate"], ["its", "application/its+xml"], ["ivp", "application/vnd.immervision-ivp"], ["ivu", "application/vnd.immervision-ivu"], ["jad", "text/vnd.sun.j2me.app-descriptor"], ["jade", "text/jade"], ["jam", "application/vnd.jam"], ["jar", "application/java-archive"], ["jardiff", "application/x-java-archive-diff"], ["java", "text/x-java-source"], ["jhc", "image/jphc"], ["jisp", "application/vnd.jisp"], ["jls", "image/jls"], ["jlt", "application/vnd.hp-jlyt"], ["jng", "image/x-jng"], ["jnlp", "application/x-java-jnlp-file"], ["joda", "application/vnd.joost.joda-archive"], ["jp2", "image/jp2"], ["jpe", "image/jpeg"], ["jpeg", "image/jpeg"], ["jpf", "image/jpx"], ["jpg", "image/jpeg"], ["jpg2", "image/jp2"], ["jpgm", "video/jpm"], ["jpgv", "video/jpeg"], ["jph", "image/jph"], ["jpm", "video/jpm"], ["jpx", "image/jpx"], ["js", "application/javascript"], ["json", "application/json"], ["json5", "application/json5"], ["jsonld", "application/ld+json"], ["jsonl", "application/jsonl"], ["jsonml", "application/jsonml+json"], ["jsx", "text/jsx"], ["jxr", "image/jxr"], ["jxra", "image/jxra"], ["jxrs", "image/jxrs"], ["jxs", "image/jxs"], ["jxsc", "image/jxsc"], ["jxsi", "image/jxsi"], ["jxss", "image/jxss"], ["kar", "audio/midi"], ["karbon", "application/vnd.kde.karbon"], ["kdb", "application/octet-stream"], ["kdbx", "application/x-keepass2"], ["key", "application/x-iwork-keynote-sffkey"], ["kfo", "application/vnd.kde.kformula"], ["kia", "application/vnd.kidspiration"], ["kml", "application/vnd.google-earth.kml+xml"], ["kmz", "application/vnd.google-earth.kmz"], ["kne", "application/vnd.kinar"], ["knp", "application/vnd.kinar"], ["kon", "application/vnd.kde.kontour"], ["kpr", "application/vnd.kde.kpresenter"], ["kpt", "application/vnd.kde.kpresenter"], ["kpxx", "application/vnd.ds-keypoint"], ["ksp", "application/vnd.kde.kspread"], ["ktr", "application/vnd.kahootz"], ["ktx", "image/ktx"], ["ktx2", "image/ktx2"], ["ktz", "application/vnd.kahootz"], ["kwd", "application/vnd.kde.kword"], ["kwt", "application/vnd.kde.kword"], ["lasxml", "application/vnd.las.las+xml"], ["latex", "application/x-latex"], ["lbd", "application/vnd.llamagraphics.life-balance.desktop"], ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"], ["les", "application/vnd.hhe.lesson-player"], ["less", "text/less"], ["lgr", "application/lgr+xml"], ["lha", "application/octet-stream"], ["link66", "application/vnd.route66.link66+xml"], ["list", "text/plain"], ["list3820", "application/vnd.ibm.modcap"], ["listafp", "application/vnd.ibm.modcap"], ["litcoffee", "text/coffeescript"], ["lnk", "application/x-ms-shortcut"], ["log", "text/plain"], ["lostxml", "application/lost+xml"], ["lrf", "application/octet-stream"], ["lrm", "application/vnd.ms-lrm"], ["ltf", "application/vnd.frogans.ltf"], ["lua", "text/x-lua"], ["luac", "application/x-lua-bytecode"], ["lvp", "audio/vnd.lucent.voice"], ["lwp", "application/vnd.lotus-wordpro"], ["lzh", "application/octet-stream"], ["m1v", "video/mpeg"], ["m2a", "audio/mpeg"], ["m2v", "video/mpeg"], ["m3a", "audio/mpeg"], ["m3u", "text/plain"], ["m3u8", "application/vnd.apple.mpegurl"], ["m4a", "audio/x-m4a"], ["m4p", "application/mp4"], ["m4s", "video/iso.segment"], ["m4u", "application/vnd.mpegurl"], ["m4v", "video/x-m4v"], ["m13", "application/x-msmediaview"], ["m14", "application/x-msmediaview"], ["m21", "application/mp21"], ["ma", "application/mathematica"], ["mads", "application/mads+xml"], ["maei", "application/mmt-aei+xml"], ["mag", "application/vnd.ecowin.chart"], ["maker", "application/vnd.framemaker"], ["man", "text/troff"], ["manifest", "text/cache-manifest"], ["map", "application/json"], ["mar", "application/octet-stream"], ["markdown", "text/markdown"], ["mathml", "application/mathml+xml"], ["mb", "application/mathematica"], ["mbk", "application/vnd.mobius.mbk"], ["mbox", "application/mbox"], ["mc1", "application/vnd.medcalcdata"], ["mcd", "application/vnd.mcd"], ["mcurl", "text/vnd.curl.mcurl"], ["md", "text/markdown"], ["mdb", "application/x-msaccess"], ["mdi", "image/vnd.ms-modi"], ["mdx", "text/mdx"], ["me", "text/troff"], ["mesh", "model/mesh"], ["meta4", "application/metalink4+xml"], ["metalink", "application/metalink+xml"], ["mets", "application/mets+xml"], ["mfm", "application/vnd.mfmp"], ["mft", "application/rpki-manifest"], ["mgp", "application/vnd.osgeo.mapguide.package"], ["mgz", "application/vnd.proteus.magazine"], ["mid", "audio/midi"], ["midi", "audio/midi"], ["mie", "application/x-mie"], ["mif", "application/vnd.mif"], ["mime", "message/rfc822"], ["mj2", "video/mj2"], ["mjp2", "video/mj2"], ["mjs", "application/javascript"], ["mk3d", "video/x-matroska"], ["mka", "audio/x-matroska"], ["mkd", "text/x-markdown"], ["mks", "video/x-matroska"], ["mkv", "video/x-matroska"], ["mlp", "application/vnd.dolby.mlp"], ["mmd", "application/vnd.chipnuts.karaoke-mmd"], ["mmf", "application/vnd.smaf"], ["mml", "text/mathml"], ["mmr", "image/vnd.fujixerox.edmics-mmr"], ["mng", "video/x-mng"], ["mny", "application/x-msmoney"], ["mobi", "application/x-mobipocket-ebook"], ["mods", "application/mods+xml"], ["mov", "video/quicktime"], ["movie", "video/x-sgi-movie"], ["mp2", "audio/mpeg"], ["mp2a", "audio/mpeg"], ["mp3", "audio/mpeg"], ["mp4", "video/mp4"], ["mp4a", "audio/mp4"], ["mp4s", "application/mp4"], ["mp4v", "video/mp4"], ["mp21", "application/mp21"], ["mpc", "application/vnd.mophun.certificate"], ["mpd", "application/dash+xml"], ["mpe", "video/mpeg"], ["mpeg", "video/mpeg"], ["mpg", "video/mpeg"], ["mpg4", "video/mp4"], ["mpga", "audio/mpeg"], ["mpkg", "application/vnd.apple.installer+xml"], ["mpm", "application/vnd.blueice.multipass"], ["mpn", "application/vnd.mophun.application"], ["mpp", "application/vnd.ms-project"], ["mpt", "application/vnd.ms-project"], ["mpy", "application/vnd.ibm.minipay"], ["mqy", "application/vnd.mobius.mqy"], ["mrc", "application/marc"], ["mrcx", "application/marcxml+xml"], ["ms", "text/troff"], ["mscml", "application/mediaservercontrol+xml"], ["mseed", "application/vnd.fdsn.mseed"], ["mseq", "application/vnd.mseq"], ["msf", "application/vnd.epson.msf"], ["msg", "application/vnd.ms-outlook"], ["msh", "model/mesh"], ["msi", "application/x-msdownload"], ["msl", "application/vnd.mobius.msl"], ["msm", "application/octet-stream"], ["msp", "application/octet-stream"], ["msty", "application/vnd.muvee.style"], ["mtl", "model/mtl"], ["mts", "model/vnd.mts"], ["mus", "application/vnd.musician"], ["musd", "application/mmt-usd+xml"], ["musicxml", "application/vnd.recordare.musicxml+xml"], ["mvb", "application/x-msmediaview"], ["mvt", "application/vnd.mapbox-vector-tile"], ["mwf", "application/vnd.mfer"], ["mxf", "application/mxf"], ["mxl", "application/vnd.recordare.musicxml"], ["mxmf", "audio/mobile-xmf"], ["mxml", "application/xv+xml"], ["mxs", "application/vnd.triscape.mxs"], ["mxu", "video/vnd.mpegurl"], ["n-gage", "application/vnd.nokia.n-gage.symbian.install"], ["n3", "text/n3"], ["nb", "application/mathematica"], ["nbp", "application/vnd.wolfram.player"], ["nc", "application/x-netcdf"], ["ncx", "application/x-dtbncx+xml"], ["nfo", "text/x-nfo"], ["ngdat", "application/vnd.nokia.n-gage.data"], ["nitf", "application/vnd.nitf"], ["nlu", "application/vnd.neurolanguage.nlu"], ["nml", "application/vnd.enliven"], ["nnd", "application/vnd.noblenet-directory"], ["nns", "application/vnd.noblenet-sealer"], ["nnw", "application/vnd.noblenet-web"], ["npx", "image/vnd.net-fpx"], ["nq", "application/n-quads"], ["nsc", "application/x-conference"], ["nsf", "application/vnd.lotus-notes"], ["nt", "application/n-triples"], ["ntf", "application/vnd.nitf"], ["numbers", "application/x-iwork-numbers-sffnumbers"], ["nzb", "application/x-nzb"], ["oa2", "application/vnd.fujitsu.oasys2"], ["oa3", "application/vnd.fujitsu.oasys3"], ["oas", "application/vnd.fujitsu.oasys"], ["obd", "application/x-msbinder"], ["obgx", "application/vnd.openblox.game+xml"], ["obj", "model/obj"], ["oda", "application/oda"], ["odb", "application/vnd.oasis.opendocument.database"], ["odc", "application/vnd.oasis.opendocument.chart"], ["odf", "application/vnd.oasis.opendocument.formula"], ["odft", "application/vnd.oasis.opendocument.formula-template"], ["odg", "application/vnd.oasis.opendocument.graphics"], ["odi", "application/vnd.oasis.opendocument.image"], ["odm", "application/vnd.oasis.opendocument.text-master"], ["odp", "application/vnd.oasis.opendocument.presentation"], ["ods", "application/vnd.oasis.opendocument.spreadsheet"], ["odt", "application/vnd.oasis.opendocument.text"], ["oga", "audio/ogg"], ["ogex", "model/vnd.opengex"], ["ogg", "audio/ogg"], ["ogv", "video/ogg"], ["ogx", "application/ogg"], ["omdoc", "application/omdoc+xml"], ["onepkg", "application/onenote"], ["onetmp", "application/onenote"], ["onetoc", "application/onenote"], ["onetoc2", "application/onenote"], ["opf", "application/oebps-package+xml"], ["opml", "text/x-opml"], ["oprc", "application/vnd.palm"], ["opus", "audio/ogg"], ["org", "text/x-org"], ["osf", "application/vnd.yamaha.openscoreformat"], ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"], ["osm", "application/vnd.openstreetmap.data+xml"], ["otc", "application/vnd.oasis.opendocument.chart-template"], ["otf", "font/otf"], ["otg", "application/vnd.oasis.opendocument.graphics-template"], ["oth", "application/vnd.oasis.opendocument.text-web"], ["oti", "application/vnd.oasis.opendocument.image-template"], ["otp", "application/vnd.oasis.opendocument.presentation-template"], ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"], ["ott", "application/vnd.oasis.opendocument.text-template"], ["ova", "application/x-virtualbox-ova"], ["ovf", "application/x-virtualbox-ovf"], ["owl", "application/rdf+xml"], ["oxps", "application/oxps"], ["oxt", "application/vnd.openofficeorg.extension"], ["p", "text/x-pascal"], ["p7a", "application/x-pkcs7-signature"], ["p7b", "application/x-pkcs7-certificates"], ["p7c", "application/pkcs7-mime"], ["p7m", "application/pkcs7-mime"], ["p7r", "application/x-pkcs7-certreqresp"], ["p7s", "application/pkcs7-signature"], ["p8", "application/pkcs8"], ["p10", "application/x-pkcs10"], ["p12", "application/x-pkcs12"], ["pac", "application/x-ns-proxy-autoconfig"], ["pages", "application/x-iwork-pages-sffpages"], ["pas", "text/x-pascal"], ["paw", "application/vnd.pawaafile"], ["pbd", "application/vnd.powerbuilder6"], ["pbm", "image/x-portable-bitmap"], ["pcap", "application/vnd.tcpdump.pcap"], ["pcf", "application/x-font-pcf"], ["pcl", "application/vnd.hp-pcl"], ["pclxl", "application/vnd.hp-pclxl"], ["pct", "image/x-pict"], ["pcurl", "application/vnd.curl.pcurl"], ["pcx", "image/x-pcx"], ["pdb", "application/x-pilot"], ["pde", "text/x-processing"], ["pdf", "application/pdf"], ["pem", "application/x-x509-user-cert"], ["pfa", "application/x-font-type1"], ["pfb", "application/x-font-type1"], ["pfm", "application/x-font-type1"], ["pfr", "application/font-tdpfr"], ["pfx", "application/x-pkcs12"], ["pgm", "image/x-portable-graymap"], ["pgn", "application/x-chess-pgn"], ["pgp", "application/pgp"], ["php", "application/x-httpd-php"], ["php3", "application/x-httpd-php"], ["php4", "application/x-httpd-php"], ["phps", "application/x-httpd-php-source"], ["phtml", "application/x-httpd-php"], ["pic", "image/x-pict"], ["pkg", "application/octet-stream"], ["pki", "application/pkixcmp"], ["pkipath", "application/pkix-pkipath"], ["pkpass", "application/vnd.apple.pkpass"], ["pl", "application/x-perl"], ["plb", "application/vnd.3gpp.pic-bw-large"], ["plc", "application/vnd.mobius.plc"], ["plf", "application/vnd.pocketlearn"], ["pls", "application/pls+xml"], ["pm", "application/x-perl"], ["pml", "application/vnd.ctc-posml"], ["png", "image/png"], ["pnm", "image/x-portable-anymap"], ["portpkg", "application/vnd.macports.portpkg"], ["pot", "application/vnd.ms-powerpoint"], ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"], ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"], ["ppa", "application/vnd.ms-powerpoint"], ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"], ["ppd", "application/vnd.cups-ppd"], ["ppm", "image/x-portable-pixmap"], ["pps", "application/vnd.ms-powerpoint"], ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"], ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"], ["ppt", "application/powerpoint"], ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"], ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"], ["pqa", "application/vnd.palm"], ["prc", "application/x-pilot"], ["pre", "application/vnd.lotus-freelance"], ["prf", "application/pics-rules"], ["provx", "application/provenance+xml"], ["ps", "application/postscript"], ["psb", "application/vnd.3gpp.pic-bw-small"], ["psd", "application/x-photoshop"], ["psf", "application/x-font-linux-psf"], ["pskcxml", "application/pskc+xml"], ["pti", "image/prs.pti"], ["ptid", "application/vnd.pvi.ptid1"], ["pub", "application/x-mspublisher"], ["pvb", "application/vnd.3gpp.pic-bw-var"], ["pwn", "application/vnd.3m.post-it-notes"], ["pya", "audio/vnd.ms-playready.media.pya"], ["pyv", "video/vnd.ms-playready.media.pyv"], ["qam", "application/vnd.epson.quickanime"], ["qbo", "application/vnd.intu.qbo"], ["qfx", "application/vnd.intu.qfx"], ["qps", "application/vnd.publishare-delta-tree"], ["qt", "video/quicktime"], ["qwd", "application/vnd.quark.quarkxpress"], ["qwt", "application/vnd.quark.quarkxpress"], ["qxb", "application/vnd.quark.quarkxpress"], ["qxd", "application/vnd.quark.quarkxpress"], ["qxl", "application/vnd.quark.quarkxpress"], ["qxt", "application/vnd.quark.quarkxpress"], ["ra", "audio/x-realaudio"], ["ram", "audio/x-pn-realaudio"], ["raml", "application/raml+yaml"], ["rapd", "application/route-apd+xml"], ["rar", "application/x-rar"], ["ras", "image/x-cmu-raster"], ["rcprofile", "application/vnd.ipunplugged.rcprofile"], ["rdf", "application/rdf+xml"], ["rdz", "application/vnd.data-vision.rdz"], ["relo", "application/p2p-overlay+xml"], ["rep", "application/vnd.businessobjects"], ["res", "application/x-dtbresource+xml"], ["rgb", "image/x-rgb"], ["rif", "application/reginfo+xml"], ["rip", "audio/vnd.rip"], ["ris", "application/x-research-info-systems"], ["rl", "application/resource-lists+xml"], ["rlc", "image/vnd.fujixerox.edmics-rlc"], ["rld", "application/resource-lists-diff+xml"], ["rm", "audio/x-pn-realaudio"], ["rmi", "audio/midi"], ["rmp", "audio/x-pn-realaudio-plugin"], ["rms", "application/vnd.jcp.javame.midlet-rms"], ["rmvb", "application/vnd.rn-realmedia-vbr"], ["rnc", "application/relax-ng-compact-syntax"], ["rng", "application/xml"], ["roa", "application/rpki-roa"], ["roff", "text/troff"], ["rp9", "application/vnd.cloanto.rp9"], ["rpm", "audio/x-pn-realaudio-plugin"], ["rpss", "application/vnd.nokia.radio-presets"], ["rpst", "application/vnd.nokia.radio-preset"], ["rq", "application/sparql-query"], ["rs", "application/rls-services+xml"], ["rsa", "application/x-pkcs7"], ["rsat", "application/atsc-rsat+xml"], ["rsd", "application/rsd+xml"], ["rsheet", "application/urc-ressheet+xml"], ["rss", "application/rss+xml"], ["rtf", "text/rtf"], ["rtx", "text/richtext"], ["run", "application/x-makeself"], ["rusd", "application/route-usd+xml"], ["rv", "video/vnd.rn-realvideo"], ["s", "text/x-asm"], ["s3m", "audio/s3m"], ["saf", "application/vnd.yamaha.smaf-audio"], ["sass", "text/x-sass"], ["sbml", "application/sbml+xml"], ["sc", "application/vnd.ibm.secure-container"], ["scd", "application/x-msschedule"], ["scm", "application/vnd.lotus-screencam"], ["scq", "application/scvp-cv-request"], ["scs", "application/scvp-cv-response"], ["scss", "text/x-scss"], ["scurl", "text/vnd.curl.scurl"], ["sda", "application/vnd.stardivision.draw"], ["sdc", "application/vnd.stardivision.calc"], ["sdd", "application/vnd.stardivision.impress"], ["sdkd", "application/vnd.solent.sdkm+xml"], ["sdkm", "application/vnd.solent.sdkm+xml"], ["sdp", "application/sdp"], ["sdw", "application/vnd.stardivision.writer"], ["sea", "application/octet-stream"], ["see", "application/vnd.seemail"], ["seed", "application/vnd.fdsn.seed"], ["sema", "application/vnd.sema"], ["semd", "application/vnd.semd"], ["semf", "application/vnd.semf"], ["senmlx", "application/senml+xml"], ["sensmlx", "application/sensml+xml"], ["ser", "application/java-serialized-object"], ["setpay", "application/set-payment-initiation"], ["setreg", "application/set-registration-initiation"], ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"], ["sfs", "application/vnd.spotfire.sfs"], ["sfv", "text/x-sfv"], ["sgi", "image/sgi"], ["sgl", "application/vnd.stardivision.writer-global"], ["sgm", "text/sgml"], ["sgml", "text/sgml"], ["sh", "application/x-sh"], ["shar", "application/x-shar"], ["shex", "text/shex"], ["shf", "application/shf+xml"], ["shtml", "text/html"], ["sid", "image/x-mrsid-image"], ["sieve", "application/sieve"], ["sig", "application/pgp-signature"], ["sil", "audio/silk"], ["silo", "model/mesh"], ["sis", "application/vnd.symbian.install"], ["sisx", "application/vnd.symbian.install"], ["sit", "application/x-stuffit"], ["sitx", "application/x-stuffitx"], ["siv", "application/sieve"], ["skd", "application/vnd.koan"], ["skm", "application/vnd.koan"], ["skp", "application/vnd.koan"], ["skt", "application/vnd.koan"], ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"], ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"], ["slim", "text/slim"], ["slm", "text/slim"], ["sls", "application/route-s-tsid+xml"], ["slt", "application/vnd.epson.salt"], ["sm", "application/vnd.stepmania.stepchart"], ["smf", "application/vnd.stardivision.math"], ["smi", "application/smil"], ["smil", "application/smil"], ["smv", "video/x-smv"], ["smzip", "application/vnd.stepmania.package"], ["snd", "audio/basic"], ["snf", "application/x-font-snf"], ["so", "application/octet-stream"], ["spc", "application/x-pkcs7-certificates"], ["spdx", "text/spdx"], ["spf", "application/vnd.yamaha.smaf-phrase"], ["spl", "application/x-futuresplash"], ["spot", "text/vnd.in3d.spot"], ["spp", "application/scvp-vp-response"], ["spq", "application/scvp-vp-request"], ["spx", "audio/ogg"], ["sql", "application/x-sql"], ["src", "application/x-wais-source"], ["srt", "application/x-subrip"], ["sru", "application/sru+xml"], ["srx", "application/sparql-results+xml"], ["ssdl", "application/ssdl+xml"], ["sse", "application/vnd.kodak-descriptor"], ["ssf", "application/vnd.epson.ssf"], ["ssml", "application/ssml+xml"], ["sst", "application/octet-stream"], ["st", "application/vnd.sailingtracker.track"], ["stc", "application/vnd.sun.xml.calc.template"], ["std", "application/vnd.sun.xml.draw.template"], ["stf", "application/vnd.wt.stf"], ["sti", "application/vnd.sun.xml.impress.template"], ["stk", "application/hyperstudio"], ["stl", "model/stl"], ["stpx", "model/step+xml"], ["stpxz", "model/step-xml+zip"], ["stpz", "model/step+zip"], ["str", "application/vnd.pg.format"], ["stw", "application/vnd.sun.xml.writer.template"], ["styl", "text/stylus"], ["stylus", "text/stylus"], ["sub", "text/vnd.dvb.subtitle"], ["sus", "application/vnd.sus-calendar"], ["susp", "application/vnd.sus-calendar"], ["sv4cpio", "application/x-sv4cpio"], ["sv4crc", "application/x-sv4crc"], ["svc", "application/vnd.dvb.service"], ["svd", "application/vnd.svd"], ["svg", "image/svg+xml"], ["svgz", "image/svg+xml"], ["swa", "application/x-director"], ["swf", "application/x-shockwave-flash"], ["swi", "application/vnd.aristanetworks.swi"], ["swidtag", "application/swid+xml"], ["sxc", "application/vnd.sun.xml.calc"], ["sxd", "application/vnd.sun.xml.draw"], ["sxg", "application/vnd.sun.xml.writer.global"], ["sxi", "application/vnd.sun.xml.impress"], ["sxm", "application/vnd.sun.xml.math"], ["sxw", "application/vnd.sun.xml.writer"], ["t", "text/troff"], ["t3", "application/x-t3vm-image"], ["t38", "image/t38"], ["taglet", "application/vnd.mynfc"], ["tao", "application/vnd.tao.intent-module-archive"], ["tap", "image/vnd.tencent.tap"], ["tar", "application/x-tar"], ["tcap", "application/vnd.3gpp2.tcap"], ["tcl", "application/x-tcl"], ["td", "application/urc-targetdesc+xml"], ["teacher", "application/vnd.smart.teacher"], ["tei", "application/tei+xml"], ["teicorpus", "application/tei+xml"], ["tex", "application/x-tex"], ["texi", "application/x-texinfo"], ["texinfo", "application/x-texinfo"], ["text", "text/plain"], ["tfi", "application/thraud+xml"], ["tfm", "application/x-tex-tfm"], ["tfx", "image/tiff-fx"], ["tga", "image/x-tga"], ["tgz", "application/x-tar"], ["thmx", "application/vnd.ms-officetheme"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["tk", "application/x-tcl"], ["tmo", "application/vnd.tmobile-livetv"], ["toml", "application/toml"], ["torrent", "application/x-bittorrent"], ["tpl", "application/vnd.groove-tool-template"], ["tpt", "application/vnd.trid.tpt"], ["tr", "text/troff"], ["tra", "application/vnd.trueapp"], ["trig", "application/trig"], ["trm", "application/x-msterminal"], ["ts", "video/mp2t"], ["tsd", "application/timestamped-data"], ["tsv", "text/tab-separated-values"], ["ttc", "font/collection"], ["ttf", "font/ttf"], ["ttl", "text/turtle"], ["ttml", "application/ttml+xml"], ["twd", "application/vnd.simtech-mindmapper"], ["twds", "application/vnd.simtech-mindmapper"], ["txd", "application/vnd.genomatix.tuxedo"], ["txf", "application/vnd.mobius.txf"], ["txt", "text/plain"], ["u8dsn", "message/global-delivery-status"], ["u8hdr", "message/global-headers"], ["u8mdn", "message/global-disposition-notification"], ["u8msg", "message/global"], ["u32", "application/x-authorware-bin"], ["ubj", "application/ubjson"], ["udeb", "application/x-debian-package"], ["ufd", "application/vnd.ufdl"], ["ufdl", "application/vnd.ufdl"], ["ulx", "application/x-glulx"], ["umj", "application/vnd.umajin"], ["unityweb", "application/vnd.unity"], ["uoml", "application/vnd.uoml+xml"], ["uri", "text/uri-list"], ["uris", "text/uri-list"], ["urls", "text/uri-list"], ["usdz", "model/vnd.usdz+zip"], ["ustar", "application/x-ustar"], ["utz", "application/vnd.uiq.theme"], ["uu", "text/x-uuencode"], ["uva", "audio/vnd.dece.audio"], ["uvd", "application/vnd.dece.data"], ["uvf", "application/vnd.dece.data"], ["uvg", "image/vnd.dece.graphic"], ["uvh", "video/vnd.dece.hd"], ["uvi", "image/vnd.dece.graphic"], ["uvm", "video/vnd.dece.mobile"], ["uvp", "video/vnd.dece.pd"], ["uvs", "video/vnd.dece.sd"], ["uvt", "application/vnd.dece.ttml+xml"], ["uvu", "video/vnd.uvvu.mp4"], ["uvv", "video/vnd.dece.video"], ["uvva", "audio/vnd.dece.audio"], ["uvvd", "application/vnd.dece.data"], ["uvvf", "application/vnd.dece.data"], ["uvvg", "image/vnd.dece.graphic"], ["uvvh", "video/vnd.dece.hd"], ["uvvi", "image/vnd.dece.graphic"], ["uvvm", "video/vnd.dece.mobile"], ["uvvp", "video/vnd.dece.pd"], ["uvvs", "video/vnd.dece.sd"], ["uvvt", "application/vnd.dece.ttml+xml"], ["uvvu", "video/vnd.uvvu.mp4"], ["uvvv", "video/vnd.dece.video"], ["uvvx", "application/vnd.dece.unspecified"], ["uvvz", "application/vnd.dece.zip"], ["uvx", "application/vnd.dece.unspecified"], ["uvz", "application/vnd.dece.zip"], ["vbox", "application/x-virtualbox-vbox"], ["vbox-extpack", "application/x-virtualbox-vbox-extpack"], ["vcard", "text/vcard"], ["vcd", "application/x-cdlink"], ["vcf", "text/x-vcard"], ["vcg", "application/vnd.groove-vcard"], ["vcs", "text/x-vcalendar"], ["vcx", "application/vnd.vcx"], ["vdi", "application/x-virtualbox-vdi"], ["vds", "model/vnd.sap.vds"], ["vhd", "application/x-virtualbox-vhd"], ["vis", "application/vnd.visionary"], ["viv", "video/vnd.vivo"], ["vlc", "application/videolan"], ["vmdk", "application/x-virtualbox-vmdk"], ["vob", "video/x-ms-vob"], ["vor", "application/vnd.stardivision.writer"], ["vox", "application/x-authorware-bin"], ["vrml", "model/vrml"], ["vsd", "application/vnd.visio"], ["vsf", "application/vnd.vsf"], ["vss", "application/vnd.visio"], ["vst", "application/vnd.visio"], ["vsw", "application/vnd.visio"], ["vtf", "image/vnd.valve.source.texture"], ["vtt", "text/vtt"], ["vtu", "model/vnd.vtu"], ["vxml", "application/voicexml+xml"], ["w3d", "application/x-director"], ["wad", "application/x-doom"], ["wadl", "application/vnd.sun.wadl+xml"], ["war", "application/java-archive"], ["wasm", "application/wasm"], ["wav", "audio/x-wav"], ["wax", "audio/x-ms-wax"], ["wbmp", "image/vnd.wap.wbmp"], ["wbs", "application/vnd.criticaltools.wbs+xml"], ["wbxml", "application/wbxml"], ["wcm", "application/vnd.ms-works"], ["wdb", "application/vnd.ms-works"], ["wdp", "image/vnd.ms-photo"], ["weba", "audio/webm"], ["webapp", "application/x-web-app-manifest+json"], ["webm", "video/webm"], ["webmanifest", "application/manifest+json"], ["webp", "image/webp"], ["wg", "application/vnd.pmi.widget"], ["wgt", "application/widget"], ["wks", "application/vnd.ms-works"], ["wm", "video/x-ms-wm"], ["wma", "audio/x-ms-wma"], ["wmd", "application/x-ms-wmd"], ["wmf", "image/wmf"], ["wml", "text/vnd.wap.wml"], ["wmlc", "application/wmlc"], ["wmls", "text/vnd.wap.wmlscript"], ["wmlsc", "application/vnd.wap.wmlscriptc"], ["wmv", "video/x-ms-wmv"], ["wmx", "video/x-ms-wmx"], ["wmz", "application/x-msmetafile"], ["woff", "font/woff"], ["woff2", "font/woff2"], ["word", "application/msword"], ["wpd", "application/vnd.wordperfect"], ["wpl", "application/vnd.ms-wpl"], ["wps", "application/vnd.ms-works"], ["wqd", "application/vnd.wqd"], ["wri", "application/x-mswrite"], ["wrl", "model/vrml"], ["wsc", "message/vnd.wfa.wsc"], ["wsdl", "application/wsdl+xml"], ["wspolicy", "application/wspolicy+xml"], ["wtb", "application/vnd.webturbo"], ["wvx", "video/x-ms-wvx"], ["x3d", "model/x3d+xml"], ["x3db", "model/x3d+fastinfoset"], ["x3dbz", "model/x3d+binary"], ["x3dv", "model/x3d-vrml"], ["x3dvz", "model/x3d+vrml"], ["x3dz", "model/x3d+xml"], ["x32", "application/x-authorware-bin"], ["x_b", "model/vnd.parasolid.transmit.binary"], ["x_t", "model/vnd.parasolid.transmit.text"], ["xaml", "application/xaml+xml"], ["xap", "application/x-silverlight-app"], ["xar", "application/vnd.xara"], ["xav", "application/xcap-att+xml"], ["xbap", "application/x-ms-xbap"], ["xbd", "application/vnd.fujixerox.docuworks.binder"], ["xbm", "image/x-xbitmap"], ["xca", "application/xcap-caps+xml"], ["xcs", "application/calendar+xml"], ["xdf", "application/xcap-diff+xml"], ["xdm", "application/vnd.syncml.dm+xml"], ["xdp", "application/vnd.adobe.xdp+xml"], ["xdssc", "application/dssc+xml"], ["xdw", "application/vnd.fujixerox.docuworks"], ["xel", "application/xcap-el+xml"], ["xenc", "application/xenc+xml"], ["xer", "application/patch-ops-error+xml"], ["xfdf", "application/vnd.adobe.xfdf"], ["xfdl", "application/vnd.xfdl"], ["xht", "application/xhtml+xml"], ["xhtml", "application/xhtml+xml"], ["xhvml", "application/xv+xml"], ["xif", "image/vnd.xiff"], ["xl", "application/excel"], ["xla", "application/vnd.ms-excel"], ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"], ["xlc", "application/vnd.ms-excel"], ["xlf", "application/xliff+xml"], ["xlm", "application/vnd.ms-excel"], ["xls", "application/vnd.ms-excel"], ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"], ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"], ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"], ["xlt", "application/vnd.ms-excel"], ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"], ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"], ["xlw", "application/vnd.ms-excel"], ["xm", "audio/xm"], ["xml", "application/xml"], ["xns", "application/xcap-ns+xml"], ["xo", "application/vnd.olpc-sugar"], ["xop", "application/xop+xml"], ["xpi", "application/x-xpinstall"], ["xpl", "application/xproc+xml"], ["xpm", "image/x-xpixmap"], ["xpr", "application/vnd.is-xpr"], ["xps", "application/vnd.ms-xpsdocument"], ["xpw", "application/vnd.intercon.formnet"], ["xpx", "application/vnd.intercon.formnet"], ["xsd", "application/xml"], ["xsl", "application/xml"], ["xslt", "application/xslt+xml"], ["xsm", "application/vnd.syncml+xml"], ["xspf", "application/xspf+xml"], ["xul", "application/vnd.mozilla.xul+xml"], ["xvm", "application/xv+xml"], ["xvml", "application/xv+xml"], ["xwd", "image/x-xwindowdump"], ["xyz", "chemical/x-xyz"], ["xz", "application/x-xz"], ["yaml", "text/yaml"], ["yang", "application/yang"], ["yin", "application/yin+xml"], ["yml", "text/yaml"], ["ymp", "text/x-suse-ymp"], ["z", "application/x-compress"], ["z1", "application/x-zmachine"], ["z2", "application/x-zmachine"], ["z3", "application/x-zmachine"], ["z4", "application/x-zmachine"], ["z5", "application/x-zmachine"], ["z6", "application/x-zmachine"], ["z7", "application/x-zmachine"], ["z8", "application/x-zmachine"], ["zaz", "application/vnd.zzazz.deck+xml"], ["zip", "application/zip"], ["zir", "application/vnd.zul"], ["zirz", "application/vnd.zul"], ["zmm", "application/vnd.handheld-entertainment+xml"], ["zsh", "text/x-scriptzsh"]]);
  function m(a2, i2, t2) {
    let e2 = (function(a3) {
      let { name: i3 } = a3;
      if (i3 && -1 !== i3.lastIndexOf(".") && !a3.type) {
        let t3 = i3.split(".").pop().toLowerCase(), e3 = d.get(t3);
        e3 && Object.defineProperty(a3, "type", { value: e3, writable: false, configurable: false, enumerable: true });
      }
      return a3;
    })(a2), { webkitRelativePath: n2 } = a2, p2 = "string" == typeof i2 ? i2 : "string" == typeof n2 && n2.length > 0 ? n2 : `./${a2.name}`;
    return "string" != typeof e2.path && u(e2, "path", p2), void 0 !== t2 && Object.defineProperty(e2, "handle", { value: t2, writable: false, configurable: false, enumerable: true }), u(e2, "relativePath", p2), e2;
  }
  function u(a2, i2, t2) {
    Object.defineProperty(a2, i2, { value: t2, writable: false, configurable: false, enumerable: true });
  }
  try {
    var v = "u" > typeof window ? window : a.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  let x = [".DS_Store", "Thumbs.db"];
  function f(a2) {
    return "object" == typeof a2 && null !== a2;
  }
  function g(a2) {
    return a2.filter((a3) => -1 === x.indexOf(a3.name));
  }
  function b(a2) {
    if (null === a2) return [];
    let i2 = [];
    for (let t2 = 0; t2 < a2.length; t2++) {
      let e2 = a2[t2];
      i2.push(e2);
    }
    return i2;
  }
  function h(a2) {
    if ("function" != typeof a2.webkitGetAsEntry) return y(a2);
    let i2 = a2.webkitGetAsEntry();
    return i2 && i2.isDirectory ? k(i2) : y(a2, i2);
  }
  function y(a2, i2) {
    return (0, r.__awaiter)(this, void 0, void 0, function* () {
      var t2;
      if (globalThis.isSecureContext && "function" == typeof a2.getAsFileSystemHandle) {
        let i3 = yield a2.getAsFileSystemHandle();
        if (null === i3) throw Error(`${a2} is not a File`);
        if (void 0 !== i3) {
          let a3 = yield i3.getFile();
          return a3.handle = i3, m(a3);
        }
      }
      let e2 = a2.getAsFile();
      if (!e2) throw Error(`${a2} is not a File`);
      return m(e2, null != (t2 = null == i2 ? void 0 : i2.fullPath) ? t2 : void 0);
    });
  }
  function w(a2) {
    return (0, r.__awaiter)(this, void 0, void 0, function* () {
      return a2.isDirectory ? k(a2) : (function(a3) {
        return (0, r.__awaiter)(this, void 0, void 0, function* () {
          return new Promise((i2, t2) => {
            a3.file((t3) => {
              i2(m(t3, a3.fullPath));
            }, (a4) => {
              t2(a4);
            });
          });
        });
      })(a2);
    });
  }
  function k(a2) {
    let i2 = a2.createReader();
    return new Promise((a3, t2) => {
      let e2 = [];
      !(function n2() {
        i2.readEntries((i3) => (0, r.__awaiter)(this, void 0, void 0, function* () {
          if (i3.length) {
            let a4 = Promise.all(i3.map(w));
            e2.push(a4), n2();
          } else try {
            let i4 = yield Promise.all(e2);
            a3(i4);
          } catch (a4) {
            t2(a4);
          }
        }), (a4) => {
          t2(a4);
        });
      })();
    });
  }
  try {
    var j = "u" > typeof window ? window : a.g;
    j._sentryModuleMetadata = j._sentryModuleMetadata || {}, j._sentryModuleMetadata[new j.Error().stack] = Object.assign({}, j._sentryModuleMetadata[new j.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  var z = a.i(775592);
  try {
    var M = "u" > typeof window ? window : a.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  function E(a2) {
    return (function(a3) {
      if (Array.isArray(a3)) return C(a3);
    })(a2) || (function(a3) {
      if ("u" > typeof Symbol && null != a3[Symbol.iterator] || null != a3["@@iterator"]) return Array.from(a3);
    })(a2) || A(a2) || (function() {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function D(a2, i2) {
    var t2 = Object.keys(a2);
    if (Object.getOwnPropertySymbols) {
      var e2 = Object.getOwnPropertySymbols(a2);
      i2 && (e2 = e2.filter(function(i3) {
        return Object.getOwnPropertyDescriptor(a2, i3).enumerable;
      })), t2.push.apply(t2, e2);
    }
    return t2;
  }
  function _(a2) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var t2 = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? D(Object(t2), true).forEach(function(i3) {
        O(a2, i3, t2[i3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a2, Object.getOwnPropertyDescriptors(t2)) : D(Object(t2)).forEach(function(i3) {
        Object.defineProperty(a2, i3, Object.getOwnPropertyDescriptor(t2, i3));
      });
    }
    return a2;
  }
  function O(a2, i2, t2) {
    return i2 in a2 ? Object.defineProperty(a2, i2, { value: t2, enumerable: true, configurable: true, writable: true }) : a2[i2] = t2, a2;
  }
  function F(a2, i2) {
    return (function(a3) {
      if (Array.isArray(a3)) return a3;
    })(a2) || (function(a3, i3) {
      var t2, e2, n2 = null == a3 ? null : "u" > typeof Symbol && a3[Symbol.iterator] || a3["@@iterator"];
      if (null != n2) {
        var p2 = [], o2 = true, l2 = false;
        try {
          for (n2 = n2.call(a3); !(o2 = (t2 = n2.next()).done) && (p2.push(t2.value), !i3 || p2.length !== i3); o2 = true) ;
        } catch (a4) {
          l2 = true, e2 = a4;
        } finally {
          try {
            o2 || null == n2.return || n2.return();
          } finally {
            if (l2) throw e2;
          }
        }
        return p2;
      }
    })(a2, i2) || A(a2, i2) || (function() {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function A(a2, i2) {
    if (a2) {
      if ("string" == typeof a2) return C(a2, i2);
      var t2 = Object.prototype.toString.call(a2).slice(8, -1);
      if ("Object" === t2 && a2.constructor && (t2 = a2.constructor.name), "Map" === t2 || "Set" === t2) return Array.from(a2);
      if ("Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2)) return C(a2, i2);
    }
  }
  function C(a2, i2) {
    (null == i2 || i2 > a2.length) && (i2 = a2.length);
    for (var t2 = 0, e2 = Array(i2); t2 < i2; t2++) e2[t2] = a2[t2];
    return e2;
  }
  var S = "function" == typeof z.default ? z.default : z.default.default, P = function() {
    var a2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", i2 = a2.split(","), t2 = i2.length > 1 ? "one of ".concat(i2.join(", ")) : i2[0];
    return { code: "file-invalid-type", message: "File type must be ".concat(t2) };
  }, q = function(a2) {
    return { code: "file-too-large", message: "File is larger than ".concat(a2, " ").concat(1 === a2 ? "byte" : "bytes") };
  }, R = function(a2) {
    return { code: "file-too-small", message: "File is smaller than ".concat(a2, " ").concat(1 === a2 ? "byte" : "bytes") };
  }, B = { code: "too-many-files", message: "Too many files" };
  function L(a2, i2) {
    var t2 = "application/x-moz-file" === a2.type || S(a2, i2) || "" === a2.type && "function" == typeof a2.getAsFile;
    return [t2, t2 ? null : P(i2)];
  }
  function N(a2, i2, t2) {
    if (T(a2.size)) {
      if (T(i2) && T(t2)) {
        if (a2.size > t2) return [false, q(t2)];
        if (a2.size < i2) return [false, R(i2)];
      } else if (T(i2) && a2.size < i2) return [false, R(i2)];
      else if (T(t2) && a2.size > t2) return [false, q(t2)];
    }
    return [true, null];
  }
  function T(a2) {
    return null != a2;
  }
  function I(a2) {
    return "function" == typeof a2.isPropagationStopped ? a2.isPropagationStopped() : void 0 !== a2.cancelBubble && a2.cancelBubble;
  }
  function K(a2) {
    return a2.dataTransfer ? Array.prototype.some.call(a2.dataTransfer.types, function(a3) {
      return "Files" === a3 || "application/x-moz-file" === a3;
    }) : !!a2.target && !!a2.target.files;
  }
  function G(a2) {
    a2.preventDefault();
  }
  function W() {
    for (var a2 = arguments.length, i2 = Array(a2), t2 = 0; t2 < a2; t2++) i2[t2] = arguments[t2];
    return function(a3) {
      for (var t3 = arguments.length, e2 = Array(t3 > 1 ? t3 - 1 : 0), n2 = 1; n2 < t3; n2++) e2[n2 - 1] = arguments[n2];
      return i2.some(function(i3) {
        return !I(a3) && i3 && i3.apply(void 0, [a3].concat(e2)), I(a3);
      });
    };
  }
  function U(a2) {
    return "audio/*" === a2 || "video/*" === a2 || "image/*" === a2 || "text/*" === a2 || "application/*" === a2 || /\w+\/[-+.\w]+/g.test(a2);
  }
  function H(a2) {
    return /^.*\.[\w]+$/.test(a2);
  }
  try {
    var $ = "u" > typeof window ? window : a.g;
    $._sentryModuleMetadata = $._sentryModuleMetadata || {}, $._sentryModuleMetadata[new $.Error().stack] = Object.assign({}, $._sentryModuleMetadata[new $.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  var V = ["children"], X = ["open"], Z = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Y = ["refKey", "onChange", "onClick"];
  function J(a2) {
    return (function(a3) {
      if (Array.isArray(a3)) return ai(a3);
    })(a2) || (function(a3) {
      if ("u" > typeof Symbol && null != a3[Symbol.iterator] || null != a3["@@iterator"]) return Array.from(a3);
    })(a2) || aa(a2) || (function() {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Q(a2, i2) {
    return (function(a3) {
      if (Array.isArray(a3)) return a3;
    })(a2) || (function(a3, i3) {
      var t2, e2, n2 = null == a3 ? null : "u" > typeof Symbol && a3[Symbol.iterator] || a3["@@iterator"];
      if (null != n2) {
        var p2 = [], o2 = true, l2 = false;
        try {
          for (n2 = n2.call(a3); !(o2 = (t2 = n2.next()).done) && (p2.push(t2.value), !i3 || p2.length !== i3); o2 = true) ;
        } catch (a4) {
          l2 = true, e2 = a4;
        } finally {
          try {
            o2 || null == n2.return || n2.return();
          } finally {
            if (l2) throw e2;
          }
        }
        return p2;
      }
    })(a2, i2) || aa(a2, i2) || (function() {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function aa(a2, i2) {
    if (a2) {
      if ("string" == typeof a2) return ai(a2, i2);
      var t2 = Object.prototype.toString.call(a2).slice(8, -1);
      if ("Object" === t2 && a2.constructor && (t2 = a2.constructor.name), "Map" === t2 || "Set" === t2) return Array.from(a2);
      if ("Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2)) return ai(a2, i2);
    }
  }
  function ai(a2, i2) {
    (null == i2 || i2 > a2.length) && (i2 = a2.length);
    for (var t2 = 0, e2 = Array(i2); t2 < i2; t2++) e2[t2] = a2[t2];
    return e2;
  }
  function at(a2, i2) {
    var t2 = Object.keys(a2);
    if (Object.getOwnPropertySymbols) {
      var e2 = Object.getOwnPropertySymbols(a2);
      i2 && (e2 = e2.filter(function(i3) {
        return Object.getOwnPropertyDescriptor(a2, i3).enumerable;
      })), t2.push.apply(t2, e2);
    }
    return t2;
  }
  function ae(a2) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var t2 = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? at(Object(t2), true).forEach(function(i3) {
        an(a2, i3, t2[i3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a2, Object.getOwnPropertyDescriptors(t2)) : at(Object(t2)).forEach(function(i3) {
        Object.defineProperty(a2, i3, Object.getOwnPropertyDescriptor(t2, i3));
      });
    }
    return a2;
  }
  function an(a2, i2, t2) {
    return i2 in a2 ? Object.defineProperty(a2, i2, { value: t2, enumerable: true, configurable: true, writable: true }) : a2[i2] = t2, a2;
  }
  function ap(a2, i2) {
    if (null == a2) return {};
    var t2, e2, n2 = (function(a3, i3) {
      if (null == a3) return {};
      var t3, e3, n3 = {}, p3 = Object.keys(a3);
      for (e3 = 0; e3 < p3.length; e3++) t3 = p3[e3], i3.indexOf(t3) >= 0 || (n3[t3] = a3[t3]);
      return n3;
    })(a2, i2);
    if (Object.getOwnPropertySymbols) {
      var p2 = Object.getOwnPropertySymbols(a2);
      for (e2 = 0; e2 < p2.length; e2++) t2 = p2[e2], !(i2.indexOf(t2) >= 0) && Object.prototype.propertyIsEnumerable.call(a2, t2) && (n2[t2] = a2[t2]);
    }
    return n2;
  }
  var ao = (0, e.forwardRef)(function(a2, i2) {
    var t2 = a2.children, n2 = ar(ap(a2, V)), p2 = n2.open, o2 = ap(n2, X);
    return (0, e.useImperativeHandle)(i2, function() {
      return { open: p2 };
    }, [p2]), e.default.createElement(e.Fragment, null, t2(ae(ae({}, o2), {}, { open: p2 })));
  });
  ao.displayName = "Dropzone";
  var al = { disabled: false, getFilesFromEvent: function(a2) {
    return (0, r.__awaiter)(this, void 0, void 0, function* () {
      var i2;
      if (f(a2) && f(a2.dataTransfer)) return (function(a3, i3) {
        return (0, r.__awaiter)(this, void 0, void 0, function* () {
          if (a3.items) {
            let t2 = b(a3.items).filter((a4) => "file" === a4.kind);
            return "drop" !== i3 ? t2 : g((function a4(i4) {
              return i4.reduce((i5, t3) => [...i5, ...Array.isArray(t3) ? a4(t3) : [t3]], []);
            })(yield Promise.all(t2.map(h))));
          }
          return g(b(a3.files).map((a4) => m(a4)));
        });
      })(a2.dataTransfer, a2.type);
      if (f(i2 = a2) && f(i2.target)) return b(a2.target.files).map((a3) => m(a3));
      return Array.isArray(a2) && a2.every((a3) => "getFile" in a3 && "function" == typeof a3.getFile) ? (function(a3) {
        return (0, r.__awaiter)(this, void 0, void 0, function* () {
          return (yield Promise.all(a3.map((a4) => a4.getFile()))).map((a4) => m(a4));
        });
      })(a2) : [];
    });
  }, maxSize: 1 / 0, minSize: 0, multiple: true, maxFiles: 0, preventDropOnDocument: true, noClick: false, noKeyboard: false, noDrag: false, noDragEventsBubbling: false, validator: null, useFsAccessApi: false, autoFocus: false };
  ao.defaultProps = al, ao.propTypes = { children: c.default.func, accept: c.default.objectOf(c.default.arrayOf(c.default.string)), multiple: c.default.bool, preventDropOnDocument: c.default.bool, noClick: c.default.bool, noKeyboard: c.default.bool, noDrag: c.default.bool, noDragEventsBubbling: c.default.bool, minSize: c.default.number, maxSize: c.default.number, maxFiles: c.default.number, disabled: c.default.bool, getFilesFromEvent: c.default.func, onFileDialogCancel: c.default.func, onFileDialogOpen: c.default.func, useFsAccessApi: c.default.bool, autoFocus: c.default.bool, onDragEnter: c.default.func, onDragLeave: c.default.func, onDragOver: c.default.func, onDrop: c.default.func, onDropAccepted: c.default.func, onDropRejected: c.default.func, onError: c.default.func, validator: c.default.func };
  var ac = { isFocused: false, isFileDialogActive: false, isDragActive: false, isDragAccept: false, isDragReject: false, isDragGlobal: false, acceptedFiles: [], fileRejections: [] };
  function ar() {
    var a2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i2 = ae(ae({}, al), a2), t2 = i2.accept, n2 = i2.disabled, p2 = i2.getFilesFromEvent, o2 = i2.maxSize, l2 = i2.minSize, c2 = i2.multiple, r2 = i2.maxFiles, s2 = i2.onDragEnter, d2 = i2.onDragLeave, m2 = i2.onDragOver, u2 = i2.onDrop, v2 = i2.onDropAccepted, x2 = i2.onDropRejected, f2 = i2.onFileDialogCancel, g2 = i2.onFileDialogOpen, b2 = i2.useFsAccessApi, h2 = i2.autoFocus, y2 = i2.preventDropOnDocument, w2 = i2.noClick, k2 = i2.noKeyboard, j2 = i2.noDrag, z2 = i2.noDragEventsBubbling, M2 = i2.onError, D2 = i2.validator, A2 = (0, e.useMemo)(function() {
      return T(t2) ? Object.entries(t2).reduce(function(a3, i3) {
        var t3 = F(i3, 2), e2 = t3[0], n3 = t3[1];
        return [].concat(E(a3), [e2], E(n3));
      }, []).filter(function(a3) {
        return U(a3) || H(a3);
      }).join(",") : void 0;
    }, [t2]), C2 = (0, e.useMemo)(function() {
      return T(t2) ? [{ description: "Files", accept: Object.entries(t2).filter(function(a3) {
        var i3 = F(a3, 2), t3 = i3[0], e2 = i3[1], n3 = true;
        return U(t3) || (console.warn('Skipped "'.concat(t3, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), n3 = false), Array.isArray(e2) && e2.every(H) || (console.warn('Skipped "'.concat(t3, '" because an invalid file extension was provided.')), n3 = false), n3;
      }).reduce(function(a3, i3) {
        var t3 = F(i3, 2), e2 = t3[0], n3 = t3[1];
        return _(_({}, a3), {}, O({}, e2, n3));
      }, {}) }] : t2;
    }, [t2]), S2 = (0, e.useMemo)(function() {
      return "function" == typeof g2 ? g2 : ad;
    }, [g2]), P2 = (0, e.useMemo)(function() {
      return "function" == typeof f2 ? f2 : ad;
    }, [f2]), q2 = (0, e.useRef)(null), R2 = (0, e.useRef)(null), $2 = Q((0, e.useReducer)(as, ac), 2), V2 = $2[0], X2 = $2[1], aa2 = V2.isFocused, ai2 = V2.isFileDialogActive, at2 = (0, e.useRef)("u" > typeof window && window.isSecureContext && b2 && "showOpenFilePicker" in window), ao2 = function() {
      !at2.current && ai2 && setTimeout(function() {
        R2.current && (R2.current.files.length || (X2({ type: "closeDialog" }), P2()));
      }, 300);
    };
    (0, e.useEffect)(function() {
      return window.addEventListener("focus", ao2, false), function() {
        window.removeEventListener("focus", ao2, false);
      };
    }, [R2, ai2, P2, at2]);
    var ar2 = (0, e.useRef)([]), am2 = (0, e.useRef)([]), au2 = function(a3) {
      q2.current && q2.current.contains(a3.target) || (a3.preventDefault(), ar2.current = []);
    };
    (0, e.useEffect)(function() {
      return y2 && (document.addEventListener("dragover", G, false), document.addEventListener("drop", au2, false)), function() {
        y2 && (document.removeEventListener("dragover", G), document.removeEventListener("drop", au2));
      };
    }, [q2, y2]), (0, e.useEffect)(function() {
      var a3 = function(a4) {
        am2.current = [].concat(J(am2.current), [a4.target]), K(a4) && X2({ isDragGlobal: true, type: "setDragGlobal" });
      }, i3 = function(a4) {
        am2.current = am2.current.filter(function(i4) {
          return i4 !== a4.target && null !== i4;
        }), am2.current.length > 0 || X2({ isDragGlobal: false, type: "setDragGlobal" });
      }, t3 = function() {
        am2.current = [], X2({ isDragGlobal: false, type: "setDragGlobal" });
      }, e2 = function() {
        am2.current = [], X2({ isDragGlobal: false, type: "setDragGlobal" });
      };
      return document.addEventListener("dragenter", a3, false), document.addEventListener("dragleave", i3, false), document.addEventListener("dragend", t3, false), document.addEventListener("drop", e2, false), function() {
        document.removeEventListener("dragenter", a3), document.removeEventListener("dragleave", i3), document.removeEventListener("dragend", t3), document.removeEventListener("drop", e2);
      };
    }, [q2]), (0, e.useEffect)(function() {
      return !n2 && h2 && q2.current && q2.current.focus(), function() {
      };
    }, [q2, h2, n2]);
    var av2 = (0, e.useCallback)(function(a3) {
      M2 ? M2(a3) : console.error(a3);
    }, [M2]), ax2 = (0, e.useCallback)(function(a3) {
      a3.preventDefault(), a3.persist(), a_2(a3), ar2.current = [].concat(J(ar2.current), [a3.target]), K(a3) && Promise.resolve(p2(a3)).then(function(i3) {
        if (!I(a3) || z2) {
          var t3, e2, n3, p3, d3, m3, u3, v3, x3 = i3.length, f3 = x3 > 0 && (e2 = (t3 = { files: i3, accept: A2, minSize: l2, maxSize: o2, multiple: c2, maxFiles: r2, validator: D2 }).files, n3 = t3.accept, p3 = t3.minSize, d3 = t3.maxSize, m3 = t3.multiple, u3 = t3.maxFiles, v3 = t3.validator, (!!m3 || !(e2.length > 1)) && (!m3 || !(u3 >= 1) || !(e2.length > u3)) && e2.every(function(a4) {
            var i4 = F(L(a4, n3), 1)[0], t4 = F(N(a4, p3, d3), 1)[0], e3 = v3 ? v3(a4) : null;
            return i4 && t4 && !e3;
          }));
          X2({ isDragAccept: f3, isDragReject: x3 > 0 && !f3, isDragActive: true, type: "setDraggedFiles" }), s2 && s2(a3);
        }
      }).catch(function(a4) {
        return av2(a4);
      });
    }, [p2, s2, av2, z2, A2, l2, o2, c2, r2, D2]), af2 = (0, e.useCallback)(function(a3) {
      a3.preventDefault(), a3.persist(), a_2(a3);
      var i3 = K(a3);
      if (i3 && a3.dataTransfer) try {
        a3.dataTransfer.dropEffect = "copy";
      } catch (a4) {
      }
      return i3 && m2 && m2(a3), false;
    }, [m2, z2]), ag2 = (0, e.useCallback)(function(a3) {
      a3.preventDefault(), a3.persist(), a_2(a3);
      var i3 = ar2.current.filter(function(a4) {
        return q2.current && q2.current.contains(a4);
      }), t3 = i3.indexOf(a3.target);
      -1 !== t3 && i3.splice(t3, 1), ar2.current = i3, !(i3.length > 0) && (X2({ type: "setDraggedFiles", isDragActive: false, isDragAccept: false, isDragReject: false }), K(a3) && d2 && d2(a3));
    }, [q2, d2, z2]), ab2 = (0, e.useCallback)(function(a3, i3) {
      var t3 = [], e2 = [];
      a3.forEach(function(a4) {
        var i4 = Q(L(a4, A2), 2), n3 = i4[0], p3 = i4[1], c3 = Q(N(a4, l2, o2), 2), r3 = c3[0], s3 = c3[1], d3 = D2 ? D2(a4) : null;
        if (n3 && r3 && !d3) t3.push(a4);
        else {
          var m3 = [p3, s3];
          d3 && (m3 = m3.concat(d3)), e2.push({ file: a4, errors: m3.filter(function(a5) {
            return a5;
          }) });
        }
      }), (!c2 && t3.length > 1 || c2 && r2 >= 1 && t3.length > r2) && (t3.forEach(function(a4) {
        e2.push({ file: a4, errors: [B] });
      }), t3.splice(0)), X2({ acceptedFiles: t3, fileRejections: e2, isDragReject: e2.length > 0, type: "setFiles" }), u2 && u2(t3, e2, i3), e2.length > 0 && x2 && x2(e2, i3), t3.length > 0 && v2 && v2(t3, i3);
    }, [X2, c2, A2, l2, o2, r2, u2, v2, x2, D2]), ah2 = (0, e.useCallback)(function(a3) {
      a3.preventDefault(), a3.persist(), a_2(a3), ar2.current = [], K(a3) && Promise.resolve(p2(a3)).then(function(i3) {
        (!I(a3) || z2) && ab2(i3, a3);
      }).catch(function(a4) {
        return av2(a4);
      }), X2({ type: "reset" });
    }, [p2, ab2, av2, z2]), ay2 = (0, e.useCallback)(function() {
      if (at2.current) {
        X2({ type: "openDialog" }), S2(), window.showOpenFilePicker({ multiple: c2, types: C2 }).then(function(a3) {
          return p2(a3);
        }).then(function(a3) {
          ab2(a3, null), X2({ type: "closeDialog" });
        }).catch(function(a3) {
          a3 instanceof DOMException && ("AbortError" === a3.name || a3.code === a3.ABORT_ERR) ? (P2(a3), X2({ type: "closeDialog" })) : a3 instanceof DOMException && ("SecurityError" === a3.name || a3.code === a3.SECURITY_ERR) ? (at2.current = false, R2.current ? (R2.current.value = null, R2.current.click()) : av2(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : av2(a3);
        });
        return;
      }
      R2.current && (X2({ type: "openDialog" }), S2(), R2.current.value = null, R2.current.click());
    }, [X2, S2, P2, b2, ab2, av2, C2, c2]), aw2 = (0, e.useCallback)(function(a3) {
      q2.current && q2.current.isEqualNode(a3.target) && (" " === a3.key || "Enter" === a3.key || 32 === a3.keyCode || 13 === a3.keyCode) && (a3.preventDefault(), ay2());
    }, [q2, ay2]), ak2 = (0, e.useCallback)(function() {
      X2({ type: "focus" });
    }, []), aj2 = (0, e.useCallback)(function() {
      X2({ type: "blur" });
    }, []), az2 = (0, e.useCallback)(function() {
      w2 || ((function() {
        var a3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
        return -1 !== a3.indexOf("MSIE") || -1 !== a3.indexOf("Trident/") || -1 !== a3.indexOf("Edge/");
      })() ? setTimeout(ay2, 0) : ay2());
    }, [w2, ay2]), aM2 = function(a3) {
      return n2 ? null : a3;
    }, aE2 = function(a3) {
      return k2 ? null : aM2(a3);
    }, aD2 = function(a3) {
      return j2 ? null : aM2(a3);
    }, a_2 = function(a3) {
      z2 && a3.stopPropagation();
    }, aO2 = (0, e.useMemo)(function() {
      return function() {
        var a3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i3 = a3.refKey, t3 = a3.role, e2 = a3.onKeyDown, p3 = a3.onFocus, o3 = a3.onBlur, l3 = a3.onClick, c3 = a3.onDragEnter, r3 = a3.onDragOver, s3 = a3.onDragLeave, d3 = a3.onDrop, m3 = ap(a3, Z);
        return ae(ae(an({ onKeyDown: aE2(W(e2, aw2)), onFocus: aE2(W(p3, ak2)), onBlur: aE2(W(o3, aj2)), onClick: aM2(W(l3, az2)), onDragEnter: aD2(W(c3, ax2)), onDragOver: aD2(W(r3, af2)), onDragLeave: aD2(W(s3, ag2)), onDrop: aD2(W(d3, ah2)), role: "string" == typeof t3 && "" !== t3 ? t3 : "presentation" }, void 0 === i3 ? "ref" : i3, q2), n2 || k2 ? {} : { tabIndex: 0 }), m3);
      };
    }, [q2, aw2, ak2, aj2, az2, ax2, af2, ag2, ah2, k2, j2, n2]), aF2 = (0, e.useCallback)(function(a3) {
      a3.stopPropagation();
    }, []), aA2 = (0, e.useMemo)(function() {
      return function() {
        var a3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i3 = a3.refKey, t3 = a3.onChange, e2 = a3.onClick, n3 = ap(a3, Y);
        return ae(ae({}, an({ accept: A2, multiple: c2, type: "file", style: { border: 0, clip: "rect(0, 0, 0, 0)", clipPath: "inset(50%)", height: "1px", margin: "0 -1px -1px 0", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap" }, onChange: aM2(W(t3, ah2)), onClick: aM2(W(e2, aF2)), tabIndex: -1 }, void 0 === i3 ? "ref" : i3, R2)), n3);
      };
    }, [R2, t2, c2, ah2, n2]);
    return ae(ae({}, V2), {}, { isFocused: aa2 && !n2, getRootProps: aO2, getInputProps: aA2, rootRef: q2, inputRef: R2, open: aM2(ay2) });
  }
  function as(a2, i2) {
    switch (i2.type) {
      case "focus":
        return ae(ae({}, a2), {}, { isFocused: true });
      case "blur":
        return ae(ae({}, a2), {}, { isFocused: false });
      case "openDialog":
        return ae(ae({}, ac), {}, { isFileDialogActive: true });
      case "closeDialog":
        return ae(ae({}, a2), {}, { isFileDialogActive: false });
      case "setDraggedFiles":
        return ae(ae({}, a2), {}, { isDragActive: i2.isDragActive, isDragAccept: i2.isDragAccept, isDragReject: i2.isDragReject });
      case "setFiles":
        return ae(ae({}, a2), {}, { acceptedFiles: i2.acceptedFiles, fileRejections: i2.fileRejections, isDragReject: i2.isDragReject });
      case "setDragGlobal":
        return ae(ae({}, a2), {}, { isDragGlobal: i2.isDragGlobal });
      case "reset":
        return ae({}, ac);
      default:
        return a2;
    }
  }
  function ad() {
  }
  try {
    var am = window;
    am._sentryModuleMetadata = am._sentryModuleMetadata || {}, am._sentryModuleMetadata[new am.Error().stack] = Object.assign({}, am._sentryModuleMetadata[new am.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  function au({ className: a2 }) {
    return (0, i.jsxs)("svg", { className: a2, width: "18", height: "18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, i.jsx)("rect", { x: "1.25", y: "1.25", width: "15.5", height: "15.5", rx: "4", fill: "currentColor" }), (0, i.jsx)("path", { d: "M5.872 8.226 5.36 9.588c-.456 1.212-.685 1.818-.577 2.303.095.424.35.794.715 1.032.415.272 1.063.272 2.357.272h2.72c.704 0 1.056 0 1.3-.077a1.667 1.667 0 0 0 1.15-1.813c-.034-.254-.184-.573-.484-1.21l-.19-.403c-.069-.146-.103-.218-.127-.258a.833.833 0 0 0-1.47.094c-.019.042-.044.119-.093.272-.057.176-.085.263-.105.307a.833.833 0 0 1-1.506.021 4.001 4.001 0 0 1-.114-.303L8.377 8.25C8 7.19 7.813 6.66 7.532 6.508a.833.833 0 0 0-.781-.007c-.284.147-.482.673-.879 1.725Z", fill: "#fff" }), (0, i.jsx)("ellipse", { cx: "11.5", cy: "5.652", rx: "1.25", ry: "1.257", fill: "#fff" })] });
  }
  var av = a.i(397441), ax = a.i(551360);
  try {
    var af = window;
    af._sentryModuleMetadata = af._sentryModuleMetadata || {}, af._sentryModuleMetadata[new af.Error().stack] = Object.assign({}, af._sentryModuleMetadata[new af.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  function ag({ className: a2, isError: t2, multiple: e2, accept: n2, placeholder: o2, ref: l2, ...c2 }) {
    let { value: r2, onChange: s2, ...d2 } = c2, { getRootProps: m2, getInputProps: u2, isDragActive: v2 } = ar({ accept: n2, multiple: e2, onDrop: s2 }), x2 = Object.values(n2).flat();
    return (0, i.jsxs)("div", { className: a2, children: [(0, i.jsxs)("div", { className: (0, ax.cn)("group block w-full rounded-[10px] p-[10px_13px] outline-hidden transition-all duration-300 ease-out", "flex h-28 flex-col items-center justify-center gap-y-2 text-secondary-foreground", !t2 && ["border border-strong-stroke", "hover:bg-muted-strong-background/20", "focus:border-blue-500 focus:bg-blue-500/10 focus:ring-[3px] focus:ring-blue-300"], t2 && ["border border-red-500 bg-red-500/5", "hover:border-red-[#CE2E4B] hover:bg-red-500/10", "focus:border-[#CE2E4B] focus:ring-[3px] focus:ring-red-600/30"], { "border-blue-500 bg-blue-500/10 ring-[3px] ring-blue-300 hover:bg-blue-500/10": v2 }), ...m2(), children: [(0, i.jsx)("input", { ref: l2, className: "h-full w-full", ...u2(d2) }), (0, i.jsx)("p", { className: (0, ax.cn)("select-none text-sm text-tertiary-foreground", { "text-blue-500": v2 }, { "group-focus:text-blue-500": !t2 }), children: o2 || "Drag files here or click to select" }), (0, i.jsx)("div", { className: "flex select-none flex-wrap justify-center gap-x-1 gap-y-1 text-accent-foreground text-xs", children: x2.map((a3) => (0, i.jsx)("span", { className: "inline-block rounded-sm bg-black-600/10 px-1 py-px", children: a3 }, a3)) })] }), (0, i.jsxs)("div", { className: "mt-2.5 flex flex-col gap-y-2.5", children: [r2?.length === 0 && (0, i.jsx)("p", { className: "text-accent-foreground text-sm", children: "No files selected." }), r2?.map((a3, t3) => {
      var e3;
      let n3;
      return (0, i.jsxs)("div", { className: "flex items-center gap-x-2 rounded-xl bg-white-500 py-1 pr-0.5 pl-2.5 text-sm text-tertiary-foreground", children: [(0, i.jsx)(au, { className: "shrink-0 text-accent-foreground" }), (0, i.jsx)("p", { className: "flex-1 truncate", children: a3.name }), (0, i.jsx)("p", { className: "text-accent-foreground text-xs", children: (n3 = Math.floor(Math.log(e3 = a3.size) / Math.log(1024)), `${(e3 / 1024 ** n3).toFixed(2)} ${["B", "KB", "MB", "GB", "TB"][n3]}`) }), (0, i.jsx)(p.Button, { className: "ml-auto rounded-[10px] text-accent-foreground", type: "button", variant: "ghost", size: "smSquare", onClick: () => {
        s2 && r2 && s2(r2.filter((a4, i2) => i2 !== t3));
      }, children: (0, i.jsx)(av.Cross18, { className: "text-tertiary-foreground" }) })] }, a3.name);
    })] })] });
  }
  try {
    var ab = window;
    ab._sentryModuleMetadata = ab._sentryModuleMetadata || {}, ab._sentryModuleMetadata[new ab.Error().stack] = Object.assign({}, ab._sentryModuleMetadata[new ab.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  function ah({ name: a2, label: t2, description: e2, ...n2 }) {
    return (0, i.jsx)(l.FormField, { name: a2, label: t2, description: e2, children: (0, i.jsx)(ag, { ...n2 }) });
  }
  var ay = a.i(733332), aw = a.i(159293);
  try {
    var ak = window;
    ak._sentryModuleMetadata = ak._sentryModuleMetadata || {}, ak._sentryModuleMetadata[new ak.Error().stack] = Object.assign({}, ak._sentryModuleMetadata[new ak.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  try {
    var aj = window;
    aj._sentryModuleMetadata = aj._sentryModuleMetadata || {}, aj._sentryModuleMetadata[new aj.Error().stack] = Object.assign({}, aj._sentryModuleMetadata[new aj.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  function az() {
    return (0, i.jsxs)("svg", { className: "h-6 w-6 animate-spin", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [(0, i.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), (0, i.jsx)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] });
  }
  var aM = a.i(255368);
  try {
    var aE = window;
    aE._sentryModuleMetadata = aE._sentryModuleMetadata || {}, aE._sentryModuleMetadata[new aE.Error().stack] = Object.assign({}, aE._sentryModuleMetadata[new aE.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  let aD = n.z.object({ description: n.z.string().min(1, { message: "Required" }), email: n.z.string().min(1, { message: "Required" }).email(), files: n.z.array(n.z.instanceof(File)).refine((a2) => 4194304 >= a2.reduce((a3, i2) => a3 + i2.size, 0), { message: "Total file size must not exceed 4MB" }), replicationSteps: n.z.string().min(1, { message: "Required" }), summary: n.z.string().min(1, { message: "Required" }) });
  function a_({ submissionError: a2, onSubmit: t2 }) {
    let n2 = (0, e.useCallback)((a3) => {
      "function" != typeof a3?.scrollIntoView || ((a4) => {
        if (!a4) return false;
        let i2 = a4.getBoundingClientRect();
        return i2.top >= 0 && i2.left >= 0 && i2.bottom <= (window.innerHeight || document.documentElement.clientHeight) && i2.right <= (window.innerWidth || document.documentElement.clientWidth);
      })(a3) || a3.scrollIntoView();
    }, []);
    return (0, i.jsx)(o.Form, { schema: aD, defaultValues: { description: "", email: "", files: [], replicationSteps: "", summary: "" }, onSubmit: t2, mode: "onChange", toolname: "report_vulnerability", tooldescription: "Report a security vulnerability in Attio by providing a summary, description, replication steps, and optional supporting files", children: ({ isSubmitting: t3 }) => (0, i.jsxs)(i.Fragment, { children: [!t3 && a2 && (0, i.jsx)("p", { ref: n2, className: "mb-6 text-red-600 text-sm", children: a2 }), (0, i.jsxs)("div", { className: "space-y-[17px]", children: [(0, i.jsx)(ay.FormTextField, { label: "Email address*", name: "email", placeholder: "e.g. nick@example.com" }), (0, i.jsx)(ay.FormTextField, { label: "Vulnerability summary*", name: "summary", placeholder: "e.g. XSS on /careers page" }), (0, i.jsx)(ay.FormTextField, { label: "Vulnerability description*", name: "description", placeholder: "e.g. Reflected XSS is possible through malicious input." }), (0, i.jsx)(aw.FormTextareaField, { label: "Replication steps*", name: "replicationSteps", placeholder: "e.g. Navigate to /careers and enter the attached text." }), (0, i.jsx)(ah, { label: "Supporting files (Max. 4MB)", description: "Upload files over 4MB to a file-sharing service and paste the link into the replication steps.", placeholder: "Drag files here or click to select", name: "files", multiple: true, accept: { "application/csv": [".csv"], "application/json": [".json"], "application/pdf": [".pdf"], "image/*": [".png", ".jpg", ".jpeg"], "text/plain": [".txt"] } })] }), (0, i.jsx)(p.Button, { className: "mt-10 w-full", size: "lg", type: "submit", children: t3 ? (0, i.jsx)(az, {}) : "Submit" }), (0, i.jsx)(aM.CaptchaAttribution, { className: "mt-4" })] }) });
  }
  try {
    var aO = window;
    aO._sentryModuleMetadata = aO._sentryModuleMetadata || {}, aO._sentryModuleMetadata[new aO.Error().stack] = Object.assign({}, aO._sentryModuleMetadata[new aO.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  function aF() {
    return (0, i.jsxs)("svg", { width: "178", height: "100", viewBox: "0 0 178 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, i.jsx)("path", { d: "M125.118 2.57294L116.881 4.03903C115.999 4.19433 115.185 4.62298 114.551 5.25663L79.2968 40.5111L64.2818 25.0178C63.2692 23.9741 61.8031 23.4958 60.3681 23.7505L52.1741 25.2042C51.292 25.3595 50.4782 25.7881 49.8445 26.4218L36.9479 39.3246C35.2395 41.033 35.2395 43.8098 36.9479 45.5244L55.6157 64.1922L70.9724 79.5489C71.985 80.5615 73.4262 81.015 74.8364 80.7665L83.0739 79.3004C83.956 79.1451 84.7698 78.7165 85.4034 78.0828L141.239 22.2471C142.948 20.5388 142.948 17.7619 141.239 16.0473L128.976 3.78433C127.964 2.77173 126.522 2.31823 125.112 2.56672L125.118 2.57294Z", fill: "#FBFBFB", stroke: "#6F7988", strokeWidth: "1.66667", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M51.118 25.7384L72.5938 47.2141L79.2968 40.5049", stroke: "#6F7988", strokeWidth: "1.66667", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M113.88 5.92754L115.533 4.27509L132.505 21.2532L73.0472 80.7106", stroke: "#6F7988", strokeWidth: "0.833333", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M142.978 19.3895L132.505 21.2532", stroke: "#6F7988", strokeWidth: "0.833333", strokeLinejoin: "round" })] });
  }
  try {
    var aA = window;
    aA._sentryModuleMetadata = aA._sentryModuleMetadata || {}, aA._sentryModuleMetadata[new aA.Error().stack] = Object.assign({}, aA._sentryModuleMetadata[new aA.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  function aC({ trackingId: a2 }) {
    let [t2, n2] = (0, e.useState)(false);
    (0, e.useEffect)(() => {
      if (!t2) return;
      let a3 = setTimeout(() => {
        n2(false);
      }, 3e3);
      return () => {
        clearTimeout(a3);
      };
    }, [t2]);
    let o2 = (0, e.useCallback)(() => {
      navigator.clipboard.writeText(a2), n2(true);
    }, [a2]);
    return (0, i.jsxs)("div", { className: "flex flex-col items-center lg:px-4", children: [(0, i.jsx)(aF, {}), (0, i.jsx)("h2", { className: "text-center font-semibold text-2xl", children: "We\u2019ve received your submission." }), (0, i.jsx)("p", { className: "mt-4 max-w-sm text-center", children: "Please save your Report ID if you wish to reference your submission in the future:" }), (0, i.jsx)(p.Button, { className: "mt-8 w-full", size: "md", variant: "outline", onClick: o2, children: (0, i.jsxs)("span", { className: "inline-grid overflow-y-hidden", children: [(0, i.jsx)("span", { className: (0, ax.cn)("col-start-1 row-start-1 opacity-0 transition-opacity duration-300 ease-in-out", { "opacity-100": !t2 }), children: a2 }), (0, i.jsx)("span", { className: (0, ax.cn)("col-start-1 row-start-1 opacity-0 transition-opacity duration-300 ease-in-out", { "opacity-100": t2 }), children: "Copied" })] }) })] });
  }
  var aS = a.i(542958), aP = a.i(522326);
  try {
    var aq = window;
    aq._sentryModuleMetadata = aq._sentryModuleMetadata || {}, aq._sentryModuleMetadata[new aq.Error().stack] = Object.assign({}, aq._sentryModuleMetadata[new aq.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (a2) {
  }
  a.s(["FiftyFormDisclosureClient", 0, function() {
    let [a2, n2] = (0, e.useState)({ status: "initial" }), p2 = (0, e.useCallback)(async (a3) => {
      try {
        let i2 = await (0, aS.getCaptchaHeaders)("vulnerability_disclosure"), t2 = new FormData();
        t2.append("email", a3.email), t2.append("summary", a3.summary), t2.append("description", a3.description), t2.append("replicationSteps", a3.replicationSteps), a3.files.forEach((a4) => {
          t2.append("files", a4);
        });
        let e2 = await fetch("/api/forms/vulnerability-disclosure", { body: t2, headers: i2, method: "POST" }), p3 = await e2.json();
        if ("success" === p3.status) return n2({ status: "success", trackingId: p3.trackingId });
        if ("error" === p3.status) return n2({ errorCode: p3.errorCode, status: "failure" });
        return n2({ errorCode: aP.FORM_ERROR_CODES.UNKNOWN_ERROR, status: "failure" });
      } catch (i2) {
        return (0, t.captureException)(i2, { extra: { email: a3.email, form: "vulnerability-disclosure" } }), n2({ errorCode: aP.FORM_ERROR_CODES.UNKNOWN_ERROR, status: "failure" });
      }
    }, []);
    return (0, i.jsxs)(i.Fragment, { children: [("initial" === a2.status || "failure" === a2.status) && (0, i.jsx)(a_, { submissionError: "failure" === a2.status ? (0, aP.getFormErrorMessage)(a2.errorCode, "security@attio.com") : void 0, onSubmit: p2 }), "success" === a2.status && (0, i.jsx)(aC, { trackingId: a2.trackingId })] });
  }], 639823);
}, 187369, function(a) {
  a.n(a.i(639823));
}]);
