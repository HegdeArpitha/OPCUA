//USEUNIT DataBase_Related
//USEUNIT FDTCONFIGURATION_PAGE_TC
//USEUNIT OPCUA_FDTCONFIGURATION_PAGE

function GetCPU_DTMBrowser()
{
    objChild = null; objParent = null; 
    objParent = GetProcess();
    if(objParent != null)
    {
        objChild = GetRecognitionObject(objParent, "DTMBrowser", "Obj_DTMBrowser_CPUName");
    }
    return objChild;
}