//USEUNIT Common_Function
//USEUNIT DataBase_Related
//USEUNIT ObjectFiles
//USEUNIT OPCUA_FDTCONFIGURATION_PAGE
function T()
{
    //Verify_SecurityMode("OPCUAOFFLINEPROJECT","|Host PC","Add...")
    Verify_Securitysettings_Authenticationsetting_Rightside("OPCUAOFFLINEPROJECT","|Host PC","Add...")
   // Verify_EndpointURL_ServerInformation("OPCUAOFFLINEPROJECT","|Host PC","Add...","opc.tcp://192.168.1.453:4840","")
}

//Testcase to verify groupbox in UI
function Verify_Groupbox_UI(strSTUProjName,HostPC,Option1)
{
      //function to open CE and project
      OPCUA_OpenCE_OpenProject(strSTUProjName);
     //function to NTSAHI0412XH DTM in DTM browser
      Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
       //function to NTSAHO0212HDTM DTM in DTM browser
      Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
      //function to verify 4 group box in UI
      Verify_NTSAHI0412XH_Groupbox()
      //function to close the opened DTMs
      Close_NTSAHI0412XH_DTMWindow()
      ExplicitDelay(5000, "Wait until window of NTSAHI0412XH DTM is displayed");
      //function to verify 4 group box in UI
       Verify_NTSAHO0212H_Groupbox()
      //function to close the opened DTMs
      Close_NTSAHO0212H_DTMWindow()
      //function to close the project
      Close_Project();
}

//Testcase to Verify security Mode in Security settings
function Verify_SecurityMode_SecuritySettings(strSTUProjName,HostPC,Option1,policyValue1,policyValue2,policyValue3)
{
      //function to open CE and project
      OPCUA_OpenCE_OpenProject(strSTUProjName);
      //function to NTSAHI0412XH DTM in DTM browser
      Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
       //function to NTSAHO0212HDTM DTM in DTM browser
      Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
      //function to verify combobox in Security tab of NTSAHI0412XH DTM
      NTSAHI0412XH_SecuritySetting_Groupbox(policyValue1,policyValue2,policyValue3)
      //function to close the opened DTMs
      Close_NTSAHI0412XH_DTMWindow()
      ExplicitDelay(5000, "Wait until window of NTSAHI0412XH DTM is displayed");
      //function to verify combobox in Security tab of NTSAHO0212H DTM
      NTSAHO0212H_SecuritySetting_Groupbox(policyValue1,policyValue2,policyValue3)
      //function to close the opened DTMs
      Close_NTSAHO0212H_DTMWindow()
      //function to close the project
      Close_Project();
}

//Testcase to Verify 2 Text fields are added in the Module position
function Verify_TextBoxes_ModulePosition(strSTUProjName,HostPC,Option1)
{
      //function to open CE and project
      OPCUA_OpenCE_OpenProject(strSTUProjName);
      //function to NTSAHI0412XH DTM in DTM browser
      Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
      //function to NTSAHO0212HDTM DTM in DTM browser
      Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
      //function to verify Text fields in Module position for NTSAHI0412XH DTM
      Verify_NTSAHI0412XH_ModulePosition_TextBoxes()
      //function to close the opened DTMs
      Close_NTSAHI0412XH_DTMWindow()
      ExplicitDelay(5000, "Wait until window of NTSAHI0412XH DTM is displayed");
      //function to verify Text fields in Module position for NTSAHO0212H DTM
     Verify_NTSAHO0212H_ModulePosition_TextBoxes()
      //function to close the opened DTMs
      Close_NTSAHO0212H_DTMWindow()
      //function to close the project
      Close_Project();
}

//Testcase to Verify 2 comboBox fields are added in the Security Settings
function Verify_ComboBoxes_SecuritySetting(strSTUProjName,HostPC,Option1)
{
      //function to open CE and project
      OPCUA_OpenCE_OpenProject(strSTUProjName);
      //function to NTSAHI0412XH DTM in DTM browser
      Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
      //function to NTSAHO0212HDTM DTM in DTM browser
      Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
      //function to verify combobox fields in security setting for NTSAHI0412XH DTM
      Verify_NTSAHI0412XH_SecuritySetting_ComboBoxes()
      //function to close the opened DTMs
      Close_NTSAHI0412XH_DTMWindow()
      ExplicitDelay(5000, "Wait until window of NTSAHI0412XH DTM is displayed");
      //function to verify combobox fields in security setting for NTSAHO0212H DTM
      Verify_NTSAHO0212H_SecuritySetting_ComboBoxes()
      //function to close the opened DTMs
      Close_NTSAHO0212H_DTMWindow()
      //function to close the project
      Close_Project();
}

//Testcase to verify clusternumber and channelindex field
function Verify_ClusterNumber_ChannelIndex(strSTUProjName,HostPC,Option1,channelindexvalue,clusternumbervalue)
{
     //function to open CE and project
     OPCUA_OpenCE_OpenProject(strSTUProjName);
     //function to NTSAHI0412XH DTM in DTM browser
     Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
     //function to NTSAHO0212HDTM DTM in DTM browser
     Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
     ExplicitDelay(10000, "Wait until window of NTSAHI0412XH DTM is displayed");
     //function to validate clusternumber and channelindex field for NTSAHI0412XH
     NTSAHI0412XH_ModulePositionGroupbox_fieldvalidation(channelindexvalue,clusternumbervalue)
     //function to close the opened DTMs
      Close_NTSAHI0412XH_DTMWindow()
     //function to validate clusternumber and channelindex field for NTSAHO0212H
    NTSAHO0212H_ModulePositionGroupbox_fieldvalidation(channelindexvalue,clusternumbervalue)
     //function to close the opened DTMs
      Close_NTSAHO0212H_DTMWindow()
      //function to close the project
      Close_Project();
}

//Testcase to validate text enabling while selecting radiobutton
function Verify_AuthenticationSettings(strSTUProjName,HostPC,Option1)
{
     //function to open CE and project
     OPCUA_OpenCE_OpenProject(strSTUProjName);
     //function to NTSAHI0412XH DTM in DTM browser
     Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
     //function to NTSAHO0212HDTM DTM in DTM browser
     Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
     //function to validate text enabling while selecting radiobutton for NTSAHI0412XH DTM
     NTSAHI0412XH_AuthenticationSetting_Groupbox()
     ExplicitDelay(10000, "Wait until window of NTSAHI0412XH DTM is displayed");
     //function to close the opened DTMs
      Close_NTSAHI0412XH_DTMWindow()
      //function to validate text enabling while selecting radiobutton for NTSAHO0212H DTM
     NTSAHO0212H_AuthenticationSetting_Groupbox()
    //function to close the opened DTMs
      Close_NTSAHO0212H_DTMWindow()
      //function to close the project
      Close_Project();
}

//Testcase to verify colon for all labels
function Verify_Labels_Colon(strSTUProjName,HostPC,Option1)
{
     //function to open CE and project
     OPCUA_OpenCE_OpenProject(strSTUProjName);
   //function to NTSAHI0412XH DTM in DTM browser
     Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
     //function to NTSAHO0212HDTM DTM in DTM browser
     Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
      Verify_NTSAHI0412XH_Colon()
      ExplicitDelay(10000, "Wait until window of NTSAHI0412XH DTM is displayed");
     //function to close the opened DTMs
      Close_NTSAHI0412XH_DTMWindow()
     //function to verify colon 
     Verify_NTSAHO0212H_Colon()
     //function to close the opened DTMs
      Close_NTSAHO0212H_DTMWindow()
      //function to close the project
      Close_Project();
}

//Testcase to verify groupbox font is bold
function Verify_GroupboxTitle_Font(strSTUProjName,HostPC,Option1)
{
     //function to open CE and project
     OPCUA_OpenCE_OpenProject(strSTUProjName);
     //function to NTSAHI0412XH DTM in DTM browser
     Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
     //function to NTSAHO0212HDTM DTM in DTM browser
     Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
     //function to verify groupbox font is bold for NTSAHI0412XH DTM
     Verify_Font_NTSAHI0412XH_Groupbox()
     ExplicitDelay(10000, "Wait until window of NTSAHI0412XH DTM is displayed");
     //function to close the opened DTMs
     Close_NTSAHI0412XH_DTMWindow()
     //function to verify groupbox font is bold for NTSAHI0412XH DTM
     Verify_Font_NTSAHO0212H_Groupbox()
     //function to close the opened DTMs
     Close_NTSAHO0212H_DTMWindow()
     //function to close the project
     Close_Project();
}

//Testcase to verify security code
function Verify_SecurityMode(strSTUProjName,HostPC,Option1)
{
     //function to open CE and project
     OPCUA_OpenCE_OpenProject(strSTUProjName);
     //function to DTM in DTM browser
     AddDTM_DTMBrowser(HostPC,Option1);
     //function to verify security code
     VerifySecurityMode()
     //function to close the project
     Close_Project()         
}

//to be update the testcase
function Verify_Textcontrol_ServerInformation(strSTUProjName,HostPC,Option1)
{
     //function to open CE and project
     OPCUA_OpenCE_OpenProject(strSTUProjName);
     //function to DTM in DTM browser
     AddDTM_DTMBrowser(HostPC,Option1);
     
     //function to close the project
     Close_Project()  
  
}

//Testcase to verify fields exists in right side
function Verify_Securitysettings_Authenticationsetting_Rightside(strSTUProjName,HostPC,Option1)
{
     //function to open CE and project
     OPCUA_OpenCE_OpenProject(strSTUProjName);
     //function to NTSAHI0412XH DTM in DTM browser
     Add_NTSAHI0412XHDTM_DTMBrowser(HostPC,Option1)
     //function to NTSAHO0212HDTM DTM in DTM browser
     Add_NTSAHO0212HDTM_DTMBrowser(HostPC,Option1)
     //function to verify image for NTSAHI0412XH DTM
     NTSAHI0412XH_SecuritySettings_AuthenticationSettings_ImageVerify() 
     ExplicitDelay(10000, "Wait until window of NTSAHI0412XH DTM is displayed");
     //function to close the opened DTMs
     Close_NTSAHI0412XH_DTMWindow()
     //function to verify image for NTSAHO0212H DTM
     NTSAHO0212H_SecuritySettings_AuthenticationSettings_ImageVerify() 
     //function to close the opened DTMs
     Close_NTSAHO0212H_DTMWindow()
     //function to close the project
     Close_Project();
}

//Testcase to verify Endpoint URL added
function Verify_EndpointURL_ServerInformation(strSTUProjName,HostPC,Option1,URLvalue,IPAddress)
{
   //function to open CE and project
   OPCUA_OpenCE_OpenProject(strSTUProjName);
   //function to DTM in DTM browser
   AddDTM_DTMBrowser(HostPC,Option1);
   //function to verify endpoint
   VerifyEndURL(URLvalue,IPAddress)
   //function to close the project
   Close_Project()  
}

