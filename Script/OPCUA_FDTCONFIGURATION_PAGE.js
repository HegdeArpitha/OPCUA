//USEUNIT Common_Function
//USEUNIT DataBase_Related
//USEUNIT FDTCONFIGURATION_PAGE_TC
//USEUNIT Groupbox
//USEUNIT ObjectFiles
//USEUNIT DTMBrowser
function Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
{
    var ObjTestdata = ReadJson("Configurations_TestData.json")
    var Objdata=GetCPU_DTMBrowser();
    var dtm_name=ObjTestdata.DTM1.DTMName1
    var dtm_fullname=ObjTestdata.DTM1.DTMFullName1
    var new_dtmvalue=ObjTestdata.DTM1.DTMName
    var tree = GetDTMBrowserTree();
    Objdata.Click();
    SelectDTMInDtmBrowser_RightClick(HostPC,Option1);
    //function to scroll the window
    scrollBar()
    var addWindow = GetAddDeviceWndObject();
    var objTemp = addWindow.FindChild("Text",dtm_name,10);
    if(objTemp["Exists"] == true)
    {
        objTemp.Click();
        //Code to select AddDTM button in the window              
        var button = GetAddDeviceWndAddButtonObject();
        button.Click();
        //function to click on modification authorization
        ModificationAuthorization();
        //function to rename DTM
         Selecting_DTMName(new_dtmvalue);
        ExplicitDelay(5000, "Wait if catalog update window is displayed");
        //Code to verify DTM in DTM browser
       var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
       if(objTemp["Exists"] == true)
       {
          ExplicitDelay(5000, "Wait if catalog update window is displayed");
          var dtmName=objTemp.FindChild("Text",dtm_fullname,10);
          if(dtmName["Exists"] == true)
          {  
              actualResult =dtmName+ " exists in DTM Browser";
              Log["Message"](actualResult);
          }
          else
          {  
              actualResult = dtmName+ " does not exists in DTM Browser";
              Log["Error"](actualResult);
          }
       }
    }
}

function Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
{
    var ObjTestdata = ReadJson("Configurations_TestData.json")
    var Objdata=GetCPU_DTMBrowser();
    var dtm_name=ObjTestdata.DTM2.DTMName1
    var dtm_fullname=ObjTestdata.DTM2.DTMFullName1
    var new_dtmvalue=ObjTestdata.DTM2.DTMName
    var tree = GetDTMBrowserTree();
    Objdata.Click();
    SelectDTMInDtmBrowser_RightClick(HostPC,Option1);
    //function to scroll the window
    scrollBar()
    var addWindow = GetAddDeviceWndObject();
    var objTemp = addWindow.FindChild("Text",dtm_name,10);
    if(objTemp["Exists"] == true)
    {
        objTemp.Click();
        //Code to select AddDTM button in the window              
        var button = GetAddDeviceWndAddButtonObject();
        button.Click();
        //function to click on modification authorization
        ModificationAuthorization();
        //function to rename DTM
         Selecting_DTMName(new_dtmvalue);
        ExplicitDelay(5000, "Wait if catalog update window is displayed");
        //Code to verify DTM in DTM browser
       var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
       if(objTemp["Exists"] == true)
       {
          ExplicitDelay(5000, "Wait if catalog update window is displayed");
          var dtmName=objTemp.FindChild("Text",dtm_fullname,10);
          if(dtmName["Exists"] == true)
          {  
              actualResult =dtmName+ " exists in DTM Browser";
              Log["Message"](actualResult);
          }
          else
          {  
              actualResult = dtmName+ " does not exists in DTM Browser";
              Log["Error"](actualResult);
          }
       }
    }
}

function Verify_NTSAHI0412XH_Groupbox()
{
    var objTemp = GetTestdata_DTMBrowser()
    if(objTemp["Exists"] == true)
    {
        var ObjTestdata = ReadJson("Configurations_TestData.json")
        var sample=ObjTestdata.DTM1.DTMFullName1
        var dtm_name=objTemp.FindChild("Text",sample,10);
        dtm_name.DblClick();
        //Code to maximize the window
        var max_wnd=ObjTestdata.DTM1.DTMName2
        var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
        maximize_wnd["Maximize"]();
        var authenication_grpbox=GetGroupboxObj_AuthenticationSettings();
        var serverinfo_grpbox=GetGroupboxObj_ServerInformation();
        var securitysett_grpbox=GetGroupboxObj_SecuritySetting();
        var modulepos_grpbox=GetGroupboxObj_ModulePosition();
        if(authenication_grpbox["Exists"] == true && serverinfo_grpbox["Exists"] == true && securitysett_grpbox["Exists"] == true && modulepos_grpbox["Exists"] == true)
        {
          Log["Message"]("Group box exists");
        }
        else
        {
          Log["Error"]("Group box does not exists");
        }
   }   
}

function Verify_NTSAHO0212H_Groupbox()
{
    var objTemp = GetTestdata_DTMBrowser()
    if(objTemp["Exists"] == true)
    {
        var ObjTestdata = ReadJson("Configurations_TestData.json")
        var sample=ObjTestdata.DTM2.DTMFullName1
        var dtm_name=objTemp.FindChild("Text",sample,10);
        dtm_name.DblClick();
        //Code to maximize the window
        var max_wnd=ObjTestdata.DTM2.DTMName2
        var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
        maximize_wnd["Maximize"]();
        var authenication_grpbox=GetGroupboxObj_AuthenticationSettings();
        var serverinfo_grpbox=GetGroupboxObj_ServerInformation();
        var securitysett_grpbox=GetGroupboxObj_SecuritySetting();
        var modulepos_grpbox=GetGroupboxObj_ModulePosition();
        if(authenication_grpbox["Exists"] == true && serverinfo_grpbox["Exists"] == true && securitysett_grpbox["Exists"] == true && modulepos_grpbox["Exists"] == true)
       {
          Log["Message"]("Group box exists");
       }
       else
       {
          Log["Error"]("Group box does not exists");
       }
   }   
}

function Verify_SecuritySettings_ComboBoxes()
{
  for(var i=0;i<2;i++)
  {
       DTMName=["< 192.168.1.200 > NTSAHI0412XH_DTM","< 192.168.1.200 > NTSAHO0212H_DTM"]
       WindowName=["NTSAHI0412XH_DTM - fdtConfiguration","NTSAHO0212H_DTM - fdtConfiguration"]
       var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
       if(objTemp["Exists"] == true)
       {
          //Code to select DTM from DTM browser
          var dtmName=objTemp.FindChild(Array("Text","Visible"),Array(DTMName[i],true),5)
          dtmName.DblClick();
           //Code to maximize the window
           var maximize_wnd=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
          maximize_wnd["Maximize"]();
          for(var j=0;j<2;j++)
          {
              Combobox_Cell=['WinFormsObject("fdtSecurityPolicy")','WinFormsObject("fdtSecurityMode")']
              SecuritySettingValues=["Security Policy","Message Security Mode"]
              var sam=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
              var device_info=sam.FindChild(Array("Name","Visible"),Array('WinFormsObject("DeviceInfoControl")',true),5)
              var groupbox=device_info.FindChild(Array("WndCaption","Visible"),Array("Security Settings",true),5)
                //Code to check combo box exists or not
              var comboboxcell=groupbox.FindChild(Array("Name","Visible"),Array(Combobox_Cell[j],true),5)
              if(comboboxcell["Exists"] == true)
              {
                var combo_box=comboboxcell.FindChild(Array("Name","Visible"),Array('WinFormsObject("_comboBox")',true),5)
                if(combo_box["Exists"] == true)
                {
                  Log["Checkpoint"]("Combobox is present for "+SecuritySettingValues[j])
                }
                else
                {
                  Log["Error"]("Combobox is not present for "+SecuritySettingValues[j])
                }
              }
              else
              {
                Log["Error"]("Combobox cell is not present")
              }
          }
       }
       }
}


function Verify_NTSAHI0412XH_ModulePosition_TextBoxes()
{
     var channel_index=GetModulePosition_ChannelIndex();
     var cluster_num=GetModulePosition_ClusterNumber();
     var objTemp = GetTestdata_DTMBrowser()
     if(objTemp["Exists"] == true)
     {
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var dtmName=ObjTestdata.DTM1.DTMFullName1
          var dtm_name=objTemp.FindChild("Text",dtmName,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM1.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
          if(channel_index!="" || channel_index!=undefined || channel_index!=null)
          {
              var channelindex_textbox=GetModulePosition_ChannelIndex_Textbox()
              if(channelindex_textbox["Exists"] == true)
              {
                Log["Checkpoint"]("Textbox is present for channelindex")
		          }
              else
              {
                Log["Error"]("Textbox is not present for channelindex")
              }
          }
          if(cluster_num!="" || cluster_num!=undefined || cluster_num!=null)
          {
             var clusternum_textbox=GetModulePosition_ClusterNumber_Textbox()
             if(clusternum_textbox["Exists"] == true)
             {
                Log["Checkpoint"]("Textbox is present for clusternumber")
	           }
	           else
            {
                Log["Error"]("Textbox is not present for clusternumber")
            }   
          }
       }
}

function Verify_NTSAHI0412XH_SecuritySetting_ComboBoxes()
{
       var security_policy=GetSecuritySetting_SecurityPolicy();
       var messagesecuritymode=GetSecuritySetting_SecurityMode()
       var objTemp = GetTestdata_DTMBrowser()
       if(objTemp["Exists"] == true)
       {
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var dtmName=ObjTestdata.DTM1.DTMFullName1
          var dtm_name=objTemp.FindChild("Text",dtmName,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM1.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
          if(security_policy!="" || security_policy!=undefined || security_policy!=null || messagesecuritymode!="" || messagesecuritymode!=undefined || messagesecuritymode!=null)
          {
             var securitypolicy_combobox=GetSecuritySetting_SecurityPolicy_Combobox()
             var securitymode_combobox=GetSecuritySetting_SecurityMode_Combobox()
             if(securitypolicy_combobox["Exists"] == true && securitymode_combobox["Exists"] == true)
             {
                Log.Message("security policy combobox and security mode combobox exists")
		         }
             else
             {
                Log.Error("security policy combobox and security mode combobox does not exists")
             }
             if(securitymode_combobox["Exists"] == true && securitymode_combobox["Exists"] == true)
             {
                Log["Checkpoint"]("Textbox is present for clusternumber")
	           }
	           else
             {
                Log["Error"]("Textbox is not present for clusternumber")
             }   
         }
       }
}

function Verify_NTSAHO0212H_SecuritySetting_ComboBoxes()
{
       var security_policy=GetSecuritySetting_SecurityPolicy();
       var messagesecuritymode=GetSecuritySetting_SecurityMode()
       var objTemp = GetTestdata_DTMBrowser()
       if(objTemp["Exists"] == true)
       {
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var dtmName=ObjTestdata.DTM2.DTMFullName1
          var dtm_name=objTemp.FindChild("Text",dtmName,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM2.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
          if(security_policy!="" || security_policy!=undefined || security_policy!=null || messagesecuritymode!="" || messagesecuritymode!=undefined || messagesecuritymode!=null)
          {
             var securitypolicy_combobox=GetSecuritySetting_SecurityPolicy_Combobox()
             var securitymode_combobox=GetSecuritySetting_SecurityMode_Combobox()
             if(securitypolicy_combobox["Exists"] == true && securitymode_combobox["Exists"] == true)
             {
                Log.Message("security policy combobox and security mode combobox exists")
		         }
             else
             {
                Log.Error("security policy combobox and security mode combobox does not exists")
             }
             if(securitymode_combobox["Exists"] == true && securitymode_combobox["Exists"] == true)
             {
                Log["Checkpoint"]("Textbox is present for clusternumber")
	           }
	           else
             {
                Log["Error"]("Textbox is not present for clusternumber")
             }   
         }
       }
}
function Verify_NTSAHO0212H_ModulePosition_TextBoxes()
{
     var channel_index=GetModulePosition_ChannelIndex();
     var cluster_num=GetModulePosition_ClusterNumber();
     var objTemp = GetTestdata_DTMBrowser()
     if(objTemp["Exists"] == true)
     {
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var sample=ObjTestdata.DTM2.DTMFullName1
          var dtm_name=objTemp.FindChild("Text",sample,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM2.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
          if(channel_index!="" || channel_index!=undefined || channel_index!=null)
          {
              var channelindex_textbox=GetModulePosition_ChannelIndex_Textbox()
              if(channelindex_textbox["Exists"] == true)
              {
                Log["Checkpoint"]("Textbox is present for channelindex")
		          }
              else
              {
                Log["Error"]("Textbox is not present for channelindex")
              }
          }
          if(cluster_num!="" || cluster_num!=undefined || cluster_num!=null)
          {
             var clusternum_textbox=GetModulePosition_ClusterNumber_Textbox()
             if(clusternum_textbox["Exists"] == true)
             {
                Log["Checkpoint"]("Textbox is present for clusternumber")
	           }
	           else
            {
                Log["Error"]("Textbox is not present for clusternumber")
            }   
          }
       }
}

function Validate_ModulePosition_Field()
{
  for(var i=0;i<2;i++)
  {
       DTMName=["< 192.168.1.200 > NTSAHI0412XH_DTM","< 192.168.1.200 > NTSAHO0212H_DTM"]
       WindowName=["NTSAHI0412XH_DTM - fdtConfiguration","NTSAHO0212H_DTM - fdtConfiguration"]
       var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
       if(objTemp["Exists"] == true)
       {
          //Code to select DTM from DTM browser
          var dtmName=objTemp.FindChild(Array("Text","Visible"),Array(DTMName[i],true),5)
          dtmName.DblClick();
           //Code to maximize the window
          var maximize_wnd=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
          maximize_wnd["Maximize"]();
          for(var j=0;j<2;j++)
          {
              Textbox_Cell=['WinFormsObject("fdtClusterNumber")','WinFormsObject("fdtChannelIndex")']
              ModulePositionValues=["Cluster Number","Channel Index"]
              Value=["16","3"]
              Range=["24","4"]
              var sam=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
              var device_info=sam.FindChild(Array("Name","Visible"),Array('WinFormsObject("DeviceInfoControl")',true),5)
              var groupbox=device_info.FindChild(Array("WndCaption","Visible"),Array("Module Position",true),5)
              var textboxcell=groupbox.FindChild(Array("Name","Visible"),Array(Textbox_Cell[j],true),5)
              if(textboxcell["Exists"] == true)
              {
                  var text_box=textboxcell.FindChild(Array("Name","Visible"),Array('WinFormsObject("_textBox")',true),5)
                  text_box["SetText"](Value[j])
                  if(text_box["wText"]>=0 && text_box["wText"]<=Range[j])
                  {
                     Log.Checkpoint(ModulePositionValues[j]+ " is within the range")
                  }
                  else
                  {
                     Log.Error(ModulePositionValues[j]+ " is not within the range")
                  }
              }
              else
              {
                Log["Error"]("Textbox cell is not present")
              }
          }
       }
  }
}

function Validate_AuthenticationSettings_Fields()
{
  for(var i=0;i<2;i++)
  {
       DTMName=["< 192.168.1.200 > NTSAHI0412XH_DTM","< 192.168.1.200 > NTSAHO0212H_DTM"]
       WindowName=["NTSAHI0412XH_DTM - fdtConfiguration","NTSAHO0212H_DTM - fdtConfiguration"]
       var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
       if(objTemp["Exists"] == true)
       {
          //Code to select DTM from DTM browser
          var dtmName=objTemp.FindChild(Array("Text","Visible"),Array(DTMName[i],true),5)
          dtmName["DblClick"]();
           //Code to maximize the window
          var maximize_wnd=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
          maximize_wnd["Maximize"]();
          for(var j=0;j<2;j++)
          {
              Textbox_Cell=['WinFormsObject("fdtUserName")','WinFormsObject("fdtPassword")']
              RadioOption=["Anonymous","User Login"]
              ModulePositionValues=["Cluster Number","Channel Index"]
              ReadOnly=[true,false]
              checking=["disabled","enabled"]
              var sam=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
              var device_info=sam.FindChild(Array("Name","Visible"),Array('WinFormsObject("DeviceInfoControl")',true),5)
              var groupbox=device_info.FindChild(Array("WndCaption","Visible"),Array("Authentication Settings",true),5)
              var celloption=groupbox.FindChild(Array("Name","Visible"),Array('WinFormsObject("fdtAuthentication")',true),5)
              if(celloption["Exists"] == true)
              {
                 var text_box=celloption.FindChild(Array("WndCaption","Visible"),Array(RadioOption[j],true),5)
                 text_box.Click();
                 Delay(6000,"Waiting for clicking the button")
                 var value1=groupbox.FindChild(Array("Name","Visible"),Array(Textbox_Cell[j],true),5)
                 var val=value1.FindChild(Array("Name","Visible"),Array('WinFormsObject("_textBox")',true),5)
                 var a=val.FindChild(Array("ReadOnly","Visible"),Array(ReadOnly[j],true),5)
                 Log["Checkpoint"]("Text field is " +checking[j]) 
              }
              else
              {
                Log["Error"]("Textbox cell is not present")
              }
          }
       }
        sam["Close"]()
       }
}

function  Verify_NTSAHI0412XH_Colon()
{
   var objTemp = GetTestdata_DTMBrowser()
   if(objTemp["Exists"] == true)
   {
       var ObjTestdata = ReadJson("Configurations_TestData.json")
       var sample=ObjTestdata.DTM1.DTMFullName1
       var dtm_name=objTemp.FindChild("Text",sample,10);
       dtm_name.DblClick();
       //Code to maximize the window
       var max_wnd=ObjTestdata.DTM1.DTMName2
       var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
       maximize_wnd["Maximize"]();     
       if(aqString.Contains("Cluster Number:",":",0,true!=-1) && aqString.Contains("Channel Index:",":",0,true!=-1) && aqString.Contains("Message Security Mode:",":",0,true!=-1) && aqString.Contains("Security Policy:",":",0,true!=-1) && aqString.Contains("Username:",":",0,true!=-1) && aqString.Contains("Password:",":",0,true!=-1) && aqString.Contains("Endpoint Url:",":",0,true!=-1))
       {
         Log["Message"]("Colon is present");
       }
       else
      {
        Log["Error"]("Colon is not present");
      }
  }
}

function  Verify_NTSAHO0212H_Colon()
{
   var objTemp = GetTestdata_DTMBrowser()
   if(objTemp["Exists"] == true)
   {
       var ObjTestdata = ReadJson("Configurations_TestData.json")
       var sample=ObjTestdata.DTM2.DTMFullName1
       var dtm_name=objTemp.FindChild("Text",sample,10);
       dtm_name.DblClick();
       //Code to maximize the window
       var max_wnd=ObjTestdata.DTM2.DTMName2
       var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
       maximize_wnd["Maximize"]();     
       if(aqString.Contains("Cluster Number:",":",0,true!=-1) && aqString.Contains("Channel Index:",":",0,true!=-1) && aqString.Contains("Message Security Mode:",":",0,true!=-1) && aqString.Contains("Security Policy:",":",0,true!=-1) && aqString.Contains("Username:",":",0,true!=-1) && aqString.Contains("Password:",":",0,true!=-1) && aqString.Contains("Endpoint Url:",":",0,true!=-1))
       {
         Log["Message"]("Colon is present");
       }
       else
      {
        Log["Error"]("Colon is not present");
      }
  }
}
function Verify_Font_NTSAHI0412XH_Groupbox()
{
        var objTemp = GetTestdata_DTMBrowser()
        if(objTemp["Exists"] == true)
        {
            var ObjTestdata = ReadJson("Configurations_TestData.json")
            var sample=ObjTestdata.DTM1.DTMFullName1
            var dtm_name=objTemp.FindChild("Text",sample,10);
            dtm_name.DblClick();
            //Code to maximize the window
            var max_wnd=ObjTestdata.DTM1.DTMName2
            var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
            maximize_wnd["Maximize"]();
            var authenication_grpbox=GetGroupboxObj_AuthenticationSettings();
            var serverinfo_grpbox=GetGroupboxObj_ServerInformation();
            var securitysett_grpbox=GetGroupboxObj_SecuritySetting();
            var modulepos_grpbox=GetGroupboxObj_ModulePosition()
            if(authenication_grpbox["Font"]["Bold"] == true && serverinfo_grpbox["Font"]["Bold"] == true && securitysett_grpbox["Font"]["Bold"] == true && modulepos_grpbox["Font"]["Bold"] == true)
           {
              Log["Message"]("Text is bold for all group box");
           }
           else
           {
              Log["Error"]("Text is not bold for all group box");
           }
      }
}

function Verify_Font_NTSAHO0212H_Groupbox()
{
        var objTemp = GetTestdata_DTMBrowser()
        if(objTemp["Exists"] == true)
        {
            var ObjTestdata = ReadJson("Configurations_TestData.json")
            var sample=ObjTestdata.DTM2.DTMFullName1
            var dtm_name=objTemp.FindChild("Text",sample,10);
            dtm_name.DblClick();
            //Code to maximize the window
            var max_wnd=ObjTestdata.DTM2.DTMName2
            var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
            maximize_wnd["Maximize"]();
            var authenication_grpbox=GetGroupboxObj_AuthenticationSettings();
            var serverinfo_grpbox=GetGroupboxObj_ServerInformation();
            var securitysett_grpbox=GetGroupboxObj_SecuritySetting();
            var modulepos_grpbox=GetGroupboxObj_ModulePosition()
            if(authenication_grpbox["Font"]["Bold"] == true && serverinfo_grpbox["Font"]["Bold"] == true && securitysett_grpbox["Font"]["Bold"] == true && modulepos_grpbox["Font"]["Bold"] == true)
           {
              Log["Message"]("Text is bold for all group box");
           }
           else
           {
              Log["Error"]("Text is not bold for all group box");
           }
      }
}

function VerifySecuritySetting_MessageSecurityMode()
{
  for(var i=0;i<2;i++)
  {
       DTMName=["< 192.168.1.200 > NTSAHI0412XH_DTM","< 192.168.1.200 > NTSAHO0212H_DTM"]
       WindowName=["NTSAHI0412XH_DTM - fdtConfiguration","NTSAHO0212H_DTM - fdtConfiguration"]
       var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
       if(objTemp["Exists"] == true)
       {
          
          //Code to select DTM from DTM browser
          var dtmName=objTemp.FindChild(Array("Text","Visible"),Array(DTMName[i],true),5)
          dtmName["DblClick"]();
           //Code to maximize the window
          var maximize_wnd=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
          maximize_wnd["Maximize"]();
          for(var j=0;j<7;j++)
          {
              SecurityPolicy=["None","Basic128Rsa15","Basic128Rsa15","Basic256","Basic256","Basic256Sha256","Basic256Sha256"]
              MessageSecurityMode=["None","Sign","Sign and Encrypt","Sign","Sign and Encrypt","Sign","Sign and Encrypt"]
              var sam=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
              var device_info=sam.FindChild(Array("Name","Visible"),Array('WinFormsObject("DeviceInfoControl")',true),5)
              var groupbox=device_info.FindChild(Array("WndCaption","Visible"),Array("Security Settings",true),5)
              var a=groupbox.FindChild(Array("Name","Visible"),Array('WinFormsObject("_comboBox")',true),5)
              a["ClickItem"](SecurityPolicy[j]);
              var b=groupbox.FindChild(Array("Name","Visible"),Array('WinFormsObject("_comboBox")',true),5)
              var c=b.FindChild(Array("wItemList","Visible"),Array(MessageSecurityMode[j],true),5)
              if(aqString.Contains(MessageSecurityMode[j],MessageSecurityMode[j])!=-1)
              {
                  Log["Checkpoint"](MessageSecurityMode[j]+" options are selected for " +SecurityPolicy[j]);
              }
              else
              {
                  Log["Error"](MessageSecurityMode[j]+" options are not selected for " +SecurityPolicy[j]);
              }
          } 
    }
    sam["Close"]()
  }
}

function VerifyServerInformation_Textbox()
{
  for(var i=0;i<2;i++)
  {
       DTMName=["< 192.168.1.200 > NTSAHI0412XH_DTM","< 192.168.1.200 > NTSAHO0212H_DTM"]
       WindowName=["NTSAHI0412XH_DTM - fdtConfiguration","NTSAHO0212H_DTM - fdtConfiguration"]
       var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
       if(objTemp["Exists"] == true)
       {
          //Code to select DTM from DTM browser
          var dtmName=objTemp.FindChild(Array("Text","Visible"),Array(DTMName[i],true),5)
          dtmName["DblClick"]();
           //Code to maximize the window
          var maximize_wnd=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
          maximize_wnd["Maximize"]();
          var sam=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
          var device_info=sam.FindChild(Array("Name","Visible"),Array('WinFormsObject("DeviceInfoControl")',true),5)
          var groupbox=device_info.FindChild(Array("WndCaption","Visible"),Array("Server Information",true),5)
          var text_box=groupbox.FindChild(Array("Name","Visible"),Array('WinFormsObject("_textBox")',true),5)
          if(text_box["Exists"] == true)
          {
            Log["Checkpoint"]("Text control is present in Server information");
          }
          else
          {
            Log["Error"]("Text control is not present in Server information");
          }  
                
       }
   sam["Close"]()
  }
}

function ServerInformation_VerifyEndURL(URLvalue,IPAddress)
{
  for(var i=0;i<2;i++)
  {
       DTMName=["< 192.168.1.200 > NTSAHI0412XH_DTM","< 192.168.1.200 > NTSAHO0212H_DTM"]
       WindowName=["NTSAHI0412XH_DTM - fdtConfiguration","NTSAHO0212H_DTM - fdtConfiguration"]
       var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
       if(objTemp["Exists"] == true)
       {
          //Code to select DTM from DTM browser
          var dtmName=objTemp.FindChild(Array("Text","Visible"),Array(DTMName[i],true),5)
          dtmName["DblClick"]();
           //Code to maximize the window
          var maximize_wnd=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
          maximize_wnd["Maximize"]();
          var sam=Sys.FindChild(Array("WndCaption","Visible"),Array(WindowName[i],true),5)
          var device_info=sam.FindChild(Array("Name","Visible"),Array('WinFormsObject("DeviceInfoControl")',true),5)
          var groupbox=device_info.FindChild(Array("WndCaption","Visible"),Array("Server Information",true),5)
          var text_box=groupbox.FindChild(Array("Name","Visible"),Array('WinFormsObject("_textBox")',true),5)
          if(text_box["Exists"] == true)
          {
              Log["Checkpoint"]("Text control is present in Server information");
              text_box["SetText"](URLvalue)
              var apply=sam.FindChild(Array("WndCaption","Visible"),Array("Apply",true),5)
              apply["Click"]();
            
              var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
              if(objTemp["Exists"] == true)
              {
                  var dtmName=objTemp.FindChild(Array("Text","Visible"),Array(IPAddress,true),5)
                  if(dtmName["Exists"] == true)
                  {  
                     actualResult =IPAddress+ " exists in DTM Browser";
                     Log["Checkpoint"](actualResult);
                  }
                  else
                  {  
                      actualResult = IPAddress+ " does not exists in DTM Browser";
                      Log["Error"](actualResult);
                  }
             }
        }
        else
        {
            Log["Error"]("Text control is not present in Server information");
        }          
    }
    sam["Close"]()
  }
}

function NTSAHI0412XH_SecuritySettings_AuthenticationSettings_ImageVerify()
{
    var objTemp = GetTestdata_DTMBrowser()
    if(objTemp["Exists"] == true)
    {
        var ObjTestdata = ReadJson("Configurations_TestData.json")
        var sample=ObjTestdata.DTM1.DTMFullName1
        var dtm_name=objTemp.FindChild("Text",sample,10);
        dtm_name.DblClick();
        //Code to maximize the window
        var max_wnd=ObjTestdata.DTM1.DTMName2
        var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
        maximize_wnd["Maximize"]();
        var auth_grpbox=GetGroupboxObj_AuthenticationSettings();
        var security_grpbox=GetGroupboxObj_SecuritySetting();
         var actualPic1 = security_grpbox["Picture"]();
          var actualPic2 = auth_grpbox["Picture"]();
         var expectedPic1 = Regions.GetPicture("Security Settings");
         var result1 = Regions["FindRegion"](expectedPic1, actualPic1, 0, 0, false, false, 50);
         var expectedPic2 = Regions.GetPicture("Authentication Settings");
         var result2 = Regions["FindRegion"](expectedPic2, actualPic2, 0, 0, false, false, 50);
         if(result1 != null && result2!=null )
         {
            Log["Message"]("Both Security Settings and  Authentication Settings is in right side");
         }
         else
         {
            Log["Error"]("Both Security Settings and  Authentication Settings is not in right side");
         }
     }
}

function NTSAHO0212H_SecuritySettings_AuthenticationSettings_ImageVerify()
{
    var objTemp = GetTestdata_DTMBrowser()
    if(objTemp["Exists"] == true)
    {
        var ObjTestdata = ReadJson("Configurations_TestData.json")
        var sample=ObjTestdata.DTM2.DTMFullName1
        var dtm_name=objTemp.FindChild("Text",sample,10);
        dtm_name.DblClick();
        //Code to maximize the window
        var max_wnd=ObjTestdata.DTM2.DTMName2
        var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
        maximize_wnd["Maximize"]();
        var auth_grpbox=GetGroupboxObj_AuthenticationSettings();
        var security_grpbox=GetGroupboxObj_SecuritySetting();
           var actualPic1 = security_grpbox["Picture"]();
            var actualPic2 = auth_grpbox["Picture"]();
           var expectedPic1 = Regions.GetPicture("Security Settings");
           var result1 = Regions["FindRegion"](expectedPic1, actualPic1, 0, 0, false, false, 50);
           var expectedPic2 = Regions.GetPicture("Authentication Settings");
           var result2 = Regions["FindRegion"](expectedPic2, actualPic2, 0, 0, false, false, 50);
           if(result1 != null && result2!=null )
           {
              Log["Message"]("Both Security Settings and  Authentication Settings is in right side");
           }
           else
           {
              Log["Error"]("Both Security Settings and  Authentication Settings is not in right side");
           }
     }
}

function NTSAHI0412XH_ModulePositionGroupbox_fieldvalidation(channelindexvalue,clusternumbervalue)
{
     var channel_index=GetModulePosition_ChannelIndex();
     var cluster_num=GetModulePosition_ClusterNumber();
     var objTemp = GetTestdata_DTMBrowser()
     if(objTemp["Exists"] == true)
     {
          //Code to select DTM from DTM browser
          var dtmName= GetTestdata_DTMBrowser()
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var sample=ObjTestdata.DTM1.DTMFullName1
          var dtm_name=dtmName.FindChild("Text",sample,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM1.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
       if(channel_index!="" || channel_index!=undefined || channel_index!=null)
       {
            var channelindex_textbox=GetModulePosition_ChannelIndex_Textbox()
            if(channelindex_textbox["Exists"] == true)
            {
                Log["Checkpoint"]("Textbox is present for channelindex")
                channelindex_textbox["SetText"](channelindexvalue)
                if(channelindex_textbox["wText"]>=0 && channelindex_textbox["wText"]<=4)
                {
                    Log.Message("ChannelIndex field is within the range")
                }
                else
                {
                     var channel_index=GetModulePosition_ChannelIndex();
                     var log_error=channel_index.FindChild(Array("State_2","StateMessage"),Array("Invalid","Range is 0 ~ 4."),5)
                     var ok_btn=GetActionArea_OKBtn_Obj()
                     var apply_btn=GetActionArea_ApplyBtn_Obj()
                     if(log_error["Exists"] == true && ok_btn["Enabled"] == false && apply_btn["Enabled"]==false )
                     {
                          Log.Message("ChannelIndex field is not within the range")
                     }
                     else
                     {
                          Log.Error("ChannelIndex field is not within the range without proper message or OK or Apply button is enabled")
                     }
                }
          }
      }
      else
      {
           Log["Error"]("Textbox is not present for channelindex")
      }
   
   if(cluster_num!="" || cluster_num!=undefined || cluster_num!=null)
   {
        var clusternum_textbox=GetModulePosition_ClusterNumber_Textbox()
        if(clusternum_textbox["Exists"] == true)
        {
            Log["Checkpoint"]("Textbox is present for clusternumber")
            clusternum_textbox["SetText"](clusternumbervalue)
            if(clusternum_textbox["wText"]>=0 && clusternum_textbox["wText"]<=24)
            {
               Log.Message("ClusterNumber field is within the range")
            }
            else
           {
               var cluster_num=GetModulePosition_ClusterNumber();
               var log_error1=cluster_num.FindChild(Array("State_2","StateMessage"),Array("Invalid","Range is 0 ~ 24."),5)
              var ok_btn=GetActionArea_OKBtn_Obj()
               var apply_btn=GetActionArea_ApplyBtn_Obj()
               if(log_error1["Exists"] == true && ok_btn["Enabled"] == false && apply_btn["Enabled"]==false)
               {
                    Log.Message("ClusterNumber field is not within the range")
               }
               else
               {
                    Log.Error("Cluster Number field is not within the range without proper message or OK or Apply button is enabled")
               }
           }
        }
        else
        {
          Log["Error"]("Textbox is not present for clusternumber")
        }    
     }  
   }
   else
   {
     Log["Error"]("Configuration window does not exists")
   }
}

function NTSAHO0212H_ModulePositionGroupbox_fieldvalidation(channelindexvalue,clusternumbervalue)
{
     var channel_index=GetModulePosition_ChannelIndex();
     var cluster_num=GetModulePosition_ClusterNumber();
     var objTemp = GetTestdata_DTMBrowser()
     if(objTemp["Exists"] == true)
     {
          //Code to select DTM from DTM browser
          var dtmName= GetTestdata_DTMBrowser()
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var sample=ObjTestdata.DTM2.DTMFullName1
          var dtm_name=dtmName.FindChild("Text",sample,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM2.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
       if(channel_index!="" || channel_index!=undefined || channel_index!=null)
       {
            var channelindex_textbox=GetModulePosition_ChannelIndex_Textbox()
            if(channelindex_textbox["Exists"] == true)
            {
                Log["Checkpoint"]("Textbox is present for channelindex")
                channelindex_textbox["SetText"](channelindexvalue)
                if(channelindex_textbox["wText"]>=0 && channelindex_textbox["wText"]<=4)
                {
                    Log.Message("ChannelIndex field is within the range")
                }
                else
                {
                     var channel_index=GetModulePosition_ChannelIndex();
                     var log_error=channel_index.FindChild(Array("State_2","StateMessage"),Array("Invalid","Range is 0 ~ 4."),5)
                     var ok_btn=GetActionArea_OKBtn_Obj()
                     var apply_btn=GetActionArea_ApplyBtn_Obj()
                     if(log_error["Exists"] == true && ok_btn["Enabled"] == false && apply_btn["Enabled"]==false )
                     {
                          Log.Message("ChannelIndex field is not within the range")
                     }
                     else
                     {
                          Log.Error("ChannelIndex field is not within the range without proper message or OK or Apply button is enabled")
                     }
                }
          }
      }
      else
      {
           Log["Error"]("Textbox is not present for channelindex")
      }
   
   if(cluster_num!="" || cluster_num!=undefined || cluster_num!=null)
   {
        var clusternum_textbox=GetModulePosition_ClusterNumber_Textbox()
        if(clusternum_textbox["Exists"] == true)
        {
            Log["Checkpoint"]("Textbox is present for clusternumber")
            clusternum_textbox["SetText"](clusternumbervalue)
            if(clusternum_textbox["wText"]>=0 && clusternum_textbox["wText"]<=24)
            {
               Log.Message("ClusterNumber field is within the range")
            }
            else
           {
               var cluster_num=GetModulePosition_ClusterNumber();
               var log_error1=cluster_num.FindChild(Array("State_2","StateMessage"),Array("Invalid","Range is 0 ~ 24."),5)
              var ok_btn=GetActionArea_OKBtn_Obj()
               var apply_btn=GetActionArea_ApplyBtn_Obj()
               if(log_error1["Exists"] == true && ok_btn["Enabled"] == false && apply_btn["Enabled"]==false)
               {
                    Log.Message("ClusterNumber field is not within the range")
               }
               else
               {
                    Log.Error("Cluster Number field is not within the range without proper message or OK or Apply button is enabled")
               }
           }
        }
        else
        {
          Log["Error"]("Textbox is not present for clusternumber")
        }    
     }  
   }
   else
   {
     Log["Error"]("Configuration window does not exists")
   }
}

function NTSAHI0412XH_AuthenticationSetting_Groupbox()
{
   try
   {
     var user_name=GetAuthenticationSettings_UserName();
     var password=GetAuthenticationSettings_Password();
     var authentication=GetAuthenticationSettings_Authentication();
     var objTemp = GetTestdata_DTMBrowser()
     if(objTemp["Exists"] == true)
     {
          //Code to select DTM from DTM browser
          var dtmName= GetTestdata_DTMBrowser()
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var sample=ObjTestdata.DTM1.DTMFullName1
          var dtm_name=dtmName.FindChild("Text",sample,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM1.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
          if(authentication!="" || authentication!=undefined || authentication!=null)
          {
                var user_name_textbox=GetAuthenticationSettings_UserName_Textbox()
                var password_textbox=GetAuthenticationSettings_Password_Textbox()
                var anonymous=GetAuthenticationSettings_Authentication_Anonymous()
                var userlogin=GetAuthenticationSettings_Authentication_Userlogin()
                anonymous.Click();
                if(user_name_textbox["Exists"] == true && password_textbox["Exists"] == true)
                {
                  Log.Message(" Both username and password textbox exists ")
            
                if(user_name_textbox["ReadOnly"] == true && password_textbox["ReadOnly"] == true)
                {
                    Log.Message("Textboxes of username and password is in read only")
                }
                var userlogin=GetAuthenticationSettings_Authentication_Userlogin()
                userlogin.Click();
                if(user_name_textbox["ReadOnly"] == false && password_textbox["ReadOnly"] == false)
                {
                    Log.Message("Textboxes of username and password is in editable state")
                }
          }
          else
          {
            Log.Error("Both username and password textbox does not exists")
          }
      }     
    }
    else
    {
      Log["Error"]("Configuration window does not exists")
    }
   }
   catch(Ex)
   {
       Log["Error"]("Expection in the function GetObjectProperties_FromJSON "+Ex.message)
   }  
}

function NTSAHO0212H_AuthenticationSetting_Groupbox()
{
   try
   {
     var user_name=GetAuthenticationSettings_UserName();
     var password=GetAuthenticationSettings_Password();
     var authentication=GetAuthenticationSettings_Authentication();
     var objTemp = GetTestdata_DTMBrowser()
     if(objTemp["Exists"] == true)
     {
          //Code to select DTM from DTM browser
          var dtmName= GetTestdata_DTMBrowser()
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var sample=ObjTestdata.DTM2.DTMFullName1
          var dtm_name=dtmName.FindChild("Text",sample,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM2.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
          if(authentication!="" || authentication!=undefined || authentication!=null)
          {
                var user_name_textbox=GetAuthenticationSettings_UserName_Textbox()
                var password_textbox=GetAuthenticationSettings_Password_Textbox()
                var anonymous=GetAuthenticationSettings_Authentication_Anonymous()
                var userlogin=GetAuthenticationSettings_Authentication_Userlogin()
                anonymous.Click();
                if(user_name_textbox["Exists"] == true && password_textbox["Exists"] == true)
                {
                  Log.Message(" Both username and password textbox exists ")
            
                if(user_name_textbox["ReadOnly"] == true && password_textbox["ReadOnly"] == true)
                {
                    Log.Message("Textboxes of username and password is in read only")
                }
                var userlogin=GetAuthenticationSettings_Authentication_Userlogin()
                userlogin.Click();
                if(user_name_textbox["ReadOnly"] == false && password_textbox["ReadOnly"] == false)
                {
                    Log.Message("Textboxes of username and password is in editable state")
                }
          }
          else
          {
            Log.Error("Both username and password textbox does not exists")
          }
      }     
    }
    else
    {
      Log["Error"]("Configuration window does not exists")
    }
   }
   catch(Ex)
   {
       Log["Error"]("Expection in the function GetObjectProperties_FromJSON "+Ex.message)
   }  
}

function ServerInformation_Groupbox()
{
   var endpoint_url=GetServerInformation_EndpointURL();
   var objTemp = Sys.FindChild(Array("WndCaption","Visible"),Array("DTM Browser",true),5)
   if(objTemp["Exists"] == true)
   {
       //Code to select DTM from DTM browser
       var dtmName=objTemp.FindChild(Array("Text","Visible"),Array("< 192.168.1.200 > NTSAHI0412XH_DTM",true),5)
       dtmName.DblClick();
       //Code to maximize the window
       var maximize_wnd=Sys.FindChild(Array("WndCaption","Visible"),Array("NTSAHI0412XH_DTM - fdtConfiguration",true),5)
       maximize_wnd["Maximize"]();
       if(endpoint_url!="" || endpoint_url!=undefined || endpoint_url!=null)
       {
          var endpointurl_txtbox=GetServerInformation_EndpointURL_Textbox();
          if(endpointurl_txtbox["Exists"] == true)
          {
              Log.Message("endpointurl textbox exists")
              
              
          }
          else
          {
            Log.Error("endpointurl textbox does not exists")
          }
       }
   }
   else
   {
      Log["Error"]("Configuration window does not exists")
   }
}

function NTSAHI0412XH_SecuritySetting_Groupbox(policyValue1,policyValue2,policyValue3)
{
   var security_policy=GetSecuritySetting_SecurityPolicy();
   var messagesecuritymode=GetSecuritySetting_SecurityMode()
   var objTemp = GetTestdata_DTMBrowser()
     if(objTemp["Exists"] == true)
     {
          //Code to select DTM from DTM browser
          var dtmName= GetTestdata_DTMBrowser()
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var sample=ObjTestdata.DTM1.DTMFullName1
          var dtm_name=dtmName.FindChild("Text",sample,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM1.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
       if(security_policy!="" || security_policy!=undefined || security_policy!=null || messagesecuritymode!="" || messagesecuritymode!=undefined || messagesecuritymode!=null)
       {
          var securitypolicy_combobox=GetSecuritySetting_SecurityPolicy_Combobox()
          var securitymode_combobox=GetSecuritySetting_SecurityMode_Combobox()
          if(securitypolicy_combobox["Exists"] == true && securitymode_combobox["Exists"] == true)
          {
              Log.Message("security policy combobox and security mode combobox exists")
              securitypolicy_combobox["ClickItem"](policyValue1);
              if(securitymode_combobox["wItemList"]=="Sign","Sign and Encrypt")
              {
                 Log.Message("Item for Basic128Rsa15 has a option Sign,Sign and Encrypt to select")
              }
              else
              {
                 Log.Error("Item for Basic128Rsa15 not have a option Sign,Sign and Encrypt to select")
              }
              securitypolicy_combobox["ClickItem"](policyValue2);
              if(securitymode_combobox["wItemList"]=="Sign","Sign and Encrypt")
              {
                 Log.Message("Item for Basic256 has a option Sign,Sign and Encrypt to select")
              }
              else
              {
                 Log.Error("Item for Basic256 not have a option Sign,Sign and Encrypt to select")
              }
              securitypolicy_combobox["ClickItem"](policyValue3);
              if(securitymode_combobox["wItemList"]=="Sign","Sign and Encrypt")
              {
                 Log.Message("Item for Basic256Sha256 has a option Sign,Sign and Encrypt to select")
              }
              else
              {
                 Log.Error("Item for Basic256Sha256 not have a option Sign,Sign and Encrypt to select")
              }
          }
          else
          {
             Log.Error("security policy combobox and security mode combobox does not exists")
          }
          
       }
   }
  else
 {
    Log["Error"]("Configuration window does not exists")
 }
}

function NTSAHO0212H_SecuritySetting_Groupbox(policyValue1,policyValue2,policyValue3)
{
     var security_policy=GetSecuritySetting_SecurityPolicy();
     var messagesecuritymode=GetSecuritySetting_SecurityMode()
     var objTemp = GetTestdata_DTMBrowser()
     if(objTemp["Exists"] == true)
     {
          //Code to select DTM from DTM browser
          var dtmName= GetTestdata_DTMBrowser()
          var ObjTestdata = ReadJson("Configurations_TestData.json")
          var sample=ObjTestdata.DTM2.DTMFullName1
          var dtm_name=dtmName.FindChild("Text",sample,10);
          dtm_name.DblClick();
          //Code to maximize the window
          var max_wnd=ObjTestdata.DTM2.DTMName2
          var maximize_wnd=Sys.FindChild("WndCaption",max_wnd,10);
          maximize_wnd["Maximize"]();
       if(security_policy!="" || security_policy!=undefined || security_policy!=null || messagesecuritymode!="" || messagesecuritymode!=undefined || messagesecuritymode!=null)
       {
          var securitypolicy_combobox=GetSecuritySetting_SecurityPolicy_Combobox()
          var securitymode_combobox=GetSecuritySetting_SecurityMode_Combobox()
          if(securitypolicy_combobox["Exists"] == true && securitymode_combobox["Exists"] == true)
          {
              Log.Message("security policy combobox and security mode combobox exists")
              securitypolicy_combobox["ClickItem"](policyValue1);
              if(securitymode_combobox["wItemList"]=="Sign","Sign and Encrypt")
              {
                 Log.Message("Item for Basic128Rsa15 has a option Sign,Sign and Encrypt to select")
              }
              else
              {
                 Log.Error("Item for Basic128Rsa15 not have a option Sign,Sign and Encrypt to select")
              }
              securitypolicy_combobox["ClickItem"](policyValue2);
              if(securitymode_combobox["wItemList"]=="Sign","Sign and Encrypt")
              {
                 Log.Message("Item for Basic256 has a option Sign,Sign and Encrypt to select")
              }
              else
              {
                 Log.Error("Item for Basic256 not have a option Sign,Sign and Encrypt to select")
              }
              securitypolicy_combobox["ClickItem"](policyValue3);
              if(securitymode_combobox["wItemList"]=="Sign","Sign and Encrypt")
              {
                 Log.Message("Item for Basic256Sha256 has a option Sign,Sign and Encrypt to select")
              }
              else
              {
                 Log.Error("Item for Basic256Sha256 not have a option Sign,Sign and Encrypt to select")
              }
          }
          else
          {
             Log.Error("security policy combobox and security mode combobox does not exists")
          } 
       }
   }
  else
 {
    Log["Error"]("Configuration window does not exists")
 }
}