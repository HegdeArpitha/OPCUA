﻿//USEUNIT Common_Function
//USEUNIT FDTCONFIGURATION_PAGE_TC
//USEUNIT Groupbox
//USEUNIT ObjectFiles

 var propArray,propValues,level

function GetObjectProperties_FromJSON(page,ObjectName)
{
    try
    {
        var objJson,PropertyName1 ,PropertyName2 ,PropertyValue3,PropertyValue1,PropertyValue2,PropertyName3
        var objectName,level1;
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

function ReadDBJSONData(Page) 
{
    var filepath = aqFileSystem["GetCurrentFolder"]() + "\\TestData\\csvjson.json";
    if (aqFile.Exists(filepath))
    {
      var data = aqFile.ReadWholeTextFile(filepath, aqFile.ctUTF8);
      var TestObj = eval("(" + data + ")");
      return TestObj;
    }
}

//Reading Json TestData
function ReadJson(FileName)
{
  try
  {
      var path, JSonFilepath, data, TestObj
      //All Json test data files are maintained under Test Data folder under the project
      JSonFilepath = aqFileSystem["GetCurrentFolder"]() + "\\TestData\\JSON_Files\\" +FileName;
      //Check for given Json file exists
      if(aqFile.Exists(JSonFilepath))
      {
          Log.Message("The test data file "+FileName+" is present") 
          //The test data file in Json formate is accessed as object
          data = aqFile.ReadWholeTextFile(JSonFilepath, aqFile.ctANSI);
          TestObj = eval("(" + data + ")") ;
           return TestObj;
     }
     else
     {
        Log.Error("The test data file tried to access,"+FileName+" is not found!")
        return null;
     }
  }
  catch(e)
  { 
     Log.Error("An error occured in ReadJson") 
  }
}