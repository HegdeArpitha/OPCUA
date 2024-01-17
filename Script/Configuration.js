//USEUNIT DataBase_Related
//USEUNIT FDTCONFIGURATION_PAGE_TC
//USEUNIT OPCUA_FDTCONFIGURATION_PAGE
function GetDTMName_ConfigObj1()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "FDTCONFIGURATION", "Obj_DTMNameConfigObj_Wnd");
    }
    return objChild;
}

function GetDTMName_ConfigObj2()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "FDTCONFIGURATION", "Obj_DTMNameConfigObj_Wnd1");
    }
    return objChild;
}

function GetWindowName_ConfigObj1()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "FDTCONFIGURATION", "Obj_WindowNameConfigObj_Wnd");
    }
    return objChild;
}

function GetWindowName_ConfigObj2()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "FDTCONFIGURATION", "Obj_WindowNameConfigObj_Wnd1");
    }
    return objChild;
}

