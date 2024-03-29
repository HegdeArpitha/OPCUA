﻿//USEUNIT FDT_CONFIGURATION_PAGE
//USEUNIT FDTCONFIGURATION_PAGE_TC
//USEUNIT ObjectFiles

var propArray,propValues,level;

function GetRecognitionObject(parent,page,objectName)
{
    if(parent != null)
    {
        var objControl = null;
        var hasObj,objectData,tempObjectName;
        tempObjectName = objectName;
        for(i=1;i<10;i++)
        {
           // hasObj = GetObjectProperties(page,objectName)
           hasObj =GetObjectProperties_FromJSON(page,objectName)
            if(hasObj == true)
            {
                if(parent != null)
                {
                    objectData = parent.FindChild(propArray,propValues,level);
                    if(objectData.Exists == true)
                    {
                        return objectData;
                    }
                    tempObjectName = objectName+aqConvert["VarToStr"](i+1);
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }
        }
    }
    return null;
}

function OPCUA_OpenCE_OpenProject(strSTUProjName)
{
    //Step to launch control expert
    myprocess=TestedApps["ControlExpert"]["Run"]();
    //Code for Security Database migration tool
    //var sec_popup=Sys.FindChild(Array("Visible","WndCaption"),Array(true,"Security Database Migration Tool"),15)
    var sec_popup=GetSecurityWindowObj()
       var sec_btn=sec_popup.FindChild(Array("WndClass","WndCaption"),Array("Button","OK"),15)
       sec_btn["Click"]();
   
    ExplicitDelay(5000, "Wait until controlexpert popup is launched");
    //Step to open the project
  	bReturnVal = Open_Unity_Project_WithName(strSTUProjName)
}

function Open_Unity_Project_WithName(strSTUProjName)
{
    try
    {
        var openStatus;
//        functionality = Project["Variables"]("Functionality");
//        TestCaseName = Project["Variables"]("TestCaseName");
//        TestDescription = Project["Variables"]("TestDescription");
        Detail = expResult = "Open DTM project: "+strSTUProjName;
        openStatus = OpenProject(strSTUProjName);
        Detail = expResult = "Open DTM project: "+strSTUProjName;
        if(openStatus == true)
        {
            Status = "PASS";
            expResult = actualResult = "Project: "+strSTUProjName+" opened successfully";
            Log["Message"](actualResult);
            return true;
        }
        else
        {
            Status = "FAIL";
            actualResult = "Failed to open project"+strSTUProjName;
            Log["Error"](actualResult);
            return false;
        }
    }
    catch(ex)
    {
        Status = "FAIL";
        actualResult = ex["description"];
        Log["Error"](actualResult);
        InsertToReport(TestCaseName,TestDescription,Status,Detail,functionality,expResult,actualResult);
        return false;
    }
}

function OpenProject(strProjectName)
{
    var iCounter=0;
    SelectOpenMenu();
    Delay(3000,"Waiting for Project Open window")
    var strProjectName;
    if(strProjectName==null || strProjectName == undefined || strProjectName=="")
    {
        strProjectName = Project["Variables"]["TCTestRunner_ProjectName"];
    }
    var strProjectFilePath = aqFileSystem["GetCurrentFolder"]() + "\\Projects\\" + strProjectName+".stu";
    if(aqString["Find"](strProjectName,".")>0)
    {
     strProjectFilePath = aqFileSystem["GetCurrentFolder"]() + "\\Projects\\" + strProjectName; 
    }
    Detail = expResult = "Open Control Expert Pro project";
    Delay(3000,"Waiting for Project Open window")
    var objOpenWnd = GetOpenWindowObject();
    while(objOpenWnd == null && objOpenWnd["Exists"] == false)
    {
        ExplicitDelay(5000, "Wait until open popup is displayed");
        objOpenWnd = GetOpenWindowObject();
        if(iCounter == 10)
        {
            return false;
        }
        iCounter++;
    }
    if(objOpenWnd != null  && objOpenWnd["Exists"] != false)
    {
        Delay(5000,"Waiting to enter Project Name")
        objOpenWnd["Keys"](strProjectFilePath);
        var objOpenButton = GetOpenWindowOpenButtonObject();
        if(objOpenButton != null)
        {
            objOpenButton["Click"]();
        }
        var app_password=Aliases.ControlExpert.FindChild(Array("Visible","WndCaption"),Array(true,"Application password"),15)
        if(app_password["Exists"] == true)
        {
            var export_button=app_password.FindChild(Array("WndClass","Visible"),Array("Edit",true),15)
            export_button["SetText"]("Schneider0!");
            app_pass_button=app_password.FindChild(Array("WndCaption","Visible"),Array("OK",true),15)
            app_pass_button["Click"]();
        }
//        if(ImageRepository["DTMAuditTool"]["DTMAuditContinueBtn"]["Exists"]())
//        {
//          ImageRepository["DTMAuditTool"]["DTMAuditContinueBtn"]["Click"]();
//        }
//        var auditTool=Aliases["ControlExpert"].FindChild(Array("Visible","WndCaption"),Array(true,"Dtm Audit Tool"),15)
//        var con_btn=auditTool.FindChild(Array("Visible","WndCaption"),Array(true,"Dtm Audit Tool"),15)
//        con_btn["Click"]();
        var objConfirmWnd = GetSaveConfirmWndObject()
        if(objConfirmWnd != null)
        {
            var objYesButton = GetProcessWndYesButtonObject();
            if(objYesButton != null)
            {
                objYesButton["Click"]();
            }
        }
        ExplicitDelay(2000, "Wait until project is opened");
        processDialog = GetOpenWindowObject();
        if(processDialog != null)
        {
            ExplicitDelay(1000, "Wait until project is opened");
            processDialog = GetOpenWindowObject();
            var warning=Aliases["ControlExpert"].FindChild(["WndCaption","Visible"],["Warning",true],10);
            var OKbutton=Aliases["ControlExpert"].FindChild(Array("WndClass","Visible"),Array("Button",true),15)
            OKbutton["Click"]();
        }
        Log["Message"]("Project opened successfully");
        return true;
    }
    return false;
}

function TreeView_SelectItemName(TreeObject,ItemName)
{ 
  if (TreeObject.Exists) 
   { 
    TreeObject["OutlineItem"](ItemName).Click();
    //aqUtils["Delay"](1000, "Wait until item is selected");
    TreeObject["Keys"]("[Esc]");
    TreeObject["Keys"]("[Esc]");
    //aqUtils["Delay"](1000, "Wait until item is selected");
   }
  else
  {
    Log.Error("TreeObject does not exist.")
  }    
}

function TreeView_RightClickItem(tree,HostPC,Option1)
{ 
//  if (TreeObject.Exists==true) 
//  { 
     tree.ClickItemR(HostPC);
     tree.PopupMenu.Click(Option1);
//  }
//  else
//  {
//     Log.Error("TreeObject does not exist.")
//  }    
}

function HandleUnityConfirmDialogBox()
{
    ExplicitDelay(4000, "Wait until confirm popup is displayed");
    var curProcess = GetProcess();
    if(curProcess != null)
    {
        var objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*Unity*"], 10);
        objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
        for(var i=0;i<objUnExpWnds["length"];i++)
        {
            if(objUnExpWnds[i]["Exists"] == true)
            {
                objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
                if(objConfirmBtn == null)
                {
                    objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Ok_Button");
                }
                if(objConfirmBtn != null)
                {
                    objConfirmBtn["Click"]();
                    ExplicitDelay(5000, "Wait until Unity popup is handled");
                    Log["Message"]("Unity popup handled successfully");
                    return true;
                }
            }
        }
        
        objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*Delete*"], 10);
        objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
        for(var i=0;i<objUnExpWnds["length"];i++)
        {
            if(objUnExpWnds[i]["Exists"] == true)
            {
                objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
                if(objConfirmBtn == null)
                {
                    objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Ok_Button");
                }
                if(objConfirmBtn != null)
                {
                    objConfirmBtn["Click"]();
                    ExplicitDelay(5000, "Wait until Unity popup is handled");
                    Log["Message"]("Unity popup handled successfully");
                    return true;
                }
            }
        }
        
        objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*DTM*"], 10);
        objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
        for(var i=0;i<objUnExpWnds["length"];i++)
        {
            if(objUnExpWnds[i]["Exists"] == true)
            {
                objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
                if(objConfirmBtn == null)
                {
                    objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Ok_Button");
                }
                if(objConfirmBtn != null)
                {
                    objConfirmBtn["Click"]();
                    ExplicitDelay(5000, "Wait until Unity popup is handled");
                    Log["Message"]("Unity popup handled successfully");
                    return true;
                }
            }
        }
        
        objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*field*bus*discovery*"], 10);
        objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
        for(var i=0;i<objUnExpWnds["length"];i++)
        {
            if(objUnExpWnds[i]["Exists"] == true)
            {
                objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
                if(objConfirmBtn == null)
                {
                    objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Ok_Button");
                }
                if(objConfirmBtn != null)
                {
                    objConfirmBtn["Click"]();
                    ExplicitDelay(5000, "Wait until Unity popup is handled");
                    Log["Message"]("Unity popup handled successfully");
                    return true;
                }
            }
        }
    }
}

function SelectDTMContextMenu(DTMName, strMenuItem1, strMenuItem2, strMenuItem3, strMenuItem4)
{
    //DTMName = GetFullNodeTextInTreeview(DTMName);
    SelectDTMInDtmBrowser_RightClick(DTMName);
    Delay(1500, "Wait until menu is displayed");
    
    HandleUnityConfirmDialogBox();
    
    var objContextMenu = GetDTMBrowserContextMenu();
    if(objContextMenu == null)
    { 
        SelectDTMInDtmBrowser_RightClick(DTMName);
    }
    if(objContextMenu != null)
    { 
        if(objContextMenu["Exists"] == true)
        { 
            //objMenu = objContextMenu["FindChild"]("Name","[\"TextObject\"](\""+strMenuItem1+"\")",10);
            objMenu = objContextMenu["FindChild"](["ObjectType", "Caption", "VisibleOnScreen"],["MenuItem", strMenuItem1+"*", true],10);
            if(objMenu["Exists"] == true && objMenu["Enabled"] == true)
            {
                objMenu["Click"]();//(10,10);
                if(strMenuItem2 != "")
                {
                    Delay(2000, "Wait until sub menu is displayed");
                    objContextMenu = GetProcess();
                    //objMenu = objContextMenu["FindChild"]("Name","[\"TextObject\"](\""+strMenuItem2+"\")",10);
                    objMenu = objContextMenu["FindChild"](["ObjectType", "Caption"],["MenuItem", strMenuItem2+"*"],10);
                    if(objMenu["Exists"] == true && objMenu["Enabled"] == true)
                    {
                        objMenu["Click"]();
                        if(strMenuItem3 != "")
                        {
                            Delay(2000, "Wait until sub menu is displayed");
                            objContextMenu = GetProcess();
                            //objMenu = objContextMenu["FindChild"]("Name","[\"TextObject\"](\""+strMenuItem3+"\")",10);
                            objMenu = objContextMenu["FindChild"](["ObjectType", "Caption"],["MenuItem", strMenuItem3+"*"],10);
                            if(objMenu["Exists"] == true && objMenu["Enabled"] == true)
                            {
                                objMenu["Click"]();
                                if(strMenuItem4 != "")
                                {
                                    Delay(2000, "Wait until sub menu is displayed");
                                    objContextMenu = GetProcess();
                                    //objMenu = objContextMenu["FindChild"]("Name","[\"TextObject\"](\""+strMenuItem4+"\")",10);
                                    objMenu = objContextMenu["FindChild"](["ObjectType", "Caption"],["MenuItem", strMenuItem4+"*"],10);
                                    if(objMenu["Exists"] == true && objMenu["Enabled"] == true)
                                    {
                                        objMenu["Click"]();
                                    }
                                    else
                                    {
                                        //return false;
                                        objMenu = objContextMenu["FindChild"](["Name"],["[\"TextObject\"](\""+strMenuItem4+"*\")"],10);
                                        if(objMenu["Exists"] == true)
                                        {
                                            objMenu["Click"]();
                                        }
                                        else
                                        {
                                            return false;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                //return false;
                                objMenu = objContextMenu["FindChild"](["Name"],["[\"TextObject\"](\""+strMenuItem3+"*\")"],10);
                                if(objMenu["Exists"] == true)
                                {
                                    objMenu["Click"]();
                                }
                                else
                                {
                                    return false;
                                }
                            }
                        }
                    }
                    else
                    {
                        //return false;
                        objMenu = objContextMenu["FindChild"](["Name"],["[\"TextObject\"](\""+strMenuItem2+"*\")"],10);
                        if(objMenu["Exists"] == true)
                        {
                            objMenu["Click"]();
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
            }
            else
            {
                //return false;
                objMenu = objContextMenu["FindChild"](["Name"],["[\"TextObject\"](\""+strMenuItem1+"*\")"],10);
                if(objMenu["Exists"] == true)
                {
                    objMenu["Click"]();
                }
                else
                {
                    return false;
                }
            }
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
    
    ExplicitDelay(1000, "Wait until menu is closed");
    objContextMenu = GetDTMBrowserContextMenu();
    if(objContextMenu != null)
    {
        objContextMenu["Keys"]("[Esc]");
    }
    ExplicitDelay(2000, "Wait until menu is closed");
    return true;
}

function TreeView_GetItemText(TreeObject,ItemName)
{ 
  var itemText = "";
  if (TreeObject.Exists) 
  { 
//        var tvItem = TreeObject.FindChild(["Name", "Visible"],["[\"OutlineItem\"](\""+ItemName+"\")", true],50);
        var tvItem = TreeObject.FindChild(["Name", "Visible"],["[\"OutlineItem\"](\""+ItemName+"\")", true],50);
        if(tvItem["Exists"] == false)
          tvItem = TreeObject.FindChild(["Name", "Visible"],["[\"OutlineItem\"](\"*"+ItemName+"*\")", true],50);
        if(tvItem["Exists"] == false)
          tvItem = TreeObject.FindChild(["Name", "Visible"],["[\"TextObject\"](\""+ItemName+"\")", true],50);
        if(tvItem["Exists"] == false)
        {
            tvItem = TreeObject.FindChild(["Name", "Visible"],["[\"TextObject\"](\"*"+ItemName+"*\")", true],50);
        }
        if(tvItem["Exists"] == true)
        {
            try
            {
                if(tvItem["Caption"]["Exists"] == undefined)
                {
                    itemText = tvItem["Caption"];
                }
                else if(tvItem["Text"]["Exists"] == undefined)
                {
                    itemText = tvItem["Text"];
                }
            }
            catch(e)
            {
                itemText = tvItem["Caption"];
            }
        }
    }
    else
    {
        Log.Error("TreeObject does not exist.")
    }    
    return itemText;
}

function GetFullNodeTextInTreeview(node)
{
    var nodeText = "";
    var tree = GetDTMBrowserTree();
    if(tree["VScroll"]["Max"] > 0)
//        tree["VScroll"]["Pos"] = tree["VScroll"]["Min"];
    nodeText = TreeView_GetItemText(tree,node);
    if(nodeText == "")
    {
        //tree["VScroll"]["Pos"] = tree["VScroll"]["Max"];
        nodeText = TreeView_GetItemText(tree,node);
        //tree["VScroll"]["Pos"] = tree["VScroll"]["Min"];
    }
    return nodeText;
}

function SelectDTMInDtmBrowser_RightClick(HostPC,Option1)
{
    var tree = GetDTMBrowserTree();
   // TreeView_SelectItemName(tree,HostPC);
    TreeView_RightClickItem(tree,HostPC,Option1)
}

function GetAddDeviceWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_AddDeviceWnd");
    }
    return objChild;
}

function VerifyIfDTMExistsInDTMBrowser(dtmName)
{
    var fullDtmName = "";
    fullDtmName = GetFullNodeTextInTreeview(dtmName);
    if(fullDtmName != "")
    {
        dtmName = fullDtmName;
    }
    return VerifyNodeExistsInDTMBrowser(dtmName);
}


function VerifyNodeExistsInDTMBrowser(node)
{
    var isExists = false;
    var tree = GetDTMBrowserTree();
    if(tree != null)
    {
        //tree["VScroll"]["Pos"] = tree["VScroll"]["Min"];
        isExists = TreeView_ItemExists(tree,node);
        if(isExists == false)
        {
            //tree["VScroll"]["Pos"] = tree["VScroll"]["Max"];
            isExists = TreeView_ItemExists(tree,node);
            //tree["VScroll"]["Pos"] = tree["VScroll"]["Min"];
        }
    }
    return isExists;
     
}

function scrollBar()
{
     var addWindow = GetAddDeviceWndObject();
     var objectscrollbar=addWindow.FindChild(Array("WndClass","Visible"),Array("AfxWnd140u",true),5)
     var scrollbaritem=objectscrollbar.FindChild(Array("WndClass","Visible"),Array("ScrollBar",true),5)
     if(scrollbaritem["Exists"]==true)
     {
          scrollbaritem["Keys"]("[PageDown][PageDown][PageDown]");
     }
}
function ModificationAuthorization()
{
   //Code for modify popup
    var modify_popup=Sys.FindChild(Array("Visible","WndCaption"),Array(true,"Modification Authorization"),3)
    if(modify_popup["Exists"] == true)
    {
          var modify_btn=modify_popup.FindChild(Array("WndClass","WndCaption"),Array("Button","&Yes"),3)
          modify_btn["Click"]();
          Log["Message"]("Modify popup exists")
    }
}

function Selecting_DTMName(DTMName)
{
    //Code to provide DTM name for the selected DTM
    var propdev=Sys["FindChild"](Array("Visible","WndCaption"),Array(true,"Properties of device"),15)
    var protocolvalue=propdev.FindChild(Array("Visible","WndClass"),Array(true,"Edit"),15)
    protocolvalue["SetText"](DTMName)
    Log["Message"]("The text "+DTMName+" is printed successfully in the edit field")
    //Code to click on OK button for the given DTM Name
    var propdev1=propdev.FindChild(Array("Visible","WndClass","WndCaption"),Array(true,"Button","OK"),15)
    if(propdev1["Exists"] == true)
    {
          actualResult = "Button exists in the window";
          Log["Message"](actualResult)
           propdev1["Click"]();
    }
    else
    {              
          actualResult = "Button does not exists in the window";
          Log["Error"](actualResult);
    }
}

function MaximizeWindow(windoRef)
{
		windoRef.Maximize();
		Delay(2000, "Wait until window is ready");
}

function Close_Project()
{
   var close_wnd=Sys.FindChild(Array("WndClass","Visible"),Array("ControlExpert",true),5)
   close_wnd["Close"]();
   var exit_popup=Sys.FindChild(Array("WndCaption","Visible"),Array("Exit",true),5)
   var sam=exit_popup.FindChild(Array("WndCaption","Visible","WndClass"),Array("&No",true,"Button"),5) 
   sam.Click();
   var exit_popup1=Sys.FindChild(Array("WndCaption","Visible"),Array("Microsoft .NET Framework",true),5)
   var con_btn= exit_popup1.FindChild(Array("WndCaption","Visible"),Array("&Continue",true),5)
   con_btn.Click();
   
}

function ReadDBJSONData1(strPage) 
{
    var objJSON = null
    var pathFile =aqFileSystem["GetCurrentFolder"]() + "\\TestData\\" +strPage+".json";
    try
    {
    	if(!aqFile["Exists"](pathFile))
    	   throw new Error("Path Not found")
    	var fileContent = aqFile["ReadWholeTextFile"](pathFile, aqFile["ctUTF8"])
    	var objJSON = eval("(" + fileContent + ")");
    	if (objJSON == null)
    	   throw new Error("JSON obj Not found")
    	else
    	    return objJSON  
     }
     catch(Ex)
    {
	     Log["Error"]("Expection in the function ReadDBJSONData")
    }
}

function GetObjectProperties_FromJSON(page,ObjectName)
{
    try
    {
        var objJson,PropertyName1 ,PropertyName2 ,PropertyValue3,PropertyValue1,PropertyValue2,PropertyName3
        var objectName,level1;
        //Convert object to lower case
       // objectName = aqString["ToLower"](ObjectName__1)
    
       // aqString["Replace"](objectName, "_", "")
        objJson = ReadDBJSONData1(page)
        if (objJson != null)
        {
    	    //Object name are case sensitive, it there is any case mismatch, then objJson[objectName].PropertyName1 will throw expection 
    	    //Ex: In JSON if objectname is 'userCtrlCommercialRef_Module1' and while searching if we search as 'userCtrlCommercialRef_module1'
    	    //Output/return value will be null
    	      propertyName1=objJson[ObjectName].PropertyName1 
    	      propertyValue1=objJson[ObjectName].PropertyValue1
            propertyName2=objJson[ObjectName].PropertyName2             
            propertyValue2=objJson[ObjectName].PropertyValue2  
            propertyName3=objJson[ObjectName].PropertyName3            
            propertyValue3=objJson[ObjectName].PropertyValue3           
            level1 = objJson[ObjectName].Level
            
            propArray = new Array();
            propValues = new Array();
            if(propertyName1 != "" && propertyName1!="NULL")
            {
                propArray[0] = propertyName1;
                propValues[0] = propertyValue1;
            }
            if(propertyName2 != "" && propertyName2!="NULL")
            {
                propArray[1] = propertyName2;
                propValues[1] = propertyValue2;
            }
            if(propertyName3 != "" && propertyName3!="NULL")
            {
                propArray[2] = propertyName3;
                propValues[2] = propertyValue3;
            }
            if(level1 != "" && level1 != "NULL")
            {
                level = level1;
                
            }
            return true;          
        }
        return false;        
    }
    catch(Ex)
    {
        Log["Error"]("Expection in the function GetObjectProperties_FromJSON "+Ex.message)
    }  
}

function GetObjectProperties(page,objectName)
{
    
  Data=ReadDBJSONData(page);
  var objectArray=[],count=0;
  for (var i=0; i<Data.length; i++) { 
  if(aqString["ToUpper"](objectName)==aqString["ToUpper"](Data[i].ObjectName) && aqString["ToUpper"](page)==aqString["ToUpper"](Data[i].PAGE)){

        
            propArray = new Array();
            propValues = new Array();
            if(Data[i].PropertyName1 != "" && Data[i].PropertyName1 != "NULL")
            {
                propArray[0] = Data[i].PropertyName1;
                propValues[0] = Data[i].PropertyValue1;
            }
            if(Data[i].PropertyName2 != "" && Data[i].PropertyName2 != "NULL")
            {
                propArray[1] = Data[i].PropertyName2;
                propValues[1] = Data[i].PropertyValue2;
            }
            if(Data[i].PropertyName3 != "" && Data[i].PropertyName3 != "NULL")
            {
                propArray[2] = Data[i].PropertyName3;
                propValues[2] = Data[i].PropertyValue3;
            }
            if(Data[i].Level != "" && Data[i].Level != "NULL")
            {
                level = Data[i].Level;
                
            }
            return true;
    }
  }
 
    return false;
}

function ReadDBJSONData(Page) {
  
    var filepath = aqFileSystem["GetCurrentFolder"]() + "\\TestData\\csvjson.json";
//    var filepath = aqFileSystem["GetCurrentFolder"]() + "\\TestData\\AppControlObjects\\"+Page+".json";
    //var filepath = "C:\\Users\\SESA213703\\Downloads\\csvjson.json";
    if (aqFile.Exists(filepath)) {
        var data = aqFile.ReadWholeTextFile(filepath, aqFile.ctUTF8);
        var TestObj = eval("(" + data + ")");
        return TestObj;
    }
}