function onload(executionContext) {
    console.log("JavaScript file log");

    // Get the form context
    var formContext = executionContext.getFormContext();

    // Hide the business process flow
    formContext.ui.process.setVisible(false);

    // Get the entity name value
    var entityNameValue = formContext.getAttribute("cr4e0_entityname")?.getValue();

var formTypeValue =formContext.getAttribute("cr4e0_formtype").getValue();
 console.log("Form Type Value: " + formTypeValue);


// Control tab visibility based on formType
    var internalReviewTab = formContext.ui.tabs.get("Internal Review");
    var internalReviewSPCTab = formContext.ui.tabs.get("Internal Review SPC");
    var internalReviewNewTab = formContext.ui.tabs.get("Internal Review New");

// Check if tabs exist
    if (internalReviewTab && internalReviewSPCTab && internalReviewNewTab) {
        if (formTypeValue === 860540000) {
            // Form Type is new
            console.log("Form Type is new (860540000). Showing 'Internal Review New' tab.");
            internalReviewNewTab.setVisible(true);
            internalReviewTab.setVisible(false);
            internalReviewSPCTab.setVisible(false);
        }
else if (formTypeValue === 860540001) {
            // Form Type is old
            console.log("Form Type is old (860540001). Showing 'Internal Review' and 'Internal Review SPC' tabs.");
            internalReviewNewTab.setVisible(false);
            internalReviewTab.setVisible(true);
            internalReviewSPCTab.setVisible(true);

// Additional logic for entityNameValue
            var entityNameValue = formContext.getAttribute("cr4e0_entityname").getValue();
if(entityNameValue != null){
        if(entityNameValue == 860540023 || entityNameValue == 860540022 || entityNameValue == 860540004 || entityNameValue == 860540024 || entityNameValue == 860540026 || entityNameValue == 860540000 || entityNameValue == 860540032 || entityNameValue == 100000001 || entityNameValue == 100000000){
            formContext.ui.tabs.get('Internal Review').setVisible(false);
            formContext.ui.tabs.get('Internal Review SPC').setVisible(true);
        }else{
            formContext.ui.tabs.get('Internal Review').setVisible(true);
            formContext.ui.tabs.get('Internal Review SPC').setVisible(false);
        }
}

        }

else {
        console.error("One or more tabs not found.");
    }
}

// Handle program type visibility logic
    var programTypeValue = formContext.getAttribute("cr4e0_iscontract")?.getValue();
  
    // Privacy tab visibility based on program type
    var privacyTab = formContext.ui.tabs.get("Privacy");
    if (privacyTab) {
        if (programTypeValue === 860540003 || programTypeValue === 860540001) {
            privacyTab.setVisible(true);
        } else {
            privacyTab.setVisible(false);
        }
    } else {
        console.error("Privacy tab not found.");
    }

}