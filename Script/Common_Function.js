﻿//USEUNIT DataBase_Related
//USEUNIT FDTCONFIGURATION_PAGE_TC
//USEUNIT ObjectFiles
//USEUNIT OPCUA_FDTCONFIGURATION_PAGE
/*Description: This file consists of methods that are used commonly across all the applications functionality, 
like application general tasks, object identification, test synchronization.
*/

//----------File references--------------------------


//====================================================================================================
//Method name: LaunchApplication
//Parameters: N/A
//Description: Function to launch application under test.
//====================================================================================================
function LaunchApplication()
{
    functionality = Project["Variables"]("Functionality");
    TestCaseName = Project["Variables"]("TestCaseName");
    TestDescription = Project["Variables"]("TestDescription");
    
    var myProcess = GetProcess();
    if(myProcess == null)
    {
        Detail = "Run tested application - Unity Pro"; 
        expResult = "Tested application - Unity Pro run successful";
        myProcess = TestedApps["ControlExpert"]["Run"]();
        result = myProcess["Exists"];
        if(result == true)
        {
            Status = "PASS";
            actualResult = "Tested application - Unity Pro run successful";
            Log["Message"](actualResult);
        }
        else
        {
            Status = "FAIL";
            actualResult = "Failed to run tested application - Unity Pro";          
            Log["Error"](actualResult);
        }
        InsertToReport(TestCaseName,TestDescription,Status,Detail,functionality,expResult,actualResult);
        
        var myRegProcess = Sys["WaitProcess"]("RegistrationWizard", 10000);
        if(myRegProcess["Exists"] == true)
        {
            var objRegWizBtn = GetRecognitionObject(myRegProcess, "Unity", "Obj_Unity_RegWiz_Btn");
            objRegWizBtn["Click"]();
        }
    }
                
    ExplicitDelay(5000, "Wait if catalog update window is displayed");
    var objCatalogWnd = GetCatalogUpdatePopupWindowObject();
    if(objCatalogWnd != null)
    {
        objCatalogWnd["Activate"]();
        objCatalogWnd = GetCatalogUpdatePopupYesButtonObject();
        objCatalogWnd["Click"]();
        ExplicitDelay(60000, "Wait until catalog update is completed");
    }
    
    var counter = 1;
    var objParent = GetProcess();
    if(objParent != null)
    {
        var objDTMCatalogUpdateProgressWnd = GetRecognitionObject(objParent, "HardwareCatalog", "Obj_Catalog_Update_Progress_Wnd");
        while(objDTMCatalogUpdateProgressWnd != null)
        {
            ExplicitDelay(10000, "Wait for catalog update to complete");
            if(counter++ > 10)
            {
                break;
            }
            objDTMCatalogUpdateProgressWnd = GetRecognitionObject(objParent, "HardwareCatalog", "Obj_Catalog_Update_Progress_Wnd");
        }
    }
        
    Detail = "Launch UnityPro application"; 
    expResult = "UnityPro application launched successfully";
    myProcess = Sys["WaitProcess"]("ControlExpert", 60000);
    ExplicitDelay(5000, "Wait until application launch");
    result = myProcess["Exists"];
    if(result == true)
    {
        Status = "PASS";
        actualResult = "UnityPro application launched successfully";
        Log["Message"](actualResult);
    }
    else
    {
        Status = "FAIL";
        actualResult = "Failed to launch UnityPro application";
        Log["Error"](actualResult);
    }
    InsertToReport(TestCaseName,TestDescription,Status,Detail,functionality,expResult,actualResult);
}
    
//====================================================================================================
//Method name: ActivateApplication
//Parameters: N/A
//Description: Function to activate the current test application main window.
//====================================================================================================
function ActivateApplication()
{
    Detail = expResult = "Activate and maximize application";
    ExplicitDelay(5000, "Wait for Unity Pro application to open");
    var objUnityWnd = GetProcessWindow();
    if(objUnityWnd != null)
    {       
        if(objUnityWnd["Exists"] == true)
        {
            objUnityWnd["Activate"]();
            var changeState = ChangeApplicationWindowState("Maximize");
            if(changeState == true)
            {
                Status = "PASS";
                actualResult = "Unity Pro application activated successfully";
                Log["Message"](actualResult);
                InsertToReport(TestCaseName,TestDescription,Status,Detail,functionality,expResult,actualResult);
            }
            else
            {
                Status = "WARNING";
                actualResult = "Failed to activate Unity Pro application";
                Log["Warning"](actualResult);
                InsertToReport(TestCaseName,TestDescription,Status,Detail,functionality,expResult,actualResult);
            }
        }
        else
        {
            Status = "WARNING";
            actualResult = "Unity Pro application not available";
            Log["Warning"](actualResult);
            InsertToReport(TestCaseName,TestDescription,Status,Detail,functionality,expResult,actualResult);
        }
    }
    else
    {
        Status = "WARNING";
        actualResult = "Unity Pro application not available";
        Log["Warning"](actualResult);
        InsertToReport(TestCaseName,TestDescription,Status,Detail,functionality,expResult,actualResult);
    }
}

//====================================================================================================
//Method name: ChangeApplicationWindowState
//Parameters: N/A
//Description: Function to change application main window state to Minimize/Maximize/Normal.
//====================================================================================================
function ChangeApplicationWindowState()
{
      var objUnityWnd = GetProcessWindow();
      if(objUnityWnd != null)
      {
          objUnityWnd["Maximize"]();
          return true;
      }
    return false
}

//====================================================================================================
//Method name: ImplicitDelay
//Parameters: Object, Property Name, Property Value, Timeout
//Description: Function to delay the playback using specific object properties.
//====================================================================================================
function ImplicitDelay(obj, strObjPropName, strObjPropValue, intTimeout)
{
    var counter = 1;
    while(obj == null)
    {
        ExplicitDelay(2000, "Wait until UI object is available");
        if(counter++ > 10)
        {
            break;
        }
    }
    
    if(obj != null)
    {
        if(intTimeout == "" || intTimeout == undefined)
        {
            obj["WaitProperty"](strObjPropName, strObjPropValue);
        }
        else
        {
            obj["WaitProperty"](strObjPropName, strObjPropValue, intTimeout);
        }
    }
}

//====================================================================================================
//Method name: ExplicitDelay
//Parameters: Timeout, Message
//Description: Function to explicitly delay the playback till specific time.
//====================================================================================================
function ExplicitDelay(intTimeout, strMessage)
{
    aqUtils["Delay"](intTimeout, strMessage);
}


//====================================================================================================
//Method name: GetEventTimeIntervalInSeconds
//Parameters: N/A
//Description: Function to return the time interval for the given time range
//====================================================================================================
function GetEventTimeIntervalInSeconds()
{
    var time1, time2, timeDiff;
    time1 = Project["Variables"]("Time1");
    time2 = Project["Variables"]("Time2");
    timeDiff = aqDateTime["TimeInterval"](time1, time2);
    timeDiff_Seconds = aqDateTime["GetSeconds"](timeDiff);
    timeDiff_Minutes = aqDateTime["GetMinutes"](timeDiff);
    timeDiff_Hours = aqDateTime["GetHours"](timeDiff);
    timeDiff = (aqConvert["VarToInt"](timeDiff_Hours) * 3600) + (aqConvert["VarToInt"](timeDiff_Minutes) * 60) + (aqConvert["VarToInt"](timeDiff_Seconds))
    return timeDiff;
}

function HandleDTMDialogMessageBox(dialogCaption, saveOption)
{
    ExplicitDelay(3000, "Wait until modification popup is displayed");
    var curProcess = GetProcess();
    var objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*"+dialogCaption+"*"], 10);
    objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
    for(var i=0;i<objUnExpWnds["length"];i++)
    {
        if(objUnExpWnds[i]["Exists"] == true)
        {
            if(saveOption == "Yes")
            {
                objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
                if(objConfirmBtn == null)
                {
                    objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Ok_Button");
                }
            }
            else
            {
                objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_No_Button");
            }
            if(objConfirmBtn != null)
            {
                objConfirmBtn["Click"]();
                ExplicitDelay(5000, "Wait until modification popup is handled");
                Log["Message"]("Modification popup handled successfully");
                return true;
            }
        }
    }
}

function ValidateErrorDialogMessage(dialogCaption, errorMsg)
{
    var result = false;
    ExplicitDelay(3000, "Wait until modification popup is displayed");
    var curProcess = GetProcess();
    var objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*"+dialogCaption+"*"], 10);
    objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
    for(var i=0;i<objUnExpWnds["length"];i++)
    {
        if(objUnExpWnds[i]["Exists"] == true)
        {
            var objUnExpWndStatics = objUnExpWnds[i]["FindAllChildren"](["WndClass"], ["Static"], 10);
            objUnExpWndStatics = (new VBArray(objUnExpWndStatics))["toArray"]();
            for(var i1=0;i1<objUnExpWndStatics["length"];i1++)
            {
                if(objUnExpWndStatics[i1]["Exists"] == true)
                {
                    if(aqString["Find"](objUnExpWndStatics[i1]["WndCaption"],errorMsg,0,false) != -1)
                    {
                        result = true;
                        break;
                    }
                }
            }
            
            var objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
            if(objConfirmBtn == null)
            {
                objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Ok_Button");
            }
            if(objConfirmBtn != null)
            {
                objConfirmBtn["Click"]();
                ExplicitDelay(5000, "Wait until modification popup is handled");
                Log["Message"]("Error dialog handled successfully");
            }
            break;
        }
    }
    
    return result;
}

function HandleUnexpectedDialogMessageBox2()
{
    var curProcess = GetProcess();
    var objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*"], 10);
    objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
    for(var i=0;i<objUnExpWnds["length"];i++)
    {
        if(objUnExpWnds[i]["Exists"] == true)
        {
            objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Unexpected_Wnd_Button");
            if(objConfirmBtn != null)
            {
                objConfirmBtn["Click"]();
                ExplicitDelay(5000, "Wait until modification popup is handled");
                Log["Message"]("Modification popup handled successfully");
                return true;
            }
        }
    }
}

function HandleUnexpectedDialogMessageBox()
{
    objUnExpWnd = GetUnexpectedWindowObject();
    if(objUnExpWnd != null)
    {
        var objBtn = GetUnexpectedWindowButtonObject();
        if(objBtn != null)
        {
            objBtn["Click"]();
            ExplicitDelay(2000, "Wait until unexpected window is handled");
            Log["Message"]("Unexpected window handled successfully");
        }
    }
    else
    {
        Sys["Keys"](["ESC"]);           
        Sys["Keys"](["Enter"]);
        ExplicitDelay(2000, "Wait until unexpected window is handled");
        Log["Message"]("Unexpected window handled successfully");
    }
}

function GetUnexpectedWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_Unexpected_Wnd");
    }
    return objChild;
}

function GetUnexpectedWindowButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetUnexpectedWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_Unexpected_Wnd_Btn");
    }
    return objChild;
}

function HandleModificationDialogMessageBox()
{
    ExplicitDelay(4000, "Wait until modification popup is displayed");
    var curProcess = GetProcess();
    if(curProcess != null)
    {
        var objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*Modification*Authorization*"], 10);
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
                    ExplicitDelay(5000, "Wait until modification popup is handled");
                    Log["Message"]("Modification popup handled successfully");
                    return true;
                }
            }
        }
        
        var objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*Unity*"], 10);
        objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
        for(i=0;i<objUnExpWnds["length"];i++)
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
                    ExplicitDelay(5000, "Wait until modification popup is handled");
                    Log["Message"]("Modification popup handled successfully");
                    return true;
                }
            }
        }
        
        var objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","*Close*"], 10);
        objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
        for(i=0;i<objUnExpWnds["length"];i++)
        {
            objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
            if(objConfirmBtn == null)
            {
                objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "DTMConfiguration", "Obj_Modification_Authorization_Ok_Button");
            }
            if(objConfirmBtn != null)
            {
                objConfirmBtn["Click"]();
                ExplicitDelay(5000, "Wait until modification popup is handled");
                Log["Message"]("Modification popup handled successfully");
                return true;
            }
        }
    }
}

function GetModificationAuthorizationPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_Modification_Authorization_Wnd");
    }
    return objChild;
}

function GetModificationAuthorizationYesButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetModificationAuthorizationPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
        if(objChild == null)
        {
            objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_Modification_Authorization_Ok_Button");
        }
    }
    return objChild;
}

function GetCatalogUpdatePopupYesButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetCatalogUpdatePopupWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_Modification_Authorization_Yes_Button");
    }
    return objChild;
}

function GetCatalogUpdatePopupWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_Catalog_Update_Popup_Wnd");
    }
    return objChild;
}

function HandleUnexpectedDialogMessageBox3()
{
    var curProcess = GetExplorerProcess();
    var objUnExpWnds = curProcess["FindAllChildren"](["WndClass","WndCaption"], ["#32770","Programs and Features"], 10);
    objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
    for(var i=0;i<objUnExpWnds["length"];i++)
    {
        if(objUnExpWnds[i]["Exists"] == true)
        {
            objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "Installation", "Obj_UninstallYesButton");
            if(objConfirmBtn != null)
            {
                objConfirmBtn["Click"]();
                ExplicitDelay(5000, "Wait until modification popup is handled");
                Log["Message"]("Modification popup handled successfully");
                return true;
            }
        }
    }
}

function HandleCancelInstallationDialogMessageBox()
{
    var objUnExpWnds = Sys["FindAllChildren"](["ProcessName"], ["msiexec"], 10);
    objUnExpWnds = (new VBArray(objUnExpWnds))["toArray"]();
    for(var i=0;i<objUnExpWnds["length"];i++)
    {
        if(objUnExpWnds[i]["Exists"] == true)
        {
            objConfirmBtn = GetRecognitionObject(objUnExpWnds[i], "Installation", "Obj_CancelInstallation_Button");
            if(objConfirmBtn != null)
            {
                objConfirmBtn["Click"]();
                ExplicitDelay(5000, "Wait until modification popup is handled");
                Log["Message"]("Modification popup handled successfully");
                return true;
            }
        }
    }
}

function GetRecognitionObject(parent,page,objectName)
{
  var objectData;
    if(parent != null)
    {
        var objControl = null;
        var hasObj,objectData,tempObjectName;
        tempObjectName = objectName;
        for(i=1;i<10;i++)
        {
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
    ExplicitDelay(50000, "Wait until controlexpert popup is launched");
    myprocess=TestedApps["ControlExpert"]["Run"]();
    //Code for Security Database migration tool
    var sec_popup=Sys.FindChild(Array("Visible","WndCaption"),Array(true,"Security Database Migration Tool"),15)
    if(sec_popup["Exists"]==true)
    {
       var sec_btn=sec_popup.FindChild(Array("WndClass","WndCaption"),Array("Button","OK"),15)
       sec_btn["Click"]();
    }
    ExplicitDelay(5000, "Wait until controlexpert popup is launched");
    //Step to open the project
  	bReturnVal = Open_Unity_Project_WithName(strSTUProjName)
}

function Open_Unity_Project_WithName(strSTUProjName)
{
    try
    {
        var openStatus;
        Detail = expResult = "Open DTM project: "+strSTUProjName;
        openStatus = OpenProject(strSTUProjName);
        Detail = expResult = "Open DTM project: "+strSTUProjName;
        if(openStatus == true)
        {
            expResult = actualResult = "Project: "+strSTUProjName+" opened successfully";
            Log["Message"](actualResult);
            return true;
        }
        else
        {
            actualResult = "Failed to open project"+strSTUProjName;
            Log["Error"](actualResult);
            return false;
        }
    }
    catch(ex)
    {
        actualResult = ex["description"];
        Log["Error"](actualResult);
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
    TreeObject["Keys"]("[Esc]");
    TreeObject["Keys"]("[Esc]");
   }
  else
  {
    Log.Error("TreeObject does not exist.")
  }    
}

function TreeView_RightClickItem(tree,HostPC,Option1)
{ 
  if (tree.Exists==true) 
  { 
     tree.ClickItemR(HostPC);
     tree.PopupMenu.Click(Option1);
  }
  else
  {
     Log.Error("TreeObject does not exist.")
  }    
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
            objMenu = objContextMenu["FindChild"](["ObjectType", "Caption", "VisibleOnScreen"],["MenuItem", strMenuItem1+"*", true],10);
            if(objMenu["Exists"] == true && objMenu["Enabled"] == true)
            {
                objMenu["Click"]();
                if(strMenuItem2 != "")
                {
                    Delay(2000, "Wait until sub menu is displayed");
                    objContextMenu = GetProcess();
                    objMenu = objContextMenu["FindChild"](["ObjectType", "Caption"],["MenuItem", strMenuItem2+"*"],10);
                    if(objMenu["Exists"] == true && objMenu["Enabled"] == true)
                    {
                        objMenu["Click"]();
                        if(strMenuItem3 != "")
                        {
                            Delay(2000, "Wait until sub menu is displayed");
                            objContextMenu = GetProcess();
                            objMenu = objContextMenu["FindChild"](["ObjectType", "Caption"],["MenuItem", strMenuItem3+"*"],10);
                            if(objMenu["Exists"] == true && objMenu["Enabled"] == true)
                            {
                                objMenu["Click"]();
                                if(strMenuItem4 != "")
                                {
                                    Delay(2000, "Wait until sub menu is displayed");
                                    objContextMenu = GetProcess();
                                    objMenu = objContextMenu["FindChild"](["ObjectType", "Caption"],["MenuItem", strMenuItem4+"*"],10);
                                    if(objMenu["Exists"] == true && objMenu["Enabled"] == true)
                                    {
                                        objMenu["Click"]();
                                    }
                                    else
                                    {
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
    nodeText = TreeView_GetItemText(tree,node);
    if(nodeText == "")
    {
        nodeText = TreeView_GetItemText(tree,node);
    }
    return nodeText;
}

function SelectDTMInDtmBrowser_RightClick(HostPC,Option1)
{
    var tree = GetDTMBrowserTree();
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
        isExists = TreeView_ItemExists(tree,node);
        if(isExists == false)
        {
            isExists = TreeView_ItemExists(tree,node);
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
    
    var close=Sys.FindChild(Array("WndCaption","Visible"),Array("EcoStruxure Control Expert {No User Authentication} : OPCUAOFFLINEPROJECT*",true),5)
    close.Close();
    var exit_popup=Sys.FindChild(Array("WndCaption","Visible"),Array("Exit",true),5)
    var sam=exit_popup.FindChild(Array("WndCaption","Visible","WndClass"),Array("&No",true,"Button"),5) 
    sam.Click();
}

function ReadDBJSONData1(strPage) 
{
    var objJSON = null
    var pathFile =aqFileSystem["GetCurrentFolder"]() + "\\TestData\\Database_Files\\" +strPage+".json";
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

function Close_NTSAHI0412XH_DTMWindow()
{
     var ObjTestdata = ReadJson("Configurations_TestData.json")
     var dtm_wnd1=ObjTestdata.DTM1.DTMName2
     var dtm_wnindow1=Sys.FindChild("WndCaption",dtm_wnd1,10);
     dtm_wnindow1.Close();
     var exit_popup1=Sys.FindChild(Array("WndCaption","Visible"),Array("Microsoft .NET Framework",true),5)
    if(exit_popup1["Exists"] == true)
    {
       var con_btn= exit_popup1.FindChild(Array("WndCaption","Visible"),Array("&Continue",true),5)
       con_btn.Click();
    }
}

function Close_NTSAHO0212H_DTMWindow()
{
     var ObjTestdata = ReadJson("Configurations_TestData.json")
     var dtm_wnd2=ObjTestdata.DTM2.DTMName2
     var dtm_wnindow2=Sys.FindChild("WndCaption",dtm_wnd2,10);
     dtm_wnindow2.Close();
      var exit_popup1=Sys.FindChild(Array("WndCaption","Visible"),Array("Microsoft .NET Framework",true),5)
    if(exit_popup1["Exists"] == true)
    {
       var con_btn= exit_popup1.FindChild(Array("WndCaption","Visible"),Array("&Continue",true),5)
       con_btn.Click();
    }
}