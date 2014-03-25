//initializing a test DB named tada
Parse.initialize("WGj60IjSG3BkThHlb8VpXVYGqbvaSIQ6mXh9NQEU", "LYMRAuQzkCO6xs9bikggjgEOMf1FFmpCB7hYY7Zz");

function signUp(){
    var su_email = document.getElementById('suemail').value;
    var su_utaID = document.getElementById('suutaid').value;
    var su_name = document.getElementById('suname').value;
    
    if(su_name==""){
        alert("First name is required for passage");
        
    }
    
    if(su_utaID=="" || su_utaID.length != 10){
        alert("UTA ID is required for passage");
        
    }
    
    var atpos=su_email.indexOf("@");
    var dotpos=su_email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=su_email.length){
        alert("Not a valid e-mail address");
    }
    parse_dat_data(su_name,su_utaID,su_email);
}

function parse_dat_data(su_name,su_utaID,su_email){
    

    //creates a parse object. TestObject is a table in the tada DB
    var Table = Parse.Object.extend("signup");
    var table = new Table();

        //key and value being sent to DB
    alert(su_utaID);
    table.set("Name", su_name);
    table.set("UTA_ID", su_utaID);
    table.set("Email", su_email);
    
    console.log(table);
    
    table.save(null,{
           //success function callback
           success: function(table) {
               //if key and value made it to db, show a message to user 
              alert("yay! it worked");
              location.reload(true);

            },
            error: function(table, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and description.
                console.log(error);
                alert('Failed to create new object, with error code: ' + error.description);
            }}
    );
}