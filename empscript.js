var selectedRow = null;

function onSubmit() {
     
    alert("record successfully submitted");

        var formData = readData();
        if (selectedRow == null)
            NewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }

function readData() {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["Employeeid"] = document.getElementById("Employeeid").value;
    formData["startdate"] = document.getElementById("startdate").value;
    formData["designation"] = document.getElementById("designation").value;
    formData["department"] = document.getElementById("department").value;    
    formData["enddate"] = document.getElementById("enddate").value;
    formData["martialstatus"] = document.getElementById("martialstatus").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["reportingmanager"] = document.getElementById("reportingmanager").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["bloodgroup"] = document.getElementById("bloodgroup").value;
    formData["address"] = document.getElementById("address").value;
    


    
    return formData;
}

function empid(){
    var Employeeid = parseFloat(document.getElementById("Employeeid").value);     
    

    if(isNaN(Employeeid))
    {
        alert("Enter the valid input in numbers");
    }
                          

}

function NewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Employeeid;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.startdate;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML =  data.designation;
    
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.department;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.enddate;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.martialstatus;

    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.dob;

    cell10 = newRow.insertCell(9);
    cell10.innerHTML =  data.reportingmanager;

    cell11 = newRow.insertCell(10);
    cell11.innerHTML =  data.gender;

    cell12= newRow.insertCell(11);
    cell12.innerHTML =  data.bloodgroup;

    cell13 = newRow.insertCell(12);
    cell13.innerHTML =  data.address;

    cell13 = newRow.insertCell(13);
    cell13.innerHTML = `<button class = "post" onClick="onEdit(this)">Edit</button>
                        <button class = "post" onClick="onDelete(this)">Delete</button>`;
                       
}

function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("Employeeid").value = "";
    document.getElementById("startdate").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("department").value = "";   
    document.getElementById("enddate").value = "";
    document.getElementById("martialstatus").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("reportingmanager").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("bloodgroup").value = "";
    document.getElementById("address").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Employeeid").value = selectedRow.cells[2].innerHTML;
    document.getElementById("startdate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[4].innerHTML;
    document.getElementById("department").value = selectedRow.cells[5].innerHTML;
    document.getElementById("enddate").value = selectedRow.cells[6].innerHTML;
    document.getElementById("martialstatus").value = selectedRow.cells[7].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[8].innerHTML;
    document.getElementById("reportingmanager").value = selectedRow.cells[9].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[10].innerHTML;
    document.getElementById("bloodgroup").value = selectedRow.cells[11].innerHTML;
    document.getElementById("address").value = selectedRow.cells[12].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.Employeeid;
    selectedRow.cells[3].innerHTML = formData.startdate;
    selectedRow.cells[4].innerHTML = formData.designation;
    selectedRow.cells[5].innerHTML = formData.department;
    selectedRow.cells[6].innerHTML = formData.enddate;
    selectedRow.cells[7].innerHTML = formData.martialstatus;
    selectedRow.cells[8].innerHTML = formData.dob;
    selectedRow.cells[9].innerHTML = formData.reportingmanager;
    selectedRow.cells[10].innerHTML = formData.gender;
    selectedRow.cells[11].innerHTML = formData.bloodgroup;
    selectedRow.cells[12].innerHTML = formData.address;
   
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

$(document).ready(function(){
    $('.search').on('keyup',function(){
        var searchTerm = $(this).val().toLowerCase();
        $('#employeeList tbody tr').each(function(){
            var lineStr = $(this).text().toLowerCase();
            if(lineStr.indexOf(searchTerm) === -1){
                $(this).hide();
            }else{
                $(this).show();
            }
        });
    });
});