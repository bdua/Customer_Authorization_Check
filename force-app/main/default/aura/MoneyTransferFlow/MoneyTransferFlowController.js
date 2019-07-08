/*
 * Find the component whose aura:id is "flowData"
 * Start the flow. Reference the flow's Unique Name and inputVariables
 */ 

({
    init : function(component, event, helper) {
        var flow = component.find("flowData");
        var inputVariables = 
            [
                {
                    name : "sVarRecordId", 
                    type : "SObject", 
                    value : 
                    { 
                        "Id" :  component.get("v.sVarRecordId")
                    }
                },
                {
                    name : "sVarWorkflowId", 
                    type : "String", 
                    value : component.get("v.sVarWorkflowId")
                }
            ];
        flow.startFlow("Money_Transfer_Flow",inputVariables);
    }
})