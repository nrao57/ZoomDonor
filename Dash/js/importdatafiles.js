//Import Files into dashboard 

AWS.config.update({
    region: "us-east-1", accessKeyId: "AKIAIMQOAIYIJ3CCQE6A", secretAccessKey: "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"
});

    var docClient = new AWS.DynamoDB.DocumentClient();

    //import donors into dynamodb from uploaded file
    function processFile(evt) {
        var file = evt.target.files[0];
        if (file) {
            var r = new FileReader();
            r.onload = function(e) {
                console.log("onload ran")
                var contents = e.target.result;
                var allDonors = JSON.parse(contents);
                allDonors.forEach(function (donor) {
                    addDonor(donor)
                });
        };
        r.readAsText(file);
        } else {
            alert("Could not read data file");
        }
    }


    function addDonor(donor){
        console.log("addDonor ran")
        var params = {
            TableName: "Donors",
            Item: {
                "projectid":donor.projectid.toString(),
                "info": {
                    "date_posted": donor.date_posted,
                    "grade_level": donor.grade_level,
                    "resource_type": donor.resource_type,
                    "funding_status": donor.funding_status,
                    "poverty_level": donor.poverty_level,
                    "school_state": donor.school_state,
                    "total_donations": donor.total_donations,
                    "school_state": donor.school_state
                }
            }
        };          

        //add item to database
        docClient.put(params, function (err, data) {
            if (err) console.log(err);
            else console.log(data);
        });
    };