//				(c) Ger Versluis 2000 version 4.0, 14 August 2001
//				You may remove all comments for faster loading

	var NoOffFirstLineMenus=5; // �ʱ� ù�޴��� ���� �����մϴ�.
	var LowBgColor='#0099FF'; // �޴��� �⺻������ �����մϴ�.
	var HighBgColor='lightblue'; // ���콺 �ѿ����������� ������ �����մϴ�.
	var FontLowColor='white'; // �޴��� �⺻ ��Ʈ������ �����մϴ�.
	var FontHighColor='blue'; // ���콺 �ѿ����������� �޴��� ��Ʈ������ �����մϴ�.
	var BorderColor='#000000'; // ���� ������ �����մϴ�.
	var BorderWidth=1; // �����β��� �����մϴ�.
	var BorderBtwnElmnts=0;	// �޴��� ���̰����� �����մϴ�.
	var FontFamily="����, ����"	// �۲��� �����մϴ�.
	var FontSize=9;	// ��Ʈũ�⸦ �����մϴ�.
	var FontBold=1;	// ��Ʈ�� ���尪�� �����մϴ�.
	var FontItalic=0; // ���Ÿ�ü�� ����Ұ�� ���� 1�� �����մϴ�.
	var MenuTextCentered='center';	// �޴��� �ؽ�Ʈ ������ �����մϴ�.
	var MenuCentered='center';	// �޴���ü�� ������ �����մϴ�.
	var MenuVerticalCentered='middle';	// �޴��� ���������� �����մϴ�.
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


// �̰����� �޴��� ���� �� �߰��ϴ� �κ��Դϴ�.
// ������ �޴���, ���� �� URL, �ش� �޴������� ����޴� ����, ����, �ʺ� ������ �����մϴ�.

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
Menu4=new Array("��â���� ����","javascript:NewWin=window.open('file.htm','NWin');window['NewWin'].focus()",0);
Menu5=new Array("�� �������ο���","javascript:top.location.href='file.htm'",2);
	Menu5_1=new Array('Example 5.1 ','file.htm',0,20,180);
	Menu5_2=new Array('Example 5.2 ','file.htm',0);
