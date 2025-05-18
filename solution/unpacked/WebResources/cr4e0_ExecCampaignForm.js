var UC_EC = window.UC_EC || {};
(function () {
    
    // Define global variables
    //var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    //var message = currentUserName + ": Your JavaScript code in action!";
    // Code to run in the form OnLoad event
    this.formOnLoad = function (executionContext) {

        console.log('formOnLoad');
        var formContext = executionContext.getFormContext();

        var addressbloc = formContext.getAttribute("univcan_letteraddressbloc");
        if(addressbloc.getValue() == null){
            addressbloc.setValue("[prefix] [fullname], [suffix]\n[jobtitle]\n[organization]\n[streetaddress]\n[city], [stateorprovince]  [postalcode]");  
        }
        var salutation = formContext.getAttribute("univcan_lettersalutation");
        if(salutation.getValue() == null){
            salutation.setValue("[Salutation]");   
        }
        var univcan_emailbody = formContext.getAttribute("univcan_emailbody");
        if(univcan_emailbody.getValue() == null){
            univcan_emailbody.setValue("[Salutation],\n\nPlease find file attached.\n\nSincerily\n\n");   
        }

    }

     this.setMailMergeTabVisibility = function(formContext) {
        
        var ctype = formContext.getAttribute("univcan_campaigntype").getText();
        console.log(ctype);
       
        var tab_mailmerge = formContext.ui.tabs.get('tab_mailmerge');
        var section_templates = formContext.ui.tabs.get('tab_general').sections.get('section_templates');
       
        switch (ctype) {
         case 'Mail Merge':
            tab_mailmerge.setVisible(true);
           // section_templates.setVisible(true);
            break;
        case 'Manual':
            tab_mailmerge.setVisible(false);
           // section_templates.setVisible(false);
            break;
        default:
            tab_mailmerge.setVisible(false);
           // section_templates.setVisible(false);
        }

    }
    
    // Code to run in the column OnChange event 
    this.attributeOnChange = function (executionContext) {
        var formContext = executionContext.getFormContext();
        this.setMailMergeTabVisibility(formContext);
    }

    // Code to run in the form OnSave event 
    this.formOnSave = function () {
        console.log('OnSave');

        // Display an alert dialog
        //Xrm.Navigation.openAlertDialog({ text: "Record saved." });
    }

    // modal dialog test
    // this.onECSelectOfRecord = function (executionContext) {
    //         console.log(onECSelectOfRecord);
    //     var formContext = executionContext.getFormContext();

    //     // When we select a line, lock its attributes to ensure no changes can be made.
    //     lockGridColumns(executionContext);
    //     // Retrieve the record that was selected
    //     var selectedRecord = formContext.data.entity;
    //     // Open the selected record in a popup
    //     openRecordInPopup(selectedRecord);
    //     // We need to refresh the subgrid/parent grid to ensure we deselect the element to stop weird behaviours with the opening.
    //     Xrm.Utility.refreshParentGrid(selectedRecord.getEntityReference());
    // }

    
    // function openRecordInPopup(selectedRecord) {
    //     var Id = selectedRecord.getId();
    //     var pageInput = {
    //         pageType: "entityrecord",
    //         entityName: selectedRecord.getEntityName(),
    //         entityId: Id
    //     };
    //     var navigationOptions = {
    //         target: 2,
    //         height: { value: 100, unit: "%" },
    //         width: { value: 100, unit: "%" },
    //         position: 1
    //     };
    //     Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(function success() { }, function error() { });
    // }

    // function lockGridColumns(executionContext) {
    //     executionContext.getFormContext().data.entity.attributes.forEach(function (attr) {
    //         attr.controls.forEach(function (c) {
    //             c.setDisabled(true);
    //         });
    //     });
    // }


}).call(UC_EC);