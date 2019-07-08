/*
 * The controller uses openSubtab() and sets the following values:
 * c__sVarRecordId to recordId value
 * c__sVarWorkflowId to workflowId value
 * Optionally, set the setTabLabel & setTabIcon
 */ 

({
    doInit : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        var TransferProcessPageRef = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__MoneyTransferFlow'
            },
            state: {
                "c__sVarRecordId": component.get("v.recordId"),
                "c__sVarWorkflowId": component.get("v.workflowId")
            }
        };
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            return workspaceAPI.openSubtab({
                parentTabId: response.tabId,
                pageReference: TransferProcessPageRef,
                focus: true
            }); 
        }).then(function(subTabId) {
            $A.get("e.force:closeQuickAction").fire();  
            workspaceAPI.setTabLabel({tabId: subTabId,label: "Money Transfer Flow"});
            workspaceAPI.setTabIcon({tabId: subTabId,icon: "standard:partner_fund_allocation",iconAlt: "Focused Tab"}); 
            workspaceAPI.focusTab({tabId : subTabId});
        }).catch(function(error) {
            console.log("error");
        });
    }
})