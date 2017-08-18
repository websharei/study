//				(c) Ger Versluis 2000 version 4.0, 14 August 2001
//				You may remove all comments for faster loading

	var NoOffFirstLineMenus=5; // 초기 첫메뉴의 수를 지정합니다.
	var LowBgColor='#0099FF'; // 메뉴의 기본배경색을 지정합니다.
	var HighBgColor='lightblue'; // 마우스 롤오버했을시의 배경색을 지정합니다.
	var FontLowColor='white'; // 메뉴의 기본 폰트색상을 지정합니다.
	var FontHighColor='blue'; // 마우스 롤오버했을시의 메뉴의 폰트색상을 지정합니다.
	var BorderColor='#000000'; // 보더 색상을 지정합니다.
	var BorderWidth=1; // 보더두께를 지정합니다.
	var BorderBtwnElmnts=0;	// 메뉴의 사이공간을 지정합니다.
	var FontFamily="굴림, 돋움"	// 글꼴을 지정합니다.
	var FontSize=9;	// 폰트크기를 지정합니다.
	var FontBold=1;	// 폰트의 볼드값을 지정합니다.
	var FontItalic=0; // 이탤릭체를 사용할경우 값을 1로 지정합니다.
	var MenuTextCentered='center';	// 메뉴의 텍스트 정렬을 지정합니다.
	var MenuCentered='center';	// 메뉴자체의 정렬을 지정합니다.
	var MenuVerticalCentered='middle';	// 메뉴의 상하정렬을 지정합니다.
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=0;				// Menu offset x coordinate
	var StartLeft=0;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=0;			// First level items layout horizontal 1 or 0
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0


// 이곳부터 메뉴를 수정 및 추가하는 부분입니다.
// 형식은 메뉴명, 파일 및 URL, 해당 메뉴에서의 서브메뉴 개수, 높이, 너비 순으로 지정합니다.

Menu1=new Array("Example 1","http://rapid00.coco.st",1,20,180);
	Menu1_1=new Array("Example 1.1","http://empas.com",0,20,120);
Menu2=new Array("Example 2","file.htm",2);
	Menu2_1=new Array("Example 2.1","file.htm",3,20,190);	
		Menu2_1_1=new Array("Example 2.1.1","http://simmani.com",1,20,200);
			Menu2_1_1_1=new Array("<img src='busts.jpg'>","http://lycos.co.kr",0,128,128);
		Menu2_1_2=new Array("Example 2.1.2","http://naver.com",0);
		Menu2_1_3=new Array("Example 2.1.3","file.htm",0);
	Menu2_2=new Array("Example 2.2","file.htm",8);
		Menu2_2_1=new Array("Example 2.2.1","http://yupzip.com",0,20,200);
		Menu2_2_2=new Array("Example 2.2.2","file.htm",0);
		Menu2_2_3=new Array("Example 2.2.3","http://rapid00.coco.st",0);
		Menu2_2_4=new Array("Example 2.2.4","file.htm",0);
		Menu2_2_5=new Array("Example 2.2.5","file.htm",1);
			Menu2_2_5_1=new Array("Example 2.2.5.1","http://imbc.com",1,32,150);
				Menu2_2_5_1_1=new Array("Example 2.2.5.1.1","file.htm",1,20,90);
					Menu2_2_5_1_1_1=new Array("Example 2.2.5.1.1.1","file.htm",0,22,400);
		Menu2_2_6=new Array("Example 2.2.6","http://rapid00.coco.st",0);
		Menu2_2_7=new Array("Example 2.2.7","http://rapid00.coco.st",0);
		Menu2_2_8=new Array("Example 2.2.8","http://rapid00.coco.st",0);
Menu3=new Array("Example 3","file.htm",0);
Menu4=new Array("새창으로 열기","javascript:NewWin=window.open('file.htm','NWin');window['NewWin'].focus()",0);
Menu5=new Array("현 페이지로열기","javascript:top.location.href='file.htm'",2);
	Menu5_1=new Array('Example 5.1 ','file.htm',0,20,180);
	Menu5_2=new Array('Example 5.2 ','file.htm',0);
