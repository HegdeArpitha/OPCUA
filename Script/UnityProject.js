﻿

var objParent = null, objChild = null;

function GetNewProjectProcessPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_NewProject_ProcessPopup");
    }
    return objChild;
}

function GetNewProjectProcessNOButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetNewProjectProcessPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "NewProjectWindow", "Obj_NewProject_ProcessPopup_NoButton");
    }
    return objChild;
}

function GetNewProjectWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_NewProject_Window");
    }
    return objChild;
}

function GetCPUConfigurationWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ConfigWindow","CPUWindow");
    }
    return objChild;
}

function GetNewProjectWindowPLCListviewObject()
{
    objChild = null; objParent = null; 
    objParent = GetNewProjectWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_NewProjectWindow_PLCListview");
    }
    return objChild;
}

function GetNewProjectWindowSelectAllChkboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNewProjectWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_NewProjectWindow_SelectAll_Chkbox");
    }
    return objChild;
}

function GetNewProjectWindowRackListviewObject()
{
    objChild = null; objParent = null; 
    objParent = GetNewProjectWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_NewProjectWindow_RackListview");
    }
    return objChild;
}

function GetNewProjectWindowOKButtonObject()
{
    objParent = GetNewProjectWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_OK_Button");
    }
    return objChild;
}

function GetSaveAsWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_SaveAs_Window");
    }
    return objChild;
}

function GetExportProjectWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_Export_Project_Window");
    }
    return objChild;
}

function GetSaveAsWindowSaveButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetSaveAsWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_SaveAs_SaveButton");
    }
    return objChild;
}

function GetExportWindowExportButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetExportProjectWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_ExportWnd_ExportButton");
    }
    return objChild;
}

function GetOpenWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_Open_Window");
    }
    return objChild;
}

function GetOpenWindowOpenButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetOpenWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "OpenWindow", "Obj_Open_OpenButton");
    }
    return objChild;
}

function GetOpenWindowFileTypesComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetOpenWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "OpenWindow", "Obj_Open_FileTypes_Combobox");
    }
    return objChild;
}

function GetSaveConfirmWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_ProcessPopup_ConfirmWnd");
    }
    return objChild;
}

function GetCloseConfirmWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "CloseWindow", "Obj_ProcessPopup_ConfirmCloseWnd");
    }
    return objChild;
}

function GetProcessWndYesButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetSaveConfirmWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_ProcessPopup_YesButton");
    }
    return objChild;
}

function GetProcessWndNoButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetSaveConfirmWndObject();
    if(objParent == null)
    {
        objParent = GetCloseConfirmWndObject();
    }
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_ProcessPopup_NoButton");
    }
    return objChild;
}

function GetSaveProjectProcessPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_SaveAs_SaveButton");
    }
    return objChild;
}

function GetExportProjectProcessPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_ExportWnd_ExportButton");
    }
    return objChild;
}

function GetDTMHardwareCatalogWnd()
{
    objChild = null; objParent = null;
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_DTMHardwareCatalog_Wnd");
    }
    return objChild;
}
function GetTypeLibraryManageWnd()
{
    objChild = null; objParent = null;
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_TypeLibraryManage_Wnd");
    }
    return objChild;
}
function GetDTMCatalogList()
{
    objChild = null; objParent = null; 
    objParent = GetDTMHardwareCatalogWnd();
    if(objParent != null)
    {
        objParent = GetRecognitionObject(objParent, "HardwareCatalog", "Obj_DTMHardwareCatalog_ListContainer");
        if(objParent != null)
        {
            objChild = GetRecognitionObject(objParent, "HardwareCatalog", "Obj_DTMHardwareCatalog_Listview");
        }
    }
    return objChild;
}

function GetDTMCatalogUpdateProgressWnd()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "HardwareCatalog", "Obj_Catalog_Update_Progress_Wnd");
    }
    return objChild;
}

function GetDTMCatalogUpdateButton()
{
    objChild = null; objParent = null; 
    objParent = GetDTMHardwareCatalogWnd();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "HardwareCatalog", "Obj_Catalog_Update_Button");
    }
    return objChild;
}

function GetPLCModuleConfigurationWindow(strPLCModule)
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = objParent["FindChild"](["Name","VisibleOnScreen"],["[\"Window\"](\"*\",\""+strPLCModule+"*\",*)",true],10);
        if(objChild["Exists"] == false)
        {
            objChild = objParent["FindChild"](["Name","VisibleOnScreen"],["[\"Window\"](\"*\",\"*"+strPLCModule+"*\",*)",true],10);
        }
        if(objChild["Exists"] == false)
        {
            objChild = objParent["FindChild"](["Name","VisibleOnScreen"],["[\"Window\"](\"Afx:*\",\"*"+strPLCModule+"*\",*)",true],10);
        }
    }
    return objChild;
}

function GetPLCModuleTreeviewObject(strPLCModule)
{
    objChild = null; objParent = null; 
    objParent = GetPLCModuleConfigurationWindow(strPLCModule);
    if(objParent != null)
    {
        objParent = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_PLCModule_Treeview");
        if(objParent != null)
        {
            objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_PLCModule_Treeview");
        }
    }
    return objChild;
}

function GetPLCModuleConfigUIContainerObject(strPLCModule)
{
    objChild = null; objParent = null; 
    objParent = GetPLCModuleConfigurationWindow(strPLCModule);
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_UIContainer");
    }
    return objChild;
}

function GetPLCModuleComboboxObject(strPLCModule)
{
    objChild = null; objParent = null; 
    objParent = GetPLCModuleConfigUIContainerObject(strPLCModule);
    if(objParent != null)
    {
        objChild = objParent["FindChild"]("Name","[\"Window\"](\"ComboBox\", \"\", 1)");
    }
    return objChild;
}

function GetConfigurationGridview()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objParent = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_UIContainer3");
        if(objParent != null)
        {
            objParent = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_UIContainer4");
            if(objParent != null)
            {
                objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_Gridview");
            }
        }
    }
    return objChild;
}

function GetConfigurationApplyButton()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"DTMConfiguration","DTMConfig_ApplyButton");
    }
    return objChild;
}

function GetConfigurationCancelButton()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"DTMConfiguration","DTMConfig_CancelButton");
    }
    return objChild;
}

function GetParametersApplyButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_Apply_Button");
    }
    return objChild;
}

function GetParametersCancelButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_Cancel_Button");
    }
    return objChild;
}

function GetConfigurationOKButton()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"DTMConfiguration","DTMConfig_OKButton");
    }
    return objChild;
}

function GetPLCbusWindow()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_PLCBus_Wnd");
    }
    return objChild;
}

function GetFDTConfigurationTreeView()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objParent = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_Splitter_Wnd");
        if(objParent != null)
        {
            objParent = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_Splitter_Wnd");
            if(objParent != null)
            {
                objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_ConfigTreeview");
            }
        }
    }
    return objChild;
}

function GetFDTConfigurationTreeView2(wndName)
{
    objChild = null; objParent = null; 
    var objParent = GetPLCModuleConfigurationWindow(wndName);
    if(objParent["Exists"] == true)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_ConfigTreeview");
    }
    return objChild;
}

function GetFieldBusDiscoveryPopupWindow()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_FieldBusDiscovery_Wnd");
    }
    return objChild;
}

function GetFieldBusDiscoveryListView()
{
    objChild = null; objParent = null; 
    objParent = GetFieldBusDiscoveryPopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_FieldBusDiscovery_Listview");
    }
    return objChild;
}

function GetFieldBusDiscoveryScannedDevicesListView()
{
    objChild = null; objParent = null; 
    objParent = GetFieldBusDiscoveryPopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_FieldBusDiscovery_ScannedListView");
    }
    return objChild;
}

function GetFieldBusDiscoveryMatchedListView()
{
    objChild = null; objParent = null; 
    objParent = GetFieldBusDiscoveryPopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_FieldBusDiscovery_MatchedListView");
    }
    return objChild;
}

function GetFieldBusDiscoverySelectedListView()
{
    objChild = null; objParent = null; 
    objParent = GetFieldBusDiscoveryPopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_FieldBusDiscovery_SelectedListView");
    }
    return objChild;
}

function GetFieldBusDiscoveryOKButton()
{
    objChild = null; objParent = null; 
    objParent = GetFieldBusDiscoveryPopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_OK_Button");
    }
    return objChild;
}

function GetFieldBusDiscoveryAddButton()
{
    objChild = null; objParent = null; 
    objParent = GetFieldBusDiscoveryPopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_FieldBusDiscovery_Add_Button");
    }
    return objChild;
}

function GetFieldBusDiscoveryAuthPopup()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_FieldBusDiscovery_AuthPopup");
    }
    return objChild;
}

function GetFieldBusDiscoveryAuthYesButton()
{
    objChild = null; objParent = null; 
    objParent = GetFieldBusDiscoveryPopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_YesButton");
    }
    return objChild;
}

function GetDTMDelConfirmWindow()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_ConfirmDelete_Wnd");
    }
    return objChild;
}

function GetDTMDelConfirmYesButton()
{
    objChild = null; objParent = null; 
    objParent = GetDTMDelConfirmWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_YesButton");
    }
    return objChild;
}

function GetDTMOperatingModePopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_DTMOperatingMode_Popup");
    }
    return objChild;
}

function GetDTMOperatingModeExpertRdButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMOperatingModePopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_DTMOperatingMode_Expert_rdButton");
    }
    return objChild;
}

function GetDTMOperatingModeOKButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMOperatingModePopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_DTMOperatingMode_OK_Button");
    }
    return objChild;
}

function GetNewProjectWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objParent = GetRecognitionObject(objParent, "NewProjectWindow", "Obj_NewProjectWnd_Container");
        if(objParent != null)
        {
            objChild = GetRecognitionObject(objParent, "NewProjectWindow", "Obj_NewProjectWnd");
        }
    }
    return objChild;
}

function GetChannelChangingPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_Channel_changing_Popup");
    }
    return objChild;
}

function GetChannelChangingYesButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetChannelChangingPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_Channel_changing_Popup_Yes_Button");
    }
    return objChild;
}

function TCPIP_GetConfigurationGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","TCPIP_ConfigurationGrid");
    }
    return objChild;
}

function TCPIP_GetConfigurationGridDescriptionStaticObject()
{
    objChild = null; objParent = null; 
    //objParent = GetDTmConfigurationWindowObject();
    var objConfigurationCombobox = TCPIP_GetConfigurationComboboxObject();
    if(objConfigurationCombobox != null)
    {
        objParent = objConfigurationCombobox["Parent"];
        if(objParent != null)
        {
            objChild = GetRecognitionObject(objParent,"ChannelProperties","Obj_TCPIP_Grid_Description_Static");
        }
    }
    return objChild;
}

function TCPIP_GetConfigurationComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","TCPIP_ConfigurationCombobox");
    }
    return objChild;
}

function TCPIP_GetDeviceListConnectionGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = objParent["FindAllChildren"](["WndClass", "ObjectType", "Visible"], ["VSFlexGrid8N", "Table", "True"], 10);
        objChild = (new VBArray(objChild))["toArray"]();
        if(objChild[1]["Exists"] == true)
    		{
    			return objChild[1];
    		}
    }
    return null;
}

function TCPIP_GetConfigurationSwitchGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objParent = objParent.FindChild("Name", "[\"PageTab\"](\"Switch\")", 10);
        if(objParent["Exists"] == true)
        {
            objChild = GetRecognitionObject(objParent.Parent.Parent,"ChannelProperties","TCPIP_ConfigurationGrid");
        }
    }
    return objChild;
}

function VerifyIfQosQueueTabExists()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = objParent.FindChild("Name", "[\"PageTab\"](\"Qos Queue\")", 10);
        return objChild["Exists"];
    }
    return false;
}

function GetConfigIPEditObject()
{
    objChild = null; objParent = null; 
    objParent = TCPIP_GetConfigurationGridObject();
    if(objParent != null)
    {
        for(var i=0;i<10;i++)
        {
            if(objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter")["Value"] == "Module IP Address")
            {
                return objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter");
            }
        }
    }
    return objChild;
}

function GetPLCConfigIPEditObject(objPLCModuleConfigurationWindow, ipField)
{
    if(objPLCModuleConfigurationWindow != null)
    {
         var objEdit = objPLCModuleConfigurationWindow.FindChild(["WndClass", "WndCaption"], ["Static", ipField], 10);
         if(objEdit["Exists"] == true)
        {
            objEdit = objPLCModuleConfigurationWindow.FindChild(["WndClass", "Index"], ["SysIPAddress32", objEdit["Index"]], 10);
            if(objEdit["Exists"] == true)
            {
                return objEdit;
            }
        }
    }
    return null;
}

function GetConfigIPAddressValueObject()
{
    objChild = null; objParent = null; 
    objParent = TCPIP_GetConfigurationGridObject();
    if(objParent != null)
    { 
        objParent.Refresh();
        for(var i=0;i<10;i++)
        {
            if(objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter")["Value"] == "Module IP Address")
            {
                return objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Value");
            }
        }
    }
    return objChild;
}

function GetConfigIPEdit2Object()
{
    objChild = null; objParent = null; 
    objParent = GetConfigurationGridview();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_FDT_Config_IP_Edit2");
    }
    return objChild;
}

function GetConfigSubnetEditObject()
{
    objChild = null; objParent = null; 
    objParent = TCPIP_GetConfigurationGridObject();
    if(objParent != null)
    {
        for(var i=0;i<10;i++)
        {
            if(objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter")["Value"] == "Sub-Network Mask")
            {
                return objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter");
            }
        }
    }
    return objChild;
}

function GetConfigSubnetValueObject()
{
    objChild = null; objParent = null; 
    objParent = TCPIP_GetConfigurationGridObject();
    if(objParent != null)
    {
        objParent.Refresh();
        for(var i=0;i<10;i++)
        {
            if(objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter")["Value"] == "Sub-Network Mask")
            {
                return objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Value");
            }
        }
    }
    return objChild;
}

function GetConfigGatewayEditObject()
{
    objChild = null; objParent = null; 
    objParent = TCPIP_GetConfigurationGridObject();
    if(objParent != null)
    {
        for(var i=0;i<10;i++)
        {
            if(objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter")["Value"] == "Gateway IP Address")
            {
                return objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter");
            }
        }
    }
    return objChild;
}

function GetConfigGatewayValueObject()
{
    objChild = null; objParent = null; 
    objParent = TCPIP_GetConfigurationGridObject();
    if(objParent != null)
    {
        objParent.Refresh();
        for(var i=0;i<10;i++)
        {
            if(objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Group/Parameter")["Value"] == "Gateway IP Address")
            {
                return objParent["Row"]("Row "+aqConvert["VarToStr"](i))["Cell"]("Value");
            }
        }
    }
    return objChild;
}

function GetLoadDataFromDeviceWnd()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_LoadDataFromDevice_Wnd");
    }
    return objChild;
}

function GetStoreDataToDeviceWnd()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_StoreDataToDevice_Wnd");
    }
    return objChild;
}

function GetFirmwareInCompatiblePopup()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_FirmwareInCompatiblePopup");
    }
    return objChild;
}

function GetFirmwareInCompatiblePopupOkButton()
{
    objChild = null; objParent = null; 
    objParent = GetFirmwareInCompatiblePopup();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_FirmwareInCompatiblePopup_OKButton");
    }
    return objChild;
}

function GetAutotuneSafetyPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Autotune_SafetyPopup");
    }
    return objChild;
}

function GetConfirmAutotuneWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_ConfirmAutotune_Wnd");
    }
    return objChild;
}

function GetDTMInformationWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_DTMInformation_Wnd");
    }
    return objChild;
}

function GetDTMInformationWindowYesObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMInformationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_YesButton");
        if(objChild == null)
        {
            objChild = GetRecognitionObject(objParent, "Unity", "Obj_OK_Button");
        }
    }
    return objChild;
}

function GetStatusBar()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_StatusBar");
    }
    return objChild;
}

function GetDTMPropertiesWnd()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMProperties", "Obj_DTM_Properties_Wnd");
    }
    return objChild;
}

function GetDTMPropertiesTabControl()
{
    objChild = null; objParent = null; 
    objParent = GetDTMPropertiesWnd();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMProperties", "Obj_DTM_Properties_Tab_Control");
    }
    return objChild;
}

function GetDTMPropertiesTabPageControl(tabName)
{
    objChild = null; objParent = null; 
    objParent = GetDTMPropertiesWnd();
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","WndCaption"],["#32770",tabName], 5);
    }
    return objChild;
}

function GetDTMPropertiesApplyButton()
{
    objChild = null; objParent = null; 
    objParent = GetDTMPropertiesWnd();
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","WndCaption"],["Button","*Apply*"], 5);
    }
    return objChild;
}

function GetDTMPropertiesOKButton()
{
    objChild = null; objParent = null; 
    objParent = GetDTMPropertiesWnd();
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","WndCaption"],["Button","*OK*"], 5);
    }
    return objChild;
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
function GetWarningWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "WarningObj");
    }
    return objChild;
}

function GetFileObjectSliceIO()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","File_obj");
    }
    return objChild;
}
function GetPageObjectSliceIO()
{
    objChild = null; objParent = null; 
    objParent = GetIslandTabObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
    objParent = GetIslandTabAnimationObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
    objParent = GetMasterProtocolMBObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
    objParent = GetMasterProtocolEIPObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
    objParent = GetNOCProtocolMBObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
    objParent = GetNOCProtocolEIPObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
    objParent = GetMBOriginalObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
}

function GetWindowObjectSliceIO()
{
    objChild = null; objParent = null; 
    objParent = GetMasterProtocolMBObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
    objParent = GetMasterProtocolEIPObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Page_Obj");
        return objChild;
    }
}

function GetAddDeviceWndAddButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetAddDeviceWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_AddDeviceWnd_Add_Button");
    }
    return objChild;
}
function GetIslandTabObject()
{
  objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"IslandTab","EdgeIO_Wnd");
    }
    return objChild;
}

function GetMasterProtocolMBObject()
{
  objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_Master_Protocol_MB");
    }
    return objChild;
}

function GetMasterProtocolEIPObject()
{
  objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_Master_Protocol_EIP");
    }
    return objChild;
}
function GetNOCProtocolMBObject()
{
  objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_NOC_Protocol_MB");
    }
    return objChild;
}
function GetNOCProtocolEIPObject()
{
  objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_NOC_Protocol_EIP");
    }
    return objChild;
}
function GetMBOriginalObject()
{
  objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_OriginalMB");
    }
    return objChild;
}
function GetIslandTabAnimationObject()
{
  objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"IslandTab","EdgeIOAnimationTab_Wnd");
    }
    return objChild;
}
function IPAddressModifyObject()
{
    objChild = null; objParent = null; 
    objParent = GetAddDeviceWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Configuration", "IPModify");
    }
    return objChild;
}
function GetAddDeviceWndCancelButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetAddDeviceWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_AddDeviceWnd_Cancel_Button");
    }
    return objChild;
}

function GetAddDeviceWndScrollbarObject()
{
    objChild = null; objParent = null; 
    objParent = GetAddDeviceWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_AddDeviceWnd_Scrollbar");
    }
    return objChild;
}

function GetNewProjectWndScrollbarObject()
{
    objChild = null; objParent = null; 
    objParent = GetNewProjectWindowPLCListviewObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_AddDeviceWnd_Scrollbar");
    }
    return objChild;
}

function GetPropertiesOfDevicePopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_Properties_of_device_Popup");
    }
    return objChild;
}

function GetPropertiesOfDeviceAliasNameEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetPropertiesOfDevicePopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_Properties_of_device_AliasName_Edit");
    }
    return objChild;
}

function GetPropertiesOfDeviceOKButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetPropertiesOfDevicePopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_OK_Button");
    }
    return objChild;
}

function GetDTMBrowserContextMenu()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMBrowser", "Obj_DTMBrowser_ContextMenu");
    }
    return objChild;
}

function GetIODatagridviewContextMenu()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "IOScanning", "Obj_IO_DatagridView_ContextMenu");
    }
    return objChild;
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
    }
    return objChild;
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

function GetBuildConfirmWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_Build_Confirm_Wnd");
    }
    return objChild;
}

function GetBuildConfirmWindowButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetBuildConfirmWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_Unexpected_Wnd_Btn");
    }
    return objChild;
}

function GetDTMConfigConfirmPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_PLC_Bus_Confirm_Popup_Wnd");
    }
    return objChild;
}

function GetDTMConfigConfirmPopupButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigConfirmPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity", "Obj_Unexpected_Wnd_Btn");
    }
    return objChild;
}

function GetDTmConfigurationWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","DTMWindow");
    }
    return objChild;
}
function GetEdgeIOMBMPConfigurationWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","EdgeIOMBMP_DTMWindow");
    }
    return objChild;
}
function GetInfoConnectionWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","ConnectionInfo_Obj");
    }
    return objChild;
}
function GetEdgeIOConfigurationWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","EdgeIOAnimationWindow");
    }
    return objChild;
}
function GetEdgeIOConfigurationWindowObjectMaster()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","EdgeIOMasterWindow");
    }
    return objChild;
}
function GetEdgeIOMBMasterProtocol()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","EdgeIOMasterProtocol");
    }
    return objChild;
}
function GetEdgeIOEIPMasterProtocol()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","EdgeIOEIPProtocol");
    }
    return objChild;
}
function GetEdgeIOMBNOCProtocol()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","EdgeIOMBNOCProtocol");
    }
    return objChild;
}
function GetEdgeIOEIPNOCProtocol()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","EdgeIOEIPNOCProtocol");
    }
    return objChild;
}
function GetEdgeIOMBOriginalDTM()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","EdgeIOMBOriginal");
    }
    return objChild;
}
function GetSliceIODTmConfigurationWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","SliceIOConfig");
    }
    return objChild;
}

function GetSliceIODTmProjectConfigurationWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","SliceIOProject");
    }
    return objChild;
}
function GetAddDTMObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Configuration","AddDTM");
    }
    return objChild;
}

function GetFDTDTMConfigWindowObject(wndTitle)
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","WndCaption"],["Afx:*","*"+wndTitle+"* - fdtConfiguration"],10);
        if(objChild["Exists"] == false)
        {
            objChild = objParent.FindChild(["WndClass","WndCaption"],["Afx:*","*"+wndTitle+"*"],10);
        }
    }
    return objChild;
}

function GetDtmDiagnosisWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","DTMDiagnosisWnd");
    }
    return objChild;
}

function GetDtmDiagnosisTreeviewObject()
{
    objChild = null; objParent = null; 
    objParent = GetDtmDiagnosisWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"FDTDiagnosis","ObjDiagnosisTreeview");
    }
    return objChild;
}

function GetDtmDiagnosisDatagridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDtmDiagnosisWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"FDTDiagnosis","ObjDiagnosisDatagrid");
    }
    return objChild;
}

function GetDtmDiagnosisRefreshCheckboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDtmDiagnosisWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"FDTDiagnosis","ObjRefreshCheckbox");
    }
    return objChild;
}

function GetFDTOnlineCompareWindowObject()
{
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","FDTOnlineCompareWindow");
    }
    return objChild;
}

function GetDTmConfigurationApplyButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"DTMConfiguration","Obj_DTMConfig_Apply_Button");
    }
    return objChild;
}

function GetPLCBusNewDeviceWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_PLC_Bus_New_Device_Wnd");
    }
    return objChild;
}

function GetMoveDeviceWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = objParent.FindChild("Name","[\"Window\"](\"#32770\", \"Move Device\", 1)",5);
    }
    return objChild;
}

function GetPLCBusWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_PLC_Bus_Wnd");
    }
    return objChild;
}

function GetGeneralPLCWindowContainerObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_PLC_Wnd_Container");
    }
    return objChild;
}

function GetGeneralPLCWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetGeneralPLCWindowContainerObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","Obj_PLC_Wnd");
    }
    return objChild;
}

function GetDeviceConfigWindowObject(deviceName)
{
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass", "WndCaption"],["Afx:*", "*"+deviceName+"*"],10);
    }
    return objChild;
}

function GetNewProjectWndOKButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetPLCBusNewDeviceWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NewDevice","Obj_PLC_Bus_New_Device_Wnd_OK_Button");
    }
    return objChild;
}

function GetFDTDeviceListDeviceTabObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"DeviceDTMFDT","Obj_DeviceListDeviceTab");
    }
    return objChild;
}
function GetEdgeIOMBMPGatewayObject()
{
    objChild = null; objParent = null; 
    objParent = GetEdgeIOMBMPConfigurationWindowObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","EdgeIOMBMP_Obj");
    }
    return objChild;
}
function GetEdgeIOMBSubnetmaskObject()
{
    objChild = null; objParent = null; 
    objParent = GetEdgeIOMBMPConfigurationWindowObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","EdgeIOMB_Subnetmask_Obj");
    }
    return objChild;
}
function GetEdgeIOMBIdentifierObject()
{
    objChild = null; objParent = null; 
    objParent = GetEdgeIOMBMPConfigurationWindowObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","EdgeIOMB_Identifier_Obj");
    }
    return objChild;
}
function GetEdgeIOMBDHCPObject()
{
    objChild = null; objParent = null; 
    objParent = GetEdgeIOMBMPConfigurationWindowObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","EdgeIOMB_DHCP_Obj");
    }
    return objChild;
}
function GetEdgeIOMBMPIPObject()
{
    objChild = null; objParent = null; 
    objParent = GetEdgeIOMBMPConfigurationWindowObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","EdgeIOMBMP_IPObj");
    }
    return objChild;
}
function GetFDTAddressSettingIPAddressObject()
{
    objChild = null; objParent = null; 
    objParent = GetFDTDeviceListDeviceTabObject();
    if(objParent != null)
    {
        objParent = objParent["Parent"];
        objChild = GetRecognitionObject(objParent,"DeviceDTMFDT","Obj_AddressSetting_IPAddress");
    }
    return objChild;
}

function GetFDTAddressSettingSubnetMaskObject()
{
    objChild = null; objParent = null; 
    objParent = GetFDTDeviceListDeviceTabObject();
    if(objParent != null)
    {
        objParent = objParent["Parent"];
        objChild = GetRecognitionObject(objParent,"DeviceDTMFDT","Obj_AddressSetting_SubNetworkMask");
    }
    return objChild;
}

function GetFDTAddressSettingGatewayObject()
{
    objChild = null; objParent = null; 
    objParent = GetFDTDeviceListDeviceTabObject();
    if(objParent != null)
    {
        objParent = objParent["Parent"];
        objChild = GetRecognitionObject(objParent,"DeviceDTMFDT","Obj_AddressSetting_Gateway");
    }
    return objChild;
}

function GetSourceIPAddressObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","SourceIPAddress");
    }
    return objChild;
}

function GetSubNetworkMaskObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","SubNetworkMask");
    }
    return objChild;
}

//functions related to Ethernet/Ip addres begin detection range address
//function to get Ethernet/IP address begin detection range address.
function GetEthernetBeginAddrObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","Obj_Ethernet_IPAddressStartRange_Edit");
    }
    return objChild;
}

//functions related to Ethernet/Ip addres End detection range address
//function to get Ethernet/IP address End detection range address.
function GetEthernetEndAddrObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","Obj_Ethernet_IPAddressEndRange_Edit");
    }
    return objChild;
}

//functions related to Modbus Network detection begin detection range address
//function to get Modbus Network detection begin detection range address.
function GetModbusBeginAddrObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","Obj_Modbus_IPAddressStartRange_Edit");
    }
    return objChild;
}

//functions related to Modbus Network detection end detection range address
//function to get Modbus Network detection end detection range address.
function GetModbusEndAddrObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","Obj_Modbus_IPAddressEndRange_Edit");
    }
    return objChild;
}

function GetDataEditorWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Data_Editor");
    }
    return objChild;
}

function GetProjectOutputWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"DTMConfiguration","Obj_OutputWnd");
    }
    return objChild;
}

function GetEthernetNetworkMgrWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Ethernet_Network_Mgr_Wnd");
    }
    return objChild;
}

function GetEthernetNetworkMgrDatagridObject()
{
    objChild = null; objParent = null; 
    objParent = GetEthernetNetworkMgrWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_ENM_Datagrid");
    }
    return objChild;
}

function GetDataEditorPropertiesWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Data_Editor_Properties_Wnd");
    }
    return objChild;
}

function GetDataEditorPropertiesListObject()
{
    objChild = null; objParent = null; 
    objParent = GetDataEditorPropertiesWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Data_Editor_Properties_List");
    }
    return objChild;
}

function GetAnimationTableWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Animation_Table_Wnd");
    }
    return objChild;
}

function GetDataEditorVariablesTabObject()
{
    objChild = null; objParent = null; 
    objParent = GetDataEditorWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Data_Editor_Variables_Tab");
    }
    return objChild;
}

function GetAnimationTableObject()
{
    objChild = null; objParent = null; 
    objParent = GetAnimationTableWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Data_Editor_Variables_Grid");
    }
    return objChild;
}

function GetAnimationTableModificationButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetAnimationTableWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_AnimationTable_Modification_Button");
    }
    return objChild;
}

function GetAnimationTableEnabledButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetAnimationTableWndObject();
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","Index"],["Button",8],10);
    }
    return objChild;
}

function GetDataEditorVariablesGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDataEditorVariablesTabObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Data_Editor_Variables_Grid");
    }
    return objChild;
}

function GetDataEditorVariablesSearchEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDataEditorVariablesTabObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ProjectConfiguration","Obj_Data_Editor_Variables_Search_Edit");
    }
    return objChild;
}

function GetDataEditorWndScrollbarObject(objParent)
{
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_AddDeviceWnd_Scrollbar");
    }
    return objChild;
}

function GetDataEditorWndHorizontalScrollbarObject(objParent)
{
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_AddDeviceWnd_HScrollbar");
    }
    return objChild;
}

function GetDTMMgmtWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_DTMInformation_Wnd");
    }
    return objChild;
}

function GetDTMMgmtOKButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMMgmtWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "DTMConfig_OKButton");
    }
    return objChild;
}

function GetChangeProcessorWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"PLCBus","ReplaceProcWnd");
    }
    return objChild;
}

function GetChangeProcessorWndYesButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetChangeProcessorWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"DTMConfiguration","Obj_Modification_Authorization_Yes_Button");
    }
    return objChild;
}

function GetWizardProcess()
{
    var objChild = null; objParent = null; 
    objParent = GetRecognitionObject(Sys, "TestedApp", "Obj_WizzardApp");
    return objParent;
}

function GetDeleteEDSProcess()
{
    var objParent = GetRecognitionObject(Sys, "TestedApp", "Obj_DeleteEDS");
    return objParent;
}

function GetEDSAdditionPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetWizardProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSAdditionWnd");
    }
    return objChild;
}

function GetEDSDeletionPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeleteEDSProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSDeletionWnd");
    }
    return objChild;
}

function GetEDSDeletionConfirmPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeleteEDSProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSDeletionConfirmWnd");
    }
    return objChild;
}

function GetEDSDeletionConfirmPopupYesButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetEDSDeletionConfirmPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"DTMConfiguration","Obj_Modification_Authorization_Yes_Button");
    }
    return objChild;
}

function GetEDSDeletionDeviceListObject()
{
    objChild = null; objParent = null; 
    objParent = GetEDSDeletionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSDeleteWndDeviceList");
    }
    return objChild;
}

function GetEDSAdditionNextButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetEDSAdditionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSWndNextButton");
    }
    return objChild;
}

function GetEDSDeleteButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetEDSDeletionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSWndDeleteButton");
    }
    return objChild;
}

function GetEDSCloseButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetEDSDeletionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSWndCloseButton");
    }
    return objChild;
}

function GetEDSAdditionFinishButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetEDSAdditionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSWndFinishButton");
    }
    return objChild;
}

function GetEDSAdditionFilenameEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetEDSAdditionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSWndFileNameEdit");
    }
    return objChild;
}

function GetEDSAdditionFilenameListObject()
{
    objChild = null; objParent = null; 
    objParent = GetEDSAdditionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "EDS", "ObjEDSWndFileList");
    }
    return objChild;
}

function GetSecurityConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_Global_Policy_Groupbox");
    }
    if(objChild != null)
    {
        return objChild["Parent"];
    }
    return null;
}

function GetFTPComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_FTP_Combobox");
    }
    return objChild;
}

function GetTFTPComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_TFTP_Combobox");
    }
    return objChild;
}

function GetHTTPComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_HTTP_Combobox");
    }
    return objChild;
}

function GetIPsecComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_IPsec_Combobox");
    }
    return objChild;
}

function GetDHCPComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_DHCP_BOOTP_Combobox");
    }
    return objChild;
}

function GetSNMPComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_SNMP_Combobox");
    }
    return objChild;
}

function GetEIPComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_EIP_Combobox");
    }
    return objChild;
}

function GetAccessControlComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_Access_Control_Combobox");
    }
    return objChild;
}

function GetAccessControlGridViewObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_Access_Control_Grid");
    }
    return objChild;
}

function GetAccessControlGridViewEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetAccessControlGridViewObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_AccessControl_Edit");
    }
    return objChild;
}

function GetAccessControlCellObject(colName, rowIndex)
{
    objChild = null; objParent = null; 
    objParent = GetAccessControlGridViewObject();
    if(objParent != null)
    {
        objParent["VScroll"]["Pos"] = objParent["VScroll"]["Min"];
        objChild = objParent["Row"]("Row "+rowIndex+"")["Cell"](colName);
        while(objChild["Visible"] == false)
        {
            objParent["VScroll"]["Pos"] = objParent["VScroll"]["Pos"]+5;
            objParent["Refresh"]();        

            objChild = objParent["Row"]("Row "+rowIndex+"")["Cell"](colName);
            if(objParent["VScroll"]["Pos"] == objParent["VScroll"]["Max"] && objChild["Visible"] == false)
                return null;
        }
    }
    return objChild;
}

function GetPreSharedKeyEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_Pre_Shared_Key_Edit");
    }
    return objChild;
}

function GetEnforceSecurityButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_Enforce_Security_Button");
    }
    return objChild;
}

function GetUnlockSecurityButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetSecurityConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Security", "Obj_Unlock_Security_Button");
    }
    return objChild;
}

/////////////////////////////////////////////////////////////////////////////////

function GetDeviceConfigStatusStripObject(dtmName)
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent == null && dtmName != undefined && dtmName != "NULL")
    {
        objParent = GetFDTDTMConfigWindowObject(dtmName)
    }
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_StatusStrip");
    }
    return objChild;
}

function GetDeviceConfigStatusStripObject2(dtmName)
{
    objChild = null; objParent = null; 
    objParent = GetFDTDTMConfigWindowObject(dtmName)
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_StatusStrip");
    }
    return objChild;
}

function GetSafetyDialogPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_SafetyPopup");
    }
    return objChild;
}

function GetMyDeviceStructureDataViewObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject("My Device");
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_MyDevice_Structure_Dataview");
    }
    return objChild;
}

function GetDTMConfigurationTabControlTabPageObject(tabPageName)
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objParent = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Container");
        if(objParent != null)
        {
            objChild = objParent["FindChild"]("Name","[\"WinFormsObject\"](\"TabPage\", \""+tabPageName+"\")",10);
            if(objChild["Exists"] == false)
            {
                objChild = objParent["FindChild"]("Name","[\"WinFormsObject\"](\"TabPage\", \"*"+tabPageName+"*\")",10);
            }
            if(objChild["Exists"] == true)
            {
                return objChild;
            }
            else
            {
                return null;
            }
        }
    }
    return objChild;
}

function GetMyDeviceCharactersticsParameterObject(strParameter)
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject("My Device");
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", strParameter);
    }
    return objChild;
}

function GetInstallShieldControl(processName,objISControlName)
{
    var objISWnds = Sys["FindAllChildren"](["ProcessName"], [processName], 10);
    objISWnds = (new VBArray(objISWnds))["toArray"]();
    if(objISWnds[0] != undefined)
    {
        for(var i=0;i<objISWnds["length"];i++)
        {
            if(objISWnds[i]["Exists"] == true)
            {
              //Log["Message"](objISWnds[i].FindChild(Array["WndClass","WndCaption"],Array["MsiDialogCloseClass","Schneider Electric BME NOR DTM Library*"],15)["Exists"])
                objISControl = GetRecognitionObject(objISWnds[i], "Installation", objISControlName);
                if(objISControl != null)
                {
                    return objISControl;
                }
            }
        }
    }
    return null;
}

function GetNORInstallShieldControl(objISControlName)
{
    var objISWnds = Sys;
    
    objISControl = GetRecognitionObject(objISWnds, "Installation", objISControlName);
    if(objISControl != null)
    {
        return objISControl;
    }
    else
    {
          return null;
    }
}


function GetInstallShieldLanguageWndObject()
{
    return GetInstallShieldControl("setup","Obj_Language_Page_Wnd");
}
function GetInstallShieldLanguageWndSliceIOObject()
{
    return GetInstallShieldControl("setup","Obj_Language_Page_SliceIO_Wnd");
}

function GetInstallShieldNORLanguageWndObject()
{
    return GetNORInstallShieldControl("Obj_Language_NORPage_Wnd");
}

function GetInstallShieldLanguageBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldLanguageWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_OK_Button");
    }
    return objChild;
}
function GetInstallShieldLanguageSliceIOBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldLanguageWndSliceIOObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_OK_SliceIO_Button");
    }
    return objChild;
}
function GetInstallShieldNORLanguageBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldNORLanguageWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_OK_Button");
    }
    return objChild;
}

function GetInstallShieldWndObject()
{
    return GetInstallShieldControl("msiexec", "Obj_Start_Page_Wnd");
}
function GetInstallShieldSliceIOWndObject()
{
    return GetInstallShieldControl("msiexec", "Obj_SliceIO_Wnd");
}
function GetInstallShieldNORWndObject()
{
    return GetNORInstallShieldControl("Obj_Start_NORPage_Wnd");
}

function GetInstallShieldNextBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Next_Button");
    }
    return objChild;
}

function GetInstallShieldReadmeTextObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Readme_Edit");
    }
    return objChild;
}

function GetInstallShieldReadmeTextObject_generic(objParent)
{
    objChild = null;
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Readme_Edit");
    }
    return objChild;
}

function GetInstallShieldInstallBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Install_Button");
    }
    return objChild;
}

function GetInstallShieldFinishBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Finish_Button");
    }
    return objChild;
}

function GetInstallShieldModifyRdBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Modify_Radio_Button");
    }
    return objChild;
}

function GetInstallShieldAcceptRdBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Accept_Radio_Button");
    }
    return objChild;
}

function GetInstallShieldStaticObject(staticText)
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Installation_Static_"+staticText);
    }
    return objChild;
}

function GetInstallShieldStaticObject_generic(objParent,staticText)
{
    objChild = null; 
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Installation_Static_"+staticText);
    }
    return objChild;
}

function GetNORInstallShieldStaticObject(staticText)
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldNORWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Installation_Static_"+staticText);
    }
    return objChild;
}

function GetDestinationFolderPathStaticObject(pathText)
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","WndCaption"],["Static", pathText], 10);
    }
    return objChild;
}

function GetCustomSetupStaticObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Custom_Setup_Static");
    }
    return objChild;
}

function GetProgramMaintenanceStaticObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Program_Maintenance_Static");
    }
    return objChild;
}

function GetInstalledSubAppsStaticObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Sub_Applications_Static");
    }
    return objChild;
}

function GetInstallationReadyStaticObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Installation_Ready_Static");
    }
    return objChild;
}

function GetDTMConfigurationTabControlObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objParent = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Container");
        if(objParent != null)
        {
            objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_TabControl");
        }
    }
    return objChild;
}

function GetParametersMenuToolStripObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject("Parameters");
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_ToolStrip");
    }
    return objChild;
}

function GetParametersMenuTabControlObject(strTabName)
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject(strTabName);
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_TabControl");
    }
    return objChild;
}

function GetParametersSearchEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject("Parameters");
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_Search_Edit");
    }
    return objChild;
}

function GetParametersSearchComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject("Parameters");
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_Search_Combobox");
    }
    return objChild;
}

function GetParametersSearchLinkObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject("Parameters");
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_Search_Link");
    }
    return objChild;
}

function GetParametersTableControlObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject("Parameters");
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_TableControl");
    }
    return objChild;
}

function GetParametersMenuObject(strTabName)
{
    objChild = null; objParent = null; 
    objParent = GetParametersMenuTabControlObject(strTabName);
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_ConfigurationPage_Parameters_Menu");
    }
    return objChild;
}

function GetIOScanningProfilesComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTMConfigurationTabControlTabPageObject("Parameters");
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "IOScanning", "Obj_Drive_Profiles_IOProfile_Combobox");
    }
    return objChild;
}


function GetCommandPanelObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_CommandPanel");
    }
    return objChild;
}

function GetCommandPanelConnectButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetCommandPanelObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_CommandPanel_Connect_Button");
    }
    return objChild;
}

function GetCommandPanelDisconnectButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetCommandPanelObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "ConfigurationPage", "Obj_CommandPanel_Disconnect_Button");
    }
    return objChild;
}

function GetDeviceListConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_IO_Structure_GrpBox");
        if(objChild == null)
        {
            objChild = GetRecognitionObject(objParent,"Device_List","Obj_Address_Server_GrpBox");
        }
        if(objChild == null)
        {
            objChild = GetRecognitionObject(objParent,"Device_List","Obj_Add_Request_GridView");
        }
        
        if(objChild != null)
        {
            return objChild["Parent"]["Parent"];
        }
    }
    return null;
}

function GetLocalSlaveWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Local_Slave_GrpBox");
    }
    return objChild["Parent"]["Parent"];
}

function GetDeviceListConfigTabObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_DeviceList_Tab");
    }
    return objChild;
}

function GetDeviceListConfigTabPageObject(pageName)
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigTabObject();
    if(objParent != null)
    {
        objChild = objParent.FindChild("Name","[\"PageTab\"](\""+pageName+"\")", 10);
    }
    return objChild;
}
function GetConInfoTabPageObject()
{
    objChild = null; objParent = null; 
    objParent = GetInfoConnectionWindowObject()
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Unity","ConInfo_Tab");
    }
    return objChild;
}
function GetAddRequestButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Add_Request_Button");
    }
    return objChild;
}

function GetRemoveRequestButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Remove_Request_Button");
    }
    return objChild;
}

function GetDeviceRequestGridViewObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Add_Request_GridView");
    }
    return objChild;
}

function GetRequestGridViewObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Add_Request_GridView");
    }
    return objChild;
}
function GetMemoryMappingViewObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_MemoryMapping");
    }
    return objChild;
}
function GetAddressSettingDeviceDHCPObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Addr_Settings_DHCP_Combobox");
    }
    return objChild;
}

function GetAddressSettingDeviceIdentifiedByObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Addr_Settings_IdentifyBy_Combobox");
    }
    return objChild;
}

function GetAddressSettingDeviceIdentifierObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Addr_Settings_Identifier_Edit");
    }
    return objChild;
}

function GetAddressSettingDeviceIPAddressObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Addr_Settings_IP_Address_Edit");
    }
    return objChild;
}
function GetPropertiesVariableNameObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Properties_Var");
    }
    return objChild;
}

function GetAddressSettingDeviceSubnetMaskObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Addr_Settings_Subnet_Mask_Edit");
    }
    return objChild;
}

function GetAddressSettingDeviceGatewayObject()
{
    objChild = null; objParent = null; 
    objParent = GetDeviceListConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Addr_Settings_Gateway_Edit");
    }
    return objChild;
}

function GetExclusiveOwnerConfigTabPageObject(pageName)
{
    objChild = null; objParent = null; 
    objParent = GetExclusiveOwnerConfigTabObject();
    if(objParent != null)
    {
        objChild = objParent.FindChild("Name","[\"PageTab\"](\""+pageName+"\")", 10);
    }
    return objChild;
}

function GetExclusiveOwnerConfigTabObject()
{
    objChild = null; objParent = null; 
    objParent = GetExclusiveOwnerConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_DeviceList_Tab");
    }
    return objChild;
}

function GetServicesConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Services","Obj_FDRServer_Static");
    }
    if(objChild != null)
    {
        return objChild.Parent;
    }
    return objChild;
}

function GetManuallyAddedDeviceTableObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicesConfigWindow();
    if(objParent != null)
    {
        objChild = objParent["FindAllChildren"](["ObjectType","WndClass"], ["Table","VSFlexGrid8N"], 10);
        objChild = (new VBArray(objChild))["toArray"]();
    }
    for(var i=0;i<objChild.length;i++)
    {
        if(objChild[i]["Row"]("Row 0")["Cell"]("Device No")["Exists"] == false)
            objChild = objChild[i];
    }
    return objChild;
}

function GetAutomaticallyAddedDeviceTableObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicesConfigWindow();
    if(objParent != null)
    {
        objChild = objParent["FindAllChildren"](["ObjectType","WndClass"], ["Table","VSFlexGrid8N"], 10);
        objChild = (new VBArray(objChild))["toArray"]();
    }
    for(var i=0;i<objChild.length;i++)
    {
        if(objChild[i]["Row"]("Row 0")["Cell"]("Device No")["Exists"] == true)
            objChild = objChild[i];
    }
    return objChild;
}

function GetManuallyAddDeviceButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicesConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Services", "Obj_AddDeviceManuallyButton");
    }
    return objChild;
}

function GetManuallyRemoveDeviceButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicesConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Services", "Obj_RemoveDeviceManuallyButton");
    }
    return objChild;
}

function GetAddressServerFDRServerComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicesConfigWindow();
    if(objParent != null)
    {
        objChild = objParent["Window"]("ComboBox", "", 1);
    }
    return objChild;
}

function GetRequestItemsConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Items_Input_Tab_Page");
        if(objChild != null)
        {
            if(objChild["Selected"] == true)
                return objChild["Parent"]["Parent"];
        }
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Items_Output_Tab_Page");
        if(objChild != null)
        {
            if(objChild["Selected"] == true)
                return objChild["Parent"]["Parent"];
        }
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Items_Input_Bit_Tab_Page");
        if(objChild != null)
        {
            if(objChild["Selected"] == true)
                return objChild["Parent"]["Parent"];
        }
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Items_Output_Bit_Tab_Page");
        if(objChild != null)
        {
            if(objChild["Selected"] == true)
                return objChild["Parent"]["Parent"];
        }
    }
    return null;
}

function GetRequestItemsConfigTabObject()
{
    objChild = null; objParent = null; 
    objParent = GetRequestItemsConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_DeviceList_Tab");
    }
    return objChild;
}

function GetRequestItemsConfigTabPageObject(pageName)
{
    objChild = null; objParent = null;
    objParent = GetRequestItemsConfigTabObject();
    if(objParent != null)
    {
        objChild = objParent.FindChild("Name","[\"PageTab\"](\""+pageName+"\")", 10);
    }
    return objChild;
}

function GetRequestItemsGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetRequestItemsConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","TCPIP_ConfigurationGrid");
    }
    return objChild;
}

function GetDefineRequestButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetRequestItemsConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Define_Item_Button");
    }
    return objChild;
}

function GetDeleteRequestButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetRequestItemsConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Delete_Item_Button");
    }
    return objChild;
}

function GetShowPropertiesButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetRequestItemsConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Show_Properties_Button");
    }
    return objChild;
}

function GetExclusiveOwnerConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ExclusiveOwner","Obj_Connection_Settings_Tab_Page");
        if(objChild != null)
        {
            return objChild["Parent"]["Parent"];
        }
    }
    return objChild;
}

function GetExclusiveOwnerGeneralConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ExclusiveOwner","Obj_General_Tab_Page");
        if(objChild != null)
        {
            return objChild["Parent"]["Parent"];
        }
    }
    return objChild;
}

function GetExclusiveOwnerGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetExclusiveOwnerConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","TCPIP_ConfigurationGrid");
    }
    return objChild;
}

function GetAdvantysProcess()
{
    objChild = null; objParent = null; 
    objParent = GetRecognitionObject(Sys, "TestedApp", "Obj_TestedApp_Advantys");
    return objParent;
}
function GetRegeditProcess()
{
    objChild = null; objParent = null; 
    objParent = GetRecognitionObject(Sys, "TestedApp", "Obj_TestedApp_Regedit");
    return objParent;
}
function GetAdvantysWindow()
{
    var advantysProcess = GetAdvantysProcess();
    if(advantysProcess != null)
    {
        return GetRecognitionObject(advantysProcess,"Advantys","Obj_Advantys_Window");
    }
    return null;
}

function GetAdvantysMessageBox()
{
    var advantysProcess = GetAdvantysProcess();
    return GetRecognitionObject(advantysProcess,"Advantys","Obj_Advantys_MessageBox");
}

function GetAdvantysMessageBoxButton()
{
    var advantysProcess = GetAdvantysMessageBox();
    return GetRecognitionObject(advantysProcess,"Advantys","Obj_Advantys_MessageBox_Button");
}

function GetStartAdvantysButtonObject()
{
    var window = GetDTmConfigurationWindowObject();
    return GetRecognitionObject(window,"DTMConfiguration","Obj_Start_Advantys_Button");
}

function GetItemDefinitionPopupObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Device_List", "Obj_Item_Definition_Wnd");
    }
    return objChild;
}

function GetItemDefinitionItemTypeComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetItemDefinitionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Device_List", "Obj_Item_Type_Combobox");
    }
    return objChild;
}

function GetItemDefinitionItemNameEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetItemDefinitionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Device_List", "Obj_Item_Name_Edit");
    }
    return objChild;
}

function GetItemDefinitionOKButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetItemDefinitionPopupObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Device_List", "Obj_Item_OK_Button");
    }
    return objChild;
}

function GetSourceAddressGroupBoxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","Obj_SourceAddress_Grpbox");
    }
    return objChild;
}

function GetNetworkDetectionEIPGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","Obj_Network_Detection_EIP_Grpbox");
    }
    return objChild;
}

function GetNetworkDetectionModbusGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ChannelProperties","Obj_Network_Detection_Modbus_Grpbox");
    }
    return objChild;
}

function GetRSTPConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"RSTP","Obj_RSTP_GrpBox");
        if(objChild != null)
        {
            return objChild["Parent"]["Parent"];
        }
    }
    return null;
}

function GetRSTPBridgePriorityComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetRSTPConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"RSTP","Obj_Bridge_Priority_Combobox");
    }
    return objChild;
}

function GetConfigIPEdit2Object2()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_FDT_Config_IP_Edit2");
    }
    return objChild;
}

function GetFDTTooltipObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "HelpBallon");
    }
    return objChild;
}

function GetAutomaticallyAddedDeviceGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicesConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Services", "Obj_FDRServer_AAD_Grpbox");
    }
    return objChild;
}

function GetManuallyAddedDeviceGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicesConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Services", "Obj_FDRServer_AAD_Grpbox");
    }
    return objChild;
}

function GetLocalSlaveAssemblyGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetLocalSlaveWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Device_List", "Obj_Local_Slave_GrpBox");
    }
    return objChild;
}

function GetLocalSlavePropertiesGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetLocalSlaveWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Device_List", "Obj_Local_Slave_Properties_GrpBox");
    }
    return objChild;
}

function GetConfigurationSummaryGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Configuration_Summary_GrpBox");
    }
    return objChild;
}

function GetDescriptionGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Description_GrpBox");
    }
    return objChild;
}

function GetConnectionSummaryGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Device_List","Obj_Request_Connection_Summary_GrpBox");
    }
    return objChild;
}

function GetServicesNTSComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Services","Obj_NTS_Combobox");
    }
    return objChild;
}

function GetServicesQoSComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Services","Obj_QoS_Combobox");
    }
    return objChild;
}

function GetServicesServicePortComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Services","Obj_Service_Port_Combobox");
    }
    return objChild;
}

function GetNTSConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_NTS_NTP_Server_GrpBox");
        if(objChild != null)
        {
            return objChild["Parent"]["Parent"];
        }
    }
    return null;
}

function GetNTSNTPGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_NTS_NTP_Server_GrpBox");
    }
    return objChild;
}

function GetQoSConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_EIP_Traffic_GrpBox");
        if(objChild != null)
        {
            return objChild["Parent"]["Parent"];
        }
    }
    return null;
}

function GetQoSEIPTrafficGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetQoSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_EIP_Traffic_GrpBox");
    }
    return objChild;
}

function GetQoSModbusTrafficGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetQoSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_Modbus_Traffic_GrpBox");
    }
    return objChild;
}

function GetQoSNTPTrafficGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetQoSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_NTP_Traffic_GrpBox");
    }
    return objChild;
}

function GetNTSTimeZoneGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_NTS_TZ_Server_GrpBox");
    }
    return objChild;
}

function GetNTSDaylightSavingGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_NTS_DS_Server_GrpBox");
    }
    return objChild;
}

function GetPrimaryNTPServerEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_PrimaryNTP_IPAddress_Edit");
    }
    return objChild;
}

function GetSecondaryNTPServerEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_SecondaryNTP_IPAddress_Edit");
    }
    return objChild;
}

function GetPollingPeriodEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Polling_Period_Edit");
    }
    return objChild;
}

function GetTimeZoneComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_TimeZone_Combobox");
    }
    return objChild;
}

function GetTimeZoneOffsetEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_TimeZone_Offset_Edit");
    }
    return objChild;
}

function GetDaylightSavingComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_Combobox");
    }
    return objChild;
}

function GetDaylightSavingStartMonthComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_Start_Month_Combobox");
    }
    return objChild;
}

function GetDaylightSavingEndMonthComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_End_Month_Combobox");
    }
    return objChild;
}

function GetDaylightSavingStartDayComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_Start_Day_Combobox");
    }
    return objChild;
}

function GetDaylightSavingEndDayComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_End_Day_Combobox");
    }
    return objChild;
}

function GetDaylightSavingStartOccurenceComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_Start_Occurence_Combobox");
    }
    return objChild;
}

function GetDaylightSavingEndOccurenceComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_End_Occurence_Combobox");
    }
    return objChild;
}

function GetDaylightSavingStartHourComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_Start_Hour_Combobox");
    }
    return objChild;
}

function GetDaylightSavingEndHourComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetNTSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"NTS","Obj_Daylight_Saving_End_Hour_Combobox");
    }
    return objChild;
}

function GetDtmOnlineActionWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"OnlineAction","DTMOnlineActionWnd");
    }
    return objChild;
}

function GetOnlineActionTreeView()
{
    objChild = null; objParent = null; 
    objParent = GetDtmOnlineActionWindowObject();
    if(objParent != null)
    {
        objParent = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_Splitter_Wnd");
        if(objParent != null)
        {
            objParent = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_Splitter_Wnd");
            if(objParent != null)
            {
                objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTMConfig_ConfigTreeview");
            }
        }
    }
    return objChild;
}

function GetOnlineActionPingButton()
{
    objChild = null; objParent = null; 
    objParent = GetDtmOnlineActionWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "OnlineAction", "Obj_Online_Action_Ping_Button");
    }
    return objChild;
}

function GetOnlineActionPingListview()
{
    objChild = null; objParent = null; 
    objParent = GetDtmOnlineActionWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "OnlineAction", "Obj_Online_Action_Listview");
    }
    return objChild;
}

function GetMEMWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"MEM","Obj_MEM_Wnd");
    }
    return objChild;
}

function GetMEMIPAddressEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetMEMWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "MEM", "Obj_MEM_IP_Address_Edit");
    }
    return objChild;
}

function GetMEMSendButton()
{
    objChild = null; objParent = null; 
    objParent = GetMEMWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "MEM", "Obj_MEM_Send_Button");
    }
    return objChild;
}

function GetMEMResponseEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetMEMWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "MEM", "Obj_MEM_Response_Edit");
    }
    return objChild;
}

function GetQoSEIPIODSPMDSCPEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetQoSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_EIP_IODSPM_DSCP_Edit");
    }
    return objChild;
}

function GetQoSEIPEMDSCPEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetQoSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_EIP_EM_DSCP_Edit");
    }
    return objChild;
}

function GetQoSModbusIOMDSCPEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetQoSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_Modbus_IODSPM_DSCP_Edit");
    }
    return objChild;
}

function GetQoSModbusEMDSCPEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetQoSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_Modbus_EM_DSCP_Edit");
    }
    return objChild;
}

function GetQoSNTPMDSCPEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetQoSConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"QoS","Obj_QoS_NTPM_DSCP_Edit");
    }
    return objChild;
}

function GetServicePortConfigWindow()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ServicePort","Obj_Access_Port_Conf_GrpBox");
        if(objChild != null)
        {
            return objChild["Parent"]["Parent"];
        }
    }
    return null;
}

function GetServiceAccessPortConfigGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicePortConfigWindow();
    if(objParent != null)
    {
        objChild = objParent["FindAllChildren"](["ObjectType","WndClass"], ["Table","VSFlexGrid8N"], 10);
        objChild = (new VBArray(objChild))["toArray"]();
    }
    for(var i=0;i<objChild.length;i++)
    {
        if(objChild[i]["Row"]("Row 0")["Cell"]("Service Port Number")["Exists"] == true)
            objChild = objChild[i];
    }
    return objChild;
}

function GetServicePortMirroringConfigGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicePortConfigWindow();
    if(objParent != null)
    {
        objChild = objParent["FindAllChildren"](["ObjectType","WndClass"], ["Table","VSFlexGrid8N"], 10);
        objChild = (new VBArray(objChild))["toArray"]();
    }
    for(var i=0;i<objChild.length;i++)
    {
        if(objChild[i]["Row"]("Row 0")["Cell"]("Source Port(s)")["Exists"] == true)
            objChild = objChild[i];
    }
    return objChild;
}

function GetServicePortAPCGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicePortConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ServicePort","Obj_Access_Port_Conf_GrpBox");
    }
    return objChild;
}

function GetServicePortPMCGrpboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicePortConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ServicePort","Obj_Port_Mirroring_Conf_GrpBox");
    }
    return objChild;
}

function GetServicePortModeComboboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetServicePortConfigWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"ServicePort","Obj_Service_Port_Mode_Combobox");
    }
    return objChild;
}

function GetHARTFunctionalAreaTreeviewObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Treeview");
    }
    return objChild;
}

function GetHARTRackIDCmbboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Rackid_Cmbbox");
    }
    return objChild;
}

function GetHARTRackIDCraCmbboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Cra_Cmbbox");
    }
    return objChild;
}

function GetHARTSlotNoEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SlotNo_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTDeviceNameEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Devicename_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTMasterModeObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_MasterMode_Cmbbox");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_comboBox");
        }
    }
    return objChild;
}

function GetHARTTagEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Tag_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTLongTagEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_LongTag_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTDescriptionEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Description_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTMessageEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Message_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTPollingAddressEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_polling_Address_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTAddressTableGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_AddressTable_Grid");
    }
    return objChild;
}

function GetHARTAddressTableResetButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_AddressTable_Reset_Button");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_button");
        }
    }
    return objChild;
}

function GetHARTInstrumentStatusGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_InstrumentStatus_Grid");
    }
    return objChild;
}

function GetInstallShieldPMModifyRdBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Program_Maintenance_Modify_RdButton");
    }
    return objChild;
}

function GetInstallShieldPMRepairRdBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Program_Maintenance_Repair_RdButton");
    }
    return objChild;
}

function GetInstallShieldPMRemoveRdBtnObject()
{
    objChild = null; objParent = null; 
    objParent = GetInstallShieldWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Installation", "Obj_Program_Maintenance_Remove_RdButton");
    }
    return objChild;
}

function GetHARTProcessDataInputGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_ProcessData_Input_Grid");
    }
    return objChild;
}

function GetHARTParamConfigGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Param_Config_Grid");
    }
    return objChild;
}

function GetHARTScanCommandObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Scan_Command_Cmbbox");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_comboBox");
        }
    }
    return objChild;
}

function GetHARTScanModeObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Scan_Mode_Cmbbox");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_comboBox");
        }
    }
    return objChild;
}

function GetHARTSearchAlgorithmObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Search_Algorithm_Cmbbox");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_comboBox");
        }
    }
    return objChild;
}

function GetHARTCommRetryCountEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Comm_Retry_Count_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTBusyRetryCountEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Busy_Retry_Count_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTParamConfigRestoreButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Param_Config_Restrore_Button");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_button");
        }
    }
    return objChild;
}

function GetHARTEIPConfigGridObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_EIP_Config_Grid");
    }
    return objChild;
}

function GetHARTEIPRDButtonObject(objName)
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_EIP_"+objName+"_RdButton");
    }
    return objChild;
}

function GetHARTSNMPIPAddrMgr1Object()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_IPAddrMgr1");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_valueControl");
        }
    }
    return objChild;
}

function GetHARTSNMPIPAddrMgr2Object()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_IPAddrMgr2");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_valueControl");
        }
    }
    return objChild;
}

function GetHARTSNMPMgrChkboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_Manager_Chkbox");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("checkBoxCustom");
        }
    }
    return objChild;
}

function GetHARTSNMPEnableTrapChkboxObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_EnableTrap_Chkbox");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("checkBoxCustom");
        }
    }
    return objChild;
}

function GetHARTSNMPLocationEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_Location_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTSNMPContactEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_Contact_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTSNMPSetEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_Set_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTSNMPGetEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_Get_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTSNMPTrapEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_SNMP_Trap_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTProductNameLabelObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_MI_ProductName");
    }
    return objChild;
}

function GetHARTProductIDLabelObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_MI_ProductID");
    }
    return objChild;
}

function GetHARTProductFamilyLabelObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_MI_ProductFamily");
    }
    return objChild;
}

function GetHARTDeviceFamilyLabelObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_MI_DeviceFamily");
    }
    return objChild;
}

function GetHARTDevicePictureObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Device_PictureBox");
    }
    return objChild;
}

function GetHARTDeviceApplicationAreaContainerObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Device_ApplicationArea");
    }
    return objChild;
}

function GetHARTDeviceApplicationAreaObject(objName)
{
    objChild = null; objParent = null; 
    objParent = GetHARTDeviceApplicationAreaContainerObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_"+objName+"_ApplicationArea");
    }
    return objChild;
}

function GetHARTFDRTransferConfirmWndObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "HART", "Obj_FDR_Transfer_ConfirmWnd");
    }
    return objChild;
}

function GetHARTFDRTransferWndYesButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetHARTFDRTransferConfirmWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_ProcessPopup_YesButton");
    }
    return objChild;
}

function GetHARTFDRTransferWndOKButtonObject()
{
    objChild = null; objParent = null; 
    objParent = GetHARTFDRTransferConfirmWndObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "SaveAsWindow", "Obj_ProcessPopup_OK_Button");
    }
    return objChild;
}

function GetHARTSlaveDeviceConfigurationWindowObject()
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","SlaveDTMWindow");
    }
    return objChild;
}

function GetHARTSlaveDeviceFunctionalAreaTreeviewObject()
{
    objChild = null; objParent = null; 
    objParent = GetHARTSlaveDeviceConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Treeview");
    }
    return objChild;
}

function GetHARTNoofCommandsEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_NoofCmds_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTNoofRepliesEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_NoofReplies_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTOtherNoofCommandsEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Other_NoofCmds_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetHARTOtherNoofRepliesEditObject()
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"HART","Obj_DTMConfig_Other_NoofReplies_Edit");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_textBox");
        }
    }
    return objChild;
}

function GetNetworkConfigWindowObject(networkName)
{
    objChild = null; objParent = null; 
    objParent = GetProcessWindow();
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","WndCaption","VisibleOnScreen"],["Afx:*","*"+networkName+"*",true],10);
    }
    return objChild;
}

function GetNetworkConfigTabPageObject(networkName)
{
    objChild = null; objParent = null; 
    objParent = GetNetworkConfigWindowObject(networkName)
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","WndCaption","VisibleOnScreen"],["#32770","IP Configuration",true],10);
    }
    return objChild;
}

function GetNetworkCPUFamilyCmbboxObject(networkName)
{
    objChild = null; objParent = null; 
    objParent = GetNetworkConfigWindowObject(networkName)
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","Index","VisibleOnScreen","wItemList"],["ComboBox",1,true,"*CPU*"],10);
    }
    return objChild;
}

function GetNetworkSecurityTabPageObject(networkName)
{
    objChild = null; objParent = null; 
    objParent = GetNetworkConfigWindowObject(networkName)
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","WndCaption","VisibleOnScreen"],["#32770","Security",true],10);
    }
    return objChild;
}

function GetNetworkFirmwareUpgradeCmbboxObject(networkName)
{
    objChild = null; objParent = null; 
    objParent = GetNetworkSecurityTabPageObject(networkName)
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","Index","VisibleOnScreen"],["ComboBox",2,true],10);
    }
    return objChild;
}

function GetNetworkWebAccessCmbboxObject(networkName)
{
    objChild = null; objParent = null; 
    objParent = GetNetworkSecurityTabPageObject(networkName)
    if(objParent != null)
    {
        objChild = objParent.FindChild(["WndClass","Index","VisibleOnScreen"],["ComboBox",1,true],10);
    }
    return objChild;
}

function GetNewDeviceChooseProfilePopupWindow()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "CXM", "Obj_New_Profile_Wnd");
    }
    return objChild;
}

function GetNewDeviceChooseProfileListView()
{
    objChild = null; objParent = null; 
    objParent = GetNewDeviceChooseProfilePopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMOperation", "Obj_DTMOperation_FieldBusDiscovery_Listview");
    }
    return objChild;
}

function GetNewDeviceChooseProfileOKButton()
{
    objChild = null; objParent = null; 
    objParent = GetNewDeviceChooseProfilePopupWindow();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "Unity", "Obj_OK_Button");
    }
    return objChild;
}

function GetServicesServiceComboboxObject(serviceName)
{
    objChild = null; objParent = null; 
    objParent = GetDTmConfigurationWindowObject();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"Services","Obj_Services_"+serviceName+"_Cmbbox");
    }
    return objChild;
}

function GetCXMTabControlObject(dtmName)
{
    objChild = null; objParent = null; 
    objParent = GetFDTDTMConfigWindowObject(dtmName);
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"CXM","Obj_CXM_DTM_TabControl");
    }
    return objChild;
}

function GetCXMGridControlObject(dtmName)
{
    objChild = null; objParent = null; 
    objParent = GetCXMTabControlObject(dtmName);
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"CXM","Obj_CXM_DTM_Diagnosis_GridControl");
    }
    return objChild;
}

function GetCXMResetButtonObject(dtmName)
{
    objChild = null; objParent = null; 
    objParent = GetCXMTabControlObject(dtmName);
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent,"CXM","Obj_CXM_Reset_Button");
        if(objChild != null)
        {
            objChild = objChild["WinFormsObject"]("_button");
        }
    }
    return objChild;
}

function GetAddProtocolobject(objParent)
{
    objChild = null; 
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "AddDevice", "Obj_AddDeviceProtocol");
    }
    return objChild;
}


function GetDTMSNTPServerGrpBox()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_SNTPServerGrpBox");
    }
    return objChild;
}

function GetDTMTimeZoneGrpBox()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_TimeZoneGrpBox");
    }
    return objChild;
}

function GetDTMTimeToCPUGrpBox()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_TimeToCPUGrpBox");
    }
    return objChild;
}

function GetDTMConfigNavigationArea()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "Obj_DTM_Configuration_NavigationArea");
    }
    return objChild;
}
function GetRegeditArea()
{
    objChild = null; objParent = null; 
    objParent = GetRegeditProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "RegeditWnd", "Obj_Regedit_Area");
    }
    return objChild;
}
function GetDTMSNMPIPAddrManagerGrpBox()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "objDTMConfig_SNMP_IPAddrManagerGRPBX");
    }
    return objChild;
}

function GetDTMSNMPAgentGrpBox()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "objDTMConfig_SNMP_AgentGRPBX");
    }
    return objChild;
}

function GetDTMSNMPCommunityGrpBox()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "objDTMConfig_SNMP_CommunityGRPBX");
    }
    return objChild;
}

function GetDTMSNMPSecurityGrpBox()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "objDTMConfig_SNMP_SecurityGRPBX");
    }
    return objChild;
}

function GetDTMChannelConfigTabAppView()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "ObjChannelConfigTabView");
    }
    return objChild;
}

function GetOutstationChannelPageTab()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "ObjOutstationChannelPageTab");
    }
    return objChild;
}


function GetDTMModuleInfoPage()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMConfiguration", "obj_ModuleInfoPage");
    }
    return objChild;
}