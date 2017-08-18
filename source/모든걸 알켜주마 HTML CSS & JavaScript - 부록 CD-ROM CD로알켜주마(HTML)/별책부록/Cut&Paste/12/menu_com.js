/*********************************************************************************************************************************************
*	(c) Ger Versluis 2000 version 4.1, 18 August 2001						*
*	You may use this script on non commercial sites.						*
*	For info write to menus@burmees.nl							*
*	Version 2.0 Added further error checking. Some minor bug fixes.					*
*	Version 2.5 Improved Error checking. Added Border between elements 1/0				*
*	Version 3.0 added support for DOM							*
*	Version 3.1 added relative positioning							*
*		 added MenuTextCentered='left' || 'center' || 'right'					*
*		 added HideTop to allow first level items to ramain visible in frame setup			*
*	Version 4.0 Improved positioning and menu wrap						*
*		 added MenuWrap to disable menu wrap						*
*	  	 added RightToLeft for unfold orientation						*
*	Version 4.1 Allows different dimensions in one group of elements					*
**********************************************************************************************************************************************/
	
	var AgntUsr=navigator.userAgent.toLowerCase();
	var DomYes=(document.getElementById)?1:0;
	var NavYes=(AgntUsr.indexOf('mozilla')!=-1&&AgntUsr.indexOf('compatible')==-1)?1:0;
	var ExpYes=(AgntUsr.indexOf('msie')!=-1)?1:0;
	var Opr5=(AgntUsr.indexOf('opera 5')!=-1||AgntUsr.indexOf('opera/5')!=-1)?1:0;
	var DomNav=(DomYes&&NavYes)?1:0;
 	var DomExp=(DomYes&&ExpYes)?1:0;
	var Nav4=(NavYes&&!DomYes&&document.layers)?1:0;
	var Exp4=(ExpYes&&!DomYes&&document.all)?1:0;
	var PosStrt=((NavYes||ExpYes)&&!Opr5)?1:0;

	var FrstLoc,ScLoc,DcLoc;
	var ScWinWdth,ScWinHght,FrstWinWdth,FrstWinHght;
	var ScLdAgainWin;
	var FirstColPos,SecColPos,DocColPos;
	var RcrsLvl=0;
	var ShwFlg=0,FrstCreat=1,Loadd=0,Creatd=0,IniFlg,AcrssFrms=1;
	var FrstCntnr=null,CurrntOvr=null,CloseTmr=null;
	var CntrTxt,TxtClose,ImgStr;
	var Ztop=100;
	var M_StrtTp=StartTop,M_StrtLft=StartLeft;
	var LftXtra=(DomNav)?LeftPaddng:0;
	var TpXtra=(DomNav)?TopPaddng:0;
	var M_Hide=(Nav4)?'hide':'hidden';
	var M_Show=(Nav4)?'show':'visible';
	var Par=(parent.frames[0])?parent:window;
	var Doc=Par.document;
	var Bod=Doc.body;

	if(typeof(TargetLoc)=='undefined') var TargetLoc='';
	if(typeof(HideTop)=='undefined') var HideTop=0;
	if(typeof(MenuWrap)=='undefined') var MenuWrap=1;
	if(typeof(RightToLeft)=='undefined') var RightToLeft=0;

	MenuTextCentered=(MenuTextCentered==1||MenuTextCentered=='center')?'center':(MenuTextCentered==0||MenuTextCentered!='right')?'left':'right';

	var Trigger=(parent.frames[0]&&FirstLineFrame==SecLineFrame)?(NavYes)?parent.frames[FirstLineFrame]:parent.frames[FirstLineFrame].document.body:(NavYes)?Par:Bod;
	WbMstrAlrts=["No such frame: ","Item not defined: ","Item needs height: ","Item needs width: ","Item Oke ","Menu tree oke"];
	if(DomNav&&!Opr5)Trigger.addEventListener('load',Go,false);
	else Trigger.onload=Go;
	Trigger.onresize=(Nav4)?ReDoWhole:RePos;

function CnclSlct(){return false}

function RePos(){
	var FrstCntnrStyle=(!Nav4)?FrstCntnr.style:FrstCntnr;
	FrstWinWdth=(ExpYes)?FrstLoc.document.body.clientWidth:FrstLoc.innerWidth;
	FrstWinHght=(ExpYes)?FrstLoc.document.body.clientHeight:FrstLoc.innerHeight;
	ScWinWdth=(ExpYes)?ScLoc.document.body.clientWidth:ScLoc.innerWidth;
	ScWinHght=(ExpYes)?ScLoc.document.body.clientHeight:ScLoc.innerHeight;
	if(TargetLoc)ClcTrgt();
	if(MenuCentered)ClcLft();
	if(MenuVerticalCentered)ClcTp();
	PosMenu(FrstCntnr,StartTop,StartLeft)}

function UnLoaded(){
	if(typeof(CloseTmr)!='undefined'&&CloseTmr)clearTimeout(CloseTmr);
	Loadd=0; Creatd=0;
	if(HideTop){
	var FCStyle=(Nav4)?FrstCntnr:FrstCntnr.style;
	FCStyle.visibility=M_Hide}}

function ReDoWhole(){
	Doc.location.reload()}

function Check(WMnu,NoOf){
	var i,Hg,Wd,La,Li,Nof,array,ArrayLoc;
	ArrayLoc=(parent.frames[0])?parent.frames[FirstLineFrame]:self;
	for(i=0;i<NoOf;i++){
		array=WMnu+eval(i+1);
		if(!ArrayLoc[array]){WbMstrAlrt(1,array); return false}
		La=ArrayLoc[array][0]; Li=ArrayLoc[array][1]; Nof=ArrayLoc[array][2];
		if(i==0){	if(!ArrayLoc[array][3]){WbMstrAlrt(2,array); return false}
			if(!ArrayLoc[array][4]){WbMstrAlrt(3,array); return false}}
			Hg=ArrayLoc[array][3]; Wd=ArrayLoc[array][4]
		if(!WbMstrAlrt(4,'\n\n'+array+'\nwidth: '+Wd+'\nheight: '+Hg+'\nLabel: '+La+'\nLink: '+Li+'\nNo of sub items: '+Nof)){WebMasterCheck=0; return true}
		if(ArrayLoc[array][2])if(!Check(array+'_',ArrayLoc[array][2])) return false}
	return true}	

function WbMstrAlrt(No,Xtra){
	if(WebMasterCheck)return confirm(WbMstrAlrts[No]+Xtra+'   ')}

function Go(){
	if(Loadd||!PosStrt)return;
	Creatd=0; Loadd=1;
	status='Building menu';
	if(FrstCreat){
		if(FirstLineFrame =="" || !parent.frames[FirstLineFrame]){WbMstrAlrt(0,FirstLineFrame); FirstLineFrame=SecLineFrame}
		if(FirstLineFrame =="" || !parent.frames[FirstLineFrame]){WbMstrAlrt(0,SecLineFrame); FirstLineFrame=SecLineFrame=DocTargetFrame}
		if(FirstLineFrame =="" || !parent.frames[FirstLineFrame]){WbMstrAlrt(0,DocTargetFrame); FirstLineFrame=SecLineFrame=DocTargetFrame=(parent.frames[0])?parent.frames[0].name:''}
		if(SecLineFrame =="" || !parent.frames[SecLineFrame])SecLineFrame=DocTargetFrame;
		if(SecLineFrame =="" || !parent.frames[SecLineFrame])SecLineFrame=DocTargetFrame=FirstLineFrame;
		if(DocTargetFrame =="" || !parent.frames[DocTargetFrame])DocTargetFrame=SecLineFrame;
		if(WebMasterCheck){if(!Check('Menu',NoOffFirstLineMenus))return;else WbMstrAlrt(5,'')}
		FrstLoc=(FirstLineFrame)?parent.frames[FirstLineFrame]:window;
		ScLoc=(SecLineFrame)?parent.frames[SecLineFrame]:window;
		DcLoc=(DocTargetFrame)?parent.frames[DocTargetFrame]:window;
		if (FrstLoc==ScLoc) AcrssFrms=0;
		if (AcrssFrms)FirstLineHorizontal=(MenuFramesVertical)?0:1;
		FrstWinWdth=(ExpYes)?FrstLoc.document.body.clientWidth:FrstLoc.innerWidth;
		FrstWinHght=(ExpYes)?FrstLoc.document.body.clientHeight:FrstLoc.innerHeight;
		ScWinWdth=(ExpYes)?ScLoc.document.body.clientWidth:ScLoc.innerWidth;
		ScWinHght=(ExpYes)?ScLoc.document.body.clientHeight:ScLoc.innerHeight;
		if(!DomYes){CntrTxt=(MenuTextCentered)?(NavYes)?"<div align='"+MenuTextCentered+"'>":"align='"+MenuTextCentered+"'":"";
			if(NavYes)TxtClose="</font>"+(MenuTextCentered)?"</div>":""}}
	FirstColPos=(Nav4)?FrstLoc.document:FrstLoc.document.body;
	SecColPos=(Nav4)?ScLoc.document:ScLoc.document.body;
	DocColPos=(Nav4)?DcLoc.document:ScLoc.document.body;
	if (TakeOverBgColor)FirstColPos.bgColor=(AcrssFrms)?SecColPos.bgColor:DocColPos.bgColor;
	if(FrstCreat){FrstCntnr=CreateMenuStructure('Menu',NoOffFirstLineMenus);FrstCreat=0}
	else CreateMenuStructureAgain('Menu',NoOffFirstLineMenus);
		if(TargetLoc)ClcTrgt();
		if(MenuCentered) ClcLft();
		if(MenuVerticalCentered) ClcTp();
	PosMenu(FrstCntnr,StartTop,StartLeft);
	IniFlg=1;	Initiate(); IniFlg=0; Creatd=1; 
	ScLdAgainWin=(ExpYes)?ScLoc.document.body:ScLoc;
	ScLdAgainWin.onunload=UnLoaded;
	if(ExpYes){ScLoc.document.body.onselectstart=CnclSlct;FrstLoc.document.body.onselectstart=CnclSlct}
	status='Menu ready for use'}

function ClcTrgt(){
	StartTop=M_StrtTp; StartLeft=M_StrtLft;
	StartTop+=(Nav4)?FrstLoc.document.layers[TargetLoc].pageY:(DomYes)?FrstLoc.document.getElementById(TargetLoc).offsetTop:FrstLoc.document.all[TargetLoc].offsetTop;
	StartLeft+=(Nav4)?FrstLoc.document.layers[TargetLoc].pageX:(DomYes)?FrstLoc.document.getElementById(TargetLoc).offsetLeft:FrstLoc.document.all[TargetLoc].offsetLeft}

function ClcLft(){
	if(MenuCentered!='left'){
		var Size=FrstWinWdth-((!Nav4)?parseInt(FrstCntnr.style.width):FrstCntnr.clip.width);
		StartLeft=M_StrtLft;
		StartLeft+=(MenuCentered=='right')?Size:Size/2}}

function ClcTp(){
	if(MenuVerticalCentered!='top'){	
		var Size=FrstWinHght-((!Nav4)?parseInt(FrstCntnr.style.height):FrstCntnr.clip.height);
		StartTop=M_StrtTp;
		StartTop+=(MenuVerticalCentered=='bottom')?Size:Size/2}}

function PosMenu(CntnrPntr,Tp,Lt){
	var Topi,Lefti,Hori;
	var Cntnr=CntnrPntr;
	var Mmbr=Cntnr.FrstMbr;
	var CntnrStyle=(!Nav4)?Cntnr.style:Cntnr;
	var MmbrStyle=(!Nav4)?Mmbr.style:Mmbr;
	var PadL=(Mmbr.value.indexOf('<')==-1)?LftXtra:0;
	var PadT=(Mmbr.value.indexOf('<')==-1)?TpXtra:0;
	var MmbrWt=(!Nav4)?parseInt(MmbrStyle.width)+PadL:MmbrStyle.clip.width;
	var MmbrHt=(!Nav4)?parseInt(MmbrStyle.height)+PadT:MmbrStyle.clip.height;
	var CntnrWt=(!Nav4)?parseInt(CntnrStyle.width):CntnrStyle.clip.width;
	var CntnrHt=(!Nav4)?parseInt(CntnrStyle.height):CntnrStyle.clip.height;
	var SubTp,SubLt;
	RcrsLvl++;
	if (RcrsLvl==1 && AcrssFrms)(!MenuFramesVertical)?Tp=FrstWinHght-CntnrHt+((Nav4)?4:0):Lt=(RightToLeft)?0:FrstWinWdth-CntnrWt+((Nav4)?4:0);
	if (RcrsLvl==2 && AcrssFrms)(!MenuFramesVertical)?Tp=0:Lt=(RightToLeft)?ScWinWdth-CntnrWt:0;
	if (RcrsLvl==2 && AcrssFrms){Tp+=VerCorrect;Lt+=HorCorrect}
	CntnrStyle.top=Cntnr.OrgTop=Tp;
	CntnrStyle.left=Cntnr.OrgLeft=Lt;
	if (RcrsLvl==1 && FirstLineHorizontal){Hori=1; Lefti=CntnrWt-MmbrWt-2*BorderWidth;Topi=0}
	else{Hori=Lefti=0; Topi=CntnrHt-MmbrHt-2*BorderWidth}
	while(Mmbr!=null){
		PadL=(Mmbr.value.indexOf('<')==-1)?LftXtra:0;
		PadT=(Mmbr.value.indexOf('<')==-1)?TpXtra:0;
		MmbrStyle.left=Lefti+BorderWidth;
		MmbrStyle.top=Topi+BorderWidth;
		if(Nav4)Mmbr.CmdLyr.moveTo(Lefti+BorderWidth,Topi+BorderWidth);
		if(Mmbr.ChildCntnr){
			if(RightToLeft)ChldCntnrWdth=(Nav4)?Mmbr.ChildCntnr.clip.width:parseInt(Mmbr.ChildCntnr.style.width);
			if(Hori){	SubTp=Topi+MmbrHt+BorderWidth; 
				SubLt=(RightToLeft)?Lefti+MmbrWt-ChldCntnrWdth:Lefti}
			else{	SubLt=(RightToLeft)?Lefti-ChldCntnrWdth+ChildOverlap*MmbrWt+BorderWidth:Lefti+(1-ChildOverlap)*MmbrWt+BorderWidth; 
				SubTp=(RcrsLvl==1&&AcrssFrms)?Topi:Topi+ChildVerticalOverlap*MmbrHt}
			PosMenu(Mmbr.ChildCntnr,SubTp,SubLt)}
			Mmbr=Mmbr.PrvMbr;
		if(Mmbr){	MmbrStyle=(!Nav4)?Mmbr.style:Mmbr;
			MmbrWt=(!Nav4)?parseInt(MmbrStyle.width)+PadL:MmbrStyle.clip.width;
			MmbrHt=(!Nav4)?parseInt(MmbrStyle.height)+PadT:MmbrStyle.clip.height;
			(Hori)?Lefti-=(BorderBtwnElmnts)?(MmbrWt+BorderWidth):(MmbrWt):Topi-=(BorderBtwnElmnts)?(MmbrHt+BorderWidth):(MmbrHt)}}
	RcrsLvl--}

function Initiate(){
	if(IniFlg) Init(FrstCntnr)}

function Init(CntnrPntr){
	var Mmbr=CntnrPntr.FrstMbr;
	var MCStyle=(Nav4)?CntnrPntr:CntnrPntr.style;
	RcrsLvl++;
	MCStyle.visibility=(RcrsLvl==1)?M_Show:M_Hide;
	while(Mmbr!=null){
		if(Mmbr.ChildCntnr) Init(Mmbr.ChildCntnr);
		Mmbr=Mmbr.PrvMbr}
	RcrsLvl--}

function ClearAllChilds(Pntr,ChldPntr){
	var CPCCStyle;
	while (Pntr){
		if(Pntr.ChildCntnr){
			CPCCStyle=(Nav4)?Pntr.ChildCntnr:Pntr.ChildCntnr.style;
			if(Pntr.ChildCntnr!=ChldPntr)CPCCStyle.visibility=M_Hide;
			ClearAllChilds(Pntr.ChildCntnr.FrstMbr,ChldPntr)}
		Pntr=Pntr.PrvMbr}}	

function GoTo(){
	if(this.LinkTxt){
		status=''; 
		if(Nav4){if(this.LowLyr.value.indexOf('<img')==-1){if(this.LowLyr.LoBck)this.LowLyr.bgColor=this.LowLyr.LoBck;this.LowLyr.document.write(this.LowLyr.value);this.LowLyr.document.close()}}
		else{if(this.LoBck)this.style.backgroundColor=this.LoBck;this.style.color=this.LowFontColor}
		(this.LinkTxt.indexOf('javascript:')!=-1)?eval(this.LinkTxt):DcLoc.location.href=this.LinkTxt}}

function OpenMenu(){
	if(!Loadd||!Creatd) return;
	var TpScrlld=(ExpYes)?ScLoc.document.body.scrollTop:ScLoc.pageYOffset;
	var LScrlld=(ExpYes)?ScLoc.document.body.scrollLeft:ScLoc.pageXOffset;
	var ChildCont=(Nav4)?this.LowLyr.ChildCntnr:this.ChildCntnr;
	var ThisHt=(Nav4)?this.clip.height:parseInt(this.style.height);
	var ThisWt=(Nav4)?this.clip.width:parseInt(this.style.width);
	var ThisLft=(AcrssFrms&&this.Level==1&&!FirstLineHorizontal)?0:(Nav4)?this.Container.left:parseInt(this.Container.style.left);
	var ThisTp=(AcrssFrms&&this.Level==1&&FirstLineHorizontal)?0:(Nav4)?this.Container.top:parseInt(this.Container.style.top);
	CurrntOvr=this; IniFlg=0;
	if(ShwFlg){	ClearAllChilds(this.Container.FrstMbr,ChildCont);if(this.Level==1) ShwFlg=0}
	if(Nav4){if(this.LowLyr.value.indexOf('<img')==-1){if(this.LowLyr.HiBck)this.LowLyr.bgColor=this.LowLyr.HiBck;this.LowLyr.document.write(this.LowLyr.Ovalue);this.LowLyr.document.close()}}
	else{if(this.HiBck)this.style.backgroundColor=this.HiBck;this.style.color=this.HighFontColor}
	if(ChildCont!=null){
		var ChildContWidth=(Nav4)?this.LowLyr.ChildCntnr.clip.width:parseInt(this.ChildCntnr.style.width);
		var ChildContHeight=(Nav4)?this.LowLyr.ChildCntnr.clip.height:parseInt(this.ChildCntnr.style.height);
		var ChCntTL=(Nav4)?this.LowLyr.ChildCntnr:this.ChildCntnr.style;
		var SubLt=(AcrssFrms&&this.Level==1)?ChildCont.OrgLeft+ThisLft+LScrlld:ChildCont.OrgLeft+ThisLft;
		var SubTp=(AcrssFrms&&this.Level==1)?ChildCont.OrgTop+ThisTp+TpScrlld:ChildCont.OrgTop+ThisTp;
		if(MenuWrap){
			if(RightToLeft){if(SubLt<LScrlld)SubLt=(this.Level==1)?LScrlld:SubLt+(ChildContWidth+(1-2*ChildOverlap)*ThisWt);
				if(SubLt+ChildContWidth>ScWinWdth+LScrlld)SubLt=ScWinWdth+LScrlld-ChildContWidth}
			else{	if(SubLt+ChildContWidth>ScWinWdth+LScrlld)SubLt=(this.Level==1)?ScWinWdth+LScrlld-ChildContWidth:SubLt-(ChildContWidth+(1-2*ChildOverlap)*ThisWt);
				if(SubLt<LScrlld)SubLt=LScrlld}
			if(SubTp+ChildContHeight>TpScrlld+ScWinHght)SubTp=(this.Level==1)?SubTp=TpScrlld+ScWinHght-ChildContHeight:SubTp-ChildContHeight+(1-2*ChildVerticalOverlap)*ThisHt;
			if(SubTp<TpScrlld)SubTp=TpScrlld}
		ChCntTL.top=SubTp;ChCntTL.left=SubLt;ChCntTL.visibility=M_Show;ShwFlg=1}
	status=this.LinkTxt}	

function CloseMenu(){
	if(!Loadd||!Creatd) return;
	if(Nav4){if(this.LowLyr.value.indexOf('<img')==-1){if(this.LowLyr.LoBck)this.LowLyr.bgColor=this.LowLyr.LoBck;this.LowLyr.document.write(this.LowLyr.value);this.LowLyr.document.close()}}
	else{if(this.LoBck)this.style.backgroundColor=this.LoBck;this.style.color=this.LowFontColor}
	status='';
	if(this==CurrntOvr){IniFlg=1;if (CloseTmr) clearTimeout(CloseTmr);CloseTmr=setTimeout('Initiate(CurrntOvr)',DissapearDelay)}}

function CntnrSetUp(Wdth,Hght,NoOff){
	this.FrstMbr=null;
	this.OrgLeft=0;this.OrgTop=0;
	if(Nav4){	this.visibility='hide';
		if(BorderColor)this.bgColor=BorderColor;
		this.resizeTo(Wdth,Hght)}
	else{	this.Level=RcrsLvl;
		if(BorderColor)this.style.backgroundColor=BorderColor;
		this.style.width=Wdth;
		this.style.height=Hght;
		this.style.fontFamily=FontFamily;
		this.style.fontWeight=(FontBold)?'bold':'normal';
		this.style.fontStyle=(FontItalic)?'italic':'normal';
		this.style.fontSize=FontSize+'pt';
		this.style.zIndex=RcrsLvl+Ztop}}

function MbrSetUp(MmbrCntnr,PrMmbr,WhatMenu,Wdth,Hght){
	var Location=(RcrsLvl==1)?FrstLoc:ScLoc;
	var MemVal=eval(WhatMenu+'[0]');
	var t,T,L,W,H,S;
	this.value=MemVal;
	this.ChildCntnr=null;
	this.PrvMbr=PrMmbr;
	this.Level=RcrsLvl;
	this.LinkTxt=eval(WhatMenu+'[1]');
	this.Container=MmbrCntnr;
	this.style.cursor=(this.LinkTxt&&ExpYes)?'hand':'default';
	if(MemVal.indexOf('<')==-1){this.style.width=Wdth-LftXtra; this.style.height=Hght-TpXtra; this.style.paddingLeft=LeftPaddng; this.style.paddingTop=TopPaddng}
	else{this.style.width=Wdth; this.style.height=Hght}
	this.style.overflow='hidden'
	this.LoBck=LowBgColor;
	this.LowFontColor=FontLowColor;
	this.HiBck=(MemVal.indexOf('<img')==-1)?HighBgColor:LowBgColor;
	this.HighFontColor=(MemVal.indexOf('<img')==-1)?FontHighColor:FontLowColor; 
	this.style.color=this.LowFontColor;
	if(this.LoBck)this.style.backgroundColor=this.LoBck;
	if(MenuTextCentered)this.style.textAlign=MenuTextCentered;
	if(MemVal.indexOf('<')==-1&&DomYes){t=Location.document.createTextNode(MemVal);this.appendChild(t)}
	else this.innerHTML=MemVal;
	if(MemVal.indexOf('<img')==-1&&eval(WhatMenu+'[2]')){
		S=(RcrsLvl==1&&FirstLineHorizontal)?'tridown.gif':(RightToLeft)?'trileft.gif':'tri.gif';
		W=(RcrsLvl==1&&FirstLineHorizontal)?10:5;
		H=(RcrsLvl==1&&FirstLineHorizontal)?5:10;
		T=(RcrsLvl==1&&FirstLineHorizontal)?Hght-7:Hght/2-5;
		L=(RcrsLvl==1&&FirstLineHorizontal)?Wdth-12:Wdth-7;
		if(DomYes){t=Location.document.createElement('img'); this.appendChild(t); t.style.position='absolute'; t.src=S; t.style.width=W; t.style.height=H; t.style.top=T; t.style.left=L}
		else{MemVal+="<div style='position:absolute; top:"+T+"; left:"+L+"; width:"+W+"; height:"+H+";visibility:inherit'><img src='"+S+"'></div>"; this.innerHTML=MemVal}}
	if(ExpYes){this.onmouseover=OpenMenu; this.onmouseout=CloseMenu; this.onclick=GoTo}
	else{this.addEventListener('mouseover',OpenMenu,false); this.addEventListener('mouseout',CloseMenu,false); this.addEventListener('click',GoTo,false)}}

function NavMbrSetUp(MmbrCntnr,PrMmbr,WhatMenu,Wdth,Hght){
	this.value=eval(WhatMenu+'[0]');
	if(LeftPaddng&&this.value.indexOf('<')==-1&&MenuTextCentered=='left')this.value='&nbsp\;'+this.value;
	if(FontBold)this.value=this.value.bold();
	if(FontItalic)this.value=this.value.italics();
	this.Ovalue=this.value;
	this.value=this.value.fontcolor(FontLowColor);
	this.Ovalue=this.Ovalue.fontcolor(FontHighColor);
	this.value=CntrTxt+"<font face='"+FontFamily+"' point-size='"+FontSize+"' color='"+FontLowColor+"'>"+this.value+TxtClose;
	this.Ovalue=CntrTxt+"<font face='"+FontFamily+"' point-size='"+FontSize+"' color='"+FontHighColor+"'>"+this.Ovalue+TxtClose;
	this.LoBck=LowBgColor;
	this.HiBck=HighBgColor;
	this.visibility='inherit';
	this.ChildCntnr=null;
	this.PrvMbr=PrMmbr;
	if(LowBgColor)this.bgColor=LowBgColor;
	this.resizeTo(Wdth,Hght);
	this.document.write(this.value);
	this.document.close();
	this.CmdLyr=new Layer(Wdth,MmbrCntnr);
	this.CmdLyr.visibility='inherit';
	this.CmdLyr.Level=RcrsLvl;
	this.CmdLyr.LinkTxt=eval(WhatMenu+'[1]');
	this.CmdLyr.onmouseover=OpenMenu;
	this.CmdLyr.onmouseout=CloseMenu;
	this.CmdLyr.captureEvents(Event.MOUSEUP);
	this.CmdLyr.onmouseup=GoTo;
	this.CmdLyr.LowLyr=this;
	this.CmdLyr.Container=MmbrCntnr;
	this.CmdLyr.resizeTo(Wdth,Hght);
	if(this.value.indexOf('<img')==-1 &&eval(WhatMenu+'[2]')){
		this.CmdLyr.ImgLyr=new Layer(10,this.CmdLyr);
		this.CmdLyr.ImgLyr.visibility='inherit';
		this.CmdLyr.ImgLyr.top=(RcrsLvl==1&&FirstLineHorizontal)?Hght-7:Hght/2-5;
		this.CmdLyr.ImgLyr.left=(RcrsLvl==1&&FirstLineHorizontal)?Wdth-12:Wdth-7;
		this.CmdLyr.ImgLyr.width=(RcrsLvl==1&&FirstLineHorizontal)?10:5;
		this.CmdLyr.ImgLyr.height=(RcrsLvl==1&&FirstLineHorizontal)?5:10;
		ImgStr=(RcrsLvl==1&&FirstLineHorizontal)?"<img src='tridown.gif'>":(RightToLeft)?"<img src='trileft.gif'>":"<img src='tri.gif'>";
		this.CmdLyr.ImgLyr.document.write(ImgStr);
		this.CmdLyr.ImgLyr.document.close()}}

function CreateMenuStructure(MName,NumberOf){
	RcrsLvl++;
	var i,NoOffSubs,Mbr,Wdth=0,Hght=0;
	var PrvMmbr=null;
	var WMnu=MName+'1';
	var MenuWidth=eval(WMnu+'[4]');
	var MenuHeight=eval(WMnu+'[3]');
	var Location=(RcrsLvl==1)?FrstLoc:ScLoc;
	if (RcrsLvl==1&&FirstLineHorizontal){
		for(i=1;i<NumberOf+1;i++){WMnu=MName+eval(i);Wdth=(eval(WMnu+'[4]'))?Wdth+eval(WMnu+'[4]'):Wdth+MenuWidth}
		Wdth=(BorderBtwnElmnts)?Wdth+(NumberOf+1)*BorderWidth:Wdth+2*BorderWidth;Hght=MenuHeight+2*BorderWidth}
	else{	for(i=1;i<NumberOf+1;i++){WMnu=MName+eval(i);Hght=(eval(WMnu+'[3]'))?Hght+eval(WMnu+'[3]'):Hght+MenuHeight}
		Hght=(BorderBtwnElmnts)?Hght+(NumberOf+1)*BorderWidth:Hght+2*BorderWidth;Wdth=MenuWidth+2*BorderWidth}
	if(DomYes){
		var MmbrCntnr=Location.document.createElement("div");
		MmbrCntnr.style.position='absolute';
		MmbrCntnr.style.visibility='hidden';
		Location.document.body.appendChild(MmbrCntnr)}
	else	if(Nav4) var MmbrCntnr=new Layer(MenuWidth,Location)
		else{	WMnu+='c';
			Location.document.body.insertAdjacentHTML("AfterBegin","<div id='"+WMnu+"' style='visibility:hidden; position:absolute;'><\/div>"); 
			var MmbrCntnr=Location.document.all[WMnu]}
	MmbrCntnr.SetUp=CntnrSetUp;
	MmbrCntnr.SetUp(Wdth,Hght,NumberOf);
	if(Exp4){	MmbrCntnr.InnerString='';
		for(i=1;i<NumberOf+1;i++){
			WMnu=MName+eval(i);
			NoOffSubs=eval(WMnu+'[2]');
			MmbrCntnr.InnerString+="<div id='"+WMnu+"' style='position:absolute;'><\/div>"}
		MmbrCntnr.innerHTML=MmbrCntnr.InnerString}
	for(i=1;i<NumberOf+1;i++){
		WMnu=MName+eval(i);
		NoOffSubs=eval(WMnu+'[2]');
		if(DomYes){
			Mbr=Location.document.createElement("div");
			Mbr.style.position='absolute';
			Mbr.style.visibility='inherit';
			MmbrCntnr.appendChild(Mbr);
			Mbr.SetUp=MbrSetUp}
		else	if(Nav4){Mbr=new Layer(MenuWidth,MmbrCntnr);
			Mbr.SetUp=NavMbrSetUp}
		else{	Mbr=Location.document.all[WMnu];
			Mbr.SetUp=MbrSetUp}
		Wdth=(RcrsLvl==1&&FirstLineHorizontal)?(eval(WMnu+'[4]'))?eval(WMnu+'[4]'):MenuWidth:MenuWidth;
		Hght=(RcrsLvl==1&&FirstLineHorizontal)?MenuHeight:(eval(WMnu+'[3]'))?eval(WMnu+'[3]'):MenuHeight;
		Mbr.SetUp(MmbrCntnr,PrvMmbr,WMnu,Wdth,Hght);
		if(NoOffSubs) Mbr.ChildCntnr=CreateMenuStructure(WMnu+'_',NoOffSubs);
		PrvMmbr=Mbr}
	MmbrCntnr.FrstMbr=Mbr;
	RcrsLvl--;
	return(MmbrCntnr)}

function CreateMenuStructureAgain(MName,NumberOf){
	var i,WMnu,NoOffSubs;
	var PrvMmbr,Mbr=FrstCntnr.FrstMbr;
	RcrsLvl++;
	for(i=NumberOf;i>0;i--){
		WMnu=MName+eval(i);
		NoOffSubs=eval(WMnu+'[2]');
		PrvMmbr=Mbr;
		if(NoOffSubs)Mbr.ChildCntnr=CreateMenuStructure(WMnu+'_',NoOffSubs);
		Mbr=Mbr.PrvMbr}
	RcrsLvl--}
